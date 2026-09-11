"use client";

import { motion } from "motion/react";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Workshops",
    description: "Hands-on learning sessions covering cutting-edge technologies, programming languages, and development practices.",
    icon: "📚",
  },
  {
    id: 2,
    title: "Tech Events",
    description: "Tech talks, seminars, and industry insights from professionals and experts in the technology field.",
    icon: "🎤",
  },
  {
    id: 3,
    title: "Competitions",
    description: "Hackathons, coding challenges, and project competitions that test and showcase your technical skills.",
    icon: "🏆",
  },
  {
    id: 4,
    title: "Community",
    description: "A supportive network of peers, mentors, and alumni who collaborate and grow together.",
    icon: "🤝",
  },
];

export default function NacosPrograms() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="programs"
    >
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute right-1/4 top-1/4 rounded-full"
          style={{
            width: 800,
            height: 600,
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
              What We Do
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Learn. Build.{" "}
            <span className="text-[#4FD1C5]">Experience.</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            Discover the programs and activities that make NACOS Nile Chapter a hub for technology enthusiasts and future leaders.
          </p>
        </motion.div>

        {/* Premium Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div
                className={`relative h-full rounded-2xl border p-8 transition-all duration-500 ${
                  hoveredId === program.id
                    ? "border-[#4FD1C5]/40 bg-[#0D1F3D]/80 shadow-xl shadow-[#4FD1C5]/15 transform -translate-y-2"
                    : "border-[#4FD1C5]/10 bg-[#0D1F3D]/40 hover:border-[#4FD1C5]/30"
                }`}
              >
                {/* Index */}
                <div className="absolute top-6 right-6 text-[10px] font-mono text-[#5E6977]">
                  0{program.id}
                </div>

                {/* Icon */}
                <motion.div
                  className="text-5xl mb-6"
                  animate={{ scale: hoveredId === program.id ? 1.1 : 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {program.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#8B96A5] leading-relaxed">
                  {program.description}
                </p>

                {/* Arrow indicator */}
                <motion.div
                  className="absolute bottom-6 right-6 text-[#4FD1C5]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{
                    opacity: hoveredId === program.id ? 1 : 0,
                    x: hoveredId === program.id ? 0 : -10,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  →
                </motion.div>

                {/* Premium glow effect */}
                {hoveredId === program.id && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-[#4FD1C5]/5 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
