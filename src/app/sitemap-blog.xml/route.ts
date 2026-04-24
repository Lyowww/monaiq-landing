import { buildUrlsetXml, sitemapBlogEntries } from "@/lib/sitemap-config";

/**
 * Sub-sitemap for /blog/* — currently empty. When the first post exists,
 * add the URL in `sitemap-config.ts` (sitemapBlogEntries) and keep this route.
 * Empty <urlset> is valid; Google will simply discover no URLs.
 */
export function GET() {
  const xml = buildUrlsetXml(sitemapBlogEntries);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
