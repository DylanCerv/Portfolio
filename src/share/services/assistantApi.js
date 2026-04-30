import { getSystemPrompt } from "./assistantContext.js";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
const MODEL = import.meta.env.VITE_OPENROUTER_MODEL || "openrouter/free";
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

export async function fetchAIResponse(messages) {
  if (!API_KEY) throw new Error("No API key configured");

  const res = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
      "HTTP-Referer": window.location.origin,
      "X-Title": "Dylan España Portfolio",
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [
        { role: "system", content: getSystemPrompt() },
        ...messages.slice(-10),
      ],
      max_tokens: 300,
      temperature: 0.3,
    }),
  });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    console.error("[Assistant] OpenRouter error:", res.status, errorBody);
    throw new Error(`OpenRouter ${res.status}`);
  }

  const data = await res.json();
  const content = data.choices?.[0]?.message?.content;

  if (!content) {
    console.error("[Assistant] Empty response:", JSON.stringify(data));
    throw new Error("Empty response");
  }

  return content;
}
