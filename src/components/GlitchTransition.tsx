"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function GlitchTransition({ onComplete }: Props) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => {
      setVisible(false); // remove overlay visually
    }, 900);

    const t2 = setTimeout(() => {
      onComplete(); // move stage forward
    }, 1100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center text-white text-2xl tracking-[0.3em] animate-pulse">
      Welcome Aurea!!
    </div>
  );
}