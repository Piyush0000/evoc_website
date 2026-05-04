'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag, RefreshCcw, Search, Clock } from 'lucide-react';
import { getPath } from '@/lib/paths';
import FooterSection from '@/components/FooterSection';
import { fetchBlogs, Blog, stripHtmlAndTruncate, getRelativeTime } from '@/lib/api';
import { useBlogEvents } from '@/lib/useBlogEvents';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState('All Posts');

  const categories = [
    'All Posts',
    'Articles',
    'Founder Stories',
    'Social Story',
    'Startup Story',
    'Story of the week'
  ];

  const loadBlogs = async () => {
    try {
      const data = await fetchBlogs();
      setBlogs(data ?? []);
      setError(null);
    } catch (err: any) {
      setError(err?.message || 'Failed to load blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  useBlogEvents(loadBlogs);

  useEffect(() => {
    if (activeFilter === 'All Posts') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => 
        blog.category?.toLowerCase() === activeFilter.toLowerCase()
      ));
    }
  }, [activeFilter, blogs]);

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-24">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
              Stories
            </h1>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
              Deep dives into e-commerce strategy, AI innovation, and the future of D2C brands.
            </p>
          </motion.div>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-8 mb-16 border-b border-white/5 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative pb-4 ${
                activeFilter === cat ? 'text-white' : 'text-white/20 hover:text-white/40'
              }`}
            >
              {cat}
              {activeFilter === cat && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white" 
                />
              )}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-4 text-white/20">
            <Search className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mb-80">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-[32px] p-6 animate-pulse">
                  <div className="w-full aspect-video bg-white/5 rounded-[24px] mb-6" />
                  <div className="w-24 h-6 bg-blue-500/10 rounded-full mb-4" />
                  <div className="w-full h-8 bg-white/5 rounded-lg mb-3" />
                  <div className="w-2/3 h-8 bg-white/5 rounded-lg mb-6" />
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-white/5 rounded" />
                    <div className="w-full h-4 bg-white/5 rounded" />
                    <div className="w-4/5 h-4 bg-white/5 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20 bg-white/[0.02] border border-white/5 rounded-[40px]">
              <p className="text-white/40 mb-6 font-medium">{error}</p>
              <button 
                onClick={loadBlogs}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-xl transition-all flex items-center gap-2 mx-auto"
              >
                <RefreshCcw className="w-4 h-4" />
                Retry
              </button>
            </div>
          ) : filteredBlogs.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/40 font-medium">No blogs found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {filteredBlogs.map((blog, i) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${blog.id}`}>
                    <div className="h-full bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-2xl flex flex-col overflow-hidden group">
                      {/* Image container */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden m-4 rounded-[32px] border border-white/5">
                        <img 
                          src={blog.image || '/blog-placeholder.jpg'} 
                          alt={blog.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 px-8 py-4 space-y-4">
                        <div className="space-y-3">
                          <h3 className="font-black text-xl md:text-2xl tracking-tighter uppercase italic leading-[1.1] text-white group-hover:text-blue-500 transition-colors duration-300">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-white/40 line-clamp-2 leading-relaxed font-medium">
                            {blog.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
                          </p>
                        </div>
                      </div>

                      {/* Footer Section */}
                      <div className="px-8 pb-8">
                        <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                          {/* Row 1: Logo and Timeline */}
                          <div className="flex items-center justify-between gap-4 uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                              <div className="size-5 rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/20">
                                <img 
                                  src="/favicon.png" 
                                  alt="Logo" 
                                  className="w-full h-full object-contain scale-[1.3]"
                                />
                              </div>
                              <span className="font-bold text-white/90 tracking-tighter text-[11px]">EVOC LABS</span>
                            </div>
                            <div className="flex flex-col items-end gap-0.5 text-white/60 font-bold text-[10px] tracking-tight">
                              <span className="lowercase leading-tight">
                                {(() => {
                                  const date = new Date(blog.createdAt);
                                  const now = new Date();
                                  const diffInMs = Math.floor(now.getTime() - date.getTime());
                                  const safeDiff = Math.max(0, Math.floor(diffInMs / 60000));
                                  if (safeDiff < 1) return "just now";
                                  if (safeDiff < 60) return `${safeDiff} mins`;
                                  if (safeDiff < 1440) return `${Math.floor(safeDiff / 60)} hrs`;
                                  return `${Math.floor(safeDiff / 1440)} days`;
                                })()}
                              </span>
                              <span className="opacity-40 leading-tight">
                                {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                                  month: 'short', 
                                  day: '2-digit', 
                                  year: 'numeric' 
                                })}
                              </span>
                            </div>
                          </div>

                          {/* Row 2: Taxonomy */}
                          {blog.category && (
                            <div className="flex items-center">
                               <span className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
                                 {blog.category}
                               </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Final CTA */}
        <div className="bg-white/[0.03] border border-white/10 rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative z-10">Stay updated with Evoc?</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/demo">
              <button className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl flex items-center gap-2">
                Join our Community
              </button>
            </Link>
          </div>
        </div>
      </div>

      <FooterSection hideCTA={true} />
    </main>
  );
}
