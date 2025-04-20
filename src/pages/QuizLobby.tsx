
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import JoinRoomForm from '@/components/JoinRoomForm';
import CreateRoomForm from '@/components/CreateRoomForm';
import ScoreBoard from '@/components/ScoreBoard';

const QuizLobby = () => {
  const [activeTab, setActiveTab] = useState("join");
  const navigate = useNavigate();

  // Get all room codes
  const allRooms = JSON.parse(sessionStorage.getItem('quizRooms') || '[]');
  
  // Combine scores from all rooms
  const allScores = allRooms.reduce((acc: any[], roomCode: string) => {
    const roomScores = JSON.parse(sessionStorage.getItem(`scores_${roomCode}`) || '[]');
    return [...acc, ...roomScores];
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700 p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-4 items-start justify-center">
        <Card className="w-full md:w-1/2 max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Quiz Lobby</CardTitle>
            <CardDescription className="text-center">
              Join an existing quiz room or create your own
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="join" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="join">Join Quiz</TabsTrigger>
                <TabsTrigger value="create">Create Quiz</TabsTrigger>
              </TabsList>
              
              <TabsContent value="join">
                <JoinRoomForm />
              </TabsContent>
              
              <TabsContent value="create">
                <CreateRoomForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="w-full md:w-1/2 max-w-md">
          <ScoreBoard scores={allScores} />
        </div>
      </div>
      
      <Button 
        variant="link" 
        onClick={() => navigate("/")} 
        className="mt-4 text-white hover:text-white/90"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default QuizLobby;
