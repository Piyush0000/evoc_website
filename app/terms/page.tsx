'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, FileText, Gavel, Mail } from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function TermsOfService() {
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
            <Gavel className="w-4 h-4" />
            Legal Documentation
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Terms of <span className="text-blue-500">Service</span></h1>
          <p className="text-white/40 text-lg leading-relaxed">
            Welcome to Evoc Labs. These Terms of Service (&quot;Terms&quot;) govern your access to and use of our AI-powered commerce operating system, including our dashboard, store-building tools, AI agents, and growth automation services (collectively, the &quot;Platform&quot;).
          </p>
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-12 pb-20">
          <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
            <p className="text-white/60 leading-relaxed mb-0">
              By creating an account or using the Platform, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">01</span>
               Scope of Service
            </h2>
            <p className="text-white/50 leading-relaxed">
              Evoc Labs provides a unified full-stack infrastructure for e-commerce. Services include, but are not limited to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
               {[
                 "Store building and conversion optimization.",
                 "Sales, logistics, and ad performance analytics.",
                 "AI Calling Agents and WhatsApp automated recovery.",
                 "Growth tools and intelligent decision-making automation."
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 bg-white/[0.03] border border-white/5 p-4 rounded-2xl text-sm text-white/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    {item}
                 </li>
               ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">02</span>
               Account Responsibilities
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p><strong className="text-white">Eligibility:</strong> You must be a legal business entity or an individual capable of forming a binding contract.</p>
              <p><strong className="text-white">Security:</strong> You are responsible for maintaining the confidentiality of your dashboard credentials.</p>
              <p><strong className="text-white">Data Accuracy:</strong> You agree to provide accurate information regarding your business, products, and advertising accounts.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">03</span>
               Acceptable Use
            </h2>
            <p className="text-white/50 leading-relaxed">You agree not to use Evoc Labs to:</p>
            <ul className="space-y-3 list-none p-0">
               {[
                 "Sell prohibited, illegal, or counterfeit goods.",
                 "Use AI Calling Agents or WhatsApp automation to spam or harass consumers in violation of local regulations (e.g., TRAI guidelines in India, TCPA in the US).",
                 "Attempt to reverse-engineer the AI infrastructure or bypass platform security."
               ].map((item, i) => (
                 <li key={i} className="flex gap-4 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5 shrink-0" />
                    {item}
                 </li>
               ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">04</span>
               AI and Automation Services
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p><strong className="text-white">AI Output:</strong> While our AI agents are designed for high accuracy in support and sales, Evoc Labs does not guarantee that AI-generated content will always be error-free.</p>
              <p><strong className="text-white">Compliance:</strong> You are responsible for ensuring that your use of AI calling and WhatsApp recovery complies with the privacy laws of your customers&apos; jurisdictions.</p>
              <p><strong className="text-white">Third-Party APIs:</strong> Our tools integrate with platforms like Meta and various logistics providers. Your use of these features is also subject to their respective terms.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">05</span>
               Payments, Fees, and Taxes
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p><strong className="text-white">Subscriptions:</strong> Fees are billed based on your selected plan.</p>
              <p><strong className="text-white">Usage Fees:</strong> Certain features (like AI calling minutes or WhatsApp credits) may incur additional usage-based charges.</p>
              <p><strong className="text-white">Taxes:</strong> You are responsible for all applicable taxes associated with your use of the Platform and your sales to end-customers.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">06</span>
               Intellectual Property
            </h2>
            <div className="space-y-4 text-white/50 leading-relaxed">
              <p><strong className="text-white">Our Content:</strong> Evoc Labs owns all rights to the Platform, including software, AI models, and dashboard interfaces.</p>
              <p><strong className="text-white">Your Content:</strong> You retain ownership of your brand assets (logos, product descriptions, customer data). By using Evoc Labs, you grant us a limited license to host and process this data to provide our services.</p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">07</span>
               Data Processing & Privacy
            </h2>
            <p className="text-white/50 leading-relaxed">
              Your use of the Platform is also governed by our Privacy Policy. As a full-stack provider, Evoc Labs acts as a data processor for your customer information. You are responsible for obtaining necessary consent from your customers for data processing.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">08</span>
               Limitation of Liability
            </h2>
            <p className="text-white/50 leading-relaxed italic">
              Evoc Labs provides the Platform &quot;as is.&quot; To the maximum extent permitted by law, Evoc Labs shall not be liable for any indirect, incidental, or consequential damages, including loss of profits or data resulting from service interruptions or ad performance fluctuations.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">09</span>
               Termination
            </h2>
            <p className="text-white/50 leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent activity. You may cancel your subscription at any time through the dashboard settings.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">10</span>
               Governing Law
            </h2>
            <p className="text-white/50 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500/20 text-4xl font-black italic">11</span>
               Contact Information
            </h2>
            <div className="bg-blue-600/5 border border-blue-600/20 rounded-3xl p-8 flex flex-col items-center text-center gap-4">
               <Mail className="w-8 h-8 text-blue-500" />
               <p className="text-white/70">For any questions regarding these Terms, please contact us at:</p>
               <a href="mailto:contact@evoclabs.com" className="text-xl font-bold text-white hover:text-blue-500 transition-colors">contact@evoclabs.com</a>
            </div>
          </section>

          <div className="pt-20 border-t border-white/5">
             <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6 text-[13px] text-yellow-500/60 leading-relaxed">
                <strong className="text-yellow-500">Legal Disclaimer:</strong> This document serves as a specialized template for Evoc Labs. Since you operate in the high-stakes e-commerce and AI space, it is strongly advised to have this reviewed by legal counsel to ensure it meets the specific compliance requirements for AI communications and data handling in your target markets.
             </div>
          </div>
        </div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
