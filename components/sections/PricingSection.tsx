"use client";

import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { Check, Zap } from "lucide-react";
import Link from "next/link";

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
    priceId: null,
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
    priceId: null,
    highlight: true,
    badge: "Best Value",
    features: PRO_FEATURES,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.04)}
      >
        <motion.div variants={fadeUpVariants} className="text-center mb-14">
          <div className="impact-badge mb-4 mx-auto w-fit">Simple Pricing</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Start Free. Upgrade When Ready.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            No hidden fees. No commitments. Cancel anytime.
          </p>
        </motion.div>

        <motion.div
          variants={cascadeVariants(0.08, 0.06)}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUpSoftVariants}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? "gradient-green text-white shadow-2xl glow-green"
                  : "bg-card border border-border shadow-lg hover:shadow-xl dark:shadow-none"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  {plan.highlight ? (
                    <span className="inline-flex items-center gap-1 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                      <Zap size={11} strokeWidth={3} />
                      {plan.badge}
                    </span>
                  ) : (
                    <span className="bg-card text-primary text-xs font-bold px-4 py-1.5 rounded-full shadow-md border border-primary/35">
                      {plan.badge}
                    </span>
                  )}
                </div>
              )}

              {plan.type === "lifetime" && (
                <div className="mb-4 mt-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 text-white/90 border border-white/30 px-2.5 py-1 rounded-full">
                    Limited Time Offer
                  </span>
                </div>
              )}

              <div className={`mb-6 ${plan.type !== "lifetime" ? "mt-1" : ""}`}>
                <h3
                  className={`text-sm font-bold uppercase tracking-widest mb-3 ${
                    plan.highlight ? "text-emerald-200" : "text-primary"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-5xl font-extrabold ${
                      plan.highlight ? "text-white" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-2 ${
                      plan.highlight ? "text-white/70" : "text-muted-foreground"
                    }`}
                  >
                    {plan.billing}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <div
                      className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                        plan.highlight ? "bg-white/20" : "bg-accent/80 dark:bg-accent/40"
                      }`}
                    >
                      <Check
                        size={9}
                        className={
                          plan.highlight ? "text-white" : "text-primary"
                        }
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      className={
                        plan.highlight ? "text-white/90" : "text-foreground/90"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                data-price-id={plan.priceId ?? undefined}
                data-plan-type={plan.type}
                className={`w-full py-3.5 rounded-2xl text-sm font-bold text-center transition-all duration-200 block ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-emerald-50 shadow-lg dark:hover:bg-zinc-100"
                    : "bg-foreground text-background hover:bg-primary dark:hover:text-primary-foreground shadow-md"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUpSoftVariants}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Pro billed monthly. Lifetime is a one-time payment. Free plan requires no credit card.
        </motion.p>
      </motion.div>
    </section>
  );
}
