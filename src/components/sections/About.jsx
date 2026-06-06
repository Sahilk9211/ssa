"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../common/Buttons/button";
import CountUp from "react-countup";

// ── Variants ──────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Tab content stays the same
const tabContent = {
  "About Us": {
    title: "About Us",
    description:
      "Signature Slam Academy is dedicated to developing world-class tennis talent through professional coaching, modern facilities, and a structured training environment. Our mission is to nurture athletes who can compete at national and international levels.",
  },
  Coaches: {
    title: "Our Coaches",
    description:
      "Our experienced coaching team consists of certified tennis professionals with extensive competitive and coaching backgrounds. They focus on technical skills, fitness, mental strength, and tournament preparation.",
  },
  Vision: {
    title: "Our Vision",
    description:
      "To become the first venue in the world with 60 multi-surface courts at one location and establish the leading tennis academy in Asia Pacific that produces Grand Slam champions.",
  },
  Mission: {
    title: "Our Mission",
    description:
      "To provide world-class tennis training, create opportunities for young athletes, and build a complete ecosystem where players can grow from beginners to professional competitors.",
  },
};

// ── Component ─────────────────────────────────────────────
export default function About() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState("About Us");
  const prefersReduced = useReducedMotion();

  // Intersection observers — triggerOnce so animation fires once per visit
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // SSR guard — prevents hydration flash
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section
        id="about"
        className="relative overflow-hidden"
        style={{ opacity: 0, minHeight: "60vh" }}
      />
    );
  }

  return (
    <section id="about" className="relative overflow-hidden">
      <div className="section-container relative z-10" ref={sectionRef}>
        {/* ── Background SVG watermark ── */}
        <div className="absolute top-10 -left-5 hidden md:flex pointer-events-none">
          <svg
            width="307"
            height="380"
            viewBox="0 0 307 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-94.9426 379.188L84.0621 0H130.897L306.695 379.188H206.609L105.876 149.494L6.43037 379.188H-94.9426Z"
              fill="#d0f04f4e"
            />
          </svg>
        </div>

        {/* ── Intro headline ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={sectionInView ? "show" : "hidden"}
          className="text-center"
        >
          <h6 className="text-xs md:text-xl px-4 text-black leading-tight font-medium max-w-150 mx-auto py-20 md:py-28">
            To be the first venue in the world to have{" "}
            <span className="text-[#99B81B]">60 multi surface courts</span> at
            one location and establish first one stop tennis academy in the Asia
            Pacific producing grand slam champions.
          </h6>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={sectionInView ? "show" : "hidden"}
          className="flex items-center justify-center mb-8"
        >
          {["About Us", "Coaches", "Vision", "Mission"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`mx-2 sm:mx-5 md:mx-7 py-1.5 text-xl border-b-2 font-semibold md:text-2xl -mb-px transition-colors ${
                activeTab === tab
                  ? "border-[#99B81B] text-gray-900"
                  : "border-transparent text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* ── Content grid ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start pt-10 max-w-[90vw] md:max-w-[75vw] mx-auto"
        >
          {/* Left column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={gridInView ? "show" : "hidden"}
            className="flex flex-col h-full items-start justify-center mx-4 sm:mx-0"
          >
            <h2 className="text-2xl md:text-4xl text-black font-bold flex items-center gap-2 mb-4">
              About Us{" "}
              <span className="w-2 h-2 rounded-full bg-[#7ab317] inline-block" />
            </h2>

            <p className="text-base text-black leading-relaxed mb-6">
              To be the first venue in the world to have 60 multi surface courts
              at one location and establish first one stop tennis academy in the
              Asia Pacific producing grand slam champions.
            </p>

            {/* Stats row — CountUp only after section is visible */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={gridInView ? "show" : "hidden"}
              className="grid justify-between w-full grid-cols-4 gap-3 mb-6"
            >
              {[
                [20, "courts"],
                [12, "coaches"],
                [17, "years"],
                [10, "clubs"],
              ].map(([n, l], i) => (
                <motion.div key={l} variants={fadeUp}>
                  <p className="md:text-4xl font-bold text-[#99B81B] m-0">
                    {gridInView ? (
                      <CountUp
                        end={n}
                        duration={2}
                        delay={i * 0.2}
                        enableScrollSpy={false}
                      />
                    ) : (
                      0
                    )}
                  </p>
                  <p className="text-sm text-black m-0">{l}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp}>
              <Button
                variant="primary"
                className="bg-[#99B81B] text-white rounded-full px-8 py-2.5 text-sm"
              >
                Read More
              </Button>
            </motion.div>
          </motion.div>

          {/* Right column — image grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={gridInView ? "show" : "hidden"}
            className="grid grid-cols-4 gap-2 mx-4 sm:mx-0"
          >
            <div className="col-span-3 row-span-2">
              <Image
                src="/images/grid1.png"
                alt="grid1"
                width={373}
                height={210}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-1 row-span-2">
              <Image
                src="/images/grid2.png"
                alt="grid2"
                width={144}
                height={210}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-2">
              <Image
                src="/images/grid3.png"
                alt="grid3"
                width={257}
                height={231}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="col-span-2">
              <Image
                src="/images/grid4.png"
                alt="grid4"
                width={257}
                height={231}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #about .section-container > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          #about .section-container > div:nth-child(3) > div:first-child {
            height: 70vw !important;
          }
          #about h2 {
            font-size: 7vw !important;
          }
        }
        @media (max-width: 480px) {
          #about .section-container > div:last-child > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
