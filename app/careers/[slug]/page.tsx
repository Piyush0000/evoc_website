'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Target, ShieldCheck, Mail, Briefcase, Sparkles, MapPin, Clock, Check, GraduationCap, ListChecks, Tag, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import FooterSection from '@/components/FooterSection';
import { positions } from '@/lib/positions';

export default function CareerPositionPage() {
  const params = useParams();
  const slug = params.slug as string;

  const pos = positions.find(p => p.slug === slug);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  if (!pos) {
    notFound();
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setSubmitStatus('submitting');
    setSubmitError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ position: pos.title, ...payload }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Something went wrong. Please try again.');
      setSubmitStatus('success');
      form.reset();
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/careers"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Positions
          </Link>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Careers at Evoc Labs</div>
        </div>

        {/* Position Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              <Briefcase className="w-3 h-3" />
              {pos.team}
            </span>
            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{pos.category}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{pos.title}</h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl mb-8">{pos.summary}</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/30 text-[11px] font-bold uppercase tracking-widest">
            <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{pos.duration}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="inline-flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{pos.type}</span>
          </div>
        </motion.div>

        {/* Job Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="space-y-12 mb-20 bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12"
        >
          <div>
            <SectionLabel icon={<Target className="w-4 h-4" />}>About the role</SectionLabel>
            <p className="text-white/50 text-sm md:text-[15px] leading-relaxed font-medium max-w-3xl">{pos.about}</p>
          </div>

          <div>
            <SectionLabel icon={<Code2 className="w-4 h-4" />}>Tech you'll use</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {pos.skills.map((skill) => (
                <span key={skill} className="bg-white/[0.04] border border-white/10 text-white/70 text-xs font-bold px-4 py-2 rounded-full hover:border-blue-500/30 hover:text-white transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DetailList icon={<ListChecks className="w-4 h-4" />} title="What you'll do" items={pos.responsibilities} />
            <DetailList icon={<ShieldCheck className="w-4 h-4" />} title="What we're looking for" items={pos.requirements} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pos.niceToHave.length > 0 && (
              <DetailList icon={<Sparkles className="w-4 h-4" />} title="Nice to have / Preferred skills" items={pos.niceToHave} />
            )}
            <DetailList icon={<GraduationCap className="w-4 h-4" />} title="What you'll gain" items={pos.whatYouLearn} />
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          id="apply"
          className="mb-24"
        >
          <div className="bg-white/[0.02] border border-blue-500/20 rounded-[32px] p-8 md:p-12 shadow-[0_20px_80px_rgba(24,62,235,0.08)]">
            {submitStatus === 'success' ? (
              <div className="flex flex-col items-center text-center py-10">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-2xl font-bold mb-2">Application sent!</h4>
                <p className="text-white/40 text-sm max-w-sm mb-8">
                  Thanks for applying to {pos.title}. Our team has received your application and will reach out if it's a match.
                </p>
                <Link
                  href="/careers"
                  className="text-white/60 hover:text-white text-sm font-bold underline underline-offset-8 transition-colors"
                >
                  Back to all positions
                </Link>
              </div>
            ) : (
              <>
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">Apply for this role</h2>
                  <p className="text-white/30 text-xs leading-relaxed font-medium">Fill in your details below. Your application is sent directly to our hiring team.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Full name *</label>
                    <input name="fullName" type="text" required placeholder="Your name" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Email *</label>
                    <input name="email" type="email" required placeholder="you@email.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">GitHub *</label>
                    <input name="github" type="url" required placeholder="https://github.com/username" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Portfolio *</label>
                    <input name="portfolio" type="url" required placeholder="https://your-portfolio.com" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Resume link *</label>
                    <input name="resume" type="url" required placeholder="Drive / Notion / PDF link" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Project links *</label>
                    <input name="projects" type="text" required placeholder="Comma-separated links" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all" />
                  </div>

                  {submitStatus === 'error' && (
                    <div className="md:col-span-2 flex items-center gap-3 bg-red-500/[0.06] border border-red-500/20 text-red-300 text-sm font-medium rounded-2xl px-5 py-4">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{submitError}</span>
                    </div>
                  )}

                  <div className="md:col-span-2 pt-4">
                    <button
                      type="submit"
                      disabled={submitStatus === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-blue-600/10 active:scale-[0.98]"
                    >
                      {submitStatus === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Submit Application'
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}

function SectionLabel({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4 text-blue-400">
      {icon}
      <span className="text-xs font-bold uppercase tracking-[0.2em]">{children}</span>
    </div>
  );
}

function DetailList({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div>
      <SectionLabel icon={icon}>{title}</SectionLabel>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed font-medium">
            <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-blue-400" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
