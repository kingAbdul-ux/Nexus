"use client";

import Reveal from "./Reveal";

const TECH_SPECS = [
  {
    category: "SILICON ARCHITECTURE",
    items: [
      { name: "Manufacturing Process", detail: "2nm TSMC EUV Lithography" },
      { name: "Transistor Count", detail: "40.2 Billion Transistors" },
      { name: "Neural Engine", detail: "64 TOPS Hardware Acceleration" },
      { name: "L3 Unified Cache", detail: "128MB Ultra-Fast Buffer" },
    ],
  },
  {
    category: "THERMAL & DISPLAY",
    items: [
      { name: "Cooling Solution", detail: "Hydro-Dynamic Vapor Chamber" },
      { name: "Thermal Envelope", detail: "180W Silent Dissipation" },
      { name: "Viewport Panel", detail: "120Hz Micro-OLED (3,000 nits)" },
      { name: "Response Time", detail: "< 1.0ms Motion Response" },
    ],
  },
];

export default function TechCredibility() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden py-28 lg:py-40 border-t border-white/10 bg-[#030712]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-mono font-medium uppercase tracking-[0.3em] text-[#00f0ff]">
              SYSTEM CREDIBILITY & SPECS
            </span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Built with modern technology.
            </h2>
            <p className="mt-4 text-base text-white/50 leading-relaxed">
              Verifiable hardware specifications engineered without compromise.
            </p>
          </div>
        </Reveal>

        {/* 2-Column Hardware Matrix */}
        <div className="grid md:grid-cols-2 gap-8">
          {TECH_SPECS.map((group, idx) => (
            <Reveal key={group.category} delay={idx * 0.1}>
              <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-white/[0.01]">
                <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest bg-[#00f0ff]/10 px-3 py-1 rounded-full border border-[#00f0ff]/20">
                  {group.category}
                </span>

                <div className="mt-8 space-y-6">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 gap-1"
                    >
                      <span className="text-sm font-mono text-white/60">
                        {item.name}
                      </span>
                      <span className="text-sm font-mono font-bold text-white">
                        {item.detail}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
