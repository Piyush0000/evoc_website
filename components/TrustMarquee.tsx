'use client';

import Image from 'next/image';

const brands = [
  { name: 'Binnis Wardrobe', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/binnis_wardrobe.png' },
  { name: 'Cotton Fab', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/cotton_fab.png' },
  { name: 'Fashion Jewel', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/fashion_jewel.png' },
  { name: 'Nidhi Fashion', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/nidhi_fashion.png' },
  { name: 'Fair Deal Trader', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/fair_deal_trader.png' },
  { name: 'Homerz', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/homerz.png' },
  { name: 'Fargo', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/fargo.png' },
  { name: 'Gopi Prem', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/gopi_prem.png' },
  { name: 'Jerseykart', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/jerseykart.png' },
  { name: 'MGSV Brand', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/mgsv_brand.png' },
  { name: 'Indian Linen Saree', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/indianlinensaree.png' },
  { name: 'Indian Decor', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/indian_decor.png' },
  { name: 'Jeweltoz', logo: 'https://d2z53scj8veve3.cloudfront.net/shopdeck-home/trusted-by-logos/jeweltoz.png' },
];

export default function TrustMarquee() {
  // Duplicate to create seamless loop
  const items = [...brands, ...brands];

  return (
    <section className="w-full bg-black pt-24 pb-8 overflow-hidden border-y border-white/[0.04]">
      {/* Label */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-center gap-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="text-[13px] font-medium text-white/30 tracking-[0.4em] uppercase whitespace-nowrap">
            Powering 5,000+ High-Growth Brands
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-64 z-10"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-64 z-10"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }} />

        <div className="marquee-track py-6 items-center">
          {items.map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center mx-16 whitespace-nowrap group"
            >
              <div className="relative h-12 w-32 grayscale brightness-[2] opacity-40 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-700 ease-out">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
