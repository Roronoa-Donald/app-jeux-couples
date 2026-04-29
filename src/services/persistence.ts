import AsyncStorage from "@react-native-async-storage/async-storage";
import { AnswerRecord, ProgressState } from "../types";

const ANSWERS_KEY = "rdreponses:answers";
const PROGRESS_KEY = "rdreponses:progress";
const PENDING_KEY = "rdreponses:pending";

const readJson = async <T,>(key: string, fallback: T): Promise<T> => {
  try {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) {
      return fallback;
    }
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeJson = async (key: string, value: unknown) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const loadAnswers = async () => readJson<AnswerRecord[]>(ANSWERS_KEY, []);

export const appendAnswer = async (answer: AnswerRecord) => {
  const list = await loadAnswers();
  list.push(answer);
  await writeJson(ANSWERS_KEY, list);
};

export const loadProgress = async () =>
  readJson<ProgressState | null>(PROGRESS_KEY, null);

export const saveProgress = async (progress: ProgressState) =>
  writeJson(PROGRESS_KEY, progress);

export const loadPending = async () =>
  readJson<AnswerRecord[]>(PENDING_KEY, []);

export const queuePending = async (answer: AnswerRecord) => {
  const list = await loadPending();
  list.push(answer);
  await writeJson(PENDING_KEY, list);
};

export const flushPending = async (
  sendFn: (answer: AnswerRecord) => Promise<boolean>
) => {
  const pending = await loadPending();
  if (pending.length === 0) {
    return;
  }

  const remaining: AnswerRecord[] = [];
  for (const answer of pending) {
    const ok = await sendFn(answer);
    if (!ok) {
      remaining.push(answer);
    }
  }

  await writeJson(PENDING_KEY, remaining);
};

export const resetAll = async () => {
  await AsyncStorage.multiRemove([ANSWERS_KEY, PROGRESS_KEY, PENDING_KEY]);
};
