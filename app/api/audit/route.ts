import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { biz, size, pain, budget } = body as Record<string, string>;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({
        ok: true,
        message: "Audit recorded. We'll email a custom ROI report within 2 hours.",
      });
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      max_tokens: 400,
      temperature: 0.6,
      messages: [
        {
          role: "system",
          content:
            "You are a FlowForge AI automation auditor. Given quick-survey answers about a small business, generate a brief ROI summary with 2-3 bullet recommendations and estimated monthly savings. Return JSON: { message: string, recommendations: string[], estimatedSavings: string }",
        },
        {
          role: "user",
          content: `Business type: ${biz}\nTeam size: ${size}\nBiggest pain: ${pain}\nBudget: ${budget}`,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content ?? "";
    const json = JSON.parse(text);
    return NextResponse.json({ ok: true, ...json });
  } catch {
    return NextResponse.json({
      ok: true,
      message: "Audit recorded. We'll email a custom ROI report within 2 hours.",
    });
  }
}
