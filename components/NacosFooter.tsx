"use client";

const footerLinks = {
  About: ["About NACOS", "Our Mission", "Chapter History", "Contact"],
  Programs: ["Workshops", "Events", "Competitions", "Resources"],
  Community: ["Members", "Executives", "Partners", "Alumni"],
};

const hrefMap: Record<string, string> = {
  "About NACOS": "#about",
  "Our Mission": "#about",
  "Chapter History": "#about",
  "Contact": "#join",
  "Workshops": "#events",
  "Events": "#events",
  "Competitions": "#events",
  "Resources": "#events",
  "Members": "#executives",
  "Executives": "#executives",
  "Partners": "#programs",
  "Alumni": "#executives",
};

export default function NacosFooter() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-[#4FD1C5]/10 bg-[#05070A] px-6 pb-16 pt-24 lg:px-8">
      {/* Premium Background Soft Ambient Light */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 rounded-full"
        style={{
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse, rgba(79, 209, 197, 0.05) 0%, transparent 70%)",
            filter: "blur(100px)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">

          {/* Premium Brand & Chapter Info */}
          <div>
            <a href="#home" className="inline-flex items-center gap-4">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#4FD1C5]/20 bg-[#0D1F3D] transition-all hover:border-[#4FD1C5]/40 hover:shadow-lg hover:shadow-[#4FD1C5]/10">
                <span className="text-xl font-bold text-[#4FD1C5]">N</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-widest text-[#F5F7FA] font-mono">
                  NACOS
                </span>
                <span className="text-[10px] font-medium text-[#4FD1C5] tracking-wide">
                  NILE CHAPTER
                </span>
              </div>
            </a>

            <p className="mt-6 max-w-xs text-xs font-mono leading-relaxed text-[#8B96A5]">
              Learn • Build • Grow
            </p>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#8B96A5]">
              A student technology community dedicated to empowering students with practical skills, real-world experience, and meaningful connections.
            </p>

            {/* Chapter Address */}
            <div className="mt-8 pt-6 border-t border-[#4FD1C5]/10">
              <h4 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#4FD1C5] mb-3">
                Location
              </h4>
              <p className="text-sm text-[#8B96A5] leading-relaxed">
                Nile University of Nigeria<br />
                Abuja, FCT
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#4FD1C5]/20 bg-[rgba(79,209,197,0.06)] px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4FD1C5] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4FD1C5]" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#4FD1C5]">
                Community Active
              </span>
            </div>

            <p className="mt-6 text-xs text-[#5E6977]">
              Website crafted by the NACOS Nile creative and technical team.
            </p>
          </div>

          {/* Premium Categorized Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#4FD1C5] mb-6">
                {category}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={hrefMap[link] ?? "#"}
                      className="group inline-flex items-center gap-3 text-xs font-mono text-[#8B96A5] transition-colors hover:text-[#F5F7FA]"
                    >
                      <span className="h-px w-0 bg-[#4FD1C5] transition-all duration-300 group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Premium Bottom Metadata Bar */}
        <div className="mt-20 flex flex-col gap-6 pt-10 text-[10px] font-mono text-[#5E6977] sm:flex-row sm:items-center sm:justify-between border-t border-[#4FD1C5]/10">
          <p className="text-[#8B96A5]">© 2026 NACOS Nile Chapter. All rights reserved.</p>

          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Code of Conduct"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors hover:text-[#4FD1C5]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}