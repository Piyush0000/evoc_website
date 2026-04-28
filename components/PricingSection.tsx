'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StoreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#183EEB]">
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
    <path d="M2 7h20" />
    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 10V7" />
  </svg>
);

const WebIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#183EEB]">
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const MarketingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#183EEB]">
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#183EEB]">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

const PriceItem = ({ icon, price, label, delay = 0 }: { icon: React.ReactNode; price: string; label: React.ReactNode; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className="flex items-center gap-5 px-8 py-2 whitespace-nowrap"
  >
    <div className="flex-shrink-0">{icon}</div>
    <div className="flex items-center gap-4">
      <span 
        className="text-4xl md:text-5xl font-bold italic text-white leading-none"
        style={{ fontFamily: 'var(--font-instrument)' }}
      >
        {price}
      </span>
      <span className="text-[14px] md:text-[16px] text-white/70 font-medium leading-tight">
        {label}
      </span>
    </div>
  </motion.div>
);

const Divider = () => (
  <div className="hidden md:block w-[1px] h-12 bg-white/10 mx-8 lg:mx-14" />
);

export default function PricingSection() {
  return (
    <section className="bg-black pt-0 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white mb-16 tracking-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 600 }}
        >
          No upfront cost, only <em className="font-serif italic text-[#183EEB]">success</em> based fees
        </motion.h2>
        
        {/* Row 1 — 3 items */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-0 max-w-full mx-auto mb-20 md:mb-24">
          <PriceItem icon={<StoreIcon />} price="₹0" label="Subscription fees" delay={0.1} />
          <Divider />
          <PriceItem 
            icon={<WebIcon />} 
            price="₹0" 
            label={<>Website Setup & Maintenance Cost</>} 
            delay={0.2}
          />
          <Divider />
          <PriceItem icon={<MarketingIcon />} price="₹0" label="No Marketing Charges" delay={0.3} />
        </div>
        
        {/* Row 2 — 2 items */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 lg:gap-32">
          <PriceItem icon={<ShieldIcon />} price="₹0" label="No Charges on RTO" delay={0.4} />
          <Divider />
          <PriceItem icon={<ShieldIcon />} price="₹0" label="No Charges on RTO" delay={0.5} />
        </div>
      </div>
    </section>
  );
}
