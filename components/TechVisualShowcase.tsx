"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Reveal from "./Reveal";

export default function TechVisualShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Bi-directional scroll-linked transforms
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });
  
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.92, 1.04, 0.96]);
  const y = useTransform(smoothProgress, [0, 1], [-40, 40]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden py-24 lg:py-36 border-t border-white/10 bg-[#030712]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Title Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              INTEGRATED HARDWARE LANDSCAPE
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
              Precision engineering at every micro-layer.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Every circuit path, cooling fin, and memory bus is aligned to minimize latency and maximize throughput.
            </p>
          </div>
        </Reveal>

        {/* Scroll Parallax Hardware Showcase Image */}
        <motion.div
          style={{ scale, y, opacity }}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden glass-panel p-3 shadow-[0_20px_60px_rgba(0,0,0,0.9)] gpu-layer"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/60">
            <Image
              src="/images/nexus_interface.png"
              alt="NEXUS Cybernetic System Visual"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            {/* Soft gradient edge vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />
          </div>

          {/* Technical Specs Callout Overlay */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#030712]/90 border border-[#00f0ff]/20 p-4 sm:p-6 rounded-2xl backdrop-blur-md">
            <div>
              <p className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">
                SYSTEM INTERCONNECT BUS
              </p>
              <p className="text-sm font-semibold text-white mt-1">
                Direct Quantum Memory Link • 1.2 TB/s Bandwidth
              </p>
            </div>
            <span className="text-xs font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
              ACTIVE TELEMETRY
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
