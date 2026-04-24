import { siteName, siteUrl, defaultDescription } from "@/lib/site";

const orgId = `${siteUrl}/#organization`;
const appId = `${siteUrl}/#app`;

const faq = [
  {
    q: "MonAIQ-ը բանկ է՞",
    a: "Ոչ. Դա անձնական ֆինանսների գործիք է, ոչ ավանդ կամ վարկային ծառայություն.",
  },
  {
    q: "Տա՞լիս է ներդրումային խորհուրդ",
    a: "Ոչ. Հավելվածը կենտրոնացած է բյուջեի, վճարունակության, հաշիվների և ծախսերի վրա՝ ըստ ձեր գրանցումների.",
  },
  {
    q: "Ո՞ր արժույթն է հիմնական",
    a: "Դրամը (AMD). Այլ արժույթներով գումարները ցուցադրվում են դրամային ցուցադրական համարժեքով.",
  },
  {
    q: "Ի՞նչ է MonAIQ Plus-ը",
    a: "Վճարովի մակարդակ՝ ավելի խորը վիճակագրություն, ավելի շատ AI կարողություն և այլ գործառույթներ.",
  },
];

export function JsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    publisher: { "@id": orgId },
    inLanguage: "hy",
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteName,
    url: siteUrl,
    description: defaultDescription,
    logo: `${siteUrl}/brand/only-icon.png`,
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": appId,
    name: siteName,
    applicationCategory: "FinanceApplication",
    operatingSystem: "iOS, Android",
    offers: { "@type": "Offer", price: "0", priceCurrency: "AMD" },
    description: defaultDescription,
    inLanguage: "hy",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
