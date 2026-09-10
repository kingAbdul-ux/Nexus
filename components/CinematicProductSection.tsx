"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Reveal from "./Reveal";

const CALLOUTS = [
  { id: "display", label: "120Hz Micro-OLED Viewport", top: "25%", left: "30%", detail: "3,000 nits Peak Brightness" },
  { id: "cooling", label: "Hydro-Dynamic Cryo Vent", top: "65%", left: "75%", detail: "180W Heat Dissipation" },
  { id: "silicon", label: "N3 Neural Accelerator", top: "50%", left: "48%", detail: "64 TOPS AI Compute" },
  { id: "chassis", label: "Titanium Alloy Unibody", top: "80%", left: "25%", detail: "100% Recycled Metal" },
];

export default function CinematicProductSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  // Camera zoom & 3D rotation transforms linked to scroll
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.88, 1.08, 1]);
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [14, 0, -8]);
  const rotateY = useTransform(smoothProgress, [0, 0.5, 1], [-18, 0, 18]);
  const textOpacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative h-[200vh] border-t border-white/10 bg-[#030712]"
    >
      {/* Sticky Viewport Frame */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        
        {/* Background Radial Spotlight Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 850,
            height: 550,
            background:
              "radial-gradient(ellipse, rgba(0, 240, 255, 0.15) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          
          {/* Top Stage Header */}
          <motion.div style={{ opacity: textOpacity }} className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff] bg-[#00f0ff]/10 px-4 py-1.5 rounded-full border border-[#00f0ff]/20">
              3D CINEMATIC PRODUCT SHOWCASE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white tracking-tight sm:text-5xl">
              NEXUS Flagship Hardware
            </h2>
          </motion.div>

          {/* 3D Rotating Laptop Viewport */}
          <div className="relative flex justify-center items-center">
            <motion.div
              style={{ scale, rotateX, rotateY }}
              className="relative w-full max-w-[640px] aspect-[16/10] rounded-3xl overflow-hidden glass-panel p-3 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-[#00f0ff]/30 gpu-layer"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
                <Image
                  src="/images/nexus_hero_device.png"
                  alt="NEXUS 3D Product Presentation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Animated Interactive Callout Nodes */}
              {CALLOUTS.map((co) => (
                <div
                  key={co.id}
                  style={{ top: co.top, left: co.left }}
                  className="absolute z-20 hidden sm:flex items-center gap-2 -translate-x-1/2 -translate-y-1/2 group"
                >
                  <span className="relative flex h-5 w-5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f0ff] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00f0ff]" />
                  </span>
                  <div className="rounded-xl border border-[#00f0ff]/30 bg-[#030712]/90 px-3 py-1.5 backdrop-blur-md shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-90">
                    <p className="text-[10px] font-mono font-bold text-white">
                      {co.label}
                    </p>
                    <p className="text-[9px] font-mono text-[#00f0ff]">
                      {co.detail}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
