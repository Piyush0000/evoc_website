import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DashboardReveal from '@/components/DashboardReveal';
import BrandsStrip from '@/components/BrandsStrip';
import ProblemSolution from '@/components/ProblemSolution';
import CoreFeatures from '@/components/CoreFeatures';
import SimplifiedSetup from '@/components/SimplifiedSetup';
import PricingSection from '@/components/PricingSection';
import OrdersStatSection from '@/components/OrdersStatSection';
import ImpactSection from '@/components/ImpactSection';
import ReviewsSection from '@/components/ReviewsSection';
import FeaturedOn from '@/components/FeaturedOn';
import FoundersSection from '@/components/FoundersSection';
import FooterSection from '@/components/FooterSection';


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
      <div className="-mt-20 md:mt-0 relative z-20">
        <DashboardReveal />
      </div>

      {/* Brands Strip */}
      <div className="pt-20 pb-10">
        <BrandsStrip />
      </div>

      {/* Problem vs Solution Section */}
      <ProblemSolution />

      {/* Core Features Section */}
      <CoreFeatures />

      {/* Simplified Setup System */}
      <SimplifiedSetup />

      {/* Success-Based Pricing Section */}
      <PricingSection />

      {/* Cinematic Orders Stat Section */}
      <OrdersStatSection />

      {/* Impact We Create Section */}
      <ImpactSection />

      {/* Reviews / Testimonials Section (Moved to Footer) */}
      {/* <ReviewsSection /> */}

      {/* Featured On Section */}
      <FeaturedOn />

      {/* Founders Section */}
      <FoundersSection />

      {/* Footer / Contact Section */}
      <FooterSection />
    </main>
  );
}
