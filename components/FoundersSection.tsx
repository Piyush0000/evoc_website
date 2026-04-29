'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
  </svg>
);

const FounderCard = ({ 
  name, 
  role, 
  image = null,
  linkedin = "#"
}: { 
  name: string, 
  role: string, 
  image?: string | null,
  linkedin?: string
}) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="relative w-full max-w-[320px] aspect-[4/5] rounded-[32px] overflow-hidden bg-[#0A0A0A] group shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(24,62,235,0.3)] border border-white/5"
  >
    {/* Photo Area */}
    <div className="absolute inset-0 w-full h-full bg-black">
      {image ? (
        <img 
          src={image} 
          alt={name} 
          loading="lazy"
          decoding="async"
          width={320}
          height={400}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-16 h-16 border-2 border-white/5 rounded-full opacity-10" />
        </div>
      )}
    </div>

    {/* Info Overlay - Glassmorphism */}
    <div className="absolute bottom-0 left-0 right-0 py-6 bg-gradient-to-t from-[#183EEB]/90 to-transparent backdrop-blur-[2px] flex flex-col items-center justify-center text-white px-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wider mb-0.5 drop-shadow-md">
        {name}
      </h3>
      <p className="text-xs md:text-sm font-medium opacity-90 lowercase tracking-wide mb-4">
        {role}
      </p>
      
      {/* Social Connect */}
      <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <a 
          href={linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300"
        >
          <LinkedinIcon className="w-4 h-4 text-white" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default function FoundersSection() {
  return (
    <section className="bg-black py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center italic text-white mb-16"
          style={{ 
            fontFamily: 'var(--font-instrument), serif', 
            fontSize: 'clamp(32px, 4vw, 48px)' 
          }}
        >
          Founders
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center w-full">
          <FounderCard 
            name="NISHANT RAJ" 
            role="founder and CEO"
            image={getPath('/images/founders/nishant.jpg')}
            linkedin="https://www.linkedin.com/in/nishant-raj-1ab9a9341/"
          />
          <FounderCard 
            name="PIYUSH RATHORE" 
            role="co-founder and CTO"
            image={getPath('/images/founders/piyush.jpg')}
            linkedin="https://www.linkedin.com/in/piyussshhh/"
          />
        </div>
      </div>
    </section>
  );
}
