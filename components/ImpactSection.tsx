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

export default function ImpactSection() {
  return (
    <section className="bg-black py-16 px-6 -mt-32 relative z-30">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center italic text-white mb-12"
          style={{ 
            fontFamily: 'var(--font-instrument), serif', 
            fontSize: 'clamp(32px, 4vw, 48px)' 
          }}
        >
          Impact We Create
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[140px] md:auto-rows-[160px]">
          {/* Active Brands - Large Left */}
          <ImpactCard 
            title="150+" 
            subtitle="Active brands"
            className="md:col-span-5 md:row-span-2"
            align="left"
            delay={0.1}
          />

          {/* Saved Amount - Wide Top Right */}
          <ImpactCard 
            title="₹1,00,000" 
            subtitle="Saved amount on manual brand launch"
            className="md:col-span-7 md:row-span-1"
            align="center"
            delay={0.2}
          />

          {/* Annual Selling - Bottom Mid */}
          <ImpactCard 
            title="10Cr" 
            subtitle="Annual selling among sellers"
            className="md:col-span-4 md:row-span-1"
            align="center"
            delay={0.3}
          />

          {/* Delivery Success - Bottom Right */}
          <ImpactCard 
            title="88%" 
            subtitle="Delivery success"
            className="md:col-span-3 md:row-span-1"
            align="center"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
