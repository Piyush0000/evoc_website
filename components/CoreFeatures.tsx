'use client';

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, 
  BarChart3, 
  Truck, 
  PhoneCall, 
  MousePointerClick, 
  MessageCircle,
  ArrowRight,
  RotateCw
} from 'lucide-react';

const features = [
  {
    title: "AI POWERED WEBSITE BUILDER",
    description: "Generate high-converting storefronts in seconds with our intelligent design engine.",
    icon: <Sparkles className="w-5 h-5 text-[#183EEB]" />,
    detail: "100+ Custom Templates • AI Copywriting • Instant Deployment",
    image: "/images/core-features/website_builder-v2.webp",
  },
  {
    title: "AI CALLING AGENT",
    description: "Automate order confirmations and inquiries with human-like voice AI.",
    icon: <PhoneCall className="w-5 h-5 text-[#183EEB]" />,
    detail: "Order Confirmation • Customer Support • 24/7 Availability",
    image: "/images/core-features/ai_calling_agent-v2.webp",
  },
  {
    title: "AI ADS TRACKER",
    description: "Real-time performance analytics that optimize your ad spend across all platforms.",
    icon: <BarChart3 className="w-5 h-5 text-[#183EEB]" />,
    detail: "Attribution Modeling • Budget Optimization • Creative Analysis",
    image: "/images/core-features/ads_tracker-v2.webp",
  },
  {
    title: "NO RTO COST LOGISTICS",
    description: "Eliminate Return-to-Origin losses with our predictive verification system.",
    icon: <Truck className="w-5 h-5 text-[#183EEB]" />,
    detail: "Address Verification • Fraud Detection • Automated Returns",
    image: "/images/core-features/no_rto_cost_logistics-v2.webp",
  },
  {
    title: "1 CLICK CHECKOUT",
    description: "Reduce friction and boost conversion rates with our ultra-fast checkout flow.",
    icon: <MousePointerClick className="w-5 h-5 text-[#183EEB]" />,
    detail: "Saved Payments • Mobile Optimized • Zero Latency",
    image: "/images/core-features/one_click_checkout-v2.webp",
  },
  {
    title: "WHATSAPP FLOWS",
    description: "Automate customer engagement and recovery via WhatsApp sequences.",
    icon: <MessageCircle className="w-5 h-5 text-[#183EEB]" />,
    detail: "Cart Recovery • Shipping Updates • Marketing Automation",
    image: "/images/core-features/whatsapp_flows-v2.webp",
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export default function CoreFeatures() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="relative w-full bg-black py-20 md:py-28 overflow-hidden" id="offering">
      {/* Background ambient glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(24, 62, 235, 0.35), transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-12 md:mb-16"
        >
          <span className="text-[#183EEB] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            Everything you need
          </span>
          <h2 
            className="text-white font-bold italic tracking-tight"
            style={{ 
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontFamily: 'var(--font-instrument), serif',
            }}
          >
            Core Features
          </h2>
          <div className="w-20 h-1 bg-[#183EEB] mt-5 rounded-full opacity-60" />
        </motion.div>

        {/* Feature Card Grid (Medium Sizing) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        >
          {features.map((feature, i) => {
            const isFlipped = !!flippedCards[i];

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                onClick={() => toggleFlip(i)}
                className="group perspective h-[285px] sm:h-[300px] md:h-[310px] w-full cursor-pointer rounded-[22px] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_12px_36px_rgba(24,62,235,0.18)]"
              >
                <div className={`card-inner ${isFlipped ? 'is-flipped' : ''}`}>
                  {/* FRONT FACE */}
                  <div className="card-front !p-3 sm:!p-3.5 flex flex-col justify-between bg-[#08090d] border border-white/10 group-hover:border-[#183EEB]/40 transition-colors duration-500">
                    
                    {/* Top: Feature Image Container */}
                    <div className="relative w-full h-[70%] rounded-[14px] overflow-hidden bg-black/60 border border-white/5 shadow-inner">
                      <Image 
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        loading="lazy"
                      />
                      
                      {/* Gentle inner overlay vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom: Feature Title & Micro-cue */}
                    <div className="relative z-10 w-full h-[30%] flex items-center justify-between px-2 pt-1">
                      <h3 
                        className="text-white font-bold tracking-tight uppercase text-left leading-tight"
                        style={{ fontSize: 'clamp(12px, 1.15vw, 14.5px)' }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Interactive Flip Hint Icon */}
                      <span 
                        title="Click or hover to view details"
                        className="text-white/30 group-hover:text-[#183EEB] transition-colors duration-300 ml-2 shrink-0 p-1.5 rounded-full bg-white/5 group-hover:bg-[#183EEB]/15"
                      >
                        <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
                      </span>
                    </div>
                  </div>

                  {/* BACK FACE (Details) */}
                  <div className="card-back !p-5 sm:!p-6 flex flex-col justify-between text-left">
                    <div className="relative z-10 flex flex-col justify-between h-full w-full">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[#183EEB] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#183EEB]" />
                            Why it matters
                          </span>
                          <span className="text-white/30 text-[10px] sm:hidden flex items-center gap-1">
                            <RotateCw className="w-2.5 h-2.5" /> Tap to flip
                          </span>
                        </div>
                        
                        <h4 className="text-white text-[13px] sm:text-[14px] font-semibold leading-snug mb-2">
                          {feature.description}
                        </h4>
                        
                        <p className="text-white/50 text-[11px] sm:text-[12px] leading-relaxed line-clamp-3">
                          {feature.detail}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                        <div className="flex items-center gap-1.5 text-[#183EEB] font-bold text-[11px] uppercase tracking-wider group/btn">
                          Explore Capability
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </div>
                        <div className="p-1.5 bg-[#183EEB]/10 rounded-lg border border-[#183EEB]/20">
                          {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: 'w-4 h-4 text-[#183EEB]' })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
