"use client";

import { motion } from "motion/react";
import Reveal from "./Reveal";

const solutions = [
  {
    number: "01",
    title: "CREATE",
    label: "Ideas into reality",
    description:
      "Transform concepts into powerful digital experiences with tools designed around the way modern creators actually work.",
  },
  {
    number: "02",
    title: "DEPLOY",
    label: "From local to global",
    description:
      "Take your product from development to production with infrastructure engineered for speed, reliability and scale.",
  },
  {
    number: "03",
    title: "SCALE",
    label: "Built for what's next",
    description:
      "Grow without rebuilding your foundation. NEXUS adapts as your users, data and ambitions expand.",
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden px-6 py-32 lg:px-8 lg:py-44"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Accent background glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -z-10 -translate-y-1/2 rounded-full"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(124,108,248,0.06) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ── LEFT (sticky) ────────────────────── */}
          <Reveal>
            <div className="lg:sticky lg:top-36 lg:h-fit">
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30">
                02 — Solutions
              </p>

              <h2 className="mt-8 max-w-xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Built for
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #c4b5fd 0%, #7c6cf8 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  ambition.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-6 text-white/35">
                From the first line of code to millions of users, NEXUS gives
                ambitious teams the foundation to move faster.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <motion.span
                  className="h-2 w-2 rounded-full"
                  style={{
                    background: "#7c6cf8",
                    boxShadow: "0 0 10px rgba(124,108,248,0.9)",
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[10px] uppercase tracking-[0.26em] text-white/30">
                  Designed for scale
                </span>
              </div>

              {/* Decorative step indicators */}
              <div className="mt-16 hidden space-y-3 lg:block">
                {solutions.map((s, i) => (
                  <div key={s.number} className="flex items-center gap-3">
                    <div
                      className="h-1.5 w-1.5 rounded-full transition-all duration-300"
                      style={{ background: i === 0 ? "#7c6cf8" : "rgba(255,255,255,0.15)" }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {s.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── RIGHT (cards) ────────────────────── */}
          <div className="space-y-4">
            {solutions.map((solution, i) => (
              <Reveal key={solution.number} delay={i * 0.12}>
                <motion.article
                  className="group relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.015)",
                    backdropFilter: "blur(4px)",
                  }}
                  whileHover={{
                    borderColor: "rgba(124,108,248,0.25)",
                    background: "rgba(124,108,248,0.03)",
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Large background number */}
                  <span
                    className="pointer-events-none absolute -right-4 -top-10 select-none text-[160px] font-bold leading-none tracking-[-0.05em] transition-all duration-500"
                    style={{
                      color: "rgba(124,108,248,0.03)",
                      WebkitTextStroke: "1px rgba(124,108,248,0.04)",
                    }}
                  >
                    {solution.number}
                  </span>

                  {/* Top row */}
                  <div className="relative flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-medium"
                      style={{
                        background: "rgba(124,108,248,0.08)",
                        color: "rgba(124,108,248,0.6)",
                        border: "1px solid rgba(124,108,248,0.12)",
                      }}
                    >
                      {solution.number}
                    </span>

                    <motion.div
                      className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-400"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.35)",
                        fontSize: "1.1rem",
                      }}
                      whileHover={{
                        background: "linear-gradient(135deg, #9d8bf8, #7c6cf8)",
                        color: "white",
                        borderColor: "transparent",
                        boxShadow: "0 0 20px rgba(124,108,248,0.5)",
                        rotate: 45,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      ↗
                    </motion.div>
                  </div>

                  {/* Body */}
                  <div className="relative mt-14">
                    <p
                      className="text-[10px] uppercase tracking-[0.3em]"
                      style={{ color: "rgba(167,139,250,0.55)" }}
                    >
                      {solution.label}
                    </p>

                    <h3 className="mt-3 text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                      {solution.title}
                    </h3>

                    <p className="mt-5 max-w-lg text-sm leading-6 text-white/35">
                      {solution.description}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="relative mt-10 h-px w-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="absolute left-0 top-0 h-full w-0"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(124,108,248,0.4), rgba(167,139,250,0.8))",
                        transition: "width 0.65s cubic-bezier(0.22,1,0.36,1)",
                      }}
                      whileHover={{ width: "100%" } as never}
                    />
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}