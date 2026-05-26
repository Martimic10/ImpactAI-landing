"use client";

import { m } from "framer-motion";
import { ImagePhone } from "@/components/landing/ImagePhone";
import { Heart, MessageCircle, Flame } from "lucide-react";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const reactions = [
  { user: "Alex", text: "That tempo was money.", icon: Flame },
  { user: "Jordan", text: "Challenge accepted this weekend.", icon: MessageCircle },
  { user: "Sam", text: "Streak still alive.", icon: Heart },
];

export default function SocialCompetitionSection() {
  return (
    <section id="social" className="section-pad border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
          className="mx-auto max-w-2xl px-1 text-center"
        >
          <m.p variants={fadeUpVariants} className="section-label mb-3">
            Social
          </m.p>
          <m.h2
            variants={fadeUpVariants}
            className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Golf is better with competition.
          </m.h2>
          <m.p
            variants={fadeUpVariants}
            className="mt-3 text-base text-zinc-400 sm:mt-4 sm:text-lg"
          >
            Compete with friends, build streaks, and track your improvement together.
          </m.p>
        </m.div>

        <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:grid lg:grid-cols-12 lg:items-start lg:gap-12">
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            className="phone-shell-max-sm lg:col-span-7"
          >
            <ImagePhone
              src="/social-mockup-removebg-preview.png"
              alt="Social feed and friend competition"
              fitShell
              sizes="(max-width: 640px) min(88vw, 260px), 320px"
              className="shadow-[0_24px_64px_-24px_rgba(0,0,0,0.75)]"
            />
          </m.div>

          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={cascadeVariants(0.1, 0.08)}
            className="flex min-w-0 flex-col gap-4 lg:col-span-5"
          >
            {reactions.map((r) => (
              <m.div
                key={r.user}
                variants={fadeUpSoftVariants}
                className="flex gap-3 rounded-2xl border border-white/[0.08] bg-[#111111] p-4 sm:gap-4 sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <r.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-sm font-semibold text-white">{r.user}</p>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-400">{r.text}</p>
                </div>
              </m.div>
            ))}

            <m.div
              variants={fadeUpSoftVariants}
              className="rounded-2xl border border-white/[0.08] bg-[#111111] p-5 text-left"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Friend activity
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Reactions, comments, and weekly challenges keep the group warm —
                without losing the premium, calm feel of a serious golf app.
              </p>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
