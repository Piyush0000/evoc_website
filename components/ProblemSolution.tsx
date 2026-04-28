'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const problemItems = [
  "5 tools for ads",
  "Manual logistics",
  "No automation",
  "Scattered platform data"
];

const solutionItems = [
  "Unified ads engine",
  "Built-in logistics system",
  "AI automation native",
  "Single source of truth"
];

export default function ProblemSolution() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-12 bg-[#000000] overflow-hidden flex flex-col items-center"
      id="problem-solution"
    >
      {/* LAYER 1: Viewport-Level Edge Glows (Starting outside the screen for maximum realism) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: `
            radial-gradient(1000px at -20% 50%, rgba(37, 99, 235, 0.5), transparent 65%),
            radial-gradient(1000px at 120% 50%, rgba(37, 99, 235, 0.5), transparent 65%),
            linear-gradient(to bottom, transparent 70%, #000000 100%)
          `,
          filter: 'blur(100px)'
        }}
      />

      {/* LAYER 2: Cinematic Vignette - Darkens edges to create the 'Glow from within' feel */}
      <div 
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)'
        }}
      />

      <div className="max-w-6xl w-full px-6 flex flex-col items-center z-10">
        <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-5xl">
          
          {/* Problem Card - #00024F */}
          <motion.div 
            style={{ y: cardsY }}
            className="relative z-30 lg:translate-x-12"
          >
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl mb-10 italic font-bold"
              style={{ fontFamily: 'var(--font-instrument), serif' }}
            >
              Problem
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="w-[320px] md:w-[380px] bg-[#00024F] rounded-[30px] p-12 flex flex-col gap-12 shadow-2xl border border-white/5"
            >
              {problemItems.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (i * 0.15) }}
                    className="text-white/80 text-center text-xl font-medium"
                  >
                    {item}
                  </motion.p>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.15) }}
                    className="absolute -bottom-6 w-full h-[1.5px] bg-gradient-to-r from-[#00075E] via-[#FFFFFF] to-[#000559] shadow-[0_0_15px_rgba(255,255,255,0.4)] origin-center"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Solution Card - #00024F -> #001FAE */}
          <motion.div 
            style={{ y: cardsY }}
            className="relative z-20 lg:-ml-12 mt-16 lg:mt-20 w-full lg:w-auto"
          >
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-4xl mb-10 italic font-bold lg:ml-24"
              style={{ fontFamily: 'var(--font-instrument), serif' }}
            >
              Solution
            </motion.h3>
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[540px] bg-gradient-to-br from-[#00024F] to-[#001FAE] rounded-[49px] p-14 lg:pl-28 flex flex-col gap-12 shadow-[0_20px_100px_rgba(0,31,174,0.4)] border border-white/10 relative overflow-hidden"
            >
              {/* Premium Shimmer */}
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
              />
              
              {solutionItems.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center">
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.8 + (i * 0.15) }}
                    className="text-white text-center text-2xl font-bold tracking-tight"
                  >
                    {item}
                  </motion.p>
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 + (i * 0.15) }}
                    className="absolute -bottom-6 w-full h-[1.5px] bg-gradient-to-r from-[#00075E] via-[#FFFFFF] to-[#000559] shadow-[0_0_20px_rgba(255,255,255,0.6)] origin-center"
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Tagline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 text-center"
        >
          <p className="text-white text-3xl md:text-4xl font-bold font-sans tracking-tight leading-tight">
            &quot;
            <span 
              className="italic font-bold mr-3 text-blue-500"
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
