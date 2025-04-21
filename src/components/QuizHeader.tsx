
import React from "react";

interface QuizHeaderProps {
  roomCode: string;
  playerName: string;
  isHost: boolean;
  score: number;
  totalQuestions: number;
  currentQuestionIndex: number;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({
  roomCode,
  playerName,
  isHost,
  score,
  totalQuestions,
  currentQuestionIndex,
}) => (
  <div className="flex justify-between items-center mb-6">
    <div>
      <h2 className="font-bold">Room: {roomCode}</h2>
      <p className="text-sm text-gray-500">
        Player: {playerName} {isHost ? "(Host)" : ""}
      </p>
    </div>
    <div className="text-right">
      <p className="font-bold">
        Score: {score}/{totalQuestions}
      </p>
      <p className="text-sm text-gray-500">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
    </div>
  </div>
);

export default QuizHeader;
