import { useCallback, useEffect, useRef, useState } from "react";
import { IoClose, IoChatbubbleEllipses } from "react-icons/io5";
import { useNewPortfolioTheme } from "../../context/NewPortfolioThemeContext";
import {
  ASSISTANT_GREETING,
  ASSISTANT_TOPIC_REPLIES,
  matchAssistantTopic,
} from "../../data/portfolioAssistantKnowledge";

import { fetchAIResponse } from "../../services/assistantApi";

function RichText({ text, className = "" }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <span className={className}>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-blue-600 dark:text-blue-400">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

const QUICK_PROMPTS = [
  { label: "Backend & APIs", topic: "backend" },
  { label: "Performance", topic: "performance" },
  { label: "Security", topic: "security" },
  { label: "Work history", topic: "work" },
  { label: "Availability", topic: "availability" },
];

function TypingIndicator({ className }) {
  return (
    <div className={className}>
      <span className="inline-flex items-center gap-1">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-40" />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-40"
          style={{ animationDelay: "150ms" }}
        />
        <span
          className="h-1.5 w-1.5 animate-pulse rounded-full bg-current opacity-40"
          style={{ animationDelay: "300ms" }}
        />
      </span>
    </div>
  );
}

export default function PortfolioAssistant() {
  const { effective } = useNewPortfolioTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { role: "bot", text: ASSISTANT_GREETING },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listEndRef = useRef(null);

  useEffect(() => {
    listEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  const addMessage = useCallback((role, text) => {
    setMessages((prev) => [...prev, { role, text }]);
  }, []);

  const getCuratedFallback = useCallback((userText) => {
    const topic = matchAssistantTopic(userText);
    return topic
      ? ASSISTANT_TOPIC_REPLIES[topic]
      : ASSISTANT_TOPIC_REPLIES.default;
  }, []);

  const handleSend = useCallback(
    async (userText) => {
      const trimmed = userText.trim();
      if (!trimmed || loading) return;

      addMessage("user", trimmed);
      setLoading(true);

      const apiMessages = messages
        .filter((m) => m.role !== "system")
        .slice(-8)
        .map((m) => ({
          role: m.role === "bot" ? "assistant" : "user",
          content: m.text,
        }));
      apiMessages.push({ role: "user", content: trimmed });

      try {
        const aiContent = await fetchAIResponse(apiMessages);
        addMessage("bot", aiContent);
      } catch (err) {
        console.error("[Assistant] Falling back to curated:", err.message);
        addMessage("bot", getCuratedFallback(trimmed));
      } finally {
        setLoading(false);
      }
    },
    [addMessage, getCuratedFallback, loading, messages],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!input.trim() || loading) return;
      handleSend(input);
      setInput("");
    },
    [handleSend, input, loading],
  );

  const isLight = effective === "light";

  const panelClass = isLight
    ? "border-zinc-200 bg-white text-zinc-800 shadow-xl shadow-zinc-300/30"
    : "border-white/[0.08] bg-[#111827] text-gray-300 shadow-2xl shadow-black/40";

  const borderClass = isLight ? "border-zinc-100" : "border-white/[0.06]";

  const bubbleUser = isLight
    ? "bg-blue-500 text-white"
    : "bg-blue-600 text-white";

  const bubbleBot = isLight
    ? "bg-zinc-50 text-zinc-700 border border-zinc-100"
    : "bg-white/[0.04] text-gray-300 border border-white/[0.06]";

  const inputClass = isLight
    ? "border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500"
    : "border-white/[0.08] bg-white/[0.04] text-gray-200 placeholder:text-slate-500 focus:border-blue-500";

  const promptClass = isLight
    ? "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
    : "border-white/[0.08] text-slate-400 hover:bg-white/[0.04]";

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {open && (
        <div
          className={`pointer-events-auto flex max-h-[min(480px,75vh)] w-[min(100vw-2rem,400px)] flex-col overflow-hidden rounded-xl border ${panelClass}`}
          role="dialog"
          aria-label="Portfolio assistant"
        >
          {/* Header */}
          <div className={`flex items-center justify-between border-b px-4 py-3 ${borderClass}`}>
            <div>
              <p className={`text-sm font-semibold ${isLight ? "text-zinc-900" : "text-gray-200"}`}>
                Ask Dylan
              </p>
              <p className={`text-xs ${isLight ? "text-zinc-400" : "text-slate-500"}`}>
                AI-powered — answers based on real portfolio data
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className={`rounded-lg p-2 transition-colors ${
                isLight
                  ? "text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700"
                  : "text-slate-500 hover:bg-white/[0.06] hover:text-gray-300"
              }`}
              aria-label="Close"
            >
              <IoClose size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-4 text-sm"
            aria-live="polite"
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[90%] rounded-xl px-3.5 py-2.5 text-[13px] leading-relaxed ${
                  msg.role === "user"
                    ? `ml-auto ${bubbleUser}`
                    : `mr-auto ${bubbleBot}`
                }`}
              >
                {msg.role === "bot" ? <RichText text={msg.text} /> : msg.text}
              </div>
            ))}

            {loading && (
              <TypingIndicator
                className={`mr-auto max-w-[90%] rounded-xl px-3.5 py-3 text-[13px] ${bubbleBot}`}
              />
            )}

            <div ref={listEndRef} />
          </div>

          {/* Quick prompts */}
          <div className={`flex flex-wrap gap-1.5 border-t px-4 py-2.5 ${borderClass}`}>
            {QUICK_PROMPTS.map(({ label, topic }) => (
              <button
                key={topic}
                type="button"
                disabled={loading}
                onClick={() => handleSend(label)}
                className={`rounded-full border px-2.5 py-1 text-[11px] font-medium transition-colors disabled:opacity-50 ${promptClass}`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className={`flex gap-2 border-t p-3 ${borderClass}`}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              placeholder="Ask about experience, stack..."
              className={`min-w-0 flex-1 rounded-lg border px-3 py-2 text-sm focus:outline-none disabled:opacity-50 ${inputClass}`}
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 ${
          isLight
            ? "bg-blue-500 text-white shadow-blue-500/20 hover:bg-blue-600"
            : "bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-500"
        }`}
        aria-expanded={open}
        aria-label={open ? "Close assistant" : "Ask about my experience"}
      >
        {open ? (
          <IoClose className="h-5 w-5" />
        ) : (
          <IoChatbubbleEllipses className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
