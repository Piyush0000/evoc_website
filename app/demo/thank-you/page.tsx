'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
} from 'lucide-react';

import BrandVideoEmbed from '@/components/BrandVideoEmbed';
import FooterSection from '@/components/FooterSection';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const rawName = searchParams.get('name') || '';
  const rawPhone = searchParams.get('phone') || '';

  const cleanName = rawName.trim();
  const cleanPhone = rawPhone.replace(/\D/g, '').slice(-10);

  const whatsappMessage = encodeURIComponent(
    `Hi Evoke Labs team! I just booked a demo${
      cleanName ? ` for ${cleanName}` : ''
    }. I would love to connect and discuss scaling my e-commerce business.`
  );

  return (
    <div className="min-h-screen max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-20 relative z-20">
      {/* Hero Badge & Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#183EEB]/15 border border-[#183EEB]/30 text-[#6085ff] text-xs font-bold tracking-wider uppercase mb-5 shadow-lg shadow-blue-900/20">
          <CheckCircle2 className="w-4 h-4 text-[#183EEB]" />
          Demo Booking Confirmed
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-[1.08] text-white">
          Thank you{cleanName ? `, ${cleanName}` : ''}!
        </h1>

        <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal">
          We&apos;ve registered your demo booking. Our growth specialist will connect with you on{' '}
          {cleanPhone ? (
            <span className="font-semibold text-white font-mono bg-white/[0.06] px-2 py-0.5 rounded-md border border-white/10">
              +91 {cleanPhone}
            </span>
          ) : (
            <span className="font-semibold text-white">your registered phone number</span>
          )}{' '}
          within 24 hours to schedule your personalized walkthrough.
        </p>
      </motion.div>

      {/* Brand Video Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto mb-14"
      >
        <div className="bg-[#0c0d12]/90 border border-white/10 rounded-3xl p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#183EEB] to-transparent" />

          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#6085ff]" />
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                Brand Briefing &amp; Ecosystem Tour
              </span>
            </div>
            <span className="text-[11px] text-white/40 hidden sm:inline-block">
              2 Min Watch
            </span>
          </div>

          {/* Embedded YouTube Player */}
          <BrandVideoEmbed autoplay={false} />

          <p className="text-xs text-white/50 text-center mt-4 leading-relaxed">
            While we prepare your slot, watch how Evoke Labs empowers e-commerce brands with AI calling agents, 1-click checkout, and automated operations.
          </p>
        </div>
      </motion.div>

      {/* What Happens Next - 3 Steps Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl mx-auto mb-12"
      >
        <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 text-center mb-6">
          What Happens Next
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#183EEB]/20 border border-[#183EEB]/40 flex items-center justify-center text-[#6085ff] text-xs font-bold mb-3">
              1
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">Profile Review</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              We audit your product category and channel details to curate relevant growth insights.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#183EEB]/20 border border-[#183EEB]/40 flex items-center justify-center text-[#6085ff] text-xs font-bold mb-3">
              2
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">WhatsApp Connect</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              You will receive a meeting link and quick confirmation via WhatsApp &amp; Call.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-[#183EEB]/20 border border-[#183EEB]/40 flex items-center justify-center text-[#6085ff] text-xs font-bold mb-3">
              3
            </div>
            <h4 className="text-sm font-bold text-white mb-1.5">1-on-1 Walkthrough</h4>
            <p className="text-xs text-white/50 leading-relaxed">
              A customized live demonstration showing exactly how our tech unlocks your brand revenue.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
      >
        <a
          href={`https://wa.me/918465794200?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#22bf5b] text-black font-bold py-3.5 px-6 rounded-xl transition-all shadow-[0_10px_30px_rgba(37,211,102,0.25)] text-sm"
        >
          <MessageCircle className="w-4 h-4 fill-black" />
          Chat on WhatsApp
        </a>

        <Link
          href="/"
          className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-medium py-3.5 px-6 rounded-xl transition-all text-sm"
        >
          Back to Home
          <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="flex items-center justify-center gap-2 text-white/30 text-[10px] mt-10 uppercase tracking-widest font-bold">
        <ShieldCheck className="w-3.5 h-3.5 text-[#183EEB]" />
        Your Information Is Secure • No Spam Guarantee
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <main
      className="bg-black min-h-screen w-full text-white selection:bg-[#183EEB]/30 overflow-x-clip relative font-sans"
      style={{ overflowX: 'clip' }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[550px] bg-[#183EEB]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Top Left Navigation Link */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-medium group px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-white/40 text-sm">
            Loading Thank You details...
          </div>
        }
      >
        <ThankYouContent />
      </Suspense>

      <FooterSection />
    </main>
  );
}

