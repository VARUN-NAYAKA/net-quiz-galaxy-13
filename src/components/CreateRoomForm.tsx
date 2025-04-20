
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const CreateRoomForm = () => {
  const [nickname, setNickname] = useState('');
  const [quizType, setQuizType] = useState('networking');
  const navigate = useNavigate();
  const { toast } = useToast();

  const generateRoomCode = () => {
    // Generate a random 6-digit room code
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const handleCreateRoom = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nickname.trim()) {
      toast({
        title: "Nickname required",
        description: "Please enter a nickname to create a game.",
        variant: "destructive"
      });
      return;
    }

    // Generate room code
    const roomCode = generateRoomCode();
    
    // Store room code in sessionStorage
    const existingRooms = JSON.parse(sessionStorage.getItem('quizRooms') || '[]');
    existingRooms.push(roomCode);
    sessionStorage.setItem('quizRooms', JSON.stringify(existingRooms));
    
    // Initialize scores array for this room
    sessionStorage.setItem(`scores_${roomCode}`, JSON.stringify([{ name: nickname, score: 0 }]));
    
    // Store creator info in session storage
    sessionStorage.setItem('playerName', nickname);
    sessionStorage.setItem('roomCode', roomCode);
    sessionStorage.setItem('isHost', 'true');
    
    toast({
      title: "Room created!",
      description: `Your room code is: ${roomCode}`,
    });
    
    // Navigate to the quiz with the room code
    navigate(`/quiz?room=${roomCode}&host=true`);
  };

  return (
    <form onSubmit={handleCreateRoom} className="space-y-4">
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
      
      <div>
        <Label htmlFor="quizType">Quiz Type</Label>
        <Select 
          value={quizType} 
          onValueChange={setQuizType}
        >
          <SelectTrigger id="quizType" className="mt-1">
            <SelectValue placeholder="Select quiz type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="networking">Networking Fundamentals</SelectItem>
            <SelectItem value="security">Network Security</SelectItem>
            <SelectItem value="protocols">Network Protocols</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-primary hover:bg-primary/90"
      >
        Create Quiz Room
      </Button>
    </form>
  );
};

export default CreateRoomForm;
