"use client";

import { useEffect, useRef } from "react";
import { useInView, motion } from "motion/react";

/* ── Count-up hook ─────────────────────────────── */

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
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const value = eased * end;
      ref.current!.textContent =
        prefix + value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, prefix, suffix, decimals]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

/* ── Data ──────────────────────────────────────── */

const stats = [
  { value: "99.99", suffix: "%",  label: "Platform uptime",   decimals: 2, end: 99.99 },
  { value: "120",   suffix: "+",  label: "Countries reached", decimals: 0, end: 120   },
  { value: "50",    suffix: "K+", label: "Active creators",   decimals: 0, end: 50    },
  { value: "8.4",   suffix: "M",  label: "Projects shipped",  decimals: 1, end: 8.4   },
];

const technologies = [
  "DESIGN", "DEVELOPMENT", "AI", "CLOUD",
  "AUTOMATION", "DATA", "SECURITY", "SCALE",
];

/* ── Component ─────────────────────────────────── */

export default function Stats() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 -z-10 -translate-y-1/2 rounded-full"
        style={{
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(124,108,248,0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Stat grid ────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-40">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/30">
            03 — Scale
          </p>

          <h2 className="mt-8 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Small beginnings.
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c4b5fd 0%, #7c6cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Massive potential.
            </span>
          </h2>
        </motion.div>

        <div
          className="grid grid-cols-2 lg:grid-cols-4"
          style={{
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {stats.map((stat, i) => (
            <motion.article
              key={stat.label}
              className="group relative overflow-hidden p-7 sm:p-10 transition-colors duration-500"
              style={{
                borderRight: "1px solid rgba(255,255,255,0.06)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ background: "rgba(124,108,248,0.025)" } as never}
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(124,108,248,0.07) 0%, transparent 70%)",
                }}
              />

              <p
                className="relative text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl"
                style={{
                  background: "linear-gradient(135deg, #ffffff 40%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <CountUp
                  end={stat.end}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={1.8}
                />
              </p>

              <p className="mt-3 text-xs uppercase tracking-[0.22em] text-white/30">
                {stat.label}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] w-0"
                style={{
                  background: "linear-gradient(to right, #7c6cf8, transparent)",
                  transition: "width 0.6s cubic-bezier(0.22,1,0.36,1)",
                }}
                whileHover={{ width: "100%" } as never}
              />
            </motion.article>
          ))}
        </div>
      </div>

      {/* ── Marquee ──────────────────────────────── */}
      <div
        className="py-7"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(124,108,248,0.015)",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex min-w-max animate-[marquee_22s_linear_infinite] items-center">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div key={`${tech}-${idx}`} className="flex items-center">
                <span className="px-7 text-xs font-medium uppercase tracking-[0.32em] text-white/25">
                  {tech}
                </span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "rgba(124,108,248,0.35)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}