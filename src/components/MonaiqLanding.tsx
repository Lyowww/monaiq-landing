import Link from "next/link";
import { siteName, siteTagline } from "@/lib/site";
import { BrandLogo } from "./BrandLogo";
import { WaitlistForm } from "./WaitlistForm";

const nav = [
  { href: "#features", label: "Հնարքներ" },
  { href: "#ai", label: "AI-օգնական" },
  { href: "#waitlist", label: "Գրանցում" },
  { href: "#pillars", label: "Ինչու MonAIQ" },
  { href: "#faq", label: "ՀՏՀ" },
];

const featureCards = [
  {
    title: "Գլխավոր էկրան",
    desc: "Ընդհանուր մնացորդ, ամսվա մուտքեր ու ելքեր, «օրվա այրման» համարը, կարճ ամփոփում ձեր գործունեությունից.",
    tag: "Գլխավոր",
  },
  {
    title: "Արագ մուտքագրում",
    desc: "Կատեգորիաներ, քարտ կամ կանխիկ, կարճ տեքստային հրամաններ, ցանկության դեպքում ձայնային ուղի.",
    tag: "Արագ",
  },
  {
    title: "Վիճակագրություն",
    desc: "Ծախսի հոսք, 7/30/90 օր, մուտքի ու ելքի համեմատություն, ձեր նախշերին արձագանքող խորհուրդներ.",
    tag: "Պարզություն",
  },
  {
    title: "Դրամապանակ",
    desc: "Պարտքեր, հաշիվներ, կանխատեսելի վճարներ, արտարժույթների նկատմամբ դրամային հղումներ.",
    tag: "Վճարներ",
  },
  {
    title: "Ֆինանսական պլաններ",
    desc: "Ամսական շեմեր, կատեգորիայի սահմաններ, խնայողության նպատակներ, որոնք AI-ն հաշվի է առնում պատասխաններում.",
    tag: "Պլան",
  },
  {
    title: "Երկու լեզու",
    desc: "Հայերեն և անգլերեն մեկ հավելվածում՝ հարմար հայաստանյան առօրյա ծախսին.",
    tag: "Լոկալ",
  },
];

const pillars = [
  {
    title: "Հայաստան և դրամ նախ",
    body: "Դրամը հիմնական արժույթն է, մյուս արժույթներն էլ՝ դրամային համարժեքով.",
  },
  {
    title: "Ձեր տվյալները, ձեր խորհրդատուն",
    body: "Պատասխանները հիմնվում են այն ամենի վրա, ինչ ինքն եք գրանցել, ոչ թե համացանցի ընդհանուր խորհուրդների վրա.",
  },
  {
    title: "Տեսեք գանձի շարժը",
    body: "Մուտք, ելք, այրման արագություն, առաջիկա վճարումներ՝ մեկ տեսքում.",
  },
  {
    title: "Ոչ բանկ, ոչ ներդնումային խորհուրդ",
    body: "Ոչ ավանդ, ոչ վարկային որոշում. Ընդհանուր ներդրումային «տաք թեմաներ» այստեղ չեն.",
  },
];

const faqItems = [
  {
    q: "MonAIQ-ը բանկ է՞",
    a: "Ոչ. Դա անձնական ֆինանսների գործիք է՝ ձեր գանձը հաշվարկելու և հասկանալու համար, ոչ թե բանկային ապրանք.",
  },
  {
    q: "Ինչո՞վ է օգնում AI-ն",
    a: "Բյուջե, վճարունակություն, նախորդ ծախսեր, ինչն է ավելի շուտ վճարել — այս շրջանակում, ոչ թե ընդհանուր ներդրումային խորհուրդներ.",
  },
  {
    q: "Ո՞ր արժույթն է հիմնական",
    a: "Դրամը (AMD). Այլ արժույթներով գումարներ կարելի է մուտքագրել՝ դրամային ցուցադրական համարժեքով.",
  },
  {
    q: "Ի՞նչ է MonAIQ Plus-ը",
    a: "Վճարովի մակարդակ՝ ավելի խորը վիճակագրություն, ավելի շատ AI հնարավորություն և այլ գործառույթներ (փորձեք հավելվածում՝ ձեր շուկայի համար).",
  },
];

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

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-block size-2.5 shrink-0 rounded-full bg-gold shadow-[0_0_8px_rgba(212,175,55,0.6)] ${className}`}
      aria-hidden
    />
  );
}

function ComingSoonStores() {
  return (
    <div className="flex w-full max-w-md flex-col gap-2.5 min-[400px]:flex-row min-[400px]:items-stretch min-[400px]:gap-3 sm:max-w-none sm:flex-row">
      <div
        className="inline-flex h-12 min-h-[48px] w-full min-w-0 cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-sage/50 bg-paper-elevated/80 px-4 py-0 text-sm font-semibold text-muted opacity-75 shadow-lift min-[400px]:flex-1 sm:h-auto sm:px-6 sm:py-3.5"
        role="img"
        aria-label="App Store, շուտով"
      >
        <AppleIcon className="size-5 shrink-0 text-ink" />
        <span className="min-w-0 break-words text-center sm:whitespace-nowrap">
          App Store
        </span>
        <span className="shrink-0 rounded-full border border-sage/60 bg-sage/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
          Շուտով
        </span>
      </div>
      <div
        className="inline-flex h-12 min-h-[48px] w-full min-w-0 cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-sage/50 bg-paper-elevated/80 px-4 py-0 text-sm font-semibold text-muted opacity-75 shadow-lift min-[400px]:flex-1 sm:h-auto sm:px-6 sm:py-3.5"
        role="img"
        aria-label="Google Play, շուտով"
      >
        <GooglePlayIcon className="size-5 shrink-0 text-ink" />
        <span className="min-w-0 break-words text-center sm:whitespace-nowrap">
          Google Play
        </span>
        <span className="shrink-0 rounded-full border border-sage/60 bg-sage/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-ink-soft">
          Շուտով
        </span>
      </div>
    </div>
  );
}

const pageGutter =
  "px-3 min-[400px]:px-4 sm:px-6";

export function MonaiqLanding() {
  return (
    <div className="relative min-w-0">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-hero bg-grid-sage opacity-90 [background-size:32px_32px] sm:[background-size:48px_48px]"
        aria-hidden
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-[max(1rem,env(safe-area-inset-left))] focus:top-[max(0.5rem,env(safe-area-inset-top))] focus:z-[100] focus:rounded-xl focus:border focus:border-sage/60 focus:bg-paper focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-ink focus:shadow-lift"
      >
        Անցնել հիմնական բովանդակության
      </a>
      <header className="sticky top-0 z-50 border-b border-sage/30 bg-paper/90 pt-[max(0.25rem,env(safe-area-inset-top))] backdrop-blur-xl">
        <div
          className={`mx-auto flex min-h-[52px] max-w-6xl items-center justify-between gap-2 sm:min-h-0 sm:gap-3 ${pageGutter} py-2.5 sm:py-3`}
        >
          <Link
            href="/"
            className="group flex min-w-0 max-w-[65%] items-center gap-2 sm:max-w-none sm:gap-2.5"
            aria-label={`${siteName} — գլխավոր`}
          >
            <span className="shrink-0 scale-[0.9] sm:scale-100">
              <BrandLogo size={40} priority />
            </span>
            <div className="min-w-0 flex flex-col leading-tight">
              <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
                {siteName}
              </span>
              <span className="line-clamp-2 sm:truncate text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-gold-bright min-[400px]:line-clamp-1 min-[400px]:text-[10px] sm:tracking-[0.18em]">
                {siteTagline}
              </span>
            </div>
          </Link>
          <nav
            className="hidden items-center gap-5 text-sm font-medium text-ink-soft lg:flex"
            aria-label="Հիմնական նավիգացիա"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#waitlist"
            className="flex h-10 min-w-[4.5rem] shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold px-3 text-xs font-bold text-on-accent shadow-gold sm:h-auto sm:min-w-0 sm:px-4 sm:py-2 sm:text-sm"
          >
            Գրանցվել
          </a>
        </div>
        <div
          className={`border-t border-sage/20 bg-paper/95 py-0 lg:hidden ${pageGutter}`}
        >
          <nav
            className="scrollbar-none -mx-0 flex snap-x snap-mandatory gap-0 overflow-x-auto overflow-y-hidden py-2.5 sm:justify-center sm:overflow-visible sm:py-2"
            aria-label="Էջի բաժիններ"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="snap-center shrink-0 rounded-full py-2.5 pl-3 pr-2 text-center text-xs font-medium leading-tight text-ink-soft first:pl-0 last:pr-0 active:text-ink sm:shrink sm:px-1 sm:py-0 sm:first:pl-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main">
        <section
          className="relative overflow-x-clip border-b border-sage/25 py-12 sm:py-20 md:py-24"
          aria-labelledby="hero-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <div className="mb-5 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center">
              <BrandLogo variant="wave" size={36} />
              <p className="inline-flex max-w-full items-start gap-2 rounded-full border border-sage/50 bg-paper-elevated px-3 py-2 text-left text-[11px] font-semibold leading-snug text-ink min-[420px]:items-center min-[420px]:py-1.5 sm:text-xs">
                <SparkIcon className="mt-0.5 min-[420px]:mt-0" />
                <span className="min-w-0">
                  Շուտով · Հայաստան, դրամ, iOS եւ Android
                </span>
              </p>
            </div>
            <h1
              id="hero-heading"
              className="font-display text-balance text-[clamp(1.45rem,5.5vw,3.4rem)] font-bold leading-[1.1] tracking-tight text-ink sm:leading-[1.12] md:text-6xl"
            >
              <span className="text-gold-bright">Ձեր ֆինանսական ընկերը</span>
              <span className="text-ink"> — </span>
              <span className="bg-gradient-to-r from-navy to-ink bg-clip-text text-transparent">
                խելացի ֆինանսներ
              </span>{" "}
              ձեր գրպանի մեջ
            </h1>
            <p className="mt-5 max-w-2xl text-balance text-[0.9375rem] leading-[1.65] text-ink-soft sm:mt-6 sm:text-lg sm:leading-relaxed">
              Գրանցեք եկամուտներն ու ծախսերը, տեսեք հաշիվն ու միտումը, կառավարեք
              հաշիվ-ապրանքագրերն ու պարտքերը, հարցրեք{" "}
              <strong className="font-semibold text-ink">
                ձեր տվյալներին հիմնվող AI-ին
              </strong>
              . Այստեղ ոչ թե ընդհանուր ներդրումային խորհուրդ, այլ ձեր գանձի
              հաշվարկ. Անվճար փորձնական հերթագիրը՝ ներքևում.
            </p>
            <div className="mt-8 flex max-w-2xl flex-col gap-4 sm:mt-10">
              <ComingSoonStores />
            </div>
            <div
              id="waitlist"
              className="mt-10 w-full max-w-2xl border-t border-sage/30 pt-8 sm:mt-14 sm:pt-10"
            >
              <WaitlistForm />
            </div>
          </div>
          <div
            className="pointer-events-none absolute -right-16 top-4 h-56 w-56 rounded-full bg-gold/15 blur-3xl max-md:opacity-40 sm:-right-24 sm:top-0 sm:h-80 sm:w-80 sm:opacity-100"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-12 bottom-0 h-48 w-48 rounded-full bg-sage/20 blur-3xl max-md:opacity-50 sm:-left-20 sm:h-64 sm:w-64"
            aria-hidden
          />
        </section>

        <section
          id="features"
          className="border-b border-sage/20 bg-paper-elevated/30 py-12 sm:py-16 md:py-20"
          aria-labelledby="features-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="features-heading"
              className="font-display text-[clamp(1.35rem,4vw,2.25rem)] font-bold text-ink sm:text-3xl md:text-4xl"
            >
              Մի հոսք, բոլոր գործիքներ
            </h2>
            <p className="mt-3 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-soft sm:text-base">
              Նույն տրամաբանությամբ, ինչ հավելվածում. պարզ, հանգիստ, գործնական.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 sm:mt-10 sm:gap-4 lg:grid-cols-3">
              {featureCards.map((f) => (
                <li
                  key={f.title}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-sage/40 bg-paper-elevated/90 p-4 shadow-lift transition hover:border-gold/40 sm:p-6"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-bright/95">
                    {f.tag}
                  </span>
                  <h3 className="mt-1.5 font-display text-base font-bold text-ink sm:mt-2 sm:text-lg md:text-xl">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-soft sm:mt-2 sm:text-sm">
                    {f.desc}
                  </p>
                  <div
                    className="absolute -right-8 -top-8 size-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition group-hover:opacity-100"
                    aria-hidden
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="ai"
          className="relative overflow-x-clip border-b border-sage/20 py-12 sm:py-16 md:py-20"
          aria-labelledby="ai-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <div className="grid min-w-0 items-center gap-8 md:gap-10 lg:grid-cols-2">
              <div className="min-w-0">
                <h2
                  id="ai-heading"
                  className="font-display text-[clamp(1.3rem,4vw,2.2rem)] font-bold text-ink sm:text-3xl md:text-4xl"
                >
                  AI, որը կարդում է{" "}
                  <span className="text-gold-bright">ձեր գրանցումները</span>, ոչ
                  թե համացանցը
                </h2>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft sm:mt-4 sm:text-base">
                  Բյուջե, վճարունակություն, նախորդ ծախսեր, ինչն առաջնահերթ է
                  վճարել. Հարցրեք սովոր մարդկային ձեւով.
                </p>
                <ul className="mt-5 space-y-2 text-[0.9375rem] text-ink sm:mt-6 sm:space-y-2.5 sm:text-sm">
                  {[
                    "Կարողա՞մ հիմա կատարել այդ գնումը.",
                    "Կհասնի՞ մնացորդս առաջիկա հաշիվ-ապրանքագիրներին.",
                    "Որտե՞ղ է գնացել գումարի մեծ մասը վերջին 30 օրում.",
                    "Ինչպե՞ս է բաժանվում ծախսը՝ քարտի ու կանխիկի միջեւ.",
                  ].map((q) => (
                    <li
                      key={q}
                      className="flex gap-2 rounded-2xl border border-sage/40 bg-paper-elevated/60 px-3 py-2.5 leading-snug"
                    >
                      <span className="shrink-0 text-gold-bright" aria-hidden>
                        —
                      </span>
                      <span className="min-w-0">{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-w-0">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/15 via-sage/20 to-gold/10 blur-2xl" />
                <div
                  className="relative overflow-hidden rounded-2xl border border-sage/35 p-4 shadow-lift min-[400px]:rounded-3xl min-[400px]:p-5 sm:p-6"
                  style={{ background: "var(--card-well)" }}
                >
                  <div className="mb-2 flex min-h-0 items-center justify-between gap-2 text-xs text-slate-300 sm:mb-3">
                    <span>Օգնական</span>
                    <span className="rounded-full border border-sage/40 bg-sage/20 px-2 py-0.5 text-[10px] font-semibold text-paper">
                      Ձեր տվյալ
                    </span>
                  </div>
                  <div className="space-y-2.5 text-[0.875rem] leading-relaxed min-[400px]:space-y-3 min-[400px]:text-sm">
                    <div className="rounded-xl border border-sage/20 bg-ink/30 p-2.5 text-slate-200 min-[400px]:rounded-2xl min-[400px]:p-3">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 min-[400px]:text-[10px]">
                        Դուք
                      </span>
                      <p className="mt-1 min-w-0 break-words">
                        Կհասնի՞ հաշիվս վարձի ու կոմունալներին վճարելու՝ այս
                        շաբաթ.
                      </p>
                    </div>
                    <div
                      className="rounded-xl border p-2.5 text-slate-100 min-[400px]:rounded-2xl min-[400px]:p-3"
                      style={{
                        borderColor: "rgba(212, 175, 55, 0.35)",
                        background:
                          "linear-gradient(180deg, rgba(212, 175, 55, 0.12), transparent)",
                      }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider min-[400px]:text-[10px]"
                        style={{ color: "#D4AF37" }}
                      >
                        {siteName}
                      </span>
                      <p className="mt-1 min-w-0 break-words leading-relaxed">
                        Գրանցումներիդ հիման վրա՝ ահա, թե ինչպես է{" "}
                        <span className="font-semibold" style={{ color: "#E8C547" }}>
                          կազմակերպում վճարումները
                        </span>{" "}
                        ու ինչն է այս շաբաթ ավելի հրատապ.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="pillars"
          className="border-b border-sage/20 bg-paper-elevated/20 py-12 sm:py-16 md:py-20"
          aria-labelledby="pillars-heading"
        >
          <div className={`mx-auto max-w-6xl ${pageGutter}`}>
            <h2
              id="pillars-heading"
              className="font-display text-[clamp(1.3rem,4vw,2.2rem)] font-bold text-ink sm:text-3xl md:text-4xl"
            >
              Ինչու ընտրել {siteName}-ը
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 min-[500px]:grid-cols-2 min-[500px]:gap-4 sm:mt-8">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="min-w-0 rounded-2xl border border-sage/40 bg-paper-elevated/80 p-4 shadow-lift min-[500px]:p-6"
                >
                  <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-ink-soft sm:text-sm">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="py-12 sm:py-16 md:py-20"
          aria-labelledby="faq-heading"
        >
          <div className={`mx-auto w-full min-w-0 max-w-2xl ${pageGutter}`}>
            <h2
              id="faq-heading"
              className="font-display text-[clamp(1.3rem,4vw,2.2rem)] font-bold text-ink sm:text-3xl md:text-4xl"
            >
              Հաճախ տրված հարցեր
            </h2>
            <div className="mt-5 space-y-2 sm:mt-6">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group min-w-0 rounded-2xl border border-sage/40 bg-paper-elevated/50 p-1 open:border-gold/35"
                >
                  <summary className="flex min-h-[48px] cursor-pointer list-none items-center rounded-xl px-3 py-2 text-left text-[0.9rem] font-semibold text-ink [&::-webkit-details-marker]:hidden min-[400px]:px-4 min-[400px]:text-sm">
                    <span className="flex w-full min-w-0 items-start justify-between gap-3 pr-0.5">
                      <span className="min-w-0 break-words">{item.q}</span>
                      <span className="mt-0.5 shrink-0 text-lg leading-none text-gold-bright/90 transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-sage/30 px-3 py-2.5 text-[0.9rem] leading-relaxed text-ink-soft min-[400px]:px-4 min-[400px]:py-3 min-[400px]:text-sm">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="border-t border-sage/25 bg-gradient-to-b from-sage/10 to-paper py-12 sm:py-16 md:py-20"
          aria-labelledby="cta-heading"
        >
          <div
            className={`mx-auto w-full min-w-0 max-w-3xl text-center ${pageGutter}`}
          >
            <h2
              id="cta-heading"
              className="font-display text-[clamp(1.3rem,4vw,2.2rem)] font-bold text-ink sm:text-3xl md:text-4xl"
            >
              Ֆինանսները թող լինեն{" "}
              <span className="italic text-gold-bright/95">պարզ</span> իսկ, ոչ
              ծածուկ
            </h2>
            <p className="mt-3 text-[0.9375rem] text-ink-soft sm:text-base">
              {siteTagline} – վիճակագրությամբ, ֆինանսական պլաններով ու AI-ով, որը
              ձեզ ճանաչում է ձեր թվերով.
            </p>
            <a
              href="#waitlist"
              className="mt-5 inline-flex min-h-12 w-full min-w-0 max-w-sm items-center justify-center rounded-2xl border border-sage/50 bg-paper-elevated px-6 py-2.5 text-sm font-bold text-ink shadow-lift transition hover:border-gold/50 min-[400px]:w-auto min-[400px]:max-w-none min-[400px]:px-8"
            >
              Վերադառնալ գրանցման ձեւին
            </a>
            <p className="mt-6 text-sm text-ink-soft">Խանութներ, շուտ</p>
            <div className="mt-3 flex w-full min-w-0 flex-wrap justify-center">
              <ComingSoonStores />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sage/30 bg-paper-elevated/50 py-6 sm:py-8">
        <div
          className={`mx-auto flex max-w-6xl flex-col items-center gap-4 text-center min-[500px]:flex-row min-[500px]:items-start min-[500px]:justify-between min-[500px]:text-left ${pageGutter}`}
        >
          <div className="flex min-w-0 max-w-md flex-col items-center gap-2 min-[500px]:flex-row min-[500px]:items-center min-[500px]:text-left">
            <BrandLogo size={44} />
            <div className="min-w-0">
              <p className="font-display text-base font-bold text-ink">
                {siteName}
              </p>
              <p className="text-xs leading-snug text-ink-soft">
                Անձնական ֆինանս, ոչ ֆինանսական աշխոց, ոչ ավանդ
              </p>
            </div>
          </div>
          <p className="max-w-prose text-xs leading-relaxed text-ink-soft/90 min-[500px]:max-w-sm min-[500px]:text-left">
            © {new Date().getFullYear()} {siteName}. Տվյալները տեղեկատու են,
            ֆինանսական կամ իրավական խորհուրդ չեն հանդիսանում.
          </p>
        </div>
      </footer>
    </div>
  );
}
