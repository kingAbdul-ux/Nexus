"use client";

import { motion } from "motion/react";
import Image from "next/image";

// Placeholder executive data - would be replaced with real data from repository
const executives = [
  {
    name: "Chapter President",
    position: "President",
    image: null, // Would use real image from repository
  },
  {
    name: "Vice President",
    position: "Vice President",
    image: null,
  },
  {
    name: "Technical Lead",
    position: "Technical Lead",
    image: null,
  },
  {
    name: "Events Coordinator",
    position: "Events Coordinator",
    image: null,
  },
];

export default function NacosExecutives() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="executives"
    >
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute right-1/3 top-1/3 rounded-full"
          style={{
            width: 850,
            height: 650,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.05) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Premium Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-[#4FD1C5]/20 bg-[rgba(79,209,197,0.06)] px-4 py-2 backdrop-blur-md mb-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#4FD1C5]">
              Leadership Team
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Meet Our{" "}
            <span className="text-[#4FD1C5]">Executives</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            The dedicated team leading NACOS Nile Chapter and driving our mission to empower students in technology.
          </p>
        </motion.div>

        {/* Premium Executives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((executive, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="relative h-full rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 overflow-hidden transition-all duration-500 hover:border-[#4FD1C5]/30 hover:bg-[#0D1F3D]/60 hover:shadow-xl hover:shadow-[#4FD1C5]/10 hover:-translate-y-1">
                {/* Premium image placeholder */}
                <div className="aspect-[3/4] bg-gradient-to-br from-[#1B2632] to-[#0A1628] flex items-center justify-center relative overflow-hidden">
                  <div className="text-7xl opacity-15">👤</div>
                  
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-[#4FD1C5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F5F7FA] mb-2">
                    {executive.name}
                  </h3>
                  <p className="text-sm text-[#4FD1C5] font-medium">
                    {executive.position}
                  </p>
                </div>

                {/* Premium social link placeholder */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 rounded-xl bg-[#0A1628] border border-[#4FD1C5]/30 flex items-center justify-center text-[#4FD1C5] hover:bg-[#4FD1C5] hover:text-[#0A1628] transition-all duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about real photos */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <p className="text-sm text-[#5E6977] font-mono">
            * Executive photos and names will be updated with actual chapter leadership
          </p>
        </motion.div>
      </div>
    </section>
  );
}
