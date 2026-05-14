"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users2, LineChart, Upload } from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const cards = [
  {
    icon: MessageCircle,
    title: "AI Golf Coach",
    body: "Ask golf questions, get personalized drills, and receive coaching recommendations anytime.",
  },
  {
    icon: Users2,
    title: "Social Golf Experience",
    body: "Share swings, compete with friends, and stay motivated through golf challenges and leaderboards.",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    body: "Track your swing uploads, improvement trends, streaks, and practice history over time.",
  },
  {
    icon: Upload,
    title: "Swing Uploads",
    body: "Upload swings, review playback, and receive lightweight AI-powered feedback.",
  },
];

export default function WhyImpactSection() {
  return (
    <section id="features" className="relative border-t border-white/[0.06] py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
        >
          <motion.div variants={fadeUpVariants} className="mx-auto min-w-0 max-w-2xl px-1 text-center sm:px-0">
            <p className="section-label mb-3">Why ImpactAI</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Everything you need to improve your game.
            </h2>
          </motion.div>

          <motion.div
            variants={cascadeVariants(0.08, 0.12)}
            className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:gap-6"
          >
            {cards.map((c) => (
              <motion.article
                key={c.title}
                variants={fadeUpSoftVariants}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-card/80 p-6 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.75)] transition duration-300 hover:border-brand/25 hover:shadow-[0_28px_80px_-24px_rgba(52,224,111,0.12)] sm:rounded-3xl sm:p-8 lg:p-10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/20 transition group-hover:bg-brand/18">
                  <c.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-foreground sm:text-xl">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3 sm:text-base">
                  {c.body}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
