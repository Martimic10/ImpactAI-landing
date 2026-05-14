"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
} from "@/components/motion/scroll-motion";

export default function FinalCTASection() {
  return (
    <section id="download" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl min-w-0 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.12, 0.08)}
          className="glass-panel glow-brand-strong relative overflow-hidden px-5 py-10 text-center sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-brand/20 blur-[90px]" />
          <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-brand/15 blur-[80px]" />

          <motion.p
            variants={fadeUpSoftVariants}
            className="section-label mb-4"
          >
            Get started
          </motion.p>
          <motion.h2
            variants={fadeUpSoftVariants}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Start improving your golf game.
          </motion.h2>
          <motion.p
            variants={fadeUpSoftVariants}
            className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:mt-4 sm:text-base"
          >
            Track progress, compete with friends, and level up your game with
            AI-powered coaching.
          </motion.p>
          <motion.div variants={fadeUpSoftVariants} className="mt-8 sm:mt-10">
            <Link
              href="#download"
              className="btn-brand inline-flex min-h-12 w-full max-w-sm items-center justify-center !px-8 !py-3.5 text-base sm:w-auto"
            >
              Download App
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
