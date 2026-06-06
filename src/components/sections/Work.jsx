"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const categories = ["All", "Web Dev", "Salesforce", "Mobile", "Design"];

const projects = [
  {
    title: "FinTrack Pro",
    category: "Web Dev",
    desc: "Real-time financial dashboard with AI-powered insights for enterprise clients.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "TypeScript", "AWS"],
    color: "#0057D9",
  },
  {
    title: "SalesForce360",
    category: "Salesforce",
    desc: "Custom Salesforce Lightning implementation with automated lead routing.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["SFDC", "Apex", "Lightning"],
    color: "#FF6B35",
  },
  {
    title: "Nexus Mobile",
    category: "Mobile",
    desc: "Cross-platform inventory management app with offline-first architecture.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "Redux", "SQLite"],
    color: "#10B981",
  },
  {
    title: "Brandflow Studio",
    category: "Design",
    desc: "Complete design system and brand identity for a Series B fintech startup.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Figma", "Design System"],
    color: "#8B5CF6",
  },
  {
    title: "LogiChain Platform",
    category: "Web Dev",
    desc: "Supply chain visibility platform processing 2M+ events daily.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    tags: ["React", "Node.js", "Kafka"],
    color: "#F59E0B",
  },
  {
    title: "CRM Sync Engine",
    category: "Salesforce",
    desc: "Bidirectional sync between Salesforce and 6 third-party data sources.",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    tags: ["SFDC API", "Middleware", "ETL"],
    color: "#EC4899",
  },
];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative overflow-hidden" style={{ backgroundColor: "#080C18" }}>
      <div className="section-divider" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-[3vw]"
        >
          <span className="tag mb-[1vw] inline-block">Portfolio</span>
          <h2 className="font-heading font-bold leading-tight" style={{ fontSize: "3.2vw" }}>
            Work We&apos;re{" "}
            <span className="gradient-text">Proud Of</span>
          </h2>
          <p className="text-white/50 mt-[1vw]" style={{ fontSize: "0.9vw" }}>
            A selection of projects that showcase our technical depth and design sensibility.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center flex-wrap mb-[3vw]"
          style={{ gap: "0.6vw" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="transition-all duration-300 font-medium"
              style={{
                padding: "0.5vw 1.5vw",
                borderRadius: "100px",
                fontSize: "0.8vw",
                fontFamily: "var(--font-body)",
                cursor: "pointer",
                border: activeFilter === cat ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                background: activeFilter === cat
                  ? "linear-gradient(135deg, #0057D9, #3385ff)"
                  : "transparent",
                color: activeFilter === cat ? "white" : "rgba(255,255,255,0.5)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "1.8vw" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card group overflow-hidden cursor-pointer"
                style={{ borderRadius: "1.2vw" }}
                whileHover={{ y: -6 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "15vw" }}>
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, transparent 40%, rgba(10,14,26,0.9) 100%)`,
                    }}
                  />
                  {/* Category badge */}
                  <div
                    className="absolute top-[1vw] left-[1vw]"
                    style={{
                      background: `${project.color}22`,
                      border: `1px solid ${project.color}44`,
                      color: project.color,
                      fontSize: "0.65vw",
                      fontFamily: "var(--font-mono)",
                      padding: "0.3vw 0.8vw",
                      borderRadius: "100px",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.5vw" }}>
                  <h3 className="font-heading font-semibold text-white mb-[0.5vw]" style={{ fontSize: "1.05vw" }}>
                    {project.title}
                  </h3>
                  <p className="text-white/50 mb-[1vw]" style={{ fontSize: "0.78vw", lineHeight: 1.6 }}>
                    {project.desc}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap" style={{ gap: "0.3vw" }}>
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-white/30"
                          style={{
                            fontSize: "0.6vw",
                            fontFamily: "var(--font-mono)",
                            background: "rgba(255,255,255,0.04)",
                            padding: "0.2vw 0.5vw",
                            borderRadius: "4px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-white/30 group-hover:text-white/70 transition-colors text-sm"
                      style={{ fontSize: "0.9vw" }}
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-[3vw]"
        >
          <a href="#contact" className="btn-outline">
            Start Your Project →
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          #work .section-container > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          #work .section-container > div:last-child .relative { height: 30vw !important; }
        }
        @media (max-width: 640px) {
          #work .section-container > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #work h2 { font-size: 7vw !important; }
          button { padding: 2vw 4vw !important; font-size: 3vw !important; }
        }
      `}</style>
    </section>
  );
}
