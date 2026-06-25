"use client";

import { useState } from "react";

const responses = [
  "Nice try 😏",
  "Still locked.",
  "Patience.",
  "Almost there.",
  "Persistence detected.",
  "Nope 😂",
  "Keep waiting..."
];

export default function AccessButton() {

  const [index, setIndex] = useState(0);

  const handleClick = () => {
    setIndex(
      prev =>
        (prev + 1) % responses.length
    );
  };

  return (
    <button
      className="access-btn"
      onClick={handleClick}
    >
      🔒 {responses[index]}
    </button>
  );
}