'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import DashboardMockup from './DashboardMockup';

/**
 * DashboardReveal — scroll-driven scale-up effect.
 *
 * offset: ['start 0.95', 'center 0.4']
 *  → progress=0 when the section's top is at 95% of the viewport (just peeking in)
 *  → progress=1 when the section's top is at 40% of the viewport (scrolled well in)
 *
 * This means: as the user scrolls and the dashboard rises into view,
 * the scale continuously grows from 0.62 → 1.0 — exactly like Shopdeck.
 */
export default function DashboardReveal() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.95', 'center 0.4'],
  });

  const rawScale   = useTransform(scrollYProgress, [0, 1], [0.62, 1.0]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.4], [0.5, 1.0]);

  const scale   = useSpring(rawScale,   { stiffness: 60, damping: 20, mass: 0.5 });
  const opacity = useSpring(rawOpacity, { stiffness: 60, damping: 20 });

  return (
    <section className="w-full relative z-20 pb-16">
      {/* Ambient glow above the dashboard */}
      <div
        className="absolute inset-x-[10%] -top-12 h-24 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 100% at 50% 0%, rgba(30,59,255,0.25) 0%, transparent 100%)',
          filter: 'blur(24px)',
        }}
      />

      <div ref={ref} className="w-full px-[5%]">
        <motion.div
          style={{
            scale,
            opacity,
            transformOrigin: 'center top',
          }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
