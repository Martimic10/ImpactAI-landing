"use client";

import { m } from "framer-motion";
import { Upload, Sparkles, Trophy } from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload swings or track practice",
    body: "Capture rounds, range sessions, or quick swings — keep everything in one place.",
  },
  {
    icon: Sparkles,
    title: "Get AI coaching and personalized recommendations",
    body: "Chat with your coach, get drills, and see what to work on next based on your game.",
  },
  {
    icon: Trophy,
    title: "Compete with friends and improve over time",
    body: "Leaderboards, streaks, and challenges keep you accountable and having fun.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="section-pad border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.12, 0.06)}
        >
          <m.div variants={fadeUpVariants} className="px-1 text-center">
            <p className="section-label mb-3">How it works</p>
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Three steps. One better game.
            </h2>
          </m.div>

          <div className="relative mt-10 flex flex-col gap-10 sm:mt-14 md:mt-16 md:grid md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-brand/0 via-brand/35 to-brand/0 md:block" />

            {steps.map((s, i) => (
              <m.div
                key={s.title}
                variants={fadeUpSoftVariants}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.1] bg-[#121512] text-brand shadow-lg ring-4 ring-black sm:h-16 sm:w-16">
                  <s.icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.5} />
                  <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-5 max-w-xs text-base font-semibold text-white sm:mt-6 sm:text-lg">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-400 sm:mt-3">
                  {s.body}
                </p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
