"use client";

import { useState, type FormEvent } from "react";
import { formatHy, hy } from "@/messages/hy";
import { BrandLogo } from "./BrandLogo";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage("");
    setStatus("loading");
    try {
      const res = await fetch("https://monaiq-backend.vercel.app/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.error || hy.waitlist.errorGeneric
        );
        return;
      }
      setStatus("success");
      setMessage(
        (typeof data.message === "string" && data.message.trim()
          ? data.message
          : null) ?? hy.waitlist.successDefault
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage(hy.waitlist.errorNetwork);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass-card relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-gold/20 p-5 shadow-lift min-[400px]:rounded-[1.75rem] sm:p-7 md:p-8"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-gold/10 blur-3xl motion-safe:opacity-100 motion-reduce:opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-12 -left-8 size-48 rounded-full bg-sage/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,transparent_25%,rgba(255,255,255,0.45)_50%,transparent_75%)] bg-[length:200%_100%] motion-safe:animate-shimmer motion-reduce:animate-none"
        aria-hidden
      />
      <div className="relative">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div className="sm:mt-0.5">
            <BrandLogo
              variant="app"
              size={52}
              className="ring-2 ring-gold/30 ring-offset-2 ring-offset-paper motion-safe:transition-transform motion-safe:duration-300 sm:scale-105 sm:hover:scale-105"
            />
          </div>
          <h2
            className="font-display w-full min-w-0 text-center text-[clamp(1.25rem,4.2vw,1.9rem)] font-extrabold leading-tight tracking-display-tight text-ink/95 sm:max-w-none sm:text-left sm:text-2xl md:text-3xl"
            id="waitlist-title"
          >
            {hy.waitlist.title}
            <span className="text-gold-bright/95">
              {hy.waitlist.titleHighlight}
            </span>
            {hy.waitlist.titleEnd}
          </h2>
        </div>
        <p className="mt-3 max-w-2xl text-left text-sm leading-relaxed text-ink-soft/90 min-[400px]:mt-4 sm:text-base">
          {formatHy(hy.waitlist.description, { siteName: hy.site.name })}
        </p>
        <div className="mt-5 flex w-full min-w-0 flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-stretch sm:gap-3">
          <label className="sr-only" htmlFor="waitlist-email">
            {hy.waitlist.labelEmail}
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            enterKeyHint="send"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error" || status === "success") {
                setStatus("idle");
                setMessage("");
              }
            }}
            className="min-h-[50px] w-full min-w-0 flex-1 rounded-2xl border border-ink/10 bg-paper-elevated/95 px-3.5 text-base text-ink/95 shadow-[inset_0_1px_0_rgba(0,0,0,0.04)] outline-none ring-2 ring-transparent transition placeholder:text-ink-soft/45 focus:border-gold/45 focus:ring-amber-200/50 min-[400px]:px-4"
            placeholder={hy.waitlist.placeholderEmail}
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative min-h-[50px] w-full min-w-0 shrink-0 overflow-hidden rounded-2xl border border-gold/35 bg-gradient-to-b from-gold/95 to-gold/80 px-5 text-base font-extrabold text-on-accent shadow-gold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold/50 active:scale-[0.99] disabled:cursor-wait disabled:opacity-80 motion-safe:transition motion-safe:duration-200 sm:w-auto sm:min-w-[7.5rem] sm:px-6 sm:text-sm"
          >
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent transition duration-500 group-hover:translate-x-full motion-reduce:transition-none" />
            <span className="relative">
              {status === "loading" ? hy.waitlist.submitting : hy.waitlist.submit}
            </span>
          </button>
        </div>
        {message ? (
          <p
            className={`mt-3 text-sm font-medium ${
              status === "success" ? "text-emerald-800" : "text-red-600"
            }`}
            role="status"
          >
            {message}
          </p>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-ink-soft/70">
          {formatHy(hy.waitlist.disclaimer, { siteName: hy.site.name })}
        </p>
      </div>
    </form>
  );
}
