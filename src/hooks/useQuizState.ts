
import { useState, useRef, useCallback } from "react";
import { networkingQuizQuestions, Question } from "@/lib/quizData";

const TOTAL_QUESTIONS = 5;

export interface UseQuizStateReturn {
  questions: Question[];
  currentQuestionIndex: number;
  score: number;
  showAnswer: boolean;
  quizEnded: boolean;
  answers: number[];
  setShowAnswer: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setQuizEnded: React.Dispatch<React.SetStateAction<boolean>>;
  setAnswers: React.Dispatch<React.SetStateAction<number[]>>;
  handleRestartQuiz: () => void;
  autoAdvanceTimer: React.MutableRefObject<NodeJS.Timeout | null>;
}

export default function useQuizState(): UseQuizStateReturn {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const autoAdvanceTimer = useRef<NodeJS.Timeout | null>(null);

  // Select 5 random questions when the hook is first used
  const [questions] = useState<Question[]>(() => {
    const shuffled = [...networkingQuizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, TOTAL_QUESTIONS);
  });

  const handleRestartQuiz = useCallback(() => {
    if (autoAdvanceTimer.current) {
      clearTimeout(autoAdvanceTimer.current);
      autoAdvanceTimer.current = null;
    }
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowAnswer(false);
    setQuizEnded(false);
    setAnswers([]);
  }, []);

  return {
    questions,
    currentQuestionIndex,
    score,
    showAnswer,
    quizEnded,
    answers,
    setShowAnswer,
    setCurrentQuestionIndex,
    setScore,
    setQuizEnded,
    setAnswers,
    handleRestartQuiz,
    autoAdvanceTimer,
  };
}
