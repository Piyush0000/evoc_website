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
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans">
      {/* Subtle Background Glows */}
      <div className="fixed top-0 right-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[20%] w-[600px] h-[600px] bg-blue-600/[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[120px] rounded-full" />
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
        <div className="max-w-4xl mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
              The Operating System for <span className="text-blue-500 relative">
                D2C Success
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute bottom-2 left-0 h-1 bg-blue-500/30 rounded-full"
                />
              </span>
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              EVOC Labs is an AI-powered full-stack commerce platform helping eCommerce and D2C brands build, operate, and scale from a single dashboard.
            </p>
          </motion.div>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
           <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our <span className="text-blue-500">Story</span></h2>
                <div className="w-12 h-1 bg-blue-600/50 rounded-full" />
              </div>
              <div className="space-y-6 text-white/50 text-base leading-relaxed max-w-lg font-medium">
                <p>
                  We unify store infrastructure, sales and ads analytics, checkout optimization, logistics intelligence, AI calling agents, abandoned cart recovery, and growth automation into one ecosystem.
                </p>
                <p>
                  Our goal is to eliminate fragmented tools and simplify how modern brands manage their entire online business with zero guesswork.
                </p>
              </div>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div className="group cursor-default">
                   <div className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">100+</div>
                   <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-1">Brands Scaling</div>
                </div>
                <div className="group cursor-default">
                   <div className="text-3xl font-bold text-white group-hover:text-blue-500 transition-colors">₹50Cr+</div>
                   <div className="text-white/20 text-[10px] font-bold uppercase tracking-widest mt-1">Ad Spend</div>
                </div>
              </div>
           </div>
           <motion.div 
             whileHover={{ y: -5 }}
             className="bg-white/[0.02] border border-white/10 rounded-[40px] p-12 relative overflow-hidden group backdrop-blur-sm shadow-2xl shadow-blue-500/5"
           >
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[80px] group-hover:bg-blue-600/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Target className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 italic font-serif">The Mission</h3>
              <p className="text-white/40 text-base leading-relaxed">
                 To simplify commerce operations, improve conversions, reduce inefficiencies, and help brands grow profitably through AI-driven solutions. EVOC Labs is building the operating system for modern commerce.
              </p>
           </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-40">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our <span className="text-blue-500">Values</span></h2>
            <p className="text-white/20 text-xs font-bold uppercase tracking-[0.3em]">Built for the long term</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-xl group"
              >
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(item.icon as React.ReactElement, { className: 'w-6 h-6 transition-colors group-hover:text-white' })}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
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
