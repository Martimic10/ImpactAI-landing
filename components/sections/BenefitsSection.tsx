"use client";

import { m } from "framer-motion";
import { Globe, LineChart, Sparkles, Star, Users2 } from "lucide-react";
import { ImagePhone } from "@/components/landing/ImagePhone";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const leftBenefits = [
  {
    icon: Sparkles,
    title: "AI Golf Coach",
    body: "Get personalized drills, swing tips, and coaching whenever you practice.",
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    body: "Track uploads, streaks, and improvement trends so you always know what's working.",
  },
];

const rightBenefits = [
  {
    icon: Users2,
    title: "Social Golf",
    body: "Share swings, compete on leaderboards, and stay motivated with friends.",
  },
  {
    icon: Globe,
    title: "Play Anywhere",
    body: "From the range to the course — log practice and rounds in one modern iOS app.",
  },
];

function BenefitCard({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof Sparkles;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-white/[0.08] bg-[#111111] p-5 transition duration-300 hover:border-white/[0.12] sm:rounded-3xl sm:p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-zinc-300">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </div>
      <h3 className="text-base font-semibold text-white sm:text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{body}</p>
    </article>
  );
}

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-pad bg-black">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.08, 0.04)}
          className="mx-auto max-w-2xl px-1 text-center"
        >
          <m.div
            variants={fadeUpSoftVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 sm:text-sm"
          >
            <Star className="h-3.5 w-3.5 text-white" strokeWidth={2} />
            Our benefits
          </m.div>
          <m.h2
            variants={fadeUpVariants}
            className="text-2xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            Discover Impact Golf&apos;s benefits
          </m.h2>
          <m.p
            variants={fadeUpSoftVariants}
            className="mt-3 text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base"
          >
            Unlock meaningful connections on the course, tailored AI coaching, and a
            seamless way to improve with friends.
          </m.p>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.1)}
          className="mt-12 lg:mt-16"
        >
          <m.div variants={fadeUpVariants} className="phone-shell-max-sm flex justify-center lg:hidden">
            <ImagePhone
              fitShell
              src="/social-mockup-removebg-preview.png"
              alt="Impact Golf social feed"
              sizes="(max-width: 640px) min(88vw, 260px), 320px"
              className="shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)]"
            />
          </m.div>

          <div className="mt-8 flex flex-col gap-4 md:mt-0 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-6 xl:gap-10">
            <div className="flex flex-col gap-4 md:gap-6">
              {leftBenefits.map((b) => (
                <m.div key={b.title} variants={fadeUpSoftVariants}>
                  <BenefitCard {...b} />
                </m.div>
              ))}
            </div>

            <m.div
              variants={fadeUpVariants}
              className="phone-shell-max-sm hidden justify-center md:flex md:px-2"
            >
              <ImagePhone
                fitShell
                src="/social-mockup-removebg-preview.png"
                alt="Impact Golf social feed"
                sizes="320px"
                className="shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)]"
              />
            </m.div>

            <div className="flex flex-col gap-4 md:gap-6">
              {rightBenefits.map((b) => (
                <m.div key={b.title} variants={fadeUpSoftVariants}>
                  <BenefitCard {...b} />
                </m.div>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
