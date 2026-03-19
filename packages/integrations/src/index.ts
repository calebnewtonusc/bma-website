// BMA Integrations Package
// All integrations are env-gated stubs — safe to import without env vars set

export async function trackVisitor(payload: {
  page: string;
  referrer?: string;
  timestamp?: string;
}): Promise<void> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return;
  await fetch(`${siteUrl}/api/events/visitor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {});
}

export async function notifySlack(message: string): Promise<void> {
  const url = process.env.SLACK_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  }).catch(() => {});
}

export async function pushToClay(event: string, properties: Record<string, unknown>): Promise<void> {
  const key = process.env.CLAY_API_KEY;
  if (!key) return;
  await fetch("https://api.clay.com/v1/events", {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
    body: JSON.stringify({ event, properties }),
  }).catch(() => {});
}
