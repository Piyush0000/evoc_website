'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Counter = ({ 
  value, 
  duration = 2000, 
  delay = 300, 
  prefix = '', 
  suffix = '',
  format = false
}: { 
  value: number; 
  duration?: number; 
  delay?: number;
  prefix?: string;
  suffix?: string;
  format?: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      let rafId: number;
      const startAnimation = (timestamp: number) => {
        if (!startTimeRef.current) startTimeRef.current = timestamp;
        const elapsed = timestamp - startTimeRef.current;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);
        const current = easedProgress * value;
        setDisplayValue(current);
        if (progress < 1) rafId = requestAnimationFrame(startAnimation);
      };
      const timer = setTimeout(() => {
        rafId = requestAnimationFrame(startAnimation);
      }, delay);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(rafId);
      };
    }
  }, [inView, value, duration, delay]);

  return (
    <span ref={ref}>
      {prefix}{format ? Math.floor(displayValue).toLocaleString() : Math.floor(displayValue)}{suffix}
    </span>
  );
};

export default function OrdersStatSection() {
  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center">
      
      {/* ─── BACKGROUND GLOWS ─── */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(15, 30, 70, 0.4) 0%, transparent 60%),
            radial-gradient(ellipse 100% 60% at 50% 65%, rgba(20, 80, 180, 0.25) 0%, transparent 50%)
          `
        }}
      />

      {/* ─── THE LUMINOUS DOME (SVG) ─── */}
      {/* Positioned higher up: bottom at 0, height 70vh. Rim top at ~40-45% of viewport. */}
      <div className="absolute bottom-0 left-0 w-full h-[70vh] z-[2] pointer-events-none">
        <svg viewBox="0 0 1920 800" preserveAspectRatio="none" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="domeFill" cx="50%" cy="100%" r="80%">
              <stop offset="0%" stopColor="#0a3a8a" stopOpacity="0.9"/>
              <stop offset="60%" stopColor="#001a4d" stopOpacity="0.7"/>
              <stop offset="100%" stopColor="#000814" stopOpacity="0"/>
            </radialGradient>

            <linearGradient id="rimGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"  stopColor="#1e90ff" stopOpacity="0.4"/>
              <stop offset="50%" stopColor="#87ceeb" stopOpacity="1"/>
              <stop offset="100%" stopColor="#1e90ff" stopOpacity="0.4"/>
            </linearGradient>

            <filter id="bigGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="35"/>
            </filter>
            <filter id="midGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14"/>
            </filter>
            <filter id="smallGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur stdDeviation="3"/>
            </filter>
          </defs>

          {/* 
              Geometry for Rim at y=350 (43% of SVG height). 
              If SVG is 70vh, rim is at 0.43 * 70 = 30vh from bottom of SVG.
              30vh from bottom = 70vh from top? No.
              Container is bottom: 0, height: 70vh.
              Container top is at 30vh from top of screen.
              Rim is at 43.75% of container height from its top.
              0.4375 * 70 = 30.6vh.
              Total top = 30vh (container start) + 30.6vh = 60.6vh. (Still low).

              Let's push cy up. cy=900, ry=700 -> Top at 200.
              200/800 = 25%.
              30vh + (0.25 * 70vh) = 30 + 17.5 = 47.5vh. (Perfect!)
          */}

          <ellipse cx="960" cy="900" rx="1500" ry="700" fill="url(#domeFill)"/>

          <motion.ellipse 
            animate={{ opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            cx="960" cy="900" rx="1500" ry="700"
            fill="none" stroke="#2da8ff" strokeWidth="60"
            filter="url(#bigGlow)"
          />

          <motion.ellipse 
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            cx="960" cy="900" rx="1500" ry="700"
            fill="none" stroke="#5cb8ff" strokeWidth="20"
            filter="url(#midGlow)"
          />

          <ellipse cx="960" cy="900" rx="1500" ry="700"
            fill="none" stroke="#aad4ff" strokeWidth="6"
            opacity="0.7" filter="url(#smallGlow)"/>

          <ellipse cx="960" cy="900" rx="1500" ry="700"
            fill="none" stroke="url(#rimGrad)" strokeWidth="1.5"
            opacity="1"/>
        </svg>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-10" />
      </div>

      {/* ─── CENTER STACK ─── */}
      {/* Positioned to sit on the rim at ~47.5% height */}
      <div 
        className="absolute bottom-[52.5%] left-1/2 -translate-x-1/2 z-[10] flex flex-col items-center gap-2 text-center"
      >
        <div 
          className="italic text-[#e8eef5] tracking-tight leading-none mb-16"
          style={{ 
            fontFamily: 'var(--font-instrument), serif', 
            fontSize: 'clamp(32px, 4vw, 56px)'
          }}
        >
          Orders
        </div>
        <div 
          className="leading-[0.85] tracking-tighter"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(100px, 12vw, 160px)',
            fontWeight: 200,
            color: '#ffffff',
            textShadow: `
              0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 40px rgba(150, 200, 255, 0.7),
              0 0 60px rgba(120, 180, 255, 0.5),
              0 0 100px rgba(80, 140, 255, 0.4),
              0 0 160px rgba(60, 120, 255, 0.3)
            `,
            letterSpacing: '-0.04em'
          }}
        >
          <Counter value={1284} duration={2500} format={true} />
        </div>
      </div>

      {/* ─── STATS & BADGE (SIT INSIDE THE DOME) ─── */}
      <div 
        className="absolute bottom-[20%] left-1/2 -translate-x-1/2 z-[20] flex flex-col items-center gap-10 w-full max-w-5xl px-6"
      >
        {/* Growth Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="bg-[#050A30]/40 backdrop-blur-xl border border-white/10 px-5 py-2 rounded-full text-[12px] font-medium text-white/70 flex items-center gap-2 shadow-2xl">
            <span className="text-green-400">↗</span> 
            <span>+24.5% from last month</span>
          </div>
        </motion.div>

        {/* Stat Cards Container */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full max-w-4xl justify-center">
          {/* Revenue Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#050A30]/30 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 md:p-6 flex items-center gap-4 md:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-blue-500/30 transition-all duration-500"
          >
             <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
               </svg>
             </div>
             <div className="text-left">
               <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-0.5">REVENUE</p>
               <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-1">
                 <Counter value={84} duration={2000} prefix="₹" suffix="k" />
               </h3>
               <p className="text-[11px] text-green-400 flex items-center gap-1 font-semibold">
                 <span className="text-sm">↑</span> +16.8% <span className="text-white/20 font-medium ml-1">last month</span>
               </p>
             </div>
          </motion.div>

          {/* AI Tasks Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#050A30]/30 backdrop-blur-2xl border border-white/10 rounded-[24px] p-5 md:p-6 flex items-center gap-4 md:gap-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-blue-500/30 transition-all duration-500"
          >
             <div className="w-11 h-11 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-600/20 transition-all shadow-[0_0_20px_rgba(37,99,235,0.1)]">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
               </svg>
             </div>
             <div className="text-left">
               <p className="text-[9px] font-bold text-white/30 uppercase tracking-[0.2em] mb-0.5">AI TASKS</p>
               <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-1">
                 <Counter value={12} duration={1500} />
               </h3>
               <p className="text-[11px] text-green-400 flex items-center gap-1 font-semibold">
                 <span className="text-sm">↑</span> +33.3% <span className="text-white/20 font-medium ml-1">last month</span>
               </p>
             </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
