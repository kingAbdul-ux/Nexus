"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const TECH_ITEMS = [
  {
    id: "neural-chip",
    title: "N3 Quantum Neural Chip",
    tagline: "2nm Silicon with 64 TOPS Hardware Acceleration",
    description:
      "Engineered with 40 billion transistors and ultra-dense micro-circuitry. Processes real-time AI spatial models and zero-latency physics simulations simultaneously.",
    image: "/images/nexus_processor.png",
    specs: [
      { label: "Transistors", value: "40.2 Billion" },
      { label: "AI TOPS", value: "64 TOPS" },
      { label: "Process Node", value: "2nm TSMC EUV" },
      { label: "L3 Cache", value: "128MB Ultra-Fast" },
    ],
  },
  {
    id: "cryo-cooling",
    title: "Vapor Chamber Liquid Cooling",
    tagline: "Hydro-Dynamic Micro-Channel Coolant System",
    description:
      "Self-contained liquid vapor loop engineered with microscopic copper channels. Dissipates up to 180W thermal load silently under sustained turbo clock speeds.",
    image: "/images/nexus_cooling.png",
    specs: [
      { label: "Thermal Capacity", value: "180 Watts" },
      { label: "Coolant Flow", value: "3.2 L/min" },
      { label: "Acoustics", value: "< 18 dB Quiet" },
      { label: "Temp Delta", value: "-22°C Cooler" },
    ],
  },
];

export default function TechArchitecture() {
  const [activeTab, setActiveTab] = useState<string>("neural-chip");
  const activeTech = TECH_ITEMS.find((t) => t.id === activeTab) || TECH_ITEMS[0];

  return (
    <section
      id="architecture"
      className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-40 bg-[#02050e]"
    >
      {/* Ambient electric cyan glow backlight */}
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 rounded-full"
        style={{
          width: 700,
          height: 700,
          background:
            "radial-gradient(circle, rgba(0, 240, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* ── Section Header ──────────────────────── */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              02 — SILICON & THERMAL ARCHITECTURE
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              Breakthroughs at the atomic scale.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
              Pushing physics to the limit. Unprecedented transistor density coupled with hydro-dynamic liquid cooling.
            </p>

            {/* Interactive Tab Selector */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/20 bg-[#030917] p-1.5 backdrop-blur-md">
              {TECH_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`rounded-full px-6 py-2.5 text-xs font-mono font-medium transition-all ${
                    activeTab === item.id
                      ? "bg-[#00f0ff] text-black shadow-[0_0_20px_rgba(0,240,255,0.4)]"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* ── Main Showcase Display ───────────────── */}
        <div className="mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTech.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Image with floating glow */}
              <div className="lg:col-span-7 relative flex justify-center">
                <div className="relative w-full max-w-xl aspect-square rounded-3xl overflow-hidden glass-panel p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,240,255,0.15)]">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
                    <Image
                      src={activeTech.image}
                      alt={activeTech.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center transform transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-transparent opacity-60 pointer-events-none" />
                  </div>

                  {/* Pulsing corner accent */}
                  <div className="absolute top-6 right-6 h-3 w-3 rounded-full bg-[#00f0ff] shadow-[0_0_15px_#00f0ff] animate-ping" />
                </div>
              </div>

              {/* Right Column: Spec Breakdown */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-mono text-[#00f0ff] tracking-widest uppercase bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/20">
                  {activeTech.tagline}
                </span>

                <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  {activeTech.title}
                </h3>

                <p className="text-base leading-relaxed text-white/60">
                  {activeTech.description}
                </p>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  {activeTech.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="glass-panel p-4 rounded-xl border border-white/10"
                    >
                      <p className="text-xs font-mono text-white/40 uppercase">
                        {spec.label}
                      </p>
                      <p className="mt-1.5 text-lg font-bold font-mono text-[#00f0ff]">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
