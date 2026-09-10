"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
}

export default function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Controlled particle count (low count for high efficiency)
    const count = Math.min(Math.floor(width / 45), 35);
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.6,
      speedY: -(Math.random() * 0.25 + 0.08),
      speedX: (Math.random() - 0.5) * 0.12,
      opacity: Math.random() * 0.25 + 0.05,
    }));

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let scanY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Faint horizontal scanning guide line
      scanY = (scanY + 0.3) % height;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.strokeStyle = "rgba(0, 229, 255, 0.015)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Render low-contrast particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const effectiveY = (p.y + scrollY * 0.03) % height;

        ctx.beginPath();
        ctx.arc(p.x, effectiveY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity * 0.6})`;
        ctx.fill();

        // Connect nearby nodes with hair-thin lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = effectiveY - ((p2.y + scrollY * 0.03) % height);
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            ctx.beginPath();
            ctx.moveTo(p.x, effectiveY);
            ctx.lineTo(p2.x, (p2.y + scrollY * 0.03) % height);
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 85) * 0.04})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Primary Radial Ambient Spotlight */}
      <div
        className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 900,
          height: 600,
          background:
            "radial-gradient(ellipse, rgba(0, 229, 255, 0.045) 0%, rgba(8, 12, 17, 0) 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Secondary Bottom Ambient Glow */}
      <div
        className="absolute bottom-0 right-1/4 translate-y-1/3 rounded-full"
        style={{
          width: 800,
          height: 500,
          background:
            "radial-gradient(ellipse, rgba(0, 229, 255, 0.025) 0%, rgba(5, 7, 10, 0) 70%)",
          filter: "blur(120px)",
        }}
      />

      {/* Low-contrast technical coordinates overlay */}
      <div className="absolute top-6 left-6 text-[9px] font-mono tracking-[0.25em] text-[#5E6977]/30 select-none hidden lg:block">
        SYS.LOC // 42.3601° N, 71.0589° W
      </div>
      <div className="absolute top-6 right-6 text-[9px] font-mono tracking-[0.25em] text-[#5E6977]/30 select-none hidden lg:block">
        GRID // 0x4F8A // READY
      </div>

      {/* Particle & line canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full opacity-70"
      />
    </div>
  );
}
