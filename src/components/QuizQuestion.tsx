
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Question } from '@/lib/quizData';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  timeLeft?: number;
  showAnswer?: boolean;
  questionIndex?: number;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  onAnswer,
  timeLeft,
  showAnswer = false,
  questionIndex
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // Reset selectedAnswer when question changes
  useEffect(() => {
    setSelectedAnswer(null);
  }, [question.id, questionIndex]);
  
  const handleSelectAnswer = (index: number) => {
    if (selectedAnswer !== null || showAnswer) return;
    
    setSelectedAnswer(index);
    onAnswer(index);
  };
  
  const getButtonClass = (index: number) => {
    let classes = "answer-button";
    
    if (selectedAnswer === index) {
      classes += " selected";
    }
    
    if (showAnswer) {
      if (index === question.correctAnswer) {
        classes += " correct";
      } else if (selectedAnswer === index) {
        classes += " incorrect";
      }
    }
    
    return classes;
  };

  return (
    <Card className="w-full max-w-2xl quiz-card">
      <CardHeader>
        <CardTitle className="text-xl">
          {question.question}
        </CardTitle>
        {timeLeft !== undefined && (
          <div className="flex justify-end">
            <span className="bg-primary text-white rounded-full px-3 py-1 text-sm">
              Time: {timeLeft}s
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        {question.options.map((option, index) => (
          <Button
            key={index}
            variant="outline"
            className={getButtonClass(index)}
            onClick={() => handleSelectAnswer(index)}
            disabled={showAnswer || selectedAnswer !== null}
          >
            <span className="font-medium mr-2">
              {String.fromCharCode(65 + index)}.
            </span>
            {option}
          </Button>
        ))}
      </CardContent>
      {showAnswer && question.explanation && (
        <CardFooter className="border-t pt-4 mt-2 text-sm">
          <div>
            <span className="font-semibold">Explanation:</span> {question.explanation}
          </div>
        </CardFooter>
      )}
    </Card>
  );
};

export default QuizQuestion;
