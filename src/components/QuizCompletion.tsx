
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface QuizCompletionProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onBackToLobby: () => void;
}

const QuizCompletion: React.FC<QuizCompletionProps> = ({
  score,
  totalQuestions,
  onRestart,
  onBackToLobby,
}) => (
  <Card className="quiz-card">
    <CardHeader>
      <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-4xl font-bold mb-4">
        {score}/{totalQuestions}
      </p>
      <p className="mb-8">
        {score === totalQuestions
          ? "Perfect! You're a networking expert!"
          : score > totalQuestions / 2
          ? "Good job! You know your networking concepts well!"
          : "Keep learning! Networking concepts take time to master."}
      </p>
      <div className="flex justify-center space-x-4">
        <Button variant="outline" onClick={onBackToLobby}>
          Back to Lobby
        </Button>
        <Button onClick={onRestart} className="bg-primary hover:bg-primary/90">
          Restart Quiz
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default QuizCompletion;
