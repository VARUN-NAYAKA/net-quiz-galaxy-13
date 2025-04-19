
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

    // In a real app, we'd verify the room code exists here
    // For now, we'll just simulate joining a room
    console.log(`Joining room ${roomCode} as ${nickname}`);
    
    // Store user info in session storage
    sessionStorage.setItem('playerName', nickname);
    sessionStorage.setItem('roomCode', roomCode);
    
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
