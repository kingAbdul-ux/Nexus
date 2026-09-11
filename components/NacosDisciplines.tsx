"use client";

import { motion } from "motion/react";

const disciplines = [
  {
    name: "Computer Science",
    description: "Study of computation, algorithms, and information processing systems.",
    icon: "💻",
  },
  {
    name: "Software Engineering",
    description: "Design, development, and maintenance of software systems and applications.",
    icon: "⚙️",
  },
  {
    name: "Cyber Security",
    description: "Protection of computer systems, networks, and data from digital threats.",
    icon: "🔒",
  },
  {
    name: "Information Technology",
    description: "Management and use of information systems and technology infrastructure.",
    icon: "🌐",
  },
  {
    name: "Information Systems",
    description: "Integration of people, technology, and organizations for data management.",
    icon: "📊",
  },
  {
    name: "Data Science",
    description: "Extraction of knowledge and insights from structured and unstructured data.",
    icon: "📈",
  },
];

export default function NacosDisciplines() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="disciplines"
    >
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/3 top-1/3 rounded-full"
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
              Our Disciplines
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Computing{" "}
            <span className="text-[#4FD1C5]">Disciplines</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            Explore the diverse computing disciplines that make up our technology community at Nile University.
          </p>
        </motion.div>

        {/* Premium Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="relative h-full rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-8 transition-all duration-500 hover:border-[#4FD1C5]/30 hover:bg-[#0D1F3D]/60 hover:shadow-xl hover:shadow-[#4FD1C5]/10 hover:-translate-y-1">
                {/* Icon */}
                <div className="text-5xl mb-6">{discipline.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-4">
                  {discipline.name}
                </h3>

                {/* Description */}
                <p className="text-base text-[#8B96A5] leading-relaxed">
                  {discipline.description}
                </p>

                {/* Premium hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4FD1C5]/0 to-[#4FD1C5]/0 group-hover:from-[#4FD1C5]/5 group-hover:to-transparent transition-all duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}