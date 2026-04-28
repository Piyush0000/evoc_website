'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  BarChart3, 
  Truck, 
  PhoneCall, 
  MousePointerClick, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';

const features = [
  {
    title: "AI POWERED WEBSITE BUILDER",
    description: "Generate high-converting storefronts in seconds with our intelligent design engine.",
    icon: <Sparkles className="w-8 h-8 text-[#183EEB]" />,
    detail: "100+ Custom Templates • AI Copywriting • Instant Deployment"
  },
  {
    title: "AI ADS TRACKER",
    description: "Real-time performance analytics that optimize your ad spend across all platforms.",
    icon: <BarChart3 className="w-8 h-8 text-[#183EEB]" />,
    detail: "Attribution Modeling • Budget Optimization • Creative Analysis"
  },
  {
    title: "NO RTO COST LOGISTICS",
    description: "Eliminate Return-to-Origin losses with our predictive verification system.",
    icon: <Truck className="w-8 h-8 text-[#183EEB]" />,
    detail: "Address Verification • Fraud Detection • Automated Returns"
  },
  {
    title: "AI CALLING AGENT",
    description: "Automate order confirmations and inquiries with human-like voice AI.",
    icon: <PhoneCall className="w-8 h-8 text-[#183EEB]" />,
    detail: "Order Confirmation • Customer Support • 24/7 Availability"
  },
  {
    title: "1 CLICK CHECKOUT",
    description: "Reduce friction and boost conversion rates with our ultra-fast checkout flow.",
    icon: <MousePointerClick className="w-8 h-8 text-[#183EEB]" />,
    detail: "Saved Payments • Mobile Optimized • Zero Latency"
  },
  {
    title: "WHATSAPP FLOWS",
    description: "Automate customer engagement and recovery via WhatsApp sequences.",
    icon: <MessageCircle className="w-8 h-8 text-[#183EEB]" />,
    detail: "Cart Recovery • Shipping Updates • Marketing Automation"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

export default function CoreFeatures() {
  const wavePath = "M 0,90 C 50,80 110,70 170,90 C 230,110 280,160 330,170 C 380,178 430,165 480,158 C 540,150 590,160 640,140 C 700,115 770,55 870,40 C 980,25 1100,35 1220,55 C 1340,75 1450,85 1560,90 C 1640,93 1700,95 1760,110 C 1820,125 1870,130 1920,135 L 1920,360 L 0,360 Z";

  return (
    <section className="relative w-full bg-black pb-32 overflow-hidden" id="offering">
      <div className="max-w-7xl mx-auto px-6 pt-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <span className="text-[#183EEB] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Everything you need
          </span>
          <h2 
            className="text-white font-bold italic tracking-tight"
            style={{ 
              fontSize: 'clamp(40px, 8vw, 64px)',
              fontFamily: 'var(--font-instrument)',
            }}
          >
            Core Features
          </h2>
          <div className="w-24 h-1 bg-[#183EEB] mt-6 rounded-full opacity-50" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 -mt-4">
        {/* Feature Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group perspective h-[220px] w-full cursor-pointer hover:shadow-[0_0_30px_rgba(24,62,235,0.15)] transition-shadow duration-500 rounded-3xl"
            >
              <div className="card-inner">
                {/* FRONT */}
                <div className="card-front flex items-center justify-center px-6 py-4">
                  <div className="relative z-10 flex items-center gap-4 text-left">
                    <div className="p-3 bg-[#183EEB]/10 rounded-xl border border-[#183EEB]/20 group-hover:bg-[#183EEB]/20 transition-colors duration-500 shrink-0 shadow-[0_0_15px_rgba(24,62,235,0.1)]">
                      {React.cloneElement(feature.icon as React.ReactElement, { className: 'w-6 h-6 text-[#183EEB]' })}
                    </div>
                    <h3 className="text-white text-base md:text-lg font-bold tracking-tighter uppercase leading-[1.1] max-w-[160px]">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* BACK */}
                <div className="card-back flex flex-col justify-between text-left p-4">
                  <div className="relative z-10 flex flex-col justify-between h-full w-full">
                    <div>
                      <h3 className="text-[#183EEB] text-[9px] font-bold uppercase tracking-widest mb-1.5">
                        Why it matters
                      </h3>
                      <p className="text-white text-[13px] font-medium leading-snug mb-1.5">
                        {feature.description}
                      </p>
                      <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2">
                        {feature.detail}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 text-[#183EEB] font-bold text-[10px] uppercase tracking-wider group/btn mt-auto">
                      Details 
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
