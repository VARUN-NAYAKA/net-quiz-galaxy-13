
import React from "react";
import { Timer } from "lucide-react";

interface AnimatedTimerProps {
  timeLeft: number;
  totalTime: number;
}

const AnimatedTimer: React.FC<AnimatedTimerProps> = ({ timeLeft }) => {
  return (
    <div className="flex items-center space-x-2 text-primary font-semibold text-lg">
      <Timer className="w-5 h-5" />
      <span>{timeLeft}s</span>
    </div>
  );
};

export default AnimatedTimer;

