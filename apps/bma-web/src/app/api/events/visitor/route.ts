import { NextRequest, NextResponse } from "next/server";

interface VisitorEvent {
  page: string;
  referrer?: string;
  userAgent?: string;
  timestamp?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: VisitorEvent = await req.json();
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // Clay visitor tracking (env-gated)
    const clayKey = process.env.CLAY_API_KEY;
    if (clayKey) {
      await fetch("https://api.clay.com/v1/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clayKey}`,
        },
        body: JSON.stringify({
          event: "page_visit",
          properties: {
            page: body.page,
            referrer: body.referrer,
            ip,
            timestamp: body.timestamp || new Date().toISOString(),
          },
        }),
      }).catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
