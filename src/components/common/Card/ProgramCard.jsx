import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProgramCard = ({ image, title, subtitle }) => {
  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden cursor-pointer"
      style={{ height: "clamp(280px, 40vw, 462px)" }}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      {/* Image zoom on hover */}
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: {
            scale: 1.07,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      />

      {/* Gradient overlay — darkens on hover */}
      <motion.div
        className="absolute inset-0"
        variants={{
          rest: {
            background:
              "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
          },
          hover: {
            background:
              "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.2) 55%, transparent 100%)",
            transition: { duration: 0.4 },
          },
        }}
      />

      {/* Text — slides up slightly on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 p-5"
        variants={{
          rest: { y: 0 },
          hover: {
            y: -6,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        <h3
          className="text-white font-medium leading-tight text-center"
          style={{ fontSize: "clamp(18px, 2.5vw, 26px)" }}
        >
          {title}
        </h3>
        <p
          className="text-white/80 mt-1 text-center"
          style={{ fontSize: "clamp(12px, 1.2vw, 15px)" }}
        >
          {subtitle}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProgramCard;
