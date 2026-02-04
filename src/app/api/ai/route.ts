import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { messages } = await request.json();

  const last = [...messages].reverse().find((m) => m.role === "user")?.content;

  const reply =
    "This is a demo AI response. In production, this endpoint would call a real AI model. " +
    (last ? `You asked: "${last}".` : "");

  return NextResponse.json({
    reply: { role: "assistant", content: reply }
  });
}
