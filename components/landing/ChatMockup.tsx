"use client";

import { cn } from "@/lib/utils";

const messages = [
  { role: "user" as const, text: "Why am I slicing?" },
  {
    role: "coach" as const,
    text: "Often it’s an open face at impact combined with an out-to-in path. Try one alignment stick parallel to your target line and feel the face closing through the ball.",
  },
  { role: "user" as const, text: "What should I practice today?" },
  {
    role: "coach" as const,
    text: "15 minutes of half-swings focusing on tempo, then 10 slow drivers with a smooth transition. I’ll track your streak if you upload a swing after.",
  },
  { role: "user" as const, text: "How do I improve consistency?" },
  {
    role: "coach" as const,
    text: "Small repeatable routine: same waggle, same breath, same trigger. Upload 3 swings this week and we’ll chart your dispersion.",
  },
];

export function ChatMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col bg-[#0a0c0b] pt-10 pb-3",
        className
      )}
    >
      <div className="border-b border-white/[0.06] px-3 pb-3 sm:px-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-brand">
          AI Coach
        </p>
        <p className="text-xs font-semibold text-white sm:text-sm">TeeUp</p>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-2.5 pt-3 sm:px-3 sm:pt-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={cn(
              "max-w-[92%] break-words rounded-2xl px-3 py-2 text-[11px] leading-relaxed",
              m.role === "user"
                ? "ml-auto bg-white/[0.08] text-white/90"
                : "mr-auto border border-brand/25 bg-brand/[0.12] text-white/95"
            )}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="mx-2 mt-2 flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 sm:mx-3">
        <span className="text-[10px] text-white/35">Message your coach…</span>
      </div>
    </div>
  );
}
