"use client";

import { motion } from "motion/react";

const socialChannels = [
  {
    name: "Discord",
    description: "Join our main community server for real-time discussions and collaboration.",
    icon: "💬",
    href: "https://discord.com/",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "WhatsApp",
    description: "Quick updates and announcements in our WhatsApp group.",
    icon: "📱",
    href: "https://chat.whatsapp.com/",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Telegram",
    description: "Technical discussions and resource sharing in our Telegram channel.",
    icon: "✈️",
    href: "https://t.me/",
    color: "from-blue-400 to-cyan-400",
  },
  {
    name: "Twitter/X",
    description: "Stay updated with the latest tech news and chapter announcements.",
    icon: "🐦",
    href: "https://x.com/",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "Instagram",
    description: "Visual content, event highlights, and community moments.",
    icon: "📸",
    href: "https://www.instagram.com/",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "LinkedIn",
    description: "Professional networking and career opportunities.",
    icon: "💼",
    href: "https://www.linkedin.com/",
    color: "from-blue-600 to-blue-800",
  },
];

export default function NacosCommunity() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="community"
    >
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 1000,
            height: 700,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.06) 0%, transparent 70%)",
            filter: "blur(120px)",
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
              Join Our Community
            </span>
          </motion.div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
            Student{" "}
            <span className="text-[#4FD1C5]">Community</span>
          </h2>

          <p className="mt-8 text-xl text-[#8B96A5] leading-relaxed">
            Connect with fellow students, stay updated on events, and grow your network through our social channels.
          </p>
        </motion.div>

        {/* Premium Social Channels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="relative group block"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="relative h-full rounded-2xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 p-8 transition-all duration-500 hover:border-[#4FD1C5]/30 hover:bg-[#0D1F3D]/60 hover:shadow-xl hover:shadow-[#4FD1C5]/10 hover:-translate-y-1">
                {/* Icon */}
                <div className="text-5xl mb-6">{channel.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#F5F7FA] mb-3">
                  {channel.name}
                </h3>

                {/* Description */}
                <p className="text-base text-[#8B96A5] leading-relaxed mb-4">
                  {channel.description}
                </p>

                {/* CTA */}
                <div className="inline-flex items-center gap-2 text-[#4FD1C5] font-medium group-hover:gap-3 transition-all">
                  <span>Join Channel</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>

                {/* Premium hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#4FD1C5]/0 to-[#4FD1C5]/0 group-hover:from-[#4FD1C5]/5 group-hover:to-transparent transition-all duration-500 -z-10" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-[#4FD1C5]/30 bg-[rgba(79,209,197,0.06)] px-6 py-3 backdrop-blur-md"
            whileHover={{ scale: 1.02, borderColor: "rgba(79, 209, 197, 0.5)" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4FD1C5] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4FD1C5]" />
            </span>
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.25em] text-[#4FD1C5]">
              Connect With Us
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}