import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Header/SectionHeader";
import FeatureItem from "./FeatureItem";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const columnVariants = {
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const KeyFeaturesSection = ({
  title = "key Features",
  subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonLabel = "Register Now",
  features,
  onButtonClick,
}) => {
  const half = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, half);
  const rightFeatures = features.slice(half);

  return (
    <section className="relative overflow-hidden py-12 md:py-0 md:px-10 px-6 bg-white">
      <div
        className="absolute right-0 top-0 w-64 h-full pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 18px, rgba(100,160,0,0.07) 18px, rgba(100,160,0,0.07) 19px), repeating-linear-gradient(90deg, transparent, transparent 18px, rgba(100,160,0,0.07) 18px, rgba(100,160,0,0.07) 19px)",
          borderRadius: "50% 0 0 50%",
        }}
      />

      <div className="relative z-10 max-w-[75vw] mx-auto space-y-3">
        {/* Header animation */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader
            title={title}
            subtitle={subtitle}
            buttonLabel={buttonLabel}
            onButtonClick={onButtonClick}
          />
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left column */}
          <motion.div
            className="md:pr-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {leftFeatures.map((feature, index) => (
              <FeatureItem key={index} text={feature} direction="left" />
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            className="md:pl-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {rightFeatures.map((feature, index) => (
              <FeatureItem key={index} text={feature} direction="right" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeaturesSection;
