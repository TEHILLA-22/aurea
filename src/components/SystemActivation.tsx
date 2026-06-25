"use client";

import { useEffect, useState } from "react";

const messages = [
  "UPDATING STATUS...",
  "VERIFYING DATE...",
  "CHECKING RECORD...",
  "BIRTHDAY STATUS FOUND",
];

export default function SystemActivation({
  onComplete,
}: {
  onComplete: () => void;
}) {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index >= messages.length) {

      const timer =
        setTimeout(onComplete, 2000);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIndex(prev => prev + 1);
    }, 1200);

    return () => clearTimeout(timer);

  }, [index, onComplete]);

  return (
    <div className="activation-screen">

      {index < messages.length ? (
        <h2>{messages[index]}</h2>
      ) : (
        <h1 className="birthday-active">
          BIRTHDAY STATUS: ACTIVE
        </h1>
      )}

    </div>
  );
}