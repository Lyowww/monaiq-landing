import type { Metadata } from "next";
import { getAIFinanceContent, type AIFinanceLocale } from "@/lib/ai-finance-landing-content";
import { siteName, siteUrl, social } from "@/lib/site";

const enPath = "/ai-finance-app-armenia";
const hyPath = "/hy/ai-finance-app";
const enAbs = `${siteUrl}${enPath}`;
const hyAbs = `${siteUrl}${hyPath}`;

const languages = {
  en: enAbs,
  "hy-AM": hyAbs,
  "x-default": hyAbs,
} as const;

export function getAIFinancePageMetadata(mode: AIFinanceLocale): Metadata {
  const c = getAIFinanceContent(mode);
  const canonical = mode === "en" ? enAbs : hyAbs;
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    keywords: [
      "MonAIQ",
      "Armenia",
      "AI finance",
      "AMD",
      "dram",
      "budget",
      "fintech",
      "Երևան",
      "Հայաստան",
    ],
    applicationName: siteName,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName,
      title: c.metaTitle,
      description: c.metaDescription,
      locale: c.openGraphLocale,
      alternateLocale: mode === "en" ? "hy_AM" : "en_US",
      images: [
        { url: "/opengraph-image", width: 1200, height: 630, alt: `${siteName} — ${c.heroEyebrow}` },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: social.twitter,
      title: c.metaTitle,
      description: c.metaDescription,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  };
}
