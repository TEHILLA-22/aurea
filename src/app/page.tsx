"use client";

import { useState } from "react";

import BootSequence from "@/components/BootSequence";
import Countdown from "@/components/Countdown";
import GlitchOverlay from "@/components/GlitchTransition";
import SystemActivation from "@/components/SystemActivation";
import GiftReveal from "@/components/GiftReveal";

type Stage =
  | "boot"
  | "countdown"
  | "glitch"
  | "activation"
  | "gift"
  | "birthday";

export default function Home() {
  const [stage, setStage] =
    useState<Stage>("boot");

  return (
    <>
      {stage === "boot" && (
        <BootSequence
          onComplete={() =>
            setStage("countdown")
          }
        />
      )}

      {stage === "countdown" && (
        <Countdown
          onComplete={() =>
            setStage("glitch")
          }
        />
      )}

      {stage === "glitch" && (
        <GlitchOverlay />
      )}

      {stage === "activation" && (
        <SystemActivation
          onComplete={() =>
            setStage("gift")
          }
        />
      )}

      {stage === "gift" && (
        <GiftReveal
          onOpen={() =>
            setStage("birthday")
          }
        />
      )}

      {stage === "birthday" && (
        <div>
          Birthday Page
        </div>
      )}
    </>
  );
}