import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../common/Header/SectionHeader";

// ── Variants ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const PlayButton = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div
      className="flex items-center justify-center rounded-full bg-white/90 shadow-lg"
      style={{
        width: "clamp(36px,3.2vw,52px)",
        height: "clamp(36px,3.2vw,52px)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="#333"
        style={{ width: "clamp(10px,0.9vw,16px)", marginLeft: "2px" }}
      >
        <polygon points="5,3 19,12 5,21" />
      </svg>
    </div>
  </div>
);

const TagPill = ({ label, filled = false }) =>
  filled ? (
    <span
      className="inline-block font-semibold text-white"
      style={{
        background: "#7CB518",
        fontSize: "clamp(9px,0.65vw,12px)",
        padding: "3px 13px",
        borderRadius: "100px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  ) : (
    <span
      className="inline-block font-semibold text-white"
      style={{
        border: "1.5px solid rgba(255,255,255,0.55)",
        fontSize: "clamp(9px,0.65vw,12px)",
        padding: "3px 12px",
        borderRadius: "100px",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );

const TrophyWatermark = () => (
  <div
    className="absolute pointer-events-none overflow-hidden"
    style={{
      right: "0%",
      top: "8%",
      width: "clamp(100px,16vw,220px)",
      opacity: 0.18,
    }}
  >
    <svg
      viewBox="0 0 319 593"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
    >
      <path
        d="M532.506 87.1973C532.506 50.7325 497.148 30.4304 470.342 30.1218C435.805 29.7264 419.032 43.5987 419.032 43.5987V19.0244C419.032 3.96351 266.253 0 266.253 0C251.369 0 113.474 3.96351 113.474 19.0244V43.5987C113.474 43.5987 91.437 28.14 62.1644 30.1218C35.4526 31.9321 0 50.7325 0 87.1973C0 164.088 148.503 203.028 161.824 233.05C164.044 246.725 142.951 262.776 149.612 264.561C156.182 266.319 178.845 242.364 182.544 245.733C186.246 249.102 217.08 318.661 213.134 331.347C209.188 344.03 199.32 352.746 198.333 362.259C197.345 371.77 226.948 386.831 226.948 386.831C226.948 386.831 219.382 400.002 215.109 407.442C210.832 414.884 194.878 497.807 188.465 504.15C182.052 510.493 127.288 510.493 127.288 517.428V528.722H78.6104V592.138H452.581V528.722H405.218V517.428C405.218 510.496 350.455 510.496 344.041 504.15C337.628 497.81 321.677 414.884 317.403 407.442C313.127 400.002 305.561 386.831 305.561 386.831C305.561 386.831 335.161 371.77 334.177 362.259C333.189 352.746 323.322 344.028 319.375 331.347C315.429 318.661 346.263 249.102 349.965 245.733C353.664 242.364 376.33 266.319 382.897 264.561C389.558 262.776 368.465 246.725 370.685 233.05C384.004 203.028 532.506 164.088 532.506 87.1973ZM412.13 72.1341C412.13 72.1341 430.877 51.5257 461.465 51.5257C492.055 51.5257 507.843 68.9638 507.843 85.611C507.843 102.258 494.115 148.234 399.3 181.526L412.13 72.1341ZM21.8719 85.611C21.8719 68.9638 37.6606 51.5257 68.2477 51.5257C98.8377 51.5257 117.585 72.1341 117.585 72.1341L130.412 181.526C35.6006 148.234 21.8719 102.258 21.8719 85.611Z"
        fill="white"
      />
    </svg>
  </div>
);

const ImgCard = ({ image, alt, delay, from }) => (
  <motion.div
    initial={{ opacity: 0, x: from === "left" ? -36 : 36 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className="relative overflow-hidden cursor-pointer"
    style={{
      borderRadius: "clamp(10px,1.2vw,16px)",
      height: "clamp(180px,24vw,340px)",
    }}
  >
    <motion.img
      src={image}
      alt={alt}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.04, transition: { duration: 0.4 } }}
    />
    <PlayButton />
  </motion.div>
);

const TextBlock = ({ title, tags, description, onDark = false, delay = 0 }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ delay }}
  >
    <h3
      className="font-bold"
      style={{
        color: onDark ? "#fff" : "#111",
        fontSize: "clamp(17px,1.5vw,26px)",
        marginBottom: "clamp(8px,0.8vw,12px)",
      }}
    >
      {title}
    </h3>
    <div
      className="flex flex-wrap"
      style={{ gap: "6px", marginBottom: "clamp(8px,0.9vw,14px)" }}
    >
      {tags.map((t) => (
        <TagPill key={t.label} label={t.label} filled={t.filled} />
      ))}
    </div>
    <p
      style={{
        fontSize: "clamp(11px,0.78vw,14px)",
        color: onDark ? "rgba(255,255,255,0.72)" : "#666",
        lineHeight: 1.65,
      }}
    >
      {description}
    </p>
  </motion.div>
);

const ROW1_DATA = [
  {
    title: "Tennis",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=700&q=80",
    alt: "Tennis court",
    tags: [{ label: "9 Clay Courts" }, { label: "4 Hard Courts" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Accommodation",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
    alt: "Hotel room",
    tags: [{ label: "5 Star Hotel" }],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const ROW2_DATA = [
  {
    title: "Fitness",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=700&q=80",
    alt: "Fitness gym",
    tags: [
      { label: "Gym", filled: true },
      { label: "Fitness Room", filled: true },
    ],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    title: "Recovery",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=700&q=80",
    alt: "Recovery pool",
    tags: [
      { label: "Spa", filled: true },
      { label: "Pool", filled: true },
      { label: "Massage", filled: true },
    ],
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

const hPad = "clamp(20px,5.5vw,80px)";
const colGap = "clamp(12px,2vw,28px)";
// Image height — used to compute bg panel offsets
const imgH = "clamp(180px,24vw,340px)";

const FacilitiesSection = () => (
  <section className="relative overflow-hidden bg-white" id="facilities">
    {/* ── Header ── */}
    <motion.div
      initial={{ opacity: 0, y: -16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="relative bg-white"
      style={{
        padding: `clamp(28px,4vw,56px) ${hPad} clamp(14px,1.5vw,22px)`,
        zIndex: 10,
      }}
    >
      <SectionHeader
        title="Facilities"
        subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      />
    </motion.div>

    <div className="relative">
      <div
        className="absolute left-0 right-0 overflow-hidden"
        style={{
          top: `calc(${imgH} / 2)`,
          // ends halfway through row2 images — row2 images overlap top half
          bottom: `calc(clamp(120px,16vw,240px) + clamp(12px,1.4vw,20px))`,
          background:
            "linear-gradient(103.14deg, #002F50 11.16%, #6a9e14 111.06%)",
          zIndex: 0,
        }}
      >
        <TrophyWatermark />
      </div>

      <div
        className="relative grid grid-cols-2 md:grid-cols-3"
        style={{ padding: `0 ${hPad}`, gap: colGap, zIndex: 10 }}
      >
        {ROW1_DATA.map((card, i) => (
          <ImgCard
            key={card.title}
            image={card.image}
            alt={card.alt}
            delay={i * 0.1}
            from={i === 0 ? "left" : "right"}
          />
        ))}
        <div />
      </div>

      <div
        className="relative grid grid-cols-2 md:grid-cols-3"
        style={{
          padding: `clamp(16px,2vw,26px) ${hPad} clamp(24px,3vw,40px)`,
          gap: colGap,
          zIndex: 10,
        }}
      >
        {ROW1_DATA.map((card, i) => (
          <TextBlock
            key={card.title + "-t"}
            title={card.title}
            tags={card.tags}
            description={card.desc}
            onDark
            delay={i * 0.1}
          />
        ))}
        <div />
      </div>

      <div
        className="relative md:grid grid-cols-2 md:grid-cols-3 hidden"
        style={{ padding: `0 ${hPad}`, gap: colGap, zIndex: 10 }}
      >
        <div />
        {ROW2_DATA.map((card, i) => (
          <ImgCard
            key={card.title}
            image={card.image}
            alt={card.alt}
            delay={i * 0.1}
            from={i === 0 ? "left" : "right"}
          />
        ))}
      </div>

      <div
        className="relative md:grid grid-cols-2 md:grid-cols-3 bg-white hidden"
        style={{
          padding: `clamp(14px,1.5vw,22px) ${hPad} clamp(32px,4.5vw,60px)`,
          gap: colGap,
          zIndex: 10,
        }}
      >
        <div />
        {ROW2_DATA.map((card, i) => (
          <TextBlock
            key={card.title + "-t"}
            title={card.title}
            tags={card.tags}
            description={card.desc}
            delay={i * 0.1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FacilitiesSection;
