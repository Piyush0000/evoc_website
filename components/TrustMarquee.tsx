'use client';

const brands = [
  'Mamaearth', 'Boat', 'Mensa Brands', 'The Whole Truth',
  'Beardo', 'WOW Skin Science', 'Zivame', 'Lenskart',
  'Nykaa Fashion', 'Pee Safe', 'MCaffeine', 'Noise',
];

export default function TrustMarquee() {
  // Duplicate to create seamless loop
  const items = [...brands, ...brands];

  return (
    <section className="w-full bg-black py-14 overflow-hidden border-t border-white/[0.04]">
      {/* Label */}
      <p className="text-center text-[13px] font-semibold text-white/35 tracking-[0.18em] uppercase mb-10">
        Trusted by 500+ brands
      </p>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }} />

        <div className="marquee-track">
          {items.map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-10 mx-8 whitespace-nowrap"
            >
              {/* Logo dot separator */}
              <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
              <span className="text-[15px] font-semibold text-white/30 tracking-wide hover:text-white/60 transition-colors cursor-default select-none">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
