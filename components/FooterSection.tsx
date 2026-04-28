'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Replace missing Lucide brand icons with simple inline SVGs
const SocialIcons = [
  // Instagram
  (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  // Linkedin
  (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
  // Facebook
  (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
  // Youtube
  (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>,
  // Twitter
  (props: any) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
];

export default function FooterSection() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#030303]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-[#183EEB]/10 rounded-full blur-[150px] pointer-events-none z-0" />
      
      {/* ─── SECTION 1: CTA & TESTIMONIALS ─── */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Testimonials) - 7 columns */}
          <div className="xl:col-span-7 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What our <span className="text-[#183EEB]">users</span> say</h2>
              <p className="text-white/60 text-sm md:text-base max-w-md">Join thousands of brands that are scaling their e-commerce operations with Evoc Labs.</p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.15 } }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Testimonial 1 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex-1 bg-white/[0.02] border border-white/[0.08] hover:border-[#183EEB]/40 hover:shadow-[0_0_30px_rgba(24,62,235,0.2)] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div className="flex text-yellow-500 text-sm gap-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-white/80 text-sm flex-1 leading-relaxed">"Evoc Labs has completely transformed how we handle ads and logistics. Everything in one place is a game changer."</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="p-[2px] rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1] shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Sarah J.</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider">Brand Founder</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex-1 bg-white/[0.02] border border-white/[0.08] hover:border-[#183EEB]/40 hover:shadow-[0_0_30px_rgba(24,62,235,0.2)] rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
              >
                <div className="flex text-yellow-500 text-sm gap-1">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-white/80 text-sm flex-1 leading-relaxed">"The AI insights are incredibly accurate. We saved a lot of manual hours and boosted our delivery success rate."</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="p-[2px] rounded-full bg-gradient-to-br from-[#3b82f6] to-[#6366f1] shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">Mike R.</p>
                    <p className="text-white/40 text-[10px] uppercase tracking-wider">Operations Manager</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column (CTA Card) - 5 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ 
              opacity: 1, 
              scale: 1,
              boxShadow: [
                "0 0 10px rgba(24,62,235,0.1)",
                "0 0 60px rgba(24,62,235,0.4)",
                "0 0 30px rgba(24,62,235,0.15)"
              ]
            }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="xl:col-span-5 w-full rounded-3xl p-8 md:p-10 border border-[#183EEB]/20 flex flex-col relative overflow-hidden"
            style={{
              background: 'radial-gradient(circle at top right, rgba(24,62,235,0.15), rgba(15,23,42,1))'
            }}
          >
            {/* Ambient glow inside card */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[250px] h-[150px] bg-[#183EEB]/30 blur-[60px] pointer-events-none" />
            
            <div className="relative z-10 mb-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                Book a free demo
              </h3>
              <p className="text-white/60 text-sm">
                Fill in your details and we'll reach out shortly.
              </p>
            </div>
            
            <form className="relative z-10 space-y-4 w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5 text-left">
                <label className="block text-[13px] font-medium text-white/80 ml-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#1a1f2e] border border-white/5 rounded-xl h-[48px] px-4 text-white text-[14px] focus:border-[#183EEB] focus:ring-2 focus:ring-[#183EEB]/50 outline-none transition-all shadow-inner"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-white/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-[#1a1f2e] border border-white/5 rounded-xl h-[48px] px-4 text-white text-[14px] focus:border-[#183EEB] focus:ring-2 focus:ring-[#183EEB]/50 outline-none transition-all shadow-inner"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[13px] font-medium text-white/80 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full bg-[#1a1f2e] border border-white/5 rounded-xl h-[48px] px-4 text-white text-[14px] focus:border-[#183EEB] focus:ring-2 focus:ring-[#183EEB]/50 outline-none transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="space-y-1.5 pb-4 text-left">
                <label className="block text-[13px] font-medium text-white/80 ml-1">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#1a1f2e] border border-white/5 rounded-xl p-4 text-white text-[14px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 outline-none transition-all resize-none shadow-inner"
                />
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full text-white font-semibold h-[54px] rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(24,62,235,0.3)]"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #183EEB)'
                }}
              >
                Book Demo <span>&rarr;</span>
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>

      {/* ─── SECTION 2: DIVIDER ─── */}
      <div className="w-full max-w-[1440px] mx-auto px-10 md:px-20 mt-16 mb-16 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* ─── SECTION 3: FOOTER LINKS ─── */}
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 pb-20 relative z-10">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-32">
          
          {/* Column 1: Brand */}
          <div className="space-y-6 max-w-[400px]">
            <div className="text-4xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              e
            </div>
            <p className="text-[14px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Evoc Labs is an AI-powered platform that runs your entire e-commerce business—from store to ads to orders in one place.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.85)' }}>+91 9548833953</p>
              <p className="text-[14px]" style={{ color: 'rgba(255,255,255,0.85)' }}>contact@evoclabs.com</p>
            </div>
            <div className="flex gap-[10px] pt-4">
              {SocialIcons.map((Icon, i) => (
                <div key={i} className="w-8 h-8 rounded-md flex items-center justify-center transition-all cursor-pointer bg-white/[0.06] text-white/70 hover:bg-white/[0.12] hover:text-white">
                  <Icon width={16} height={16} />
                </div>
              ))}
            </div>
          </div>

          {/* Link Columns Grouped Right */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            {/* Column 2: EVOC LABS */}
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                EVOC LABS
              </h4>
              <ul className="space-y-[14px]">
                {['Worked Brands', 'Testimonials', 'Pricing', 'Blogs', 'Login'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: COMPANY */}
            <div>
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                COMPANY
              </h4>
              <ul className="space-y-[14px]">
                {['Home', 'About Us', 'Career', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: LEGALITIES */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[14px] font-bold uppercase tracking-[0.1em] mb-[22px]" style={{ color: 'rgba(255,255,255,0.55)' }}>
                LEGALITIES
              </h4>
              <ul className="space-y-[14px]">
                {['Privacy Policy', 'Terms of Service'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[15px] text-white hover:text-[#183EEB] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
      </div>

    </footer>
  );
}
