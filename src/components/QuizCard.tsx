
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

interface QuizCardProps {
  title: string;
  description: string;
  buttonText: string;
  navigateTo: string;
  icon?: React.ReactNode;
}

const QuizCard: React.FC<QuizCardProps> = ({ 
  title, 
  description, 
  buttonText, 
  navigateTo,
  icon
}) => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md quiz-card">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          {icon && icon}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500">
          Test your networking knowledge and compete with others in real-time!
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => navigate(navigateTo)}
          className="w-full quiz-button bg-primary hover:bg-primary/90"
        >
          {buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
