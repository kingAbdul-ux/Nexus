"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "motion/react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Executives", href: "#executives" },
  { label: "Join NACOS", href: "#join" },
];

export default function NacosNavbar() {
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
        className={`pointer-events-auto relative flex items-center justify-between gap-6 rounded-2xl px-6 py-3 transition-all duration-500 w-full max-w-6xl ${
          scrolled
            ? "surface-glass shadow-xl shadow-black/20"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity"
          aria-label="NACOS Nile Home"
        >
          {/* Logo Icon */}
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#4FD1C5]/20 bg-[#0D1F3D] transition-all duration-300 group-hover:border-[#4FD1C5]/40 group-hover:shadow-lg group-hover:shadow-[#4FD1C5]/10">
            <span className="text-xl font-bold text-[#4FD1C5]">N</span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-sm font-extrabold tracking-widest text-[#F5F7FA] transition-colors group-hover:text-[#4FD1C5]">
              NACOS
            </span>
            <span className="text-[10px] font-medium text-[#4FD1C5] tracking-wide">
              NILE CHAPTER
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
                className={`relative px-4 py-2 font-mono text-[11px] font-medium tracking-wider transition-all duration-300 rounded-lg ${
                  isActive
                    ? "text-[#4FD1C5] bg-[rgba(79,209,197,0.1)] border border-[#4FD1C5]/30"
                    : "text-[#8B96A5] hover:text-[#F5F7FA] hover:bg-[rgba(245,247,250,0.05)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#4FD1C5] rounded-full"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#4FD1C5]/20 bg-[#0D1F3D] text-xs font-mono text-[#4FD1C5] md:hidden transition-all duration-300 hover:border-[#4FD1C5]/40 hover:bg-[rgba(79,209,197,0.1)]"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
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
              className="h-5 w-5"
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

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="pointer-events-auto absolute left-4 right-4 top-[calc(100%+12px)] overflow-hidden rounded-2xl border border-[#4FD1C5]/20 bg-[#0A1628]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#4FD1C5]/10 px-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#5E6977]">
                Navigation
              </span>
              <span className="font-mono text-[9px] text-[#4FD1C5]">NACOS NILE</span>
            </div>

            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm text-[#8B96A5] transition-all duration-200 hover:bg-[rgba(79,209,197,0.1)] hover:text-[#4FD1C5] flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="text-[#5E6977] group-hover:text-[#4FD1C5] transition-colors">→</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
