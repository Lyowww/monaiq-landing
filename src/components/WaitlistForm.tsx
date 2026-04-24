"use client";

import { useState, type FormEvent } from "react";
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
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        ok?: boolean;
      };
      if (!res.ok) {
        setStatus("error");
        setMessage(
          data.error ||
            "Խնդրում ենք կրկին փորձել կամ ստուգել էլ. փոստի ձևաչափը։"
        );
        return;
      }
      setStatus("success");
      setMessage(
        "Շնորհակալություն։ Ձեզ կտեղեկացնենք, երբ անվճար փորձնական հասանելի լինի։"
      );
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Կապի խնդիր։ Կրկին փորձեք ավելի ուշ։");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full min-w-0 overflow-hidden rounded-2xl border border-sage/50 bg-paper/90 p-4 shadow-card min-[400px]:rounded-[1.35rem] sm:p-6 md:p-8"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-gold/10 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-sage/25 blur-2xl"
        aria-hidden
      />
      <div className="relative">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
          <BrandLogo
            variant="app"
            size={48}
            className="sm:mt-0.5 sm:scale-105"
          />
          <h2
            className="font-display w-full min-w-0 text-center text-[clamp(1.25rem,4.5vw,1.9rem)] font-bold leading-tight tracking-tight text-ink sm:max-w-none sm:text-left sm:text-2xl md:text-3xl"
            id="waitlist-title"
          >
            Ստանալ{" "}
            <span className="text-gold-bright">անվճար փորձնական</span> հավելվածը
          </h2>
        </div>
        <p className="mt-3 max-w-lg text-left text-sm leading-relaxed text-muted min-[400px]:mt-4 sm:text-base">
          Թողեք ձեր էլ. փոստը՝ ավելի վաղ հասնելու թեստային տարբերակին, երբ
          MonAIQ-ը հասանելի դառնա App Store-ում եւ Google Play-ում:
        </p>
        <div className="mt-5 flex w-full min-w-0 flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-stretch sm:gap-3">
          <label className="sr-only" htmlFor="waitlist-email">
            Էլ. փոստ
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
            className="min-h-[48px] w-full min-w-0 flex-1 rounded-2xl border border-sage/60 bg-white/80 px-3.5 text-base text-ink shadow-inner outline-none ring-gold/30 transition placeholder:text-muted/80 focus:border-gold/80 focus:ring-2 min-[400px]:px-4"
            placeholder="ձեր@փոստ.am"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="min-h-[48px] w-full min-w-0 shrink-0 rounded-2xl bg-gold px-5 text-base font-semibold text-on-accent shadow-gold transition active:scale-[0.99] hover:brightness-105 disabled:cursor-wait disabled:opacity-80 sm:w-auto sm:min-w-[7.5rem] sm:px-6 sm:text-sm"
          >
            {status === "loading" ? "Ուղարկում…" : "Գրանցվել"}
          </button>
        </div>
        {message ? (
          <p
            className={`mt-3 text-sm font-medium ${
              status === "success" ? "text-ink-soft" : "text-red-800"
            }`}
            role="status"
          >
            {message}
          </p>
        ) : null}
        <p className="mt-3 text-xs leading-relaxed text-muted">
          «Գրանցվել»-ով դուք հաստատում եք, որ ցանկանում եք ստանալ MonAIQ-ի մասին
          նորություններ: Մենք չենք տարածում ձեր էլ. փոստը երրորդ անձանց:
        </p>
      </div>
    </form>
  );
}
