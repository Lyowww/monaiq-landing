import type { Metadata, Viewport } from "next";
import { Noto_Sans_Armenian, Noto_Serif_Armenian } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import {
  defaultDescription,
  siteName,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const fontSans = Noto_Sans_Armenian({
  variable: "--font-sans",
  subsets: ["armenian", "latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fontDisplay = Noto_Serif_Armenian({
  variable: "--font-display",
  subsets: ["armenian", "latin", "latin-ext"],
  display: "swap",
  weight: ["600", "700"],
});

const title = {
  default: `${siteName} | Ձեր ֆինանսական ընկերը · անձնական ֆինանսներ`,
  template: `%s | ${siteName}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: defaultDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  keywords: [
    "MonAIQ",
    "անձնական ֆինանսներ",
    "Հայաստան",
    "դրամ",
    "AMD",
    "ֆինտեխ",
    "AI",
    "բյուջե",
    "ծախսեր",
  ],
  category: "finance",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "hy_AM",
    url: siteUrl,
    siteName,
    title: title.default,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: title.default,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#F5F5F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hy" className="overflow-x-clip">
      <body
        className={`${fontSans.variable} ${fontDisplay.variable} min-w-0 touch-manipulation overflow-x-clip pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] font-sans antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
