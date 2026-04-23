'use client';

import { motion } from 'framer-motion';
import DashboardSidebar from './DashboardSidebar';
import DashboardSummary from './DashboardSummary';
import DashboardDailyPulse from './DashboardDailyPulse';
import DashboardRetention from './DashboardRetention';

export default function DashboardMockup() {
  return (
    /*
     * 90% width (5% margin each side), full dashboard height 780px.
     * Top-only rounded corners + blue top-edge glow.
     * No animation delay — it's already positioned by the parent.
     */
    <div className="w-full px-[5%]">

      {/* Blue glowing top-border gradient wrapper */}
      <motion.div
        className="w-full rounded-[16px]"
        style={{
          padding: '1.5px',
          background:
            'linear-gradient(180deg, rgba(55,88,255,0.85) 0%, rgba(30,59,255,0.40) 50%, rgba(30,59,255,0.15) 100%)',
          boxShadow:
            '0 -12px 50px rgba(30,59,255,0.24), 0 0 80px rgba(30,59,255,0.10)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
      >
        {/* White inner panel — only top corners rounded */}
        <div
          className="bg-white rounded-[15px] overflow-hidden flex flex-col md:flex-row"
          style={{ height: '720px' }}
        >
          {/* Sidebar */}
          <div className="hidden md:flex flex-shrink-0">
            <DashboardSidebar />
          </div>

          {/* Main content */}
          <div className="flex-1 bg-[#FCFDFF] p-5 flex flex-col gap-4 overflow-hidden relative">

            {/* Summary */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex-shrink-0">
              <DashboardSummary />
            </div>

            {/* Pulse + Retention */}
            <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-4">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 overflow-hidden">
                <DashboardDailyPulse />
              </div>
              <DashboardRetention />
            </div>

            {/* "N" avatar chip */}
            <div className="absolute bottom-4 right-4 w-9 h-9 bg-neutral-900 rounded-full flex items-center justify-center shadow-lg z-10">
              <span className="text-white text-[13px] font-bold">N</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
