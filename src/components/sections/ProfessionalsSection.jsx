import React from "react";
import { motion } from "framer-motion";
import ProfessionalCard from "../common/Card/ProfessionalCard";
import SectionHeader from "../common/Header/SectionHeader";

const ProfessionalsSection = ({
  title = "Meet our professionals",
  subtitle = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  buttonLabel = "View All",
  professionals,
  onButtonClick,
}) => {
  return (
    <section
      className="bg-white relative"
      style={{ padding: "clamp(40px, 6vw, 80px) clamp(20px, 8vw, 100px)" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start justify-between gap-6 mb-10"
        >
          <div style={{ maxWidth: "clamp(260px, 38vw, 460px)" }}>
            <SectionHeader title={title} subtitle={subtitle} />
          </div>
          {buttonLabel && (
            <motion.button
              onClick={onButtonClick}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#7ab317] text-white rounded-full font-semibold hover:bg-[#6a9e14] transition-colors flex-shrink-0"
              style={{
                padding: "clamp(10px, 1.1vw, 14px) clamp(20px, 2.5vw, 36px)",
                fontSize: "clamp(12px, 1.1vw, 15px)",
              }}
            >
              {buttonLabel}
            </motion.button>
          )}
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(12px, 2vw, 30px)",
          }}
        >
          {professionals.map((pro, index) => (
            <div
              key={index}
              className="relative"
              //   style={{
              //     borderRight:
              //       index < professionals.length - 1
              //         ? "1px solid #e5e7eb"
              //         : "none",
              //     paddingRight:
              //       index < professionals.length - 1
              //         ? "clamp(16px, 2.5vw, 36px)"
              //         : 0,
              //   }}
            >
              <ProfessionalCard
                image={pro.image}
                name={pro.name}
                role={pro.role}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
