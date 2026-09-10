"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";

const links = [
  { label: "PIPELINE", href: "#pipeline" },
  { label: "CORE SYSTEM", href: "#ecosystem" },
  { label: "INTERFACE", href: "#dashboard" },
  { label: "MODULES", href: "#modules" },
  { label: "BENCHMARKS", href: "#performance" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (y) => {
      setScrolled(y > 20);
    });
    return unsub;
  }, [scrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));

    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className={`pointer-events-auto relative flex items-center justify-between gap-6 rounded-xl px-5 py-2.5 transition-all duration-300 w-full max-w-5xl ${
          scrolled
            ? "border border-[#1B2632] bg-[#080C11]/85 shadow-[0_12px_32px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border border-[#1B2632]/40 bg-[#080C11]/20 backdrop-blur-sm"
        }`}
      >
        {/* Brand Logo & System Status */}
        <a
          href="#"
          className="group flex items-center gap-3 transition-opacity"
          aria-label="NEXUS Home"
        >
          {/* Geometric Tech Core Icon */}
          <div className="relative flex h-6 w-6 items-center justify-center rounded-md border border-[#1B2632] bg-[#0D131A] transition-colors group-hover:border-[#00E5FF]/40">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF]" />
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-extrabold tracking-widest text-[#F5F7FA]">
              NEXUS
            </span>
            <span className="hidden sm:inline-block rounded border border-[#00E5FF]/20 bg-[rgba(0,229,255,0.08)] px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-[#00E5FF]">
              SYS // ONLINE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-wider transition-all duration-200 rounded-md ${
                  isActive
                    ? "text-[#00E5FF] bg-[rgba(0,229,255,0.08)] border border-[#00E5FF]/25 font-semibold"
                    : "text-[#8B96A5] hover:text-[#F5F7FA] hover:bg-[#0D131A]"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Primary CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-primary py-1.5 px-4 text-[11px] tracking-wider"
          >
            <span>INITIALIZE</span>
            <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#1B2632] bg-[#0D131A] text-xs font-mono text-[#00E5FF] md:hidden transition-colors hover:border-[#00E5FF]/40"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer (Command Center Style) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="pointer-events-auto absolute left-4 right-4 top-[calc(100%+8px)] overflow-hidden rounded-xl border border-[#1B2632] bg-[#080C11]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#1B2632] px-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5E6977]">
                NAVIGATION // COMMAND
              </span>
              <span className="font-mono text-[9px] text-[#00E5FF]">v4.0</span>
            </div>

            <div className="flex flex-col gap-1.5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3.5 py-2.5 font-mono text-xs text-[#8B96A5] transition-colors hover:bg-[#0D131A] hover:text-[#00E5FF] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-[#5E6977]">→</span>
                </a>
              ))}
              <div className="mt-3 border-t border-[#1B2632] pt-3">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full py-2.5 text-center text-xs justify-center"
                >
                  <span>INITIALIZE SYSTEM</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}