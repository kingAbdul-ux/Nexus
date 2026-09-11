"use client";

import { motion } from "motion/react";

const highlights = [
  {
    title: "Annual Tech Summit",
    description: "Our flagship event bringing together students, professionals, and industry leaders for a day of learning and networking.",
    category: "Event",
    date: "2024",
  },
  {
    title: "Hackathon Winners",
    description: "Our team took first place in the regional hackathon with an innovative solution for campus sustainability.",
    category: "Achievement",
    date: "2024",
  },
  {
    title: "Workshop Series",
    description: "Monthly workshops covering web development, mobile apps, AI/ML, and cloud computing.",
    category: "Program",
    date: "Ongoing",
  },
  {
    title: "Industry Partnerships",
    description: "Collaborations with leading tech companies providing mentorship and internship opportunities.",
    category: "Partnership",
    date: "2024",
  },
];

export default function NacosHighlights() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/3 top-1/2 -translate-y-1/2 rounded-full"
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
              Chapter Highlights
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Moments That{" "}
            <span className="text-[#4FD1C5]">Define Us</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            Celebrating the achievements, events, and milestones that make NACOS Nile Chapter a vibrant technology community.
          </p>
        </motion.div>

        {/* Premium Asymmetric Gallery Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Large featured item */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative h-full min-h-[450px] rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-10 overflow-hidden group transition-all duration-500 hover:border-[#4FD1C5]/20 hover:shadow-xl hover:shadow-[#4FD1C5]/10">
              {/* Premium background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#4FD1C5]/5 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-2 text-xs font-mono font-semibold text-[#4FD1C5] bg-[#4FD1C5]/10 rounded-full">
                    {highlights[0].category}
                  </span>
                  <span className="text-xs text-[#5E6977] font-mono">{highlights[0].date}</span>
                </div>

                <h3 className="text-4xl font-bold text-[#F5F7FA] mb-6">
                  {highlights[0].title}
                </h3>

                <p className="text-xl text-[#8B96A5] leading-relaxed max-w-2xl">
                  {highlights[0].description}
                </p>

                <motion.div
                  className="mt-8 inline-flex items-center gap-3 text-[#4FD1C5] font-medium"
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <span>Learn more</span>
                  <span>→</span>
                </motion.div>
              </div>

              {/* Premium decorative element */}
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#4FD1C5]/10 to-transparent rounded-tl-full" />
            </div>
          </motion.div>

          {/* Side items */}
          <div className="lg:col-span-4 space-y-8">
            {highlights.slice(1).map((highlight, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="h-full rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-8 transition-all duration-500 hover:border-[#4FD1C5]/30 hover:bg-[#0D1F3D]/60 hover:shadow-lg hover:shadow-[#4FD1C5]/10 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1.5 text-[10px] font-mono font-semibold text-[#4FD1C5] bg-[#4FD1C5]/10 rounded-full">
                      {highlight.category}
                    </span>
                    <span className="text-[10px] text-[#5E6977] font-mono">{highlight.date}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#F5F7FA] mb-3">
                    {highlight.title}
                  </h4>

                  <p className="text-base text-[#8B96A5] leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Premium additional highlights row */}
        <motion.div
          className="mt-12 grid md:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-8 transition-all duration-500 hover:border-[#4FD1C5]/20 hover:bg-[#0D1F3D]/60 hover:shadow-lg hover:shadow-[#4FD1C5]/10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1.5 text-[10px] font-mono font-semibold text-[#4FD1C5] bg-[#4FD1C5]/10 rounded-full">
                Community
              </span>
              <span className="text-[10px] text-[#5E6977] font-mono">Growing</span>
            </div>

            <h4 className="text-2xl font-bold text-[#F5F7FA] mb-3">
              500+ Active Members
            </h4>

            <p className="text-base text-[#8B96A5] leading-relaxed">
              A thriving community of technology enthusiasts from various departments and disciplines.
            </p>
          </div>

          <div className="rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-8 transition-all duration-500 hover:border-[#4FD1C5]/20 hover:bg-[#0D1F3D]/60 hover:shadow-lg hover:shadow-[#4FD1C5]/10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1.5 text-[10px] font-mono font-semibold text-[#4FD1C5] bg-[#4FD1C5]/10 rounded-full">
                Impact
              </span>
              <span className="text-[10px] text-[#5E6977] font-mono">Measurable</span>
            </div>

            <h4 className="text-2xl font-bold text-[#F5F7FA] mb-3">
              50+ Projects Completed
            </h4>

            <p className="text-base text-[#8B96A5] leading-relaxed">
              Student-led projects addressing real challenges and creating innovative solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
