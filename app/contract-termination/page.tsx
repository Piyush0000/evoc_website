'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  Clock,
  Store,
  CheckCircle2,
  Trash2,
  UserX,
  FileX,
  Settings,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  LifeBuoy,
  Lock
} from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function ContractTerminationPage() {
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  const navItems = [
    { id: 'sec-1', label: '1. Data Deletion Request' },
    { id: 'sec-2', label: '2. Account Termination' },
    { id: 'sec-3', label: '3. Contract Termination', highlight: true },
    { id: 'sec-4', label: '4. Processing of Requests' },
    { id: 'sec-5', label: '5. Important Information' },
    { id: 'sec-6', label: '6. Submit a Request', highlight: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Data Deletion & Account Termination | EVOC Labs",
    "url": "https://www.evoclabs.com/contract-termination",
    "description": "Official EVOC Labs policy and procedure for submitting Data Deletion, Account Termination, and Contract Termination requests.",
    "datePublished": "2026-09-01",
    "dateModified": "2026-09-26",
    "publisher": {
      "@type": "Organization",
      "name": "EVOC Labs Pvt. Ltd.",
      "legalName": "EVOC Labs Pvt. Ltd.",
      "url": "https://www.evoclabs.com",
      "email": "contact@evoclabs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sitarganj Road, Jail Camp, Ward No. 5",
        "addressLocality": "U.S. Nagar",
        "addressRegion": "Uttarakhand",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans">
      {/* Schema.org JSON-LD for Automated Crawlers and Verification Platforms */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Ambient background glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-blue-600/[0.04] blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-10 md:pt-16 pb-20">

        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14 border-b border-white/5 pb-12"
        >
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Official Policy &amp; Procedure
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              Last Updated: September 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Store className="w-3.5 h-3.5 text-white/40" />
              EVOC Labs Pvt. Ltd.
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Data Deletion &amp; <span className="text-blue-500">Account Termination</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg max-w-3xl leading-relaxed">
            At EVOC Labs, we respect your privacy and provide users and clients with a clear process to request the deletion of their data and/or termination of their services or contract with EVOC Labs.
          </p>
        </motion.div>

        {/* Grid: Sticky Navigation (Desktop) + Parsable Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Quick Jump Table of Contents (Sticky on Desktop) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Table of Contents
              </h2>
              <span className="text-[11px] text-white/40">6 Sections</span>
            </div>

            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 text-xs custom-scrollbar">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-2 px-3 rounded-lg transition-all ${
                      item.highlight
                        ? isActive
                          ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500'
                          : 'text-blue-400/80 hover:text-blue-300 font-medium'
                        : isActive
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-white/50 hover:text-white/90 hover:bg-white/[0.02]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Support Portal Direct Access Box */}
            <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
              <div className="text-white/80 font-semibold text-xs flex items-center gap-1.5">
                <LifeBuoy className="w-4 h-4 text-blue-400" />
                Support Ticket Portal
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed">
                Registered clients and merchants can initiate deletion or termination directly via the authenticated support desk.
              </p>
              <a
                href="https://app.evoclabs.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:bg-blue-600/25 hover:text-blue-300 text-xs font-semibold transition-all"
              >
                Go to Support Portal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </aside>

          {/* Parsable Legal Content Sections */}
          <article className="lg:col-span-8 space-y-10 text-white/70 leading-relaxed text-sm md:text-base">

            {/* 1. DATA DELETION REQUEST */}
            <section
              id="sec-1"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">01</span>
                  1. Data Deletion Request
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <Trash2 className="w-3 h-3" />
                  Data Privacy
                </span>
              </div>

              <p className="text-white/80 leading-relaxed">
                If you wish to request deletion of your personal information, business information, account data, or other information associated with your EVOC Labs account, you can submit a Data Deletion Request through the EVOC Labs Support section.
              </p>

              {/* Step-by-Step Box */}
              <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
                <h3 className="text-sm md:text-base font-bold text-white flex items-center gap-2">
                  <Settings className="w-4 h-4 text-blue-400" />
                  To submit a request:
                </h3>
                <ol className="space-y-3 pl-1 text-xs md:text-sm text-white/75">
                  {[
                    "Log in to your EVOC Labs account.",
                    "Go to the Support section.",
                    "Raise a new support ticket.",
                    "Select the appropriate category for Data Deletion / Account Deletion.",
                    "Provide the relevant details required to identify your account and process the request."
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p>
                  Our team will review the request and process the deletion of eligible data in accordance with applicable laws, our agreements, and our data-retention requirements.
                </p>
                <div className="p-4 rounded-xl bg-white/[0.015] border border-white/5 text-white/60 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <p>
                    Certain information may be retained where required for legal, regulatory, accounting, security, fraud-prevention, or legitimate business purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. ACCOUNT TERMINATION */}
            <section
              id="sec-2"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">02</span>
                  2. Account Termination
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <UserX className="w-3 h-3" />
                  Account Management
                </span>
              </div>

              <p className="text-white/80 leading-relaxed">
                If you wish to terminate your EVOC Labs account or discontinue the services provided by EVOC Labs, you may submit an Account Termination Request through the EVOC Labs Support section.
              </p>

              <div className="p-4 sm:p-5 rounded-xl bg-blue-600/[0.04] border border-blue-500/20 text-xs md:text-sm text-white/80">
                <p className="leading-relaxed">
                  The request should be submitted by raising a support ticket and selecting <strong className="text-white font-semibold">Account Termination / Contract Termination</strong> as the relevant category.
                </p>
              </div>
            </section>

            {/* 3. CONTRACT TERMINATION */}
            <section
              id="sec-3"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">03</span>
                  3. Contract Termination
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <FileX className="w-3 h-3" />
                  Contractual Terms
                </span>
              </div>

              <p className="text-white/80 leading-relaxed">
                If you are a merchant, client, or business using EVOC Labs services under a service agreement or contract, you may request termination of the agreement by raising a ticket through the EVOC Labs Support section.
              </p>

              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p>
                  The termination request will be processed in accordance with the applicable terms and conditions of your agreement, including any applicable notice period, outstanding payments, obligations, or other contractual requirements.
                </p>
                <div className="p-4 rounded-xl bg-white/[0.015] border border-white/5 text-white/60 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <p>
                    Termination of a contract does not automatically require the immediate deletion of information that EVOC Labs is legally or contractually required to retain.
                  </p>
                </div>
              </div>
            </section>

            {/* 4. PROCESSING OF REQUESTS */}
            <section
              id="sec-4"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">04</span>
                  4. Processing of Requests
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <Lock className="w-3 h-3" />
                  Review &amp; Verification
                </span>
              </div>

              <p className="text-white/80 leading-relaxed">
                After receiving your request, EVOC Labs may review the account and verify the request to prevent unauthorized deletion or termination requests.
              </p>

              <div className="space-y-3 pt-1">
                <h3 className="text-sm md:text-base font-bold text-white">Once the request has been reviewed:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm">
                  {[
                    "Eligible data deletion requests will be processed accordingly.",
                    "Account termination requests will be processed in accordance with applicable terms.",
                    "Contract termination requests will be handled according to the relevant agreement.",
                    "Any applicable outstanding dues or contractual obligations may need to be settled before final termination."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-white/75">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 5. IMPORTANT INFORMATION */}
            <section
              id="sec-5"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">05</span>
                  5. Important Information
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  <AlertCircle className="w-3 h-3" />
                  Policy Distinction
                </span>
              </div>

              <div className="space-y-3 text-white/70 text-xs md:text-sm leading-relaxed">
                <p>
                  Data deletion and account termination are separate processes. Requesting account or contract termination does not necessarily result in the immediate deletion of all information associated with the account.
                </p>
                <p>
                  EVOC Labs may retain certain records where necessary to comply with applicable laws, resolve disputes, enforce agreements, maintain financial and transaction records, prevent fraud or abuse, or meet other legitimate legal or operational requirements.
                </p>
              </div>
            </section>

            {/* 6. SUBMIT A REQUEST */}
            <section
              id="sec-6"
              className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-blue-600/[0.05] border border-blue-500/25 space-y-6"
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <span className="text-blue-500 font-mono text-lg">06</span>
                  6. Submit a Request
                </h2>
                <span className="inline-flex items-center gap-1 text-xs text-blue-400 bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-500/30">
                  <LifeBuoy className="w-3 h-3" />
                  Request Channel
                </span>
              </div>

              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                To request Data Deletion, Account Termination, or Contract Termination, please log in to your EVOC Labs account and raise a ticket through the Support section.
              </p>

              {/* Navigation Flow Highlight Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-black/40 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-semibold text-white">
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg text-blue-300">Support</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                  <span className="bg-white/10 px-3 py-1.5 rounded-lg text-blue-300">Raise a Ticket</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                  <span className="bg-blue-600/30 border border-blue-500/30 px-3 py-1.5 rounded-lg text-white">
                    Select the relevant request category
                  </span>
                </div>

                <a
                  href="https://app.evoclabs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#183EEB] hover:bg-[#183EEB]/90 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Log In &amp; Raise Ticket
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/60">
                <p>
                  For security and verification purposes, requests submitted through unauthorized channels may require additional verification before processing.
                </p>
              </div>

              {/* Official Entity Summary Card */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/50">
                <div>
                  <div className="font-bold text-white text-sm">EVOC Labs Pvt. Ltd.</div>
                  <div>Official Commerce Infrastructure Platform</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-white/70 font-medium">Last Updated: September 2026</div>
                  <div>Sitarganj Road, Jail Camp, Ward No. 5, U.S. Nagar, Uttarakhand, India</div>
                </div>
              </div>
            </section>

          </article>

        </div>

      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
