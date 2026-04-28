'use client';

import React from 'react';
import { motion } from 'framer-motion';

const publications = [
  { 
    name: 'Google News', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center overflow-hidden">
          <div className="grid grid-cols-2 grid-rows-2 w-full h-full p-0.5 gap-0.5">
            <div className="bg-[#4285F4]"></div>
            <div className="bg-[#34A853]"></div>
            <div className="bg-[#FBBC05]"></div>
            <div className="bg-[#EA4335]"></div>
          </div>
        </div>
        <span className="text-white font-medium tracking-tight">Google News</span>
      </div>
    )
  },
  { 
    name: 'Zee News', 
    logo: (
      <div className="flex items-center">
        <span className="text-white font-black text-2xl tracking-tighter">ZEE</span>
        <span className="bg-[#ed1c24] text-white font-bold px-1.5 ml-1 text-sm rounded-sm">NEWS</span>
      </div>
    )
  },
  { 
    name: 'Business Standard', 
    logo: (
      <div className="flex flex-col items-center leading-none">
        <span className="text-white font-serif italic text-lg tracking-tight border-b border-white/20 pb-0.5 mb-0.5">THE</span>
        <span className="text-white font-serif font-bold text-xl tracking-tighter uppercase">Business Standard</span>
      </div>
    )
  },
  { 
    name: 'TOI', 
    logo: (
      <div className="flex items-center">
        <div className="bg-[#ed1c24] text-white font-serif font-black text-3xl px-2 italic tracking-tighter">TOI</div>
      </div>
    )
  },
  { 
    name: 'Hindustan Times', 
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-[#00aeef] flex items-center justify-center">
          <span className="text-[#00aeef] font-serif font-bold text-xl italic">HT</span>
        </div>
        <span className="text-white font-serif font-bold text-lg tracking-tight">Hindustan Times</span>
      </div>
    )
  },
  { 
    name: 'The Hindu', 
    logo: (
      <div className="flex flex-col items-center">
        <span className="text-white font-serif font-black text-2xl tracking-tighter uppercase">THE <span className="text-white/40 font-normal">|</span> HINDU</span>
      </div>
    )
  }
];

export default function FeaturedOn() {
  return (
    <section className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center italic text-white/40 mb-16 uppercase tracking-[0.2em]"
          style={{ 
            fontFamily: 'var(--font-instrument), serif', 
            fontSize: '14px' 
          }}
        >
          Featured On
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-16 md:gap-x-24 opacity-60 hover:opacity-100 transition-opacity duration-700">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 scale-90 md:scale-100"
            >
              {pub.logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
