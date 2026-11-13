'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ShieldCheck,
  User,
  Phone,
  ChevronDown,
  CheckCircle2,
  Loader2,
  AlertCircle,
  X,
  Sparkles,
  Link as LinkIcon,
} from 'lucide-react';

import FeaturedOn from '@/components/FeaturedOn';
import CoreFeatures from '@/components/CoreFeatures';
import ImpactSection from '@/components/ImpactSection';
import FoundersSection from '@/components/FoundersSection';
import FooterSection from '@/components/FooterSection';
import DateTimePicker from '@/components/DateTimePicker';

const PRODUCT_CATEGORIES = [
  'Fashion & Apparel',
  'Electronics & Gadgets',
  'Beauty & Personal Care',
  'Health & Wellness',
  'Home & Kitchen',
  'Food & Beverages',
  'Jewellery & Accessories',
  'Footwear & Bags',
  'Other',
];

const ONLINE_SELLING_CHANNELS = [
  'Own Website (Shopify, WooCommerce, etc.)',
  'Marketplaces (Amazon, Flipkart, etc.)',
  'Social Media (Instagram, WhatsApp)',
  'Quick Commerce (Blinkit, Zepto, Instamart)',
  'Offline / Retail Store Only',
  'Just Starting Out / Not Selling Yet',
  'Multiple Channels',
];

const REVENUE_RANGES = [
  '₹0 - ₹5 Lakhs',
  '₹5 Lakhs - ₹20 Lakhs',
  '₹20 Lakhs - ₹50 Lakhs',
  '₹50 Lakhs+',
];

export default function DemoPage() {
  // Step 1 Form state
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);
  const [stepOneError, setStepOneError] = useState<string | null>(null);

  // Step 2 Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGst, setHasGst] = useState<'Yes' | 'Already Applied' | 'Not Applied Yet' | ''>('');
  const [category, setCategory] = useState('');
  const [onlineSellingChannel, setOnlineSellingChannel] = useState('');
  const [revenueRange, setRevenueRange] = useState('');
  const [productLink, setProductLink] = useState('');
  const [preferredDateTime, setPreferredDateTime] = useState('');

  // Submission state
  const [loading, setLoading] = useState(false);
  const [stepTwoError, setStepTwoError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submittedPhone, setSubmittedPhone] = useState('');

  // Handle Step 1 submit (Validation -> Open Step 2 Modal)
  const handleStepOneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStepOneError(null);

    const trimmedName = name.trim();
    const cleanPhone = phoneNumber.replace(/\D/g, '');

    if (!trimmedName || trimmedName.length < 2) {
      setStepOneError('Please enter your full name.');
      return;
    }

    if (cleanPhone.length < 10) {
      setStepOneError('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!agreedToTerms) {
      setStepOneError('Please accept the Terms & Conditions and Privacy Policy.');
      return;
    }

    // Advance to Step 2 Modal
    setIsModalOpen(true);
  };

  // Handle Step 2 Final Submission
  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setStepTwoError(null);

    if (!hasGst) {
      setStepTwoError('Please indicate whether you have a GST number.');
      return;
    }

    if (!category) {
      setStepTwoError('Please select the category of products you sell.');
      return;
    }

    if (!onlineSellingChannel) {
      setStepTwoError('Please select where you sell your products online.');
      return;
    }

    if (!revenueRange) {
      setStepTwoError('Please select your current monthly revenue.');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        name: name.trim(),
        phoneNumber: phoneNumber.replace(/\D/g, '').slice(-10),
        hasGst,
        category,
        onlineSellingChannel,
        revenueRange,
        productLink: productLink.trim() || undefined,
        preferredDateTime: preferredDateTime.trim() || undefined,
      };

      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        let errMsg = 'Failed to submit booking. Please try again.';
        try {
          const errData = await res.json();
          if (errData?.error) errMsg = errData.error;
        } catch {
          // ignore parse errors
        }
        throw new Error(errMsg);
      }

      // Track Meta Pixel Lead event
      try {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
      } catch (err) {
        console.error('Meta Pixel error:', err);
      }

      // Success
      setSubmittedName(name.trim());
      setSubmittedPhone(phoneNumber.replace(/\D/g, '').slice(-10));
      setIsModalOpen(false);
      setShowSuccessModal(true);

      // Reset form
      setName('');
      setPhoneNumber('');
      setHasGst('');
      setCategory('');
      setOnlineSellingChannel('');
      setRevenueRange('');
      setProductLink('');
      setPreferredDateTime('');
    } catch (err: any) {
      console.error('Demo booking submission failed:', err);
      setStepTwoError(
        err?.message === 'Failed to fetch'
          ? 'Network error. Please check your connection and try again.'
          : err?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      className="bg-black min-h-screen w-full text-white selection:bg-[#183EEB]/30 overflow-x-clip relative font-sans"
      style={{ overflowX: 'clip' }}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#183EEB]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Back Link - Top Left */}
      <div className="absolute top-8 left-8 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-medium group px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-md"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      {/* Demo Booking Form Section */}
      <section className="min-h-screen max-w-7xl mx-auto px-6 sm:px-8 flex items-center pt-28 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          
          {/* Left Column: Two-Step Booking Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            {/* Header / Value Proposition */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183EEB]/15 border border-[#183EEB]/30 text-[#6085ff] text-[11px] font-bold tracking-wider uppercase mb-3">
                <Sparkles className="w-3 h-3 text-[#183EEB]" />
                Interactive Free Demo
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-[1.05]">
                Start building your own <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#183EEB] to-indigo-400">online brand today!</span>
              </h1>
              <p className="text-white/60 text-sm md:text-base max-w-md leading-relaxed font-normal">
                Want to start selling through your own website? Book a free demo to know how our AI ecosystem scales your business.
              </p>
            </div>

            {/* Step 1 Booking Card */}
            <div className="bg-[#0c0d12]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group">
              {/* Subtle top border accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#183EEB] to-transparent opacity-60" />

              <form className="space-y-5" onSubmit={handleStepOneSubmit}>
                {/* Your Name */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                    Your Name <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="relative group/input">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within/input:text-[#183EEB] transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (stepOneError) setStepOneError(null);
                      }}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm placeholder:text-white/25 text-white"
                    />
                  </div>
                </div>

                {/* Phone Number with +91 Prefix */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/50 flex items-center gap-1.5">
                    Phone Number <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="bg-white/[0.04] border border-white/10 rounded-xl py-3.5 px-3.5 text-xs font-semibold text-white/70 flex items-center justify-center shrink-0">
                      +91
                    </div>
                    <div className="relative flex-1 group/input">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within/input:text-[#183EEB] transition-colors" />
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setPhoneNumber(val);
                          if (stepOneError) setStepOneError(null);
                        }}
                        placeholder="Enter valid 10-digit phone number"
                        required
                        maxLength={10}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3.5 pl-12 pr-4 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm placeholder:text-white/25 text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Privacy Policy Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/20 bg-white/[0.05] text-[#183EEB] focus:ring-[#183EEB] focus:ring-offset-0 cursor-pointer accent-[#183EEB]"
                  />
                  <label htmlFor="terms" className="text-xs text-white/60 leading-relaxed cursor-pointer select-none">
                    I have read the{' '}
                    <Link href="/terms" target="_blank" className="text-[#6085ff] underline hover:text-white transition-colors">
                      T&amp;C
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" target="_blank" className="text-[#6085ff] underline hover:text-white transition-colors">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Step 1 Error Notice */}
                {stepOneError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{stepOneError}</span>
                  </motion.div>
                )}

                {/* Get Started Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#183EEB] to-[#2555ff] hover:from-[#2049fa] hover:to-[#3865ff] text-white font-bold py-4 rounded-xl shadow-[0_10px_35px_rgba(24,62,235,0.35)] hover:shadow-[0_12px_45px_rgba(24,62,235,0.5)] transition-all group text-sm uppercase tracking-wider"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-white/30 text-[10px] mt-4 uppercase tracking-widest font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#183EEB]" />
                  100% Confidential • No Spam Guarantee
                </div>
              </form>
            </div>
          </motion.div>

          {/* Right Column: Visual / Video Walkthrough Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            {/* Slot confirmation badge */}
            <div className="absolute -top-6 -left-6 z-10 bg-[#0c0d12]/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 max-w-[250px] shadow-2xl">
              <div className="w-10 h-10 bg-[#183EEB]/20 rounded-xl flex items-center justify-center shrink-0 border border-[#183EEB]/30">
                <Calendar className="w-5 h-5 text-[#6085ff]" />
              </div>
              <p className="text-white/70 text-[11px] leading-tight font-medium">
                Confirm your slot and we&apos;ll reach out within 24 hours.
              </p>
            </div>

            {/* Visual Box */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_90px_rgba(24,62,235,0.18)] group aspect-[4/3] bg-[#0c0d12]">
              <img
                src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdtaXpyejkzNzE5cXRldmVobnY3eDRqZXBudzBudjdieG9xdGlyYiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/fXyfpPeT5y9iTbagj5/giphy.webp"
                alt="Demo Illustration"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-[#183EEB] rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/40">
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-bold text-lg tracking-tight">Personalized Walkthrough</h3>
                </div>
                <p className="text-white/60 text-xs max-w-[320px] leading-relaxed">
                  Tailored insights to solve your specific scaling challenges and unlock direct-to-consumer growth.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STEP 2 MODAL: Additional Info to assist you better */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !loading && setIsModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg bg-[#0e0f15] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.85)] z-10 text-white my-auto overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#183EEB] to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => !loading && setIsModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-white/50 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1.5">
                  Additional Info to assist you better
                </h2>
                <div className="flex items-center gap-2 text-xs text-white/40">
                  <span>Prospect:</span>
                  <span className="font-semibold text-white/80">{name}</span>
                  <span>•</span>
                  <span className="font-mono text-white/80">+91 {phoneNumber}</span>
                </div>
              </div>

              {/* Step 2 Form */}
              <form onSubmit={handleFinalSubmit} className="space-y-4 sm:space-y-5">
                {/* 1. Do you have a GST? */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                    Do you have a GST? <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                    {(['Yes', 'Already Applied', 'Not Applied Yet'] as const).map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() => {
                          setHasGst(option);
                          if (stepTwoError) setStepTwoError(null);
                        }}
                        className={`py-3 px-2 rounded-xl text-xs font-semibold border transition-all text-center flex items-center justify-center gap-1.5 ${
                          hasGst === option
                            ? 'bg-[#183EEB]/20 border-[#183EEB] text-white shadow-[0_0_15px_rgba(24,62,235,0.3)]'
                            : 'bg-white/[0.03] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.06]'
                        }`}
                      >
                        <span
                          className={`w-2.5 h-2.5 rounded-full border transition-all ${
                            hasGst === option
                              ? 'bg-[#183EEB] border-white ring-2 ring-[#183EEB]/40'
                              : 'border-white/30'
                          }`}
                        />
                        <span className="truncate">{option}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. What are the category of products you sell? */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                    What are the category of products you sell? <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="relative group/select">
                    <select
                      value={category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                        if (stepTwoError) setStepTwoError(null);
                      }}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-4 pr-10 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm appearance-none cursor-pointer text-white"
                    >
                      <option value="" disabled className="bg-[#0e0f15] text-white/40">
                        Select Category
                      </option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#0e0f15] text-white">
                          {cat}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none group-focus-within/select:text-[#183EEB] transition-colors" />
                  </div>
                </div>

                {/* 3. Where do you sell your product online? */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                    Where do you sell your product online? <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="relative group/select">
                    <select
                      value={onlineSellingChannel}
                      onChange={(e) => {
                        setOnlineSellingChannel(e.target.value);
                        if (stepTwoError) setStepTwoError(null);
                      }}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-4 pr-10 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm appearance-none cursor-pointer text-white"
                    >
                      <option value="" disabled className="bg-[#0e0f15] text-white/40">
                        Select Channel
                      </option>
                      {ONLINE_SELLING_CHANNELS.map((chan) => (
                        <option key={chan} value={chan} className="bg-[#0e0f15] text-white">
                          {chan}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none group-focus-within/select:text-[#183EEB] transition-colors" />
                  </div>
                </div>

                {/* 4. What is your current monthly revenue? */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                    What is your current monthly revenue? <span className="text-[#183EEB]">*</span>
                  </label>
                  <div className="relative group/select">
                    <select
                      value={revenueRange}
                      onChange={(e) => {
                        setRevenueRange(e.target.value);
                        if (stepTwoError) setStepTwoError(null);
                      }}
                      required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-4 pr-10 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm appearance-none cursor-pointer text-white"
                    >
                      <option value="" disabled className="bg-[#0e0f15] text-white/40">
                        Select Monthly Revenue
                      </option>
                      {REVENUE_RANGES.map((rev) => (
                        <option key={rev} value={rev} className="bg-[#0e0f15] text-white">
                          {rev}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none group-focus-within/select:text-[#183EEB] transition-colors" />
                  </div>
                </div>

                {/* 5. Product Link (Optional) */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                      Product / Website Link
                    </label>
                    <span className="text-[10px] text-white/30 uppercase tracking-widest font-semibold">
                      Optional
                    </span>
                  </div>
                  <div className="relative group/input">
                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within/input:text-[#183EEB] transition-colors" />
                    <input
                      type="url"
                      name="productLink"
                      value={productLink}
                      onChange={(e) => setProductLink(e.target.value)}
                      placeholder="e.g. https://yourbrand.com or Instagram / Shopify link"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl py-3 pl-11 pr-4 focus:border-[#183EEB] focus:bg-white/[0.07] outline-none transition-all text-sm placeholder:text-white/25 text-white"
                    />
                  </div>
                </div>

                {/* Booking Date & Time (Commented out for now as requested - uncomment below to re-enable) */}
                {/*
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                    Select a preferable time and date
                  </label>
                  <DateTimePicker
                    value={preferredDateTime}
                    onChange={(val) => setPreferredDateTime(val)}
                    disabled={loading}
                  />
                </div>
                */}

                {/* Error message */}
                {stepTwoError && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{stepTwoError}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#183EEB] to-[#2555ff] hover:from-[#2049fa] hover:to-[#3865ff] text-white font-bold py-4 rounded-xl shadow-[0_10px_35px_rgba(24,62,235,0.35)] transition-all text-sm uppercase tracking-wider disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting Demo Request...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* SUCCESS CONFIRMATION MODAL */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0e0f15] border border-white/20 rounded-3xl p-8 shadow-2xl z-10 text-center text-white"
            >
              <div className="w-16 h-16 bg-[#183EEB]/20 border border-[#183EEB]/40 rounded-2xl flex items-center justify-center mx-auto mb-5 text-[#6085ff] shadow-lg shadow-blue-600/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-2">
                Demo Request Confirmed!
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Thank you <span className="font-semibold text-white">{submittedName}</span>! We&apos;ve registered your booking. Our specialist will connect with you on <span className="font-semibold text-[#6085ff]">+91 {submittedPhone}</span> within 24 hours to conduct your customized walkthrough.
              </p>
              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3.5 bg-[#183EEB] hover:bg-[#2049fa] text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-600/30"
                >
                  Got It
                </button>
                <Link
                  href="/"
                  className="w-full py-3 bg-white/[0.04] hover:bg-white/[0.08] text-white/70 hover:text-white rounded-xl font-medium text-xs transition-colors"
                >
                  Back to Homepage
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Featured On Section */}
      <FeaturedOn />

      {/* Core Features Section */}
      <CoreFeatures />

      {/* Impact We Create Section */}
      <ImpactSection />

      {/* Founders Section */}
      <FoundersSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
}
