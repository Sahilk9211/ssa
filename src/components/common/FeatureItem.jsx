import React from "react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === "right" ? 30 : -30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const arrowVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.1 },
  },
};

const FeatureItem = ({ text, direction = "left" }) => {
  return (
    <motion.div
      className="flex items-start gap-2.5 py-3"
      variants={itemVariants}
      custom={direction}
    >
      <motion.span
        className="text-[#7ab317] text-base"
        variants={arrowVariants}
      >
        →
      </motion.span>
      <p className="text-sm text-black leading-snug">{text}</p>
    </motion.div>
  );
};

export default FeatureItem;
