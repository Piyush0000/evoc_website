'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, User, ShieldCheck, X, Loader2, CheckCircle2, ArrowRight } from 'lucide-react';

export default function BlogGate() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user has already subscribed
    const isSubscribed = localStorage.getItem('evoc_blog_subscribed') === 'true';
    if (!isSubscribed) {
      // Delay showing the popup slightly for a premium feel (e.g. 1.2 seconds)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setError(null);

    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    
    try {
      if (apiBase) {
        const response = await fetch(`${apiBase}/leads`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            phoneNumber,
            formType: 'blog-subscribe',
          }),
        });

        if (response.status !== 201 && response.status !== 200) {
          throw new Error(`Request failed (${response.status})`);
        }
      }
      
      // Success!
      localStorage.setItem('evoc_blog_subscribed', 'true');
      setSubscribed(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    } catch (err: any) {
      console.error('Subscription failed:', err);
      // Even if the network/API fails, let's save the subscription locally so the user is not locked out
      localStorage.setItem('evoc_blog_subscribed', 'true');
      setSubscribed(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 1500);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    router.push('/');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-[20px] pointer-events-auto"
        >
          {/* Main Modal Card */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="relative w-full max-w-[500px] bg-slate-950/85 border border-white/[0.08] p-8 md:p-10 rounded-[32px] shadow-[0_0_80px_rgba(24,62,235,0.25)] overflow-hidden"
          >
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#183EEB]/20 blur-[60px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-blue-500/10 blur-[50px] rounded-full pointer-events-none -z-10" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.03] border border-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Body */}
            {subscribed ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold uppercase italic tracking-tighter mb-2 text-white" style={{ fontFamily: 'var(--font-instrument), sans-serif' }}>
                  Welcome to Evoc Insights!
                </h3>
                <p className="text-white/50 text-sm max-w-xs leading-relaxed font-medium">
                  Your access has been unlocked. Get ready for premium D2C scaling blueprints!
                </p>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="mb-8">
                  <span className="text-[#183EEB] text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">
                    Evoc Labs Exclusive
                  </span>
                  <h3 className="text-3xl font-bold uppercase italic tracking-tighter text-white mb-3 leading-[0.95]" style={{ fontFamily: 'var(--font-instrument), sans-serif' }}>
                    Unlock Premium <span className="text-[#183EEB]">D2C Stories</span>
                  </h3>
                  <p className="text-white/45 text-[13px] md:text-[14px] leading-relaxed font-medium">
                    Enter your name and phone number to access our complete D2C blueprints, AI voice confirmatory strategies, and RTO scaling case studies.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                      Your Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-[#183EEB] transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={loading}
                        placeholder="Full Name"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm disabled:opacity-60 text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/30 ml-1">
                      Phone Number
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/20 group-focus-within:text-[#183EEB] transition-colors" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        disabled={loading}
                        placeholder="e.g. +91 99999 99999"
                        required
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 focus:border-[#183EEB]/50 focus:bg-white/[0.05] outline-none transition-all text-sm disabled:opacity-60 text-white"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-3 bg-[#183EEB] hover:bg-[#183EEB]/90 text-white font-bold py-4 rounded-xl shadow-[0_10px_40px_rgba(24,62,235,0.25)] transition-all group text-sm uppercase tracking-widest pointer-events-auto disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Unlocking...
                        </>
                      ) : (
                        <>
                          Subscribe & Access
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full text-center text-[11px] font-bold uppercase tracking-wider text-white/30 hover:text-white/60 transition-colors pt-2 block cursor-pointer"
                  >
                    I'll subscribe later
                  </button>

                  <div className="flex items-center justify-center gap-2 text-white/20 text-[9px] mt-6 uppercase tracking-widest font-bold pt-2 border-t border-white/5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Zero Spam • Unsubscribe Anytime
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
