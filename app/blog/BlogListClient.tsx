'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Blog, fetchBlogs } from '@/lib/api';
import { useBlogEvents } from '@/lib/useBlogEvents';
import BlogGate from '@/components/BlogGate';

const CATEGORIES = [
  'All Posts',
  'Articles',
  'Founder Stories',
  'Social Story',
  'Startup Story',
  'Story of the week',
];

function blogUrl(blog: Blog) {
  const raw = blog.slug || blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return `/blog/${raw.replace(/-\d+$/, '')}`;
}

export default function BlogListClient({ initialBlogs }: { initialBlogs: Blog[] }) {
  const router = useRouter();
  const [blogs, setBlogs] = useState<Blog[]>(initialBlogs);
  const [activeFilter, setActiveFilter] = useState('All Posts');

  useBlogEvents(async () => {
    const fresh = await fetchBlogs().catch(() => null);
    if (fresh) setBlogs(fresh);
  });

  const filtered =
    activeFilter === 'All Posts'
      ? blogs
      : blogs.filter((b) => b.category?.toLowerCase() === activeFilter.toLowerCase());

  return (
    <>
      <BlogGate />

      {/* Filters */}
      <div className="flex items-center gap-8 mb-16 border-b border-white/5 pb-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {CATEGORIES.map((cat) => (
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
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white/40 font-medium">No blogs found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filtered.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={blogUrl(blog)}>
                  <div className="h-full bg-white/[0.02] border border-white/5 rounded-[40px] hover:bg-white/[0.04] hover:border-blue-500/30 transition-all duration-500 shadow-2xl flex flex-col overflow-hidden group">
                    <div className="relative w-full aspect-[16/10] overflow-hidden m-4 rounded-[32px] border border-white/5">
                      <img
                        src={blog.image || '/blog-placeholder.jpg'}
                        alt={blog.imageAlt || `Evoc Labs - ${blog.title}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

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

                    <div className="px-8 pb-8">
                      <div className="pt-6 border-t border-white/5 flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-4 uppercase tracking-widest">
                          <div className="flex items-center gap-2">
                            <div className="size-5 rounded-full overflow-hidden bg-white/10 flex items-center justify-center border border-white/20">
                              <img src="/favicon.png" alt="Logo" className="w-full h-full object-contain scale-[1.3]" />
                            </div>
                            <span className="font-bold text-white/90 tracking-tighter text-[11px]">EVOC LABS</span>
                          </div>
                          <div className="flex flex-col items-end gap-0.5 text-white/60 font-bold text-[10px] tracking-tight">
                            <span className="lowercase leading-tight">
                              {(() => {
                                const diff = Math.max(0, Math.floor((Date.now() - new Date(blog.createdAt).getTime()) / 60000));
                                if (diff < 1) return 'just now';
                                if (diff < 60) return `${diff} mins`;
                                if (diff < 1440) return `${Math.floor(diff / 60)} hrs`;
                                return `${Math.floor(diff / 1440)} days`;
                              })()}
                            </span>
                            <span className="opacity-40 leading-tight">
                              {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: '2-digit',
                                year: 'numeric',
                              })}
                            </span>
                          </div>
                        </div>
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
    </>
  );
}
