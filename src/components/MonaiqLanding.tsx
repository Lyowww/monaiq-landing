"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { siteName, siteTagline } from "@/lib/site";
import { formatHy, hy } from "@/messages/hy";
import { BrandLogo } from "./BrandLogo";
import { WaitlistForm } from "./WaitlistForm";

const MotionLink = motion(Link);

const nav = hy.nav;
const featureCards = hy.features.items;
const faqItems = hy.faq.items;

function AppleIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.52 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function GooglePlayIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="m20.1 9.1-16.1-8.4c-.2-.1-.4-.1-.5 0L12.5 12 20.1 9.1zM3.5 3.1C3.2 3.2 3 3.5 3 3.8v16.3c0 .3.2.5.4.6l8.2-8.3-8.1-8.3zm1.1 19.1c.1.1.2.1.3.1.1 0 .2 0 .3-.1l8.1-3.1-1.1-1.1-7.6 3.1zm9.1-2.1 7.1-2.5c.3-.1.5-.3.5-.6s-.1-.4-.2-.5l-1.1-.6-2.1 1.1-1.1 1.1-1.1 1.1-1.1 1.1z"
      />
    </svg>
  );
}

function InstagramIcon(props: { className?: string }) {
  return (
    <svg
      className={props.className}
      fill="currentColor"
      width="200px"
      height="200px"
      viewBox="0 0 32 32"
      id="Camada_1"
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z" />

        <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8   c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z" />

        <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8   c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z" />
      </g>
    </svg>
  );
}

function MailIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function PhoneIcon(props: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={props.className} aria-hidden>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  );
}

function ComingSoonStores({ reduce }: { reduce: boolean }) {
  const cardIn = (delay: number) => ({
    initial: reduce ? false : ({ opacity: 0, y: 18, scale: 0.98 } as const),
    animate: reduce ? undefined : { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.55, delay, ease: easeOut },
  });
  return (
    <div className="grid w-full max-w-md grid-cols-1 gap-3 min-[420px]:grid-cols-2 min-[420px]:max-w-none sm:max-w-2xl">
      <motion.div
        {...cardIn(0.52)}
        className="glass-card group flex min-h-[52px] cursor-not-allowed flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 text-center text-ink-soft transition duration-300 motion-safe:hover:shadow-lift sm:min-h-[56px] sm:flex-row sm:gap-2 sm:py-3.5"
        role="img"
        aria-label={hy.a11y.storeIos}
        whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.2 } }}
      >
        <AppleIcon className="size-5 shrink-0 text-gold-bright" />
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-xs font-extrabold text-ink sm:text-sm">
            {hy.stores.iosTitle}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-dim/90">
            {hy.stores.soon}
          </p>
        </div>
      </motion.div>
      <motion.div
        {...cardIn(0.6)}
        className="glass-card group flex min-h-[52px] cursor-not-allowed flex-col items-center justify-center gap-1 rounded-2xl px-4 py-3 text-center text-ink-soft transition duration-300 motion-safe:hover:shadow-lift sm:min-h-[56px] sm:flex-row sm:gap-2 sm:py-3.5"
        role="img"
        aria-label={hy.a11y.storeAndroid}
        whileHover={reduce ? undefined : { y: -2, transition: { duration: 0.2 } }}
      >
        <GooglePlayIcon className="size-5 shrink-0 text-gold-bright" />
        <div className="min-w-0 text-center sm:text-left">
          <p className="text-xs font-extrabold text-ink sm:text-sm">
            {hy.stores.androidTitle}
          </p>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-gold-dim/90">
            {hy.stores.soon}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

const pageGutter = "px-4 min-[400px]:px-5 sm:px-6 md:px-8";

const easeOut = [0.22, 1, 0.36, 1] as const;
const viewportReveal = {
  once: true as const,
  amount: 0.15 as const,
  margin: "-10% 0px -5% 0px" as const,
};

function AuroraOrbs() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 900], [0, reduce ? 0 : 120]);
  const yB = useTransform(scrollY, [0, 900], [0, reduce ? 0 : -90]);
  const yC = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 55]);
  const scaleA = useTransform(scrollY, [0, 600], [1, reduce ? 1 : 1.06]);

  return (
    <>
      <motion.div
        style={{ y: yA, scale: scaleA }}
        className="pointer-events-none absolute -left-1/4 top-0 h-[min(60vh,32rem)] w-[min(100vw,48rem)] rounded-full bg-glow-blob opacity-80 blur-[100px] motion-safe:animate-float-slow motion-reduce:animate-none will-change-transform"
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute -right-1/3 bottom-0 h-[min(50vh,28rem)] w-[min(90vw,40rem)] rounded-full bg-glow-blob motion-safe:opacity-50 motion-reduce:opacity-30 blur-[90px] motion-safe:animate-float-wide motion-reduce:animate-none will-change-transform"
        style={{
          y: yB,
          background:
            "radial-gradient(circle, rgba(150, 185, 210, 0.22) 0%, transparent 68%)",
        }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full motion-safe:animate-pulse-ring motion-reduce:opacity-40 will-change-transform"
        style={{
          y: yC,
          background:
            "radial-gradient(circle, rgba(120, 170, 140, 0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />
    </>
  );
}

export function MonaiqLanding() {
  const reduce = useReducedMotion();

  return (
    <div className="relative min-w-0 overflow-x-clip text-ink">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-mesh-aurora bg-mesh-aurora-animate motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-grid-fine opacity-[0.28] motion-safe:animate-grid-drift motion-reduce:opacity-20 motion-reduce:animate-none"
        aria-hidden
      />
      <AuroraOrbs />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-[max(1rem,env(safe-area-inset-left))] focus:top-[max(0.5rem,env(safe-area-inset-top))] focus:z-[100] focus:rounded-2xl focus:border focus:border-gold/40 focus:bg-paper-elevated focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:shadow-gold"
      >
        {hy.a11y.skipToContent}
      </a>

      <motion.header
        className="sticky top-0 z-50 border-b border-ink/6 glass-panel motion-safe:transition-shadow motion-reduce:transition-none supports-[backdrop-filter]:bg-paper-elevated/80"
        style={{ paddingTop: "max(0.5rem, env(safe-area-inset-top))" }}
        initial={reduce ? false : { y: -18, opacity: 0.92 }}
        animate={reduce ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <div
          className={`mx-auto flex min-h-14 max-w-6xl items-center justify-between gap-2 sm:min-h-16 sm:gap-4 ${pageGutter} py-2`}
        >
          <Link
            href="/"
            className="group flex min-w-0 max-w-[70%] items-center gap-2.5 sm:max-w-none sm:gap-3"
            aria-label={formatHy(hy.a11y.ariaHomeLogo, {
              siteName: hy.site.name,
            })}
          >
            <span className="shrink-0 transition duration-300 group-hover:scale-105">
              <BrandLogo size={42} priority />
            </span>
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="font-display text-base font-extrabold tracking-display-tight sm:text-lg">
                {siteName}
              </span>
              <span className="line-clamp-2 text-[9px] font-semibold uppercase leading-tight tracking-[0.14em] text-gold/90 min-[400px]:line-clamp-1 min-[400px]:text-[10px] sm:tracking-[0.18em]">
                {siteTagline}
              </span>
            </div>
          </Link>
          <nav
            className="hidden items-center gap-1 lg:flex xl:gap-2"
            aria-label={hy.a11y.navMain}
          >
            {nav.map((item, i) =>
              item.href.startsWith("/") ? (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  className="link-nav rounded-full px-2.5 py-1.5"
                  initial={reduce ? false : { opacity: 0, y: -8 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, ease: easeOut, duration: 0.45 }}
                >
                  {item.label}
                </MotionLink>
              ) : (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="link-nav rounded-full px-2.5 py-1.5"
                  initial={reduce ? false : { opacity: 0, y: -8 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + i * 0.05, ease: easeOut, duration: 0.45 }}
                >
                  {item.label}
                </motion.a>
              )
            )}
          </nav>
          <motion.a
            href="#waitlist"
            className="group relative flex h-10 min-w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/35 bg-gradient-to-b from-gold/95 to-gold/75 px-3 text-xs font-extrabold text-on-accent shadow-gold transition active:scale-[0.98] min-[400px]:px-4 min-[400px]:text-sm sm:min-w-0 sm:py-2.5"
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={reduce ? undefined : { opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 22, delay: 0.35 }}
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.98 }}
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition duration-500 group-hover:translate-x-full motion-reduce:transition-none" />
            <span className="relative">{hy.header.ctaRegister}</span>
          </motion.a>
        </div>
        <div
          className={`border-t border-ink/6 bg-paper-elevated/30 py-0 backdrop-blur-sm lg:hidden ${pageGutter}`}
        >
          <nav
            className="scrollbar-none -mx-0 flex snap-x snap-mandatory gap-1 overflow-x-auto overflow-y-hidden py-2.5 sm:justify-center sm:gap-0 sm:overflow-visible"
            aria-label={hy.a11y.navPageSections}
          >
            {nav.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="snap-center shrink-0 rounded-full border border-transparent px-3 py-2 text-center text-xs font-medium leading-tight text-ink-soft/95 transition first:pl-0 last:pr-0 hover:border-gold/20 hover:text-ink active:border-gold/30 sm:shrink sm:px-2 sm:py-1.5"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="snap-center shrink-0 rounded-full border border-transparent px-3 py-2 text-center text-xs font-medium leading-tight text-ink-soft/95 transition first:pl-0 last:pr-0 hover:border-gold/20 hover:text-ink active:border-gold/30 sm:shrink sm:px-2 sm:py-1.5"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>
      </motion.header>

      <main id="main">
        <section
          id="hero"
          className="relative border-b border-ink/6"
          aria-labelledby="hero-heading"
        >
          <div
            className={`relative mx-auto max-w-6xl ${pageGutter} pb-12 pt-8 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16`}
          >
            <div className="relative">
              <h1
                id="hero-heading"
                className="font-display text-balance text-[clamp(1.65rem,6vw+0.3rem,3.9rem)] font-black leading-[1.06] tracking-display-tight"
              >
                <motion.span
                  className="block text-gradient-hero"
                  initial={reduce ? false : { opacity: 0, y: 28, filter: "blur(6px)" }}
                  animate={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
                >
                  {hy.hero.titleGradient}
                </motion.span>
                <br className="max-sm:block sm:hidden" />
                <motion.span
                  className="block text-ink/95"
                  initial={reduce ? false : { opacity: 0, y: 22 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18, ease: easeOut }}
                >
                  {hy.hero.titleMid}
                </motion.span>
                <motion.p
                  className="whitespace-nowrap text-gold-bright/95 sm:whitespace-normal"
                  initial={reduce ? false : { opacity: 0, y: 18, scale: 0.98 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    delay: 0.25,
                  }}
                >
                  {siteTagline.toLowerCase()}
                </motion.p>
              </h1>
              <motion.p
                className="mt-6 max-w-2xl text-balance text-[0.95rem] leading-[1.75] text-ink-soft/95 sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading-[1.7]"
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.38, ease: easeOut }}
              >
                {hy.hero.lead}
                <span className="font-bold text-ink/95">
                  {hy.hero.leadEmphasis}
                </span>
                {hy.hero.leadEnd}
              </motion.p>
            </div>
            <div className="mt-8 flex w-full max-w-2xl flex-col gap-4 sm:mt-10">
              <motion.p
                className="text-xs font-semibold uppercase tracking-widest text-sage/90 sm:text-sm"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                animate={reduce ? undefined : { opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.48, ease: easeOut }}
              >
                {hy.hero.downloadWhen}
              </motion.p>
              <ComingSoonStores reduce={!!reduce} />
            </div>
            <motion.div
              id="waitlist"
              className="relative z-[1] mt-12 w-full sm:mt-16"
              initial={reduce ? false : { opacity: 0, y: 36, scale: 0.99 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 22,
                delay: 0.55,
              }}
            >
              <motion.div
                className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/8 via-transparent to-sage/10 blur-2xl"
                aria-hidden
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={reduce ? undefined : { opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 0.5, ease: easeOut }}
              />
              <WaitlistForm />
            </motion.div>
          </div>
        </section>

        <section
          id="features"
          className="relative border-b border-ink/6 py-16 sm:py-20 md:py-24"
          aria-labelledby="features-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <motion.div
              className="max-w-2xl"
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold/90 sm:text-sm">
                {hy.features.kicker}
              </p>
              <h2
                id="features-heading"
                className="mt-2 font-display text-[clamp(1.45rem,4.2vw,2.55rem)] font-extrabold text-balance tracking-display-tight"
              >
                {hy.features.title}
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft/95 sm:text-base">
                {hy.features.subtitle}
              </p>
            </motion.div>
            <motion.ul
              className="mt-10 grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 sm:mt-12 sm:gap-5 lg:grid-cols-3"
              initial="hidden"
              whileInView="show"
              viewport={viewportReveal}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: reduce ? 0 : 0.12,
                    delayChildren: 0.08,
                  },
                },
              }}
            >
              {featureCards.map((f) => (
                <motion.li
                  key={f.title}
                  variants={{
                    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 36 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.55, ease: easeOut },
                    },
                  }}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-ink/[0.09] glass-card p-5 transition duration-500 motion-safe:hover:-translate-y-0.5 motion-safe:hover:border-gold/30 motion-safe:hover:shadow-lift sm:p-6"
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -4, boxShadow: "0 20px 50px -16px rgba(32, 42, 58, 0.12)" }
                  }
                >
                  <div
                    className="pointer-events-none absolute -right-6 -top-6 size-32 rounded-full bg-gold/5 blur-2xl transition group-hover:bg-gold/10"
                    aria-hidden
                  />
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-gold/85">
                      {f.tag}
                    </span>
                    <span
                      className="font-mono text-lg text-ink/25 transition group-hover:text-gold/40"
                      aria-hidden
                    >
                      {f.icon}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-extrabold sm:text-xl">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft/90 sm:text-[0.9375rem]">
                    {f.desc}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </section>

        <section
          id="ai"
          className="relative border-b border-ink/6 py-16 sm:py-20 md:py-24"
          aria-labelledby="ai-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <div className="grid min-w-0 items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
              <motion.div
                className="min-w-0 self-center"
                initial={reduce ? false : { opacity: 0, x: -28 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={viewportReveal}
                transition={{ duration: 0.7, ease: easeOut }}
              >
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sage/90">
                  {hy.ai.kicker}
                </p>
                <h2
                  id="ai-heading"
                  className="mt-2 font-display text-[clamp(1.4rem,4vw,2.35rem)] font-extrabold text-balance tracking-display-tight"
                >
                  {hy.ai.titleBefore}
                  <span className="text-gold-bright/95">
                    {hy.ai.titleHighlight}
                  </span>
                  {hy.ai.titleAfter}
                </h2>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft/95 sm:text-base">
                  {hy.ai.lead}
                </p>
                <motion.ul
                  className="mt-6 space-y-2.5 text-[0.9rem] sm:space-y-3 sm:text-sm"
                  initial="hidden"
                  whileInView="show"
                  viewport={viewportReveal}
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: reduce ? 0 : 0.08,
                        delayChildren: 0.1,
                      },
                    },
                  }}
                >
                  {hy.ai.sampleQuestions.map((q) => (
                    <motion.li
                      key={q}
                      variants={{
                        hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 12 },
                        show: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.4, ease: easeOut },
                        },
                      }}
                      className="flex gap-2.5 rounded-2xl border border-ink/[0.07] glass-inset bg-white/60 px-3 py-2.5 leading-snug shadow-sm backdrop-blur-sm"
                    >
                      <span className="mt-0.5 shrink-0 text-gold" aria-hidden>
                        ✓
                      </span>
                      <span className="min-w-0 text-ink/95">{q}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div
                className="relative min-w-0"
                initial={reduce ? false : { opacity: 0, x: 32, scale: 0.98 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0, scale: 1 }}
                viewport={viewportReveal}
                transition={{ duration: 0.8, delay: 0.06, ease: easeOut }}
              >
                <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/20 via-sage/15 to-gold/10 blur-3xl motion-reduce:opacity-50" />
                <div
                  className="relative overflow-hidden rounded-2xl border border-ink/10 glass-card p-4 shadow-lift min-[400px]:rounded-3xl min-[400px]:p-5 sm:p-6"
                  style={{ background: "var(--card-well)" }}
                >
                  <div
                    className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.55)_50%,transparent_65%)] bg-[length:200%_100%] motion-safe:animate-shimmer motion-reduce:animate-none"
                    aria-hidden
                  />
                  <div className="mb-2 flex min-h-0 items-center justify-between gap-2 text-xs text-ink-soft sm:mb-3">
                    <span>{hy.ai.mock.header}</span>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold-bright/95">
                      {hy.ai.mock.badge}
                    </span>
                  </div>
                  <div className="space-y-2.5 text-[0.875rem] leading-relaxed min-[400px]:space-y-3 min-[400px]:text-sm">
                    <div className="rounded-xl border border-ink/8 bg-paper-elevated/90 p-2.5 text-ink/85 min-[400px]:rounded-2xl min-[400px]:p-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-ink-soft min-[400px]:text-[10px]">
                        {hy.ai.mock.userLabel}
                      </span>
                      <p className="mt-1 min-w-0 break-words text-ink/90">
                        {hy.ai.mock.userMessage}
                      </p>
                    </div>
                    <div
                      className="rounded-xl border p-2.5 text-ink/95 min-[400px]:rounded-2xl min-[400px]:p-3"
                      style={{
                        borderColor: "rgba(201, 162, 55, 0.35)",
                        background:
                          "linear-gradient(180deg, rgba(201, 162, 55, 0.12), rgba(255, 252, 248, 0.9))",
                      }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider min-[400px]:text-[10px]"
                        style={{ color: "var(--gold-bright)" }}
                      >
                        {siteName}
                      </span>
                      <p className="mt-1 min-w-0 break-words leading-relaxed text-ink/85">
                        {hy.ai.mock.assistantMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="py-16 sm:py-20 md:py-24"
          aria-labelledby="faq-heading"
        >
          <div className={`mx-auto w-full min-w-0 max-w-2xl ${pageGutter}`}>
            <motion.h2
              id="faq-heading"
              className="font-display text-[clamp(1.4rem,4vw,2.35rem)] font-extrabold tracking-display-tight"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {hy.faq.title}
            </motion.h2>
            <div className="mt-6 space-y-2 sm:mt-7">
              {faqItems.map((item, i) => (
                <motion.div
                  key={item.q}
                  initial={reduce ? false : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={viewportReveal}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: easeOut }}
                >
                  <details
                    className="group min-w-0 rounded-2xl border border-ink/[0.09] glass-card transition-shadow open:border-gold/30 open:shadow-md motion-safe:open:-translate-y-px"
                  >
                    <summary className="flex min-h-12 w-full cursor-pointer list-none items-center gap-2 rounded-2xl px-4 py-2.5 text-left text-sm font-extrabold text-ink/95 sm:px-4 sm:py-3 sm:text-sm [&::-webkit-details-marker]:hidden">
                      <span className="min-w-0 flex-1 break-words pr-1">
                        {item.q}
                      </span>
                      <span
                        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-gold/5 text-gold-bright/95 transition group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="border-t border-ink/6 px-4 py-3 text-sm leading-relaxed text-ink-soft/95 sm:px-4 sm:py-3.5 sm:text-sm">
                      {item.a}
                    </p>
                  </details>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-ink/[0.09] bg-gradient-to-b from-sage/5 to-transparent py-16 sm:py-20"
          aria-labelledby="cta-heading"
        >
          <div
            className={`mx-auto w-full min-w-0 max-w-3xl text-center ${pageGutter}`}
          >
            <motion.h2
              id="cta-heading"
              className="font-display text-[clamp(1.4rem,4vw,2.35rem)] font-extrabold tracking-display-tight"
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportReveal}
              transition={{ duration: 0.65, ease: easeOut }}
            >
              {hy.cta.titleBefore}
            </motion.h2>
            <div
              id="contact"
              className="mx-auto mt-10 w-full max-w-2xl text-left sm:text-center"
              aria-label={hy.a11y.contactSection}
            >
              <motion.p
                className="text-xs font-extrabold uppercase tracking-[0.2em] text-gold/90"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportReveal}
                transition={{ duration: 0.5, delay: 0.05, ease: easeOut }}
              >
                {hy.contact.kicker}
              </motion.p>
              <motion.h3
                className="mt-2 font-display text-[clamp(1.1rem,3vw,1.65rem)] font-extrabold tracking-display-tight text-ink/95"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportReveal}
                transition={{ duration: 0.55, delay: 0.1, ease: easeOut }}
              >
                {hy.contact.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-sm leading-relaxed text-ink-soft/95 sm:text-[0.9375rem]"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={viewportReveal}
                transition={{ duration: 0.5, delay: 0.15, ease: easeOut }}
              >
                {hy.contact.subtitle}
              </motion.p>
              <motion.ul
                className="mt-8 grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 sm:mt-9 sm:gap-4"
                initial="hidden"
                whileInView="show"
                viewport={viewportReveal}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: reduce ? 0 : 0.14,
                      delayChildren: 0.12,
                    },
                  },
                }}
              >
                <motion.li
                  className="min-w-0"
                  variants={{
                    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeOut },
                    },
                  }}
                >
                  <motion.a
                    href={hy.contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-channel-card group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-ink/[0.09] glass-card px-4 py-3 text-left sm:min-h-0 sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:px-3 sm:py-6 sm:text-center"
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -3, boxShadow: "0 12px 40px -12px rgba(32, 42, 58, 0.12)" }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <span
                      className="contact-channel-icon flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/15 to-sage/10 text-gold-bright transition duration-300 motion-safe:animate-float-slow motion-safe:group-hover:scale-110 motion-reduce:animate-none sm:size-14"
                      style={{ animationDelay: "0s" }}
                    >
                      <InstagramIcon className="size-6 sm:size-7" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-gold/85">
                        {hy.contact.labelInstagram}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-bold text-ink/95 sm:mt-1">
                        {hy.contact.instagramHandle}
                      </span>
                    </span>
                  </motion.a>
                </motion.li>
                <motion.li
                  className="min-w-0"
                  variants={{
                    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeOut },
                    },
                  }}
                >
                  <motion.a
                    href={`mailto:${hy.contact.email}`}
                    className="contact-channel-card group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-ink/[0.09] glass-card px-4 py-3 text-left sm:min-h-0 sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:px-3 sm:py-6 sm:text-center"
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -3, boxShadow: "0 12px 40px -12px rgba(32, 42, 58, 0.12)" }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <span
                      className="contact-channel-icon flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/15 to-sage/10 text-gold-bright transition duration-300 motion-safe:animate-float-slow motion-safe:group-hover:scale-110 motion-reduce:animate-none sm:size-14"
                      style={{ animationDelay: "0.35s" }}
                    >
                      <MailIcon className="size-6 sm:size-7" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-gold/85">
                        {hy.contact.labelEmail}
                      </span>
                      <span className="mt-0.5 block break-all text-sm font-bold text-ink/95 sm:mt-1">
                        {hy.contact.email}
                      </span>
                    </span>
                  </motion.a>
                </motion.li>
                <motion.li
                  className="min-w-0"
                  variants={{
                    hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 24 },
                    show: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeOut },
                    },
                  }}
                >
                  <motion.a
                    href={`tel:${hy.contact.phoneTel.replace(/\s/g, "")}`}
                    className="contact-channel-card group flex min-h-[4.5rem] items-center gap-4 rounded-2xl border border-ink/[0.09] glass-card px-4 py-3 text-left sm:min-h-0 sm:flex-col sm:items-center sm:justify-center sm:gap-3 sm:px-3 sm:py-6 sm:text-center"
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -3, boxShadow: "0 12px 40px -12px rgba(32, 42, 58, 0.12)" }
                    }
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  >
                    <span
                      className="contact-channel-icon flex size-12 shrink-0 items-center justify-center rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/15 to-sage/10 text-gold-bright transition duration-300 motion-safe:animate-float-slow motion-safe:group-hover:scale-110 motion-reduce:animate-none sm:size-14"
                      style={{ animationDelay: "0.7s" }}
                    >
                      <PhoneIcon className="size-6 sm:size-7" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[10px] font-extrabold uppercase tracking-widest text-gold/85">
                        {hy.contact.labelPhone}
                      </span>
                      <span className="mt-0.5 block text-sm font-bold text-ink/95 sm:mt-1">
                        {hy.contact.phoneDisplay}
                      </span>
                    </span>
                  </motion.a>
                </motion.li>
              </motion.ul>
            </div>
            {/* <a
              href="#waitlist"
              className="mt-6 inline-flex min-h-12 w-full min-w-0 max-w-sm items-center justify-center rounded-2xl border border-gold/30 glass-panel px-6 py-2.5 text-sm font-extrabold text-ink/95 transition hover:border-gold/50 min-[400px]:w-auto min-[400px]:max-w-none min-[400px]:px-8"
            >
              {hy.cta.button}
            </a> */}
            {/* <p className="mt-6 text-sm text-ink-soft/90">{hy.cta.storesLine}</p>
            <div className="mt-3 flex w-full min-w-0 flex-wrap justify-center">
              <ComingSoonStores />
            </div> */}
          </div>
        </section>
      </main>

      <motion.footer
        className="border-t border-ink/[0.09] glass-panel py-8 sm:py-10"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-5 text-center min-[500px]:flex-row min-[500px]:items-start min-[500px]:justify-between min-[500px]:text-left ${pageGutter}`}
        >
          <div className="flex min-w-0 max-w-md flex-col items-center gap-3 min-[500px]:flex-row min-[500px]:items-center min-[500px]:text-left">
            <BrandLogo size={48} />
            <div className="min-w-0">
              <p className="font-display text-base font-extrabold text-ink">
                {siteName}
              </p>
              <p className="text-xs leading-snug text-ink-soft/90">
                {hy.site.tagline}
              </p>
            </div>
          </div>
          <p className="max-w-prose text-xs leading-relaxed text-ink-soft/80 min-[500px]:max-w-sm min-[500px]:text-left">
            {formatHy(hy.footer.legal, {
              year: new Date().getFullYear(),
              siteName: hy.site.name,
            })}
          </p>
        </div>
      </motion.footer>
    </div>
  );
}
