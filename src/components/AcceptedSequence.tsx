"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const lines = [
  "Analyzing response...",
  "Checking honesty...",
  "Response verified.",
  "I knew you'd say yes 😏",
];

export default function AcceptedSequence({
  onComplete,
}: Props) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= lines.length) {

      const timer =
        setTimeout(onComplete, 1500);

      return () => clearTimeout(timer);
    }

    const timer =
      setTimeout(() => {
        setIndex(prev => prev + 1);
      }, 1200);

    return () => clearTimeout(timer);

  }, [index, onComplete]);

  return (
    <section className="accepted-screen">

      <h1>
        {lines[
          Math.min(
            index,
            lines.length - 1
          )
        ]}
      </h1>

    </section>
  );
}