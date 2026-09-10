"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      {/* Background Atmosphere Spotlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 750,
          height: 450,
          background:
            "radial-gradient(ellipse, rgba(0, 229, 255, 0.08) 0%, transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <Reveal>
          <span className="tech-badge">
            SYSTEM ACCESS RESERVATION
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 space-y-1">
            <h2 className="text-4xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl">
              INITIALIZE NEXUS.
            </h2>
            <p className="text-3xl font-extrabold tracking-tight text-[#8B96A5] sm:text-5xl">
              SECURE SYSTEM ACCESS.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mt-6 text-base text-[#8B96A5] sm:text-lg max-w-xl mx-auto leading-relaxed">
            Reserve hardware allocation slots or request enterprise access to our low-latency system command APIs.
          </p>
        </Reveal>

        {/* System Access Form */}
        <Reveal delay={0.25}>
          <div className="mt-10 max-w-md mx-auto">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-xl surface-panel border border-[#00E5FF]/60 text-center bg-[#0D131A] shadow-[0_0_25px_rgba(0,229,255,0.15)]"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-ping" />
                  <p className="text-xs font-bold text-[#00E5FF] font-mono uppercase tracking-wider">
                    RESERVATION CONFIRMED // SLOT #8841
                  </p>
                </div>
                <p className="text-xs text-[#8B96A5] font-mono leading-relaxed mt-2">
                  Your system node allocation has been initialized. Our systems engineering team will transmit deployment credentials to {email}.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-2.5 p-1.5 rounded-xl surface-panel border border-[#1B2632] bg-[#0D131A] shadow-[0_12px_32px_rgba(0,0,0,0.7)]"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate or work email..."
                  className="flex-1 bg-transparent px-4 py-3 text-xs sm:text-sm text-[#F5F7FA] placeholder-[#5E6977] focus:outline-none font-mono"
                />
                <button
                  type="submit"
                  className="btn-primary py-3 px-6 whitespace-nowrap"
                >
                  <span>INITIALIZE</span>
                  <span>→</span>
                </button>
              </form>
            )}

            <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-mono text-[#5E6977]">
              <span>ENCRYPTED PROTOCOL</span>
              <span>•</span>
              <span>DIRECT DISPATCH</span>
              <span>•</span>
              <span>ZERO WAITLIST DELAY</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
