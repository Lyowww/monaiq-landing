/**
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://monaiq.app).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const siteName = "MonAIQ";
export const siteTagline = "Ձեր ֆինանսական ընկերը";

export const defaultDescription =
  "MonAIQ-ը հայաստանյան, դրամակենտրոն անձնական ֆինանսների հավելված է. մուտքագրեք եկամուտն ու ծախսերը, տեսեք հաշիվներն ու միտումները, կառավարեք հաշիվ-ապրանքագրերն ու պարտքերը, հարցրեք ձեր տվյալներին հիմնված AI ֆինանսական օգնականին, ոչ թե ընդհանուր ներդրումային խորհուրդներ: Հավելվածը, անգլերենն ու հայերեն UI-ն. անվճար փորձնական հասանելիություն շուտով App Store-ում եւ Google Play-ում։";

export const appStoreUrl = "https://apps.apple.com/";
export const playStoreUrl = "https://play.google.com/";

export const social = {
  twitter: "@monaiq",
} as const;
