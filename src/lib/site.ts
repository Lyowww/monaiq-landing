import { hy } from "@/messages/hy";

/**
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://monaiq.app).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const siteName = hy.site.name;
export const siteTagline = hy.site.tagline;
export const defaultDescription = hy.meta.defaultDescription;

export const appStoreUrl = "https://apps.apple.com/";
export const playStoreUrl = "https://play.google.com/";

export const social = {
  twitter: "@monaiq",
} as const;
