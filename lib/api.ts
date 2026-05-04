const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:5001';

export interface Blog {
  id: string | number;
  title: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: string;
  authorImage?: string;
  authorBio?: string;
  companyName?: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export class BlogFetchError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = 'BlogFetchError';
    this.status = status;
  }
}

export async function fetchBlogs(): Promise<Blog[]> {
  const url = `${API_URL}/api/blogs?t=${Date.now()}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
    mode: 'cors',
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new BlogFetchError(`Failed to fetch blogs: ${response.statusText}`, response.status);
  }
  const result = await response.json();
  const blogs: Blog[] = Array.isArray(result) ? result : (result.data || []);
  const published = blogs.filter(blog => blog.published === true);
  console.log(`[blog-sync] fetched list: ${published.length} published / ${blogs.length} total`);
  return published;
}

export async function fetchBlogById(id: string): Promise<Blog | null> {
  const url = `${API_URL}/api/blogs/${id}?t=${Date.now()}`;
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache' },
    mode: 'cors',
    cache: 'no-store',
  });
  if (response.status === 404) {
    console.log(`[blog-sync] blog ${id} → 404 (deleted)`);
    return null;
  }
  if (!response.ok) {
    throw new BlogFetchError(`Failed to fetch blog: ${response.statusText}`, response.status);
  }
  const result = await response.json();
  const blog: Blog | null = result?.data ?? result ?? null;
  if (blog && blog.published === false) {
    console.log(`[blog-sync] blog ${id} → unpublished`);
    return null;
  }
  console.log(`[blog-sync] fetched blog ${id} (updatedAt=${blog?.updatedAt})`);
  return blog;
}

/**
 * Utility to strip HTML tags and truncate text for previews
 */
export function stripHtmlAndTruncate(html: string, maxLength: number): string {
  if (!html) return '';
  const stripped = html.replace(/<[^>]*>?/gm, '');
  if (stripped.length <= maxLength) return stripped;
  return stripped.substring(0, maxLength) + '...';
}

/**
 * Utility to get relative time string (e.g., "Just Now", "5 min ago", "2d ago")
 */
export function getRelativeTime(dateString: string): string {
  if (!dateString) return "Just Now";
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 60000);
  const safeDiff = Math.max(0, diff);

  if (safeDiff < 1) return "Just Now";
  if (safeDiff < 60) return `${safeDiff} min ago`;
  if (safeDiff < 1440) return `${Math.floor(safeDiff / 60)}h ago`;
  return `${Math.floor(safeDiff / 1440)}d ago`;
}
