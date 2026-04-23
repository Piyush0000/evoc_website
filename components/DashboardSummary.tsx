import { TrendingUp, Clock, AlertCircle, Hourglass, RotateCcw } from 'lucide-react';

export default function DashboardSummary() {
  const stats = [
    { label: 'OVERDUE', value: '01', icon: Clock },
    { label: 'EXCEPTIONS', value: '08', icon: AlertCircle },
    { label: 'LAPSED', value: '33', icon: Hourglass },
    { label: 'RETURNS', value: '26', icon: RotateCcw },
  ];

  return (
    <div className="flex w-full">
      
      {/* Logistics Index Block (Larger) */}
      <div className="w-[35%] px-8 py-7 border-r border-gray-100 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
            <TrendingUp size={16} className="text-[#1E3BFF]" />
          </div>
        </div>
        <div className="text-[11px] font-bold text-gray-400 tracking-[0.1em] uppercase mb-1">LOGISTICS INDEX</div>
        <div className="text-[15px] font-bold text-gray-900 mb-6">Performance Rating</div>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="text-[56px] font-bold text-gray-900 tabular-nums leading-none">92.4</div>
          <div className="flex items-center gap-1 bg-blue-50 text-[#1E3BFF] text-[12px] px-2 py-1 rounded-md font-bold">
            <TrendingUp size={12} /> 3.2
          </div>
        </div>
        
        <p className="text-[13px] text-gray-400 leading-relaxed font-medium">
          System-wide success rate calculated over the last 1,428 fulfillment cycles.
        </p>
      </div>

      {/* 4 Stat Blocks */}
      <div className="flex-1 flex">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div 
              key={stat.label} 
              className={`flex-1 px-4 py-7 flex flex-col items-center justify-center text-center ${
                index !== stats.length - 1 ? 'border-r border-gray-100' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center mb-10">
                <Icon size={14} className="text-gray-400" />
              </div>
              <div className="text-[42px] font-bold text-gray-900 tabular-nums mb-2 leading-none">{stat.value}</div>
              <div className="text-[11px] text-gray-400 tracking-[0.1em] uppercase font-bold">{stat.label}</div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
