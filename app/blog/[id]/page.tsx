import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Tag } from 'lucide-react';
import FooterSection from '@/components/FooterSection';
import { fetchBlogById, fetchBlogs, getRelativeTime } from '@/lib/api';
import BlogDetailClient from './BlogDetailClient';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let blog = await fetchBlogById(id);

  if (!blog) {
    const allBlogs = await fetchBlogs();
    const match = allBlogs.find(
      (b) => b.slug && b.slug.replace(/-\d+$/, '') === id
    );
    if (match) {
      blog = await fetchBlogById(String(match.slug || match.id));
    }
  }

  if (!blog) notFound();

  return (
    <main className="bg-[#030303] min-h-screen text-white selection:bg-blue-600/30 font-sans overflow-x-hidden">
      <BlogDetailClient />

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
        <div className="mb-12 md:mb-16">
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
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 leading-[0.9] py-2 uppercase italic">
            {blog.title}
          </h1>
        </div>

        {/* Cover Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-video overflow-hidden rounded-[32px] mb-16 md:mb-24 shadow-2xl pt-8">
          <img
            src={blog.image || '/blog-placeholder.jpg'}
            alt={blog.imageAlt || `Evoc Labs a software company - ${blog.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto mb-32">
          <div
            className="blog-content text-white/70 text-lg leading-relaxed space-y-8"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Author Section */}
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
                        Founder —{' '}
                        {blog.companyName.includes(' — ')
                          ? blog.companyName.split(' — ')[1]
                          : blog.companyName}
                      </p>
                    )}
                    <h4 className="text-xl font-bold text-white uppercase italic tracking-tighter">
                      {blog.author}
                    </h4>
                  </div>
                </div>
                <div className="text-white/50 text-sm leading-[1.8] font-medium italic overflow-hidden">
                  <p className="line-clamp-1">{blog.authorBio?.split('\n')[0]}</p>
                </div>
              </div>
            </div>
          )}

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="mt-20 pt-10 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-white/20 mr-2 uppercase text-[9px] font-bold tracking-widest">
                <Tag className="w-3.5 h-3.5" />
                Tags:
              </div>
              {blog.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-xs font-medium text-white/40 hover:text-white hover:border-blue-500/30 transition-all cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

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
        .blog-content { font-family: Arial, sans-serif; }
        .blog-content h1 {
          font-size: 3rem !important; line-height: 1 !important; font-weight: 900 !important;
          letter-spacing: -0.05em !important; text-transform: uppercase !important;
          font-style: italic !important; color: white !important; margin-bottom: 2rem !important;
        }
        .blog-content h2 {
          font-size: 1.875rem !important; line-height: 1.25 !important; font-weight: 900 !important;
          letter-spacing: -0.025em !important; color: white !important;
          margin-top: 3rem !important; margin-bottom: 1.5rem !important;
        }
        .blog-content p {
          font-size: 1.125rem !important; line-height: 1.8 !important;
          margin-bottom: 1.5rem !important; color: rgba(255, 255, 255, 0.7) !important;
        }
        .blog-content strong { font-weight: 900 !important; color: white !important; }
        .blog-content blockquote {
          border-left: 4px solid #2563eb !important;
          background-color: rgba(37, 99, 235, 0.1) !important;
          padding: 2rem 2.5rem !important; font-style: italic !important;
          margin: 3rem 0 !important; border-radius: 0 1rem 1rem 0 !important;
          color: rgba(255, 255, 255, 0.9) !important; font-size: 1.25rem !important;
        }
        .blog-content u {
          text-decoration: underline !important; text-decoration-color: white !important;
          text-underline-offset: 4px !important;
        }
        .blog-content img {
          border-radius: 24px; margin: 4rem 0;
          border: 1px solid rgba(255, 255, 255, 0.1); width: 100%;
        }
      `}</style>

      <FooterSection hideCTA={true} />
    </main>
  );
}
