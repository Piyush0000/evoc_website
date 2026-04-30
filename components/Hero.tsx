'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';

export default function Hero() {
  return (
    <section
      className="relative w-full bg-black flex flex-col items-center overflow-hidden h-auto pb-20"
    >
      {/* ─── Clean High-Fidelity Background Image ─── */}
      <div className="absolute inset-0 z-0">
        <img 
          src={getPath('/hero-bg-clean.jpg')} 
          alt="" 
          className="w-full h-[85vh] object-cover opacity-100"
          style={{ objectPosition: 'center top' }}
          fetchPriority="high"
          loading="eager"
        />
        {/* Subtle vignette to maintain depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
      </div>

      {/* ─── Animated Shimmer Arc (Atmospheric horizon) ─── */}
      {/* ... (SVG content kept as is) */}
      <div className="absolute inset-0 z-1 pointer-events-none flex items-center justify-center">
         <svg width="1200" height="400" viewBox="0 0 1200 400" fill="none" className="opacity-40 translate-y-[200px] blur-[1px]">
            <motion.path
               d="M0,350 Q600,100 1200,350"
               stroke="url(#arcGradient)"
               strokeWidth="2"
               strokeLinecap="round"
               initial={{ pathLength: 0, opacity: 0 }}
               animate={{ pathLength: 1, opacity: [0.2, 0.5, 0.2] }}
               transition={{ 
                  pathLength: { duration: 3, ease: "easeInOut" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
               }}
            />
            <defs>
               <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
                  <motion.stop 
                    offset="0%" 
                    stopColor="rgba(59, 130, 246, 0.8)" 
                    animate={{ offset: ["-20%", "120%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
               </linearGradient>
            </defs>
         </svg>
      </div>

      {/* ... (Logo flourish kept as is) */}
      <img
        src={getPath('/logo.png')}
        alt=""
        loading="lazy"
        decoding="async"
        className="
          absolute pointer-events-none z-0
          top-0 left-0
          -translate-x-[35%] -translate-y-[35%]
          w-[240px] h-[300px]
          md:w-[420px] md:h-[540px]
          opacity-25 grayscale
          rotate-[215deg]
        "
        style={{
          filter: 'grayscale(100%) brightness(0.4) contrast(1.1) blur(0.5px)',
          transformOrigin: 'center center',
        }}
      />

      {/* ─── Hero Content ─── */}
      <div className="relative z-30 w-full flex flex-col items-center text-center px-6 pt-[100px] md:pt-[200px]">

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
          className="text-white/55 font-medium leading-relaxed mt-8 mb-10 md:mt-16 md:mb-16"
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
          className="flex flex-col items-center gap-12 relative z-50 mb-12 md:mb-0"
        >
          <Link 
            href="/demo"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
            }}
          >
            <div className="group flex items-center gap-3.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.15] hover:border-blue-500/50 px-8 py-3 rounded-[14px] text-white text-[15px] transition-all hover:bg-white/[0.06] shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_35px_rgba(37,99,235,0.45)] cursor-pointer">
              <span className="font-medium tracking-tight">Book a Free Demo</span>
              <span className="text-white/60 group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
