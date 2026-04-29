'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, Zap, TrendingUp, Globe, Users, Heart, Target, Sparkles } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';

export default function AboutPage() {
  const values = [
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      title: "Data Integrity",
      desc: "Clean, unified data is the foundation of every decision we help our brands make."
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      title: "Speed to Scale",
      desc: "We build for velocity. Moving from domain to dashboard in record time."
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
      title: "Profit First",
      desc: "Growth is useless without profitability. Our systems are tuned for the bottom line."
    }
  ];

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans pb-20">
      {/* Subtle Background Glow */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[20%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-24">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">About Evoc Labs</div>
        </div>

        {/* Hero Section */}
        <div className="max-w-3xl mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              The Operating System for <span className="text-blue-500">D2C Success.</span>
            </h1>
            <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium max-w-xl">
              We're building a unified ecosystem for Indian eCommerce—eliminating fragmented tools and simplifying how modern brands scale online.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
           <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-blue-500">Story</span></h2>
              <div className="space-y-4 text-white/50 text-sm md:text-base leading-relaxed max-w-lg">
                <p>
                  Evoc Labs was born out of a simple observation: modern eCommerce sellers are overwhelmed by fragmented tools. One for the store, another for ads, a third for logistics, and a dozen more for analytics.
                </p>
                <p>
                  We built Evoc Labs to be the unified dashboard where merchants can manage their entire online business with zero guesswork.
                </p>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                   <div className="text-2xl font-bold text-white">100+</div>
                   <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Brands Scaling</div>
                </div>
                <div>
                   <div className="text-2xl font-bold text-white">₹50Cr+</div>
                   <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Ad Spend</div>
                </div>
              </div>
           </div>
           <div className="bg-white/[0.02] border border-white/10 rounded-[32px] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl" />
              <Target className="w-10 h-10 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4 italic font-serif">The Mission</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                 To empower the next generation of D2C giants by merging high-end aesthetics with data-driven performance technology.
              </p>
           </div>
        </div>

        {/* Our Values */}
        <div className="mb-40">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 tracking-tight">Our <span className="text-blue-500">Values</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:bg-white/[0.04] transition-all"
              >
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Ready to scale with <span className="text-blue-500">Evoc?</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/demo">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/careers">
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-xl transition-all flex items-center gap-2">
                Join our team
                <Users className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
