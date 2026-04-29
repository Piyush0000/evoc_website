'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield } from 'lucide-react';
import { getPath } from '@/lib/paths';

export default function PrivacyPage() {
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
                <Shield className="w-6 h-6 text-[#183EEB]" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Privacy <span className="text-[#183EEB]">Policy</span></h1>
            </div>
            <p className="text-white/40 font-medium italic">Last updated: April 2026</p>
          </header>

          <div className="space-y-12 text-sm md:text-base leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">1. Information We Collect</h2>
              <p className="text-white/60">
                We collect information you provide directly to us when you request a demo, create an account, or communicate with us. This may include your name, email address, phone number, and business details.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">2. How We Use Your Information</h2>
              <p className="text-white/60">
                We use the information we collect to provide, maintain, and improve our services, to communicate with you about your demo request, and to develop new features and services for the Evoc Labs ecosystem.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">3. Data Security</h2>
              <p className="text-white/60">
                We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction. Your data is handled with the highest level of confidentiality.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">4. Contact Us</h2>
              <p className="text-white/60">
                If you have any questions about this Privacy Policy, please contact us at <span className="text-[#183EEB]">contact@evoclabs.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
