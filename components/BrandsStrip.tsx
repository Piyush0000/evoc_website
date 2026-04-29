'use client';

import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';

export default function BrandsStrip() {
  const brands = [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => getPath(`/brands/brand-${i}.png`));
  return (
    <div id="brands" className="w-full py-12 overflow-hidden bg-transparent relative z-20">
      <div className="flex flex-col items-center mb-10">
        <span className="text-white/40 text-[15px] font-bold tracking-[0.3em] uppercase">
          Trusted by 100+ high-growth brands
        </span>
      </div>
      
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 md:gap-24"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
        >
          {/* Double the brands for seamless loop */}
          {[...brands, ...brands].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={logo} 
                alt="Brand logo" 
                loading="lazy"
                decoding="async"
                className="h-8 md:h-12 w-auto object-contain max-w-[120px] brightness-0 invert"
                width={120}
                height={48}
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
