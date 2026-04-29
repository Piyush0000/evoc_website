'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Rocket, Users, Target, ShieldCheck, Mail, Briefcase, Sparkles, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';

export default function CareersPage() {
  const [isApplying, setIsApplying] = useState(false);

  const whyWorkItems = [
    {
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      title: "Impact at Scale",
      desc: "Work on software that powers hundreds of Indian D2C brands. Your code directly impacts real businesses every day."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "Fast-Paced Growth",
      desc: "We move fast and value execution. In a startup environment, you'll learn and grow at 10x the speed of a corporate role."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      title: "Modern Tech Stack",
      desc: "Build with Next.js, React, Node.js, and AI integrations. We stay on the bleeding edge of performance."
    }
  ];

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans pb-20">
      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Simple Header Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Careers at Evoc Labs</div>
        </div>

        {/* 1. About Evoc Section - At the top */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">About <span className="text-blue-500">Evoc Labs</span></h1>
              <div className="space-y-4 text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
                 <p>
                    Evoc Labs is a B2B SaaS platform built for eCommerce sellers in India. Our goal is to create a unified ecosystem where merchants can manage their entire online business from a single dashboard.
                 </p>
                 <p>
                    From store creation and ad tracking to logistics and analytics, we eliminate fragmented tools and simplify how modern brands scale online profitably.
                 </p>
              </div>
           </motion.div>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 group"
           >
              <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Collaboration" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-white font-bold text-lg italic font-serif">Scaling D2C with Technology</p>
              </div>
           </motion.div>
        </div>

        {/* 2. Why EVOC Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {whyWorkItems.map((item, i) => (
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

        {/* 3. Open Positions - Focused & Expanding */}
        <div id="open-positions" className="mb-40">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Open <span className="text-blue-500">Positions</span></h2>
            <div className="flex justify-center gap-6 mt-4 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
               <span className="text-blue-500 underline underline-offset-8">All Positions</span>
               <span>Tech</span>
               <span>Marketing</span>
               <span>Design</span>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`bg-white/[0.03] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 ${isApplying ? 'bg-white/[0.05] border-blue-500/30' : 'hover:bg-white/[0.05]'}`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer Internship</h3>
                    <div className="flex flex-wrap items-center gap-4 text-white/30 text-[11px] font-bold uppercase tracking-widest">
                      <span>Remote</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>4 Months</span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span>Internship (Unpaid)</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setIsApplying(!isApplying)}
                    className="flex items-center gap-2 text-white hover:text-blue-500 transition-colors text-sm font-bold group"
                  >
                    {isApplying ? 'Close' : 'Apply Now'}
                    {isApplying ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </div>

                <AnimatePresence>
                  {isApplying && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-12 pt-12 border-t border-white/5">
                        <div className="mb-10">
                          <h4 className="text-xl font-bold mb-2">Apply for this role</h4>
                          <p className="text-white/30 text-xs leading-relaxed font-medium">Your application is saved securely. We don't print applicant data to the console.</p>
                        </div>

                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Full name *</label>
                             <input type="text" placeholder="Your name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Email *</label>
                             <input type="email" placeholder="you@email.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">GitHub *</label>
                             <input type="url" placeholder="https://github.com/username" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Portfolio *</label>
                             <input type="url" placeholder="https://your-portfolio.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Resume link *</label>
                             <input type="url" placeholder="Drive / Notion / PDF link" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          <div className="space-y-2">
                             <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Next.js project links *</label>
                             <input type="text" placeholder="Comma-separated links" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                          </div>
                          
                          <div className="md:col-span-2 pt-4">
                            <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/10">
                               Submit Application
                            </button>
                          </div>
                        </form>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* General Application */}
        <div className="text-center py-20 border-t border-white/5">
           <h3 className="text-xl font-bold mb-4">Don't see the right fit?</h3>
           <p className="text-white/30 text-sm mb-8">We are always looking for exceptional talent to join our core team.</p>
           <a 
              href="mailto:careers@evoclabs.com?subject=General Application - Evoc Labs"
              className="text-white/60 hover:text-white text-sm font-bold underline underline-offset-8 transition-colors"
           >
              Send a general application →
           </a>
        </div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
