'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const setupSteps = [
  {
    id: 1,
    label: 'UPLOAD THEME',
    desc: 'Build your store, customize your brand, and connect your domain.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
  },
  {
    id: 2,
    label: 'ADD INTEGRATIONS',
    desc: 'AI calling, payment gateways, and checkout automation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="15" y1="3" x2="15" y2="21" />
        <line x1="3" y1="9" x2="21" y2="9" />
      </svg>
    ),
  },
  {
    id: 3,
    label: 'CONNECT AD ACC.',
    desc: 'Link Meta & Google Ads accounts in one click.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: 4,
    label: 'LOGISTICS',
    desc: 'Receive orders and ship from the same platform.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      </svg>
    ),
  },
  {
    id: 5,
    label: 'GET UNIFIED DATA',
    desc: 'All your data, clean and in one place.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
];

function WordByWord({ text, className }: { text: string; className?: string }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.5"]
  });

  const words = text.split(" ");
  
  return (
    <h2 ref={container} className={className} style={{ fontSize: 'clamp(32px, 7vw, 46px)' }}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h2>
  );
}

interface WordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);
  const y = useTransform(progress, range, [10, 0]);

  return (
    <span className="relative inline-block mr-3 last:mr-0 overflow-visible">
       <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}

function WaveLine() {
  return (
    <div className="absolute top-[48px] left-[10%] right-[10%] h-[80px] pointer-events-none hidden lg:block">
      <svg width="100%" height="100%" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none">
         <motion.path
            d="M0,40 Q125,10 250,40 T500,40 T750,40 T1000,40"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            strokeLinecap="round"
         />
         <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
               <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
               <motion.stop 
                  offset="0%" 
                  stopColor="rgba(59, 130, 246, 0.4)" 
                  animate={{ offset: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               />
               <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
            </linearGradient>
         </defs>
      </svg>
    </div>
  );
}

export default function SimplifiedSetup() {
  return (
    <section className="w-full bg-[#050505] pt-8 pb-6 px-6 overflow-hidden relative">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header with Landing Page Typography */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
            <span className="text-white/20 uppercase tracking-[0.4em] text-[10px] font-bold">Five steps. Zero friction.</span>
          </motion.div>

          <WordByWord 
            text="Simplified Setup System"
            className="font-bold text-white leading-[1.1] tracking-tight max-w-3xl"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/30 text-sm mt-4 font-medium"
          >
            From domain to dashboard in record time.
          </motion.p>
        </div>

        {/* The Wave Pipeline */}
        <div className="relative mt-12">
          <WaveLine />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-0 relative z-10">
            {setupSteps.map((step, i) => (
               <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
               >
                  {/* Compact Squircle Icon Wrapper */}
                  <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                     <div className="absolute inset-0 bg-blue-500/5 rounded-[28px] transition-all duration-500" />
                     <div className="relative text-blue-500/80 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-500 scale-90">
                        {step.icon}
                     </div>
                  </div>

                  {/* Text content */}
                  <div className="space-y-2">
                     <h3 className="text-white text-[13px] font-bold tracking-[0.15em] uppercase group-hover:text-blue-400 transition-colors">
                        {step.label}
                     </h3>
                     <p className="text-white/30 text-[11px] font-medium leading-tight max-w-[150px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {step.desc}
                     </p>
                  </div>
               </motion.div>
            ))}
          </div>
        </div>

        {/* Scaled-down animated text path - Significantly smaller and tighter */}
        <div className="mt-8 mb-0 flex justify-center overflow-hidden opacity-[0.1]">
           <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="whitespace-nowrap text-[14px] md:text-[1.1vw] font-serif italic text-white/50 tracking-[0.15em] font-light"
           >
              Imagination is your cap ✦ Create indefinite possibilities ✦ Scaling simplified ✦ Automation native ✦ Imagination is your cap ✦ Create indefinite possibilities ✦ Scaling simplified ✦ Automation native ✦
           </motion.div>
        </div>
      </div>
    </section>
  );
}
