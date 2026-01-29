export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  chapterSource: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: Record<number, string>; // questionId -> optionId
  isFinished: boolean;
}

export type AppView = 'landing' | 'quiz' | 'results' | 'about';