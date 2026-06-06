import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./Header/SectionHeader";

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Glimpsesection = ({
  title = "A Glimpse of Excellence",
  subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  buttonLabel = "Register Now",
  images,
  onButtonClick,
}) => {
  return (
    <section className="md:py-12 bg-white">
      <div className="max-w-[75vw] mx-auto md:space-y-10">
        {/* Header */}
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

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-3"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden h-56"
              variants={imageVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              }}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.08,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Glimpsesection;
