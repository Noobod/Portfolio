// src/app/api/chat/route.ts
import OpenAI from "openai";
import { NextResponse } from "next/server";
import { aiKnowledge } from "@/data/aiKnowledge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// Simple keyword router (fast + cheap)
function getLocalAnswer(message: string) {
  const q = message.toLowerCase();

  // High intent (most common)
  if (q.includes("skill") || q.includes("stack") || q.includes("tech"))
    return aiKnowledge.skills;

  if (q.includes("project") || q.includes("portfolio") || q.includes("case study"))
    return aiKnowledge.projects;

  if (q.includes("experience") || q.includes("intern") || q.includes("work"))
    return aiKnowledge.experience;

  if (q.includes("available") || q.includes("availability") || q.includes("full time") || q.includes("work rights"))
    return aiKnowledge.availability;

  if (q.includes("education") || q.includes("degree") || q.includes("university") || q.includes("masters"))
    return aiKnowledge.education;

  if (q.includes("resume") || q.includes("cv"))
    return aiKnowledge.resume;

  if (q.includes("faq") || q.includes("questions"))
    return aiKnowledge.faqs;

  return null;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { reply: "Please type a question so I can help." },
        { status: 400 }
      );
    }

    // 1) Local answer first (FREE)
    const localAnswer = getLocalAnswer(message);
    if (localAnswer) {
      return NextResponse.json({ reply: localAnswer });
    }

    // 2) Fallback to AI (RARE)
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Kapil Yadav’s portfolio assistant.

Goals:
- Answer like a helpful recruiter-facing assistant: concise, confident, factual.
- Use only information provided in this chat context about Kapil.
- If something is unknown, say so and suggest checking the portfolio.
- Prefer bullet points for clarity.
- Avoid exaggeration.

Key facts:
- Based in Sydney, open to full-time.
- Built XFlyve logistics automation platform reducing manual workload ~70%.
- Softlabs internship: built "Community Voice" WordPress plugin + integrated FastBots chatbot.
- Stack: React/Next/TS/Node/Express/Mongo, WordPress plugins (PHP), Docker, GitHub Actions, CI/CD.
          `.trim(),
        },
        { role: "user", content: message },
      ],
      temperature: 0.3,
    });

    return NextResponse.json({
      reply: completion.choices?.[0]?.message?.content || "Sorry — I couldn’t generate a response.",
    });
  } catch (err) {
    return NextResponse.json(
      { reply: "Sorry, I’m currently unavailable. Please try again later." },
      { status: 500 }
    );
  }
}
