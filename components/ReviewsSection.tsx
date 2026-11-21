'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Style Elevates",
    role: "Founder, Fashion D2C Brand",
    content: "Before EVOC Labs, we were juggling multiple tools for ads, store management and recovery. Their platform brought everything into one place and our conversion rate improved noticeably within weeks. The abandoned cart recovery alone recovered revenue we were losing every day."
  },
  {
    name: "Pistachious Bracelets",
    role: "Co-Founder, Jewellery Brand",
    content: "Working with EVOC Labs felt like adding a growth team to our business. Their AI automations and checkout optimizations helped us scale profitably, not just increase sales."
  },
  {
    name: "Avikanha",
    role: "Owner, Consumer Gadgets Brand",
    content: "We saw a major difference in how we manage ads and operations after moving to EVOC Labs. Having sales, logistics and performance data on one dashboard changed our decision-making completely."
  },
  {
    name: "Moonstruck appliances",
    role: "Founder, Home Appliance Brand",
    content: "What impressed us most was the WhatsApp recovery automation and AI calling integrations. We started recovering abandoned orders at a scale we couldn’t manage manually."
  },
  {
    name: "Kickdock",
    role: "Director, Homeware Brand",
    content: "EVOC Labs didn’t just give us software, they gave us a growth system. From store optimization to retention automations, everything was built for scaling."
  },
  {
    name: "Ratvia Jewellers",
    role: "Founder, Multi-Channel Brand",
    content: "We’ve worked with multiple agencies before, but EVOC Labs feels more like a tech growth partner. Their software replaced all the cash burning"
  }
];

const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#183EEB] opacity-50 mb-6">
    <path d="M10 11L8 17H5L7 11H5V4H10V11ZM19 11L17 17H14L16 11H14V4H19V11Z" fill="currentColor" />
  </svg>
);

const TestimonialCard = ({ name, role, content, delay }: { name: string, role: string, content: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -5 }}
    className="relative p-8 rounded-[32px] bg-[#0A0A0A] border border-white/5 hover:border-[#183EEB]/30 transition-all duration-500 flex flex-col group h-full"
  >
    {/* Subtle Inner Glow */}
    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
    <div className="absolute inset-0 rounded-[32px] bg-[#183EEB]/0 group-hover:bg-[#183EEB]/[0.02] transition-colors duration-500 pointer-events-none" />
    
    <QuoteIcon />
    
    <p className="text-white/70 text-[17px] leading-[1.6] mb-8 flex-grow font-medium">
      {content}
    </p>
    
    <div className="mt-auto pt-6 border-t border-white/5">
      <h4 className="text-white font-bold text-lg tracking-tight mb-0.5">
        {name}
      </h4>
      <p className="text-[#183EEB] text-[11px] font-bold uppercase tracking-[0.15em] opacity-80">
        {role}
      </p>
    </div>
  </motion.div>
);

export default function ReviewsSection() {
  return (
    <section id="reviews" className="bg-black py-32 px-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#183EEB]/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#183EEB]/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full bg-[#183EEB]/10 border border-[#183EEB]/20 mb-6"
          >
            <span className="text-[#183EEB] font-bold tracking-[0.1em] uppercase text-[10px]">
              Wall of Love
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white tracking-tight max-w-3xl"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, lineHeight: 1.1 }}
          >
            The growth partner for <em className="font-serif italic text-[#183EEB] font-normal">India's top</em> brands
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              name={t.name}
              role={t.role}
              content={t.content}
              delay={0.1 * i}
            />
          ))}
        </div>

        {/* Bottom CTA or Decorative element */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex items-center gap-2 text-white/40 text-sm font-medium">
            <div className="w-1.5 h-1.5 rounded-full bg-[#183EEB] animate-pulse" />
            Join 500+ brands scaling with EVOC Labs
          </div>
        </motion.div>
      </div>
    </section>
  );
}
