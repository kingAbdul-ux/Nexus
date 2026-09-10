"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";
import Reveal from "./Reveal";

/* ── Count-Up Hook ─────────────────────────────── */
function CountUp({
  end,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * end;
      if (ref.current) {
        ref.current.textContent = prefix + value.toFixed(decimals) + suffix;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const BENCHMARKS = [
  { end: 5.0, suffix: " GHz", label: "CPU TURBO CLOCK", metric: "TSMC 2nm Node", decimals: 1 },
  { end: 32, suffix: " GB", label: "UNIFIED MEMORY", metric: "512-bit Interconnect", decimals: 0 },
  { end: 2, suffix: " TB", label: "NVMe SSD CAPACITY", metric: "14.5 GB/s Read", decimals: 0 },
  { end: 120, suffix: " Hz", label: "MICRO-OLED VIEWPORT", metric: "0.1ms Motion Blur", decimals: 0 },
  { end: 0.8, prefix: "< ", suffix: " ms", label: "BUS LATENCY RESPONSE", metric: "Global Mesh Route", decimals: 1 },
];

export default function PerformanceSection() {
  return (
    <section
      id="performance"
      className="relative overflow-hidden py-24 lg:py-36 border-t border-[#1B2632] bg-[#05070A]"
    >
      {/* Glow Aura */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="tech-badge">
              HARDWARE BENCHMARKS
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-5xl">
              Peak specifications. Precision engineered.
            </h2>
            <p className="mt-4 text-base text-[#8B96A5] leading-relaxed">
              Every subsystem tuned to deliver instantaneous deterministic feedback under extreme computational demands.
            </p>
          </div>
        </Reveal>

        {/* 5 Stats Cards Grid with Illuminated Interconnect Lines */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          
          {BENCHMARKS.map((st, i) => (
            <Reveal key={st.label} delay={i * 0.06}>
              <div className="surface-panel surface-panel-hover p-5 sm:p-6 rounded-xl border border-[#1B2632] bg-[#0D131A] relative overflow-hidden flex flex-col justify-between h-full group">
                
                {/* Micro Top Cyan Progress Line on Hover */}
                <div className="h-0.5 w-full bg-[#1B2632] overflow-hidden rounded-full mb-4">
                  <div className="h-full w-0 bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
                </div>

                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold font-mono text-[#00E5FF] tracking-tight">
                    <CountUp
                      end={st.end}
                      prefix={st.prefix}
                      suffix={st.suffix}
                      decimals={st.decimals}
                      duration={2}
                    />
                  </p>
                  <p className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[#F5F7FA] font-bold">
                    {st.label}
                  </p>
                  <p className="mt-1 text-[9px] font-mono text-[#5E6977]">
                    {st.metric}
                  </p>
                </div>

                {/* Subtle illuminated status indicator */}
                <div className="mt-6 flex items-center justify-between border-t border-[#1B2632] pt-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
                    <span className="text-[9px] font-mono text-[#00E5FF]">
                      VERIFIED
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-[#5E6977]">
                    T+0
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}
