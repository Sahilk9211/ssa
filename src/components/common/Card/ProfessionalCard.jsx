import React from "react";
import { motion } from "framer-motion";

const ProfessionalCard = ({ image, name, role, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: "easeOut" }}
      className="flex flex-col"
    >
      {/* Image */}
      <motion.div
        className="rounded-xl overflow-hidden"
        style={{ height: "clamp(240px, 30vw, 335px)" }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Text */}
      <div className="pt-4 pb-2">
        <h3
          className="font-bold text-gray-900 mb-1"
          style={{ fontSize: "clamp(16px, 1.6vw, 22px)" }}
        >
          {name}
        </h3>
        <p
          className="text-gray-500 italic leading-snug"
          style={{ fontSize: "clamp(12px, 1vw, 14px)" }}
        >
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default ProfessionalCard;
