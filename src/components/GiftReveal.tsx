"use client";

import { motion } from "framer-motion";

export default function GiftReveal({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <div className="gift-screen">

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={onOpen}
        className="gift-box"
      >
        🎁
      </motion.button>

      <p>
        Tap to open
      </p>

    </div>
  );
}