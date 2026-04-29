'use client';

import { motion } from 'framer-motion';
import { getPath } from '@/lib/paths';

export default function DashboardMockup() {
  return (
    <div className="w-full">
      {/* Blue glowing top-border gradient wrapper */}
      <motion.div
        className="w-full rounded-[12px] md:rounded-[24px] overflow-hidden p-[1px] md:p-[1.5px]"
        style={{
          background:
            'linear-gradient(180deg, rgba(55,88,255,0.85) 0%, rgba(30,59,255,0.40) 50%, rgba(30,59,255,0.15) 100%)',
          boxShadow:
            '0 -12px 50px rgba(30,59,255,0.24), 0 0 80px rgba(30,59,255,0.10)',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="relative bg-white rounded-[11px] md:rounded-[23px] overflow-hidden shadow-2xl">
          {/* Main Dashboard Image */}
          <img 
            src={getPath('/dashboard-mockup.jpg')} 
            alt="Dashboard Mockup" 
            className="w-full h-auto block object-cover"
            loading="lazy"
            width={1200}
            height={600}
          />
          
          {/* Subtle overlay to enhance contrast if needed */}
          <div className="absolute inset-0 pointer-events-none border border-black/5 rounded-[11px] md:rounded-[23px]" />
        </div>
      </motion.div>
    </div>
  );
}
