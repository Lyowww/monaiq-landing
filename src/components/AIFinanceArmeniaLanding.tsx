"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { WaitlistForm } from "@/components/WaitlistForm";
import { getAIFinanceContent, type AIFinanceLocale } from "@/lib/ai-finance-landing-content";
import { hy } from "@/messages/hy";
import { siteName, siteTagline } from "@/lib/site";

const pageGutter = "px-4 min-[400px]:px-5 sm:px-6 md:px-8";
const easeOut = [0.22, 1, 0.36, 1] as const;
const view = {
  once: true as const,
  amount: 0.2 as const,
  margin: "-8% 0px" as const,
};

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.52 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="m20.1 9.1-16.1-8.4c-.2-.1-.4-.1-.5 0L12.5 12 20.1 9.1zM3.5 3.1C3.2 3.2 3 3.5 3 3.8v16.3c0 .3.2.5.4.6l8.2-8.3-8.1-8.3zm1.1 19.1c.1.1.2.1.3.1.1 0 .2 0 .3-.1l8.1-3.1-1.1-1.1-7.6 3.1zm9.1-2.1 7.1-2.5c.3-.1.5-.3.5-.6s-.1-.4-.2-.5l-1.1-.6-2.1 1.1-1.1 1.1-1.1 1.1-1.1 1.1z"
      />
    </svg>
  );
}

function StoreComingSoon({ locale }: { locale: AIFinanceLocale }) {
  const isEn = locale === "en";
  return (
    <div className="grid w-full max-w-md grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:max-w-none sm:max-w-2xl">
      <div
        className="glass-card flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 text-center text-ink-soft sm:min-h-[56px] sm:flex-row sm:gap-2"
        role="img"
        aria-label={isEn ? "App Store, coming soon" : "App Store, շուտով"}
      >
        <AppleIcon className="size-5 shrink-0 text-gold-bright" />
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-xs font-extrabold text-ink sm:text-sm">App Store (iOS)</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-dim/90">
            {isEn ? "Coming soon" : "Շուտով"}
          </p>
        </div>
      </div>
      <div
        className="glass-card flex min-h-[52px] flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 text-center text-ink-soft sm:min-h-[56px] sm:flex-row sm:gap-2"
        role="img"
        aria-label={isEn ? "Google Play, coming soon" : "Google Play, շուտով"}
      >
        <GooglePlayIcon className="size-5 shrink-0 text-gold-bright" />
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-xs font-extrabold text-ink sm:text-sm">Google Play</p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-dim/90">
            {isEn ? "Coming soon" : "Շուտով"}
          </p>
        </div>
      </div>
    </div>
  );
}

type Props = { locale: AIFinanceLocale };

export function AIFinanceArmeniaLanding({ locale }: Props) {
  const c = getAIFinanceContent(locale);
  const reduce = useReducedMotion();

  return (
    <div
      className="relative min-w-0 overflow-x-clip text-ink"
      lang={c.lang}
    >
      <div className="pointer-events-none fixed inset-0 -z-20 bg-mesh-aurora bg-mesh-aurora-animate motion-reduce:animate-none" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-fine opacity-[0.28] motion-reduce:opacity-20"
        aria-hidden
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-2xl focus:border focus:border-gold/40 focus:bg-paper-elevated focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold"
      >
        {locale === "en" ? "Skip to content" : hy.a11y.skipToContent}
      </a>

      <header
        className="sticky top-0 z-50 border-b border-ink/6 glass-panel"
        style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
      >
        <div
          className={`mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-2 sm:min-h-16 sm:gap-4 ${pageGutter} py-2`}
        >
          <Link
            href="/"
            className="group flex min-w-0 items-center gap-2.5"
            aria-label={locale === "en" ? "MonAIQ home" : "MonAIQ գլխավոր"}
          >
            <span className="shrink-0">
              <BrandLogo size={40} />
            </span>
            <span className="font-display text-base font-extrabold sm:text-lg">{siteName}</span>
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2" aria-label={c.navA11y}>
            <Link
              href={c.alternateHref}
              className="rounded-full border border-ink/10 px-2.5 py-1.5 text-xs font-semibold text-ink-soft transition hover:border-gold/30 hover:text-ink sm:px-3"
              hrefLang={locale === "en" ? "hy" : "en"}
            >
              {c.alternateLabel}
            </Link>
            <Link
              href="/#waitlist"
              className="relative rounded-full border border-gold/35 bg-gradient-to-b from-gold/95 to-gold/75 px-3 py-1.5 text-xs font-extrabold text-on-accent shadow-gold min-[400px]:text-sm"
            >
              {locale === "en" ? "Join list" : "Գրանցվել"}
            </Link>
          </nav>
        </div>
        <p className={`${pageGutter} border-t border-ink/6 py-1.5 text-center text-[11px] text-ink-soft/80 sm:py-2 sm:text-left`}>
          <Link href="/" className="font-semibold text-gold/90 hover:underline">
            {c.backHome}
          </Link>
        </p>
      </header>

      <main id="main">
        <section
          className="relative border-b border-ink/6"
          aria-labelledby="mhero-h1"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter} pb-12 pt-8 sm:pb-20 sm:pt-12`}>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold/90 sm:text-sm">
              {c.heroEyebrow}
            </p>
            <h1
              id="mhero-h1"
              className="mt-3 font-display text-balance text-[clamp(1.5rem,5vw+0.2rem,2.9rem)] font-black leading-[1.08] tracking-display-tight text-ink/95"
            >
              {c.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-[0.95rem] leading-[1.75] text-ink-soft/95 sm:mt-6 sm:text-lg sm:leading-[1.7]">
              {c.heroSub}
            </p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-sage/90 sm:mt-8 sm:text-sm">
              {c.ctaKicker}
            </p>
            <div className="mt-3">
              <StoreComingSoon locale={locale} />
            </div>
          </div>
        </section>

        <section className="border-b border-ink/6 py-12 sm:py-16" aria-labelledby="trust-h2">
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="trust-h2"
              className="font-display text-[clamp(1.3rem,3.5vw,2.1rem)] font-extrabold text-balance"
            >
              {c.trustTitle}
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4 min-[500px]:grid-cols-3 sm:mt-8 sm:gap-5">
              {c.trustItems.map((t) => (
                <motion.li
                  key={t.title}
                  className="rounded-2xl border border-ink/[0.09] glass-card p-5"
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={view}
                  transition={{ duration: 0.5, ease: easeOut }}
                >
                  <h3 className="font-display text-base font-extrabold sm:text-lg">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/95 sm:text-base">{t.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-b border-ink/6 py-12 sm:py-16" aria-labelledby="feat-h2">
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="feat-h2"
              className="font-display text-[clamp(1.3rem,3.5vw,2.1rem)] font-extrabold"
            >
              {c.h2WhatYouGet}
            </h2>
            <ol className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {c.features.map((f, i) => (
                <li
                  key={f.h3}
                  className="rounded-2xl border border-ink/[0.07] bg-paper-elevated/50 p-5 sm:p-6"
                >
                  <p className="text-xs font-extrabold text-gold/85 sm:text-sm">
                    {locale === "en" ? `Step ${i + 1}` : `Քայլ ${i + 1}`}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-extrabold sm:text-xl">{f.h3}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft/95 sm:text-base">{f.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-b border-ink/6 py-12 sm:py-16" aria-labelledby="proof-h2">
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="proof-h2"
              className="font-display text-[clamp(1.3rem,3.5vw,2.1rem)] font-extrabold"
            >
              {c.h2Proof}
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-[0.95rem] leading-relaxed text-ink-soft/95 sm:mt-5 sm:text-lg">
              {c.proofBody}
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16" aria-labelledby="dl-h2">
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="dl-h2"
              className="font-display text-[clamp(1.3rem,3.5vw,2.1rem)] font-extrabold"
            >
              {c.h2Cta}
            </h2>
            <p className="mt-3 max-w-2xl text-pretty text-ink-soft/95 sm:mt-4">{c.ctaBody}</p>
            <p className="mt-6 text-sm font-semibold text-ink/90">{c.downloadTitle}</p>
            <div className="mt-3 max-w-2xl">
              <StoreComingSoon locale={locale} />
            </div>
            <div id="waitlist" className="relative z-[1] mt-10 sm:mt-12">
              <WaitlistForm locale={locale} />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/6 py-6 text-center text-xs text-ink-soft/80 sm:py-8">
        <p className={pageGutter}>
          © {siteName} · <span className="text-ink/70">{siteTagline}</span>
        </p>
      </footer>
    </div>
  );
}
