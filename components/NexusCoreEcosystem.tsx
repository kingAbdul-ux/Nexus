"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

interface ModuleData {
  id: string;
  code: string;
  title: string;
  category: string;
  tagline: string;
  detail: string;
  stat: string;
  status: string;
  position: "top" | "right" | "bottom" | "left";
  specs: { label: string; value: string }[];
}

const CORE_MODULES: ModuleData[] = [
  {
    id: "neural",
    code: "MOD-01",
    title: "NEURAL ACCELERATION",
    category: "AI COMPUTE",
    tagline: "64 TOPS Dedicated Neural Engine",
    detail: "Direct silicon matrix cores executing complex generative models, spatial perception, and autonomous real-time decision loops with sub-millisecond inference latency.",
    stat: "64 TOPS",
    status: "ACTIVE",
    position: "top",
    specs: [
      { label: "CORES", value: "32 Tensor Units" },
      { label: "PRECISION", value: "FP16 / INT8" },
      { label: "EFFICIENCY", value: "98.4% Sustained" },
    ],
  },
  {
    id: "memory",
    code: "MOD-02",
    title: "UNIFIED MEMORY BUS",
    category: "DATA PIPELINE",
    tagline: "1.2 TB/s Interconnect Fabric",
    detail: "Unified zero-copy memory architecture sharing registers seamlessly between CPU host, neural accelerator, and viewport rasterizers without bus contention.",
    stat: "1.2 TB/s",
    status: "SYNCED",
    position: "right",
    specs: [
      { label: "WIDTH", value: "512-bit Bus" },
      { label: "LATENCY", value: "< 0.8ms" },
      { label: "CAPACITY", value: "32 GB Pool" },
    ],
  },
  {
    id: "nodes",
    code: "MOD-03",
    title: "DISTRIBUTED CLUSTERS",
    category: "NETWORK FABRIC",
    tagline: "Global Low-Orbit Node Network",
    detail: "Fault-tolerant mesh topology federating computational loads between edge workstations and distributed low-orbit micro-clusters with deterministic routing.",
    stat: "< 0.8ms",
    status: "ROUTED",
    position: "bottom",
    specs: [
      { label: "CLUSTER", value: "256 Nodes" },
      { label: "PROTOCOL", value: "NEXUS MESH v2" },
      { label: "PACKET LOSS", value: "0.0001%" },
    ],
  },
  {
    id: "kernel",
    code: "MOD-04",
    title: "ADAPTIVE MICRO-KERNEL",
    category: "SYSTEM OS",
    tagline: "Direct Silicon Thread Scheduler",
    detail: "Zero-overhead micro-kernel assigning CPU frequency and cache lines dynamically based on realtime neural throughput demands without OS thread starvation.",
    stat: "99.99%",
    status: "OPTIMAL",
    position: "left",
    specs: [
      { label: "SCHEDULER", value: "Direct Silicon" },
      { label: "OS OVERHEAD", value: "< 0.05%" },
      { label: "CLOCK SPEED", value: "5.0 GHz Turbo" },
    ],
  },
];

export default function NexusCoreEcosystem() {
  const [selectedId, setSelectedId] = useState<string>("neural");
  const activeMod = CORE_MODULES.find((m) => m.id === selectedId) || CORE_MODULES[0];

  return (
    <section
      id="ecosystem"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      {/* Background Atmosphere Spotlight */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 800,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="tech-badge">
              SIGNATURE ARCHITECTURE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-5xl">
              NEXUS // CENTRAL CORE ECOSYSTEM
            </h2>
            <p className="mt-4 text-base text-[#8B96A5] leading-relaxed">
              Centralized neural interconnect unifying distributed modules through real-time data bus routing.
            </p>
          </div>
        </Reveal>

        {/* ── Signature Visual Diagram: Nexus Core & Satellites ── */}
        <div className="relative mx-auto max-w-4xl p-4 sm:p-8 rounded-2xl surface-panel border border-[#1B2632] bg-[#080C11] mb-12">
          
          {/* Top Status Header */}
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#1B2632] font-mono text-[10px]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
              <span className="text-[#F5F7FA] font-bold tracking-widest">
                CORE ROUTING TOPOLOGY
              </span>
            </div>
            <span className="text-[#5E6977] uppercase tracking-wider">
              INTERCONNECT BUS // LIVE
            </span>
          </div>

          {/* Core Diagram Container */}
          <div className="relative w-full h-[480px] sm:h-[560px] flex items-center justify-center overflow-hidden">
            
            {/* SVG Connecting Bus Lines & Data Pulses */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Vertical Bus Line (Top to Bottom through Core) */}
              <line
                x1="50%"
                y1="12%"
                x2="50%"
                y2="88%"
                stroke="#1B2632"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
              {/* Horizontal Bus Line (Left to Right through Core) */}
              <line
                x1="12%"
                y1="50%"
                x2="88%"
                y2="50%"
                stroke="#1B2632"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Active Highlight Line for Selected Module */}
              {selectedId === "neural" && (
                <line
                  x1="50%"
                  y1="12%"
                  x2="50%"
                  y2="50%"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              )}
              {selectedId === "memory" && (
                <line
                  x1="50%"
                  y1="50%"
                  x2="88%"
                  y2="50%"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              )}
              {selectedId === "nodes" && (
                <line
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="88%"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              )}
              {selectedId === "kernel" && (
                <line
                  x1="12%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke="#00E5FF"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />
              )}

              {/* Animated Cyan Pulse Circles */}
              <circle cx="50%" cy="30%" r="3" fill="#00E5FF" className="animate-ping opacity-75" />
              <circle cx="70%" cy="50%" r="3" fill="#00E5FF" className="animate-ping opacity-75" />
              <circle cx="50%" cy="70%" r="3" fill="#00E5FF" className="animate-ping opacity-75" />
              <circle cx="30%" cy="50%" r="3" fill="#00E5FF" className="animate-ping opacity-75" />
            </svg>

            {/* Orbit Rings around the Center Core */}
            <div className="absolute h-64 w-64 rounded-full border border-[#1B2632] pointer-events-none" />
            <div className="absolute h-96 w-96 rounded-full border border-[#1B2632]/50 pointer-events-none" />
            
            {/* ── Central Nexus Core ─────────────────── */}
            <div className="relative z-10 flex flex-col items-center justify-center h-32 w-32 sm:h-36 sm:w-36 rounded-full border border-[#00E5FF]/40 bg-[#0D131A] shadow-[0_0_35px_rgba(0,229,255,0.2)] text-center p-2">
              <div className="relative flex h-3 w-3 mb-1">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00E5FF]" />
              </div>
              <span className="font-mono text-[11px] font-extrabold tracking-widest text-[#F5F7FA]">
                NEXUS
              </span>
              <span className="font-mono text-[8px] text-[#00E5FF] uppercase tracking-wider mt-0.5">
                CENTRAL CORE
              </span>
              <span className="font-mono text-[8px] text-[#5E6977] mt-0.5">
                5.0 GHz // LIVE
              </span>
            </div>

            {/* ── 01 TOP MODULE: Neural Accelerator ── */}
            <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20">
              <button
                type="button"
                onClick={() => setSelectedId("neural")}
                className={`p-3 sm:px-4 sm:py-2.5 rounded-lg border font-mono text-left transition-all duration-200 cursor-pointer ${
                  selectedId === "neural"
                    ? "border-[#00E5FF] bg-[#0D131A] shadow-[0_0_20px_rgba(0,229,255,0.25)] scale-105"
                    : "border-[#1B2632] bg-[#0D131A]/90 hover:border-[#8B96A5]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#00E5FF] font-bold">MOD-01</span>
                  <span className="text-[10px] text-[#F5F7FA] font-semibold">64 TOPS</span>
                </div>
                <p className="text-xs font-bold text-[#F5F7FA] mt-0.5">NEURAL CORE</p>
              </button>
            </div>

            {/* ── 02 RIGHT MODULE: Memory Bus ── */}
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={() => setSelectedId("memory")}
                className={`p-3 sm:px-4 sm:py-2.5 rounded-lg border font-mono text-left transition-all duration-200 cursor-pointer ${
                  selectedId === "memory"
                    ? "border-[#00E5FF] bg-[#0D131A] shadow-[0_0_20px_rgba(0,229,255,0.25)] scale-105"
                    : "border-[#1B2632] bg-[#0D131A]/90 hover:border-[#8B96A5]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#00E5FF] font-bold">MOD-02</span>
                  <span className="text-[10px] text-[#F5F7FA] font-semibold">1.2 TB/s</span>
                </div>
                <p className="text-xs font-bold text-[#F5F7FA] mt-0.5">UNIFIED BUS</p>
              </button>
            </div>

            {/* ── 03 BOTTOM MODULE: Distributed Nodes ── */}
            <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20">
              <button
                type="button"
                onClick={() => setSelectedId("nodes")}
                className={`p-3 sm:px-4 sm:py-2.5 rounded-lg border font-mono text-left transition-all duration-200 cursor-pointer ${
                  selectedId === "nodes"
                    ? "border-[#00E5FF] bg-[#0D131A] shadow-[0_0_20px_rgba(0,229,255,0.25)] scale-105"
                    : "border-[#1B2632] bg-[#0D131A]/90 hover:border-[#8B96A5]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#00E5FF] font-bold">MOD-03</span>
                  <span className="text-[10px] text-[#F5F7FA] font-semibold">&lt; 0.8ms</span>
                </div>
                <p className="text-xs font-bold text-[#F5F7FA] mt-0.5">MESH NODES</p>
              </button>
            </div>

            {/* ── 04 LEFT MODULE: Adaptive Kernel ── */}
            <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20">
              <button
                type="button"
                onClick={() => setSelectedId("kernel")}
                className={`p-3 sm:px-4 sm:py-2.5 rounded-lg border font-mono text-left transition-all duration-200 cursor-pointer ${
                  selectedId === "kernel"
                    ? "border-[#00E5FF] bg-[#0D131A] shadow-[0_0_20px_rgba(0,229,255,0.25)] scale-105"
                    : "border-[#1B2632] bg-[#0D131A]/90 hover:border-[#8B96A5]"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] text-[#00E5FF] font-bold">MOD-04</span>
                  <span className="text-[10px] text-[#F5F7FA] font-semibold">99.99%</span>
                </div>
                <p className="text-xs font-bold text-[#F5F7FA] mt-0.5">MICRO-KERNEL</p>
              </button>
            </div>

          </div>

          {/* Hint Label */}
          <div className="text-center pt-2 font-mono text-[10px] text-[#5E6977] uppercase tracking-widest border-t border-[#1B2632]">
            SELECT ANY SATELLITE MODULE TO INSPECT TELEMETRY
          </div>
        </div>

        {/* ── Selected Subsystem Detailed Readout Panel ── */}
        <Reveal delay={0.1}>
          <div className="surface-panel p-6 sm:p-10 border border-[#1B2632] bg-[#0D131A] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeMod.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="grid lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="tech-badge">
                      {`${activeMod.code} // ${activeMod.category}`}
                    </span>
                    <span className="text-xs font-mono text-[#00E5FF] font-semibold">
                      STATUS: {activeMod.status}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA] tracking-tight">
                    {activeMod.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#8B96A5] leading-relaxed">
                    {activeMod.detail}
                  </p>

                  {/* Dynamic Technical Specifications */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#1B2632] font-mono">
                    {activeMod.specs.map((sp) => (
                      <div key={sp.label} className="p-3 rounded-lg bg-[#080C11] border border-[#1B2632]">
                        <span className="text-[9px] text-[#5E6977] uppercase block">{sp.label}</span>
                        <span className="text-xs font-bold text-[#F5F7FA] mt-0.5 block">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col items-center justify-center border-t lg:border-t-0 lg:border-l border-[#1B2632] pt-6 lg:pt-0">
                  <div className="text-center">
                    <p className="text-5xl sm:text-6xl font-extrabold font-mono text-[#00E5FF] tracking-tight drop-shadow-[0_0_18px_rgba(0,229,255,0.35)]">
                      {activeMod.stat}
                    </p>
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-[#8B96A5]">
                      OUTPUT TELEMETRY
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded bg-[#080C11] border border-[#1B2632] text-[10px] font-mono text-[#00E5FF]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                      <span>BUS LINK VERIFIED</span>
                    </div>
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
