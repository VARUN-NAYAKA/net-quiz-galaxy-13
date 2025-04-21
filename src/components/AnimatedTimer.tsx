
import React from "react";
import { Timer } from "lucide-react";

interface AnimatedTimerProps {
  timeLeft: number;
  totalTime: number;
}

const AnimatedTimer: React.FC<AnimatedTimerProps> = ({ timeLeft, totalTime }) => {
  const circumference = 44 * 2 * Math.PI;
  const progress = Math.max(0, timeLeft) / totalTime;
  const dashoffset = circumference * (1 - progress);

  return (
    <div className="relative flex items-center justify-center" style={{ width: 60, height: 60 }}>
      <svg width="60" height="60" className="absolute">
        <circle
          cx="30" cy="30" r="28"
          stroke="#e5e7eb"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="30" cy="30" r="22"
          stroke="#6366f1"
          strokeWidth="6"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          style={{ transition: "stroke-dashoffset 0.5s linear" }}
          strokeLinecap="round"
        />
      </svg>
      <div className="relative flex flex-col items-center">
        <Timer className="w-5 h-5 text-primary mb-0.5 animate-pulse" />
        <span className="font-semibold text-lg text-primary">{timeLeft}s</span>
      </div>
    </div>
  );
};

export default AnimatedTimer;
