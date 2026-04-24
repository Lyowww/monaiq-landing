import { siteUrl } from "@/lib/site";

const origin = siteUrl;

export type SitemapUrlEntry = {
  path: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

/** URLs that exist in production today — keep in sync with real routes. */
export const sitemapMainEntries: SitemapUrlEntry[] = [
  { path: "/", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  {
    path: "/ai-finance-app-armenia",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.95,
  },
  {
    path: "/hy/ai-finance-app",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.95,
  },
];

/**
 * When you add MDX or CMS blog posts, replace this with dynamic URLs
 * and return at least one entry before surfacing sitemap-blog in the index.
 */
export const sitemapBlogEntries: SitemapUrlEntry[] = [];

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toAbsoluteUrl(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${p}`;
}

export function buildSitemapIndexXml() {
  const now = new Date().toISOString();
  const locs = [
    { loc: `${origin}/sitemap-main.xml`, lastmod: now },
    { loc: `${origin}/sitemap-blog.xml`, lastmod: now },
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs
  .map(
    (s) => `  <sitemap>
    <loc>${escapeXml(s.loc)}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;
}

export function buildUrlsetXml(entries: SitemapUrlEntry[]) {
  const body = entries
    .map((e) => {
      const loc = escapeXml(toAbsoluteUrl(e.path));
      const lastmod = e.lastModified?.toISOString();
      const changefreq = e.changeFrequency
        ? `\n    <changefreq>${e.changeFrequency}</changefreq>`
        : "";
      const priority =
        typeof e.priority === "number" ? `\n    <priority>${e.priority}</priority>` : "";
      return `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}${changefreq}${priority}
  </url>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}
