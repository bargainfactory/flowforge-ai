import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

const SYSTEM_PROMPT = `You are the FlowForge AI website assistant. Be concise, helpful, and friendly. You sell premium AI-powered automation (Zapier flows + custom GPT agents) to small businesses on monthly retainers ($500–$3,000/mo).

Key info:
- Services: lead capture, onboarding autopilot, inbox triage, custom agents
- Verticals: restaurants, e-com, consulting, local services
- 14-day build guarantee, month-to-month after 30-day onboarding
- Stack: Zapier, Make, HubSpot, Shopify, Stripe, Gmail, Calendly, Notion, Slack, OpenAI
- SOC 2 ready, GDPR compliant
- Direct to the quote form or Calendly if they seem interested.

Keep answers under 3 sentences unless asked for detail.`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages = body.messages as { role: "user" | "assistant"; content: string }[];

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        reply:
          "I'm currently in demo mode! In production I'd be powered by GPT-4o and can answer anything about FlowForge services, pricing, and integrations. Try the instant quote form below!",
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 250,
      temperature: 0.7,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.slice(-8),
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content ?? "Sorry, try again.",
    });
  } catch {
    return NextResponse.json({
      reply: "I'm having trouble connecting right now. Please try the quote form below or email hello@flowforge.ai.",
    });
  }
}
