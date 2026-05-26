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
    <section id="ai-coach" className="section-pad border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            className="phone-shell-max-sm relative order-2 flex justify-center lg:order-1 lg:justify-start"
          >
            <ImagePhone
              src="/coachai-mockup-removebg-preview.png"
              alt="AI golf coach conversation"
              fitShell
              sizes="(max-width: 640px) min(88vw, 260px), 320px"
              className="shadow-[0_24px_64px_-24px_rgba(0,0,0,0.75)]"
            />
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={cascadeVariants(0.1, 0.05)}
            className="order-1 min-w-0 text-center lg:order-2 lg:text-left"
          >
            <m.p variants={fadeUpSoftVariants} className="section-label mb-3">
              AI Coach
            </m.p>
            <m.h2
              variants={fadeUpSoftVariants}
              className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              Your personal AI golf coach.
            </m.h2>
            <m.p
              variants={fadeUpSoftVariants}
              className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-zinc-400 sm:mt-5 sm:text-lg lg:mx-0 lg:max-w-none"
            >
              Ask golf questions, get practice recommendations, and improve your game
              with personalized coaching — the same thread where your friends cheer
              you on.
            </m.p>
            <m.ul
              variants={fadeUpSoftVariants}
              className="mx-auto mt-6 max-w-md space-y-3 text-left text-sm text-zinc-400 sm:mt-8 sm:text-base lg:mx-0 lg:max-w-none"
            >
              {[
                "Natural language — no swing jargon required",
                "Recommendations tied to how you actually play",
                "Built to respect your time on and off the course",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </m.ul>
          </m.div>
        </div>
      </div>
    </section>
  );
}
