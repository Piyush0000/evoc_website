'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative w-full bg-black flex flex-col items-center overflow-hidden"
      style={{ height: '80vh', minHeight: '700px' }}
    >
      {/* ─── Clean High-Fidelity Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg-clean.png" 
          alt="" 
          className="w-full h-full object-cover opacity-100"
          style={{ objectPosition: 'center top' }}
        />
        {/* Subtle vignette to maintain depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      </div>

      {/* ✅ BACKGROUND ELEMENT (FULL WIDTH) — PRESERVED */}
      <img
        src="/logo.png"
        alt=""
        className="
          absolute pointer-events-none z-0
          top-0 left-0
          -translate-x-[35%] -translate-y-[35%]
          w-[240px] h-[300px]
          md:w-[420px] md:h-[540px]
          opacity-35 blur-[0.5px] grayscale
          rotate-[215deg]
        "
        style={{
          filter: 'grayscale(100%) brightness(0.4) contrast(1.1) blur(0.5px)',
          transformOrigin: 'center center',
        }}
      />

      {/* ─── Hero Content ─── */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-[120px] md:pt-[180px] pb-[40px]">

        {/* Headline */}
        <motion.h1
          className="font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]"
          style={{ fontSize: 'clamp(32px, 7vw, 46px)', maxWidth: '960px' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Launch, Run &amp; Scale Your{' '}
          <em className="font-serif italic text-white/90">E-commerce</em>
          <br />
          From One Dashboard.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="text-white/55 font-medium leading-relaxed mt-8 mb-12 md:mt-20 md:mb-20"
          style={{ fontSize: 'clamp(14px, 1.45vw, 19px)', maxWidth: '540px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Store, Ads, Logistics,
          <br />
          AI &amp; Automation — Unified.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="group flex items-center gap-3.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.15] hover:border-blue-500/50 px-8 py-3 rounded-[14px] text-white text-[15px] transition-all hover:bg-white/[0.06] shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_35px_rgba(37,99,235,0.45)]">
            <span className="font-medium tracking-tight">Book Demo</span>
            <span className="text-white/60 group-hover:translate-x-0.5 transition-transform">→</span>
            <em className="font-serif italic text-white/90">Demo</em>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
