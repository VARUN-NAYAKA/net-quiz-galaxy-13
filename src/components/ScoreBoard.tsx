
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users } from "lucide-react";

interface PlayerScore {
  name: string;
  score: number;
}

interface ScoreBoardProps {
  scores: PlayerScore[];
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores }) => {
  // Sort scores in descending order
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);

  return (
    <Card className="w-full mt-4">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5" />
          Scoreboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Player</TableHead>
              <TableHead>Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedScores.map((player, index) => (
              <TableRow key={player.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{player.name}</TableCell>
                <TableCell>{player.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ScoreBoard;
