"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const navigation = [
  { label: "Platform", href: "#platform" },
  { label: "Interface", href: "#interface" },
  { label: "Systems", href: "#systems" },
];

const systemModes = [
  {
    name: "Neural engine",
    tag: "64 TOPS",
    metric: "98.4%",
    metricLabel: "inference efficiency",
    heading: "Intelligence that stays in flow.",
    description:
      "Deploy model workloads across a coordinated fabric that balances acceleration, memory, and thermal headroom.",
    path: "M0 186 C54 154 78 205 127 165 S202 86 259 126 S340 89 389 116 S470 58 534 79 S614 46 690 86",
  },
  {
    name: "Memory fabric",
    tag: "1.2 TB/S",
    metric: "0.08ms",
    metricLabel: "synchronization time",
    heading: "Every signal, exactly where it is needed.",
    description:
      "A unified data plane matches active workloads to the context they need without unnecessary handoffs.",
    path: "M0 156 C57 119 95 145 147 102 S243 172 308 117 S392 58 456 100 S548 149 600 85 S652 55 690 62",
  },
  {
    name: "Edge mesh",
    tag: "256 NODES",
    metric: "99.99%",
    metricLabel: "network availability",
    heading: "One adaptive system, everywhere.",
    description:
      "Connect distributed teams through a responsive mesh that routes around friction in real time.",
    path: "M0 182 C50 160 86 94 138 133 S225 207 279 148 S372 152 429 80 S513 113 570 75 S640 141 690 51",
  },
];

const capabilities = [
  ["01", "Adaptive compute", "Workloads continuously tune around capacity, context, and latency—not fixed infrastructure rules."],
  ["02", "Unified telemetry", "See the relationship between signal, hardware, and outcomes in one calm command surface."],
  ["03", "Built to evolve", "A modular architecture expands with your operating model without replacing the foundation beneath it."],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path d="m13.5 2-8 11h6l-1 9 8-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.45" />
      <path d="m15.5 8.5-2.1 4.8-4.9 2.2 2.1-4.8 4.8-2.2Z" stroke="currentColor" strokeWidth="1.45" strokeLinejoin="round" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.45" />
      <circle cx="18" cy="8" r="2" stroke="currentColor" strokeWidth="1.45" />
      <circle cx="11" cy="18" r="2" stroke="currentColor" strokeWidth="1.45" />
      <path d="m7.7 7.1 3 8.1M7.9 6.4l8.1 1.1M16.6 9.6l-4.2 6.7" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function Brand() {
  return (
    <span className="nexus-brand">
      <span className="nexus-brand__mark"><span /></span>
      <span>NEXUS</span>
    </span>
  );
}

export default function NexusExperience() {
  const [activeMode, setActiveMode] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mode = systemModes[activeMode];

  return (
    <main className="nexus-page" id="home">
      <div className="nexus-page__aurora nexus-page__aurora--one" />
      <div className="nexus-page__aurora nexus-page__aurora--two" />
      <div className="nexus-page__grid" />

      <header className="nexus-nav-wrap">
        <nav className="nexus-nav" aria-label="Main navigation">
          <a href="#home" aria-label="Nexus home"><Brand /></a>
          <div className="nexus-nav__links">
            {navigation.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}
          </div>
          <a className="nexus-nav__cta" href="#access">Request access <ArrowIcon /></a>
          <button className="nexus-nav__toggle" type="button" onClick={() => setMobileMenuOpen((isOpen) => !isOpen)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation">
            <span /><span /><span /><span className="sr-only">Toggle navigation</span>
          </button>
        </nav>
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div className="nexus-nav__mobile" id="mobile-navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.2 }}>
              {navigation.map((item) => <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.label}<ArrowIcon /></a>)}
              <a href="#access" onClick={() => setMobileMenuOpen(false)}>Request access <ArrowIcon /></a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className="nexus-hero" aria-labelledby="nexus-title">
        <div className="nexus-shell nexus-hero__layout">
          <motion.div className="nexus-hero__copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <p className="nexus-eyebrow"><span /> NEXUS / INTELLIGENCE LAYER</p>
            <h1 id="nexus-title">Build for the <em>next signal.</em></h1>
            <p className="nexus-hero__lede">NEXUS pairs high-performance compute with a beautiful command layer so ambitious teams can move from possibility to momentum.</p>
            <div className="nexus-actions">
              <a className="nexus-button nexus-button--primary" href="#interface">Explore the platform <ArrowIcon /></a>
              <a className="nexus-button nexus-button--ghost" href="#systems">See how it works</a>
            </div>
            <div className="nexus-hero__proof">
              <div><strong>64 TOPS</strong><span>neural acceleration</span></div>
              <div><strong>0.8ms</strong><span>global dispatch</span></div>
              <div><strong>256</strong><span>active edge nodes</span></div>
            </div>
          </motion.div>

          <motion.div className="nexus-hero__visual" initial={{ opacity: 0, scale: 0.92, x: 26 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}>
            <div className="nexus-orbit nexus-orbit--outer"><i /><i /><i /></div>
            <div className="nexus-orbit nexus-orbit--inner"><i /><i /></div>
            <div className="nexus-hero__beam" />
            <div className="nexus-device">
              <div className="nexus-device__bar"><span><i /> LIVE SYSTEM</span><span>NODE / 01</span></div>
              <div className="nexus-device__screen">
                <Image src="/images/nexus_hero_device.png" alt="NEXUS system interface displayed on a high-performance laptop" fill priority sizes="(max-width: 800px) 92vw, (max-width: 1200px) 52vw, 620px" />
              </div>
              <div className="nexus-device__footer"><span>UNIFIED FABRIC</span><strong>1.2 TB/S</strong></div>
            </div>
            <div className="nexus-float-card nexus-float-card--top"><span className="nexus-icon"><SparkIcon /></span><span><small>NEURAL LOAD</small><strong>98.4%</strong></span></div>
            <div className="nexus-float-card nexus-float-card--bottom"><span className="nexus-icon nexus-icon--violet"><CompassIcon /></span><span><small>NETWORK LATENCY</small><strong>0.8ms</strong></span></div>
          </motion.div>
        </div>
      </section>

      <section className="nexus-marquee" aria-label="Platform capabilities"><div className="nexus-marquee__track"><span>adaptive intelligence</span><b>✦</b><span>unified infrastructure</span><b>✦</b><span>real-time orchestration</span><b>✦</b><span>adaptive intelligence</span><b>✦</b><span>unified infrastructure</span><b>✦</b><span>real-time orchestration</span><b>✦</b></div></section>

      <section className="nexus-section nexus-platform" id="platform" aria-labelledby="platform-title">
        <div className="nexus-shell">
          <motion.div className="nexus-section__heading nexus-section__heading--split" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6 }}>
            <div><p className="nexus-eyebrow"><span /> THE NEXUS ADVANTAGE</p><h2 id="platform-title">Infrastructure that feels <em>effortless.</em></h2></div>
            <p>Designed for the speed of modern product teams, not the friction of conventional systems.</p>
          </motion.div>
          <div className="nexus-capability-grid">
            {capabilities.map(([number, title, description], index) => (
              <motion.article className="nexus-capability" key={number} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
                <span className="nexus-capability__number">{number}</span>
                <span className="nexus-capability__icon">{index === 0 ? <SparkIcon /> : index === 1 ? <CompassIcon /> : <NodeIcon />}</span>
                <h3>{title}</h3><p>{description}</p><span className="nexus-capability__line" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="nexus-section nexus-interface" id="interface" aria-labelledby="interface-title">
        <div className="nexus-shell">
          <motion.div className="nexus-section__heading" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
            <p className="nexus-eyebrow"><span /> COMMAND, CLARIFIED</p>
            <h2 id="interface-title">Your system, in <em>full view.</em></h2>
            <p>A high-signal interface turns complex infrastructure into an intuitive decision surface.</p>
          </motion.div>
          <motion.div className="nexus-console" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
            <div className="nexus-console__topbar">
              <div className="nexus-console__identity"><Brand /><b>v4.2</b></div>
              <span className="nexus-console__online"><i /> system online</span>
            </div>
            <div className="nexus-console__body">
              <aside className="nexus-console__rail" aria-label="System modes">
                {systemModes.map((item, index) => (
                  <button key={item.name} type="button" onClick={() => setActiveMode(index)} className={activeMode === index ? "is-active" : ""} aria-pressed={activeMode === index}>
                    <span>{String(index + 1).padStart(2, "0")}</span><span>{item.name}</span><b>{item.tag}</b>
                  </button>
                ))}
              </aside>
              <div className="nexus-console__main">
                <AnimatePresence mode="wait">
                  <motion.div className="nexus-console__intro" key={mode.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
                    <div><p>LIVE PERFORMANCE</p><h3>{mode.heading}</h3></div>
                    <div className="nexus-console__metric"><strong>{mode.metric}</strong><span>{mode.metricLabel}</span></div>
                  </motion.div>
                </AnimatePresence>
                <div className="nexus-console__chart" aria-label={`${mode.name} performance chart`}>
                  <div className="nexus-console__chart-grid" />
                  <svg viewBox="0 0 690 230" preserveAspectRatio="none" role="img">
                    <defs><linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#77f5ff" stopOpacity="0.32" /><stop offset="100%" stopColor="#77f5ff" stopOpacity="0" /></linearGradient></defs>
                    <motion.path key={mode.path} d={`${mode.path} L690 230 L0 230 Z`} fill="url(#chartGradient)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} />
                    <motion.path key={`${mode.path}-glow`} d={mode.path} fill="none" stroke="url(#chartGradient)" strokeWidth="8" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.65, ease: "easeOut" }} />
                    <motion.path d={mode.path} fill="none" stroke="#8afbff" strokeWidth="2.2" strokeLinecap="round" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.65, ease: "easeOut" }} />
                  </svg>
                  <div className="nexus-console__chart-labels"><span>00:00</span><span>00:20</span><span>00:40</span><span>01:00</span></div>
                </div>
                <div className="nexus-console__bottom-row"><p>{mode.description}</p><div className="nexus-console__nodes"><span><i /> N3 core</span><span><i /> fabric synced</span><span><i /> edge ready</span></div></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="nexus-section nexus-systems" id="systems" aria-labelledby="systems-title">
        <div className="nexus-shell nexus-systems__layout">
          <motion.div className="nexus-systems__visual" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="nexus-systems__field" /><div className="nexus-systems__core"><span>N</span></div>
            <span className="nexus-systems__satellite nexus-systems__satellite--one"><SparkIcon /></span><span className="nexus-systems__satellite nexus-systems__satellite--two"><NodeIcon /></span><span className="nexus-systems__satellite nexus-systems__satellite--three"><CompassIcon /></span>
            <span className="nexus-systems__pulse nexus-systems__pulse--one" /><span className="nexus-systems__pulse nexus-systems__pulse--two" />
          </motion.div>
          <motion.div className="nexus-systems__copy" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}>
            <p className="nexus-eyebrow"><span /> SYSTEMS IN CONVERSATION</p>
            <h2 id="systems-title">Built as one intelligent <em>whole.</em></h2>
            <p>Every layer of NEXUS exchanges context. That creates more room for experimentation, and less time spent coordinating the machinery beneath it.</p>
            <dl className="nexus-system-list"><div><dt>01 / AI acceleration</dt><dd>64 TOPS neural compute</dd></div><div><dt>02 / data fabric</dt><dd>1.2 TB/s unified memory</dd></div><div><dt>03 / global mesh</dt><dd>256 responsive edge nodes</dd></div></dl>
          </motion.div>
        </div>
      </section>

      <section className="nexus-access" id="access" aria-labelledby="access-title"><div className="nexus-shell"><motion.div className="nexus-access__card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }}><div className="nexus-access__noise" /><p className="nexus-eyebrow"><span /> NEXUS / ACCESS</p><h2 id="access-title">Ready for what <em>moves next.</em></h2><p>Bring your ambitious compute work to a platform designed for clarity, speed, and scale.</p><a className="nexus-button nexus-button--light" href="mailto:access@nexus.systems">Start a conversation <ArrowIcon /></a><span className="nexus-access__tag">SYSTEMS CURRENTLY ONLINE</span></motion.div></div></section>

      <footer className="nexus-footer"><div className="nexus-shell nexus-footer__inner"><a href="#home"><Brand /></a><p>Intelligent infrastructure for the work ahead.</p><span>© 2026 NEXUS SYSTEMS</span></div></footer>
    </main>
  );
}
