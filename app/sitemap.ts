import { MetadataRoute } from 'next';
import { positions } from '@/lib/positions';

const BASE_URL = 'https://www.evoclabs.com';

const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.evoclabs.com';
const API_URL = RAW_API_URL.replace(/\/+$/, '').replace(/\/api$/, '');

async function fetchPublishedBlogs() {
  try {
    const res = await fetch(`${API_URL}/api/blogs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const result = await res.json();
    const blogs = Array.isArray(result) ? result : (result.data || []);
    return blogs.filter((b: any) => b.published === true);
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await fetchPublishedBlogs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/demo`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  const careerPages: MetadataRoute.Sitemap = positions.map((pos) => ({
    url: `${BASE_URL}/careers/${pos.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((blog: any) => {
    const slug =
      blog.slug ||
      blog.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    };
  });

  return [...staticPages, ...careerPages, ...blogPages];
}
