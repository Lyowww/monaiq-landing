import { AIFinanceArmeniaLanding } from "@/components/AIFinanceArmeniaLanding";
import { MoneyPageJsonLd } from "@/components/seo/MoneyPageJsonLd";
import { getAIFinancePageMetadata } from "@/lib/ai-finance-page-metadata";

export const metadata = getAIFinancePageMetadata("en");

export default function EnAIFinanceAppArmeniaPage() {
  return (
    <>
      <MoneyPageJsonLd locale="en" pagePath="/ai-finance-app-armenia" />
      <AIFinanceArmeniaLanding locale="en" />
    </>
  );
}
