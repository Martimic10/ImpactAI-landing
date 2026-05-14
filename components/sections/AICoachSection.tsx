"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import { ChatMockup } from "@/components/landing/ChatMockup";
import { MOCKUP_SHELL_H, MOCKUP_SHELL_W } from "@/lib/mockup-size";
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute inset-0 -z-10 scale-110 rounded-full bg-brand/10 blur-[100px]" />
            <div className="mx-auto w-full max-w-[min(100%,290px)] shrink-0 lg:mx-0">
              <PhoneMockup
                screen={<ChatMockup />}
                tilt="none"
                shellWidth={MOCKUP_SHELL_W}
                shellHeight={MOCKUP_SHELL_H}
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={cascadeVariants(0.1, 0.05)}
            className="max-w-lg min-w-0"
          >
            <motion.p variants={fadeUpSoftVariants} className="section-label mb-3">
              AI Coach
            </motion.p>
            <motion.h2
              variants={fadeUpSoftVariants}
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Your personal AI golf coach.
            </motion.h2>
            <motion.p
              variants={fadeUpSoftVariants}
              className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg"
            >
              Ask golf questions, get practice recommendations, and improve your game
              with personalized coaching — the same thread where your friends cheer
              you on.
            </motion.p>
            <motion.ul
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
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
