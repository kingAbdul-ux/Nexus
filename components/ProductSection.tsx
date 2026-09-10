"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const HOTSPOTS = [
  {
    id: "display",
    x: "28%",
    y: "35%",
    title: "120Hz Quantum Micro-OLED",
    detail: "Peak 3,000 nits brightness with true 10-bit color accuracy and sub-1ms motion blur response.",
  },
  {
    id: "processor",
    x: "52%",
    y: "55%",
    title: "NEXUS N3 Neural Engine",
    detail: "40-core GPU, 16-core CPU, and dedicated 64 TOPS AI accelerator built on 2nm silicon architecture.",
  },
  {
    id: "cooling",
    x: "72%",
    y: "68%",
    title: "Liquid Cryo Vapor Chamber",
    detail: "Micro-channel liquid coolant loops keeping temps under 45°C under sustained 150W workloads.",
  },
  {
    id: "battery",
    x: "40%",
    y: "80%",
    title: "Solid-State Energy Core",
    detail: "99.9Wh capacity delivering 24+ hours of active high-load performance with 80% charge in 15 mins.",
  },
];

const FEATURES = [
  {
    number: "01",
    title: "Create without Limits",
    description:
      "Turn massive AI models, real-time 3D scenes, and complex codebases into effortless instant execution.",
  },
  {
    number: "02",
    title: "Instant Global Sync",
    description:
      "Sub-millisecond data synchronization directly into low-orbit micro-clusters worldwide.",
  },
  {
    number: "03",
    title: "Adaptive Neural OS",
    description:
      "Zero-latency background allocation that dynamically tunes core frequency to your exact workflow.",
  },
];

export default function ProductSection() {
  const [activeHotspot, setActiveHotspot] = useState<string>("processor");

  return (
    <section
      id="product"
      className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-40"
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 900,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(0, 240, 255, 0.08) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* ── Section Heading ─────────────────────── */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
                01 — FLAGSHIP HARDWARE
              </p>
              <div className="mt-4 h-0.5 w-16 bg-linear-to-r from-[#00f0ff] to-transparent" />
            </div>

            <div className="lg:col-span-8">
              <h2 className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl">
                Engineered to redefine{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #70f3ff 50%, #00f0ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  raw performance.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/50 md:text-lg">
                Explore the internal anatomy of NEXUS — every component crafted with precision titanium, liquid vapor chambers, and quantum neural cores.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Main Interactive Showcase ───────────── */}
        <Reveal delay={0.15}>
          <div className="relative mt-16 rounded-3xl p-px bg-linear-to-b from-[#00f0ff]/30 via-white/5 to-[#00f0ff]/10">
            <div className="relative overflow-hidden rounded-[23px] bg-[#030917]/90 glass-panel">
              
              {/* Inner grid texture */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#00f0ff 1px, transparent 1px), linear-gradient(90deg, #00f0ff 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="grid lg:grid-cols-12 min-h-140">
                
                {/* Interactive Hotspot Display */}
                <div className="lg:col-span-8 relative p-6 sm:p-10 flex flex-col justify-center items-center">
                  
                  {/* Top status bar */}
                  <div className="w-full flex items-center justify-between pb-6 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
                      <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
                        Interactive Spec View
                      </span>
                    </div>
                    <span className="text-xs font-mono text-white/40 hidden sm:inline">
                      CLICK HOTSPOTS TO INSPECT
                    </span>
                  </div>

                  {/* Device Container with Hotspots */}
                  <div className="relative w-full max-w-2xl aspect-16/10 my-6 rounded-2xl overflow-hidden glass-panel p-3">
                    <Image
                      src="/images/nexus_interface.png"
                      alt="NEXUS Internal Architecture"
                      fill
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      className="object-cover object-center rounded-xl"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#030917]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Render Interactive Hotspot Buttons */}
                    {HOTSPOTS.map((hs) => {
                      const isActive = activeHotspot === hs.id;
                      return (
                        <button
                          key={hs.id}
                          type="button"
                          onClick={() => setActiveHotspot(hs.id)}
                          style={{ left: hs.x, top: hs.y }}
                          aria-label={hs.title}
                          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group focus:outline-none"
                        >
                          <span className="relative flex h-7 w-7 items-center justify-center">
                            <span
                              className={`absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] transition-opacity ${
                                isActive ? "animate-ping opacity-75" : "opacity-30 group-hover:opacity-60"
                              }`}
                            />
                            <span
                              className={`relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-[#02050e] transition-all duration-300 ${
                                isActive ? "bg-[#00f0ff] scale-125" : "bg-[#00f0ff]/60 group-hover:bg-[#00f0ff]"
                              }`}
                            />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Spec Inspection Panel */}
                <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 p-6 sm:p-10 flex flex-col justify-between bg-black/40">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
                      COMPONENT SPECS
                    </span>

                    <AnimatePresence mode="wait">
                      {HOTSPOTS.filter((h) => h.id === activeHotspot).map((hs) => (
                        <motion.div
                          key={hs.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="mt-8"
                        >
                          <h3 className="text-2xl font-bold text-white tracking-tight">
                            {hs.title}
                          </h3>
                          <p className="mt-4 text-sm leading-relaxed text-white/60">
                            {hs.detail}
                          </p>

                          <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-white/40">Status:</span>
                              <span className="text-[#00f0ff]">OPTIMIZED</span>
                            </div>
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-white/40">Efficiency:</span>
                              <span className="text-white">99.4%</span>
                            </div>
                            <div className="flex justify-between text-xs font-mono">
                              <span className="text-white/40">Thermal Index:</span>
                              <span className="text-white">32°C Nominal</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Hotspot selection pills */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">
                      Quick Select
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {HOTSPOTS.map((hs) => (
                        <button
                          key={hs.id}
                          type="button"
                          onClick={() => setActiveHotspot(hs.id)}
                          className={`rounded-full px-3 py-1 text-xs font-mono transition-all ${
                            activeHotspot === hs.id
                              ? "bg-[#00f0ff] text-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.5)]"
                              : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {hs.id.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </Reveal>

        {/* ── Feature Cards Grid ──────────────────── */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {FEATURES.map((feat, i) => (
            <Reveal key={feat.number} delay={0.2 + i * 0.08}>
              <div className="glass-panel glass-panel-hover rounded-2xl p-8 h-full flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/10 px-2.5 py-1 rounded-full border border-[#00f0ff]/20">
                      {feat.number}
                    </span>
                    <span className="text-white/30 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#00f0ff]">
                      →
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">
                    {feat.description}
                  </p>
                </div>
                <div className="mt-6 h-0.5 w-full bg-white/10 overflow-hidden rounded-full">
                  <div className="h-full w-0 bg-linear-to-r from-[#00f0ff] to-[#70f3ff] transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}