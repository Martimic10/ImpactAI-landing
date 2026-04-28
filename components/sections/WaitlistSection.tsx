"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Loader2, CheckCircle2, Gift } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error" | "duplicate";

export default function WaitlistSection() {
  const ref = useScrollAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (res.status === 409) {
        setStatus("duplicate");
        return;
      }
      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <section ref={ref} className="py-20 bg-[#F9FAFB] scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Dark green gradient background */}
          <div className="absolute inset-0 gradient-green" />

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 px-6 sm:px-12 py-14 sm:py-16 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — copy */}
            <div className="flex-1 text-center lg:text-left">
              {/* Incentive badge */}
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/40 text-amber-300 rounded-full px-4 py-1.5 text-sm font-semibold mb-5">
                <Gift size={14} strokeWidth={2.5} />
                Waitlist Exclusive — $29 One-Time Instead of $59
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 text-balance">
                Fix Your Swing
                <br />
                <span className="text-[#A5D6A7]">With AI</span>
              </h2>

              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
                Join the waitlist and lock in Pro at <span className="text-white font-semibold">$5/month</span> — a discounted rate exclusively for early supporters. Once the waitlist closes, Pro goes back to $8/mo.
              </p>

            </div>

            {/* Right — form card */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl">
                {status === "success" ? (
                  <div className="flex flex-col items-center text-center py-4 gap-4">
                    <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-[#2E7D32]" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#111111] mb-1">You&apos;re on the list!</p>
                      <p className="text-[#6B7280] text-sm leading-relaxed">
                        We&apos;ll email you when ImpactAI launches. Your free Pro month is reserved.
                      </p>
                    </div>
                    <div className="w-full pt-3 border-t border-[#F3F4F6]">
                      <p className="text-xs text-[#9CA3AF]">Share with a friend and move up the list 👇</p>
                    </div>
                  </div>
                ) : status === "duplicate" ? (
                  <div className="flex flex-col items-center text-center py-4 gap-3">
                    <div className="w-14 h-14 rounded-full bg-[#E8F5E9] flex items-center justify-center">
                      <CheckCircle2 size={28} className="text-[#2E7D32]" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-[#111111] mb-1">Already in!</p>
                      <p className="text-[#6B7280] text-sm">You&apos;re already on the waitlist. We&apos;ll be in touch soon.</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-5">
                      <p className="text-lg font-bold text-[#111111] mb-1">Join the Waitlist</p>
                      <p className="text-sm text-[#6B7280]">
                        Be first to know. Get 1 month of Pro free at launch.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                      <input
                        type="text"
                        placeholder="First name (optional)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/30 focus:border-[#2E7D32] transition-all"
                      />
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] text-sm text-[#111111] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2E7D32]/30 focus:border-[#2E7D32] transition-all"
                      />

                      {status === "error" && (
                        <p className="text-red-500 text-xs px-1">{errorMsg}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading" || !email}
                        className="w-full gradient-green text-white font-bold py-3.5 rounded-xl shadow-md hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Joining...
                          </>
                        ) : (
                          "Lock In $29 — Join Waitlist →"
                        )}
                      </button>

                      <p className="text-center text-[10px] text-[#9CA3AF] mt-1">
                        No spam. Unsubscribe anytime. $29 one-time payment locked in at launch.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
