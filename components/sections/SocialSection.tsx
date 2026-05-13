"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { Users, Share2, TrendingUp, Flame } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Friends Leaderboard",
    description: "See how you stack up against your golfing crew every week.",
  },
  {
    icon: Share2,
    title: "Share Your Swings",
    description: "Send your best swings to friends and get real feedback.",
  },
  {
    icon: TrendingUp,
    title: "Improvement Tracking",
    description: "Watch your weekly scores climb with consistent practice.",
  },
  {
    icon: Flame,
    title: "Practice Streaks",
    description: "Build momentum with daily and weekly practice challenges.",
  },
];

export default function SocialSection() {
  return (
    <section className="py-24 bg-muted/80 dark:bg-muted/40">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.04)}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div variants={fadeUpVariants}>
            <div className="impact-badge mb-5 w-fit">Social & Retention</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
              Train With Friends
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Golf is better with friends. ImpactAI keeps you accountable,
              motivated, and improving — together. Challenge your crew, share
              your best swings, and celebrate every breakthrough.
            </p>

            <motion.div
              variants={cascadeVariants(0.06, 0.04)}
              className="grid sm:grid-cols-2 gap-4 mb-8"
            >
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpSoftVariants}
                  className="flex gap-3 items-start p-4 bg-card rounded-2xl border border-border shadow-sm hover:shadow-md hover:border-primary/35 transition-all duration-200 dark:shadow-none"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/80 flex items-center justify-center flex-shrink-0 dark:bg-accent/40">
                    <f.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5">
                      {f.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpSoftVariants}
              className="flex items-center gap-4 p-4 rounded-2xl border border-primary/30 bg-accent/40 dark:bg-emerald-950/40 dark:border-emerald-800/50"
            >
              <div className="flex -space-x-2">
                {["T", "S", "J", "M"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full gradient-green flex items-center justify-center text-white text-xs font-bold border-2 border-background shadow-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-accent-foreground font-medium dark:text-emerald-100">
                Join golfers already improving their game with friends
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={fadeUpVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/12 dark:bg-primary/8 blur-3xl scale-125 rounded-full pointer-events-none" />
              <Image
                src="/leaderboard-mockup-removebg-preview.png"
                alt="ImpactAI friends leaderboard"
                width={280}
                height={605}
                className="relative w-[220px] sm:w-[260px] lg:w-[280px] h-auto drop-shadow-2xl dark:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
