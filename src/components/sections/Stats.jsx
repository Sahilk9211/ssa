"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered", desc: "Across 20+ industries" },
  { value: 98, suffix: "%", label: "Client Retention", desc: "Long-term partnerships" },
  { value: 12, suffix: "+", label: "Years Experience", desc: "Deep domain expertise" },
  { value: 40, suffix: "M+", label: "Users Served", desc: "Through our platforms" },
];

export default function Stats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #001a4d 0%, #0A0E1A 50%, #1a0a00 100%)",
        padding: "5vw",
      }}
      ref={ref}
    >
      {/* Decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "50vw",
          height: "20vw",
          background: "radial-gradient(ellipse, rgba(0,87,217,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-[90vw] mx-auto">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2vw" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div
                className="font-heading font-bold gradient-text leading-none mb-[0.5vw]"
                style={{ fontSize: "4.5vw" }}
              >
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    delay={i * 0.2}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <div className="font-semibold text-white" style={{ fontSize: "0.95vw" }}>
                {stat.label}
              </div>
              <div className="text-white/40 mt-1" style={{ fontSize: "0.75vw" }}>
                {stat.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 8vw !important;
          }
          .font-heading { font-size: 12vw !important; }
        }
      `}</style>
    </section>
  );
}
