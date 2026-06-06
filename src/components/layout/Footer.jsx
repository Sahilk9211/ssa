import React from "react";
import { motion } from "framer-motion";

// ── Data ───────────────────────────────────────────────────
const NAV_ROW1 = ["About Us", "Coaches", "News", "Matches", "Events", "FAQs"];
const NAV_ROW2 = ["Programs", "Amenities", "Blogs"];

const SOCIALS = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="20"
        height="20"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
];

// ── Icons ──────────────────────────────────────────────────
const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7ab317"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    style={{ flexShrink: 0, marginTop: 2 }}
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7ab317"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    style={{ flexShrink: 0 }}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#7ab317"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="16"
    height="16"
    style={{ flexShrink: 0 }}
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// ── SSA Logo ───────────────────────────────────────────────
const SSALogo = () => (
  <div className="flex flex-col items-center justify-center">
    <img src="/images/DarkLogo.png" alt="logo" />
  </div>
);

// ── Main Footer ────────────────────────────────────────────
const Footer = () => (
  <footer className="bg-white overflow-hidden">
    {/* ══════════════════════════════════════════════
        MAIN BODY — left panel (logo) + right panel (links + info)
    ══════════════════════════════════════════════ */}
    <div
      className="flex flex-col md:flex-row"
      style={{ minHeight: "clamp(280px,38vw,480px)" }}
    >
      {/* ── LEFT PANEL — Logo centered ── */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
        className="flex items-center justify-center bg-white"
        style={{
          width: "clamp(140px,20vw,260px)",
          minWidth: "clamp(140px,20vw,260px)",
          borderRight: "1px solid #e5e7eb",
          padding: "clamp(24px,3vw,40px)",
        }}
      >
        <SSALogo />
      </motion.div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex flex-col">
        {/* Top section — nav links */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            padding:
              "clamp(24px,3.5vw,48px) clamp(24px,4vw,60px) clamp(16px,2.5vw,32px)",
          }}
        >
          {/* Row 1 */}
          <div
            className="flex flex-wrap"
            style={{
              gap: "clamp(6px,0.5vw,8px) clamp(28px,4.5vw,100px)",
              marginBottom: "clamp(10px,1.5vw,18px)",
            }}
          >
            {NAV_ROW1.map((label, i) => (
              <motion.a
                key={label}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-gray-800 font-medium hover:text-[#7ab317] transition-colors"
                style={{ fontSize: "clamp(12px,1.05vw,16px)" }}
              >
                {label}
              </motion.a>
            ))}
          </div>
          {/* Row 2 */}
          <div
            className="flex flex-wrap"
            style={{ gap: "clamp(6px,0.5vw,8px) clamp(28px,4.5vw,70px)" }}
          >
            {NAV_ROW2.map((label, i) => (
              <motion.a
                key={label}
                href="#"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.36 + i * 0.06 }}
                className="text-gray-800 font-medium hover:text-[#7ab317] transition-colors"
                style={{ fontSize: "clamp(12px,1.05vw,16px)" }}
              >
                {label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Horizontal divider */}
        <div
          style={{
            height: "1px",
            background: "black",
            margin: "0 clamp(24px,4vw,60px)",
          }}
        />

        {/* Bottom section — left: info, right: social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1 flex flex-col md:flex-row"
          style={{
            padding: "clamp(20px,3vw,40px) clamp(24px,4vw,60px)",
            gap: "clamp(24px,10vw,120px)",
          }}
        >
          {/* Left side — Signature Slam Academy info */}
          <div className="flex-">
            <h3
              className="font-medium mb-4"
              style={{ fontSize: "clamp(15px,1.3vw,20px)", color: "#99B81B" }}
            >
              Signature Slam Academy
            </h3>
            <div
              className="flex flex-col"
              style={{ gap: "clamp(10px,1vw,16px)" }}
            >
              <div className="flex items-start gap-3">
                <LocationIcon />
                <span
                  className="text-gray-600"
                  style={{
                    fontSize: "clamp(12px,0.9vw,14px)",
                    lineHeight: 1.5,
                  }}
                >
                  30 Wills Hill Road, Lovedale, NSW
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon />
                <a
                  href="tel:+915642589752"
                  className="text-gray-600 hover:text-[#7ab317] transition-colors"
                  style={{ fontSize: "clamp(12px,0.9vw,14px)" }}
                >
                  + 91 5642589752
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MailIcon />
                <a
                  href="mailto:info@ssagroup.com"
                  className="text-gray-600 hover:text-[#7ab317] transition-colors"
                  style={{ fontSize: "clamp(12px,0.9vw,14px)" }}
                >
                  info@ssagroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Right side — Connect with us */}
          <div>
            <h3
              className="font-bold mb-4"
              style={{ fontSize: "clamp(15px,1.3vw,20px)", color: "#111" }}
            >
              Connect with us
            </h3>
            <div
              className="flex items-center"
              style={{ gap: "clamp(14px,1.5vw,22px)" }}
            >
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ scale: 1.2, color: "#7ab317" }}
                  className="text-gray-800 transition-colors"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* ══════════════════════════════════════════════
        BOTTOM BAR — dark green → lime gradient
    ══════════════════════════════════════════════ */}
    <div
      className="flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:items-center md:text-left gap-2"
      style={{
        background: "linear-gradient(90.14deg, #003A5D 22.84%, #99B81B 89.63%)",
        padding: "clamp(12px,1.4vw,18px) clamp(20px,5vw,72px)",
      }}
    >
      <span
        className="text-white/90"
        style={{ fontSize: "clamp(11px,0.8vw,13px)" }}
      >
        Terms And Condition
      </span>

      <span
        className="text-white/85"
        style={{ fontSize: "clamp(11px,0.8vw,13px)" }}
      >
        © 2023 All Rights Reserved www.signatureslamacademy.com
      </span>

      <span
        className="text-white/90"
        style={{ fontSize: "clamp(11px,0.8vw,13px)" }}
      >
        Privacy Policy
      </span>
    </div>
  </footer>
);

export default Footer;
