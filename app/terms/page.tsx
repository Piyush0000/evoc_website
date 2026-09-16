'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Gavel,
  FileText,
  Calendar,
  Layers,
  Percent,
  Wallet,
  ShieldAlert,
  Award,
  Key,
  Share2,
  XCircle,
  AlertTriangle,
  Scale,
  Database,
  ShieldCheck,
  Globe2,
  HelpCircle,
  Zap,
  Sliders,
  CheckCircle2,
  Mail,
  Store,
  Clock
} from 'lucide-react';
import FooterSection from '@/components/FooterSection';

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState<string>('sec-1');

  const navItems = [
    { id: 'sec-1', label: '1. Introduction' },
    { id: 'sec-2', label: '2. Commencement and Duration' },
    { id: 'sec-3', label: '3. Services & Scope' },
    { id: 'sec-4', label: '4. Pricing, Service Fees & Taxes', highlight: true },
    { id: 'sec-5', label: '5. Logistics Wallet & Security Deposit', highlight: true },
    { id: 'sec-6', label: '6. Merchant Obligations' },
    { id: 'sec-7', label: '7. Intellectual Property' },
    { id: 'sec-8', label: '8. Confidentiality' },
    { id: 'sec-9', label: '9. Third-Party Services (Meta & Google)' },
    { id: 'sec-10', label: '10. Termination & Consequences' },
    { id: 'sec-11', label: '11. Disclaimers and Warranties' },
    { id: 'sec-12', label: '12. Limitation of Liability' },
    { id: 'sec-13', label: '13. Data Privacy' },
    { id: 'sec-14', label: '14. Indemnification' },
    { id: 'sec-15', label: '15. Governing Law' },
    { id: 'sec-16', label: '16. Dispute Resolution' },
    { id: 'sec-17', label: '17. Force Majeure' },
    { id: 'sec-18', label: '18. Miscellaneous Provisions' },
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
    "@type": "TermsOfService",
    "name": "EVOC Labs Terms & Conditions",
    "url": "https://www.evoclabs.com/terms",
    "datePublished": "2026-01-04",
    "dateModified": "2026-01-04",
    "publisher": {
      "@type": "Organization",
      "name": "EVOC Labs Pvt. Ltd.",
      "legalName": "EVOC Labs Pvt. Ltd.",
      "url": "https://www.evoclabs.com",
      "email": "nishant@evoclabs.com",
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
      {/* Schema.org JSON-LD for Automated Crawlers */}
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
              <Gavel className="w-3.5 h-3.5" />
              Legal Agreement
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Clock className="w-3.5 h-3.5 text-white/40" />
              Effective Date: 4 January 2026
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-white/60 border border-white/5">
              <Store className="w-3.5 h-3.5 text-white/40" />
              EVOC Labs Pvt. Ltd.
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Terms &amp; <span className="text-blue-500">Conditions</span>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            These Terms &amp; Conditions govern your access to and use of the Services made available through the EVOC Labs website, application, merchant dashboard, software, APIs, and connected commerce infrastructure.
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
                    className={`block py-1.5 px-2.5 rounded-lg transition-all ${item.highlight
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

            {/* Quick Summary Highlights */}
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-white/40 space-y-2">
              <div className="text-white/70 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                Key Commercials Summary
              </div>
              <p><strong className="text-white/80">Pricing:</strong> 4% + GST on Delivered Orders only.</p>
              <p><strong className="text-white/80">Wallet Credit:</strong> ₹5,000 deposit + ₹5,000 EVOC promotional credit.</p>
              <p><strong className="text-white/80">Jurisdiction:</strong> Laws of India.</p>
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
              <div className="space-y-3 text-white/70">
                <p>
                  <strong className="text-white">1.1</strong> EVOC Labs Pvt. Ltd. (&ldquo;EVOC Labs&rdquo;, &ldquo;Company&rdquo;, &ldquo;EVOC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a technology and e-commerce infrastructure company engaged in developing, operating and providing technology-enabled solutions for businesses to establish, operate and grow their online commerce operations.
                </p>
                <p>
                  Our services may include website and online store infrastructure, store-building tools, logistics aggregation, checkout and payment-related technology, marketing and advertising support, WhatsApp and customer communication tools, analytics, automation, AI-enabled solutions and other services relating to e-commerce operations (collectively, the &ldquo;Services&rdquo;).
                </p>
                <p>
                  <strong className="text-white">1.2</strong> In these Terms, &ldquo;you&rdquo;, &ldquo;your&rdquo; or &ldquo;Merchant&rdquo; means any individual, business, company, firm, brand or other entity that accesses or uses the Services provided by EVOC Labs.
                </p>
                <p>
                  <strong className="text-white">1.3</strong> You have approached EVOC Labs to use one or more of its Services, and EVOC Labs has agreed to make such Services available to you subject to your acceptance of these Terms.
                </p>
                <p>
                  <strong className="text-white">1.4</strong> EVOC Labs and the Merchant may individually be referred to as a &ldquo;Party&rdquo; and collectively as the &ldquo;Parties&rdquo;.
                </p>
                <p>
                  <strong className="text-white">1.5</strong> These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the Services made available through the EVOC Labs website, application, merchant dashboard, software, websites, APIs and other platforms operated or controlled by EVOC Labs (collectively, the &ldquo;Platform&rdquo;).
                </p>
                <p>
                  <strong className="text-white">1.6</strong> These Terms shall be read together with EVOC Labs&apos; Privacy Policy and any additional policies, guidelines, commercial terms, service-specific conditions or other documents made available by EVOC Labs from time to time (&ldquo;Supplemental Terms&rdquo;). The Privacy Policy and Supplemental Terms shall form an integral part of these Terms.
                </p>
                <p>
                  <strong className="text-white">1.7</strong> By accessing or using the Platform or accepting these Terms, you represent that you have the legal capacity and authority to enter into these Terms. If you are accepting these Terms on behalf of a business or other entity, you confirm that you have the authority to legally bind such entity.
                </p>
                <p>
                  <strong className="text-white">1.8</strong> Where EVOC Labs makes these Terms available in languages other than English, the English version shall prevail in case of any conflict, inconsistency or difference in interpretation.
                </p>
              </div>
            </section>

            {/* 2. COMMENCEMENT AND DURATION */}
            <section id="sec-2" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">02</span>
                2. COMMENCEMENT AND DURATION
              </h2>
              <div className="space-y-3 text-white/70">
                <p>
                  <strong className="text-white">2.1</strong> These Terms shall become effective and binding upon you when you click &ldquo;I Agree&rdquo;, accept these Terms electronically, register for the Services, or otherwise access or use the Platform.
                </p>
                <p>
                  <strong className="text-white">2.2</strong> The Terms shall remain effective until terminated by either Party in accordance with the termination provisions contained herein or until your access to the Services is otherwise discontinued.
                </p>
                <p>
                  <strong className="text-white">2.3</strong> The email address, telephone number or other contact information provided by you during registration or subsequently updated by you shall be treated as your primary contact information (&ldquo;Primary Contact&rdquo;). You are responsible for ensuring that the Primary Contact remains accurate and capable of receiving communications from EVOC Labs.
                </p>
                <p>
                  <strong className="text-white">2.4</strong> You are responsible for maintaining the confidentiality of your Platform account credentials, passwords, API keys and other access information. You shall immediately notify EVOC Labs if you become aware of any unauthorised access to your account.
                </p>
              </div>
            </section>

            {/* 3. SERVICES */}
            <section id="sec-3" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">03</span>
                3. SERVICES
              </h2>

              <div>
                <h3 className="text-base font-bold text-white mb-2">3.1 Scope of Services</h3>
                <p className="text-xs md:text-sm text-white/70 mb-4">
                  <strong>3.1.1</strong> Depending on the services selected by you and the applicable commercial arrangement, EVOC Labs may provide one or more of the following:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { tag: "a", title: "Website and Store Infrastructure", desc: "To create, configure, host, maintain or otherwise provide an e-commerce website or online store for your business, including related store functionality and integrations." },
                    { tag: "b", title: "E-commerce Technology", desc: "To provide technology and software tools relating to online selling, checkout, order management, analytics, automation and other e-commerce operations." },
                    { tag: "c", title: "Logistics Services", desc: "To facilitate shipment and delivery of products through third-party courier and logistics partners (\"Logistics Services\")." },
                    { tag: "d", title: "Marketing and Advertising Services", desc: "To provide advertising, promotional, creative, campaign management, marketing and related growth support for your e-commerce business (\"Marketing Services\")." },
                    { tag: "e", title: "Customer Communication Services", desc: "To provide WhatsApp communication, abandoned-cart recovery, order notifications, price-drop communication, AI calling and other customer communication or automation features." },
                    { tag: "f", title: "Analytics and Operational Tools", desc: "To provide dashboards, reports, analytics and technology designed to assist you in monitoring sales, advertising, logistics and other business operations." }
                  ].map((srv, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-mono text-xs flex items-center justify-center font-bold">
                          {srv.tag}
                        </span>
                        <h4 className="text-sm font-bold text-white">{srv.title}</h4>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed">{srv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs md:text-sm text-white/70">
                <p>
                  <strong className="text-white">3.1.2</strong> The specific Services available to you shall depend on your commercial arrangement with EVOC Labs and may be communicated through your onboarding documentation, Platform, dashboard, written communication or other agreed method.
                </p>
                <p>
                  <strong className="text-white">3.1.3</strong> EVOC Labs may modify, improve, replace, add or remove features of the Services from time to time.
                </p>
                <p>
                  <strong className="text-white">3.1.4</strong> You shall not reproduce, copy, resell, reverse engineer, commercially exploit or otherwise misuse any part of the Platform or Services without EVOC Labs&apos; prior written permission.
                </p>
              </div>
            </section>

            {/* 4. PRICING, SERVICE FEES AND TAXES */}
            <section id="sec-4" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">04</span>
                4. PRICING, SERVICE FEES AND TAXES
              </h2>

              {/* Highlight Card for Pricing Model */}
              <div className="p-6 rounded-2xl bg-blue-600/[0.06] border border-blue-500/30 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Standard Service Fee Model</div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  4% <span className="text-lg font-normal text-white/60">+ applicable GST on Delivered Orders</span>
                </div>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                  <strong className="text-white">4.1</strong> Unless a different fee has been specifically agreed between EVOC Labs and the Merchant in writing, EVOC Labs shall charge a service fee of <strong>4% (four percent) + applicable GST</strong> on the value of Delivered Orders.
                </p>
                <p className="text-xs text-white/70">
                  For the purpose of these Terms, a &ldquo;Delivered Order&rdquo; means an order that has been successfully delivered to the end customer as reflected in the applicable order or logistics records.
                </p>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p>
                  <strong className="text-white">4.2</strong> Cancelled, rejected, returned or RTO orders shall generally not be treated as Delivered Orders for calculation of the 4% service fee.
                </p>
                <p>
                  <strong className="text-white">4.3</strong> The 4% EVOC Labs service fee does not automatically include charges imposed by third-party service providers. Such charges may include, where applicable:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-white/70 pl-2">
                  {[
                    "Logistics and shipping charges",
                    "Payment gateway charges",
                    "Advertising platform charges",
                    "WhatsApp or messaging charges",
                    "Domain or hosting charges",
                    "Third-party software charges"
                  ].map((item, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-2 rounded text-center">
                      {item}
                    </div>
                  ))}
                </div>
                <p><strong className="text-white">4.4</strong> Applicable GST and other statutory taxes shall be charged in addition to the applicable EVOC Labs fees in accordance with law.</p>
                <p><strong className="text-white">4.5</strong> EVOC Labs may issue invoices for its fees, applicable taxes and other amounts payable by the Merchant.</p>
                <p><strong className="text-white">4.6</strong> The Merchant shall pay all invoices and other amounts due to EVOC Labs within the payment period communicated in the applicable commercial arrangement or invoice.</p>
                <p><strong className="text-white">4.7</strong> Where the Merchant fails to pay amounts due, EVOC Labs may, subject to applicable law, suspend or restrict Services until the outstanding amounts are settled.</p>
                <p><strong className="text-white">4.8</strong> Where applicable, EVOC Labs may recover its service fees, logistics charges, third-party expenses or other amounts payable by the Merchant from amounts collected or held on behalf of the Merchant.</p>
                <p><strong className="text-white">4.9</strong> EVOC Labs reserves the right to revise its fees, pricing, logistics rates or other commercial charges by providing reasonable notice to the Merchant. The revised charges shall apply from the effective date communicated by EVOC Labs.</p>
              </div>
            </section>

            {/* 5. LOGISTICS WALLET AND SECURITY DEPOSIT */}
            <section id="sec-5" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">05</span>
                5. LOGISTICS WALLET AND SECURITY DEPOSIT
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                  <div className="text-xs text-white/40">Merchant Security Deposit</div>
                  <div className="text-xl font-bold text-white">₹5,000</div>
                  <p className="text-xs text-white/50">Provided by the Merchant during onboarding.</p>
                </div>
                <div className="p-4 rounded-xl bg-blue-600/[0.08] border border-blue-500/20 space-y-1">
                  <div className="text-xs text-blue-300">Initial Logistics Wallet Value</div>
                  <div className="text-xl font-bold text-blue-400">₹10,000</div>
                  <p className="text-xs text-blue-200/70">Includes additional ₹5,000 EVOC promotional credit.</p>
                </div>
              </div>

              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">5.1</strong> Where applicable under the Merchant&apos;s onboarding or commercial arrangement, the Merchant may be required to provide a security deposit of ₹5,000.</p>
                <p><strong className="text-white">5.2</strong> Upon payment of the ₹5,000 security deposit by the Merchant, EVOC Labs may additionally provide ₹5,000 as EVOC credit to the Merchant&apos;s Logistics Wallet, resulting in an initial Logistics Wallet value/credit of ₹10,000.</p>
                <p><strong className="text-white">5.3</strong> The EVOC-provided ₹5,000 credit is promotional/business credit provided by EVOC Labs and may be subject to the conditions communicated during onboarding.</p>
                <p><strong className="text-white">5.4</strong> The Merchant&apos;s security deposit and EVOC promotional credit shall be treated in accordance with the applicable commercial arrangement.</p>
                <p><strong className="text-white">5.5</strong> Any refund of the security deposit shall be subject to the applicable refund conditions, settlement of outstanding dues and compliance with the Merchant&apos;s agreed commercial terms.</p>
                <p><strong className="text-white">5.6</strong> EVOC Labs may adjust legally recoverable outstanding amounts payable by the Merchant against amounts otherwise refundable to the Merchant.</p>
              </div>
            </section>

            {/* 6. MERCHANT OBLIGATIONS */}
            <section id="sec-6" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">06</span>
                6. MERCHANT OBLIGATIONS
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">6.1</strong> The Merchant shall provide accurate and complete information required for the provision of Services.</p>
                <p><strong className="text-white">6.2</strong> The Merchant is solely responsible for the products or services offered through its online store, including their:</p>
                <div className="flex flex-wrap gap-2 py-1 pl-2">
                  {[
                    "Quality", "Authenticity", "Safety", "Pricing",
                    "Packaging", "Labelling", "Product descriptions",
                    "Legality", "Compliance with applicable laws"
                  ].map((item, i) => (
                    <span key={i} className="bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded text-xs text-white/80">
                      {item}
                    </span>
                  ))}
                </div>
                <p><strong className="text-white">6.3</strong> The Merchant shall obtain and maintain all registrations, licences, permissions and approvals required for operating its business.</p>
                <p><strong className="text-white">6.4</strong> The Merchant shall comply with all applicable laws relating to e-commerce, taxation, consumer protection, advertising, product safety, packaging, labelling, data protection and intellectual property.</p>
                <p><strong className="text-white">6.5</strong> The Merchant shall not provide false, misleading or inaccurate information to EVOC Labs, its customers, logistics partners, payment providers or other service providers.</p>
                <p><strong className="text-white">6.6</strong> The Merchant shall be responsible for resolving disputes relating to its products, orders, customers, refunds, warranties, replacements and other matters arising between the Merchant and its customers.</p>
              </div>
            </section>

            {/* 7. INTELLECTUAL PROPERTY */}
            <section id="sec-7" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">07</span>
                7. INTELLECTUAL PROPERTY
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">7.1</strong> All intellectual property rights relating to the Platform, Services, software, source code, technology, dashboards, systems, processes, designs, documentation, trademarks, logos and other proprietary materials owned or licensed by EVOC Labs shall remain the property of EVOC Labs or its respective licensors.</p>
                <p><strong className="text-white">7.2</strong> Subject to these Terms, EVOC Labs grants the Merchant a limited, non-exclusive, non-transferable and revocable right to use the Services during the period in which the Merchant is authorised to use them.</p>
                <p><strong className="text-white">7.3</strong> No ownership rights in EVOC Labs&apos; technology or intellectual property are transferred to the Merchant unless expressly agreed in writing.</p>
                <p><strong className="text-white">7.4</strong> The Merchant shall not copy, reproduce, modify, reverse engineer, distribute, licence, sell or commercially exploit EVOC Labs&apos; proprietary technology without prior written permission.</p>
                <p><strong className="text-white">7.5</strong> The Merchant retains ownership of its own trademarks, logos, product information, photographs, content and other materials supplied to EVOC Labs. The Merchant grants EVOC Labs the necessary permission to use such materials for providing the Services.</p>
              </div>
            </section>

            {/* 8. CONFIDENTIALITY */}
            <section id="sec-8" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">08</span>
                8. CONFIDENTIALITY
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">8.1</strong> Each Party may receive confidential or proprietary information belonging to the other Party in connection with the Services.</p>
                <p><strong className="text-white">8.2</strong> The receiving Party shall use reasonable care to protect confidential information and shall use such information only for purposes connected with the business relationship.</p>
                <p><strong className="text-white">8.3</strong> Confidential information shall not be disclosed to any unauthorised third party except: (a) with the prior written consent of the disclosing Party; (b) where required by law or a governmental authority; or (c) where disclosure is reasonably required to provide the Services.</p>
                <p><strong className="text-white">8.4</strong> Confidentiality obligations shall continue after termination of the Services for information that remains confidential or proprietary.</p>
                <p><strong className="text-white">8.5</strong> The Merchant shall promptly notify EVOC Labs if it becomes aware of any unauthorised disclosure, access or use of EVOC Labs&apos; confidential information.</p>
              </div>
            </section>

            {/* 9. THIRD-PARTY SERVICES */}
            <section id="sec-9" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">09</span>
                9. THIRD-PARTY SERVICES
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">9.1</strong> EVOC Labs may use, integrate with or rely upon third-party service providers for providing certain portions of the Services. These may include logistics companies, payment gateways, advertising platforms (e.g. Meta Ads, Google Ads), communication providers (e.g. WhatsApp Business Cloud API), cloud infrastructure providers, analytics providers and other technology providers.</p>
                <p><strong className="text-white">9.2</strong> Third-party services may be subject to separate terms, policies, pricing and availability (including Google Terms of Service and Meta Business &amp; Commercial Terms).</p>
                <p><strong className="text-white">9.3</strong> EVOC Labs does not control the policies, systems, availability or performance of third-party providers and shall not be responsible for their independent acts, omissions, outages or policy changes, except to the extent required under applicable law.</p>
                <p><strong className="text-white">9.4</strong> The Merchant agrees to comply with the applicable terms and policies of third-party providers where their services are used by the Merchant.</p>
              </div>
            </section>

            {/* 10. TERMINATION AND CONSEQUENCES */}
            <section id="sec-10" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">10</span>
                10. TERMINATION AND CONSEQUENCES
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">10.1</strong> EVOC Labs may terminate or discontinue the Merchant&apos;s access to the Services by providing notice, subject to the applicable commercial arrangement and applicable law.</p>
                <p><strong className="text-white">10.2</strong> The Merchant may discontinue its use of the Services in accordance with the applicable commercial arrangement or by providing notice to EVOC Labs.</p>
                <p><strong className="text-white">10.3</strong> EVOC Labs may immediately suspend or terminate Services where:</p>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-white/70 pl-2">
                  <li>the Merchant materially breaches these Terms;</li>
                  <li>the Merchant fails to pay amounts due;</li>
                  <li>fraudulent or suspicious activity is identified;</li>
                  <li>the Merchant provides prohibited products or services;</li>
                  <li>the Merchant violates applicable law;</li>
                  <li>continued provision of Services creates legal, regulatory, security or operational risk; or</li>
                  <li>a third-party provider or authority requires such suspension.</li>
                </ul>
                <p><strong className="text-white">10.4</strong> Upon termination: (a) access to the relevant Services may be discontinued; (b) licences granted to the Merchant under these Terms shall cease; (c) outstanding amounts payable to EVOC Labs shall remain due; (d) the Merchant shall cease using EVOC Labs&apos; proprietary technology and materials; and (e) provisions intended to survive termination shall continue to remain effective.</p>
                <p><strong className="text-white">10.5</strong> Termination shall not affect any rights or obligations accrued before the effective date of termination.</p>
              </div>
            </section>

            {/* 11. DISCLAIMERS AND WARRANTIES */}
            <section id="sec-11" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">11</span>
                11. DISCLAIMERS AND WARRANTIES
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">11.1</strong> The Services are provided on an &ldquo;as available&rdquo; basis to the maximum extent permitted by applicable law.</p>
                <p><strong className="text-white">11.2</strong> EVOC Labs does not warrant that the Services will always be uninterrupted, error-free, completely secure or available at all times.</p>
                <p><strong className="text-white">11.3</strong> EVOC Labs does not guarantee any particular level of:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-white/60 py-1 pl-2">
                  {["Sales", "Revenue", "Profit", "ROAS", "Leads", "Conversion rate", "Delivery percentage", "Customer acquisition", "Business growth"].map((m, i) => (
                    <div key={i} className="bg-white/[0.02] border border-white/5 p-2 rounded text-center font-mono">
                      {m}
                    </div>
                  ))}
                </div>
                <p><strong className="text-white">11.4</strong> Advertising and marketing results may depend on factors beyond EVOC Labs&apos; control, including product-market fit, pricing, competition, customer behaviour, advertising platform algorithms, market conditions and creative performance.</p>
                <p><strong className="text-white">11.5</strong> EVOC Labs facilitates logistics through third-party providers and does not itself operate every transportation or delivery service.</p>
                <p><strong className="text-white">11.6</strong> EVOC Labs does not guarantee the performance, response time, availability or uninterrupted operation of third-party payment gateways, courier partners, advertising platforms, communication providers or other third-party services.</p>
                <p><strong className="text-white">11.7</strong> The Merchant is solely responsible for its online store, products, services, customers, orders and compliance with applicable laws.</p>
                <p><strong className="text-white">11.8</strong> The Merchant is responsible for determining, collecting, reporting and paying all taxes, duties, fees and other statutory amounts applicable to its business and sales, except for taxes that EVOC Labs is legally required to collect and remit in respect of its own services.</p>
              </div>
            </section>

            {/* 12. LIMITATION OF LIABILITY */}
            <section id="sec-12" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">12</span>
                12. LIMITATION OF LIABILITY
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">12.1</strong> To the maximum extent permitted by applicable law, EVOC Labs shall not be liable for indirect, incidental, special, consequential or punitive losses, including loss of profits, revenue, goodwill, business opportunities or anticipated savings.</p>
                <p><strong className="text-white">12.2</strong> EVOC Labs shall not be responsible for losses arising solely from the acts, omissions, failures or service interruptions of third-party providers.</p>
                <p><strong className="text-white">12.3</strong> EVOC Labs shall not be responsible for losses resulting from inaccurate information, unlawful activities, products or content supplied or controlled by the Merchant.</p>
                <p><strong className="text-white">12.4</strong> Nothing in these Terms shall exclude or limit any liability which cannot legally be excluded or limited under applicable law.</p>
              </div>
            </section>

            {/* 13. DATA PRIVACY */}
            <section id="sec-13" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">13</span>
                13. DATA PRIVACY
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">13.1</strong> In providing the Services, EVOC Labs may collect, store and process information relating to the Merchant, its business, transactions, customers and use of the Platform.</p>
                <p><strong className="text-white">13.2</strong> Where the Merchant provides EVOC Labs with customer information, the Merchant represents that it has obtained all necessary permissions and consents required under applicable law for such information to be collected, transferred and processed.</p>
                <p><strong className="text-white">13.3</strong> The Merchant shall comply with applicable privacy and data protection laws relating to information collected from its customers.</p>
                <p><strong className="text-white">13.4</strong> EVOC Labs may process information as reasonably necessary to operate, secure, maintain and improve its Services and to comply with legal obligations.</p>
                <p><strong className="text-white">13.5</strong> Further information regarding the collection and processing of personal information is provided in EVOC Labs&apos; Privacy Policy (accessible at <Link href="/privacy" className="text-blue-400 hover:underline">/privacy</Link>).</p>
              </div>
            </section>

            {/* 14. INDEMNIFICATION */}
            <section id="sec-14" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">14</span>
                14. INDEMNIFICATION
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">14.1</strong> The Merchant agrees to indemnify and hold harmless EVOC Labs, its directors, officers, employees, affiliates, representatives and service providers from claims, losses, liabilities, damages, costs and expenses arising from:</p>
                <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-white/70 pl-2">
                  <li>the Merchant&apos;s use of the Services;</li>
                  <li>breach of these Terms by the Merchant;</li>
                  <li>products or services sold by the Merchant;</li>
                  <li>violation of applicable laws or regulations;</li>
                  <li>infringement of intellectual property rights;</li>
                  <li>misleading, inaccurate or unlawful product or advertising claims;</li>
                  <li>disputes between the Merchant and its customers;</li>
                  <li>misuse of customer information by the Merchant; or</li>
                  <li>fraudulent or unlawful activity conducted by the Merchant.</li>
                </ul>
                <p><strong className="text-white">14.2</strong> The Merchant shall reasonably cooperate with EVOC Labs in responding to claims or proceedings arising from the matters described above.</p>
              </div>
            </section>

            {/* 15. GOVERNING LAW */}
            <section id="sec-15" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">15</span>
                15. GOVERNING LAW
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">15.1</strong> These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
                <p><strong className="text-white">15.2</strong> The application of conflict-of-law principles shall not prevent the application of Indian law to these Terms.</p>
              </div>
            </section>

            {/* 16. DISPUTE RESOLUTION */}
            <section id="sec-16" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">16</span>
                16. DISPUTE RESOLUTION
              </h2>
              <div className="space-y-3 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">16.1</strong> Any complaint, dispute or concern relating to the Services should initially be raised with EVOC Labs through its designated support or communication channel.</p>
                <p><strong className="text-white">16.2</strong> The Parties shall make reasonable efforts to resolve disputes through good-faith discussions before commencing formal proceedings.</p>
                <p><strong className="text-white">16.3</strong> If a dispute cannot be resolved through discussions, either Party may pursue the remedies available under applicable Indian law.</p>
                <p><strong className="text-white">16.4</strong> Where the Parties have separately agreed in writing to arbitration, the dispute shall be resolved in accordance with the Arbitration and Conciliation Act, 1996, as amended from time to time. The seat and venue of arbitration shall be as specified in the applicable written agreement.</p>
              </div>
            </section>

            {/* 17. FORCE MAJEURE */}
            <section id="sec-17" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">17</span>
                17. FORCE MAJEURE
              </h2>
              <div className="space-y-2 text-xs md:text-sm text-white/70">
                <p><strong className="text-white">17.1</strong> EVOC Labs shall not be liable for any delay, interruption or failure to perform its obligations where such failure results from circumstances beyond its reasonable control.</p>
                <p><strong className="text-white">17.2</strong> Such circumstances may include natural disasters, fire, flood, epidemic, pandemic, war, terrorism, civil unrest, strikes, governmental actions, changes in law, internet or telecommunications failures, infrastructure failures, cyber incidents, utility failures or disruption of third-party services.</p>
                <p><strong className="text-white">17.3</strong> EVOC Labs shall make reasonable efforts to restore affected Services once the relevant circumstances cease or become manageable.</p>
              </div>
            </section>

            {/* 18. MISCELLANEOUS PROVISIONS */}
            <section id="sec-18" className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-blue-600/[0.05] border border-blue-500/20 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-blue-500 font-mono text-lg">18</span>
                18. MISCELLANEOUS PROVISIONS
              </h2>

              <div className="space-y-4 text-xs md:text-sm text-white/70">
                <div>
                  <h3 className="font-bold text-white text-sm mb-1">18.1 Changes to Terms</h3>
                  <p>
                    EVOC Labs may update these Terms from time to time to reflect changes to its Services, business operations, technology, legal requirements or regulatory obligations. The updated Terms shall be published on the Platform or communicated through an appropriate channel. Where required, you may be asked to provide express acceptance of the revised Terms.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm mb-1">18.2 Modification of Services</h3>
                  <p>
                    EVOC Labs reserves the right to add, modify, suspend or discontinue any Service or feature, temporarily or permanently. Where reasonably practicable, EVOC Labs may provide notice of material changes.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-white text-sm mb-1">18.3 Notices</h3>
                  <p>
                    Notices relating to these Terms may be communicated through the Merchant&apos;s registered email address, telephone number, WhatsApp, Platform notification or other contact information provided to EVOC Labs.
                  </p>
                  <p className="mt-1">
                    Formal notices to EVOC Labs may be sent using the contact details published on the EVOC Labs website: <a href="https://www.evoclabs.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://www.evoclabs.com/</a>
                  </p>
                </div>
              </div>

              {/* Official Entity Summary Card */}
              <div className="p-5 rounded-xl bg-black/40 border border-white/10 text-xs text-white/60 space-y-1">
                <div className="font-bold text-white text-sm">EVOC LABS PVT. LTD.</div>
                <div>Official Website: <a href="https://www.evoclabs.com" className="text-blue-400 underline">evoclabs.com</a></div>
                <div>Support Email: <a href="mailto:nishant@evoclabs.com" className="text-blue-400 underline">nishant@evoclabs.com</a></div>
                <div>Registered Address: Sitarganj Road, Jail Camp, Ward No. 5, U.S. Nagar, Uttarakhand, India</div>
              </div>
            </section>

          </article>

        </div>

      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
