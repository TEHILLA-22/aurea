"use client";

import AuroraBackground from "./AuroraBackground";
import FloatingParticles from "./FloatingParticles";
import TypewriterMessages from "./TypewriterMessages";

export default function Countdown() {
  return (
    <main className="countdown-page">

      <AuroraBackground />
      <FloatingParticles />

      <div className="content">

        <h1 className="timer">
          00 : 18 : 23 : 44
        </h1>

        <TypewriterMessages />

      </div>

    </main>
  );
}