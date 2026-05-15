'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ImpactCard = ({ title, subtitle, className = "", align = "left", delay = 0 }: { title: string, subtitle: string, className?: string, align?: "left" | "center", delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ 
      y: -8,
      scale: 1.02,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }}
    className={`relative group overflow-hidden rounded-[32px] bg-[#0b0c10] border border-white/5 p-6 md:p-8 flex flex-col ${align === "center" ? "items-center justify-center text-center" : "justify-end"} ${className} cursor-default`}
  >
    {/* Floating Animation Loop */}
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay * 2
      }}
      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    >
       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#183EEB]/10 to-transparent" />
    </motion.div>

    {/* Refined Bottom Glow Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-[80%] bg-gradient-to-t from-[#183EEB]/15 via-transparent to-transparent pointer-events-none group-hover:from-[#183EEB]/25 transition-all duration-700" />
    
    <div className={`relative z-10 ${align === "center" ? "flex flex-col items-center" : ""}`}>
      <motion.h3 
        whileHover={{ scale: 1.1 }}
        className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter"
      >
        {title}
      </motion.h3>
      <p className={`text-sm md:text-base text-white/50 font-medium leading-tight ${align === "left" ? "max-w-[160px]" : ""}`}>
        {subtitle}
      </p>
    </div>
  </motion.div>
);

import SavingsCalculator from './SavingsCalculator';

export default function ImpactSection() {
  return (
    <section id="impact" className="bg-black py-16 px-4 md:px-6 relative z-30">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="italic text-white mb-4"
            style={{ 
              fontFamily: 'var(--font-instrument), serif', 
              fontSize: 'clamp(40px, 5vw, 64px)' 
            }}
          >
            Impact We Create
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#9CA3AF] text-lg max-w-2xl mx-auto"
          >
            See how Evoc Labs can help you save more and reduce RTO.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full rounded-[24px] overflow-hidden border border-[#1E293B] shadow-2xl"
        >
          {/* We reuse the SavingsCalculator component here, 
              it already has a perfect dark blue background and layout. */}
          <div className="bg-[#030712] w-full h-full">
            <SavingsCalculator hideHeader={true} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
