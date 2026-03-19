import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
  type: "enterprise" | "togari" | "coaching";
  stage?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    if (!body.name || !body.email || !body.company || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Slack notification (env-gated)
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      const slackMessage = {
        text: `New BMA Website Inquiry`,
        blocks: [
          {
            type: "header",
            text: { type: "plain_text", text: `New ${body.type.toUpperCase()} Inquiry` },
          },
          {
            type: "section",
            fields: [
              { type: "mrkdwn", text: `*Name:*\n${body.name}` },
              { type: "mrkdwn", text: `*Email:*\n${body.email}` },
              { type: "mrkdwn", text: `*Company:*\n${body.company}` },
              { type: "mrkdwn", text: `*Role:*\n${body.role}` },
            ],
          },
          {
            type: "section",
            text: { type: "mrkdwn", text: `*Message:*\n${body.message}` },
          },
        ],
      };
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(slackMessage),
      }).catch(() => {}); // Non-blocking
    }

    // Clay visitor event (env-gated)
    const clayKey = process.env.CLAY_API_KEY;
    if (clayKey) {
      await fetch("https://api.clay.com/v1/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clayKey}`,
        },
        body: JSON.stringify({
          event: "contact_form_submission",
          properties: {
            name: body.name,
            email: body.email,
            company: body.company,
            role: body.role,
            type: body.type,
            timestamp: new Date().toISOString(),
          },
        }),
      }).catch(() => {}); // Non-blocking
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
