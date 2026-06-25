"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const messages = [
  "WAIT...",
  "VERIFYING ANSWER...",
  "💖 ANSWER ACCEPTED 💖",
  "I KNEW YOU'D SAY YES 😏",
];

export default function AcceptedSequence({
  onComplete,
}: Props) {
  const [index, setIndex] = useState(0);

  const hearts = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 5,
  size: Math.random() * 1.5 + 0.8,
  duration: Math.random() * 4 + 5,
}));

  useEffect(() => {
    if (index >= messages.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2500);

      return () => clearTimeout(timer);
    }
    

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <section className="accepted-container">

      <div className="heart-burst">
  {hearts.map((heart) => (
    <span
      key={heart.id}
      className="floating-heart"
      style={{
        left: `${heart.left}%`,
        animationDelay: `${heart.delay}s`,
        animationDuration: `${heart.duration}s`,
        fontSize: `${heart.size}rem`,
      }}
    >
      ❤️
    </span>
  ))}
</div>

      <div className="glow-orb" />

      <div className="accepted-card">

        <div className="heart-explosion" />

        <h1 className="accepted-title">
          {messages[
            Math.min(index, messages.length - 1)
          ]}
        </h1>

        <p className="accepted-subtitle">
          Birthday protocol unlocked ✨
        </p>

      </div>

    </section>
  );
}