import { hy } from "@/messages/hy";

/**
 * Public origin for metadata (metadataBase, canonical, OG, Twitter), sitemap, robots, JSON-LD, and webhooks.
 * Production: https://www.monaiq.info
 *
 * Set `NEXT_PUBLIC_SITE_URL` (no trailing slash) to override, e.g. another verified domain.
 * Values that look like a backend or API base URL are ignored (common Vercel misconfiguration).
 */
const PRODUCTION_SITE_URL = "https://www.monaiq.info";

function isMismatchedPublicSiteUrl(url: string): boolean {
  try {
    const u = new URL(url);
    if (u.hostname.includes("monaiq-backend")) return true;
    if (
      process.env.VERCEL_ENV === "production" &&
      u.hostname.endsWith(".vercel.app")
    ) {
      return true;
    }
    const path = u.pathname.replace(/\/$/, "") || "/";
    if (path === "/api" || path.startsWith("/api/")) return true;
    return false;
  } catch {
    return true;
  }
}

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "").trim();
  if (raw && !isMismatchedPublicSiteUrl(raw)) {
    return raw;
  }
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, "");
  }
  return PRODUCTION_SITE_URL;
}

export const siteUrl = resolveSiteUrl();
export const siteName = hy.site.name;
export const siteTagline = hy.site.tagline;
export const defaultDescription = hy.meta.defaultDescription;

export const appStoreUrl = "https://apps.apple.com/";
export const playStoreUrl = "https://play.google.com/";

export const social = {
  twitter: "@monaiq",
} as const;
