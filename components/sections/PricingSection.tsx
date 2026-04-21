"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to get started.",
    cta: "Download Free",
    ctaHref: "#download",
    highlight: false,
    features: [
      "5 swing analyses per month",
      "Slow motion playback",
      "Basic AI feedback",
      "Lesson recommendations",
      "Basic visual analysis",
      "Progress history (30 days)",
    ],
  },
  {
    name: "Pro",
    price: "$8",
    period: "per month",
    description: "Unlimited access. Serious improvement.",
    cta: "Start Pro Free",
    ctaHref: "#download",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Unlimited swing analyses",
      "Advanced visual analysis",
      "Full lesson packs (50+ drills)",
      "Ghosted ideal swing overlay",
      "Full progress tracking",
      "Friends leaderboard",
      "Impact frame deep analysis",
      "Priority AI coaching insights",
    ],
  },
];

export default function PricingSection() {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" ref={ref} className="py-24 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Simple Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Start Free. Upgrade When Ready.
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-xl mx-auto">
            No hidden fees. No commitments. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "gradient-green text-white shadow-2xl glow-green"
                  : "bg-white border border-[#E5E7EB] shadow-lg hover:shadow-xl"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-white text-[#2E7D32] text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-[#A5D6A7]">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3
                  className={`text-sm font-bold uppercase tracking-widest mb-3 ${
                    plan.highlight ? "text-[#A5D6A7]" : "text-[#2E7D32]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.highlight ? "text-white" : "text-[#111111]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${
                      plan.highlight ? "text-white/70" : "text-[#6B7280]"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-white/80" : "text-[#6B7280]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? "bg-white/20" : "bg-[#E8F5E9]"
                      }`}
                    >
                      <Check
                        size={9}
                        className={
                          plan.highlight ? "text-white" : "text-[#2E7D32]"
                        }
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={
                        plan.highlight ? "text-white/90" : "text-[#374151]"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.ctaHref}
                className={`w-full py-3.5 rounded-2xl text-sm font-bold text-center transition-all duration-200 block ${
                  plan.highlight
                    ? "bg-white text-[#2E7D32] hover:bg-[#E8F5E9] shadow-lg"
                    : "bg-[#111111] text-white hover:bg-[#2E7D32] shadow-md"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="text-center text-sm text-[#9CA3AF] mt-8">
          Pro plan billed monthly. Cancel anytime. No credit card required for Free.
        </p>
      </div>
    </section>
  );
}
