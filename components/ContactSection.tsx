'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center italic text-white mb-20"
          style={{ 
            fontFamily: 'var(--font-instrument), serif', 
            fontSize: 'clamp(32px, 4vw, 48px)' 
          }}
        >
          Book a free demo
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              How can we <span className="text-blue-500 italic font-medium">help</span> you
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
              Don&apos;t hesitate to reach out via email -<br />
              <span className="text-white font-medium">admin@evoc.ai</span>
            </p>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="" 
                  className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="" 
                    className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="" 
                    className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="" 
                  className="w-full bg-[#1A1A1A] border-none rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-blue-900/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
