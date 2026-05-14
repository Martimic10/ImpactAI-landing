"use client";

import { motion } from "framer-motion";
import PhoneMockup from "@/components/PhoneMockup";
import { ImagePhone } from "@/components/landing/ImagePhone";
import { ChatMockup } from "@/components/landing/ChatMockup";
import { MOCKUP_SHELL_H, MOCKUP_SHELL_W } from "@/lib/mockup-size";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const shots = [
  {
    key: "leaderboard",
    label: "Leaderboard",
    node: (
      <ImagePhone
        src="/leaderboard-mockup-removebg-preview.png"
        alt="Leaderboard"
        fitShell
      />
    ),
  },
  {
    key: "coach",
    label: "AI Coach",
    node: (
      <PhoneMockup
        screen={<ChatMockup />}
        tilt="none"
        shellWidth={MOCKUP_SHELL_W}
        shellHeight={MOCKUP_SHELL_H}
      />
    ),
  },
  {
    key: "progress",
    label: "Progress",
    node: (
      <ImagePhone src="/results-screen-removebg-preview.png" alt="Progress" fitShell />
    ),
  },
  {
    key: "upload",
    label: "Upload",
    node: (
      <ImagePhone
        src="/Analyze-screen-removebg-preview.png"
        alt="Upload swing"
        fitShell
      />
    ),
  },
  {
    key: "social",
    label: "Friends",
    node: (
      <ImagePhone
        src="/Compare-screen-removebg-preview.png"
        alt="Friends and compare"
        fitShell
      />
    ),
  },
];

export default function ScreenshotsRailSection() {
  return (
    <section id="screenshots" className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
          className="text-center"
        >
          <motion.div variants={fadeUpVariants}>
            <p className="section-label mb-3">Screenshots</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for modern golfers.
            </h2>
            <p className="mx-auto mt-3 max-w-xl px-1 text-sm text-muted-foreground sm:mt-4 sm:text-base">
              Swipe or scroll sideways — same spacing on every screen, from phone
              to desktop.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.08)}
      >
        <div className="mx-auto max-w-6xl min-w-0">
          <div
            className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible scroll-smooth pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-8 pt-2 touch-pan-x sm:-mx-6 sm:gap-6 sm:pl-6 sm:pr-6 lg:-mx-8 lg:pl-8 lg:pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {shots.map((s) => (
              <motion.div
                key={s.key}
                variants={fadeUpSoftVariants}
                className="group relative w-[min(calc(100vw-2.5rem),290px)] shrink-0 snap-center sm:w-[290px]"
              >
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand/0 opacity-0 blur-2xl transition duration-500 group-hover:bg-brand/15 group-hover:opacity-100" />
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
                <div className="flex min-h-[min(72svh,520px)] w-full items-center justify-center pb-2 sm:min-h-[580px]">
                  {s.node}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
