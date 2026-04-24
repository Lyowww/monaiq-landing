import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";
import { sitemapBlogEntries, sitemapMainEntries } from "@/lib/sitemap-config";

function absoluteUrlForPath(path: string) {
  const base = siteUrl.replace(/\/$/, "");
  if (path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...sitemapMainEntries, ...sitemapBlogEntries].map((e) => ({
    url: absoluteUrlForPath(e.path),
    lastModified: e.lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}