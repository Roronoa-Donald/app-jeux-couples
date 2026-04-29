import cors from "cors";
import crypto from "crypto";
import express from "express";
import { pool } from "./db";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors());
app.use(express.json({ limit: "1mb" }));

const asyncHandler =
  (
    handler: (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction
    ) => Promise<void>
  ) =>
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    handler(req, res, next).catch(next);
  };

const toNumber = (value: unknown) => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? 0 : parsed;
};

type AdminUserRow = {
  user_id: string;
  name: string;
  answered_count: number | string;
  last_session_id: string | null;
};

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post(
  "/sessions",
  asyncHandler(async (req, res) => {
    const { user_id, person_name, session_id, started_at } = req.body || {};
    if (!user_id || !person_name || !session_id || !started_at) {
      res.status(400).json({ error: "missing_fields" });
      return;
    }

    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query(
        "INSERT INTO users (user_id, display_name) VALUES ($1, $2) ON CONFLICT (user_id) DO UPDATE SET display_name = EXCLUDED.display_name",
        [user_id, person_name]
      );
      await client.query(
        "INSERT INTO sessions (session_id, user_id, started_at) VALUES ($1, $2, $3) ON CONFLICT (session_id) DO UPDATE SET user_id = EXCLUDED.user_id, started_at = EXCLUDED.started_at",
        [session_id, user_id, started_at]
      );
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }

    res.json({ session_id });
  })
);

app.get(
  "/sessions/:id",
  asyncHandler(async (req, res) => {
    const sessionId = req.params.id;
    const { rows } = await pool.query(
      "SELECT session_id, user_id, started_at, ended_at, total_active_ms FROM sessions WHERE session_id = $1",
      [sessionId]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: "not_found" });
      return;
    }

    res.json(rows[0]);
  })
);

app.get(
  "/progress",
  asyncHandler(async (req, res) => {
    const sessionId = String(req.query.session_id || "");
    if (!sessionId) {
      res.status(400).json({ error: "missing_session_id" });
      return;
    }

    const { rows } = await pool.query(
      "SELECT s.session_id, COALESCE(SUM(CASE WHEN a.skipped THEN 0 ELSE 1 END), 0) AS answered_count, MAX(s.total_active_ms) AS total_active_ms FROM sessions s LEFT JOIN answers a ON a.session_id = s.session_id WHERE s.session_id = $1 GROUP BY s.session_id",
      [sessionId]
    );

    if (rows.length === 0) {
      res.status(404).json({ error: "not_found" });
      return;
    }

    res.json({
      answered_count: toNumber(rows[0].answered_count),
      total_active_ms: toNumber(rows[0].total_active_ms)
    });
  })
);

app.post(
  "/answers",
  asyncHandler(async (req, res) => {
    const {
      reponse_id,
      user_id,
      session_id,
      question_id,
      section_id,
      question_text,
      selected_option,
      free_text,
      reponse,
      timestamp,
      skipped
    } = req.body || {};

    if (
      !reponse_id ||
      !user_id ||
      !session_id ||
      !question_id ||
      !section_id ||
      !question_text ||
      !timestamp
    ) {
      res.status(400).json({ error: "missing_fields" });
      return;
    }

    if (typeof free_text === "string" && free_text.length > 200) {
      res.status(400).json({ error: "free_text_too_long" });
      return;
    }

    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query(
        "INSERT INTO questions (question_id, section_id, question_text) VALUES ($1, $2, $3) ON CONFLICT (question_id) DO UPDATE SET section_id = EXCLUDED.section_id, question_text = EXCLUDED.question_text",
        [question_id, section_id, question_text]
      );
      await client.query(
        "INSERT INTO answers (reponse_id, user_id, session_id, question_id, section_id, question_text, reponse, selected_option, free_text, skipped, timestamp) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) ON CONFLICT (reponse_id) DO NOTHING",
        [
          reponse_id,
          user_id,
          session_id,
          question_id,
          section_id,
          question_text,
          reponse || "",
          selected_option || null,
          free_text || "",
          Boolean(skipped),
          timestamp
        ]
      );
      await client.query("COMMIT");
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }

    res.status(201).json({ ok: true });
  })
);

app.get(
  "/recap",
  asyncHandler(async (req, res) => {
    const sessionId = String(req.query.session_id || "");
    if (!sessionId) {
      res.status(400).json({ error: "missing_session_id" });
      return;
    }

    const { rows } = await pool.query(
      "SELECT reponse_id, user_id, session_id, question_id, section_id, question_text, reponse, selected_option, free_text, skipped, timestamp FROM answers WHERE session_id = $1 ORDER BY timestamp ASC",
      [sessionId]
    );

    res.json({ answers: rows });
  })
);

app.get(
  "/admin/users",
  asyncHandler(async (_req, res) => {
    const { rows } = await pool.query(
      "SELECT u.user_id, u.display_name AS name, COALESCE(COUNT(a.*) FILTER (WHERE a.skipped = false), 0) AS answered_count, (SELECT s.session_id FROM sessions s WHERE s.user_id = u.user_id ORDER BY s.started_at DESC LIMIT 1) AS last_session_id FROM users u LEFT JOIN answers a ON a.user_id = u.user_id GROUP BY u.user_id, u.display_name ORDER BY u.display_name"
    );

    res.json(
      (rows as AdminUserRow[]).map((row) => ({
        ...row,
        answered_count: toNumber(row.answered_count)
      }))
    );
  })
);

app.get(
  "/admin/users/:id/questions",
  asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const { rows } = await pool.query(
      "SELECT DISTINCT a.question_id, COALESCE(a.question_text, q.question_text) AS question_text FROM answers a LEFT JOIN questions q ON q.question_id = a.question_id WHERE a.user_id = $1 ORDER BY a.question_id",
      [userId]
    );

    res.json(rows);
  })
);

app.post(
  "/admin/pairings",
  asyncHandler(async (req, res) => {
    const { user_id_a, user_id_b, session_id } = req.body || {};
    if (!user_id_a || !user_id_b) {
      res.status(400).json({ error: "missing_fields" });
      return;
    }

    const pairingId =
      typeof crypto.randomUUID === "function"
        ? crypto.randomUUID()
        : `pair-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    await pool.query(
      "INSERT INTO pairings (pairing_id, user_id_a, user_id_b, session_id) VALUES ($1, $2, $3, $4)",
      [pairingId, user_id_a, user_id_b, session_id || null]
    );

    res.status(201).json({ pairing_id: pairingId });
  })
);

app.use((error: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(error);
  res.status(500).json({ error: "server_error" });
});

app.listen(port, () => {
  console.log(`RD Reponses backend running on ${port}`);
});
