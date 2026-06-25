"use client";

import { useEffect, useState } from "react";

const messages = [
  "Checking birthday status...",
  "Aurea detected.",
  "Feel the ecstasy.",
  "Contain excitement.",
  "Loading something special...",
  "One more sleep...",
  "System getting nervous..."
];

export default function TypewriterMessages() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev =>
        (prev + 1) % messages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="message">
      {messages[index]}
    </p>
  );
}