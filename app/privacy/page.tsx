'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ShieldCheck, 
  FileText, 
  Eye, 
  Database, 
  Scale, 
  Share2, 
  ExternalLink, 
  Clock, 
  Lock, 
  Store, 
  Bell, 
  Baby, 
  UserCheck, 
  AlertCircle, 
  Globe, 
  RefreshCw, 
  Gavel, 
  Mail, 
  CheckCircle2,
  Trash2,
  Cpu
} from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const navItems = [
    { id: 'sec-1', label: '1. Introduction' },
    { id: 'sec-2', label: '2. Information We Collect' },
    { id: 'sec-3', label: '3. How We Use Information' },
    { id: 'sec-4', label: '4. Legal Basis for Processing' },
    { id: 'sec-5', label: '5. Sharing of Information' },
    { id: 'sec-6', label: '6. Third-Party Services & Integrations' },
    { id: 'google-api-disclosure', label: '↳ Google API Limited Use Disclosure', highlight: true },
    { id: 'meta-data-disclosure', label: '↳ Meta & WhatsApp Compliance', highlight: true },
    { id: 'sec-7', label: '7. Data Retention' },
    { id: 'sec-8', label: '8. Data Security' },
    { id: 'sec-9', label: '9. Merchant Responsibilities' },
    { id: 'sec-10', label: '10. Marketing Communications' },
    { id: 'sec-11', label: '11. Children\'s Privacy' },
    { id: 'sec-12', label: '12. User Rights' },
    { id: 'data-deletion', label: '↳ User Data Deletion Instructions', highlight: true },
    { id: 'sec-13', label: '13. Grievance Redressal' },
    { id: 'sec-14', label: '14. International Data Transfers' },
    { id: 'sec-15', label: '15. Changes to This Privacy Policy' },
    { id: 'sec-16', label: '16. Governing Law' },
    { id: 'sec-17', label: '17. Contact Information' },
    { id: 'sec-18', label: '18. Acknowledgement' },
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
    "@type": "PrivacyPolicy",
    "name": "EVOC Labs Privacy Policy",
    "url": "https://www.evoclabs.com/privacy",
    "datePublished": "2026-01-04",
    "dateModified": "2026-01-04",
    "publisher": {
      "@type": "Organization",
      "name": "EVOC Labs Pvt Ltd",
      "legalName": "EVOC Labs Pvt Ltd",
      "url": "https://www.evoclabs.com",
      "email": "nishant@evoclabs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Sitarganj Road, Jail Camp, Ward No. 5",
        "addressLocality": "U.S. Nagar",
        "addressRegion": "Uttarakhand",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Grievance Officer",
        "name": "Nishant Raj",
        "email": "nishant@evoclabs.com"
      }
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans">
      {/* Schema.org JSON-LD for Search Engines & Verification Crawlers */}
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
              Official Policy
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              Issue Date: 4 January 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Store className="w-3.5 h-3.5 text-white/40" />
              Entity: EVOC Labs Pvt Ltd
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            This Privacy Policy explains how EVOC Labs collects, uses, stores, processes, and protects information obtained from users, merchants, customers, and visitors across our unified commerce operating system.
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
              <span className="text-[11px] text-white/40">18 Sections</span>
            </div>
            
            <nav className="space-y-1 max-h-[70vh] overflow-y-auto pr-1 text-xs custom-scrollbar">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-1.5 px-2.5 rounded-lg transition-all ${
                      item.highlight 
                        ? isActive
                          ? 'bg-blue-600/20 text-blue-400 font-semibold border-l-2 border-blue-500'
                          : 'text-blue-400/80 hover:text-blue-300 font-medium pl-4'
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

            {/* Quick Verification Verification Badge */}
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/40 space-y-1.5">
              <div className="text-white/70 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                Verification & Parsability Ready
              </div>
              <p>Direct anchor URLs available for Google OAuth &amp; Meta App Review compliance checks.</p>
            </div>
          </aside>

          {/* Parsable Legal Content Sections */}
          <article className="lg:col-span-8 space-y-12 text-white/70 leading-relaxed text-sm md:text-base">

            {/* 1. INTRODUCTION */}
            <section id="sec-1" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">01</span>
                1. INTRODUCTION
              </h2>
              <div className="space-y-3 text-white/70 leading-relaxed">
                <p>
                  <strong className="text-white">1.1</strong> EVOC Labs Pvt Ltd (&ldquo;EVOC Labs&rdquo;, &ldquo;EVOC&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects the privacy of individuals who access or use our website, applications, software, dashboards, products and services.
                </p>
                <p>
                  This Privacy Policy explains how EVOC Labs collects, uses, stores, processes and protects information obtained from users, merchants, customers and visitors (&ldquo;you&rdquo; or &ldquo;your&rdquo;).
                </p>
                <p>
                  <strong className="text-white">1.2</strong> This Privacy Policy applies to information collected through EVOC Labs&apos; websites, applications, merchant dashboards, software, online forms, communication channels and other platforms operated or controlled by EVOC Labs (collectively, the &ldquo;Platform&rdquo;).
                </p>
                <p>
                  <strong className="text-white">1.3</strong> By accessing or using the Platform or our Services, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, you should discontinue use of the relevant Platform or Services.
                </p>
                <p>
                  <strong className="text-white">1.4</strong> This Privacy Policy should be read together with EVOC Labs&apos; Terms &amp; Conditions and any other applicable policies or agreements.
                </p>
              </div>
            </section>

            {/* 2. INFORMATION WE COLLECT */}
            <section id="sec-2" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">02</span>
                2. INFORMATION WE COLLECT
              </h2>
              <p className="text-white/60">
                EVOC Labs may collect different categories of information depending on how you interact with our Platform and Services.
              </p>

              {/* 2.1 Information You Provide */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  2.1 Information You Provide
                </h3>
                <p className="text-white/70">We may collect information that you voluntarily provide to us, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-white/70 pl-2">
                  {[
                    "Full name",
                    "Business or company name",
                    "Brand name",
                    "Email address",
                    "Mobile or telephone number",
                    "Business address",
                    "Billing and communication information",
                    "GST and business registration information",
                    "Account and login information",
                    "Product and store information",
                    "Information submitted through forms",
                    "Information provided during onboarding",
                    "Support requests and communications",
                    "Other information required to provide our Services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2.2 Merchant Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  2.2 Merchant Information
                </h3>
                <p className="text-white/70">
                  Where you use EVOC Labs as a Merchant, we may collect information relating to your business and e-commerce operations, including:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-white/70 pl-2">
                  {[
                    "Store information",
                    "Product information",
                    "Order information",
                    "Sales information",
                    "Logistics information",
                    "Shipment information",
                    "Payment and settlement information",
                    "Advertising information",
                    "Marketing data",
                    "Customer communication information",
                    "Analytics and performance information",
                    "Information relating to connected third-party services"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/5 px-3 py-2 rounded-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 2.3 Customer Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  2.3 Customer Information
                </h3>
                <p className="text-white/70">
                  If a Merchant uses EVOC Labs&apos; technology to operate its online store or customer communication services, EVOC Labs may process information relating to the Merchant&apos;s customers. Such information may include:
                </p>
                <div className="flex flex-wrap gap-2 text-xs md:text-sm text-white/80 py-2">
                  {[
                    "Customer name",
                    "Phone number",
                    "Email address",
                    "Shipping and billing address",
                    "Order details",
                    "Product information",
                    "Delivery information",
                    "Payment status",
                    "Communication history",
                    "Customer preferences or interactions"
                  ].map((item, i) => (
                    <span key={i} className="bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-lg">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm text-white/50 italic bg-white/[0.02] p-3 rounded-lg border border-white/5">
                  Where a Merchant provides customer information to EVOC Labs, the Merchant is responsible for ensuring that such information has been collected and shared with EVOC Labs in accordance with applicable laws.
                </p>
              </div>

              {/* 2.4 Automatically Collected Information */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  2.4 Automatically Collected Information
                </h3>
                <p className="text-white/70">
                  When you use our Platform, certain technical information may be collected automatically, including:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-white/60">
                  {[
                    "IP address",
                    "Browser type",
                    "Device type",
                    "Operating system",
                    "Approximate location",
                    "Pages or features accessed",
                    "Date & time of access",
                    "Referring pages",
                    "Usage information",
                    "Error & diagnostic data",
                    "Device and network info"
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-2 rounded text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* 2.5 Cookies and Similar Technologies */}
              <div className="space-y-3 pt-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  2.5 Cookies and Similar Technologies
                </h3>
                <p className="text-white/70">
                  EVOC Labs may use cookies, pixels, tags, SDKs and similar technologies to operate and improve the Platform. These technologies may help us:
                </p>
                <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-white/60 pl-2">
                  <li>Keep users signed in</li>
                  <li>Remember preferences</li>
                  <li>Understand Platform usage</li>
                  <li>Improve performance</li>
                  <li>Analyse traffic</li>
                  <li>Measure marketing campaigns</li>
                  <li>Detect fraud or security issues</li>
                  <li>Provide relevant features</li>
                </ul>
                <p className="text-xs text-white/50">
                  You may be able to control cookies through your browser or device settings. Disabling certain cookies may affect the functionality of some parts of the Platform.
                </p>
              </div>
            </section>

            {/* 3. HOW WE USE INFORMATION */}
            <section id="sec-3" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">03</span>
                3. HOW WE USE INFORMATION
              </h2>
              <p className="text-white/60">
                EVOC Labs may use collected information for legitimate business and operational purposes, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {[
                  { num: "3.1", title: "Providing Services", desc: "To create and operate accounts, stores, websites, dashboards and other Services requested by you." },
                  { num: "3.2", title: "Account Management", desc: "To create, authenticate, maintain and secure user and Merchant accounts." },
                  { num: "3.3", title: "Order & Logistics Operations", desc: "To facilitate order processing, shipment management, delivery tracking, returns, RTO management and other logistics-related operations." },
                  { num: "3.4", title: "Payments", desc: "To facilitate payment processing, settlements, billing, invoicing, reconciliation, fraud prevention and related financial operations." },
                  { num: "3.5", title: "Marketing & Advertising", desc: "To provide advertising, campaign management, analytics, promotional and marketing services where requested by the Merchant." },
                  { num: "3.6", title: "Communication", desc: "To communicate with you regarding your account, orders, Services, support requests, updates, billing, security matters and other relevant information." },
                  { num: "3.7", title: "WhatsApp & Customer Communication", desc: "Where enabled by the Merchant, information may be processed to facilitate WhatsApp messages, abandoned-cart recovery, order notifications, price-drop notifications, AI calling and other customer communication features." },
                  { num: "3.8", title: "Analytics and Improvement", desc: "To understand how our Platform and Services are used and to improve their functionality, performance, security and user experience." },
                  { num: "3.9", title: "Security & Fraud Prevention", desc: "To detect, investigate and prevent fraud, abuse, unauthorised access, security incidents and other harmful or unlawful activities." },
                  { num: "3.10", title: "Legal Compliance", desc: "To comply with applicable laws, regulations, legal processes, government requests and lawful orders." }
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-blue-400">{item.num}</span>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. LEGAL BASIS FOR PROCESSING */}
            <section id="sec-4" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">04</span>
                4. LEGAL BASIS FOR PROCESSING
              </h2>
              <p className="text-white/70">
                Where applicable, EVOC Labs may process personal information based on one or more of the following grounds:
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-white/70 pl-2">
                {[
                  "Your consent;",
                  "Performance of a contract or provision of requested Services;",
                  "Compliance with legal obligations;",
                  "Legitimate business purposes permitted by applicable law;",
                  "Protection of the rights, safety and security of EVOC Labs, its users or other persons;",
                  "Prevention of fraud, misuse or unlawful activity."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs md:text-sm text-white/50 pt-2">
                Where consent is required by applicable law, EVOC Labs will seek such consent through appropriate means.
              </p>
            </section>

            {/* 5. SHARING OF INFORMATION */}
            <section id="sec-5" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">05</span>
                5. SHARING OF INFORMATION
              </h2>
              <p className="text-white/70">
                <strong className="text-white">EVOC Labs does not sell personal information</strong> to third parties for their independent commercial use. However, we may share information where reasonably necessary to provide our Services.
              </p>
              
              <div className="space-y-4 pt-2">
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-2">5.1 Service Providers</h3>
                  <p className="text-xs md:text-sm text-white/70 mb-3">
                    We may share information with third-party providers that support our operations, including:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-white/80">
                    {[
                      "Cloud & hosting providers",
                      "Logistics & courier companies",
                      "Payment gateways",
                      "Communication & WhatsApp providers",
                      "Advertising platforms",
                      "Analytics providers",
                      "Customer support providers",
                      "Security providers",
                      "Software and technology providers"
                    ].map((provider, i) => (
                      <span key={i} className="bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-lg text-blue-300">
                        {provider}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-white/50 mt-2">
                    Such providers may process information only as necessary to provide their services or as otherwise permitted by applicable law.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">5.2 Merchant-Directed Sharing</h3>
                  <p className="text-xs md:text-sm text-white/70">
                    Where EVOC Labs operates as a technology provider for a Merchant, information may be shared with or made accessible to that Merchant as necessary to provide the Services. For example, order and customer information may be accessible to a Merchant through its store or dashboard.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">5.3 Legal Requirements</h3>
                  <p className="text-xs md:text-sm text-white/70">
                    We may disclose information where required or permitted by applicable law, including in response to court orders, government requests, regulatory requirements, law-enforcement requests, legal proceedings, fraud investigations, or security investigations.
                  </p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">5.4 Business Transfers</h3>
                  <p className="text-xs md:text-sm text-white/70">
                    If EVOC Labs is involved in a merger, acquisition, restructuring, financing, sale of assets or similar business transaction, information may be transferred as part of that transaction, subject to applicable law.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. THIRD-PARTY SERVICES AND LINKS + META & GOOGLE VERIFICATION BLOCKS */}
            <section id="sec-6" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">06</span>
                6. THIRD-PARTY SERVICES AND LINKS
              </h2>
              <div className="space-y-3 text-white/70 text-sm">
                <p><strong className="text-white">6.1</strong> Our Platform may contain integrations, links or connections to third-party services.</p>
                <p><strong className="text-white">6.2</strong> Third-party services operate independently and may have their own privacy policies and terms.</p>
                <p><strong className="text-white">6.3</strong> EVOC Labs is not responsible for the privacy practices of third-party websites, applications or services that are not controlled by EVOC Labs.</p>
                <p><strong className="text-white">6.4</strong> We encourage users to review the privacy policies of third-party services before providing personal information to them.</p>
              </div>

              {/* Google API Limited Use Disclosure (Crucial for Google Verification) */}
              <div id="google-api-disclosure" className="scroll-mt-28 p-6 rounded-xl bg-blue-600/[0.05] border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Globe className="w-4 h-4" />
                  Google API Services &amp; Limited Use Disclosure
                </div>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  Where EVOC Labs accesses, uses, stores, or processes information received from Google APIs (such as Google Ads, Google Analytics, or Google OAuth Sign-in), our use and transfer of this information to any other app will strictly adhere to the{' '}
                  <a 
                    href="https://developers.google.com/terms/api-services-user-data-policy" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-400 hover:text-blue-300 underline font-medium inline-flex items-center gap-1"
                  >
                    Google API Services User Data Policy
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  , including the <strong>Limited Use</strong> requirements.
                </p>
                <ul className="list-disc list-inside text-xs text-white/70 space-y-1 pl-1">
                  <li>Google user data is <strong>never sold</strong> or transferred to third parties for unauthorized commercial purposes.</li>
                  <li>Google user data is <strong>never used to serve advertisements</strong>.</li>
                  <li>Google user data is <strong>never used to train generalized artificial intelligence (AI) or machine learning (ML) models</strong> without explicit affirmative consent.</li>
                  <li>
                    Users can view, manage, or revoke EVOC Labs&apos; access to their Google Account at any time via{' '}
                    <a 
                      href="https://myaccount.google.com/permissions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Google Security Permissions
                    </a>.
                  </li>
                </ul>
              </div>

              {/* Meta & WhatsApp Platform Disclosure (Crucial for Meta Verification) */}
              <div id="meta-data-disclosure" className="scroll-mt-28 p-6 rounded-xl bg-blue-600/[0.05] border border-blue-500/30 space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                  <Share2 className="w-4 h-4" />
                  Meta Platforms &amp; WhatsApp Business Disclosure
                </div>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  When merchants connect EVOC Labs to Meta services (including Meta Pixel, Meta Conversions API (CAPI), Facebook Login, and WhatsApp Business Cloud API), data collected and transmitted is processed solely to execute store operations, order notifications, abandoned-cart recovery, and campaign performance analytics.
                </p>
                <p className="text-xs text-white/70 leading-relaxed">
                  All customer communications conducted over WhatsApp comply with Meta&apos;s WhatsApp Business Messaging Policy and opt-in standards. Merchants retain full responsibility for obtaining lawful consent before sending automated notifications or recovery messages.
                </p>
              </div>
            </section>

            {/* 7. DATA RETENTION */}
            <section id="sec-7" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">07</span>
                7. DATA RETENTION
              </h2>
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  <strong className="text-white">7.1</strong> EVOC Labs retains information for as long as reasonably necessary to provide the Services, maintain business and transaction records, comply with legal obligations, resolve disputes, enforce agreements and protect our legitimate interests.
                </p>
                <p>
                  <strong className="text-white">7.2</strong> The period for which information is retained may vary depending on: the nature of the information; the purpose for which it was collected; the relationship with the user or Merchant; legal and regulatory requirements; security and fraud-prevention requirements; and business and accounting requirements.
                </p>
                <p>
                  <strong className="text-white">7.3</strong> When information is no longer reasonably required, EVOC Labs may delete, anonymise or securely dispose of it, subject to applicable law.
                </p>
              </div>
            </section>

            {/* 8. DATA SECURITY */}
            <section id="sec-8" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">08</span>
                8. DATA SECURITY
              </h2>
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  <strong className="text-white">8.1</strong> EVOC Labs takes reasonable technical and organisational measures to protect information against unauthorised access, loss, misuse, alteration or disclosure.
                </p>
                <p>
                  <strong className="text-white">8.2</strong> Security measures may include access controls, authentication mechanisms, encryption where appropriate, monitoring, backups and other safeguards.
                </p>
                <p>
                  <strong className="text-white">8.3</strong> However, no internet-based system, website, application or method of electronic transmission can be guaranteed to be completely secure.
                </p>
                <p>
                  <strong className="text-white">8.4</strong> You are responsible for maintaining the confidentiality of your account credentials and for notifying EVOC Labs of suspected unauthorised access.
                </p>
              </div>
            </section>

            {/* 9. MERCHANT RESPONSIBILITIES */}
            <section id="sec-9" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">09</span>
                9. MERCHANT RESPONSIBILITIES
              </h2>
              <p className="text-white/70">
                Where you use EVOC Labs Services as a Merchant, you are responsible for:
              </p>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">9.1</strong> Providing accurate information to EVOC Labs.</p>
                <p><strong className="text-white">9.2</strong> Obtaining appropriate consent or other lawful basis before collecting and sharing customer information with EVOC Labs where required by applicable law.</p>
                <p><strong className="text-white">9.3</strong> Providing customers with appropriate privacy notices where required.</p>
                <p><strong className="text-white">9.4</strong> Using customer information only for lawful and authorised purposes.</p>
                <p><strong className="text-white">9.5</strong> Complying with applicable privacy, data protection, consumer protection, advertising and marketing communication laws.</p>
                <p><strong className="text-white">9.6</strong> Maintaining appropriate security over your account and connected systems.</p>
                <p><strong className="text-white">9.7</strong> Responding appropriately to customer requests relating to their personal information where you are responsible for such information.</p>
              </div>
            </section>

            {/* 10. MARKETING COMMUNICATIONS */}
            <section id="sec-10" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">10</span>
                10. MARKETING COMMUNICATIONS
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">10.1</strong> EVOC Labs may send service-related communications such as account notifications, security alerts, transaction updates, billing communications and important service announcements.</p>
                <p><strong className="text-white">10.2</strong> Where permitted by applicable law and where appropriate consent has been obtained, EVOC Labs may also send promotional or marketing communications.</p>
                <p><strong className="text-white">10.3</strong> You may request to stop receiving non-essential promotional communications by using the available unsubscribe mechanism or contacting EVOC Labs.</p>
                <p><strong className="text-white">10.4</strong> Even if you opt out of promotional communications, we may continue sending communications that are necessary for providing Services, security, transactions or legal compliance.</p>
              </div>
            </section>

            {/* 11. CHILDREN'S PRIVACY */}
            <section id="sec-11" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">11</span>
                11. CHILDREN&apos;S PRIVACY
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">11.1</strong> Our Services are intended for businesses and users who are legally capable of entering into agreements.</p>
                <p><strong className="text-white">11.2</strong> EVOC Labs does not knowingly collect personal information from children in violation of applicable law.</p>
                <p><strong className="text-white">11.3</strong> If you believe that a child has provided personal information to EVOC Labs without appropriate consent, please contact us so that we can take appropriate action.</p>
              </div>
            </section>

            {/* 12. USER RIGHTS + DATA DELETION INSTRUCTIONS (CRITICAL FOR META) */}
            <section id="sec-12" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">12</span>
                12. USER RIGHTS
              </h2>
              <p className="text-white/70">
                Subject to applicable law, individuals may have rights relating to their personal information, including:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs md:text-sm text-white/70 pl-2">
                {[
                  "Requesting access to certain personal information",
                  "Requesting correction of inaccurate information",
                  "Requesting deletion where legally applicable",
                  "Withdrawing consent where processing is based on consent",
                  "Requesting information regarding processing",
                  "Raising privacy-related complaints",
                  "Exercising other rights available under applicable law"
                ].map((right, i) => (
                  <li key={i} className="flex items-center gap-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-white/50">
                The availability and scope of these rights may depend on the applicable law and the role EVOC Labs has in processing the relevant information.
              </p>

              {/* Explicit User Data Deletion Instructions (Required for Meta App Review) */}
              <div id="data-deletion" className="scroll-mt-28 p-6 rounded-xl bg-blue-600/[0.06] border border-blue-500/40 space-y-4">
                <div className="flex items-center gap-2 text-blue-400 font-bold text-base">
                  <Trash2 className="w-5 h-5 text-blue-400" />
                  User Data Deletion Request Instructions (Meta / Facebook App Compliance)
                </div>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  In accordance with platform requirements (including Meta Developer Policies) and applicable data protection regulations, users and merchants have the right to request the complete deletion of their account data, connected third-party credentials, and associated personal information.
                </p>
                <div className="space-y-2 text-xs md:text-sm text-white/70 bg-black/40 p-4 rounded-xl border border-white/5">
                  <div className="font-semibold text-white">How to submit a data deletion request:</div>
                  <ol className="list-decimal list-inside space-y-1.5 pl-1">
                    <li>Send an email to <a href="mailto:nishant@evoclabs.com" className="text-blue-400 underline font-medium">nishant@evoclabs.com</a> from your registered email address.</li>
                    <li>Use the subject line: <code className="bg-white/10 px-2 py-0.5 rounded text-blue-300">Data Deletion Request - [Your Brand/Name]</code>.</li>
                    <li>Include your store domain or registered telephone number to help us locate your records.</li>
                    <li>Specify whether you are requesting deletion of merchant account data, analytics logs, or end-customer communication history.</li>
                  </ol>
                  <p className="text-xs text-white/50 pt-2 border-t border-white/5 mt-2">
                    <strong>Resolution Timeline:</strong> We will acknowledge your request within 48 hours and complete the verified deletion or anonymization process within 30 days, providing written email confirmation once completed.
                  </p>
                </div>
              </div>
            </section>

            {/* 13. GRIEVANCE REDRESSAL */}
            <section id="sec-13" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">13</span>
                13. GRIEVANCE REDRESSAL
              </h2>
              <p className="text-white/70">
                If you have any questions, concerns, complaints or requests regarding the processing of your personal information, you may contact us using the details below:
              </p>
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div>
                    <span className="text-xs text-white/40 block">Designated Grievance Officer</span>
                    <strong className="text-white text-base">Nishant Raj</strong>
                  </div>
                  <div>
                    <span className="text-xs text-white/40 block">Company</span>
                    <span className="text-white font-medium">EVOC Labs Pvt Ltd</span>
                  </div>
                </div>
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
                  <div>
                    <span className="text-white/40 block text-xs">Official Email</span>
                    <a href="mailto:nishant@evoclabs.com" className="text-blue-400 hover:text-blue-300 font-semibold underline">
                      nishant@evoclabs.com
                    </a>
                  </div>
                  <div>
                    <span className="text-white/40 block text-xs">Registered Address</span>
                    <span className="text-white/80">
                      Sitarganj Road, Jail Camp, Ward No. 5, U.S. Nagar, Uttarakhand, India
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/50">
                We will make reasonable efforts to review and address privacy-related complaints in accordance with applicable law.
              </p>
            </section>

            {/* 14. INTERNATIONAL DATA TRANSFERS */}
            <section id="sec-14" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">14</span>
                14. INTERNATIONAL DATA TRANSFERS
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">14.1</strong> Depending on the technology and third-party services used by EVOC Labs, information may be processed or stored on servers located outside the state or country in which you reside.</p>
                <p><strong className="text-white">14.2</strong> Where information is transferred across jurisdictions, EVOC Labs will take reasonable steps to ensure that such processing is carried out in accordance with applicable legal requirements.</p>
              </div>
            </section>

            {/* 15. CHANGES TO THIS PRIVACY POLICY */}
            <section id="sec-15" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">15</span>
                15. CHANGES TO THIS PRIVACY POLICY
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">15.1</strong> EVOC Labs may update this Privacy Policy from time to time to reflect changes in our Services, technology, business practices or applicable laws.</p>
                <p><strong className="text-white">15.2</strong> The updated version will be published on this page together with a revised issue or update date.</p>
                <p><strong className="text-white">15.3</strong> Where required by applicable law, we may provide additional notice or seek consent for material changes.</p>
                <p><strong className="text-white">15.4</strong> You are encouraged to periodically review this Privacy Policy to remain informed about how we handle information.</p>
              </div>
            </section>

            {/* 16. GOVERNING LAW */}
            <section id="sec-16" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">16</span>
                16. GOVERNING LAW
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">16.1</strong> This Privacy Policy shall be governed by and interpreted in accordance with the laws of India.</p>
                <p><strong className="text-white">16.2</strong> Any dispute relating to this Privacy Policy shall be subject to the applicable courts and legal jurisdiction in India, subject to applicable law and any separate agreement between the Parties.</p>
              </div>
            </section>

            {/* 17. CONTACT INFORMATION */}
            <section id="sec-17" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-blue-600/[0.05] border border-blue-500/20 space-y-6 text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto border border-blue-500/20 text-blue-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">17. CONTACT INFORMATION</h2>
                <p className="text-xs md:text-sm text-white/60">
                  For privacy-related questions, requests, or complaints, please reach out to our official channels:
                </p>
              </div>

              <div className="max-w-md mx-auto p-6 rounded-2xl bg-black/40 border border-white/10 space-y-2 text-left text-sm">
                <div className="font-bold text-white text-base">EVOC LABS PVT LTD</div>
                <div className="text-white/70"><strong className="text-white">Contact Person:</strong> Nishant Raj</div>
                <div className="text-white/70">
                  <strong className="text-white">Email:</strong>{' '}
                  <a href="mailto:nishant@evoclabs.com" className="text-blue-400 hover:underline">nishant@evoclabs.com</a>
                </div>
                <div className="text-white/70">
                  <strong className="text-white">Address:</strong> Sitarganj Road, Jail Camp, Ward No. 5, U.S. Nagar, Uttarakhand, India
                </div>
                <div className="text-white/70">
                  <strong className="text-white">Official Website:</strong>{' '}
                  <a href="https://www.evoclabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    evoclabs.com
                  </a>
                </div>
              </div>
            </section>

            {/* 18. ACKNOWLEDGEMENT */}
            <section id="sec-18" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">18</span>
                18. ACKNOWLEDGEMENT
              </h2>
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                By using EVOC Labs&apos; website, Platform or Services, you acknowledge that you have read and understood this Privacy Policy.
              </p>
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
                <span>Issue Date: <strong>4 January 2026</strong></span>
                <span>EVOC LABS PVT LTD &bull; Nishant Raj</span>
                <span>Sitarganj Road, Jail Camp, Ward No. 5, U.S. Nagar, Uttarakhand, India</span>
              </div>
            </section>

          </article>

        </div>

      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
