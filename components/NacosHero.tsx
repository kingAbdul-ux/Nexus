"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";
import { useState, useRef } from "react";

export default function NacosHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });
  const deviceY = useTransform(smoothProgress, [0, 1], [0, 60]);
  const deviceRotateX = useTransform(smoothProgress, [0, 1], [4, -2]);

  // Parallax effects for background elements
  const bgGradient1Y = useTransform(smoothProgress, [0, 1], [0, -30]);
  const bgGradient2Y = useTransform(smoothProgress, [0, 1], [0, 20]);
  const particlesY = useTransform(smoothProgress, [0, 1], [0, -15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePos({
      x: (clientX / innerWidth - 0.5) * 10,
      y: (clientY / innerHeight - 0.5) * 10,
    });
  };

  const floatingAnimation = prefersReducedMotion 
    ? {} 
    : {
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  const pulseAnimation = prefersReducedMotion
    ? {}
    : {
        scale: [1, 1.05, 1],
        opacity: [0.6, 0.8, 0.6],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
      };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between"
      id="home"
    >
      {/* Premium technology-inspired background with parallax */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle grid pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(79, 209, 197, 0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(79, 209, 197, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
          animate={prefersReducedMotion ? {} : {
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Refined animated particles */}
        {!prefersReducedMotion && (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  background: Math.random() > 0.5 ? 'rgba(79, 209, 197, 0.3)' : 'rgba(56, 178, 172, 0.2)',
                  opacity: Math.random() * 0.2 + 0.05,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.05, 0.25, 0.05],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </>
        )}
        
        {/* Subtle connection lines */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#4FD1C5]/20 to-transparent"
              animate={floatingAnimation}
              transition={{ delay: 0.5, duration: 5 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-[#38B2AC]/15 to-transparent"
              animate={floatingAnimation}
              transition={{ delay: 1, duration: 6 }}
            />
          </>
        )}
        
        {/* Premium glowing gradients with parallax */}
        <motion.div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 900,
            height: 600,
            background:
              "radial-gradient(ellipse, rgba(79, 209, 197, 0.06) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
          animate={prefersReducedMotion ? {} : {
            y: bgGradient1Y,
          }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 rounded-full"
          style={{
            width: 500,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(56, 178, 172, 0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={prefersReducedMotion ? {} : {
            y: bgGradient2Y,
          }}
        />

        {/* Subtle abstract tech shapes */}
        {!prefersReducedMotion && (
          <>
            <motion.div
              className="absolute top-1/4 left-1/5 w-20 h-20 border border-[#4FD1C5]/5 rounded-full"
              animate={floatingAnimation}
              transition={{ delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-16 h-16 border border-[#38B2AC]/5 rounded-lg rotate-45"
              animate={floatingAnimation}
              transition={{ delay: 1, duration: 5 }}
            />
            <motion.div
              className="absolute top-1/2 right-1/5 w-12 h-12 bg-[#4FD1C5]/3 rounded-full"
              animate={pulseAnimation}
              transition={{ delay: 1.5 }}
            />
          </>
        )}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT CONTENT */}
          <div className="lg:col-span-7 z-10">
            
            {/* Premium Status Label */}
            <motion.div
              className="inline-flex items-center gap-2.5 rounded-full border border-[#4FD1C5]/20 bg-[rgba(79,209,197,0.06)] px-4 py-2 backdrop-blur-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4FD1C5] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4FD1C5]" />
              </span>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.25em] text-[#4FD1C5]">
                Technology Community
              </span>
            </motion.div>

            {/* Premium Main Typography with enhanced entrance sequence */}
            <div className="mt-8 space-y-4">
              <motion.h1 
                className="text-6xl font-extrabold tracking-tight text-[#F5F7FA] sm:text-7xl lg:text-[6rem] leading-[0.92]"
                initial={{ opacity: 0, y: 50, filter: "blur(12px)", letterSpacing: "0.08em" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", letterSpacing: "0em" }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  letterSpacing: { duration: 1.4, ease: "easeOut" }
                }}
              >
                NACOS NILE
              </motion.h1>
              
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                <motion.p
                  className="text-3xl font-semibold text-[#F5F7FA] sm:text-4xl lg:text-5xl leading-tight"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
                >
                  "Where ideas become{" "}
                  <span className="text-[#4FD1C5]">innovation</span>."
                </motion.p>
                <motion.p
                  className="text-2xl font-medium text-[#8B96A5] sm:text-3xl lg:text-4xl leading-tight"
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
                >
                  "Learn the skills. Build the future."
                </motion.p>
              </motion.div>
            </div>

            {/* Supporting Description */}
            <motion.p
              className="mt-10 max-w-xl text-lg leading-relaxed text-[#8B96A5] md:text-xl"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              Join a community of students learning technology, building projects together, collaborating on innovative solutions, and growing as leaders in the tech space.
            </motion.p>

            {/* Premium CTA Buttons with enhanced interactions */}
            <motion.div
              className="mt-12 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="#about"
                  className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#4FD1C5] to-[#38B2AC] px-8 py-4 text-sm font-bold text-[#0A1628] transition-all shadow-lg shadow-[#4FD1C5]/20 hover:shadow-xl hover:shadow-[#4FD1C5]/30"
                >
                  <span>Explore NACOS Nile</span>
                  <motion.span
                    className="transition-transform duration-200"
                    whileHover={{ x: 6 }}
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Link
                  href="#join"
                  className="group inline-flex items-center gap-3 rounded-xl border border-[#4FD1C5]/30 bg-[#0A1628] px-8 py-4 text-sm font-bold text-[#4FD1C5] transition-all hover:bg-[rgba(79,209,197,0.1)] hover:border-[#4FD1C5]/50 hover:shadow-lg hover:shadow-[#4FD1C5]/10"
                >
                  <span>Join the Community</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Premium Metadata */}
            <motion.div
              className="mt-12 pt-8 border-t border-[#1B2632] flex flex-wrap items-center gap-6 text-[10px] font-mono text-[#5E6977]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            >
              <span className="text-[#8B96A5]">Student Technology Community</span>
              <span className="text-[#4FD1C5]/50">•</span>
              <span className="text-[#4FD1C5]/80">Learn • Build • Grow</span>
              <span className="text-[#4FD1C5]/50">•</span>
              <span className="text-[#4FD1C5]/60">Innovation & Leadership</span>
            </motion.div>
          </div>

          {/* RIGHT — PREMIUM VISUAL ELEMENT */}
          <div className="lg:col-span-5 relative flex items-center justify-center pt-6 lg:pt-0">
            <motion.div
              className="relative w-full max-w-[480px] aspect-square flex items-center justify-center"
              style={{
                y: deviceY,
                rotateX: deviceRotateX,
                rotateY: mousePos.x * 0.35,
              }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            >
              {/* Premium background glow with parallax */}
              <motion.div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(79, 209, 197, 0.12) 0%, transparent 70%)",
                  filter: "blur(80px)",
                }}
                animate={prefersReducedMotion ? {} : pulseAnimation}
              />

              {/* Central brand visual element */}
              <div className="relative z-10 w-full h-full rounded-2xl border border-[#4FD1C5]/15 bg-[#0D1F3D]/40 backdrop-blur-xl shadow-2xl">
                {/* Inner content */}
                <div className="absolute inset-6 rounded-xl border border-[#4FD1C5]/20 bg-[#0A1628]/60 backdrop-blur-md flex items-center justify-center">
                  <motion.div 
                    className="text-center"
                    animate={prefersReducedMotion ? {} : floatingAnimation}
                  >
                    <div className="text-7xl font-bold text-[#4FD1C5] mb-3 tracking-tight">N</div>
                    <div className="text-xs font-mono text-[#8B96A5] tracking-[0.2em] uppercase">NACOS</div>
                    <div className="text-[10px] font-mono text-[#5E6977] tracking-widest mt-1">NILE CHAPTER</div>
                  </motion.div>
                </div>

                {/* Subtle orbiting elements */}
                {!prefersReducedMotion && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-[#4FD1C5]/8"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                      className="absolute top-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#4FD1C5] shadow-lg shadow-[#4FD1C5]/40"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "50% 220px" }}
                    />
                    <motion.div
                      className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#38B2AC] shadow-lg shadow-[#38B2AC]/40"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "50% 200px" }}
                    />
                  </>
                )}
              </div>

              {/* Floating accent elements */}
              {!prefersReducedMotion && (
                <>
                  <motion.div
                    className="absolute top-8 right-8 w-5 h-5 rounded-full bg-[#4FD1C5]/20"
                    animate={floatingAnimation}
                    transition={{ delay: 0.5, duration: 4 }}
                  />
                  <motion.div
                    className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-[#38B2AC]/20"
                    animate={floatingAnimation}
                    transition={{ delay: 1, duration: 5 }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-4 w-3 h-3 rounded-full bg-[#4FD1C5]/15"
                    animate={pulseAnimation}
                    transition={{ delay: 1.5 }}
                  />
                </>
              )}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="mx-auto mt-12 flex flex-col items-center gap-2 text-center select-none"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
      >
        <motion.span 
          className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#5E6977]"
          animate={prefersReducedMotion ? {} : {
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          SCROLL TO EXPLORE
        </motion.span>
        <motion.div 
          className="h-6 w-px bg-gradient-to-b from-[#4FD1C5] to-transparent"
          animate={prefersReducedMotion ? {} : {
            scaleY: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
