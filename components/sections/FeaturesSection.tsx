"use client";

import { useState } from "react";
import { m } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  ClipboardList,
  Medal,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: ClipboardList,
    title: "Live Scorecards",
    body: "Fast scoring during every round.",
    detail:
      "Enter scores hole-by-hole as you play. Everyone in your group sees updates in real time — no more chasing totals on the 18th green.",
  },
  {
    icon: Target,
    title: "Challenges",
    body: "Longest drive, closest to pin, and more.",
    detail:
      "Set side bets and skill challenges mid-round. Winners get bragging rights and points that count toward your weekly standings.",
  },
  {
    icon: Users,
    title: "Groups",
    body: "Create your golf crew.",
    detail:
      "Build a group for your Saturday foursome, league, or friend circle. Invite players, manage members, and keep every round in one place.",
  },
  {
    icon: Trophy,
    title: "Leaderboards",
    body: "Compete every week.",
    detail:
      "Weekly rankings reset the rivalry. See who is on top, who climbed the most, and who needs a rematch after this weekend's round.",
  },
  {
    icon: BarChart3,
    title: "Stats",
    body: "Track your progress.",
    detail:
      "Review scoring trends, round history, and head-to-head records against friends so you always know where your game stands.",
  },
  {
    icon: Medal,
    title: "Achievements",
    body: "Unlock milestones.",
    detail:
      "Earn badges for birdie streaks, challenge wins, and season milestones. Collect them all and show your crew what you have accomplished.",
  },
];

type Feature = (typeof features)[number];

function FeatureCard({ feature }: { feature: Feature }) {
  const [open, setOpen] = useState(false);
  const Icon = feature.icon;

  return (
    <m.div
      variants={fadeUpSoftVariants}
      className={cn(
        "card-lift group rounded-2xl border border-border bg-card p-6 sm:p-7",
        open && "max-md:-translate-y-1 max-md:border-brand/25 max-md:shadow-[0_20px_48px_-16px_rgba(52,224,111,0.15)]"
      )}
    >
      <button
        type="button"
        className="w-full text-left md:pointer-events-none md:cursor-default"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/15 text-brand transition duration-300 group-hover:bg-brand/25 group-hover:scale-105">
          <Icon className="size-6" strokeWidth={1.5} />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.body}</p>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
            "grid-rows-[0fr] opacity-0",
            "md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100",
            open && "grid-rows-[1fr] opacity-100"
          )}
        >
          <div className="overflow-hidden">
            <p className="pt-3 text-sm leading-relaxed text-foreground/80">{feature.detail}</p>
          </div>
        </div>

        <span
          className={cn(
            "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand transition md:hidden",
            open && "opacity-80"
          )}
        >
          {open ? "Show less" : "Learn more"}
          <ChevronDown
            className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")}
            strokeWidth={2.5}
            aria-hidden
          />
        </span>
      </button>
    </m.div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
        >
          <m.div variants={fadeUpVariants} className="px-1 text-center">
            <p className="section-label mb-3">Features</p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything your group needs to compete.
            </h2>
          </m.div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6">
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
