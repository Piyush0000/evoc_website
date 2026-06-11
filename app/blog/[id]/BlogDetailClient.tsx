'use client';

import { useRouter } from 'next/navigation';
import BlogGate from '@/components/BlogGate';
import { useBlogEvents } from '@/lib/useBlogEvents';

export default function BlogDetailClient() {
  const router = useRouter();
  useBlogEvents(() => router.refresh());
  return <BlogGate />;
}
