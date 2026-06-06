"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "../common/Buttons/button";
import Arrow from "../common/Arrow/arrow";

// ── Variants ──────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRightToLeft = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

// ── Component ─────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  // Wait for client mount — prevents hydration mismatch flash
  useEffect(() => {
    setMounted(true);
  }, []);

  // Render invisible shell on server / before hydration
  if (!mounted) {
    return (
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity: 0 }}
      />
    );
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background Video ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assests/HeroVideo.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* ── Centre content — staggered children ── */}
      <motion.div
        className="relative z-20 container mx-auto px-6 text-center text-white"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Sub-heading */}
        <motion.h6
          variants={fadeUp}
          className="text-xl md:text-2xl font-bold mb-2 tracking-widest"
        >
          SSA HUNTER VALLEY
        </motion.h6>

        {/* Main heading */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-light mb-6 uppercase"
        >
          Grow Your Game with the <br />
          <span className="font-bold text-4xl md:text-6xl border-b border-white">
            Professionals
          </span>
        </motion.h1>

        {/* Tagline banner */}
        <motion.div
          variants={fadeUp}
          className="text-lg md:text-xl max-w-xl mx-auto mb-8 pt-4"
        >
          <div
            className="uppercase flex items-center justify-center gap-3 md:gap-5 text-base tracking-widest py-1"
            style={{
              background:
                "linear-gradient(90deg, rgba(205,237,78,0) 3.45%, #D2F24F 50.62%, rgba(210,242,79,0) 91.38%)",
              boxShadow: "0px 2px 2px 0px #00000040",
            }}
          >
            adopt
            <div className="rounded-full bg-white h-2 w-2" />
            nurture
            <div className="rounded-full bg-white h-2 w-2" />
            deliver
          </div>
        </motion.div>

        {/* CTA button */}
        <motion.div variants={fadeUp}>
          <Button variant="ghost" className="text-white px-8 py-3 rounded-full">
            Register Now
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Right side panel (weather + arrows) ── */}
      <motion.div
        className="absolute right-0 bottom-3 md:bottom-10 z-20 flex flex-col items-end gap-2 md:gap-5"
        variants={fadeRightToLeft}
        initial="hidden"
        animate="show"
      >
        <Arrow title="weather" />

        <div className="bg-[#99B81B8C] px-5 py-4 md:w-80 text-white">
          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3">
            <p className="font-bold text-lg m-0 px-2">Hunter Valley</p>
          </div>

          {/* Temperature */}
          <div className="flex items-center">
            <div className="mr-6">
              <p className="text-6xl font-bold leading-none m-0">
                19
                <span className="text-3xl font-normal align-top mt-1.5">
                  °C
                </span>
              </p>
            </div>
            <div>
              <p className="font-bold text-lg m-0 mb-1">Weather</p>
              <p className="text-sm m-0 opacity-90">Saturday, 8 pm</p>
            </div>
          </div>
        </div>

        <Arrow title="ONGOING MATCHES" />
        <Arrow title="SCORE" />
      </motion.div>
    </section>
  );
}
