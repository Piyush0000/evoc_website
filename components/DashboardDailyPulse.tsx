import { Activity } from 'lucide-react';

export default function DashboardDailyPulse() {
  return (
    <div className="flex flex-col h-full">
      {/* Header Row */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-3">
          <Activity size={22} className="text-[#1E3BFF]" />
          <span className="text-[18px] font-bold text-gray-900">Daily Pulse</span>
        </div>
        <div className="bg-gray-50 px-3 py-1 rounded-md text-[11px] font-bold text-gray-500 border border-gray-100">Real-time</div>
      </div>

      {/* Body Stats */}
      <div className="grid grid-cols-3 gap-8 mb-16">
        <div>
          <div className="text-[11px] text-gray-400 tracking-[0.1em] uppercase font-bold mb-3">NEW ORDERS</div>
          <div className="text-[48px] font-bold text-gray-900 tabular-nums leading-none">2</div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 tracking-[0.1em] uppercase font-bold mb-3">APPROVED</div>
          <div className="text-[48px] font-bold text-[#1E3BFF] tabular-nums leading-none">1</div>
        </div>
        <div>
          <div className="text-[11px] text-gray-400 tracking-[0.1em] uppercase font-bold mb-3">GROSS (EST)</div>
          <div className="text-[48px] font-bold text-gray-900 tabular-nums leading-none">₹2,598</div>
        </div>
      </div>

      {/* Bottom Row - Ad Networks */}
      <div className="mt-auto grid grid-cols-2 gap-12 pt-8 border-t border-gray-50">
        
        {/* Meta Network */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 flex items-center justify-center">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16L15 15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="#1877F2"/>
               </svg>
            </div>
            <span className="text-[14px] font-bold text-gray-900">Meta Network</span>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-[10px] text-gray-400 tracking-wider uppercase font-bold mb-1">AD SPEND</div>
              <div className="text-[14px] font-bold text-gray-400">—</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 tracking-wider uppercase font-bold mb-1">CAC</div>
              <div className="text-[14px] font-bold text-gray-400">—</div>
            </div>
          </div>
        </div>

        {/* Google Ads */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.73 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.81 15.72 17.59V20.34H19.28C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.28 20.34L15.72 17.59C14.74 18.25 13.48 18.66 12 18.66C9.14 18.66 6.71 16.73 5.84 14.14H2.17V16.99C3.98 20.59 7.68 23 12 23Z" fill="#34A853"/>
                <path d="M5.84 14.14C5.62 13.48 5.49 12.76 5.49 12C5.49 11.24 5.62 10.52 5.84 9.86V7.01H2.17C1.43 8.49 1 10.19 1 12C1 13.81 1.43 15.51 2.17 16.99L5.84 14.14Z" fill="#FBBC05"/>
                <path d="M12 5.34C13.62 5.34 15.06 5.9 16.2 6.98L19.35 3.83C17.46 2.07 14.97 1 12 1C7.68 1 3.98 3.41 2.17 7.01L5.84 9.86C6.71 7.27 9.14 5.34 12 5.34Z" fill="#EA4335"/>
              </svg>
            </div>
            <span className="text-[14px] font-bold text-gray-900">Google Ads</span>
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-[10px] text-gray-400 tracking-wider uppercase font-bold mb-1">AD SPEND</div>
              <div className="text-[14px] font-bold text-gray-400">—</div>
            </div>
            <div>
              <div className="text-[10px] text-gray-400 tracking-wider uppercase font-bold mb-1">CAC</div>
              <div className="text-[14px] font-bold text-gray-400">—</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
