"use client";

import Link from "next/link";
import { m } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
} from "@/components/motion/scroll-motion";

export default function FinalCTASection() {
  return (
    <section id="download" className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-4xl min-w-0 px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.12, 0.08)}
          className="glass-panel relative overflow-hidden px-5 py-10 text-center shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] sm:px-14 sm:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(255,255,255,0.06),transparent_58%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_100%,rgba(255,255,255,0.03),transparent_50%)]" />

          <m.p
            variants={fadeUpSoftVariants}
            className="section-label mb-4"
          >
            Get started
          </m.p>
          <m.h2
            variants={fadeUpSoftVariants}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Start improving your golf game.
          </m.h2>
          <m.p
            variants={fadeUpSoftVariants}
            className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground sm:mt-4 sm:text-base"
          >
            Track progress, compete with friends, and level up your game with
            AI-powered coaching.
          </m.p>
          <m.div variants={fadeUpSoftVariants} className="mt-8 sm:mt-10">
            <Link
              href="#download"
              className="btn-brand inline-flex min-h-12 w-full max-w-sm items-center justify-center !px-8 !py-3.5 text-base sm:w-auto"
            >
              Download App
            </Link>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
