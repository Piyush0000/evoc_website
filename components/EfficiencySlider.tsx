'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from 'framer-motion';

interface BubbleData {
  id: number;
  title: string;
  desc: string;
  x: number;
  y: number;
  rotate: number;
}

const manualSteps: BubbleData[] = [
  { id: 1, title: 'Create item', desc: 'Name, SKU, category', x: 100, y: 100, rotate: -4 },
  { id: 2, title: 'Set pricing', desc: 'Cost, margin, tax', x: 450, y: 150, rotate: 6 },
  { id: 3, title: 'Assign supplier', desc: 'Link vendor details', x: 750, y: 220, rotate: -3 },
  { id: 4, title: 'Input stock count', desc: 'Quantity per location', x: 220, y: 350, rotate: 5 },
  { id: 5, title: 'Configure alerts', desc: 'Low stock thresholds', x: 600, y: 480, rotate: -6 },
  { id: 6, title: 'Repeat for each item', desc: 'Hundreds of SKUs...', x: 100, y: 520, rotate: 4 },
];

const evocPoints = [
  { title: 'Unified ads engine', desc: 'Manage all channels from one dashboard.', icon: '🎯' },
  { title: 'Built-in logistics system', desc: 'Automated fulfillment & tracking.', icon: '📦' },
  { title: 'AI automation native', desc: 'Self-optimizing workflows & ads.', icon: '🤖' },
  { title: 'Single source of truth', desc: 'Real-time data across your empire.', icon: '💎' },
];

function ChaosConnections() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 600" preserveAspectRatio="none">
      <motion.path d="M220,130 Q330,100 450,180" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
      <motion.path d="M570,210 Q660,230 750,270" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
      <motion.path d="M750,330 Q480,380 340,380" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
      <motion.path d="M340,430 Q480,520 600,520" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
      <motion.path d="M600,580 Q350,620 220,580" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" animate={{ strokeDashoffset: [0, -20] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
    </svg>
  );
}

function FloatingBubble({ bubble, mouseX, mouseY }: { bubble: BubbleData; mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  const bx = useTransform(mouseX, [0, 1000], [15, -15]);
  const by = useTransform(mouseY, [0, 600], [15, -15]);

  return (
    <motion.div
      style={{ 
        position: 'absolute',
        left: `${(bubble.x / 1000) * 100}%`, 
        top: `${(bubble.y / 600) * 100}%`,
        x: bx,
        y: by,
        rotate: bubble.rotate
      }}
      className="bg-[#0D0D0D] border border-white/[0.1] rounded-[24px] p-5 md:p-6 shadow-2xl flex flex-col justify-between w-[220px] min-height-[110px] z-10"
    >
      <div className="flex gap-2 mb-4">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-white/5" />
      </div>
      <h4 className="text-white/40 font-serif italic text-lg leading-tight">{bubble.title}</h4>
      <p className="text-white/10 font-sans text-[10px] mt-1">{bubble.desc}</p>
    </motion.div>
  );
}

export default function EfficiencySlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderPos = useMotionValue(50);
  const smoothSliderPos = useSpring(sliderPos, { stiffness: 600, damping: 50 });
  const mouseX = useMotionValue(500);
  const mouseY = useMotionValue(300);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const clipPath = useTransform(smoothSliderPos, (v) => `inset(0 0 0 ${v}%)`);
  const handleLeft = useTransform(smoothSliderPos, (v) => `${v}%`);

  const handleDragUpdate = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const pos = ((clientX - rect.left) / rect.width) * 100;
      const clampedPos = Math.max(0, Math.min(100, pos));
      sliderPos.set(clampedPos);
      if (Math.abs(clampedPos - 50) > 5) setShowHint(false);
    }
  }, [sliderPos]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) handleDragUpdate(e.clientX);
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    const onMouseUp = () => setIsDragging(false);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, handleDragUpdate, mouseX, mouseY]);

  return (
    <section className="w-full bg-black py-32 px-6 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header - Aligned with Landing Page Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 relative flex flex-col items-center"
        >
          <h2 
            className="font-bold text-white leading-[1.1] tracking-tight drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]"
            style={{ fontSize: 'clamp(32px, 7vw, 46px)', maxWidth: '960px' }}
          >
            Efficiency <em className="font-serif italic text-white/90">Redefined</em>
          </h2>
          <p 
            className="text-white/55 font-medium leading-relaxed mt-8 max-w-[540px]"
            style={{ fontSize: 'clamp(14px, 1.45vw, 19px)' }}
          >
             Consolidate your stack. Automate your operations. <span className="text-white/60">Scale your empire.</span>
          </p>
        </motion.div>

        {/* Slider Window */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <div className="absolute -inset-10 md:-inset-20 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none z-0" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none z-0" />
          
          <div 
            ref={containerRef}
            className="relative w-full aspect-[16/8] md:aspect-[21/9] rounded-[48px] overflow-hidden border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,0.9)] select-none bg-black z-10"
          >
            {/* Layer 1: Chaos */}
            <div className="absolute inset-0 z-0 bg-[#050505] overflow-hidden">
              <ChaosConnections />
              <div className="absolute inset-0 p-12">
                 <div className="relative w-full h-full">
                    {manualSteps.map((bubble) => (
                      <FloatingBubble key={bubble.id} bubble={bubble} mouseX={mouseX} mouseY={mouseY} />
                    ))}
                 </div>
              </div>
            </div>

            {/* Layer 2: Calm */}
            <motion.div className="absolute inset-0 z-10 bg-black pointer-events-none" style={{ clipPath }}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-black" />
              <div className="absolute inset-0 p-12 flex flex-col items-end">
                 <div className="relative w-full h-full flex items-center justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full pointer-events-auto">
                      {evocPoints.map((point, i) => (
                        <motion.div key={i} whileHover={{ scale: 1.03, y: -5 }} className="group relative bg-white/[0.03] border border-white/5 rounded-[32px] p-8">
                          <div className="flex items-start gap-6 relative z-10">
                             <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center text-3xl">{point.icon}</div>
                             <div className="space-y-2">
                                <h4 className="text-white font-serif italic text-2xl md:text-3xl group-hover:text-blue-400 transition-colors">{point.title}</h4>
                                <p className="text-white/40 text-sm md:text-base">{point.desc}</p>
                             </div>
                          </div>
                          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Handle */}
            <motion.div className="absolute top-0 bottom-0 z-20 w-[2px] bg-blue-500/30" style={{ left: handleLeft }}>
              <div onMouseDown={() => setIsDragging(true)} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-black border border-blue-500/40 shadow-[0_0_60px_rgba(59,130,246,0.5)] flex items-center justify-center cursor-grab active:cursor-grabbing">
                <img src="/logo.png" alt="e" className="w-8 h-8 object-contain invert brightness-200" />
              </div>
            </motion.div>

            <AnimatePresence>
              {showHint && !isDragging && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
                  <div className="bg-black/90 backdrop-blur-2xl px-10 py-5 rounded-full border border-white/10 text-white font-bold tracking-[0.2em] text-xs">CLICK & DRAG TO REDEFINE</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
