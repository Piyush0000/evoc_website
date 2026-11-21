'use client';

import React, { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { useRouter } from 'next/navigation';
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

type FooterLink = { label: string; href: string; external?: boolean; highlight?: boolean };

const footerColumns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Evoc Labs',
    links: [
      { label: 'Brands we worked with', href: '/#brands' },
      { label: 'Testimonials', href: '/#testimonials' },
      { label: 'Pricing Structure', href: '/#impact' },
      { label: 'Case Studies & Blog', href: 'https://www.unstoppableindia.net/post/how-evoc-labs-scaled-a-brand-from-32-lakhs-month-to-1-crore-month-in-just-30-days', external: true },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Us', href: 'mailto:contact@evoclabs.com', external: true },
      { label: 'Login Portal →', href: 'https://app.evoclabs.com/', external: true, highlight: true },
    ],
  },
  {
    title: 'Legalities',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Contract Termination', href: '/contract-termination' },
    ],
  },
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
                  Join 500+ brands that are scaling their e-commerce operations with EVOC Labs.
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

      {/* ─── SECTION 2: NAVIGATION + GIANT WORDMARK ─── */}
      <div className="relative w-full mt-6 overflow-hidden bg-gradient-to-b from-[#030303] via-[#040a1c] to-[#06112b]">
        {/* Vertical stripe texture, fading in towards the bottom */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(120,170,255,0.045) 0px, rgba(120,170,255,0.045) 1px, transparent 1px, transparent 34px)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 45%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 45%, black 100%)',
          }}
        />

        {/* Diagonal light beam from the top right */}
        <div
          aria-hidden="true"
          className="absolute -top-[30%] right-[8%] w-[38%] h-[170%] pointer-events-none rotate-[28deg] origin-top"
          style={{
            background: 'linear-gradient(to bottom, rgba(70,150,255,0.30) 0%, rgba(40,110,255,0.14) 45%, transparent 85%)',
            filter: 'blur(70px)',
          }}
        />

        {/* Hairline at the top */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 md:pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Brand & Identity Column */}
            <AnimatedContainer delay={0.1} className="lg:col-span-5">
              <p className="text-[12px] font-medium text-[#4c8dff] pb-3 border-b border-[#183EEB]/40">
                &copy; {new Date().getFullYear()} EVOC LABS PVT LTD
              </p>

              {/* Social Icons */}
              <div className="flex gap-2 pt-5">
                {SocialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.name}
                    aria-label={social.name}
                    className="w-8 h-8 rounded-md flex items-center justify-center transition-all bg-white/[0.04] border border-white/[0.12] text-white/70 hover:bg-[#183EEB]/25 hover:border-[#183EEB]/60 hover:text-white"
                  >
                    <social.icon width={14} height={14} />
                  </a>
                ))}
              </div>

              <p className="mt-5 text-[13px] leading-relaxed text-white/60 max-w-sm">
                <span className="text-white font-semibold">Evoc Labs</span> is an AI-powered full-stack commerce platform founded by <span className="text-white font-semibold">Nishant Raj</span> that helps e-commerce and D2C brands launch, manage, and scale from a single dashboard. Instead of charging upfront subscription fees, it operates on a performance-based model of 4% per delivered order.
              </p>

              <div className="space-y-1.5 pt-4 text-[13px] text-white/75">
                <a href="tel:+919548833953" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#4c8dff]" />
                  <span>+91 9548833953</span>
                </a>
                <a href="mailto:contact@evoclabs.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#4c8dff]" />
                  <span>contact@evoclabs.com</span>
                </a>
              </div>
            </AnimatedContainer>

            {/* Nav Columns */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
              {footerColumns.map((col, ci) => (
                <AnimatedContainer key={col.title} delay={0.2 + ci * 0.1}>
                  <h4 className="text-[12px] font-medium text-[#4c8dff] pb-3 mb-5 border-b border-[#183EEB]/40">
                    {col.title}
                  </h4>
                  <ul className="space-y-3 text-[13px]">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        {l.external ? (
                          <a
                            href={l.href}
                            target={l.href.startsWith('http') ? '_blank' : undefined}
                            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`${l.highlight ? 'text-white font-semibold hover:text-[#4c8dff]' : 'text-white/80 hover:text-white'} transition-colors duration-300`}
                          >
                            {l.label}
                          </a>
                        ) : (
                          <Link href={l.href} className="text-white/80 hover:text-white transition-colors duration-300">
                            {l.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </div>

        {/* Giant wordmark — cropped by the bottom edge, letters light up on hover */}
        <div className="relative z-10 mt-14 md:mt-20 h-[15vw] max-h-[205px] overflow-hidden select-none">
          <div
            aria-label="Evoc Labs"
            role="img"
            className="flex justify-center whitespace-nowrap leading-[0.8] font-semibold tracking-[-0.05em]"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: 'min(21vw, 290px)' }}
          >
            {'Evoc Labs'.split('').map((ch, i) =>
              ch === ' ' ? (
                <span key={i} className="w-[0.22em]" aria-hidden="true" />
              ) : (
                <span key={i} aria-hidden="true" className="footer-wordmark-letter">
                  {ch}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
