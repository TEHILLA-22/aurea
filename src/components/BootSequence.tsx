"use client";

import { useEffect, useState } from "react";

const lines = [
  "INITIALIZING...",
  "CONNECTING...",
  "VERIFYING USER...",
  "CHECKING ELIGIBILITY STATUS...",
  "",
  "⚠ STATUS UNKNOWN",
  "RUNNING DEEP ANALYSIS...",
  "",
  "FOUND: AUREA",
  "",
  "DANGER LEVEL:",
  "EXCESSIVELY ADORABLE",
  "",
  "PATIENCE LEVEL:",
  "CURRENTLY BEING TESTED",
];

export default function BootSequence({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [displayed, setDisplayed] = useState<string[]>([]);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        setDisplayed((prev) => [...prev, lines[index]]);
        index++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 2500);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="boot-screen">
      <div className="terminal">
        {displayed.map((line, i) => (
          <p key={i}>{line}</p>
        ))}

        <span className="cursor">█</span>
      </div>
    </div>
  );
}