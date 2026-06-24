"use client";

import { useState } from "react";
import Link from "next/link";
import { m } from "framer-motion";
import { Check, ChevronDown, Gem } from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    key: "starter",
    name: "Starter",
    description: "Perfect for casual rounds and getting your crew competing.",
    price: "Free",
    priceNote: null,
    featured: false,
    cta: "Get Started",
    includes: [
      "Unlimited rounds with friends",
      "Live scorecards and group play",
      "Weekly leaderboards",
      "In-round challenges",
      "Basic player stats",
    ],
  },
  {
    key: "pro",
    name: "Pro",
    description: "For groups that want deeper stats, seasons, and premium competition.",
    price: "$4.99",
    priceNote: "per month",
    featured: true,
    cta: "Get Started",
    includes: [
      "Match play, skins, stableford & more",
      "Advanced stats & score trends",
      "Season leaderboards & tournaments",
      "Custom challenges & rare badges",
      "Host Pro formats — friends play free",
    ],
  },
] as const;

type Plan = (typeof plans)[number];
type PlanKey = Plan["key"];

function PricingCard({
  plan,
  open,
  onToggle,
}: {
  plan: Plan;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <m.div
      variants={fadeUpSoftVariants}
      className={cn(
        "flex h-auto w-full flex-col self-start rounded-[1.75rem] border p-3 sm:rounded-[2rem] sm:p-4",
        plan.featured
          ? "border-foreground bg-foreground text-white shadow-[0_24px_64px_-24px_rgba(0,0,0,0.35)]"
          : "border-border bg-card text-foreground"
      )}
    >
      <div
        className={cn(
          "flex min-h-[13.5rem] flex-col rounded-[1.25rem] p-6 sm:min-h-[14.5rem] sm:rounded-[1.5rem] sm:p-7",
          plan.featured ? "bg-card text-foreground" : "bg-muted"
        )}
      >
        <h3 className="text-2xl font-bold tracking-tight">{plan.name}</h3>
        <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-muted-foreground">
          {plan.description}
        </p>
        <div className="mt-auto flex items-end gap-2 pt-8">
          <p className="text-4xl font-bold tracking-tight sm:text-[2.75rem]">{plan.price}</p>
          {plan.priceNote ? (
            <span className="pb-1.5 text-sm text-muted-foreground">{plan.priceNote}</span>
          ) : null}
        </div>
      </div>

      <div className="mt-3 sm:mt-4">
        <div className="flex gap-2">
          <Link
            href="#download"
            className={cn(
              "inline-flex min-h-12 flex-1 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
              plan.featured
                ? "bg-white text-foreground hover:bg-white/90"
                : "bg-[#1a1a1a] text-white hover:bg-[#252525]"
            )}
          >
            {plan.cta}
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? `Hide ${plan.name} features` : `Show ${plan.name} features`}
            onClick={onToggle}
            className={cn(
              "inline-flex size-12 shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0",
              plan.featured
                ? "bg-white text-foreground hover:bg-white/90"
                : "bg-[#1a1a1a] text-white hover:bg-[#252525]"
            )}
          >
            <ChevronDown
              className={cn("size-5 transition-transform duration-300", open && "rotate-180")}
              strokeWidth={2.25}
              aria-hidden
            />
          </button>
        </div>

        {open ? (
          <div className="mt-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div
              className={cn(
                "rounded-[1.25rem] p-5 sm:rounded-[1.5rem] sm:p-6",
                plan.featured ? "bg-white/10 text-white" : "bg-foreground text-white"
              )}
            >
              <p className="text-sm font-medium text-white/70">Includes</p>
              <ul className="mt-4 space-y-3">
                {plan.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-snug">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                      <Check className="size-3" strokeWidth={2.5} aria-hidden />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </m.div>
  );
}

export default function PricingSection() {
  const [openPlan, setOpenPlan] = useState<PlanKey | null>(null);

  const togglePlan = (key: PlanKey) => {
    setOpenPlan((current) => (current === key ? null : key));
  };

  return (
    <section id="pricing" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
        >
          <m.div variants={fadeUpVariants} className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-foreground shadow-sm">
              <Gem className="size-3.5 text-brand" strokeWidth={2} aria-hidden />
              Pricing
            </div>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple pricing. Built for competition.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Start free with your crew, then upgrade when you want deeper stats and premium
              game modes.
            </p>
          </m.div>

          <div className="mx-auto mt-12 grid max-w-4xl items-start gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {plans.map((plan) => (
              <PricingCard
                key={plan.key}
                plan={plan}
                open={openPlan === plan.key}
                onToggle={() => togglePlan(plan.key)}
              />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
