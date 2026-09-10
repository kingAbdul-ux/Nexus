"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const STAGES = [
  {
    step: "01",
    title: "Discover",
    subtitle: "Hardware & Neural Auto-Discovery",
    description:
      "NEXUS auto-detects system topology, mapping zero-latency interconnects and available neural accelerator cores in milliseconds.",
    image: "/images/nexus_interface.png",
    metric: "Topology Mapped",
  },
  {
    step: "02",
    title: "Connect",
    subtitle: "Direct Silicon Bus Interconnect",
    description:
      "Establishes a 1.2 TB/s unified memory pipeline between local hardware buffers and cloud micro-clusters.",
    image: "/images/nexus_processor.png",
    metric: "1.2 TB/s Link",
  },
  {
    step: "03",
    title: "Transform",
    subtitle: "Zero-Latency Real-Time Execution",
    description:
      "AI workloads, spatial scenes, and complex codebases execute on dedicated hardware threads with zero thermal throttling.",
    image: "/images/nexus_cooling.png",
    metric: "0.8ms Core Latency",
  },
  {
    step: "04",
    title: "Scale",
    subtitle: "Instant Global Node Expansion",
    description:
      "Deploy workflows seamlessly from a single workstation to thousands of distributed low-orbit nodes worldwide.",
    image: "/images/nexus_hero_device.png",
    metric: "Global Scaling",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStage = STAGES[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-28 lg:py-40 border-t border-white/10 bg-[#030712]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              EXECUTION LIFECYCLE
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              How NEXUS operates.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Four seamless stages from hardware discovery to global node deployment.
            </p>
          </div>
        </Reveal>

        {/* Horizontal Progress Timeline Bar */}
        <div className="relative mb-16 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/10 -translate-y-1/2" />
          <div
            className="absolute top-1/2 left-0 h-0.5 bg-[#00f0ff] -translate-y-1/2 transition-all duration-500"
            style={{ width: `${(activeStep / (STAGES.length - 1)) * 100}%` }}
          />

          <div className="relative z-10 flex justify-between">
            {STAGES.map((st, idx) => {
              const isActive = activeStep >= idx;
              const isCurrent = activeStep === idx;
              return (
                <button
                  key={st.step}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center group focus:outline-none`}
                >
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#00f0ff] text-black shadow-[0_0_20px_#00f0ff] scale-110"
                        : isActive
                        ? "bg-[#00f0ff]/30 text-[#00f0ff] border border-[#00f0ff]"
                        : "bg-[#030712] text-white/40 border border-white/20 hover:border-white/40"
                    }`}
                  >
                    {st.step}
                  </div>
                  <span
                    className={`mt-3 text-xs font-mono font-semibold transition-colors ${
                      isCurrent ? "text-[#00f0ff]" : "text-white/60"
                    }`}
                  >
                    {st.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Presentation Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-[#00f0ff]/20 bg-black/40">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStage.step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/20">
                    STAGE {currentStage.step}
                  </span>
                  <span className="text-xs font-mono text-white/40">
                    {currentStage.metric}
                  </span>
                </div>

                <h3 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                  {currentStage.title} — {currentStage.subtitle}
                </h3>

                <p className="text-base text-white/60 leading-relaxed">
                  {currentStage.description}
                </p>

                {/* Stage selector buttons for mobile */}
                <div className="flex gap-2 pt-4 md:hidden">
                  {STAGES.map((st, idx) => (
                    <button
                      key={st.step}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono ${
                        activeStep === idx
                          ? "bg-[#00f0ff] text-black font-bold"
                          : "bg-white/5 text-white/60"
                      }`}
                    >
                      {st.step}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Stage Visual */}
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden glass-panel p-2">
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-black/60">
                  <Image
                    src={currentStage.image}
                    alt={currentStage.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
