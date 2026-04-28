'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import DashboardMockup from './DashboardMockup';

/**
 * DashboardReveal — scroll-driven scale-up effect.
 * Capped at 0.98 scale to ensure it doesn't cover the full screen or go beyond navbar.
 */
export default function DashboardReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'center 0.3'],
  });

  // Scale from 0.8 (mobile-friendly start) to 1.0 (capped by container padding)
  // We use 0.8 to 1.0 but the container has px-8, so 1.0 is actually slightly less than full screen width.
  const rawScale   = useTransform(scrollYProgress, [0, 1], [0.85, 1.0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.0]);

  const scale   = useSpring(rawScale,   { stiffness: 60, damping: 20, mass: 0.5 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 20 });

  return (
    <section className="w-full relative z-20 pb-16">
      {/* Ambient glow above the dashboard */}
      <div
        className="absolute inset-x-[10%] -top-24 h-48 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(30,59,255,0.15) 0%, transparent 100%)',
          filter: 'blur(40px)',
        }}
      />

      <div ref={ref} className="w-full max-w-[1440px] mx-auto px-4 md:px-12">
        <motion.div
          style={{
            scale,
            opacity,
            transformOrigin: 'center top',
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <DashboardMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
