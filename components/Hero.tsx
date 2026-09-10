"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useState, useRef } from "react";

// Geometric Minimal SVG Outline Icons
function NeuralIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ThermalIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function BandwidthIcon() {
  return (
    <svg className="h-3.5 w-3.5 text-[#00E5FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2 1.5 3 3.5 3h9c2 0 3.5-1 3.5-3V7c0-2-1.5-3-3.5-3h-9C5.5 4 4 5 4 7zm0 5h16" />
    </svg>
  );
}

const SYSTEM_NODES = [
  { label: "N3 NEURAL CORE", val: "64 TOPS", pos: "top-4 -left-4 sm:-left-8", icon: NeuralIcon },
  { label: "CRYO LOOP", val: "34°C IDLE", pos: "top-14 -right-4 sm:-right-8", icon: ThermalIcon },
  { label: "BUS LATENCY", val: "0.8ms", pos: "bottom-14 -left-6 sm:-left-10", icon: BusIcon },
  { label: "UNIFIED LINK", val: "1.2 TB/s", pos: "bottom-4 -right-4 sm:-right-8", icon: BandwidthIcon },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const deviceY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const deviceRotateX = useTransform(smoothProgress, [0, 1], [4, -2]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 10,
      y: (clientY / innerHeight - 0.5) * 10,
    });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between"
    >
      {/* Soft Low-Contrast Radial Backdrop Lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(0, 229, 255, 0.08) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* ── LEFT CONTENT ─────────────────────────── */}
          <div className="lg:col-span-6 z-10">
            
            {/* Small Technical Status Label */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-md border border-[#00E5FF]/20 bg-[rgba(0,229,255,0.08)] px-3 py-1.5 backdrop-blur-md"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00E5FF]" />
              </span>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#00E5FF]">
                SYS // 01 • INTELLIGENT COMPUTING PLATFORM
              </span>
            </motion.div>

            {/* Cinematic Main Typography */}
            <motion.div
              className="mt-6 space-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-[4.5rem] leading-[0.95]">
                NEXUS
              </h1>
              <h2 className="text-3xl font-extrabold tracking-tight text-[#8B96A5] sm:text-5xl lg:text-[3.6rem] leading-[0.95]">
                INTELLIGENT SYSTEMS
              </h2>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              className="mt-6 max-w-xl text-base leading-relaxed text-[#8B96A5] md:text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
            >
              Advanced AI infrastructure and digital command platform. Precision-engineered for high-concurrency neural compute, 64 TOPS acceleration, and sub-millisecond bus synchronization.
            </motion.p>

            {/* Command Action Buttons */}
            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <Link
                id="hero-primary-cta"
                href="#pipeline"
                className="btn-primary py-3.5 px-6"
              >
                <span>INITIALIZE SYSTEM</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                id="hero-secondary-cta"
                href="#ecosystem"
                className="btn-secondary py-3.5 px-6"
              >
                <span>EXPLORE ARCHITECTURE</span>
              </Link>
            </motion.div>

            {/* Metadata Ticker */}
            <motion.div
              className="mt-10 pt-6 border-t border-[#1B2632] flex items-center gap-6 text-[10px] font-mono text-[#5E6977]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span>TSMC 2nm ARCHITECTURE</span>
              <span>•</span>
              <span>1.2 TB/s UNIFIED BUS</span>
              <span>•</span>
              <span className="text-[#00E5FF]/80">&lt; 0.8ms BUS DISPATCH</span>
            </motion.div>
          </div>

          {/* ── RIGHT — HARDWARE VISUAL ───────────────── */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 lg:pt-0">
            <motion.div
              className="relative w-full max-w-[520px] aspect-[4/3] flex items-center justify-center gpu-layer"
              style={{
                y: deviceY,
                rotateX: deviceRotateX,
                rotateY: mousePos.x * 0.35,
              }}
            >
              {/* Backlight Halo (Electric Cyan, Controlled Opacity) */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)",
                  filter: "blur(50px)",
                }}
              />

              {/* Integrated Visual Frame with Technical Coordinates */}
              <div className="relative z-10 w-full h-full rounded-xl overflow-hidden surface-panel p-2 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#1B2632]">
                <div className="relative w-full h-full rounded-lg overflow-hidden bg-[#080C11]">
                  <Image
                    src="/images/nexus_hero_device.png"
                    alt="NEXUS High-Performance Workstation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  
                  {/* Subtle Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Right Technical Stamp */}
                  <div className="absolute top-3 right-3 font-mono text-[9px] uppercase tracking-widest text-[#5E6977] bg-[#05070A]/80 px-2 py-0.5 rounded border border-[#1B2632]">
                    DEV // NODE-01
                  </div>
                </div>
              </div>

              {/* Floating Geometric System Telemetry Nodes */}
              {SYSTEM_NODES.map((node, i) => {
                const IconComponent = node.icon;
                return (
                  <motion.div
                    key={node.label}
                    className={`absolute z-20 hidden sm:flex items-center gap-2.5 rounded-lg border border-[#1B2632] bg-[#0D131A]/95 px-3 py-1.5 backdrop-blur-md shadow-lg ${node.pos}`}
                    style={{
                      x: mousePos.x * (i % 2 === 0 ? 0.2 : -0.2),
                      y: mousePos.y * (i % 2 === 0 ? 0.2 : -0.2),
                    }}
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-[#080C11] border border-[#1B2632]">
                      <IconComponent />
                    </div>
                    <div className="text-left font-mono">
                      <p className="text-[9px] text-[#8B96A5] tracking-wider">{node.label}</p>
                      <p className="text-xs font-bold text-[#00E5FF]">{node.val}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── Scroll Indicator ─────────────────────── */}
      <motion.div
        className="mx-auto mt-12 flex flex-col items-center gap-2 text-center select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#5E6977]">
          SCROLL TO INITIALIZE PIPELINE
        </span>
        <div className="h-6 w-px bg-gradient-to-b from-[#00E5FF] to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}