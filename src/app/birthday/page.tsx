"use client";

import { motion } from "framer-motion";

export default function BirthdayPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* Aurora Background */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        <div className="absolute left-[-20%] top-[-10%] h-[400px] w-[400px] rounded-full bg-pink-500/20 blur-[120px]" />

        <div className="absolute right-[-20%] top-[30%] h-[350px] w-[350px] rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[20%] h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-[120px]" />

      </div>

      {/* Floating Particles */}

      <div className="pointer-events-none fixed inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-20, -120],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute text-pink-400/50"
            style={{
              left: `${(i * 5) % 100}%`,
              bottom: "-20px",
            }}
          >
            ✦
          </motion.div>
        ))}
      </div>

      {/* HERO */}

      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">

        {/* Status Pill */}

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="
            mb-8
            rounded-full
            border
            border-white/10
            bg-white/5
            px-5
            py-2
            backdrop-blur-xl
          "
        >
          <span className="text-xs tracking-[0.3em] text-pink-300 uppercase">
            Birthday Protocol Active ✦
          </span>
        </motion.div>

        {/* Main Title */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
            text-5xl
            font-black
            leading-none
            sm:text-7xl
          "
        >
          HAPPY
          <br />
          BIRTHDAY
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
          }}
          className="
            mt-4
            bg-gradient-to-r
            from-pink-400
            via-fuchsia-400
            to-purple-400
            bg-clip-text
            text-6xl
            font-black
            text-transparent
            sm:text-8xl
          "
        >
          AUREA
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.2,
          }}
          className="
            mt-6
            max-w-md
            text-white/60
          "
        >
          Today isn't just another day.
          It's your day ✨
        </motion.p>

        {/* Scroll Indicator */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="
            absolute
            bottom-10
            flex
            flex-col
            items-center
          "
        >
          <span className="mb-2 text-xs text-white/40">
            Scroll
          </span>

          <div className="h-10 w-[1px] bg-white/20" />
        </motion.div>
      </section>


{/* ABOUT */}

<section className="relative px-6 py-24">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="
      mx-auto
      max-w-6xl
      rounded-[32px]
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-2xl
    "
  >

    <div className="mb-8 flex justify-center">
      <span className="rounded-full border border-pink-400/20 bg-pink-500/10 px-4 py-2 text-xs tracking-[0.3em] text-pink-300 uppercase">
        Memory 001
      </span>
    </div>

    <div className="flex flex-col items-center gap-10 md:flex-row">

      {/* PHOTO */}

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="relative"
      >
        <div
          className="
            h-72
            w-72
            overflow-hidden
            rounded-full
            border-4
            border-white/10
            bg-neutral-900
            shadow-[0_0_60px_rgba(236,72,153,0.25)]
          "
        >
          {/* Replace later with next/image */}
          <img
            src="/images/aurea-throwback.jpg"
            alt="Aurea"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 rounded-full ring-8 ring-pink-500/10" />
      </motion.div>

      {/* TEXT */}

      <div className="flex-1 text-center md:text-left">

        <h2 className="text-4xl font-black">
          About Aurea
        </h2>

        <p className="mt-6 leading-8 text-white/70">

          Every great story has a beginning.

          <br />
          <br />

          This picture is a reminder that time changes many things,
          but some qualities remain the same—your kindness, your
          smile, and the joy you bring to the people around you.

          <br />
          <br />

          Today is a celebration of how far you've come, the memories
          you've created, and all the amazing moments still waiting
          ahead.

        </p>

      </div>

    </div>

  </motion.div>

</section>
      
    </main>
  );
}
