'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, ShieldCheck, User, Phone, ChevronDown, ShoppingBag, BarChart3, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { getPath } from '@/lib/paths';

export default function DemoPage() {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo Request submitted");
    
    try {
      if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Lead');
      }
    } catch (e) {
      console.error('Meta Pixel error:', e);
    }
    
    // Show toast
    setShowToast(true);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  return (
    <main className="bg-black h-screen w-full text-white selection:bg-[#183EEB]/30 overflow-hidden relative font-sans">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#183EEB]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Back Link - Top Left */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-medium group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="h-full max-w-7xl mx-auto px-8 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          
          {/* Left Column: Header & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <div className="mb-10">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter mb-4 leading-[0.9]">
                Book a <span className="text-[#183EEB]">Demo</span>
              </h1>
              <p className="text-white/40 text-sm md:text-base max-w-sm leading-relaxed font-medium">
                Launch, run and scale your e-commerce business with our AI-powered ecosystem.
              </p>
            </div>

            {/* Form Section */}
            <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Your Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-[#183EEB] transition-colors" />
                    <input 
                      type="text" 
                      placeholder="Name"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                    Phone
                  </label>
                  <div className="flex gap-2">
                    <div className="bg-white/[0.03] border border-white/10 rounded-xl py-3 px-3 text-[12px] text-white/30 flex items-center shrink-0">
                      +91
                    </div>
                    <input 
                      type="tel" 
                      placeholder="Number"
                      required
                      className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                  Category of products you sell
                </label>
                <div className="relative group">
                  <ShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-[#183EEB] transition-colors" />
                  <input 
                    type="text" 
                    placeholder="e.g. Fashion, Electronics, Beauty"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                  Monthly revenue range
                </label>
                <div className="relative group">
                  <BarChart3 className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-[#183EEB] transition-colors" />
                  <select 
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-10 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#0A0A0A]">Select Monthly Revenue</option>
                    <option value="0-5" className="bg-[#0A0A0A]">₹0 - ₹5 Lakhs</option>
                    <option value="5-20" className="bg-[#0A0A0A]">₹5 Lakhs - ₹20 Lakhs</option>
                    <option value="20-50" className="bg-[#0A0A0A]">₹20 Lakhs - ₹50 Lakhs</option>
                    <option value="50+" className="bg-[#0A0A0A]">₹50 Lakhs+</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 bg-[#183EEB] hover:bg-[#183EEB]/90 text-white font-bold py-4 rounded-xl shadow-[0_10px_40px_rgba(24,62,235,0.25)] transition-all group text-sm uppercase tracking-widest pointer-events-auto"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-white/20 text-[10px] mt-6 uppercase tracking-widest font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                Secure & Confidential
              </div>
            </form>
          </motion.div>

          {/* Right Column: GIF Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="absolute -top-6 -left-6 z-10 bg-white/[0.03] backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 max-w-[240px] shadow-2xl">
              <div className="w-10 h-10 bg-[#183EEB]/20 rounded-xl flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-[#183EEB]" />
              </div>
              <p className="text-white/60 text-[11px] leading-tight font-medium">
                Confirm your slot and we&apos;ll reach out within 24 hours.
              </p>
            </div>

            <div className="relative rounded-[48px] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(24,62,235,0.15)] group aspect-[4/3]">
              <img 
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdtaXpyejkzNzE5cXRldmVobnY3eDRqZXBudzBudjdieG9xdGlyYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fXyfpPeT5y9iTbagj5/giphy.webp" 
                alt="Demo Illustration" 
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#183EEB] rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight">Personalized Walkthrough</h3>
                </div>
                <p className="text-white/50 text-xs max-w-[280px] leading-relaxed">
                  Tailored insights to solve your specific scaling challenges.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: showToast ? 1 : 0, y: showToast ? 0 : 50 }}
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
      >
        <div className="bg-[#183EEB] text-white px-6 py-4 rounded-2xl shadow-2xl shadow-blue-900/40 flex items-center gap-3 border border-white/20 backdrop-blur-xl">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-bold text-sm tracking-tight">Request Sent! We&apos;ll contact you soon.</span>
        </div>
      </motion.div>
    </main>
  );
}
