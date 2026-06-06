import React from "react";
import { motion } from "framer-motion";
import ProgramCard from "../common/Card/ProgramCard";
import SectionHeader from "../common/Header/SectionHeader";

const programsData = [
  {
    image:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=500&q=80",
    title: "Academy",
    subtitle: "Live and train with us",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=500&q=80",
    title: "Camps",
    subtitle: "Train like a pro with us",
  },
  {
    image:
      "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?w=500&q=80",
    title: "Performance",
    subtitle: "Elevate your game with us",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.25,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const ProgramsSection = ({
  title = "Programs",
  subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  buttonLabel = "Register Now",
  programs = programsData,
  onButtonClick,
}) => {
  return (
    <section
      className="bg-white"
      style={{ padding: "clamp(32px, 5vw, 64px) clamp(20px, 8vw, 100px)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header row */}
        <div className="flex items-start justify-between gap-6 mb-8">
          <motion.div
            style={{ maxWidth: "clamp(260px, 40vw, 480px)" }}
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionHeader title={title} subtitle={subtitle} />
          </motion.div>

          {buttonLabel && (
            <motion.button
              onClick={onButtonClick}
              className="bg-[#7ab317] text-white rounded-full font-semibold hover:bg-[#6a9e14] transition-colors flex-shrink-0"
              style={{
                padding: "clamp(8px, 1vw, 12px) clamp(16px, 2vw, 28px)",
                fontSize: "clamp(12px, 1.1vw, 15px)",
              }}
              variants={buttonVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              {buttonLabel}
            </motion.button>
          )}
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "clamp(10px, 1.5vw, 20px)",
          }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={cardVariants}>
              <ProgramCard
                image={program.image}
                title={program.title}
                subtitle={program.subtitle}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
