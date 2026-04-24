import { NextResponse } from "next/server";
import { z } from "zod";
import { siteUrl } from "@/lib/site";

const bodySchema = z.object({
  email: z.string().email(),
});

function webhookUserText(
  body: unknown,
  kind: "success" | "error"
): string | undefined {
  if (!body || typeof body !== "object") return undefined;
  const o = body as Record<string, unknown>;
  if (kind === "success") {
    const m = o.message;
    return typeof m === "string" && m.trim() ? m.trim() : undefined;
  }
  const err = o.error;
  if (typeof err === "string" && err.trim()) return err.trim();
  const msg = o.message;
  return typeof msg === "string" && msg.trim() ? msg.trim() : undefined;
}

async function readWebhookJson(res: Response): Promise<unknown> {
  const text = await res.text();
  if (!text.trim()) return undefined;
  try {
    return JSON.parse(text) as unknown;
  } catch {
    return undefined;
  }
}

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
          siteUrl,
          at: new Date().toISOString(),
        }),
      });
      const webhookBody = await readWebhookJson(res);
      if (!res.ok) {
        const fromBackend = webhookUserText(webhookBody, "error");
        console.error("[waitlist] webhook failed", res.status);
        return NextResponse.json(
          {
            error:
              fromBackend ??
              "Ժամանակավորորեն հնարավոր չէ պահել։ Կրկին փորձեք ավելի ուշ։",
          },
          { status: res.status >= 400 && res.status < 600 ? res.status : 502 }
        );
      }
      const message = webhookUserText(webhookBody, "success");
      return NextResponse.json(
        message ? { ok: true as const, message } : { ok: true as const }
      );
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
