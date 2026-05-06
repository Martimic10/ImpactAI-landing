"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

// Payment provider hook-in points:
// - ctaHref: swap "#download" for a Stripe Checkout URL or RevenueCat paywall deep-link
// - priceId: Stripe price ID to pass to your checkout handler
// - type: "free" | "subscription" | "lifetime" — lets your handler route correctly
const PRO_FEATURES = [
  "Unlimited analyses",
  "Slow-motion replay",
  "AI coaching: fixes, drills, and ball flight prediction",
  "Pose skeleton overlay with landmark detection",
  "4-phase swing breakdown: Address, Top, Impact, Follow-through",
  "Pro reference compare with tour swing side-by-side",
  "Swing vs swing comparison with metric comparison bars",
  "Leaderboard filters: streak and total swings",
  "Full progress tracking",
  "Friends: shared swings and social features",
];

const plans = [
  {
    type: "free" as const,
    name: "Free",
    price: "$0",
    billing: "/forever",
    description: "Everything you need to test your swing.",
    cta: "Download Free",
    ctaHref: "#download",
    priceId: null,
    highlight: false,
    badge: null,
    features: [
      "5 swing analyses per month",
      "Slow motion playback",
      "Basic AI swing feedback",
      "Basic visual analysis",
      "Limited progress history",
      "Basic tips only",
    ],
  },
  {
    type: "subscription" as const,
    name: "Pro",
    price: "$8",
    billing: "/per month",
    description: "Unlimited analysis for serious improvement.",
    cta: "Start Pro Monthly",
    ctaHref: "#download",
    priceId: null, // e.g. "price_pro_monthly"
    highlight: false,
    badge: "Most Popular",
    features: PRO_FEATURES,
  },
  {
    type: "lifetime" as const,
    name: "Lifetime Access",
    price: "$59",
    billing: "one-time",
    description: "Get full access to ImpactAI without a subscription.",
    cta: "Get Lifetime Access",
    ctaHref: "#download",
    priceId: null, // e.g. "price_lifetime_001"
    highlight: true,
    badge: "Best Value",
    features: PRO_FEATURES,
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

        {/* Cards — 3-col on large, stacked on mobile */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "gradient-green text-white shadow-2xl glow-green"
                  : "bg-white border border-[#E5E7EB] shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {plan.highlight ? (
                    <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      <Zap size={11} strokeWidth={3} />
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="bg-white text-[#2E7D32] text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-[#A5D6A7]">
                      {plan.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Limited time label */}
              {plan.type === "lifetime" && (
                <div className="mb-4 mt-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white/90 border border-white/30 px-2.5 py-1 rounded-full">
                    Limited Time Offer
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className={`mb-6 ${plan.type !== "lifetime" ? "mt-1" : ""}`}>
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
                    {plan.billing}
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
                // data-price-id and data-plan-type make it easy to wire up Stripe/RevenueCat:
                // onClick: (e) => { e.preventDefault(); openCheckout(plan.priceId, plan.type) }
                data-price-id={plan.priceId ?? undefined}
                data-plan-type={plan.type}
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
          Pro billed monthly. Lifetime is a one-time payment. Free plan requires no credit card.
        </p>
      </div>
    </section>
  );
}
