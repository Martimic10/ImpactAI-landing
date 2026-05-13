"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { Eye, Crosshair, GitCompare, Lightbulb } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "AI Visual Overlays",
    description: "Your swing path drawn directly over your video in real time.",
  },
  {
    icon: Crosshair,
    title: "Impact Frame Analysis",
    description:
      "The exact frame at impact analyzed for clubface, path, and power.",
  },
  {
    icon: GitCompare,
    title: "Ideal Path Comparison",
    description: "Ghost your ideal swing path alongside your actual swing.",
  },
  {
    icon: Lightbulb,
    title: "Clear Coaching Visuals",
    description:
      "No confusing numbers — just visual feedback you can see and understand.",
  },
];

export default function VisualAnalysisSection() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.04)}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            className="flex justify-center order-2 lg:order-1"
            variants={fadeUpVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/15 dark:bg-primary/10 blur-3xl scale-125 rounded-full pointer-events-none" />

              <Image
                src="/overlay-mockup-removebg-preview.png"
                alt="ImpactAI visual overlay analysis"
                width={280}
                height={605}
                className="relative w-[220px] sm:w-[260px] lg:w-[280px] h-auto drop-shadow-2xl -rotate-6 dark:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                priority
              />

              <div className="absolute -right-4 sm:-right-8 top-16 bg-card rounded-2xl shadow-xl border border-border px-4 py-3 z-10">
                <p className="text-primary text-xs font-bold">Path Deviation</p>
                <p className="text-foreground text-xl font-extrabold">+2°</p>
                <p className="text-muted-foreground text-[10px]">Outside-in</p>
              </div>

              <div className="absolute -left-4 sm:-left-8 bottom-24 bg-card rounded-2xl shadow-xl border border-border px-4 py-3 z-10">
                <p className="text-primary text-xs font-bold">Impact Score</p>
                <p className="text-foreground text-xl font-extrabold">91</p>
                <p className="text-muted-foreground text-[10px]">Excellent</p>
              </div>
            </div>
          </motion.div>

          <motion.div className="order-1 lg:order-2" variants={fadeUpVariants}>
            <div className="impact-badge mb-5 w-fit">Visual Analysis</div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-5">
              See What Happens
              <br />
              <span className="text-gradient-green">at Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The impact zone is where everything happens — and it happens in
              milliseconds. ImpactAI captures it, analyzes it, and shows you
              exactly what to improve.
            </p>

            <motion.div
              variants={cascadeVariants(0.06, 0.05)}
              className="grid sm:grid-cols-2 gap-4"
            >
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUpSoftVariants}
                  className="flex gap-3 items-start p-4 rounded-2xl bg-muted/60 border border-border hover:border-primary/40 hover:bg-accent/20 dark:bg-muted/30 dark:hover:bg-accent/15 transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-accent/80 flex items-center justify-center flex-shrink-0 dark:bg-accent/40">
                    <point.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
