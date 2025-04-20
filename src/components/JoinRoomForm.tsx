
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const JoinRoomForm = () => {
  const [roomCode, setRoomCode] = useState('');
  const [nickname, setNickname] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleJoinRoom = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!roomCode.trim()) {
      toast({
        title: "Room code required",
        description: "Please enter a valid room code to join.",
        variant: "destructive"
      });
      return;
    }

    if (!nickname.trim()) {
      toast({
        title: "Nickname required",
        description: "Please enter a nickname to join the game.",
        variant: "destructive"
      });
      return;
    }

    // Get existing rooms from sessionStorage
    const existingRooms = JSON.parse(sessionStorage.getItem('quizRooms') || '[]');
    
    // Check if room exists
    if (!existingRooms.includes(roomCode)) {
      toast({
        title: "Invalid room",
        description: "This room does not exist. Please check the code and try again.",
        variant: "destructive"
      });
      return;
    }

    // Store user info in session storage
    sessionStorage.setItem('playerName', nickname);
    sessionStorage.setItem('roomCode', roomCode);
    
    // Initialize player score in the room's scoreboard
    const roomScores = JSON.parse(sessionStorage.getItem(`scores_${roomCode}`) || '[]');
    if (!roomScores.some((score: any) => score.name === nickname)) {
      roomScores.push({ name: nickname, score: 0 });
      sessionStorage.setItem(`scores_${roomCode}`, JSON.stringify(roomScores));
    }
    
    // Navigate to the quiz with the room code as param
    navigate(`/quiz?room=${roomCode}`);
  };

  return (
    <form onSubmit={handleJoinRoom} className="space-y-4">
      <div>
        <Label htmlFor="roomCode">Room Code</Label>
        <Input 
          id="roomCode"
          placeholder="Enter 6-digit room code" 
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          maxLength={6}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="nickname">Your Nickname</Label>
        <Input 
          id="nickname"
          placeholder="Enter your nickname" 
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          maxLength={20}
          className="mt-1"
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90"
      >
        Join Quiz Room
      </Button>
    </form>
  );
};

export default JoinRoomForm;
