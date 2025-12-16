import OpenAI from "openai";
import { NextResponse } from "next/server";
import { aiKnowledge } from "@/data/aiKnowledge";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

function getLocalAnswer(message: string) {
  const q = message.toLowerCase();

  if (q.includes("skill")) return aiKnowledge.skills;
  if (q.includes("project")) return aiKnowledge.projects;
  if (q.includes("experience")) return aiKnowledge.experience;
  if (q.includes("resume") || q.includes("cv")) return aiKnowledge.resume;
  if (q.includes("available") || q.includes("full time")) return aiKnowledge.availability;

  return null;
}

export async function POST(req: Request) {
  const { message } = await req.json();

  // 1️⃣ Try local answer first (FREE)
  const localAnswer = getLocalAnswer(message);
  if (localAnswer) {
    return NextResponse.json({ reply: localAnswer });
  }

  // 2️⃣ Only then call OpenAI (RARE)
  try {
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Kapil Yadav’s portfolio assistant." },
        { role: "user", content: message }
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0].message.content,
    });
  } catch {
    return NextResponse.json(
      { reply: "Sorry, I’m currently unavailable." },
      { status: 500 }
    );
  }
}
