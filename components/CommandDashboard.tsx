"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

interface DashboardTab {
  id: string;
  name: string;
  badge: string;
}

const TABS: DashboardTab[] = [
  { id: "neural", name: "NEURAL TELEMETRY", badge: "64 TOPS" },
  { id: "memory", name: "UNIFIED MEMORY", badge: "1.2 TB/s" },
  { id: "clusters", name: "COMPUTE NODES", badge: "256 NODES" },
  { id: "scheduler", name: "THREAD SCHEDULER", badge: "40 CORES" },
];

const LOG_MESSAGES = [
  { time: "00:00.012", src: "SILICON_BUS", text: "Unified memory bus synchronized at 1.2 TB/s without lock contention.", status: "OK" },
  { time: "00:00.048", src: "TENSOR_CORE", text: "N3 Neural accelerator dispatched 64 TOPS tensor execution.", status: "OK" },
  { time: "00:00.092", src: "CRYO_LOOP", text: "Micro-channel liquid coolant stabilized thermal delta at 34°C.", status: "OK" },
  { time: "00:00.144", src: "NODE_DISPATCH", text: "Zero-latency telemetry packet routed across 256 edge nodes.", status: "OK" },
];

export default function CommandDashboard() {
  const [activeTab, setActiveTab] = useState<string>("neural");
  const [liveLoad, setLiveLoad] = useState<number>(94.2);

  // Subtle real-time load jitter for product realism
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveLoad(+(93 + Math.random() * 4).toFixed(1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dashboard"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      {/* Background Soft Glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 rounded-full"
        style={{
          width: 700,
          height: 450,
          background:
            "radial-gradient(ellipse, rgba(0, 229, 255, 0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="tech-badge">
              SOFTWARE COMMAND PLATFORM
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-5xl">
              NEXUS System Command v4.0
            </h2>
            <p className="mt-4 text-base text-[#8B96A5] leading-relaxed">
              Real-time software command interface engineered for deep hardware telemetry, thread arbitration, and neural resource scheduling.
            </p>
          </div>
        </Reveal>

        {/* ── Product Interface Showcase Window ── */}
        <Reveal delay={0.15}>
          <div className="surface-panel-elevated rounded-xl border border-[#1B2632] bg-[#0D131A] shadow-[0_24px_64px_rgba(0,0,0,0.85)] overflow-hidden">
            
            {/* Window Command Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3 border-b border-[#1B2632] bg-[#080C11]/90">
              
              {/* Left System Info */}
              <div className="flex items-center gap-3 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="font-bold text-[#F5F7FA]">NEXUS // OS v4.0</span>
                </div>
                <span className="text-[#5E6977] hidden sm:inline">•</span>
                <span className="text-[#8B96A5] hidden sm:inline">SESSION: SES-902-AX</span>
              </div>

              {/* Center Tab Switcher */}
              <div className="flex items-center gap-1 overflow-x-auto">
                {TABS.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1.5 rounded font-mono text-[10px] tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#00E5FF] text-[#05070A] font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                        : "text-[#8B96A5] hover:text-[#F5F7FA] hover:bg-[#111922]"
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Right Latency Tag */}
              <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-[#00E5FF]">
                <span className="px-2 py-0.5 rounded bg-[rgba(0,229,255,0.08)] border border-[#00E5FF]/20">
                  LATENCY &lt; 0.8ms
                </span>
              </div>

            </div>

            {/* ── Main Interface Content Area ── */}
            <div className="p-5 sm:p-8 space-y-6">
              
              {/* Top Metrics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-[#080C11] border border-[#1B2632]">
                  <p className="text-[10px] font-mono text-[#5E6977] uppercase tracking-wider">
                    PEAK CLOCK FREQUENCY
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] mt-1">
                    5.0 GHz Turbo
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-[#00E5FF]">
                    <span>40 ACTIVE CORES</span>
                    <span>100% STABLE</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#080C11] border border-[#1B2632]">
                  <p className="text-[10px] font-mono text-[#5E6977] uppercase tracking-wider">
                    NEURAL INFERENCE LOAD
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-[#00E5FF] mt-1">
                    {liveLoad}%
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-[#8B96A5]">
                    <span>64 TOPS CAPACITY</span>
                    <span>NOMINAL</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#080C11] border border-[#1B2632]">
                  <p className="text-[10px] font-mono text-[#5E6977] uppercase tracking-wider">
                    CRYO THERMAL DELTA
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] mt-1">
                    34°C Steady
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-[#8B96A5]">
                    <span>VAPOR CHAMBER</span>
                    <span className="text-emerald-400">OPTIMAL</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[#080C11] border border-[#1B2632]">
                  <p className="text-[10px] font-mono text-[#5E6977] uppercase tracking-wider">
                    UNIFIED BUS LINK
                  </p>
                  <p className="text-xl sm:text-2xl font-mono font-bold text-[#F5F7FA] mt-1">
                    1.2 TB/s
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[9px] font-mono text-[#00E5FF]">
                    <span>512-BIT BUFFER</span>
                    <span>0 STALLS</span>
                  </div>
                </div>
              </div>

              {/* Telemetry Visual Charts & Execution Graph */}
              <div className="grid lg:grid-cols-12 gap-6">
                
                {/* Left Live SVG Telemetry Chart */}
                <div className="lg:col-span-8 p-5 rounded-lg bg-[#080C11] border border-[#1B2632] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1B2632] font-mono text-[10px]">
                    <span className="text-[#F5F7FA] font-bold uppercase tracking-wider">
                      {activeTab === "neural" && "REAL-TIME TENSOR LOAD WAVE"}
                      {activeTab === "memory" && "UNIFIED MEMORY THROUGHPUT BANDWIDTH"}
                      {activeTab === "clusters" && "DISTRIBUTED NODE SYNCHRONIZATION"}
                      {activeTab === "scheduler" && "DIRECT SILICON THREAD CONCURRENCY"}
                    </span>
                    <span className="text-[#00E5FF]">SAMPLE: 100ms</span>
                  </div>

                  {/* SVG Wave Graphic */}
                  <div className="py-6 relative">
                    <svg
                      className="w-full h-36 sm:h-44 overflow-visible"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid Guide Lines */}
                      <line x1="0" y1="37" x2="500" y2="37" stroke="#1B2632" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="0" y1="75" x2="500" y2="75" stroke="#1B2632" strokeWidth="1" strokeDasharray="2 2" />
                      <line x1="0" y1="112" x2="500" y2="112" stroke="#1B2632" strokeWidth="1" strokeDasharray="2 2" />

                      {/* Filled Area */}
                      <path
                        d="M0,80 Q50,45 100,60 T200,35 T300,50 T400,28 T500,42 L500,150 L0,150 Z"
                        fill="url(#cyanGradient)"
                      />

                      {/* Primary Telemetry Line */}
                      <path
                        d="M0,80 Q50,45 100,60 T200,35 T300,50 T400,28 T500,42"
                        fill="none"
                        stroke="#00E5FF"
                        strokeWidth="2.5"
                      />

                      {/* Secondary Reference Line */}
                      <path
                        d="M0,95 Q50,70 100,85 T200,60 T300,75 T400,55 T500,68"
                        fill="none"
                        stroke="#263442"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    </svg>
                  </div>

                  {/* Chart Bottom Coordinates */}
                  <div className="flex justify-between font-mono text-[9px] text-[#5E6977] pt-2 border-t border-[#1B2632]">
                    <span>T - 10s</span>
                    <span>T - 7.5s</span>
                    <span>T - 5.0s</span>
                    <span>T - 2.5s</span>
                    <span className="text-[#00E5FF]">T - 0.0s (CURRENT)</span>
                  </div>
                </div>

                {/* Right Core Load Distribution Meters */}
                <div className="lg:col-span-4 p-5 rounded-lg bg-[#080C11] border border-[#1B2632] flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1B2632] font-mono text-[10px]">
                    <span className="text-[#F5F7FA] font-bold uppercase tracking-wider">
                      CORE ALLOCATION
                    </span>
                    <span className="text-[#8B96A5]">8 / 40 ACTIVE</span>
                  </div>

                  {/* Individual Core Meters */}
                  <div className="space-y-2.5 py-4 font-mono text-[10px]">
                    {[
                      { name: "CORE-01 [TENSOR]", load: 98 },
                      { name: "CORE-02 [TENSOR]", load: 96 },
                      { name: "CORE-03 [GRAPHICS]", load: 91 },
                      { name: "CORE-04 [MEMORY]", load: 88 },
                      { name: "CORE-05 [BUS IO]", load: 84 },
                      { name: "CORE-06 [KERNEL]", load: 79 },
                    ].map((core) => (
                      <div key={core.name} className="space-y-1">
                        <div className="flex justify-between text-[#8B96A5]">
                          <span>{core.name}</span>
                          <span className="text-[#00E5FF] font-semibold">{core.load}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-[#111922] overflow-hidden">
                          <div
                            className="h-full bg-[#00E5FF] transition-all duration-300"
                            style={{ width: `${core.load}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-[#1B2632] font-mono text-[9px] text-[#5E6977] flex justify-between">
                    <span>ARBITRATION MODE</span>
                    <span className="text-[#F5F7FA]">DYNAMIC TSMC</span>
                  </div>
                </div>

              </div>

              {/* Bottom Live System Activity Stream */}
              <div className="p-4 rounded-lg bg-[#080C11] border border-[#1B2632] font-mono text-xs">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#1B2632] text-[10px]">
                  <span className="text-[#5E6977] uppercase tracking-wider">
                    SYSTEM EVENT STREAM
                  </span>
                  <span className="text-[#00E5FF] flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-ping" />
                    STREAMING
                  </span>
                </div>

                <div className="space-y-2 text-[11px]">
                  {LOG_MESSAGES.map((msg, idx) => (
                    <div
                      key={idx}
                      className="flex flex-wrap items-center gap-3 text-[#8B96A5]"
                    >
                      <span className="text-[#5E6977] text-[10px]">[{msg.time}]</span>
                      <span className="px-1.5 py-0.5 rounded bg-[#111922] text-[#00E5FF] text-[9px] font-bold border border-[#1B2632]">
                        {msg.src}
                      </span>
                      <span className="text-[#F5F7FA]">{msg.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}
