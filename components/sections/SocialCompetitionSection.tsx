"use client";

import { motion } from "framer-motion";
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
    <section id="social" className="relative overflow-hidden border-t border-white/[0.06] py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 rounded-full bg-brand/8 blur-[100px]" />

      <div className="mx-auto max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p variants={fadeUpVariants} className="section-label mb-3">
            Social
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Golf is better with competition.
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="mt-3 text-base text-muted-foreground sm:mt-4 sm:text-lg"
          >
            Compete with friends, build streaks, and track your improvement together.
          </motion.p>
        </motion.div>

        <div className="mt-12 grid min-w-0 items-start gap-10 sm:mt-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={fadeUpVariants}
            className="relative lg:col-span-7"
          >
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand/10 opacity-60 blur-3xl" />
            <div className="mx-auto w-full max-w-[min(100%,290px)] shrink-0 lg:mx-0">
              <ImagePhone
                src="/leaderboard-mockup-removebg-preview.png"
                alt="Leaderboard and friend competition"
                fitShell
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={cascadeVariants(0.1, 0.08)}
            className="flex flex-col gap-4 lg:col-span-5"
          >
            {reactions.map((r) => (
              <motion.div
                key={r.user}
                variants={fadeUpSoftVariants}
                className="flex gap-4 rounded-2xl border border-white/[0.08] bg-card/90 p-4 shadow-lg transition hover:border-brand/25"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <r.icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{r.user}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUpSoftVariants}
              className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-transparent p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">
                Friend activity
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Reactions, comments, and weekly challenges keep the group warm —
                without losing the premium, calm feel of a serious golf app.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
