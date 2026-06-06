"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We dig deep into your business goals, user needs, and technical landscape. You get a clear roadmap — not just a quote.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Figma wireframes and interactive prototypes that align stakeholders before a line of code is written.",
    icon: "✏️",
  },
  {
    num: "03",
    title: "Build & Integrate",
    desc: "Agile sprints with weekly demos. Clean code, test coverage, and API integrations that work reliably.",
    icon: "⚙️",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    desc: "Smooth deployment, performance tuning, and SEO setup. We don't disappear after go-live.",
    icon: "🚀",
  },
];

export default function Process() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--dark)" }}>
      <div className="section-divider" />

      <div className="section-container relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-[4vw]"
        >
          <span className="tag mb-[1vw] inline-block">Our Process</span>
          <h2 className="font-heading font-bold leading-tight" style={{ fontSize: "3.2vw" }}>
            How We <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="absolute hidden md:block"
            style={{
              top: "3.5vw",
              left: "12%",
              right: "12%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(0,87,217,0.3), rgba(255,107,53,0.3), transparent)",
            }}
          />

          <div className="grid" style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2vw" }}>
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center relative"
              >
                {/* Number circle */}
                <div className="flex justify-center mb-[1.5vw]">
                  <div
                    className="relative flex items-center justify-center font-heading font-bold"
                    style={{
                      width: "4.5vw",
                      height: "4.5vw",
                      borderRadius: "50%",
                      fontSize: "0.8vw",
                      color: "rgba(255,255,255,0.4)",
                      background: "rgba(0,87,217,0.08)",
                      border: "1px solid rgba(0,87,217,0.2)",
                      minWidth: "52px",
                      minHeight: "52px",
                    }}
                  >
                    <span style={{ fontSize: "1.8vw" }}>{step.icon}</span>
                    <span
                      className="absolute font-mono text-primary-400 font-bold"
                      style={{ top: "-0.8vw", right: "-0.5vw", fontSize: "0.65vw" }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                <h3
                  className="font-heading font-semibold text-white mb-[0.6vw]"
                  style={{ fontSize: "1.05vw" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-white/45 leading-relaxed"
                  style={{ fontSize: "0.8vw" }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section .section-container > div:last-child > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section h2 { font-size: 7vw !important; }
          section h3 { font-size: 4.5vw !important; }
          section p.text-white\\/45 { font-size: 3.5vw !important; }
        }
        @media (max-width: 480px) {
          section .section-container > div:last-child > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
