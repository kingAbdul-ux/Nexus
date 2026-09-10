"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Reveal from "./Reveal";

const MODULES = [
  {
    number: "01",
    tag: "SYS // NEURAL SILICON",
    title: "INTELLIGENT AUTOMATION",
    subtitle: "64 TOPS Neural Accelerator",
    description:
      "40 billion TSMC 2nm transistors executing autonomous spatial models, automated code optimization, and real-time physics simulations with zero CPU stall.",
    image: "/images/nexus_processor.png",
    specs: ["40.2B Transistors", "64 TOPS Compute", "2nm EUV Silicon"],
    latency: "0.12ms",
  },
  {
    number: "02",
    tag: "SYS // UNIFIED BUS",
    title: "REAL-TIME DATA",
    subtitle: "1.2 TB/s Unified Interconnect",
    description:
      "High-speed unified memory pipeline delivering zero-latency data transfer between local graphics buffers and AI neural accelerators across a 512-bit bus.",
    image: "/images/nexus_cooling.png",
    specs: ["1.2 TB/s Bandwidth", "512-bit Bus Width", "Zero Bus Contention"],
    latency: "< 0.8ms",
  },
  {
    number: "03",
    tag: "SYS // EDGE MESH",
    title: "CONNECTED SYSTEMS",
    subtitle: "Distributed Node Architecture",
    description:
      "Sub-millisecond synchronization connecting local workstations to low-orbit distributed compute clusters worldwide for instantaneous federated workloads.",
    image: "/images/nexus_hero_device.png",
    specs: ["256 Low-Orbit Nodes", "120Hz Viewport Sync", "Sub-1ms Mesh"],
    latency: "0.45ms",
  },
  {
    number: "04",
    tag: "SYS // KERNEL SCHEDULER",
    title: "ADAPTIVE INTELLIGENCE",
    subtitle: "Zero-Overhead Micro-Kernel",
    description:
      "Direct register-level thread scheduler assigning dynamic core frequency and cache hierarchy to active execution buffers based on instantaneous load.",
    image: "/images/nexus_interface.png",
    specs: ["Zero OS Overhead", "Dynamic Frequency", "5.0 GHz Max Turbo"],
    latency: "0.05ms",
  },
];

export default function SystemModules() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeMod = MODULES[activeIdx];

  return (
    <section
      id="modules"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <span className="tech-badge">
              SYSTEM MODULES
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-5xl">
              Precision hardware modules.
            </h2>
            <p className="mt-4 text-base text-[#8B96A5] leading-relaxed">
              Modular hardware architecture built to execute high-demand computational workloads with deterministic latency.
            </p>
          </div>
        </Reveal>

        {/* Interactive Layout: Left Selector Cards, Right Desktop Sticky Showcase */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Numbered Module Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {MODULES.map((mod, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={mod.number}
                  onClick={() => setActiveIdx(idx)}
                  className={`cursor-pointer rounded-xl p-6 transition-all duration-200 border relative overflow-hidden group ${
                    isActive
                      ? "border-[#00E5FF]/60 bg-[#0D131A] shadow-[0_8px_24px_rgba(0,0,0,0.8)]"
                      : "border-[#1B2632] bg-[#080C11] hover:border-[#263442] hover:bg-[#0D131A]"
                  }`}
                >
                  {/* Subtle Top Active Indicator Line */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                      isActive ? "bg-[#00E5FF]" : "bg-transparent group-hover:bg-[#1B2632]"
                    }`}
                  />

                  {/* Header Tag & Latency */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`font-mono text-sm font-extrabold transition-colors ${
                          isActive ? "text-[#00E5FF]" : "text-[#5E6977] group-hover:text-[#8B96A5]"
                        }`}
                      >
                        {mod.number}
                      </span>
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#8B96A5]">
                        {mod.tag}
                      </span>
                    </div>

                    <span className="font-mono text-[10px] text-[#5E6977]">
                      LATENCY {mod.latency}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-4 text-lg font-bold text-[#F5F7FA] tracking-tight group-hover:text-white transition-colors">
                    {mod.title}
                  </h3>
                  <p className="mt-0.5 text-xs font-mono text-[#00E5FF]">
                    {mod.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Mobile Preview Image */}
                  <div className="mt-4 relative w-full aspect-[16/9] rounded-lg overflow-hidden surface-panel lg:hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
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
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden surface-panel p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#1B2632]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMod.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full rounded-lg overflow-hidden bg-[#080C11]"
                >
                  <Image
                    src={activeMod.image}
                    alt={activeMod.title}
                    fill
                    sizes="50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Module Spec Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-lg border border-[#1B2632] bg-[#05070A]/90 backdrop-blur-md">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1B2632]">
                      <span className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest">
                        MODULE {activeMod.number} // HARDWARE SPECIFICATION
                      </span>
                      <span className="text-[9px] font-mono text-[#5E6977]">
                        VERIFIED
                      </span>
                    </div>

                    <p className="text-sm font-bold text-[#F5F7FA]">
                      {activeMod.title}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3 font-mono text-[10px]">
                      {activeMod.specs.map((sp) => (
                        <span
                          key={sp}
                          className="px-2.5 py-1 rounded bg-[#0D131A] border border-[#1B2632] text-[#8B96A5]"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
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
