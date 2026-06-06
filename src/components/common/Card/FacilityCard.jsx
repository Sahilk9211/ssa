"use client";

import React from "react";
import { motion } from "framer-motion";

// ── Play Button ────────────────────────────────────────────
const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="flex items-center justify-center rounded-full bg-white/90 shadow-lg"
      style={{
        width: "clamp(36px, 3.2vw, 52px)",
        height: "clamp(36px, 3.2vw, 52px)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#333"
        style={{ width: "clamp(10px, 0.9vw, 16px)", marginLeft: "2px" }}
      >
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </div>
  </div>
);

// ── Tag Pill ───────────────────────────────────────────────
const TagPill = ({ label, style = "filled", onDark = false }) => {
  if (style === "outline" || onDark) {
    return (
      <span
        className="inline-block font-semibold text-white"
        style={{
          border: "1.5px solid rgba(255,255,255,0.55)",
          fontSize: "clamp(9px, 0.7vw, 12px)",
          padding: "3px 12px",
          borderRadius: "100px",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    );
  }

  return (
    <span
      className="inline-block font-semibold text-white"
      style={{
        background: "#7CB518",
        fontSize: "clamp(9px, 0.75vw, 12px)",
        padding: "4px 14px",
        borderRadius: "100px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
};

// ── Animation Variant ──────────────────────────────────────
const getVariant = (from) => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -40 : from === "right" ? 40 : 0,
    y: from === "bottom" ? 40 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
});

// ── Facility Card ──────────────────────────────────────────
const FacilityCard = ({
  image,
  alt = "",
  title,
  tags = [],
  description,
  panelBg, // if truthy → content sits on this colored bg (dark panel style)
  animateFrom = "bottom",
  delay = 0,
  onClick,
}) => {
  const variant = getVariant(animateFrom);
  const onDark = Boolean(panelBg);

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay }}
      className="flex flex-col"
      // No overflow:hidden here — image has its own border-radius
    >
      {/* ── Image ── */}
      <motion.div
        className="relative overflow-hidden cursor-pointer w-fit"
        style={{
          // Top corners rounded, bottom corners flat when it connects to a panel
          //   borderRadius: onDark
          //     ? "clamp(8px,1vw,14px) clamp(8px,1vw,14px) 0 0"
          //     : "clamp(8px,1vw,14px)",
          //   borderRadius: "clamp(8px,1vw,14px)",
          height: "clamp(180px, 22vw, 373px)",
        }}
        whileHover={{ scale: 1.025, transition: { duration: 0.35 } }}
        onClick={onClick}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-[373px] object-cover rounded-xl"
        />
        <PlayButton />
      </motion.div>

      {/* ── Content panel ── */}
      <div
        className="w-fit"
        style={
          {
            //   background: onDark ? panelBg : "transparent",
            //   padding: onDark
            //     ? "clamp(14px,1.6vw,24px) clamp(16px,1.8vw,26px) clamp(18px,2vw,28px)"
            //     : "clamp(12px,1.2vw,18px) 0 0",
            //   // Bottom corners rounded when panel bg present
            //   borderRadius: onDark ? "0 0 0 0" : 0,
          }
        }
      >
        {title && (
          <h3
            className="font-bold"
            style={{
              color: onDark ? "#fff" : "#111",
              fontSize: "clamp(18px, 1.6vw, 28px)",
              marginBottom: "clamp(6px, 0.7vw, 10px)",
            }}
          >
            {title}
          </h3>
        )}

        {tags.length > 0 && (
          <div
            className="flex flex-wrap"
            style={{ gap: "6px", marginBottom: "clamp(8px,0.9vw,12px)" }}
          >
            {tags.map((tag, i) => (
              <TagPill
                key={i}
                label={tag.label}
                style={tag.style}
                onDark={onDark}
              />
            ))}
          </div>
        )}

        {description && (
          <p
            style={{
              fontSize: "clamp(11px, 0.8vw, 14px)",
              color: onDark ? "rgba(255,255,255,0.72)" : "#666",
              lineHeight: 1.65,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default FacilityCard;
