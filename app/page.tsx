import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DashboardReveal from '@/components/DashboardReveal';
import TrustMarquee from '@/components/TrustMarquee';
import Features from '@/components/Features';

export default function Home() {
  return (
    /*
     * overflow-x: clip instead of overflow-x: hidden.
     * clip does NOT create a new scroll container, so useScroll works correctly.
     * hidden would break framer-motion's scroll tracking.
     */
    <main className="bg-black text-white" style={{ overflowX: 'clip' }}>
      {/* Fixed navbar */}
      <Navbar />

      {/* Hero — 90vh so the dashboard section starts in the initial viewport */}
      <Hero />

      {/*
       * Pull dashboard UP into the hero viewport so it's partially visible
       * at page load (before any scrolling). As the user scrolls, the dashboard
       * continuously scales from 0.62 → 1.0.
       */}
      <div style={{ marginTop: '0px', position: 'relative', zIndex: 20 }}>
        <DashboardReveal />
      </div>

      {/* Trust Marquee */}
      <TrustMarquee />

      {/* Features */}
      <Features />

      {/* Footer spacer */}
      <div className="h-24 bg-black" />
    </main>
  );
}
