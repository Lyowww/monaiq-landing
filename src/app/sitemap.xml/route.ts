import { buildSitemapIndexXml } from "@/lib/sitemap-config";

export function GET() {
  const xml = buildSitemapIndexXml();
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
