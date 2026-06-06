"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black backdrop-blur-xl border-b border-white/5 py-[0.8vw]"
            : "bg-black py-[1.2vw]"
        }`}
        style={{ paddingLeft: "5vw", paddingRight: "5vw" }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-[0.6vw] group">
            <div className="">
              <img
                src="/images/Logo.png"
                alt="Logo"
                className="h-full w-full"
              />
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center" style={{ gap: "2.5vw" }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                className="relative group"
                style={{ fontSize: "0.85vw" }}
              >
                <span
                  className={`transition-colors duration-300 ${
                    activeLink === link.label
                      ? "text-primary-300"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
                {activeLink === link.label && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-px "
                  />
                )}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Menu Toggle */}
          <div className="flex items-center" style={{ gap: "1vw" }}>
            <a
              href="#contact"
              className="btn-primary hidden md:inline-flex"
              style={{ fontSize: "0.8vw", padding: "0.6vw 1.6vw" }}
            >
              Get Started
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            {/* Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ gap: "5px", width: "8vw", height: "8vw" }}
              aria-label="Toggle menu"
            >
              <span
                className={`block bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                style={{ width: "6vw", height: "2px" }}
              />
              <span
                className={`block bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                style={{ width: "4vw", height: "2px" }}
              />
              <span
                className={`block bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
                style={{ width: "6vw", height: "2px" }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/98 backdrop-blur-2xl md:hidden flex flex-col"
            style={{
              paddingTop: "20vw",
              paddingLeft: "8vw",
              paddingRight: "8vw",
            }}
          >
            <div className="flex flex-col" style={{ gap: "6vw" }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.label)}
                  className="text-white/80 hover:text-white transition-colors font-heading"
                  style={{ fontSize: "7vw" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                href="#contact"
                className="btn-primary self-start mt-4"
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "4vw", padding: "3vw 7vw" }}
              >
                Get Started →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
