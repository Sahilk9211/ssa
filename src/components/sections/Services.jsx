"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  {
    icon: "⬡",
    title: "Web Development",
    desc: "Next.js, React, and Node.js solutions built for performance, scalability, and SEO. From landing pages to complex SaaS platforms.",
    tags: ["Next.js", "React", "Node.js"],
    color: "#0057D9",
  },
  {
    icon: "◈",
    title: "Salesforce CRM",
    desc: "Full SFDC implementation, customization, and API integration. Lightning components, Apex development, and data migration.",
    tags: ["SFDC", "Apex", "Lightning"],
    color: "#FF6B35",
  },
  {
    icon: "◎",
    title: "Cloud & DevOps",
    desc: "AWS, Azure, and GCP architecture. CI/CD pipelines, containerization, and infrastructure as code for reliable deployments.",
    tags: ["AWS", "Docker", "CI/CD"],
    color: "#10B981",
  },
  {
    icon: "◑",
    title: "UI/UX Design",
    desc: "Research-driven design that converts. Figma prototypes, design systems, and pixel-perfect implementation with your brand.",
    tags: ["Figma", "Design System", "UX"],
    color: "#8B5CF6",
  },
  {
    icon: "⬖",
    title: "API Integration",
    desc: "REST, GraphQL, and third-party API integrations. Payment gateways, CRM sync, analytics pipelines, and more.",
    tags: ["REST", "GraphQL", "Webhooks"],
    color: "#F59E0B",
  },
  {
    icon: "◰",
    title: "Mobile Apps",
    desc: "React Native and Flutter apps that deliver native performance. Cross-platform builds with shared codebase and native feel.",
    tags: ["React Native", "Flutter", "iOS/Android"],
    color: "#EC4899",
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative overflow-hidden" style={{ backgroundColor: "#080C18" }}>
      <div className="section-divider" />

      {/* Background accent */}
      <div
        className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-[4vw]"
        >
          <span className="tag mb-[1vw] inline-block">Our Expertise</span>
          <h2
            className="font-heading font-bold leading-tight"
            style={{ fontSize: "3.2vw" }}
          >
            Services That Drive{" "}
            <span className="gradient-text">Real Results</span>
          </h2>
          <p
            className="text-white/50 mt-[1vw] mx-auto"
            style={{ fontSize: "0.95vw", maxWidth: "35vw" }}
          >
            End-to-end digital solutions across design, development, and automation — tailored to your business goals.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5vw" }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card group relative overflow-hidden cursor-pointer"
              style={{ padding: "2.5vw", borderRadius: "1.2vw" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 20% 50%, ${service.color}10 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div
                className="mb-[1.5vw] flex items-center justify-center font-mono select-none"
                style={{
                  width: "3vw",
                  height: "3vw",
                  borderRadius: "0.8vw",
                  background: `${service.color}18`,
                  border: `1px solid ${service.color}30`,
                  fontSize: "1.4vw",
                  color: service.color,
                  minWidth: "40px",
                  minHeight: "40px",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="font-heading font-semibold text-white mb-[0.8vw]"
                style={{ fontSize: "1.1vw" }}
              >
                {service.title}
              </h3>

              {/* Desc */}
              <p
                className="text-white/50 leading-relaxed mb-[1.5vw]"
                style={{ fontSize: "0.82vw" }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap" style={{ gap: "0.4vw" }}>
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white/40"
                    style={{
                      fontSize: "0.65vw",
                      fontFamily: "var(--font-mono)",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "0.25vw 0.6vw",
                      borderRadius: "100px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div
                className="absolute bottom-[1.8vw] right-[1.8vw] text-white/20 group-hover:text-white/60 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                style={{ fontSize: "1.1vw" }}
              >
                ↗
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          #services .section-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #services .section-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #services h2 { font-size: 7vw !important; }
          #services .section-container > div:first-child p { max-width: 85vw !important; font-size: 3.5vw !important; }
          #services h3 { font-size: 4.5vw !important; }
          #services p.text-white\\/50 { font-size: 3.5vw !important; }
        }
      `}</style>
    </section>
  );
}
