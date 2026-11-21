'use client';

import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';

export default function BrandsStrip() {
  const brands = [
    { name: 'Tarayu Ayurveda', file: 'tarayu' },
    { name: 'Nevira', file: 'nevira' },
    { name: 'Niush Care', file: 'niush-care' },
    { name: 'ZepperX', file: 'zepperx' },
    { name: 'Vogue 7', file: 'vogue7' },
    { name: 'Y', file: 'y-brand' },
    { name: 'Pistachios', file: 'pistachios' },
    { name: 'Garden Nest', file: 'garden-nest' },
    { name: 'Sweatslim Fitness', file: 'sweatslim' },
  ].map((b) => ({ ...b, src: getPath(`/brands/${b.file}.png`) }));
  return (
    <div id="brands" className="w-full py-12 overflow-hidden bg-transparent relative z-20">
      <div className="flex flex-col items-center mb-10 px-6">
        {/* pl offsets the trailing letter-spacing so wrapped lines stay visually centered */}
        <span className="block text-center text-white/40 text-[12px] sm:text-[15px] font-bold tracking-[0.25em] sm:tracking-[0.3em] pl-[0.25em] sm:pl-[0.3em] uppercase leading-relaxed">
          Trusted by 500+ high-growth brands
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
          {[...brands, ...brands].map((brand, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500"
            >
              <img 
                src={brand.src}
                alt={brand.name}
                loading="lazy"
                decoding="async"
                className="h-8 md:h-12 w-auto object-contain max-w-[140px] md:max-w-[180px] brightness-0 invert"
                width={180}
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
