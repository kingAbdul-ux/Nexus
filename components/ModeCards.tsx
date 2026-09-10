"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const MODES = [
  {
    id: "create",
    title: "CREATE",
    tagline: "Neural Generative & 8K Spatial Studio",
    icon: "🎨",
    accent: "#00f0ff",
    description:
      "Transform ambitious concepts into real-time rendered scenes. Accelerated AI video synthesis and zero-delay viewport playback.",
    features: ["Real-time Path Tracing", "8K ProRes Raw Engine", "Local LLM Fine-Tuning"],
    stats: { primary: "120 FPS", label: "8K Viewport" },
  },
  {
    id: "play",
    title: "PLAY",
    tagline: "Competitive eSports & Ultra Raytracing",
    icon: "🎮",
    accent: "#70f3ff",
    description:
      "Dominate high-refresh competitive gaming with sub-1ms display response. Hardware-accelerated DLSS 4 and spatial 3D audio.",
    features: ["240Hz OLED Output", "Sub-1ms Input Delay", "Sub-Atmospheric Cooling"],
    stats: { primary: "240 Hz", label: "Native OLED" },
  },
  {
    id: "work",
    title: "WORK",
    tagline: "Enterprise Dev & Quantum Simulation",
    icon: "⚡",
    accent: "#38bdf8",
    description:
      "Compile million-line codebases in seconds. Run multi-container cloud environments locally with zero thermal throttling.",
    features: ["128GB Unified Memory", "Multi-Thread Compiler", "Zero-Throttle Chamber"],
    stats: { primary: "4.2x", label: "Build Acceleration" },
  },
  {
    id: "explore",
    title: "EXPLORE",
    tagline: "Neural Interface & Spatial Computing",
    icon: "🌌",
    accent: "#00d2ff",
    description:
      "Pioneer the next frontier of human-computer interaction. Native support for spatial vision rigs, neural telemetry, and quantum labs.",
    features: ["Neural Telemetry Engine", "Spatial Vision Pipeline", "Sub-Nanosecond Clock"],
    stats: { primary: "< 0.5ms", label: "Spatial Latency" },
  },
];

export default function ModeCards() {
  const [selectedMode, setSelectedMode] = useState<string>("create");
  const activeModeObj = MODES.find((m) => m.id === selectedMode) || MODES[0];

  return (
    <section
      id="modes"
      className="relative overflow-hidden px-6 py-28 lg:px-8 lg:py-40 bg-[#02050e]"
    >
      {/* Background glow orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 850,
          height: 550,
          background:
            "radial-gradient(ellipse, rgba(0, 240, 255, 0.09) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl">

        {/* ── Section Header ──────────────────────── */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              04 — VERSATILE MODES
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
              One machine. Four dimensions.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/50 md:text-lg">
              Seamlessly shift profiles between heavy creative rendering, competitive eSports, enterprise software engineering, and spatial research.
            </p>
          </div>
        </Reveal>

        {/* ── 4 Interactive Mode Cards Grid ────────── */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {MODES.map((mode) => {
            const isSelected = selectedMode === mode.id;
            return (
              <button
                key={mode.id}
                type="button"
                onClick={() => setSelectedMode(mode.id)}
                className={`glass-panel glass-panel-hover text-left p-6 sm:p-8 rounded-3xl relative overflow-hidden transition-all duration-400 focus:outline-none ${
                  isSelected
                    ? "border-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_30px_rgba(0,240,255,0.25)]"
                    : "border-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{mode.icon}</span>
                  <span
                    className={`text-xs font-mono px-3 py-1 rounded-full font-bold transition-all ${
                      isSelected
                        ? "bg-[#00f0ff] text-black"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {mode.title}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white tracking-tight">
                  {mode.title}
                </h3>
                <p className="mt-2 text-xs font-mono text-[#00f0ff]">
                  {mode.tagline}
                </p>

                {/* Bottom accent glow bar */}
                <div
                  className={`mt-6 h-1 w-full rounded-full transition-all duration-300 ${
                    isSelected ? "bg-[#00f0ff] shadow-[0_0_10px_#00f0ff]" : "bg-white/10"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* ── Active Mode Spotlight Banner ─────────── */}
        <Reveal delay={0.15}>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#00f0ff]/30 bg-[#030917]/95 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeModeObj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                {/* Mode Details */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{activeModeObj.icon}</span>
                    <div>
                      <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
                        ACTIVE PROFILE MODE
                      </span>
                      <h3 className="text-3xl font-extrabold text-white">
                        {activeModeObj.title} MODE
                      </h3>
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-white/60">
                    {activeModeObj.description}
                  </p>

                  {/* Features Bullets */}
                  <div className="grid sm:grid-cols-3 gap-3 pt-4">
                    {activeModeObj.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2 text-xs font-mono text-white/80 bg-white/5 p-3 rounded-xl border border-white/10"
                      >
                        <span className="text-[#00f0ff]">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Big Stat Highlight Badge */}
                <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0">
                  <div className="text-center lg:text-right">
                    <p className="text-5xl sm:text-6xl font-extrabold font-mono text-[#00f0ff] tracking-tight drop-shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                      {activeModeObj.stats.primary}
                    </p>
                    <p className="mt-2 text-xs font-mono uppercase tracking-widest text-white/50">
                      {activeModeObj.stats.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
