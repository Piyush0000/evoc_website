'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
};

const initialForm: FormState = {
  name: '',
  email: '',
  phoneNumber: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setErrorMessage(null);

    const apiBase = process.env.NEXT_PUBLIC_API_URL;
    if (!apiBase) {
      setErrorMessage('Submission unavailable. Please try again later.');
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${apiBase}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phoneNumber: form.phoneNumber,
          message: form.message,
          formType: 'book-demo',
        }),
      });

      if (response.status !== 201) {
        let detail = '';
        try {
          const body = await response.json();
          detail = body?.error || '';
        } catch {
          // ignore parse failure
        }
        throw new Error(detail || `Request failed (${response.status})`);
      }

      try {
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }
      } catch (err) {
        console.error('Meta Pixel error:', err);
      }

      setForm(initialForm);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 4000);
    } catch (err: any) {
      console.error('Lead submission failed:', err);
      setErrorMessage(
        err?.message === 'Failed to fetch'
          ? 'Network error. Please check your connection and try again.'
          : err?.message || 'Something went wrong. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      {/* Background Atmosphere */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center italic text-white mb-20"
          style={{
            fontFamily: 'var(--font-instrument), serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
          }}
        >
          Book a free demo
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              How can we <span className="text-blue-500 italic font-medium">help</span> you
            </h3>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
              Don&apos;t hesitate to reach out via email -<br />
              <span className="text-white font-medium">admin@evoc.ai</span>
            </p>
          </motion.div>

          {/* Right Side: Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111111] rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none disabled:opacity-60"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none disabled:opacity-60"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm font-medium ml-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    required
                    disabled={submitting}
                    className="w-full bg-[#1A1A1A] border-none rounded-2xl h-14 px-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-400 text-sm font-medium ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  disabled={submitting}
                  className="w-full bg-[#1A1A1A] border-none rounded-2xl p-6 text-white focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none disabled:opacity-60"
                />
              </div>

              {errorMessage && (
                <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-3">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={submitting ? undefined : { scale: 1.02 }}
                whileTap={submitting ? undefined : { scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-2xl transition-colors shadow-lg shadow-blue-900/20 pointer-events-auto flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] pointer-events-none"
          >
            <div className="bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl shadow-blue-900/40 flex items-center gap-3 border border-white/20 backdrop-blur-md">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold text-sm tracking-tight">Message Sent Successfully!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
