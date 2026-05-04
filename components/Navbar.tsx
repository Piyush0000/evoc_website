'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import { ArrowRight } from 'lucide-react';
import { getPath } from '@/lib/paths';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        animate={{
          backgroundColor: isScrolled || isMobileMenuOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
          backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(16px)' : 'blur(0px)',
          paddingTop: isScrolled ? '12px' : '20px',
          paddingBottom: isScrolled ? '12px' : '20px',
          borderBottom: isScrolled || isMobileMenuOpen ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full z-[100] px-6 md:px-8"
      >
        <div className="flex items-center justify-between max-w-[1440px] mx-auto relative">
          {/* Left: Logo mark */}
          <div className="flex-1">
            <Link href="/" aria-label="Home" className="inline-block hover:opacity-80 transition-opacity outline-none focus:outline-none">
              <img
                src={getPath('/logo.png')}
                alt="Logo"
                loading="eager"
                decoding="async"
                width={56}
                height={56}
                className="object-contain brightness-[3] grayscale"
                style={{ width: '56px', height: '56px' }}
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
            <motion.div 
              animate={{
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0)',
                padding: isScrolled ? '6px 8px' : '0px 0px',
                border: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0)',
                borderRadius: '100px',
                gap: isScrolled ? '4px' : '32px',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="flex items-center shadow-2xl"
            >
              {['Home', 'Offering', 'About', 'Pricing', 'Blog'].map((item) => {
                const isBlog = item === 'Blog';
                const isAbout = item === 'About';
                const isPricing = item === 'Pricing';
                const isHome = item === 'Home';
                
                let href = `#${item.toLowerCase()}`;
                if (isHome) href = '/';
                if (isAbout) href = '/about';
                if (isPricing) href = '/#impact';
                if (isBlog) href = '/blog';
                
                return (
                  <Link
                    key={item}
                    href={href}
                    
                    
                    className={`transition-all duration-300 text-[14px] font-medium rounded-full outline-none focus:outline-none ${
                      isScrolled 
                        ? 'px-4 py-1.5 text-white/50 hover:text-white hover:bg-white/5' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </motion.div>
          </div>

          <div className="flex-1 flex justify-end items-center gap-4">
            <Link href="https://app.evoclabs.com/" className="hidden sm:block">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 0 30px rgba(24, 62, 235, 0.5)',
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 text-[14px] font-bold text-white transition-all rounded-full border border-white/20 shadow-[0_4px_15px_rgba(24,62,235,0.3)] flex items-center gap-2 group"
                style={{
                  background: 'linear-gradient(135deg, #183EEB 0%, #3b82f6 100%)',
                }}
              >
                Log in
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white/70 p-2 outline-none focus:outline-none z-[110]"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 9 : 0 }}
                  className="w-full h-0.5 bg-white rounded-full origin-left"
                />
                <motion.span 
                  animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                  className="w-full h-0.5 bg-white rounded-full"
                />
                <motion.span 
                  animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -9 : 0 }}
                  className="w-full h-0.5 bg-white rounded-full origin-left"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl md:hidden pt-32 px-10"
          >
            <div className="flex flex-col gap-8">
              {['Home', 'Offering', 'About', 'Pricing', 'Blog'].map((item, i) => {
                const isBlog = item === 'Blog';
                const isAbout = item === 'About';
                const isPricing = item === 'Pricing';
                const isHome = item === 'Home';
                
                let href = `#${item.toLowerCase()}`;
                if (isHome) href = '/';
                if (isAbout) href = '/about';
                if (isPricing) href = '/#impact';
                if (isBlog) href = '/blog';
                
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={href}
                      
                      
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-bold text-white/50 hover:text-white transition-colors flex items-center gap-4"
                      style={{ fontFamily: 'var(--font-instrument)' }}
                    >
                      <span className="text-[#183EEB] text-sm font-mono">{`0${i + 1}`}</span>
                      {item}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-10 mt-10 border-t border-white/10"
              >
                <Link href="https://app.evoclabs.com/" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full py-5 rounded-2xl bg-[#183EEB] text-white font-bold text-xl shadow-[0_0_40px_rgba(24,62,235,0.4)]">
                    Log in
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
