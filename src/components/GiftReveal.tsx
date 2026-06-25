"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface GiftRevealProps {
  onOpen: () => void;
}

export default function GiftReveal({
  onOpen,
}: GiftRevealProps) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
  };

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black">

      {/* Aurora Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-pink-500/20 blur-[120px] animate-pulse" />

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {!opened ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="relative"
          >
            <p className="mb-6 text-center text-white/60 tracking-[0.3em] text-xs uppercase">
              Confidential Message
            </p>

            <button
              onClick={handleOpen}
              className="relative"
            >
              {/* Envelope Body */}

              <div className="relative h-56 w-80 overflow-hidden rounded-lg border border-white/10 bg-neutral-900 shadow-2xl">

                {/* Seal */}

                <motion.div
                  whileTap={{
                    scale: 1.2,
                  }}
                  className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg"
                >
                  ✦
                </motion.div>

                {/* Flap */}

                <div
                  className="
                  absolute
                  top-0
                  h-28
                  w-full
                  origin-top
                  bg-neutral-800
                  [clip-path:polygon(0_0,100%_0,50%_100%)]
                  "
                />
              </div>
            </button>

            <p className="mt-5 text-center text-white/50">
              Tap the envelope
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="relative flex flex-col items-center"
          >

            {/* Burst */}

            <motion.div
              initial={{
                scale: 0,
                opacity: 1,
              }}
              animate={{
                scale: 4,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="absolute h-40 w-40 rounded-full bg-pink-400/30 blur-3xl"
            />

            {/* Floating Hearts */}

            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  y: -300,
                  x:
                    Math.random() * 200 - 100,
                }}
                transition={{
                  duration:
                    3 + Math.random() * 2,
                  repeat: Infinity,
                  delay:
                    Math.random() * 2,
                }}
                className="absolute text-2xl"
              >
                ♥
              </motion.div>
            ))}

            {/* Letter */}

           <motion.div
  initial={{
    y: 150,
  }}
  animate={{
    y: 0,
  }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="
    z-10
    w-[380px]
    min-h-[280px]
    rounded-2xl
    border
    border-white/10
    bg-white
    p-8
    text-black
    shadow-2xl
    flex
    flex-col
    items-center
    justify-center
    gap-2
  "
>
              <motion.h2
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 0.6,
    }}
    className="text-3xl font-bold text-center"
  >
    To Aurea ❤️
  </motion.h2>


              <motion.p
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      delay: 1,
    }}
    className="text-neutral-600 text-center px-2"
  >
    A classified archive has been
    recovered for your eyes only.
  </motion.p>

              <motion.button
    whileTap={{
      scale: 0.95,
    }}
    onClick={onOpen}
    className="
      mt-4
      w-full
      max-w-[200px]
      rounded-xl
      bg-black
      px-6
      py-3
      text-white
      font-medium
      transition-all
      hover:bg-neutral-800
    "
  >
    Read Message
  </motion.button>
            </motion.div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}