import {
  LayoutGrid,
  BarChart3,
  Store,
  ShoppingBag,
  Megaphone,
  Truck,
  LineChart,
  Zap,
  Puzzle,
  Wallet,
  Settings,
  LifeBuoy,
  Sun
} from 'lucide-react';

export default function DashboardSidebar() {
  const navItems = [
    { icon: LayoutGrid, label: 'Summary', active: true },
    { icon: BarChart3, label: 'Dashboard', rightElement: <span className="text-brand-blue text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-semibold bg-brand-blue/10">Live</span> },
    { icon: Store, label: 'Storefront', rightElement: <span className="text-[12px] text-white/30">›</span> },
    { icon: ShoppingBag, label: 'Sales', rightElement: <span className="text-[12px] text-white/30">›</span> },
    { icon: Megaphone, label: 'Marketing', rightElement: <span className="text-[12px] text-white/30">›</span> },
    { icon: Truck, label: 'Logistics', rightElement: <span className="text-[12px] text-white/30">›</span> },
    { icon: LineChart, label: 'Analytics' },
    { icon: Zap, label: 'Automation', rightElement: <span className="bg-blue-500/10 text-blue-400 text-[9px] px-1.5 py-0.5 rounded-full uppercase tracking-wider font-semibold border border-blue-500/20">Pro</span> },
    { icon: Puzzle, label: 'Integrations' },
    { icon: Wallet, label: 'Finance' },
    { icon: Settings, label: 'Settings' },
    { icon: LifeBuoy, label: 'Support' },
  ];

  return (
    <aside className="w-[220px] h-full bg-[#0D0D14] flex flex-col p-4 border-r border-white/5">
      {/* Brand Block */}
      <div className="flex items-center gap-3 px-2 py-4 mb-6">
        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center">
          <img src="/logo.png" alt="" className="w-5 h-5 object-contain brightness-200 grayscale" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[14px] font-bold text-white leading-tight">Toys</div>
          <div className="text-[9px] text-white/40 tracking-widest uppercase truncate">TOYS.ORBIT360.SHOP</div>
        </div>
        <div className="text-white/30 text-[10px]">▼</div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] transition-all cursor-pointer
                ${item.active 
                  ? 'bg-white text-black font-semibold' 
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
            >
              <Icon size={16} className={item.active ? 'text-black' : 'text-white/40'} />
              <span className="flex-1">{item.label}</span>
              {item.rightElement && <div>{item.rightElement}</div>}
            </div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className="mt-auto pt-6 space-y-4">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer group">
          <Sun size={16} className="text-white/40 group-hover:text-white" />
          <div className="flex-1">
            <div className="text-[13px] text-white">Light Mode</div>
            <div className="text-[9px] text-white/30 uppercase tracking-wider">DARK VIEW</div>
          </div>
        </div>

        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 cursor-pointer group">
          <div className="w-7 h-7 bg-[#1E3BFF] rounded-lg flex items-center justify-center text-[11px] font-bold text-white shadow-[0_0_10px_rgba(30,59,255,0.3)]">
            X
          </div>
          <div className="flex-1">
            <div className="text-[13px] text-white font-medium">xyz</div>
            <div className="text-[9px] text-white/30 uppercase tracking-wider">MERCHANT</div>
          </div>
          <div className="text-white/20 text-[10px]">↕</div>
        </div>
      </div>
    </aside>
  );
}
