'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Code2, Rocket, Users, Target, ShieldCheck, Mail, Briefcase, Sparkles, MapPin, Clock, ChevronDown, ChevronUp, SearchX, Check, GraduationCap, ListChecks, Tag, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';

export default function CareersPage() {
  const [applyingIndex, setApplyingIndex] = useState<number | null>(null);
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('All Positions');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const filters = ['All Positions', 'Tech', 'Marketing', 'Design'];

  const whyWorkItems = [
    {
      icon: <Rocket className="w-5 h-5 text-blue-500" />,
      title: "Impact at Scale",
      desc: "Work on software that powers hundreds of Indian D2C brands. Your code directly impacts real businesses every day."
    },
    {
      icon: <Users className="w-5 h-5 text-blue-500" />,
      title: "Fast-Paced Growth",
      desc: "We move fast and value execution. In a startup environment, you'll learn and grow at 10x the speed of a corporate role."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-500" />,
      title: "Modern Tech Stack",
      desc: "Build with Next.js, React, Node.js, and AI integrations. We stay on the bleeding edge of performance."
    }
  ];

  const positions = [
    {
      title: "Full Stack Developer Internship",
      category: "Tech",
      location: "Remote",
      duration: "4 Months",
      type: "Internship (Unpaid)",
      team: "Engineering",
      skills: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "REST APIs"],
      summary: "Join our engineering team to build and ship features across the EVOC Labs commerce platform — from store dashboards to analytics and AI-driven automation.",
      about: "As a Full Stack Developer Intern, you'll work shoulder-to-shoulder with senior engineers on production code that powers real Indian D2C brands. This isn't a sit-on-the-sidelines role — you'll own features end to end, from UI to API, and watch your work go live for actual customers.",
      responsibilities: [
        "Build responsive, high-performance interfaces with Next.js, React & Tailwind CSS",
        "Develop and integrate REST APIs and backend services with Node.js",
        "Collaborate on feature design, code reviews, and shipping to production",
        "Debug, profile, and optimize performance across the full stack",
        "Work with databases and third-party integrations (payments, logistics, AI)"
      ],
      requirements: [
        "Solid understanding of JavaScript / TypeScript and modern React",
        "Hands-on experience building projects with Next.js",
        "Familiarity with Git and collaborative development workflows",
        "Strong problem-solving skills and attention to detail",
        "Available for a full-time, 4-month remote commitment"
      ],
      niceToHave: [
        "Experience with Node.js / Express backends",
        "Exposure to databases like PostgreSQL or MongoDB",
        "Interest in AI integrations and workflow automation",
        "A portfolio of shipped side projects"
      ],
      whatYouLearn: [
        "Shipping production-grade code in a fast-paced startup",
        "Full-stack architecture used by real eCommerce brands",
        "Working with modern tooling and AI-powered workflows",
        "Direct mentorship and code reviews from senior engineers"
      ]
    },
    {
      title: "Backend Developer Internship",
      category: "Tech",
      location: "Remote",
      duration: "3–6 Months",
      type: "Internship (Unpaid)",
      team: "Engineering",
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "JWT"],
      summary: "Build and scale the backend services that power live e-commerce products — APIs, databases, auth, and performance.",
      about: "EVOC Labs is building innovative e-commerce technology that helps brands launch, manage, and scale their online businesses. As a Backend Developer Intern, you'll gain hands-on startup experience working on real-world products — designing APIs, modeling data, and shipping reliable backend services to production.",
      responsibilities: [
        "Develop and maintain scalable backend applications using Node.js and Express.js",
        "Design and implement RESTful APIs",
        "Integrate and manage databases using PostgreSQL and MongoDB",
        "Work with Prisma ORM for database modeling and queries",
        "Collaborate with frontend developers to ensure seamless API integration",
        "Optimize application performance, security, and reliability",
        "Debug, test, and maintain backend services",
        "Participate in code reviews and technical discussions"
      ],
      requirements: [
        "Basic to intermediate knowledge of Node.js and Express.js",
        "Understanding of REST APIs and backend architecture",
        "Experience with PostgreSQL and MongoDB",
        "Familiarity with Prisma ORM",
        "Knowledge of authentication systems such as JWT",
        "Understanding of Git and GitHub workflows",
        "Strong problem-solving and debugging skills",
        "Willingness to learn and work in a fast-paced startup environment"
      ],
      niceToHave: [
        "Experience with Docker",
        "Knowledge of database optimization and indexing",
        "Familiarity with cloud platforms such as AWS, DigitalOcean, or Vercel",
        "Understanding of microservices architecture"
      ],
      whatYouLearn: [
        "Real-world backend development experience on live production systems",
        "Mentorship from experienced developers",
        "Internship Completion Certificate based on performance",
        "Potential opportunity for a paid role based on performance"
      ]
    },
    {
      title: "Front-End Developer Internship",
      category: "Tech",
      location: "Remote",
      duration: "3–6 Months",
      type: "Internship (Unpaid)",
      team: "Engineering",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "REST APIs", "Git"],
      summary: "Turn UI/UX designs into fast, responsive, production web apps with React and Next.js on live products.",
      about: "EVOC Labs is building the future of e-commerce by helping brands launch, scale, and manage their online businesses through innovative technology. As a Front-End Developer Intern, you'll work on live projects — converting designs into functional pages, integrating APIs, and shipping polished, performant interfaces.",
      responsibilities: [
        "Develop responsive and user-friendly web applications using React.js and Next.js",
        "Convert UI/UX designs into functional web pages",
        "Integrate frontend applications with backend APIs",
        "Optimize application performance and ensure cross-browser compatibility",
        "Collaborate with designers, backend developers, and product teams",
        "Debug and resolve frontend issues",
        "Write clean, maintainable, and scalable code"
      ],
      requirements: [
        "Basic to intermediate knowledge of React.js and Next.js",
        "Understanding of JavaScript (ES6+), HTML5, CSS3, and responsive design",
        "Experience with REST API integration",
        "Familiarity with Git and GitHub",
        "Strong problem-solving skills and willingness to learn",
        "Ability to work independently and meet deadlines"
      ],
      niceToHave: [],
      whatYouLearn: [
        "Hands-on experience working on real-world projects",
        "Collaboration with experienced developers and startup founders",
        "Exposure to modern web development practices and technologies",
        "Internship Completion Certificate based on performance",
        "Potential opportunity for a paid role based on performance"
      ]
    },
    {
      title: "Data Analyst Internship",
      category: "Tech",
      location: "Remote",
      duration: "3–6 Months",
      type: "Internship (Unpaid)",
      team: "Data & Analytics",
      skills: ["SQL", "Python (Pandas)", "Excel / Google Sheets", "Power BI / Tableau", "Data Visualization", "Statistics"],
      summary: "Turn raw e-commerce data into clear insights — build dashboards, analyze sales and ad performance, and help shape real business decisions.",
      about: "EVOC Labs unifies store infrastructure, sales and ads analytics, logistics intelligence, and growth automation into one platform. As a Data Analyst Intern, you'll work with real data from live D2C brands — cleaning it, spotting trends, and building dashboards and reports that directly inform product, marketing, and growth decisions.",
      responsibilities: [
        "Collect, clean, and organize data from multiple sources (sales, ads, logistics, customer behavior)",
        "Write SQL queries to extract, transform, and analyze data from databases",
        "Build dashboards and reports using tools like Power BI, Tableau, or Google Data Studio",
        "Analyze sales, marketing, and customer trends to surface actionable insights",
        "Track key business metrics such as revenue, CAC, ROAS, retention, and conversion rates",
        "Present findings clearly to product, marketing, and growth teams",
        "Support A/B testing and data-driven experimentation"
      ],
      requirements: [
        "Solid understanding of SQL for querying and analyzing data",
        "Working knowledge of Python (Pandas, NumPy) or strong Excel / Google Sheets skills",
        "Familiarity with data visualization tools such as Power BI or Tableau",
        "Strong analytical thinking and attention to detail",
        "Ability to translate numbers into clear, actionable insights",
        "Available for a full-time, remote commitment (3–6 months)"
      ],
      niceToHave: [
        "Experience with statistics and basic predictive modeling",
        "Exposure to e-commerce / marketing metrics (ROAS, CAC, LTV)",
        "Familiarity with Google Analytics or ad platform reporting (Meta, Google Ads)",
        "Basic scripting or spreadsheet automation skills"
      ],
      whatYouLearn: [
        "Hands-on experience analyzing real e-commerce data at scale",
        "Exposure to the metrics that drive D2C growth and decision-making",
        "Mentorship from experienced data and growth professionals",
        "Internship Completion Certificate based on performance",
        "Potential opportunity for a paid role based on performance"
      ]
    }
  ];

  const filteredPositions = activeFilter === 'All Positions'
    ? positions
    : positions.filter(p => p.category === activeFilter);

  const resetExpanded = () => {
    setApplyingIndex(null);
    setDetailsIndex(null);
    setSubmitStatus('idle');
    setSubmitError('');
  };

  const openApply = (idx: number) => {
    setApplyingIndex(idx);
    setDetailsIndex(null);
    setSubmitStatus('idle');
    setSubmitError('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, positionTitle: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    setSubmitStatus('submitting');
    setSubmitError('');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ position: positionTitle, ...payload }),
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
      {/* Subtle Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/[0.03] blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Simple Header Navigation */}
        <div className="flex justify-between items-center mb-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
          <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Careers at Evoc Labs</div>
        </div>

        {/* 1. About Evoc Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-6"
           >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">About <span className="text-blue-500">Evoc Labs</span></h1>
              <div className="space-y-4 text-white/50 text-base md:text-lg leading-relaxed max-w-xl">
                 <p>
                    EVOC Labs is an AI-powered full-stack commerce platform helping eCommerce and D2C brands build, operate, and scale from a single dashboard.
                 </p>
                 <p>
                    We unify store infrastructure, sales and ads analytics, checkout optimization, logistics intelligence, AI calling agents, abandoned cart recovery, and growth automation into one ecosystem.
                 </p>
              </div>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative aspect-video rounded-[32px] overflow-hidden border border-white/10 group"
           >
              <img
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                 alt="Collaboration"
                 className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                 <p className="text-white font-bold text-lg italic font-serif">Scaling D2C with Technology</p>
              </div>
           </motion.div>
        </div>

        {/* 2. Why EVOC Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {whyWorkItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-xl group"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                <div className="text-blue-500 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 3. Open Positions - Interactive & Expanding */}
        <div id="open-positions" className="mb-40 min-h-[400px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Open <span className="text-blue-500">Positions</span></h2>
            <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">
               {filters.map((filter) => (
                 <button
                  key={filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    resetExpanded();
                  }}
                  className={`relative pb-2 transition-all duration-300 hover:text-white/60 ${activeFilter === filter ? 'text-blue-500' : ''}`}
                 >
                   {filter}
                   {activeFilter === filter && (
                     <motion.div
                       layoutId="filter-underline"
                       className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"
                     />
                   )}
                 </button>
               ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {filteredPositions.length > 0 ? (
                <motion.div
                  key="positions-list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  {filteredPositions.map((pos, idx) => {
                    const isApplying = applyingIndex === idx;
                    const isDetailsOpen = detailsIndex === idx;
                    const isExpanded = isApplying || isDetailsOpen;

                    return (
                    <motion.div
                      key={idx}
                      layout
                      className={`bg-white/[0.03] border border-white/10 rounded-[32px] overflow-hidden transition-all duration-500 ${isExpanded ? 'bg-white/[0.05] border-blue-500/30 shadow-[0_20px_80px_rgba(24,62,235,0.1)]' : 'hover:bg-white/[0.05]'}`}
                    >
                      <div className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div className="space-y-4 flex-1">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className="inline-flex items-center gap-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                <Briefcase className="w-3 h-3" />
                                {pos.team}
                              </span>
                              <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">{pos.category}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">{pos.title}</h3>
                            <p className="text-white/40 text-sm leading-relaxed font-medium max-w-xl">{pos.summary}</p>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/30 text-[11px] font-bold uppercase tracking-widest pt-1">
                              <span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{pos.location}</span>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{pos.duration}</span>
                              <span className="w-1 h-1 rounded-full bg-white/20" />
                              <span className="inline-flex items-center gap-1.5"><Tag className="w-3.5 h-3.5" />{pos.type}</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                            <button
                              type="button"
                              onClick={() => {
                                setDetailsIndex(isDetailsOpen ? null : idx);
                                setApplyingIndex(null);
                              }}
                              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all text-sm font-bold border ${isDetailsOpen ? 'bg-white/[0.06] border-blue-500/40 text-white' : 'bg-transparent border-white/15 text-white/70 hover:text-white hover:border-white/30'}`}
                            >
                              {isDetailsOpen ? 'Hide Details' : 'View Details'}
                              {isDetailsOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                if (isApplying) {
                                  setApplyingIndex(null);
                                  setSubmitStatus('idle');
                                  setSubmitError('');
                                } else {
                                  openApply(idx);
                                }
                              }}
                              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all text-sm font-bold group shadow-lg shadow-blue-600/20"
                            >
                              {isApplying ? 'Close' : 'Apply Now'}
                              {isApplying ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                            </button>
                          </div>
                        </div>

                        {/* Job Details */}
                        <AnimatePresence initial={false}>
                          {isDetailsOpen && (
                            <motion.div
                              key="job-details"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-10 pt-10 border-t border-white/5 space-y-10">
                                {/* About the role */}
                                <div>
                                  <SectionLabel icon={<Target className="w-4 h-4" />}>About the role</SectionLabel>
                                  <p className="text-white/50 text-sm md:text-[15px] leading-relaxed font-medium max-w-3xl">{pos.about}</p>
                                </div>

                                {/* Skills */}
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

                                {/* Responsibilities + Requirements */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  <DetailList icon={<ListChecks className="w-4 h-4" />} title="What you'll do" items={pos.responsibilities} />
                                  <DetailList icon={<ShieldCheck className="w-4 h-4" />} title="What we're looking for" items={pos.requirements} />
                                </div>

                                {/* Nice to have + What you'll learn */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                  {pos.niceToHave.length > 0 && (
                                    <DetailList icon={<Sparkles className="w-4 h-4" />} title="Nice to have / Preferred skills" items={pos.niceToHave} />
                                  )}
                                  <DetailList icon={<GraduationCap className="w-4 h-4" />} title="What you'll gain" items={pos.whatYouLearn} />
                                </div>

                                {/* Inline CTA */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-blue-600/[0.06] border border-blue-500/20 rounded-3xl p-6 md:p-8">
                                  <div>
                                    <h4 className="text-base font-bold mb-1">Excited about this role?</h4>
                                    <p className="text-white/40 text-xs font-medium">Applications are reviewed on a rolling basis.</p>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() => openApply(idx)}
                                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl transition-all text-sm font-bold group shadow-lg shadow-blue-600/20 w-full sm:w-auto shrink-0"
                                  >
                                    Apply Now
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Application Form */}
                        <AnimatePresence initial={false}>
                          {isApplying && (
                            <motion.div
                              key="application-form"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mt-12 pt-12 border-t border-white/5">
                                {submitStatus === 'success' ? (
                                  <div className="flex flex-col items-center text-center py-10">
                                    <div className="w-16 h-16 bg-green-500/10 border border-green-500/30 rounded-2xl flex items-center justify-center mb-6">
                                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2">Application sent!</h4>
                                    <p className="text-white/40 text-sm max-w-sm mb-8">Thanks for applying to {pos.title}. Our team has received your application and will reach out if it's a match.</p>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setApplyingIndex(null);
                                        setSubmitStatus('idle');
                                      }}
                                      className="text-white/60 hover:text-white text-sm font-bold underline underline-offset-8 transition-colors"
                                    >
                                      Close
                                    </button>
                                  </div>
                                ) : (
                                <>
                                <div className="mb-10">
                                  <h4 className="text-xl font-bold mb-2">Apply for this role</h4>
                                  <p className="text-white/30 text-xs leading-relaxed font-medium">Fill in your details below. Your application is sent directly to our hiring team.</p>
                                </div>

                                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => handleSubmit(e, pos.title)}>
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
                                     <label className="text-white/60 text-xs font-bold uppercase tracking-widest ml-1">Next.js project links *</label>
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
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  key="no-positions"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white/[0.02] border border-white/5 rounded-[40px] py-32 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                    <SearchX className="w-8 h-8 text-white/20" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">No openings currently</h3>
                  <p className="text-white/30 text-sm max-w-xs">We don't have any open roles in {activeFilter} at the moment, but we're always looking for talent.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* General Application */}
        <div className="text-center py-20 border-t border-white/5">
           <h3 className="text-xl font-bold mb-4">Don't see the right fit?</h3>
           <p className="text-white/30 text-sm mb-8">We are always looking for exceptional talent to join our core team.</p>
           <a
              href="mailto:careers@evoclabs.com?subject=General Application - Evoc Labs"
              className="text-white/60 hover:text-white text-sm font-bold underline underline-offset-8 transition-colors"
           >
              Send a general application →
           </a>
        </div>
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
