// Single source of truth for the Orbit backend base URL.
//
// NEXT_PUBLIC_API_URL is set per environment in Vercel. A slightly malformed
// value (missing protocol, stray quotes/whitespace, trailing "/api" or "/")
// must never crash the build or the site, so it is normalised here and falls
// back to the production API when it cannot be parsed.

const DEFAULT_API_URL = 'https://api.evoclabs.com';

export function normalizeApiUrl(raw: string | undefined | null): string {
  let value = (raw ?? '').trim().replace(/^['"]+|['"]+$/g, '').trim();
  if (!value) return DEFAULT_API_URL;

  // "api.evoclabs.com" → "https://api.evoclabs.com"
  if (!/^https?:\/\//i.test(value)) value = `https://${value}`;

  try {
    const url = new URL(value);
    // Callers always append "/api/...", so strip a trailing "/api" and slashes
    // to avoid producing "/api/api/...".
    const path = url.pathname.replace(/\/+$/, '').replace(/\/api$/, '');
    return `${url.origin}${path}`;
  } catch {
    return DEFAULT_API_URL;
  }
}

export const API_BASE_URL = normalizeApiUrl(process.env.NEXT_PUBLIC_API_URL);
