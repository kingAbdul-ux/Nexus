"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const CARDS = [
  {
    id: "processor",
    number: "01",
    title: "N3 NEURAL PROCESSOR",
    subtitle: "2nm TSMC EUV • 64 TOPS Acceleration",
    description:
      "40.2 billion ultra-dense transistors powering simultaneous spatial neural models, real-time code optimization, and zero-latency physics simulations.",
    image: "/images/nexus_processor.png",
    metric: "40.2B Transistors",
    tag: "SILICON ARCHITECTURE",
  },
  {
    id: "cooling",
    number: "02",
    title: "CRYO VAPOR CHAMBER",
    subtitle: "Hydro-Dynamic Micro-Channel Coolant",
    description:
      "Silent 180W heat dissipation via microscopic liquid loops keeping core temperatures at 34°C nominal under maximum sustained turbo clocks.",
    image: "/images/nexus_cooling.png",
    metric: "180W Silent Cooling",
    tag: "THERMAL DYNAMICS",
  },
  {
    id: "memory",
    number: "03",
    title: "UNIFIED MEMORY BUS",
    subtitle: "1.2 TB/s High-Throughput Interconnect",
    description:
      "Zero-latency unified memory buffer enabling instantaneous register allocation between EUV graphics cores and neural acceleration arrays.",
    image: "/images/nexus_interface.png",
    metric: "1.2 TB/s Bandwidth",
    tag: "DATA FABRIC",
  },
  {
    id: "os",
    number: "04",
    title: "NEXUS CORE OS",
    subtitle: "Direct Silicon Thread Mapping",
    description:
      "Low-overhead micro-kernel assigning thread priority to active execution buffers without operating system context-switching latency.",
    image: "/images/nexus_hero_device.png",
    metric: "< 0.8ms Latency",
    tag: "SYSTEM KERNEL",
  },
  {
    id: "ai",
    number: "05",
    title: "AI SPATIAL PIPELINE",
    subtitle: "Real-Time Spatial & Generative Compute",
    description:
      "Native neural instruction sets accelerating LLM inference, 8K video synthesis, and complex multi-threaded software compilation.",
    image: "/images/nexus_processor.png",
    metric: "64 TOPS Compute",
    tag: "ACCELERATION",
  },
];

export default function HorizontalScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-66%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[250vh] border-t border-[#1B2632] bg-[#05070A]"
    >
      {/* Sticky Viewport Window */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">

        {/* Section Heading Tag */}
        <div className="absolute top-8 left-8 z-20">
          <span className="tech-badge">
            HARDWARE SHOWCASE GALLERY
          </span>
        </div>

        {/* Horizontal Moving Cards Track */}
        <motion.div style={{ x }} className="flex gap-6 pl-8 md:pl-16 gpu-layer">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="relative w-[85vw] max-w-[480px] aspect-[4/5] flex-shrink-0 rounded-xl p-6 sm:p-8 surface-panel border border-[#1B2632] bg-[#0D131A] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-300 hover:border-[#00E5FF]/40"
            >
              {/* Card Top Header */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#00E5FF] bg-[rgba(0,229,255,0.08)] px-2.5 py-1 rounded border border-[#00E5FF]/20">
                      {card.number}
                    </span>
                    <span className="text-[10px] font-mono text-[#5E6977] uppercase tracking-wider">
                      {card.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#8B96A5]">
                    {card.metric}
                  </span>
                </div>

                <h3 className="mt-5 text-xl sm:text-2xl font-extrabold text-[#F5F7FA] tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-mono text-[#00E5FF]">
                  {card.subtitle}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#8B96A5] leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Image Showcase */}
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden surface-panel p-2 mt-4">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-[#080C11]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 85vw, 480px"
                    className="object-cover object-center transform transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-transparent to-transparent opacity-70 pointer-events-none" />
                </div>
              </div>

              {/* Bottom Accent Line on Hover */}
              <div className="mt-5 h-0.5 w-full bg-[#1B2632] overflow-hidden rounded-full">
                <div className="h-full w-0 bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
