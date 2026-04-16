import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, businessType, painPoints } = body as {
      name: string;
      email: string;
      businessType: string;
      painPoints: string;
    };

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        ideas: defaultIdeas(businessType),
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 600,
      temperature: 0.7,
      messages: [
        {
          role: "system",
          content: `You are a senior automation strategist at FlowForge AI. Given a small business's profile, generate exactly 3 high-impact Zapier + GPT automation ideas. Each idea must have: title (short), description (1 sentence), savingsEstimate (monthly dollar savings string like "~$800/mo"). Return ONLY valid JSON: { "ideas": [...] }`,
        },
        {
          role: "user",
          content: `Business: ${businessType}\nContact: ${name} (${email})\nPain points: ${painPoints || "general admin overload"}`,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content ?? "";
    const json = JSON.parse(text);
    return NextResponse.json(json);
  } catch {
    return NextResponse.json({ ideas: defaultIdeas("general") });
  }
}

function defaultIdeas(biz: string) {
  return [
    {
      title: "Inbox Triage Agent",
      description: `AI reads & drafts replies to every inbound email for your ${biz} in your voice.`,
      savingsEstimate: "~$800/mo",
    },
    {
      title: "Lead Capture Flow",
      description: "Every form, DM, and missed call → CRM + instant reply.",
      savingsEstimate: "~$1,200/mo",
    },
    {
      title: "Review Response Bot",
      description: "Auto-reply to Google/Yelp reviews within 15 minutes.",
      savingsEstimate: "~$400/mo",
    },
  ];
}
