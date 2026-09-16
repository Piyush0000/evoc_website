'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function ProblemSolution() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [20, -30]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-16 md:py-24 bg-[#000000] overflow-hidden flex flex-col items-center"
      id="problem-solution"
    >
      {/* LAYER 1: Viewport-Level Edge Glows */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(1000px at -20% 50%, rgba(37, 99, 235, 0.4), transparent 65%),
            radial-gradient(1000px at 120% 50%, rgba(37, 99, 235, 0.4), transparent 65%),
            linear-gradient(to bottom, transparent 70%, #000000 100%)
          `,
          filter: 'blur(100px)'
        }}
      />

      {/* LAYER 2: Cinematic Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)'
        }}
      />

      <div className="max-w-[1240px] w-full px-4 sm:px-6 flex flex-col items-center z-20">
        
        {/* Symmetrical Dual Columns: Problem vs Solution */}
        <motion.div 
          style={{ y: cardsY }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 w-full"
        >
          
          {/* PROBLEM COLUMN */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-5 pl-2"
            >
              <h3 
                className="text-white italic font-bold tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-instrument), serif',
                  fontSize: 'clamp(34px, 4vw, 48px)'
                }}
              >
                Problem
              </h3>
            </motion.div>

            {/* Problem Card (Before) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -6,
                scale: 1.012,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.99 }}
              className="relative group overflow-hidden rounded-[24px] md:rounded-[32px] bg-[#07090e] border border-white/10 p-4 sm:p-6 flex flex-col justify-between shadow-2xl transition-colors duration-500 hover:border-red-500/30"
            >
              {/* Subtle Red/Amber Core Fracture Glow on Hover */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.12)_0%,transparent_70%)] z-0"
              />

              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[18px] md:rounded-[24px] overflow-hidden bg-black/40 z-10 border border-white/5">
                <Image 
                  src="/images/problem-solution/problem-infographic.webp"
                  alt="Fragmented Problem Diagram"
                  fill
                  className="object-contain p-2 sm:p-3 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Footer: Tag */}
              <div className="relative z-10 flex items-center justify-end mt-4 pt-2 border-t border-white/5">
                <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-red-400/70 italic flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500/60" />
                  Before
                </span>
              </div>
            </motion.div>
          </div>

          {/* SOLUTION COLUMN */}
          <div className="flex flex-col">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-3 mb-5 pl-2"
            >
              <h3 
                className="text-white italic font-bold tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-instrument), serif',
                  fontSize: 'clamp(34px, 4vw, 48px)'
                }}
              >
                Solution
              </h3>
            </motion.div>

            {/* Solution Card (After) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -6,
                scale: 1.012,
                transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.99 }}
              className="relative group overflow-hidden rounded-[24px] md:rounded-[32px] bg-gradient-to-b from-[#060c1c] to-[#040814] border border-[#183EEB]/30 p-4 sm:p-6 flex flex-col justify-between shadow-[0_10px_50px_rgba(24,62,235,0.15)] transition-all duration-500 hover:border-[#183EEB]/70 hover:shadow-[0_15px_60px_rgba(24,62,235,0.3)]"
            >
              {/* Pulsing Cyan/Blue Energy Glow */}
              <motion.div
                animate={{
                  opacity: [0.35, 0.65, 0.35],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(24,62,235,0.22)_0%,transparent_75%)] z-0"
              />

              {/* Shimmer Light Sweep Effect on Hover */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent skew-x-12 pointer-events-none"
              />

              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-[18px] md:rounded-[24px] overflow-hidden bg-[#02050f]/80 z-10 border border-blue-500/20">
                <Image 
                  src="/images/problem-solution/solution-infographic.webp"
                  alt="Unified Solution Platform Diagram"
                  fill
                  className="object-contain p-2 sm:p-3 transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              {/* Bottom Card Footer: Tag with Sparkle Micro-interaction */}
              <div className="relative z-10 flex items-center justify-end mt-4 pt-2 border-t border-blue-500/10">
                <span className="text-xs md:text-sm font-medium tracking-wider uppercase text-blue-400 italic flex items-center gap-1.5">
                  <motion.span
                    animate={{ rotate: [0, 180, 360], scale: [1, 1.25, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block text-blue-400"
                  >
                    ✦
                  </motion.span>
                  After
                </span>
              </div>
            </motion.div>
          </div>

        </motion.div>

        {/* Bottom Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-14 md:mt-18 text-center px-4"
        >
          <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold font-sans tracking-tight leading-tight">
            &quot;
            <span 
              className="italic font-bold mr-2 sm:mr-3 text-blue-500"
              style={{ fontFamily: 'var(--font-instrument), serif' }}
            >
              Evoclabs
            </span>
            replaces your entire stack with one system.&quot;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
