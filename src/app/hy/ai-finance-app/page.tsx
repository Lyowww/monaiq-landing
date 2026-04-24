import { AIFinanceArmeniaLanding } from "@/components/AIFinanceArmeniaLanding";
import { MoneyPageJsonLd } from "@/components/seo/MoneyPageJsonLd";
import { getAIFinancePageMetadata } from "@/lib/ai-finance-page-metadata";

export const metadata = getAIFinancePageMetadata("hy");

export default function HyAIFinanceAppPage() {
  return (
    <>
      <MoneyPageJsonLd locale="hy" pagePath="/hy/ai-finance-app" />
      <AIFinanceArmeniaLanding locale="hy" />
    </>
  );
}
