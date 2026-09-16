'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getPath } from '@/lib/paths';

export default function Hero() {
  const router = useRouter();
  const heroRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000, opacity: 0 });
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  // Mouse spotlight tracking (Desktop only, optimized)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isPointerFine = window.matchMedia('(pointer: fine)').matches;
    if (!isPointerFine) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Only track when cursor is within or close to hero
      if (
        e.clientY >= rect.top - 100 &&
        e.clientY <= rect.bottom + 100 &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right
      ) {
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          opacity: 1,
        });
      } else {
        setMousePos(prev => ({ ...prev, opacity: 0 }));
      }
    };

    const handleMouseLeave = () => {
      setMousePos(prev => ({ ...prev, opacity: 0 }));
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Click ripple effect
  const handleHeroClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now() + Math.random(), x, y };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  const line1Words = ["Run", "your", "D2C", "brand"];
  const line2Words = ["Pay", "only", "4%", "when", "orders", "deliver"];

  return (
    <section
      ref={heroRef}
      onClick={handleHeroClick}
      className="relative w-full bg-black flex flex-col items-center overflow-hidden h-auto pb-20 select-none"
    >
      {/* ─── SCOPED STYLES & ANIMATIONS EXTRACTED FROM DIGITAL SERENITY ─── */}
      <style>{`
        @keyframes hero-word-appear {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.92);
            filter: blur(10px);
          }
          60% {
            opacity: 0.85;
            transform: translateY(6px) scale(0.98);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes hero-grid-draw {
          0% { stroke-dashoffset: 1200; opacity: 0; }
          50% { opacity: 0.35; }
          100% { stroke-dashoffset: 0; opacity: 0.15; }
        }
        @keyframes hero-pulse-glow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.3); }
        }
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(0.9); opacity: 0.35; }
          25% { transform: translateY(-14px) translateX(7px) scale(1.25); opacity: 0.95; }
          50% { transform: translateY(-7px) translateX(-5px) scale(1.05); opacity: 0.6; }
          75% { transform: translateY(-18px) translateX(9px) scale(1.35); opacity: 1; }
        }
        @keyframes hero-ripple {
          0% {
            width: 0px;
            height: 0px;
            opacity: 0.8;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
          }
          100% {
            width: 140px;
            height: 140px;
            opacity: 0;
            box-shadow: 0 0 30px rgba(24, 62, 235, 0);
          }
        }
        .hero-word-animate {
          display: inline-block;
          opacity: 0;
          margin: 0 0.12em;
          animation: hero-word-appear 0.85s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
        }
        .hero-word-animate:hover {
          color: #bfdbfe;
          transform: translateY(-2px);
          text-shadow: 0 0 24px rgba(59, 130, 246, 0.75), 0 0 45px rgba(24, 62, 235, 0.5);
        }
        .hero-grid-line {
          stroke: #3b82f6;
          stroke-width: 0.75;
          opacity: 0;
          stroke-dasharray: 6 6;
          stroke-dashoffset: 1200;
          animation: hero-grid-draw 2.4s ease-out forwards;
        }
        .hero-detail-dot {
          fill: #60a5fa;
          opacity: 0;
          animation: hero-pulse-glow 3.5s ease-in-out infinite;
        }
        .hero-corner-bracket {
          position: absolute;
          width: 36px;
          height: 36px;
          border: 1px solid rgba(59, 130, 246, 0.25);
          opacity: 0;
          animation: hero-word-appear 1.2s ease-out forwards;
          pointer-events: none;
        }
        .hero-floating-particle {
          position: absolute;
          width: 5.5px;
          height: 5.5px;
          background: #ffffff;
          border-radius: 50%;
          opacity: 0;
          animation: hero-float 5s ease-in-out infinite;
          pointer-events: none;
          box-shadow: 
            0 0 6px rgba(255, 255, 255, 0.9),
            0 0 14px 2px rgba(147, 197, 253, 0.8),
            0 0 24px 4px rgba(59, 130, 246, 0.5);
        }
        .hero-ripple-wave {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(147, 197, 253, 0.6);
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: hero-ripple 0.9s ease-out forwards;
          z-index: 40;
        }
      `}</style>

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

      {/* ─── ARCHITECTURAL HIGH-TECH SVG GRID (From Digital Serenity) ─── */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-[2]" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <pattern id="heroTechGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroTechGrid)" />
        
        {/* Animated Dashed Grid Lines */}
        <line x1="0" y1="22%" x2="100%" y2="22%" className="hero-grid-line" style={{ animationDelay: '0.4s' }} />
        <line x1="0" y1="78%" x2="100%" y2="78%" className="hero-grid-line" style={{ animationDelay: '0.9s' }} />
        <line x1="18%" y1="0" x2="18%" y2="100%" className="hero-grid-line" style={{ animationDelay: '1.2s' }} />
        <line x1="82%" y1="0" x2="82%" y2="100%" className="hero-grid-line" style={{ animationDelay: '1.6s' }} />
        <line x1="50%" y1="0" x2="50%" y2="100%" className="hero-grid-line" style={{ animationDelay: '2s', opacity: '0.04' }} />

        {/* Pulsing Intersection Dots */}
        <circle cx="18%" cy="22%" r="2" className="hero-detail-dot" style={{ animationDelay: '2.2s' }} />
        <circle cx="82%" cy="22%" r="2" className="hero-detail-dot" style={{ animationDelay: '2.5s' }} />
        <circle cx="18%" cy="78%" r="2" className="hero-detail-dot" style={{ animationDelay: '2.8s' }} />
        <circle cx="82%" cy="78%" r="2" className="hero-detail-dot" style={{ animationDelay: '3.1s' }} />
        <circle cx="50%" cy="22%" r="1.5" className="hero-detail-dot" style={{ animationDelay: '3.4s' }} />
        <circle cx="50%" cy="78%" r="1.5" className="hero-detail-dot" style={{ animationDelay: '3.7s' }} />
      </svg>

      {/* ─── CORNER ARCHITECTURAL BRACKETS (From Digital Serenity) ─── */}
      <div className="hero-corner-bracket top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-[3]" style={{ animationDelay: '2.6s' }}>
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-400 opacity-60 rounded-full" />
      </div>
      <div className="hero-corner-bracket top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-[3]" style={{ animationDelay: '2.8s' }}>
        <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-400 opacity-60 rounded-full" />
      </div>
      <div className="hero-corner-bracket bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 z-[3]" style={{ animationDelay: '3s' }}>
        <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-blue-400 opacity-60 rounded-full" />
      </div>
      <div className="hero-corner-bracket bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-[3]" style={{ animationDelay: '3.2s' }}>
        <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-blue-400 opacity-60 rounded-full" />
      </div>

      {/* ─── FLOATING PARTICLES (From Digital Serenity) ─── */}
      <div className="hero-floating-particle z-[3]" style={{ top: '22%', left: '14%', animationDelay: '0.4s' }} />
      <div className="hero-floating-particle z-[3]" style={{ top: '28%', left: '84%', animationDelay: '0.9s' }} />
      <div className="hero-floating-particle z-[3]" style={{ top: '55%', left: '86%', animationDelay: '1.4s' }} />
      <div className="hero-floating-particle z-[3]" style={{ top: '38%', left: '11%', animationDelay: '1.8s' }} />
      <div className="hero-floating-particle z-[3]" style={{ top: '64%', left: '16%', animationDelay: '2.6s' }} />
      <div className="hero-floating-particle z-[3]" style={{ top: '70%', left: '88%', animationDelay: '3.1s' }} />

      {/* ─── MOUSE-FOLLOWING SPOTLIGHT GRADIENT ─── */}
      <div 
        className="pointer-events-none absolute rounded-full blur-3xl z-[2] transition-opacity duration-300 w-72 h-72 md:w-96 md:h-96"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: mousePos.opacity,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.12), rgba(24, 62, 235, 0.05), transparent 70%)',
          willChange: 'left, top, opacity',
        }}
      />

      {/* ─── CLICK RIPPLES ─── */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="hero-ripple-wave"
          style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
        />
      ))}

      {/* ─── Animated Shimmer Arc (Atmospheric horizon) ─── */}
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

      {/* ─── Logo Flourish ─── */}
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

        {/* Headline with Staggered Word Reveal & Interactive Hover Glow */}
        <div className="relative max-w-[960px] mx-auto">
          {/* Flanking Horizontal Detail Lines */}
          <div 
            className="hidden md:block absolute -left-8 lg:-left-14 top-1/2 -translate-y-1/2 w-5 lg:w-9 h-px bg-gradient-to-r from-transparent to-blue-400/40 opacity-0"
            style={{ animation: 'hero-word-appear 1s ease-out forwards', animationDelay: '1.8s' }}
          />
          <div 
            className="hidden md:block absolute -right-8 lg:-right-14 top-1/2 -translate-y-1/2 w-5 lg:w-9 h-px bg-gradient-to-l from-transparent to-blue-400/40 opacity-0"
            style={{ animation: 'hero-word-appear 1s ease-out forwards', animationDelay: '2s' }}
          />

          <h1
            className="font-bold text-white leading-[1.12] tracking-tight drop-shadow-[0_2px_20px_rgba(59,130,246,0.2)]"
            style={{ fontSize: 'clamp(32px, 7vw, 46px)' }}
          >
            <div>
              {line1Words.map((word, idx) => (
                <span
                  key={idx}
                  className="hero-word-animate"
                  style={{ animationDelay: `${300 + idx * 120}ms` }}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="mt-1 sm:mt-2">
              {line2Words.map((word, idx) => (
                <span
                  key={idx}
                  className="hero-word-animate"
                  style={{ animationDelay: `${850 + idx * 110}ms` }}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          className="text-white/60 font-medium leading-relaxed mt-8 mb-10 md:mt-14 md:mb-14"
          style={{ fontSize: 'clamp(14px, 1.45vw, 19px)', maxWidth: '540px' }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: 'easeOut' }}
        >
          Store, Ads, Logistics, AI Calling, Checkout & WhatsApp — one platform. ₹0 subscription
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="flex flex-col items-center gap-6 relative z-50 mb-12 md:mb-0 pointer-events-auto"
        >
          <button
            type="button"
            onClick={() => {
              console.log("Book Demo clicked");
              try {
                if (typeof window !== 'undefined' && (window as any).fbq) {
                  (window as any).fbq('track', 'Lead');
                }
              } catch (e) {
                console.error('Meta Pixel error:', e);
              }
              if (typeof window !== 'undefined' && window.location.pathname === '/demo') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                router.push('/demo');
              }
            }}
            className="group flex items-center gap-3.5 bg-white/[0.03] backdrop-blur-md border border-white/[0.15] hover:border-blue-500/50 px-8 py-3 rounded-[14px] text-white text-[15px] transition-all hover:bg-white/[0.06] shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_35px_rgba(37,99,235,0.45)] cursor-pointer"
          >
            <span className="font-medium tracking-tight">Book a Free Demo</span>
            <span className="text-white/60 group-hover:translate-x-0.5 transition-transform">→</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
