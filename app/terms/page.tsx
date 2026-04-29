'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, FileText } from 'lucide-react';
import { getPath } from '@/lib/paths';

export default function TermsPage() {
  return (
    <main className="bg-black min-h-screen text-white/90 selection:bg-[#183EEB]/30 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#183EEB] hover:text-white transition-colors text-sm font-medium mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <header className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#183EEB]/10 rounded-2xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#183EEB]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Terms of <span className="text-[#183EEB]">Service</span></h1>
            </div>
            <p className="text-white/40 font-medium italic">Last updated: April 2026</p>
          </header>

          <div className="space-y-12 text-sm md:text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Acceptance of Terms</h2>
              <p className="text-white/60">
                By accessing or using the Evoc Labs platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not access or use our services.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. Use of Services</h2>
              <p className="text-white/60">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. Intellectual Property</h2>
              <p className="text-white/60">
                The Evoc Labs platform and its original content, features, and functionality are owned by Evoc Technologies Pvt. Ltd. and are protected by international copyright, trademark, patent, and other intellectual property laws.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Termination</h2>
              <p className="text-white/60">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
