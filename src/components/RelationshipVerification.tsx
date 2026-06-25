"use client";

import { useState } from "react";

interface Props {
  onAccepted: () => void;
}

const messages = [
  "Are you sure? 😏",
  "Think again...",
  "Hmm interesting choice",
  "That doesn't feel right",
  "Try again 😂",
];

export default function RelationshipVerification({ onAccepted }: Props) {
  const [pos, setPos] = useState({ x: 50, y: 60 });
  const [text, setText] = useState("Do you love Cato? 💖");
  const [noCount, setNoCount] = useState(0);

  const moveButton = () => {
    const next = noCount + 1;
    setNoCount(next);

    setText(messages[next % messages.length]);

    setPos({
      x: Math.random() * 70 + 10,
      y: Math.random() * 60 + 20,
    });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      
      <div className="text-center z-10">
        <h1 className="text-3xl font-bold">{text}</h1>

        <button
          onClick={onAccepted}
          className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold active:scale-95 transition"
        >
          YES ❤️
        </button>
      </div>

      <button
        onClick={moveButton}
        className="absolute px-5 py-2 rounded-full bg-white/10 backdrop-blur text-white transition-all duration-300"
        style={{
          left: `${pos.x}%`,
          top: `${pos.y}%`,
        }}
      >
        NO
      </button>
    </div>
  );
}