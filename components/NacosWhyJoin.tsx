"use client";

import { motion } from "motion/react";

const benefits = [
  {
    title: "Learn Practical Skills",
    description: "Gain hands-on experience with real technologies and development practices that go beyond the classroom.",
    icon: "⚡",
  },
  {
    title: "Build Real Projects",
    description: "Work on meaningful projects that solve real problems and build a portfolio that stands out.",
    icon: "🛠️",
  },
  {
    title: "Meet Like-Minded Students",
    description: "Connect with peers who share your passion for technology and innovation.",
    icon: "👥",
  },
  {
    title: "Develop Leadership Skills",
    description: "Take on leadership roles, organize events, and develop skills that will serve you throughout your career.",
    icon: "🎯",
  },
  {
    title: "Compete and Showcase",
    description: "Participate in competitions and showcase your work to industry professionals and peers.",
    icon: "🏆",
  },
  {
    title: "Grow Your Network",
    description: "Build relationships with mentors, alumni, and industry professionals who can help guide your career.",
    icon: "🌐",
  },
];

export default function NacosWhyJoin() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/4 bottom-1/4 rounded-full"
          style={{
            width: 900,
            height: 700,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.05) 0%, transparent 70%)",
            filter: "blur(110px)",
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
              Why Join NACOS
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Benefits of Being Part of{" "}
            <span className="text-[#4FD1C5]">NACOS Nile</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            Join a community that invests in your growth and provides opportunities to develop skills, build connections, and launch your career in technology.
          </p>
        </motion.div>

        {/* Premium Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
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
                <div className="text-4xl mb-6">{benefit.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F5F7FA] mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#8B96A5] leading-relaxed">
                  {benefit.description}
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
