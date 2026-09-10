"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const FEATURES = [
  {
    number: "01",
    title: "Quantum Neural Processing",
    tag: "N3 NEURAL CORE",
    description:
      "Integrated 64 TOPS neural hardware engine dedicated to processing complex spatial models, generative code, and real-time physics in zero latency.",
    image: "/images/nexus_processor.png",
    metric: "64 TOPS Acceleration",
  },
  {
    number: "02",
    title: "Hydro-Dynamic Liquid Cooling",
    tag: "CRYO VAPOR CHAMBER",
    description:
      "Vapor loop cooling system built with microscopic copper channels. Dissipates up to 180W thermal load silently under sustained workloads.",
    image: "/images/nexus_cooling.png",
    metric: "180W Dissipation",
  },
  {
    number: "03",
    title: "120Hz Micro-OLED Viewport",
    tag: "QUANTUM DISPLAY",
    description:
      "Ultra-dense 3,000 nits Micro-OLED panel with 10-bit color accuracy and sub-1ms motion response for unmatched visual fidelity.",
    image: "/images/nexus_hero_device.png",
    metric: "< 1ms Response",
  },
  {
    number: "04",
    title: "Zero-Latency System OS",
    tag: "NEXUS CORE OS",
    description:
      "Direct hardware kernel mapping allocating execution power dynamically to high-demand active threads with zero OS overhead.",
    image: "/images/nexus_interface.png",
    metric: "99.99% Core Efficiency",
  },
];

export default function CoreFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeat = FEATURES[activeIndex];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-28 lg:py-40 border-t border-white/10 bg-[#030712]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              CORE ARCHITECTURE
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Engineered from first principles.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Every system layer is built to work in seamless unison — from hardware micro-architectures to OS thread scheduling.
            </p>
          </div>
        </Reveal>

        {/* Desktop Interactive Layout & Mobile Stack */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Numbered Features List */}
          <div className="lg:col-span-6 space-y-4">
            {FEATURES.map((feat, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={feat.number}
                  onClick={() => setActiveIndex(idx)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-8 transition-all duration-300 border ${
                    isActive
                      ? "border-[#00f0ff] bg-[#00f0ff]/10 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00f0ff] bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/20">
                      {feat.number} — {feat.tag}
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      {feat.metric}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed">
                    {feat.description}
                  </p>

                  {/* Mobile Preview Image */}
                  <div className="mt-6 relative w-full aspect-[16/9] rounded-xl overflow-hidden glass-panel lg:hidden">
                    <Image
                      src={feat.image}
                      alt={feat.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Desktop Sticky Visual Viewer */}
          <div className="hidden lg:block lg:col-span-6 sticky top-28">
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden glass-panel p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#00f0ff]/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeat.number}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60"
                >
                  <Image
                    src={activeFeat.image}
                    alt={activeFeat.title}
                    fill
                    sizes="50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70 pointer-events-none" />

                  {/* Overlay Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl border border-white/10 bg-[#030712]/90 backdrop-blur-md flex justify-between items-center">
                    <div>
                      <p className="text-[10px] font-mono text-[#00f0ff] uppercase tracking-widest">
                        FEATURE {activeFeat.number} SPEC
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        {activeFeat.title}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#00f0ff] font-bold">
                      {activeFeat.metric}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
