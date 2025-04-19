
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
      <div className="text-center text-white max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
          Network<span className="text-yellow-300">Quiz</span>
        </h1>
        
        <p className="text-xl mb-8">
          Test your networking knowledge in this multiplayer quiz game. 
          Create rooms, invite friends, and see who knows their TCP from their UDP!
        </p>
        
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/lobby')}
            size="lg"
            className="text-lg bg-white text-primary hover:bg-white/90 shadow-lg px-8 py-6"
          >
            Start Quiz
          </Button>
          
          <p className="text-sm opacity-80 mt-8">
            Learn networking concepts while competing with friends in real-time!
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 text-center text-white/60 text-sm">
        Challenge your networking knowledge with friends or learn solo!
      </div>
    </div>
  );
};

export default Index;
