"use client";

import { motion } from "motion/react";

export default function NacosAbout() {
  return (
    <section
      className="relative py-32 lg:py-40 overflow-hidden"
      id="about"
    >
      {/* Premium background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 1000,
            height: 700,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.05) 0%, transparent 70%)",
            filter: "blur(120px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left - Premium Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
                About NACOS Nile
              </span>
            </motion.div>

            <h2 className="text-5xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-6xl lg:text-7xl leading-tight">
              Where technology meets{" "}
              <span className="text-[#4FD1C5]">community.</span>
            </h2>

            <div className="mt-10 space-y-8">
              <p className="text-xl leading-relaxed text-[#8B96A5]">
                NACOS Nile Chapter is a student technology community dedicated to empowering students with practical skills, real-world experience, and meaningful connections in the tech industry.
              </p>

              <p className="text-xl leading-relaxed text-[#8B96A5]">
                We believe in learning by doing, building projects that matter, and growing together as a community of innovators and leaders.
              </p>

              <p className="text-xl leading-relaxed text-[#8B96A5]">
                Through workshops, competitions, hackathons, and collaborative projects, we create opportunities for students to develop technical expertise, leadership abilities, and professional networks that last a lifetime.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {[
                { title: "Learn", desc: "Practical skills & knowledge" },
                { title: "Build", desc: "Real projects & solutions" },
                { title: "Collaborate", desc: "Work with like-minded peers" },
                { title: "Grow", desc: "Leadership & innovation" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="border-l-2 border-[#4FD1C5]/30 pl-5"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="text-3xl font-bold text-[#4FD1C5]">{item.title}</div>
                  <div className="text-sm text-[#8B96A5] mt-2">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Premium Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Premium background decorative elements */}
              <div className="absolute inset-0 rounded-3xl border border-[#4FD1C5]/10 bg-[#0D1F3D]/40 backdrop-blur-xl" />
              
              {/* Inner content */}
              <div className="absolute inset-10 rounded-2xl border border-[#4FD1C5]/20 bg-[#0A1628]/60 backdrop-blur-2xl flex items-center justify-center">
                <div className="text-center p-10">
                  <div className="text-9xl font-bold text-[#4FD1C5]/15 mb-6">N</div>
                  <div className="text-sm font-mono text-[#8B96A5] tracking-[0.2em] uppercase">
                    Technology Community
                  </div>
                  <div className="mt-6 text-xs text-[#5E6977] tracking-widest">
                    Innovation • Leadership • Excellence
                  </div>
                </div>
              </div>

              {/* Premium floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 rounded-2xl border border-[#4FD1C5]/20 bg-[#0D1F3D]/80 backdrop-blur-xl flex items-center justify-center shadow-xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-3xl">💡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 rounded-2xl border border-[#4FD1C5]/20 bg-[#0D1F3D]/80 backdrop-blur-xl flex items-center justify-center shadow-xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-2xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
