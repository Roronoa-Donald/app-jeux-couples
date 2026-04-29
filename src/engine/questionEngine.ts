import { AnswerRecord, QuestionInstance } from "../types";
import { QuestionTemplate, SectionTemplate } from "../data/questionBank";

const KEYWORD_SIGNAL_MAP: Record<string, string> = {
  famille: "famille",
  parents: "famille",
  frere: "famille",
  soeur: "famille",
  ami: "amis",
  amis: "amis",
  binome: "duo",
  duo: "duo",
  partenaire: "duo",
  equipe: "equipe",
  sport: "sport",
  foot: "sport",
  course: "sport",
  gym: "sport",
  musique: "musique",
  film: "film",
  serie: "film",
  livre: "lecture",
  lecture: "lecture",
  communication: "communication",
  dialogue: "communication",
  voyage: "voyage",
  voyager: "voyage",
  mer: "voyage",
  montagne: "voyage",
  ville: "voyage",
  jeu: "jeu",
  jeux: "jeu",
  etude: "etudes",
  etudes: "etudes",
  universite: "etudes",
  education: "etudes",
  travail: "travail",
  projet: "projet",
  objectif: "projet",
  objectifs: "projet",
  decision: "decision",
  equite: "equite",
  apprendre: "apprentissage",
  apprentissage: "apprentissage",
  creatif: "creatif",
  creation: "creatif",
  art: "creatif",
  cuisine: "cuisine",
  nature: "nature",
  stress: "stress",
  calme: "calme",
  routine: "routine",
  sommeil: "sommeil",
  honnetete: "honnetete",
  confiance: "confiance"
};

const normalize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

export const extractSignals = (answers: AnswerRecord[]) => {
  const signals = new Set<string>();

  for (const answer of answers) {
    const sourceText = `${answer.reponse} ${answer.free_text}`.trim();
    if (!sourceText) {
      continue;
    }

    const normalized = normalize(sourceText);

    for (const [keyword, signal] of Object.entries(KEYWORD_SIGNAL_MAP)) {
      if (normalized.includes(keyword)) {
        signals.add(signal);
      }
    }
  }

  return signals;
};

const scoreQuestion = (question: QuestionTemplate, signals: Set<string>) => {
  if (!question.signals || question.signals.length === 0) {
    return 0;
  }

  let score = 0;
  for (const signal of question.signals) {
    if (signals.has(signal)) {
      score += 1;
    }
  }
  return score;
};

export const pickNextQuestion = (
  section: SectionTemplate,
  askedQuestionIds: Set<string>,
  signals: Set<string>
): QuestionInstance | null => {
  const remaining = section.pool.filter(
    (question) => !askedQuestionIds.has(question.id)
  );

  if (remaining.length === 0) {
    return null;
  }

  let bestQuestion = remaining[0];
  let bestScore = scoreQuestion(bestQuestion, signals);

  for (const question of remaining.slice(1)) {
    const score = scoreQuestion(question, signals);
    if (score > bestScore) {
      bestQuestion = question;
      bestScore = score;
    }
  }

  return {
    id: bestQuestion.id,
    text: bestQuestion.text,
    sectionId: section.id,
    options: bestQuestion.options
  };
};
