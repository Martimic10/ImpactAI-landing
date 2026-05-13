"use client";

import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    others: "Shows you a score with no context",
    impact: "Explains what's wrong and why it matters",
  },
  {
    others: "Generic video tools with no coaching",
    impact: "Personalized drills matched to your exact faults",
  },
  {
    others: "Confusing jargon and raw data",
    impact: "Clear visual feedback anyone can understand",
  },
  {
    others: "One-time analysis with no follow-up",
    impact: "Continuous improvement loop with progress tracking",
  },
];

export default function DifferentiatorSection() {
  return (
    <section className="py-24 bg-muted/80 dark:bg-muted/40">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.04)}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div variants={fadeUpVariants}>
            <div className="impact-badge mb-5 w-fit">Why ImpactAI</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
              More Than a
              <br />
              Swing Analyzer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most swing apps give you a score and leave you guessing. ImpactAI
              closes the loop — you&apos;ll know exactly what&apos;s wrong, how
              to fix it, and whether you&apos;re getting better.
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {["Analyze", "Understand", "Practice", "Improve"].map(
                (step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-card border border-border rounded-xl px-3 py-2 shadow-sm">
                      <div className="w-5 h-5 rounded-full gradient-green text-white text-[9px] font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-muted-foreground">→</span>
                    )}
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <div className="bg-card rounded-3xl border border-border shadow-xl overflow-hidden dark:shadow-none">
              <div className="grid grid-cols-2">
                <div className="bg-muted px-5 py-4 border-r border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Generic Apps
                  </p>
                </div>
                <div className="gradient-green px-5 py-4">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    ImpactAI
                  </p>
                </div>
              </div>

              {comparisons.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${
                    i < comparisons.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="px-5 py-4 border-r border-border flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-red-100 dark:bg-red-950/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={8} className="text-red-500 dark:text-red-400" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {row.others}
                    </p>
                  </div>
                  <div className="px-5 py-4 flex items-start gap-2.5 bg-emerald-500/[0.08] dark:bg-emerald-950/50">
                    <div className="w-4 h-4 rounded-full bg-emerald-200 dark:bg-emerald-800/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={8} className="text-emerald-700 dark:text-emerald-300" />
                    </div>
                    <p className="text-sm text-foreground font-medium leading-relaxed">
                      {row.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
