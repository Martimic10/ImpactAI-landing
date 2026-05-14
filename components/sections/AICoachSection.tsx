"use client";

import { m } from "framer-motion";
import { ImagePhone } from "@/components/landing/ImagePhone";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

export default function AICoachSection() {
  return (
    <section id="ai-coach" className="border-t border-white/[0.06] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand/10 blur-[100px]" />
            <div className="mx-auto w-full max-w-[min(100%,320px)] shrink-0 lg:mx-0">
              <ImagePhone
                src="/coachai-mockup-removebg-preview.png"
                alt="AI golf coach conversation"
                fitShell
              />
            </div>
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={cascadeVariants(0.1, 0.05)}
            className="max-w-lg min-w-0"
          >
            <m.p variants={fadeUpSoftVariants} className="section-label mb-3">
              AI Coach
            </m.p>
            <m.h2
              variants={fadeUpSoftVariants}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Your personal AI golf coach.
            </m.h2>
            <m.p
              variants={fadeUpSoftVariants}
              className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg"
            >
              Ask golf questions, get practice recommendations, and improve your game
              with personalized coaching — the same thread where your friends cheer
              you on.
            </m.p>
            <m.ul
              variants={fadeUpSoftVariants}
              className="mt-8 space-y-3 text-sm text-muted-foreground"
            >
              {[
                "Natural language — no swing jargon required",
                "Recommendations tied to how you actually play",
                "Built to respect your time on and off the course",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </m.ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
