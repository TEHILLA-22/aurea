"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import Countdown from "@/components/Countdown";

export default function Home() {
  const [bootFinished, setBootFinished] = useState(false);

  return (
    <>
      {!bootFinished ? (
        <BootSequence onComplete={() => setBootFinished(true)} />
      ) : (
        <Countdown />
      )}
    </>
  );
}