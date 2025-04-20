import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { networkingQuizQuestions } from '@/lib/quizData';
import QuizQuestion from '@/components/QuizQuestion';
import { useToast } from '@/components/ui/use-toast';
import ScoreBoard from '@/components/ScoreBoard';

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const searchParams = new URLSearchParams(location.search);
  const roomCode = searchParams.get('room') || '';
  const isHost = searchParams.get('host') === 'true' || sessionStorage.getItem('isHost') === 'true';
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15);
  const [answers, setAnswers] = useState<number[]>([]);
  
  const playerName = sessionStorage.getItem('playerName') || 'Player';
  
  // Select 5 random questions when the component mounts
  const [questions] = useState(() => {
    const shuffled = [...networkingQuizQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 5);
  });

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];
  
  useEffect(() => {
    if (!roomCode) {
      toast({
        title: "Error",
        description: "Invalid room code. Please join through the lobby.",
        variant: "destructive"
      });
      navigate('/lobby');
    }

    const roomScores = JSON.parse(sessionStorage.getItem(`scores_${roomCode}`) || '[]');
    if (!roomScores.some((score: any) => score.name === playerName)) {
      roomScores.push({ name: playerName, score: 0 });
      sessionStorage.setItem(`scores_${roomCode}`, JSON.stringify(roomScores));
    }
  }, [roomCode, navigate, toast, playerName]);

  useEffect(() => {
    if (roomCode && playerName) {
      const roomScores = JSON.parse(sessionStorage.getItem(`scores_${roomCode}`) || '[]');
      const updatedScores = roomScores.map((playerScore: any) => 
        playerScore.name === playerName 
          ? { ...playerScore, score } 
          : playerScore
      );
      sessionStorage.setItem(`scores_${roomCode}`, JSON.stringify(updatedScores));
    }
  }, [score, roomCode, playerName]);

  const getRoomScores = () => {
    return JSON.parse(sessionStorage.getItem(`scores_${roomCode}`) || '[]');
  };

  useEffect(() => {
    if (quizEnded) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setShowAnswer(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentQuestionIndex, quizEnded]);
  
  const handleAnswer = (selectedIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedIndex;
    setAnswers(newAnswers);
    
    if (selectedIndex === currentQuestion.correctAnswer) {
      setScore(score + 1);
      toast({
        title: "Correct!",
        description: "You got it right!",
        variant: "default",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "That's not the right answer.",
        variant: "destructive",
      });
    }
    
    setShowAnswer(true);
    setTimeLeft(0);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowAnswer(false);
      setTimeLeft(15);
    } else {
      setQuizEnded(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowAnswer(false);
    setQuizEnded(false);
    setTimeLeft(15);
    setAnswers([]);
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-bold">Room: {roomCode}</h2>
            <p className="text-sm text-gray-500">Player: {playerName} {isHost ? '(Host)' : ''}</p>
          </div>
          <div className="text-right">
            <p className="font-bold">Score: {score}/{totalQuestions}</p>
            <p className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {totalQuestions}
            </p>
          </div>
        </div>
        
        {!quizEnded ? (
          <div className="space-y-4">
            <QuizQuestion 
              question={currentQuestion}
              onAnswer={handleAnswer}
              timeLeft={timeLeft}
              showAnswer={showAnswer}
              questionIndex={currentQuestionIndex}
            />
            
            {showAnswer && (
              <div className="flex justify-center mt-4">
                <Button 
                  onClick={handleNextQuestion}
                  className="bg-primary hover:bg-primary/90"
                >
                  {currentQuestionIndex < totalQuestions - 1 
                    ? "Next Question" 
                    : "See Results"
                  }
                </Button>
              </div>
            )}
            
            <ScoreBoard scores={getRoomScores()} />
          </div>
        ) : (
          <Card className="quiz-card">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quiz Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-4xl font-bold mb-4">{score}/{totalQuestions}</p>
              <p className="mb-8">
                {score === totalQuestions 
                  ? "Perfect! You're a networking expert!" 
                  : score > totalQuestions / 2 
                    ? "Good job! You know your networking concepts well!"
                    : "Keep learning! Networking concepts take time to master."
                }
              </p>
              
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/lobby')}
                >
                  Back to Lobby
                </Button>
                <Button 
                  onClick={handleRestartQuiz}
                  className="bg-primary hover:bg-primary/90"
                >
                  Restart Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
        
        <Button 
          variant="link" 
          onClick={() => navigate("/lobby")} 
          className="mt-4"
        >
          Leave Quiz
        </Button>
      </div>
    </div>
  );
};

export default Quiz;
