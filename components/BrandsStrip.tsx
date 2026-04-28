'use client';

import { motion } from 'framer-motion';

const brands = Array.from({ length: 17 }, (_, i) => `/brands/brand-${i + 1}.png`);

export default function BrandsStrip() {
  return (
    <div className="w-full py-12 overflow-hidden bg-transparent relative z-20">
      <div className="flex flex-col items-center mb-8">
        <span className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
          Trusted by 100+ high-growth brands
        </span>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24"
          animate={{ x: [0, -1920] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear"
            }
          }}
        >
          {/* Double the brands for seamless loop */}
          {[...brands, ...brands].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-30 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={logo} 
                alt="Brand logo" 
                className="h-8 md:h-12 w-auto object-contain max-w-[120px] brightness-0 invert"
              />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </div>
  );
}
