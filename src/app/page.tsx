"use client";

import { useState } from "react";

import BootSequence from "@/components/BootSequence";
import Countdown from "@/components/Countdown";
import GlitchOverlay from "@/components/GlitchTransition";
import SystemActivation from "@/components/SystemActivation";
import RelationshipVerification from "@/components/RelationshipVerification";
import AcceptedSequence from "@/components/AcceptedSequence";
import GiftReveal from "@/components/GiftReveal";

type Stage =
  | "boot"
  | "countdown"
  | "glitch"
  | "activation"
  | "verification"
  | "accepted"
  | "giftReveal"
  | "memoryVault"
  | "birthday";

export default function Home() {
  const [stage, setStage] = useState<Stage>("boot");

  return (
    <>
      {stage === "boot" && (
        <BootSequence
          onComplete={() => setStage("countdown")}
        />
      )}

      {stage === "countdown" && (
        <Countdown
          onComplete={() => setStage("glitch")}
        />
      )}

      {stage === "glitch" && (
        <GlitchOverlay
          onComplete={() => setStage("activation")}
        />
      )}

      {stage === "activation" && (
        <SystemActivation
          onComplete={() => setStage("verification")}
        />
      )}

      {stage === "verification" && (
        <RelationshipVerification
          onAccepted={() => setStage("accepted")}
        />
      )}

      {stage === "accepted" && (
        <AcceptedSequence
          onComplete={() => setStage("giftReveal")}
        />
      )}

      {stage === "giftReveal" && (
        <GiftReveal
          onOpen={() => setStage("memoryVault")}
        />
      )}

      {stage === "memoryVault" && (
        <div>
          Memory Vault Coming Next...
        </div>
      )}

      {stage === "birthday" && (
        <div>
          Birthday Page
        </div>
      )}
    </>
  );
}