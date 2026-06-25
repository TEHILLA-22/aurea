"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const messages = [
  "🎉 System Ready",
  "💖 Birthday Mode Activated",
  "✨ Preparing surprise...",
  "👀 Almost there...",
];

export default function SystemActivation({ onComplete }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= messages.length) {
      const t = setTimeout(onComplete, 1200);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setI(i + 1), 900);
    return () => clearTimeout(t);
  }, [i, onComplete]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      
      {/* glow background */}
      <div className="absolute w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full animate-pulse" />
      
      <h1 className="text-3xl md:text-5xl font-bold text-center z-10 transition-all duration-300">
        {messages[i]}
      </h1>

      <p className="mt-6 text-white/60 z-10">
        Welcome, Aurea ✨
      </p>
    </div>
  );
}