'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past the Hero section (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={() => {
            console.log("Floating Book Demo clicked");
            try {
              if (typeof window !== 'undefined' && (window as any).fbq) {
                (window as any).fbq('track', 'Lead');
              }
            } catch (e) {
              console.error('Meta Pixel error:', e);
            }
            router.push('/demo');
          }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] group flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-full font-medium shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:bg-[#3B82F6] hover:shadow-[0_8px_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all cursor-pointer"
        >
          <span className="tracking-tight">Book a Demo</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
