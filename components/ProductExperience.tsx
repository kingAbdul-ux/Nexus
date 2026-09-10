"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const HUD_METRICS = [
  { label: "Core Clock", value: "5.0 GHz Turbo", status: "NOMINAL" },
  { label: "Neural TOPS", value: "64 TOPS Active", status: "ONLINE" },
  { label: "Vapor Temp", value: "34°C Idle", status: "OPTIMAL" },
  { label: "Memory Bus", value: "1.2 TB/s", status: "ACTIVE" },
];

export default function ProductExperience() {
  const [activeMetric, setActiveMetric] = useState(0);

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-28 lg:py-40 border-t border-white/10 bg-[#030712]"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              THE NEXUS EXPERIENCE
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Intuitive. Powerful. Uncompromised.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Experience a unified digital interface designed for instant control over complex computational workloads.
            </p>
          </div>
        </Reveal>

        {/* Large Product/Interface Preview Box */}
        <Reveal delay={0.15}>
          <div className="glass-panel rounded-3xl p-4 sm:p-8 border border-[#00f0ff]/20 bg-[#030712]/90 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden">
            
            {/* Window Chrome Controls */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 px-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                NEXUS CONTROL SYSTEM v4.0
              </span>
              <span className="text-xs font-mono text-[#00f0ff]">SYSTEM READY</span>
            </div>

            {/* Main Visual Screen Container */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden glass-panel p-2">
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/70">
                <Image
                  src="/images/nexus_interface.png"
                  alt="NEXUS Workspace Control Interface"
                  fill
                  sizes="100vw"
                  className="object-cover object-center transform transition-transform duration-700 hover:scale-102"
                />

                {/* Interactive HUD Overlay Metrics */}
                <div className="absolute top-6 right-6 hidden sm:flex flex-col gap-2">
                  {HUD_METRICS.map((m, idx) => (
                    <button
                      key={m.label}
                      type="button"
                      onClick={() => setActiveMetric(idx)}
                      className={`px-4 py-2 rounded-xl text-left font-mono border backdrop-blur-md transition-all ${
                        activeMetric === idx
                          ? "border-[#00f0ff] bg-[#030712]/90 text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                          : "border-white/10 bg-black/40 text-white/60 hover:text-white"
                      }`}
                    >
                      <p className="text-[10px] uppercase text-white/40">{m.label}</p>
                      <p className="text-xs font-bold mt-0.5">{m.value}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Contextual Info Strip */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              {HUD_METRICS.map((m) => (
                <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <p className="text-[10px] font-mono text-white/40 uppercase">{m.label}</p>
                  <p className="text-sm font-mono font-bold text-white mt-1">{m.value}</p>
                </div>
              ))}
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
