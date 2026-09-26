'use client';

import React, { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { getPath } from '@/lib/paths';
import { ArrowRight, ShieldCheck, Mail, Phone } from 'lucide-react';

const SocialLinks = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/evoclabs.official/',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/evoc-labs/?viewAsMember=true',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: 'X',
    url: 'https://x.com/evoclabz?s=21',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@evoclabs.official',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
      </svg>
    )
  }
];

const testimonials = [
  {
    name: "Style Elevates",
    role: "Founder, Fashion D2C Brand",
    content: "Before EVOC Labs, we were juggling multiple tools for ads, store management and recovery. Their platform brought everything into one place and our conversion rate improved noticeably within weeks."
  },
  {
    name: "Pistachious Bracelets",
    role: "Co-Founder, Jewellery Brand",
    content: "Working with EVOC Labs felt like adding a growth team to our business. Their AI automations and checkout optimizations helped us scale profitably."
  },
  {
    name: "Avikanha",
    role: "Owner, Consumer Gadgets Brand",
    content: "We saw a major difference in how we manage ads and operations after moving to EVOC Labs. Having sales, logistics and performance data on one dashboard changed our decision-making."
  },
  {
    name: "Moonstruck appliances",
    role: "Founder, Home Appliance Brand",
    content: "What impressed us most was the WhatsApp recovery automation and AI calling integrations. We started recovering abandoned orders at a scale we couldn’t manage manually."
  },
  {
    name: "Kickdock",
    role: "Director, Homeware Brand",
    content: "EVOC Labs didn’t just give us software, they gave us a growth system. From store optimization to retention automations, everything was built for scaling."
  },
  {
    name: "Ratvia Jewellers",
    role: "Founder, Multi-Channel Brand",
    content: "We’ve worked with multiple agencies before, but EVOC Labs feels more like a tech growth partner. Their software replaced all the cash burning."
  }
];

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', y: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FooterSection({ hideCTA = false }: { hideCTA?: boolean }) {
  const router = useRouter();

  return (
    <footer className="relative w-full overflow-hidden bg-[#030303]">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#183EEB]/10 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* ─── SECTION 1: CTA & TESTIMONIALS (PRESERVED) ─── */}
      {!hideCTA && (
        <div id="testimonials" className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Column (Testimonials) - 7 columns */}
            <div className="xl:col-span-7 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                  Trusted by <span className="text-[#183EEB] italic font-serif">forward-thinking</span> brands
                </h2>
                <p className="text-white/40 text-sm md:text-base max-w-md font-medium">
                  Join 100+ brands that are scaling their e-commerce operations with EVOC Labs.
                </p>
              </motion.div>

              <div className="relative mt-4 group">
                {/* Fade overlays */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />

                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex gap-4 py-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40,
                        ease: "linear"
                      }
                    }}
                    whileHover={{ transition: { duration: 80 } }}
                  >
                    {[...testimonials, ...testimonials].map((t, i) => (
                      <div
                        key={i}
                        className="w-[300px] md:w-[380px] shrink-0 bg-white/[0.02] border border-white/[0.05] hover:border-[#183EEB]/30 rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500"
                      >
                        <p className="text-white/70 text-[13px] leading-relaxed flex-1 font-medium italic">
                          &quot;{t.content}&quot;
                        </p>
                        <div className="flex flex-col pt-2 border-t border-white/5">
                          <p className="text-white text-[14px] font-bold">{t.name}</p>
                          <p className="text-[#183EEB] text-[10px] uppercase font-bold tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right Column (CTA Card) - 5 columns */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="xl:col-span-5 w-full rounded-3xl p-10 md:p-12 border border-[#183EEB]/20 flex flex-col relative z-30 overflow-hidden shadow-[0_0_80px_rgba(24,62,235,0.1)]"
              style={{
                background: 'radial-gradient(circle at top right, rgba(24,62,235,0.15), rgba(15,23,42,1))'
              }}
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-[#183EEB]/30 blur-[60px] pointer-events-none" />

              <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight relative z-10">
                Ready to Scale?
              </h3>
              <p className="text-white/60 text-lg md:text-xl mb-10 leading-relaxed relative z-10">
                Experience the AI-powered commerce operating system in action.
              </p>

              <div className="block w-full relative z-10 pointer-events-auto">
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(24,62,235,0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    console.log("Footer Ready to Scale clicked");
                    try {
                      if (typeof window !== 'undefined' && (window as any).fbq) {
                        (window as any).fbq('track', 'Lead');
                      }
                    } catch (e) {
                      console.error('Meta Pixel error:', e);
                    }
                    if (typeof window !== 'undefined' && window.location.pathname === '/demo') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      router.push('/demo');
                    }
                  }}
                  className="w-full bg-[#183EEB] text-white font-bold h-[72px] rounded-2xl flex items-center justify-center gap-3 transition-all cursor-pointer group"
                >
                  <span className="uppercase tracking-widest text-sm">Book a Free Demo Now</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.div>
              </div>

              <div className="mt-8 flex items-center justify-center gap-2 text-white/20 text-[10px] uppercase tracking-widest font-bold relative z-10">
                <ShieldCheck className="w-3.5 h-3.5" />
                Secure & Confidential
              </div>
            </motion.div>

          </div>
        </div>
      )}

      {/* ─── SECTION 2: HIGH-TECH RADIAL BORDER & NAVIGATION ─── */}
      <div className="relative w-full max-w-7xl mx-auto px-6 pt-16 pb-14 mt-6">

        {/* Curved Top Border with Horizon Glow Line (Extracted from Design) */}
        <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/5 md:w-1/3 h-[2px] bg-gradient-to-r from-transparent via-[#183EEB] to-transparent blur-[1px]" />

        {/* Subtle radial ambient cone from top line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 pointer-events-none"
          style={{
            background: 'radial-gradient(50% 120px at 50% 0%, rgba(24, 62, 235, 0.12), transparent)'
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 relative z-10">

          {/* Brand & Identity Column - 5 columns */}
          <AnimatedContainer delay={0.1} className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={getPath('/logo.png')}
                alt="Evoc Labs Logo"
                width={42}
                height={42}
                className="object-contain brightness-[3] grayscale"
                style={{ width: '42px', height: '42px' }}
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Evoc <span className="text-[#183EEB]">Labs</span>
              </span>
            </div>

            <p className="text-[14px] leading-relaxed text-white/70 max-w-sm">
              Evoc Labs is an AI-powered platform that runs your entire e-commerce business—from store to ads to orders in one place.
            </p>

            <div className="space-y-2 pt-1 text-[13px] text-white/80">
              <p className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#183EEB]" />
                <span>+91 9548833953</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#183EEB]" />
                <span>contact@evoclabs.com</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 pt-2">
              {SocialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-white/[0.04] border border-white/[0.08] text-white/70 hover:bg-[#183EEB]/20 hover:border-[#183EEB]/40 hover:text-white hover:scale-105"
                >
                  <social.icon width={16} height={16} />
                </a>
              ))}
            </div>
          </AnimatedContainer>

          {/* Nav Categories Column - 7 columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12">

            {/* EVOC LABS */}
            <AnimatedContainer delay={0.2}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#183EEB] mb-5">
                EVOC LABS
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/#brands" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Brands we worked with
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonials" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/#impact" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Pricing Structure
                  </Link>
                </li>
                <li>
                  <a href="https://www.unstoppableindia.net/post/how-evoc-labs-scaled-a-brand-from-32-lakhs-month-to-1-crore-month-in-just-30-days" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Case Studies & Blog
                  </a>
                </li>
              </ul>
            </AnimatedContainer>

            {/* COMPANY */}
            <AnimatedContainer delay={0.3}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#183EEB] mb-5">
                COMPANY
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <a href="mailto:contact@evoclabs.com" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://app.evoclabs.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-[#183EEB] hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-300 font-semibold">
                    Login Portal →
                  </a>
                </li>
              </ul>
            </AnimatedContainer>

            {/* LEGALITIES */}
            <AnimatedContainer delay={0.4}>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#183EEB] mb-5">
                LEGALITIES
              </h4>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contract-termination" className="text-white/70 hover:text-white hover:translate-x-1 inline-flex items-center transition-all duration-300">
                    Contract Termination
                  </Link>
                </li>
              </ul>
            </AnimatedContainer>

          </div>

        </div>

        {/* ─── BOTTOM COPYRIGHT BAR ─── */}
        <AnimatedContainer delay={0.5} className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} EVOC LABS PVT LTD. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
            <Link href="/contract-termination" className="hover:text-white/80 transition-colors">
              Contract Termination
            </Link>
            <a href="mailto:contact@evoclabs.com" className="hover:text-white/80 transition-colors">
              Support
            </a>
          </div>
        </AnimatedContainer>

      </div>
    </footer>
  );
}
