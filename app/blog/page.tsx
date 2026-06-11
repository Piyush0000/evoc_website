import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import FooterSection from '@/components/FooterSection';
import { fetchBlogs } from '@/lib/api';
import BlogListClient from './BlogListClient';

export default async function BlogListPage() {
  const blogs = await fetchBlogs().catch(() => []);

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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05]">
            Stories
          </h1>
          <p className="text-white/40 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
            Deep dives into e-commerce strategy, AI innovation, and the future of D2C brands.
          </p>
        </div>

        {/* Client: filters + blog grid + BlogGate + live updates */}
        <BlogListClient initialBlogs={blogs} />

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
