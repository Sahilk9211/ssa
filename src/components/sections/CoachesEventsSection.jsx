import React from "react";
import { motion } from "framer-motion";

// ── Watermark tennis player SVG ────────────────────────────
const TennisPlayerWatermark = () => (
  <div
    className="absolute right-6 bottom-0 pointer-events-none select-none"
    style={{ opacity: 0.2, height: "100%" }}
  >
    <svg
      viewBox="0 0 160 240"
      fill="white"
      height="100%"
      style={{ display: "block" }}
    >
      {/* Body */}
      <ellipse cx="80" cy="28" rx="14" ry="14" />
      <path d="M68 42 Q60 80 58 120 Q56 140 70 150 L80 155 L90 150 Q104 140 102 120 Q100 80 92 42 Z" />
      {/* Left arm */}
      <path d="M68 55 Q40 65 28 50 Q20 42 25 36 Q30 30 38 38 Q48 50 62 55 Z" />
      {/* Right arm with racket */}
      <path d="M92 52 Q116 44 130 30 Q138 20 132 14 Q126 8 118 16 Q108 28 96 50 Z" />
      {/* Racket head */}
      <ellipse
        cx="138"
        cy="10"
        rx="16"
        ry="20"
        fill="none"
        stroke="white"
        strokeWidth="4"
      />
      <line x1="130" y1="10" x2="146" y2="10" stroke="white" strokeWidth="2" />
      <line x1="138" y1="2" x2="138" y2="18" stroke="white" strokeWidth="2" />
      {/* Legs */}
      <path d="M72 150 Q65 185 62 220 L75 222 Q80 190 82 165 Q84 190 85 222 L98 220 Q95 185 88 150 Z" />
    </svg>
  </div>
);

// ── Banner Card ────────────────────────────────────────────
const BannerCard = ({
  title,
  subtitle,
  buttonLabel = "Read More",
  onButtonClick,
  backgroundImage,
  backgroundColor,
  delay = 0,
}) => {
  const hasBgImage = Boolean(backgroundImage);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden flex-1"
      style={{
        backgroundColor: backgroundColor ?? "#7ab317",
        minHeight: "clamp(180px, 22vw, 260px)",
      }}
    >
      {/* Background image */}
      {hasBgImage && (
        <motion.img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.06 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      )}

      {/* Dark overlay for image cards */}
      {hasBgImage && (
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />
      )}

      {/* Tennis player watermark for green card */}
      {!hasBgImage && <TennisPlayerWatermark />}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: delay + 0.2, ease: "easeOut" }}
        className="relative z-10 flex flex-col justify-end h-full"
        style={{ padding: "clamp(20px,3vw,44px) clamp(20px,3.5vw,80px)" }}
      >
        <h2
          className="font-bold text-white flex items-center gap-2 mb-3"
          style={{ fontSize: "clamp(20px,2.2vw,32px)", lineHeight: 1.15 }}
        >
          {title}
          <span
            className="rounded-full bg-white flex-shrink-0"
            style={{
              width: "clamp(6px,0.5vw,9px)",
              height: "clamp(6px,0.5vw,9px)",
              marginBottom: "2px",
            }}
          />
        </h2>

        <p
          className="text-white/80 mb-6"
          style={{
            fontSize: "clamp(12px,1vw,15px)",
            lineHeight: 1.65,
            maxWidth: "clamp(200px,28vw,380px)",
          }}
        >
          {subtitle}
        </p>

        <motion.button
          onClick={onButtonClick}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="flex items-center gap-2 text-white font-semibold w-fit"
          style={{ fontSize: "clamp(12px,1vw,15px)" }}
        >
          {buttonLabel}
          <span
            style={{
              fontSize: "clamp(14px,1.2vw,18px)",
              letterSpacing: "-1px",
            }}
          >
            ——›
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const CoachesEventsSection = ({
  coachesImage = "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=900&q=80",
  onCoachesClick,
  onEventsClick,
}) => (
  <section
    className="flex flex-col md:flex-row w-full"
    style={{ minHeight: "clamp(180px,22vw,260px)" }}
  >
    <BannerCard
      title="Our Coaches"
      subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      backgroundImage={coachesImage}
      delay={0}
      onButtonClick={onCoachesClick}
    />
    <BannerCard
      title="Events"
      subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      backgroundColor="#7ab317"
      delay={0.12}
      onButtonClick={onEventsClick}
    />
  </section>
);

export default CoachesEventsSection;
