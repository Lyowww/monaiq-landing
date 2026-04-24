import { buildUrlsetXml, sitemapMainEntries } from "@/lib/sitemap-config";

export function GET() {
  const xml = buildUrlsetXml(sitemapMainEntries);
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
