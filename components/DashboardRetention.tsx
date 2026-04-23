import { TrendingUp, ArrowUpRight, Star } from 'lucide-react';

export default function DashboardRetention() {
  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Retention Card */}
      <div className="bg-[#0B0B12] rounded-xl p-6 text-white flex-1 flex flex-col relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp size={80} strokeWidth={1} />
        </div>
        
        <div className="relative z-10">
          <div className="text-[11px] text-white/40 tracking-[0.1em] uppercase font-bold mb-4">RETENTION</div>
          <div className="flex items-center gap-3 mb-1">
            <div className="text-[44px] font-bold tabular-nums tracking-tighter">1.21x</div>
            <div className="bg-white/10 p-1.5 rounded-lg">
               <TrendingUp size={20} className="text-white/60" />
            </div>
          </div>
          <div className="text-[13px] text-white/50 mb-8">Average Purchase Frequency</div>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
          <div className="text-[11px] text-white/40 tracking-[0.1em] uppercase font-bold">LOYALTY METRIC</div>
          <ArrowUpRight size={18} className="text-white/30" />
        </div>
      </div>

      {/* NPS Card */}
      <div className="bg-white border border-gray-100 rounded-xl p-6 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <div className="text-[11px] text-gray-400 tracking-[0.1em] uppercase font-bold">NPS SCORE</div>
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2.5">
               <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
            </svg>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-[32px] font-bold text-gray-900 tabular-nums">3.4</div>
          <div className="flex gap-1">
            {[1, 2, 3].map((i) => (
              <Star key={i} size={18} fill="#1E3BFF" className="text-[#1E3BFF]" />
            ))}
            {[1, 2].map((i) => (
              <Star key={i} size={18} className="text-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
