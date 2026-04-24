import {
  getAIFinanceContent,
  getMoneyPageJsonLd,
  getMoneyPageWebPageJsonLd,
  type AIFinanceLocale,
} from "@/lib/ai-finance-landing-content";
import { siteUrl } from "@/lib/site";

type Props = { locale: AIFinanceLocale; pagePath: string };

export function MoneyPageJsonLd({ locale, pagePath }: Props) {
  const pageUrl = `${siteUrl}${pagePath}`;
  const c = getAIFinanceContent(locale);
  const software = getMoneyPageJsonLd({
    locale,
    pageUrl,
    description: c.metaDescription,
  });
  const webPage = getMoneyPageWebPageJsonLd({
    pageUrl,
    name: c.metaTitle,
    description: c.metaDescription,
    siteOrigin: siteUrl,
  });
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }}
      />
    </>
  );
}
