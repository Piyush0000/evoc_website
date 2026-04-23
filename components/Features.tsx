import ScrollReveal from './ScrollReveal';

const features = [
  {
    tag: '01',
    title: 'Unified Stack',
    description:
      'Your store, ads, logistics, and finance — all connected. No more toggling between 10 different tools. One dashboard, every signal.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="#4f7fff" strokeWidth="1.5" />
        <rect x="16" y="2" width="10" height="10" rx="2" stroke="#4f7fff" strokeWidth="1.5" />
        <rect x="2" y="16" width="10" height="10" rx="2" stroke="#4f7fff" strokeWidth="1.5" />
        <rect x="16" y="16" width="10" height="10" rx="2" stroke="#4f7fff" strokeWidth="1.5" />
        <path d="M12 7h4M7 12v4M21 12v4M12 21h4" stroke="#4f7fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: '02',
    title: 'AI-Native',
    description:
      'Predictive reorder alerts, automated ad budgets, and AI-written product descriptions. Built-in intelligence that actually saves you hours.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="#4f7fff" strokeWidth="1.5" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="#4f7fff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.93 5.93l2.83 2.83M19.24 19.24l2.83 2.83M19.24 8.76l2.83-2.83M5.93 22.07l2.83-2.83" stroke="#4f7fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    tag: '03',
    title: 'Founder-First',
    description:
      'No enterprise contracts, no hidden fees. Flat pricing, human support, and a product roadmap shaped by the operators who use it every day.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="9" r="4" stroke="#4f7fff" strokeWidth="1.5" />
        <path d="M5 24c0-4.97 4.03-9 9-9s9 4.03 9 9" stroke="#4f7fff" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="w-full bg-black py-28 px-6" id="offering">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="text-[12px] font-bold tracking-[0.22em] uppercase text-[#4f7fff] mb-4 text-center">
            Why Evoc Labs
          </p>
          <h2 className="text-center font-bold text-white leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}>
            We Help You Scale.
          </h2>
          <p className="text-center text-white/45 font-medium mb-20 max-w-xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.3vw, 18px)' }}>
            Built for D2C brands that want to move fast without stitching together a dozen SaaS tools.
          </p>
        </ScrollReveal>

        {/* 3-card grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollReveal key={f.tag} delay={i * 120}>
              <div
                className="group relative rounded-2xl p-8 flex flex-col gap-6 border border-white/[0.06] bg-[#090914] hover:border-[#4f7fff]/30 transition-all duration-300 hover:bg-[#0a0a18]"
                style={{ boxShadow: '0 0 0 0 rgba(79,127,255,0)', }}
              >
                {/* Tag */}
                <span className="text-[11px] font-bold tracking-[0.18em] text-white/20 uppercase">
                  {f.tag}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#4f7fff]/8 border border-[#4f7fff]/15 flex items-center justify-center group-hover:bg-[#4f7fff]/12 transition-colors">
                  {f.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-[14px] text-white/45 leading-relaxed">{f.description}</p>
                </div>

                {/* Bottom arrow hint */}
                <div className="mt-auto pt-4">
                  <span className="text-[13px] text-[#4f7fff]/60 group-hover:text-[#4f7fff] transition-colors font-medium">
                    Learn more →
                  </span>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(79,127,255,0.04)' }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
