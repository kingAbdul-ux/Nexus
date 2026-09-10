"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const PIPELINE_STAGES = [
  {
    step: "01",
    phase: "INPUT",
    title: "Data Stream Ingestion",
    description:
      "High-speed input buffer capturing multi-modal telemetry streams, real-time spatial models, and active codebases with sub-millisecond bus synchronization.",
    image: "/images/nexus_interface.png",
    metric: "1.2 TB/s Unified Bus Flow",
    throughput: "1,200 GB/s",
    latency: "0.12ms",
    cores: "16 IO Channels",
  },
  {
    step: "02",
    phase: "PROCESS",
    title: "2nm Parallel Silicon Execution",
    description:
      "Parallel computation across 40 TSMC EUV silicon cores with zero thread stalling, hardware-level thread priority, and dynamic frequency scaling.",
    image: "/images/nexus_processor.png",
    metric: "40.2B Transistors",
    throughput: "5.0 GHz Turbo",
    latency: "0.24ms",
    cores: "40 Compute Units",
  },
  {
    step: "03",
    phase: "INTELLIGENCE",
    title: "64 TOPS Neural Acceleration",
    description:
      "Direct neural core execution for spatial generative models, real-time code optimization, and complex spatial physics calculations.",
    image: "/images/nexus_cooling.png",
    metric: "64 TOPS Neural Power",
    throughput: "64 Tera-Ops",
    latency: "0.45ms",
    cores: "32 Tensor Matrix Cores",
  },
  {
    step: "04",
    phase: "OUTPUT",
    title: "Zero-Latency Global Dispatch",
    description:
      "Instant dispatch to local Micro-OLED viewport buffers and low-orbit cloud micro-clusters with sub-1ms end-to-end response.",
    image: "/images/nexus_hero_device.png",
    metric: "< 0.8ms Dispatch Latency",
    throughput: "120 FPS Native",
    latency: "< 0.80ms",
    cores: "Global Node Network",
  },
];

export default function SystemPipeline() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = PIPELINE_STAGES[activeStep];

  return (
    <section
      id="pipeline"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="tech-badge">
              PIPELINE ARCHITECTURE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-5xl">
              INPUT → PROCESS → INTELLIGENCE → OUTPUT
            </h2>
            <p className="mt-4 text-base text-[#8B96A5] leading-relaxed">
              Deterministic four-stage execution pipeline moving raw telemetry streams through dedicated silicon to global dispatch.
            </p>
          </div>
        </Reveal>

        {/* Pipeline Technological Connection Rail */}
        <div className="relative mb-14 hidden md:block">
          {/* Base Connection Track */}
          <div className="absolute top-1/2 left-8 right-8 h-px bg-[#1B2632] -translate-y-1/2" />
          
          {/* Active Glowing Bus Track */}
          <div
            className="absolute top-1/2 left-8 h-px bg-gradient-to-r from-[#00E5FF] to-[#33EBFF] -translate-y-1/2 transition-all duration-500 shadow-[0_0_8px_rgba(0,229,255,0.6)]"
            style={{
              width: `calc(${(activeStep / (PIPELINE_STAGES.length - 1)) * 100}% - 3rem)`,
            }}
          />

          {/* Pipeline Nodes */}
          <div className="relative z-10 flex justify-between">
            {PIPELINE_STAGES.map((st, idx) => {
              const isActive = activeStep >= idx;
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`h-12 w-12 rounded-lg flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#00E5FF] text-[#05070A] shadow-[0_0_20px_rgba(0,229,255,0.4)] scale-105"
                        : isActive
                        ? "bg-[#0D131A] text-[#00E5FF] border border-[#00E5FF]/40"
                        : "bg-[#080C11] text-[#5E6977] border border-[#1B2632] hover:border-[#8B96A5]"
                    }`}
                  >
                    {st.step}
                  </div>
                  <span
                    className={`mt-3 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                      isCurrent ? "text-[#00E5FF] font-bold" : "text-[#8B96A5]"
                    }`}
                  >
                    {st.phase}
                  </span>
                  <span className="text-[10px] font-mono text-[#5E6977] mt-0.5">
                    {st.throughput}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Stage Selector Tabs */}
        <div className="flex gap-2 mb-8 md:hidden overflow-x-auto pb-2">
          {PIPELINE_STAGES.map((st, idx) => (
            <button
              key={st.step}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`px-3 py-2 rounded-md font-mono text-xs whitespace-nowrap transition-all ${
                activeStep === idx
                  ? "bg-[#00E5FF] text-[#05070A] font-bold"
                  : "bg-[#0D131A] text-[#8B96A5] border border-[#1B2632]"
              }`}
            >
              {st.step} // {st.phase}
            </button>
          ))}
        </div>

        {/* Pipeline Stage Deep-Inspection Panel */}
        <div className="surface-panel p-6 sm:p-10 border border-[#1B2632] bg-[#0D131A]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="tech-badge">
                    PHASE {currentStage.step} // {currentStage.phase}
                  </span>
                  <span className="text-xs font-mono text-[#8B96A5]">
                    {currentStage.metric}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-[#F5F7FA] tracking-tight sm:text-3xl">
                  {currentStage.title}
                </h3>

                <p className="text-sm sm:text-base text-[#8B96A5] leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Subsystem Telemetry Spec Grid */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-[#1B2632]">
                  <div className="p-3 rounded-lg bg-[#080C11] border border-[#1B2632]">
                    <span className="text-[9px] font-mono text-[#5E6977] uppercase block">
                      BANDWIDTH
                    </span>
                    <span className="text-xs font-mono font-bold text-[#00E5FF] mt-0.5 block">
                      {currentStage.throughput}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080C11] border border-[#1B2632]">
                    <span className="text-[9px] font-mono text-[#5E6977] uppercase block">
                      STAGE LATENCY
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F5F7FA] mt-0.5 block">
                      {currentStage.latency}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#080C11] border border-[#1B2632]">
                    <span className="text-[9px] font-mono text-[#5E6977] uppercase block">
                      ALLOCATION
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8B96A5] mt-0.5 block">
                      {currentStage.cores}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Stage Visual */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-xl overflow-hidden surface-panel p-2">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#080C11]">
                  <Image
                    src={currentStage.image}
                    alt={currentStage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle Gradient & Scanlines */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Stage Active Monitor Watermark */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 font-mono text-[10px] text-[#00E5FF] bg-[#05070A]/85 px-2.5 py-1 rounded border border-[#1B2632]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    <span>BUS ACTIVE // {currentStage.phase}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
