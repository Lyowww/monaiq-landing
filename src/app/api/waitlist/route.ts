import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Անհրաժեշտ է JSON մարմին։" },
      { status: 400 }
    );
  }

  const parsed = bodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Խնդրում ենք մուտքագրել գործող էլ. փոստի հասցե։" },
      { status: 400 }
    );
  }

  const { email } = parsed.data;
  const webhook = process.env.WAITLIST_WEBHOOK_URL;

  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "monaiq-landing",
          at: new Date().toISOString(),
        }),
      });
      if (!res.ok) {
        console.error("[waitlist] webhook failed", res.status);
        return NextResponse.json(
          { error: "Ժամանակավորորեն հնարավոր չէ պահել։ Կրկին փորձեք ավելի ուշ։" },
          { status: 502 }
        );
      }
    } catch (e) {
      console.error("[waitlist] webhook", e);
      return NextResponse.json(
        { error: "Կապի խնդիր։ Կրկին փորձեք ավելի ուշ։" },
        { status: 502 }
      );
    }
  } else {
    if (process.env.NODE_ENV === "development") {
      console.log("[waitlist] (no WAITLIST_WEBHOOK_URL):", email);
    }
  }

  return NextResponse.json({ ok: true as const });
}
