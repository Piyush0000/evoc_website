'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, Clock, RefreshCcw, Check } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';
import { fetchBlogById, Blog, getRelativeTime } from '@/lib/api';
import { useBlogEvents } from '@/lib/useBlogEvents';

export default function BlogDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadBlog = async () => {
    try {
      const data = await fetchBlogById(id);
      if (data) {
        setBlog(data);
        setError(null);
      } else {
        setBlog(null);
        setError('This blog is no longer available.');
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to load blog');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadBlog();
    }
  }, [id]);

  useBlogEvents(loadBlog);

  if (loading) {
    return (
      <main className="bg-[#030303] min-h-screen text-white font-sans">
        <div className="max-w-4xl mx-auto px-6 pt-8">
          <div className="w-24 h-6 bg-white/5 rounded-full mb-12 animate-pulse" />
          <div className="w-full aspect-video bg-white/5 rounded-[32px] mb-12 animate-pulse" />
          <div className="space-y-4 mb-12">
            <div className="w-3/4 h-12 bg-white/5 rounded-lg animate-pulse" />
            <div className="w-1/2 h-8 bg-white/5 rounded-lg animate-pulse" />
          </div>
          <div className="space-y-6">
            <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
            <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
            <div className="w-5/6 h-4 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </main>
    );
  }

  if (error || !blog) {
    return (
      <main className="bg-[#030303] min-h-screen text-white font-sans flex items-center justify-center px-6">
        <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-[40px] max-w-md w-full">
          <p className="text-white/40 mb-6 font-medium">{error || 'Blog not found'}</p>
          <div className="flex flex-col gap-4">
            <button
              onClick={loadBlog}
              className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all flex items-center justify-center gap-2"
            >
              <RefreshCcw className="w-4 h-4" />
              Retry
            </button>
            <Link href="/blog" className="text-white/40 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-12 md:mb-20">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>

        {/* Hero / Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 mb-10 uppercase tracking-widest">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3">
                <div className="size-6 rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/20">
                  <img 
                    src="/favicon.png" 
                    alt="Logo" 
                    className="w-full h-full object-contain scale-[1.3]"
                  />
                </div>
                <span className="font-bold text-white/90 tracking-tighter text-[13px]">EVOC LABS</span>
              </div>
              {blog.category && (
                <div className="flex items-center gap-3">
                  <span className="text-white/20">•</span>
                  <span className="text-[11px] font-bold text-black px-4 py-1.5 rounded-full bg-white border border-white/10 shadow-md">
                    {blog.category}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col items-end gap-0 text-white font-bold text-[13px] tracking-tight">
              <span className="lowercase leading-tight">
                {getRelativeTime(blog.createdAt)}
              </span>
              <span className="opacity-70 leading-tight">
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] py-2 uppercase italic">
            {blog.title}
          </h1>
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative w-full aspect-[21/9] md:aspect-video overflow-hidden rounded-[32px] mb-16 md:mb-24 shadow-2xl pt-8"
        >
          <img
            src={blog.image || '/blog-placeholder.jpg'}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-32"
        >
          <div
            className="blog-content text-white/70 text-lg leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Dynamic Author/Founder Section */}
          {(blog.authorBio || blog.authorImage) && (
            <div className="mt-32 pt-20">
              <h3 className="text-xl font-bold mb-10 text-white tracking-tight uppercase italic">
                The Visionary Behind {blog.companyName || 'the Vision'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">
                <div className="space-y-6">
                  {blog.authorImage && (
                    <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white/5 relative">
                      <img
                        src={blog.authorImage}
                        alt={blog.author}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-1">
                    {blog.companyName && (
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] leading-relaxed">
                        Founder — {blog.companyName.includes(' — ') ? blog.companyName.split(' — ')[1] : blog.companyName}
                      </p>
                    )}
                    <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter">
                      {blog.author}
                    </h4>
                  </div>
                </div>
                <div className="text-white/50 text-sm leading-[1.8] font-medium italic overflow-hidden">
                  <p className="line-clamp-1">
                    {blog.authorBio?.split('\n')[0]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tags - Moved to Bottom */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-20 pt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-white/20 mr-2 uppercase text-[9px] font-bold tracking-widest">
                <Tag className="w-3.5 h-3.5" />
                Tags:
              </div>
              {blog.tags.map((tag, i) => (
                <span key={i} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-medium text-white/40 hover:text-white hover:border-blue-500/30 transition-all cursor-default">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>

        {/* Back to list */}
        <div className="max-w-3xl mx-auto mb-40 text-center">
          <Link href="/blog">
            <button className="group flex items-center gap-3 mx-auto px-10 py-5 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.05] hover:border-white/20 transition-all">
              <ArrowLeft className="w-5 h-5 text-white/40 group-hover:-translate-x-2 transition-transform" />
              <span className="font-bold uppercase tracking-widest text-xs">Back to all stories</span>
            </button>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .blog-content {
          font-family: Arial, sans-serif;
        }

        .blog-content h1 {
          font-size: 3rem !important;
          line-height: 1 !important;
          font-weight: 900 !important;
          letter-spacing: -0.05em !important;
          text-transform: uppercase !important;
          font-style: italic !important;
          color: white !important;
          margin-bottom: 2rem !important;
        }

        .blog-content h2 {
          font-size: 1.875rem !important;
          line-height: 1.25 !important;
          font-weight: 900 !important;
          letter-spacing: -0.025em !important;
          color: white !important;
          margin-top: 3rem !important;
          margin-bottom: 1.5rem !important;
        }

        .blog-content p {
          font-size: 1.125rem !important;
          line-height: 1.8 !important;
          margin-bottom: 1.5rem !important;
          color: rgba(255, 255, 255, 0.7) !important;
        }

        .blog-content strong {
          font-weight: 900 !important;
          color: white !important;
        }

        .blog-content blockquote {
          border-left: 4px solid #2563eb !important;
          background-color: rgba(37, 99, 235, 0.1) !important;
          padding: 2rem 2.5rem !important;
          font-style: italic !important;
          margin: 3rem 0 !important;
          border-radius: 0 1rem 1rem 0 !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-size: 1.25rem !important;
        }

        .blog-content u {
          text-decoration: underline !important;
          text-decoration-color: white !important;
          text-underline-offset: 4px !important;
        }

        .blog-content img {
          border-radius: 24px;
          margin: 4rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
        }
      `}</style>

      <FooterSection hideCTA={true} />
    </main>
  );
}
