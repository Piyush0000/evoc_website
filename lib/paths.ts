/**
 * Unified Path Helper — Vercel Deployment
 * Public assets are served from root on Vercel, no basePath prefix needed.
 */

export function getPath(path: string) {
  if (!path) return '';

  // Pass through absolute URLs unchanged
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }

  // Normalize to start with /
  return path.startsWith('/') ? path : `/${path}`;
}
