export default function NexusCore() {
  return (
    <div className="relative mx-auto h-105 w-full max-w-130">
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.07] blur-[100px]" />

      {/* Outer rings */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />

      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12" />

      {/* Core */}
      <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/4 shadow-[0_0_100px_rgba(255,255,255,0.12)] backdrop-blur-xl">
        <div className="h-12 w-12 rounded-full bg-white shadow-[0_0_50px_rgba(255,255,255,0.6)]" />
      </div>

      {/* Orbiting nodes */}
      <div className="absolute left-[12%] top-[35%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />

      <div className="absolute right-[15%] top-[25%] h-1.5 w-1.5 rounded-full bg-white/70" />

      <div className="absolute bottom-[22%] left-[24%] h-1.5 w-1.5 rounded-full bg-white/60" />

      <div className="absolute bottom-[18%] right-[25%] h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />

      {/* Technical labels */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.3em] text-white/25">
        SYSTEM
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[9px] uppercase tracking-[0.3em] text-white/25">
        ACTIVE
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] uppercase tracking-[0.3em] text-white/20">
        NEXUS CORE / 01
      </div>
    </div>
  );
}