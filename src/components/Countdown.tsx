"use client";

interface CountdownProps {
  onComplete: () => void;
}

import AuroraBackground from "./AuroraBackground";
import FloatingParticles from "./FloatingParticles";
import TypewriterMessages from "./TypewriterMessages";
import AccessButton from "./AccessButton";
import TouchHearts from "./TouchHearts";

import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown({
  onComplete,
}: CountdownProps) {

  const countdown = useCountdown(
    new Date("2026-06-26T00:00:00")
  );

  return (
    <main className="countdown-page">

      <AuroraBackground />
      <FloatingParticles />
      <TouchHearts />

      <div className="content">

        <div className="count-grid">

          <TimeCard
            value={countdown.days}
            label="Days"
          />

          <TimeCard
            value={countdown.hours}
            label="Hours"
          />

          <TimeCard
            value={countdown.minutes}
            label="Minutes"
          />

          <TimeCard
            value={countdown.seconds}
            label="Seconds"
          />

        </div>

        <TypewriterMessages />

        <AccessButton />

      </div>

    </main>
  );
}

function TimeCard({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="time-card">
      <span>
        {String(value).padStart(2, "0")}
      </span>

      <small>{label}</small>
    </div>
  );
}