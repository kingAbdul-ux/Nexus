"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function NacosJoinCTA() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="join"
    >
      {/* Premium dramatic background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 1200,
            height: 800,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.12) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
        
        {/* Additional premium glow */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(56, 178, 172, 0.08) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl border border-[#4FD1C5]/20 bg-[#0D1F3D]/60 backdrop-blur-2xl p-16 lg:p-24 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Premium animated background elements */}
          <motion.div
            className="absolute top-0 right-0 w-80 h-80 bg-[#4FD1C5]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          <motion.div
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#38B2AC]/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Premium Content */}
          <div className="relative z-10 text-center">
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-[#4FD1C5]/30 bg-[rgba(79,209,197,0.1)] px-5 py-2.5 backdrop-blur-md mb-10"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4FD1C5] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4FD1C5]" />
              </span>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#4FD1C5]">
                Join the Community
              </span>
            </motion.div>

            <motion.h2
              className="text-6xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-7xl lg:text-8xl leading-tight mb-8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              BUILD. CONNECT.{" "}
              <span className="text-[#4FD1C5]">LEAD.</span>
            </motion.h2>

            <motion.p
              className="text-2xl text-[#8B96A5] max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Your next opportunity starts with the community you build. Join NACOS Nile Chapter and start your journey today.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="#"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] px-10 py-5 text-base font-bold text-[#0A1628] transition-all shadow-xl shadow-[#4FD1C5]/25 hover:shadow-2xl hover:shadow-[#4FD1C5]/35"
                >
                  <span>Join NACOS Nile</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="#about"
                  className="group inline-flex items-center gap-3 rounded-xl border border-[#4FD1C5]/30 bg-[#0A1628] px-10 py-5 text-base font-bold text-[#4FD1C5] transition-all hover:bg-[rgba(79,209,197,0.1)] hover:border-[#4FD1C5]/50 hover:shadow-lg hover:shadow-[#4FD1C5]/15"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Premium additional info */}
            <motion.div
              className="mt-16 pt-10 border-t border-[#4FD1C5]/10 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-[#5E6977]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              <span className="text-[#8B96A5]">Open to all students</span>
              <span className="text-[#4FD1C5]/50">•</span>
              <span className="text-[#8B96A5]">No prior experience required</span>
              <span className="text-[#4FD1C5]/50">•</span>
              <span className="text-[#8B96A5]">Start your journey today</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
