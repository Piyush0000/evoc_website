'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ShieldCheck, Eye, Database, Lock, Mail } from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans pb-20">
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-20">
        {/* Navigation */}
        <div className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Hero */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 text-blue-500 font-bold uppercase tracking-[0.2em] text-[10px] mb-6">
            <ShieldCheck className="w-4 h-4" />
            Privacy Protection
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Privacy <span className="text-blue-500">Policy</span></h1>
          <p className="text-white/40 text-lg leading-relaxed">
            At Evoc Labs, we are committed to protecting the privacy of our users (Sellers and Brands) and their end-customers. This Privacy Policy outlines how we collect, use, and safeguard information within our AI-powered commerce operating system.
          </p>
        </motion.div>

        {/* Content Section */}
        <div className="space-y-16 pb-20">
          
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Eye className="w-6 h-6 text-blue-500" />
               1. Information We Collect
            </h2>
            <p className="text-white/50 leading-relaxed">
              To provide a unified dashboard for commerce, we collect data in two capacities: as a Service Provider (processing your data) and as a Data Controller (managing your account).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { title: "Account Information", desc: "Name, email, business details, and payment information." },
                 { title: "Store & Integration Data", desc: "Data synced from your connected stores, including product listings and order history." },
                 { title: "Marketing & Ad Data", desc: "Performance metrics from integrated ad platforms (e.g., Meta, Google)." },
                 { title: "Customer Information", desc: "Shipping addresses and purchase behavior of your end-consumers." },
                 { title: "Communication Data", desc: "Transcripts and logs from AI Calling Agents and WhatsApp automations." }
               ].map((item, i) => (
                 <div key={i} className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                    <h3 className="text-white font-bold mb-2 text-sm">{item.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                 </div>
               ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Database className="w-6 h-6 text-blue-500" />
               2. How We Use Your Data
            </h2>
            <p className="text-white/50 leading-relaxed">
              We use the collected information to power our full-stack solution:
            </p>
            <ul className="space-y-4 list-none p-0">
               {[
                 { t: "Operational Efficiency", d: "Managing store building, logistics tracking, and checkout optimization." },
                 { t: "AI & Automation", d: "Training internal models to improve AI Support Agents and growth automation tools." },
                 { t: "Growth Insights", d: "Analyzing sales and ad performance to provide intelligent decision-making recommendations." },
                 { t: "Recovery Services", d: "Automating WhatsApp messages for abandoned cart recovery." }
               ].map((item, i) => (
                 <li key={i} className="flex gap-4">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <div className="text-sm">
                       <span className="text-white font-bold">{item.t}:</span> <span className="text-white/50">{item.d}</span>
                    </div>
                 </li>
               ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Users className="w-6 h-6 text-blue-500" />
               3. Data Sharing & Third Parties
            </h2>
            <p className="text-white/50 leading-relaxed">
              Evoc Labs does not sell your data. We share information only with essential partners required to run your business:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {[
                 "Logistics Partners (Shipping & Tracking)",
                 "Communication Channels (WhatsApp Integrated)",
                 "Security & Cloud Hosting (AWS/Google Cloud)"
               ].map((item, i) => (
                 <div key={i} className="bg-blue-600/5 border border-blue-600/10 p-4 rounded-xl text-[12px] text-center font-bold text-blue-400">
                    {item}
                 </div>
               ))}
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Sparkles className="w-6 h-6 text-blue-500" />
               4. AI and Data Privacy
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed bg-white/[0.02] border border-white/5 p-8 rounded-3xl">
              <p><strong className="text-white">Privacy by Design:</strong> AI models are designed to optimize conversions without compromising the personal identity of end-consumers.</p>
              <p><strong className="text-white">Voice/Text Logs:</strong> Data processed by AI calling agents is encrypted and stored only as long as necessary for service improvement or as required by law.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Lock className="w-6 h-6 text-blue-500" />
               5. Data Security
            </h2>
            <p className="text-white/50 leading-relaxed">
              We implement industry-standard security measures, including SSL encryption and secure API integrations, to protect your unified dashboard from unauthorized access. As a full-stack system, we consolidate data to reduce the &quot;fragmentation risk&quot; associated with using multiple disconnected tools.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Target className="w-6 h-6 text-blue-500" />
               6. User Rights
            </h2>
            <p className="text-white/50 leading-relaxed">Depending on your jurisdiction, you and your customers may have the right to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none p-0">
               {["Access, correct, or delete personal data.", "Opt-out of automated marketing.", "Request a copy of commerce data."].map((item, i) => (
                 <li key={i} className="bg-white/[0.03] border border-white/5 p-4 rounded-xl text-xs text-white/60">
                    {item}
                 </li>
               ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <Mail className="w-6 h-6 text-blue-500" />
               7. Contact Us
            </h2>
            <div className="bg-blue-600/5 border border-blue-600/20 rounded-[32px] p-10 text-center">
               <p className="text-white/40 mb-4">For questions regarding this Privacy Policy or your data, please contact:</p>
               <div className="text-lg font-bold">Evoc Labs Privacy Team</div>
               <a href="mailto:contact@evoclabs.com" className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition-colors">contact@evoclabs.com</a>
            </div>
          </section>

        </div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
