/**
 * Unified Path Helper for GitHub Pages Deployment
 */

const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS === 'true';
const REPO_NAME = '/evoc-labss';

export function getPath(path: string) {
  if (!path) return '';
  
  // Handle absolute URLs
  if (path.startsWith('http') || path.startsWith('//')) {
    return path;
  }

  // Normalize path to start with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // In production, prefix with REPO_NAME
  // In development, return as is (localhost:3000/path)
  if (isProd) {
    if (normalizedPath.startsWith(REPO_NAME)) {
      return normalizedPath;
    }
    return `${REPO_NAME}${normalizedPath}`;
  }

  return normalizedPath;
}
