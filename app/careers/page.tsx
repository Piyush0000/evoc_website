'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Rocket, Users, Target, ShieldCheck, Mail, Briefcase, Sparkles, MapPin, Clock } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';

export default function CareersPage() {
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
        <div className="flex justify-between items-center mb-24">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Careers at Evoc Labs</div>
        </div>

        {/* Hero Section - More Refined Scale */}
        <div className="max-w-3xl mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
              Help us build the <span className="text-blue-500">Operating System</span> for Indian E-commerce.
            </h1>
            <p className="text-white/40 text-base md:text-lg leading-relaxed font-medium max-w-xl">
              We're a team of engineers, designers, and growth experts building the technology that scales D2C brands. Join us in shaping the future of commerce.
            </p>
          </motion.div>
        </div>

        {/* Why EVOC Section */}
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

        {/* About Evoc Section - Integrated */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
           <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About <span className="text-blue-500">Evoc Labs</span></h2>
              <div className="space-y-4 text-white/50 text-sm md:text-base leading-relaxed">
                 <p>
                    Evoc Labs is a B2B SaaS platform built for eCommerce sellers in India. Our goal is to create a unified ecosystem where merchants can manage their entire online business from a single dashboard.
                 </p>
                 <p>
                    From store creation and ad tracking to logistics and analytics, we eliminate fragmented tools and simplify how modern brands scale online profitably.
                 </p>
              </div>
           </div>
           <div className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 group">
              <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                 alt="Collaboration" 
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-white font-bold text-lg italic font-serif">Scaling D2C with Technology</p>
              </div>
           </div>
        </div>

        {/* Open Positions - Focused & Clean */}
        <div id="open-positions" className="mb-20">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Open <span className="text-blue-500">Positions</span></h2>
              <p className="text-white/30 text-sm font-medium">Join our mission-driven team.</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] hover:border-blue-500/30 transition-all group"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <h3 className="text-xl md:text-2xl font-bold">Full Stack Developer</h3>
                    <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] font-bold uppercase tracking-widest rounded-md border border-blue-500/20">
                      Internship
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5" />
                      Remote
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      4 Months
                    </div>
                  </div>
                </div>
                
                <a 
                  href="mailto:careers@evoclabs.com?subject=Application - Full Stack Developer Internship"
                  className="bg-white text-black font-bold px-8 py-3.5 rounded-xl hover:bg-blue-500 hover:text-white transition-all text-sm shadow-xl"
                >
                  Apply for this role
                </a>
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-white/40">
                <div className="space-y-4">
                  <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">What you'll do</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Develop core platform features using Next.js & Node.js
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Integrate AI-driven automation & logistics APIs
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-white/60 font-bold uppercase tracking-widest text-[10px]">What you'll need</p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Hands-on experience with React/Next.js ecosystem
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      Execution-driven mindset & startup hunger
                    </li>
                  </ul>
                </div>
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

      <FooterSection />
    </main>
  );
}
