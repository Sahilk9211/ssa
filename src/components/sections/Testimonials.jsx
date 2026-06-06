"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const testimonials = [
  {
    quote: "SSA completely transformed our Salesforce implementation. What used to take our team hours is now automated, and the Lightning components they built are exactly what we needed.",
    name: "Jennifer Walsh",
    role: "VP of Sales Operations",
    company: "TechCorp Inc.",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5,
  },
  {
    quote: "The Next.js platform SSA built for us went from concept to launch in 8 weeks. The performance is stellar — Lighthouse scores consistently above 95, and our conversion rate is up 34%.",
    name: "David Kim",
    role: "CTO",
    company: "GrowthBase",
    img: "https://randomuser.me/api/portraits/men/38.jpg",
    rating: 5,
  },
  {
    quote: "Working with SSA feels different. They push back when needed, bring genuine expertise, and they genuinely care about outcomes — not just deliverables. Highly recommend.",
    name: "Amara Okonkwo",
    role: "Head of Digital",
    company: "NovaMed Group",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    quote: "SSA's API integration work connected our Salesforce org to 5 legacy systems. Clean code, thorough documentation, and they nailed the deadline. We've already engaged them for phase 2.",
    name: "Robert Chang",
    role: "Director of IT",
    company: "Pacific Logistics",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const next = () => setActive((a) => (a + 1) % testimonials.length);
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative overflow-hidden" style={{ background: "var(--dark)" }}>
      <div className="section-divider" />

      {/* Glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(ellipse, rgba(0,87,217,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-[4vw]"
        >
          <span className="tag mb-[1vw] inline-block">Testimonials</span>
          <h2 className="font-heading font-bold leading-tight" style={{ fontSize: "3.2vw" }}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        {/* Main Testimonial */}
        <div
          className="relative glass-card mx-auto"
          style={{ maxWidth: "60vw", borderRadius: "1.5vw", padding: "4vw", marginBottom: "3vw" }}
        >
          {/* Quote mark */}
          <div
            className="absolute font-heading text-primary-500/10 font-bold select-none pointer-events-none"
            style={{ top: "1vw", left: "2vw", fontSize: "10vw", lineHeight: 1 }}
          >
            "
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              {/* Stars */}
              <div className="flex mb-[1.5vw]" style={{ gap: "0.3vw" }}>
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <span key={i} style={{ color: "#F59E0B", fontSize: "1vw" }}>★</span>
                ))}
              </div>

              <p
                className="text-white/80 leading-relaxed mb-[2vw] font-heading"
                style={{ fontSize: "1.15vw", fontStyle: "italic" }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <div className="flex items-center" style={{ gap: "1vw" }}>
                <div className="relative rounded-full overflow-hidden" style={{ width: "3.5vw", height: "3.5vw", minWidth: "44px", minHeight: "44px" }}>
                  <Image
                    src={testimonials[active].img}
                    alt={testimonials[active].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white" style={{ fontSize: "0.95vw" }}>
                    {testimonials[active].name}
                  </div>
                  <div className="text-white/40" style={{ fontSize: "0.78vw" }}>
                    {testimonials[active].role} · {testimonials[active].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center" style={{ gap: "1.5vw" }}>
          <button
            onClick={prev}
            className="glass-card text-white/60 hover:text-white hover:border-primary-500/40 transition-all duration-300 flex items-center justify-center"
            style={{ width: "3vw", height: "3vw", borderRadius: "50%", fontSize: "1.2vw", minWidth: "40px", minHeight: "40px" }}
          >
            ←
          </button>

          <div className="flex" style={{ gap: "0.5vw" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === active ? "2vw" : "0.5vw",
                  height: "0.5vw",
                  minWidth: i === active ? "24px" : "8px",
                  minHeight: "8px",
                  background: i === active ? "var(--primary)" : "rgba(255,255,255,0.2)",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="glass-card text-white/60 hover:text-white hover:border-primary-500/40 transition-all duration-300 flex items-center justify-center"
            style={{ width: "3vw", height: "3vw", borderRadius: "50%", fontSize: "1.2vw", minWidth: "40px", minHeight: "40px" }}
          >
            →
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #testimonials .glass-card { max-width: 90vw !important; padding: 8vw !important; }
          #testimonials h2 { font-size: 7vw !important; }
          #testimonials p.text-white\\/80 { font-size: 4vw !important; }
        }
      `}</style>
    </section>
  );
}
