'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Code2, Target, ShieldCheck, Briefcase, Sparkles, MapPin, Clock, Check, GraduationCap, ListChecks, Tag, CheckCircle2, Loader2, AlertCircle, UploadCloud, FileText, X } from 'lucide-react';
import FooterSection from '@/components/FooterSection';
import { CareersError, fetchPosition, submitApplication, type FormField, type Position, type ResumeRules } from '@/lib/careers';

const INPUT_CLASS =
  'w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-blue-500/50 outline-none transition-all';
const ERROR_INPUT_CLASS = 'border-red-500/40';

export default function CareerPositionPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;

  const [pos, setPos] = useState<Position | null>(null);
  const [fields, setFields] = useState<FormField[]>([]);
  const [resumeRules, setResumeRules] = useState<ResumeRules>({ maxBytes: 5 * 1024 * 1024, accept: ['.pdf', '.doc', '.docx'] });
  const [loadState, setLoadState] = useState<'loading' | 'ready' | 'missing' | 'error'>('loading');
  const [loadError, setLoadError] = useState('');

  const [resume, setResume] = useState<File | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetchPosition(slug)
      .then((data) => {
        if (cancelled) return;
        setPos(data.position);
        setFields(data.fields);
        setResumeRules(data.resume);
        setLoadState('ready');
      })
      .catch((err) => {
        if (cancelled) return;
        if (err instanceof CareersError && err.status === 404) setLoadState('missing');
        else {
          setLoadError(err instanceof Error ? err.message : 'Could not load this position.');
          setLoadState('error');
        }
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('openingSlug', slug);
    // Without a file the server still validates everything and reports all problems at once.
    if (resume) data.set('resume', resume, resume.name);
    else data.delete('resume');
    setSubmitStatus('submitting');
    setSubmitError('');
    setFieldErrors({});
    try {
      await submitApplication(data);
      setSubmitStatus('success');
      form.reset();
      setResume(null);
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      if (err instanceof CareersError && err.fieldErrors) setFieldErrors(err.fieldErrors);
    }
  };

  const clearError = (key: string) =>
    setFieldErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });

  if (loadState !== 'ready' || !pos) {
    return (
      <main className="bg-[#030303] min-h-screen text-white font-sans">
        <div className="max-w-4xl mx-auto px-6 pt-8 pb-32">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group mb-24"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            All Positions
          </Link>
          <div className="flex flex-col items-center text-center text-white/40">
            {loadState === 'loading' ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin mb-4" />
                <p className="text-sm">Loading position…</p>
              </>
            ) : loadState === 'missing' ? (
              <>
                <h1 className="text-3xl font-bold text-white mb-3">This position is no longer open</h1>
                <p className="text-sm max-w-sm mb-8">It may have been filled. Take a look at our other openings.</p>
                <Link href="/careers" className="text-white/70 hover:text-white text-sm font-bold underline underline-offset-8">
                  See open positions
                </Link>
              </>
            ) : (
              <>
                <AlertCircle className="w-8 h-8 text-red-300/70 mb-4" />
                <p className="text-sm max-w-sm mb-6">{loadError}</p>
                <button onClick={() => location.reload()} className="text-white/70 hover:text-white text-sm font-bold underline underline-offset-8">
                  Try again
                </button>
              </>
            )}
          </div>
        </div>
        <FooterSection hideCTA={true} />
      </main>
    );
  }

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
                  <p className="text-white/30 text-xs leading-relaxed font-medium">Fill in your details and attach your resume. Your application goes straight to our hiring team.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit} noValidate>
                  {/* Honeypot: hidden from people, irresistible to bots. */}
                  <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                    <label>
                      Company website
                      <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
                    </label>
                  </div>

                  <FieldShell id="fullName" label="Full name" required error={fieldErrors.fullName}>
                    <input id="fullName" name="fullName" type="text" required autoComplete="name" placeholder="Your name"
                      onChange={() => clearError('fullName')}
                      className={`${INPUT_CLASS} ${fieldErrors.fullName ? ERROR_INPUT_CLASS : ''}`} />
                  </FieldShell>
                  <FieldShell id="email" label="Email" required error={fieldErrors.email}>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com"
                      onChange={() => clearError('email')}
                      className={`${INPUT_CLASS} ${fieldErrors.email ? ERROR_INPUT_CLASS : ''}`} />
                  </FieldShell>

                  {fields.map((field) => (
                    <DynamicField key={field.id} field={field} error={fieldErrors[field.key]} onChange={() => clearError(field.key)} />
                  ))}

                  <div className="md:col-span-2">
                    <ResumeUpload
                      file={resume}
                      rules={resumeRules}
                      error={fieldErrors.resume}
                      onChange={(file, error) => {
                        setResume(file);
                        setFieldErrors((prev) => {
                          const next = { ...prev };
                          if (error) next.resume = error;
                          else delete next.resume;
                          return next;
                        });
                      }}
                    />
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

function FieldShell({ id, label, required, error, help, wide, children }: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  help?: string | null;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`space-y-2 ${wide ? 'md:col-span-2' : ''}`}>
      <label htmlFor={id} className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">
        {label}
        {required ? ' *' : ''}
      </label>
      {children}
      {error ? (
        <p className="text-red-300 text-xs ml-1" role="alert">{error}</p>
      ) : help ? (
        <p className="text-white/30 text-xs ml-1">{help}</p>
      ) : null}
    </div>
  );
}

function DynamicField({ field, error, onChange }: { field: FormField; error?: string; onChange: () => void }) {
  const id = `field-${field.key}`;
  const className = `${INPUT_CLASS} ${error ? ERROR_INPUT_CLASS : ''}`;
  const common = { id, name: field.key, required: field.required, onChange, 'aria-invalid': Boolean(error) };
  const wide = field.type === 'textarea';
  return (
    <FieldShell id={id} label={field.label} required={field.required} error={error} help={field.helpText} wide={wide}>
      {field.type === 'textarea' ? (
        <textarea {...common} rows={4} placeholder={field.placeholder || ''} className={`${className} resize-y`} />
      ) : field.type === 'select' ? (
        <select {...common} defaultValue="" className={`${className} appearance-none`}>
          <option value="" disabled className="bg-[#0b0b0b]">
            {field.placeholder || 'Select an option'}
          </option>
          {field.options.map((option) => (
            <option key={option} value={option} className="bg-[#0b0b0b]">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          {...common}
          type={field.type}
          placeholder={field.placeholder || ''}
          inputMode={field.type === 'tel' ? 'tel' : field.type === 'number' ? 'decimal' : undefined}
          className={className}
        />
      )}
    </FieldShell>
  );
}

function formatBytes(bytes: number) {
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

function ResumeUpload({ file, rules, error, onChange }: {
  file: File | null;
  rules: ResumeRules;
  error?: string;
  onChange: (file: File | null, error?: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const maxLabel = formatBytes(rules.maxBytes);

  const pick = (candidate: File | undefined) => {
    if (!candidate) return;
    const ext = `.${candidate.name.split('.').pop()?.toLowerCase() || ''}`;
    if (!rules.accept.includes(ext)) {
      onChange(null, 'Upload your resume as a PDF or Word (.doc/.docx) file.');
    } else if (candidate.size > rules.maxBytes) {
      onChange(null, `Your resume must be ${maxLabel} or smaller.`);
    } else {
      onChange(candidate);
    }
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      <span className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Resume *</span>
      {file ? (
        <div className="flex items-center gap-4 bg-blue-500/[0.06] border border-blue-500/25 rounded-2xl px-5 py-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-blue-400" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold truncate">{file.name}</p>
            <p className="text-white/40 text-xs">{formatBytes(file.size)} · ready to send</p>
          </div>
          <button
            type="button"
            onClick={() => onChange(null)}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Remove resume"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragging(false);
            pick(e.dataTransfer.files?.[0]);
          }}
          className={`w-full flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-2xl px-6 py-10 transition-colors ${
            dragging
              ? 'border-blue-500/60 bg-blue-500/[0.06]'
              : error
                ? 'border-red-500/40 bg-red-500/[0.03]'
                : 'border-white/10 bg-white/[0.02] hover:border-blue-500/40 hover:bg-white/[0.03]'
          }`}
        >
          <UploadCloud className="w-7 h-7 text-blue-400" />
          <span className="text-sm font-bold">Drop your resume here or <span className="text-blue-400">browse</span></span>
          <span className="text-white/30 text-xs">PDF, DOC or DOCX · up to {maxLabel}</span>
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={`${rules.accept.join(',')},application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document`}
        className="hidden"
        onChange={(e) => pick(e.target.files?.[0])}
      />
      {error && <p className="text-red-300 text-xs ml-1" role="alert">{error}</p>}
    </div>
  );
}
