import React from "react";
import { motion } from "framer-motion";

const CONNECTIVITY_ITEMS = [
  { label: "Hunter Valley Golf And Country Club", distance: "220m" },
  { label: "Rydges Resort Hunter Valley", distance: "550m" },
  { label: "Cressnock Airport", distance: "1.7km" },
  { label: "Cressnock CBD", distance: "7km" },
  { label: "Nulkaba Public School", distance: "4.8km" },
  { label: "Cressnock Hospital", distance: "7.3km" },
  { label: "Mcdonalds, KFC, Oporto", distance: "7km" },
];

const FlagIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 15.625V1.25L16.875 4.375L10 7.5"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0001 13.125C6.60166 13.125 3.15244 14.8125 2.51416 17.9977C2.4372 18.3816 2.67861 18.75 3.12509 18.75H16.8751C17.322 18.75 17.5634 18.3816 17.4864 17.9977C16.8478 14.8125 13.3985 13.125 10.0001 13.125Z"
      stroke="white"
      strokeMiterlimit="10"
    />
  </svg>
);

const LaunchingSection = ({
  launchingText = "LAUNCHING",
  title = "Signature Slam Academy\nHunter Valley",
  connectivityTitle = "SSA Connectivity",
  items = CONNECTIVITY_ITEMS,
  backgroundImage = "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1200&q=85",
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.04 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="w-full overflow-hidden grid grid-cols-1 lg:grid-cols-[40%_60%] my-6 md:mt-20"
      style={{
        background:
          "linear-gradient(148.19deg, #003A5D 3.49%, #99B81B 113.07%)",
        minHeight: "clamp(340px, 45vw, 480px)",
      }}
    >
      {/* Left Panel */}
      <motion.div
        variants={leftVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col justify-start"
        style={{
          padding: "clamp(28px, 4vw, 52px)",
          gap: "clamp(8px, 1.5vw, 16px)",
        }}
      >
        {/* Launching Badge */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="uppercase font-normal tracking text-white m-0"
          style={{
            fontSize: "clamp(10px, 2vw, 25px)",
          }}
        >
          {launchingText}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white font-bold whitespace-pre-line m-0"
          style={{
            fontSize: "clamp(20px, 3vw, 40px)",
            lineHeight: 1.25,
          }}
        >
          {title}
        </motion.h2>

        {/* Connectivity Title */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-white font-medium"
          style={{
            fontSize: "clamp(13px, 1.4vw, 17px)",
            margin: "clamp(4px, 0.8vw, 10px) 0 clamp(2px, 0.5vw, 6px)",
          }}
        >
          {connectivityTitle}
        </motion.p>

        {/* Items */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="list-none p-0 m-0 flex flex-col"
          style={{
            gap: "clamp(6px, 0.9vw, 12px)",
          }}
        >
          {items.map((item, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              className="flex items-center"
              style={{
                gap: "clamp(6px, 0.8vw, 10px)",
              }}
            >
              <span className="shrink-0">
                <FlagIcon />
              </span>

              <span
                className="text-white/85 shrink-0"
                style={{
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                }}
              >
                {item.label}
              </span>

              <span className="flex-1 border-b border-dashed border-white/30 min-w-4 mb-[2px]" />

              <span
                className="text-white/90 font-semibold shrink-0"
                style={{
                  fontSize: "clamp(11px, 1.1vw, 14px)",
                }}
              >
                {item.distance}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Right Image Panel */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden"
      >
        <img
          src={backgroundImage}
          alt="Hunter Valley aerial view"
          className="w-full h-full object-cover block"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(42,80,20,0.35) 0%, transparent 30%)",
          }}
        />

        {/* Slider Dots */}
        {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
          <span className="w-2 h-2 rounded-full bg-white/40" />
        </div> */}
      </motion.div>
    </section>
  );
};

export default LaunchingSection;
