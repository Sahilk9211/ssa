"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const services = [
  "Web Development",
  "Salesforce / SFDC",
  "Mobile App",
  "UI/UX Design",
  "API Integration",
  "Cloud & DevOps",
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    // Simulate API call (replace with real endpoint or Salesforce Web-to-Lead)
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "0.6vw",
    padding: "0.9vw 1.2vw",
    color: "white",
    fontSize: "0.85vw",
    outline: "none",
    transition: "border-color 0.3s",
    fontFamily: "var(--font-body)",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "0.4vw",
    fontSize: "0.78vw",
    color: "rgba(255,255,255,0.5)",
    fontWeight: "500",
  };

  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: "#080C18" }}>
      <div className="section-divider" />

      {/* Glow */}
      <div
        className="absolute right-0 bottom-0 rounded-full pointer-events-none"
        style={{
          width: "30vw",
          height: "30vw",
          background: "radial-gradient(ellipse, rgba(255,107,53,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="section-container relative z-10" ref={ref}>
        <div className="grid" style={{ gridTemplateColumns: "1fr 1.4fr", gap: "6vw", alignItems: "start" }}>
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="tag mb-[1.5vw] inline-block">Get In Touch</span>
            <h2 className="font-heading font-bold leading-tight mb-[1.5vw]" style={{ fontSize: "3vw" }}>
              Ready to Build{" "}
              <span className="gradient-text">Something Great?</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-[3vw]" style={{ fontSize: "0.9vw" }}>
              Tell us about your project. Our team will review your requirements and get back to you within 24 hours with a tailored proposal.
            </p>

            {/* Contact Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5vw" }}>
              {[
                { icon: "✉", label: "Email Us", value: "hello@ssadigital.com" },
                { icon: "📞", label: "Call Us", value: "+1 (555) 123-4567" },
                { icon: "📍", label: "Location", value: "San Francisco, CA · Remote Worldwide" },
              ].map((item) => (
                <div key={item.label} className="flex items-start" style={{ gap: "1vw" }}>
                  <div
                    className="flex items-center justify-center bg-primary-500/10 border border-primary-500/20"
                    style={{
                      width: "2.5vw",
                      height: "2.5vw",
                      borderRadius: "0.6vw",
                      fontSize: "0.9vw",
                      flexShrink: 0,
                      minWidth: "32px",
                      minHeight: "32px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-white/40" style={{ fontSize: "0.7vw" }}>{item.label}</div>
                    <div className="text-white" style={{ fontSize: "0.85vw" }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Salesforce note */}
            <div
              className="glass-card mt-[2.5vw]"
              style={{ padding: "1.5vw", borderRadius: "1vw" }}
            >
              <div className="flex items-center mb-[0.8vw]" style={{ gap: "0.6vw" }}>
                <span style={{ fontSize: "1.2vw" }}>☁️</span>
                <span className="font-semibold text-white" style={{ fontSize: "0.85vw" }}>Salesforce Partner</span>
              </div>
              <p className="text-white/40" style={{ fontSize: "0.75vw", lineHeight: 1.6 }}>
                We&apos;re experienced with Salesforce Web-to-Lead, SFDC API integration, and Apex-based form submissions. Ask about our SFDC integration options.
              </p>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card"
            style={{ padding: "3vw", borderRadius: "1.5vw" }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
                style={{ padding: "3vw 0" }}
              >
                <div style={{ fontSize: "4vw", marginBottom: "1vw" }}>✅</div>
                <h3 className="font-heading font-bold text-white mb-[0.8vw]" style={{ fontSize: "1.5vw" }}>
                  Message Received!
                </h3>
                <p className="text-white/50" style={{ fontSize: "0.85vw" }}>
                  We&apos;ll review your project and get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2vw" }}>
                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.2vw" }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      style={inputStyle}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      style={inputStyle}
                      required
                    />
                  </div>
                </div>

                <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", gap: "1.2vw" }}>
                  <div>
                    <label style={labelStyle}>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                    >
                      <option value="" style={{ background: "#111827" }}>Select budget</option>
                      <option value="<10k" style={{ background: "#111827" }}>Under $10k</option>
                      <option value="10-25k" style={{ background: "#111827" }}>$10k – $25k</option>
                      <option value="25-50k" style={{ background: "#111827" }}>$25k – $50k</option>
                      <option value="50k+" style={{ background: "#111827" }}>$50k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Service Needed</label>
                  <div className="flex flex-wrap" style={{ gap: "0.5vw" }}>
                    {services.map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setFormData({ ...formData, service: s })}
                        style={{
                          padding: "0.4vw 1vw",
                          borderRadius: "100px",
                          fontSize: "0.72vw",
                          cursor: "pointer",
                          border: formData.service === s
                            ? "1px solid rgba(0,87,217,0.8)"
                            : "1px solid rgba(255,255,255,0.1)",
                          background: formData.service === s
                            ? "rgba(0,87,217,0.2)"
                            : "transparent",
                          color: formData.service === s ? "#60a5fa" : "rgba(255,255,255,0.4)",
                          transition: "all 0.2s",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    rows={4}
                    style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                    required
                  />
                </div>

                {error && (
                  <p style={{ fontSize: "0.78vw", color: "#f87171" }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary justify-center"
                  style={{ width: "100%", opacity: submitting ? 0.7 : 1 }}
                >
                  {submitting ? (
                    <>
                      <span
                        className="inline-block border-2 border-white/30 border-t-white rounded-full animate-spin"
                        style={{ width: "1vw", height: "1vw", minWidth: "14px", minHeight: "14px" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-white/25" style={{ fontSize: "0.68vw" }}>
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          #contact .section-container > div {
            grid-template-columns: 1fr !important;
          }
          #contact h2 { font-size: 7vw !important; }
          #contact input, #contact select, #contact textarea {
            font-size: 3.5vw !important;
            padding: 3vw !important;
            border-radius: 2vw !important;
          }
          #contact label { font-size: 3vw !important; }
          #contact .glass-card { padding: 6vw !important; }
          #contact .grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
