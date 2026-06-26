"use client";

import AppStoreButtons from "@/components/AppStoreButtons";
import Link from "next/link";
import { m } from "framer-motion";
import { ImagePhone } from "@/components/landing/ImagePhone";
import { HeroBackground } from "@/components/landing/HeroBackground";
import { deviceMockups } from "@/lib/mockups";

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[min(100svh,56rem)] overflow-x-clip bg-background pb-16 pt-[calc(env(safe-area-inset-top,0px)+6rem)] sm:min-h-[min(100svh,52rem)] sm:pb-24 sm:pt-28 lg:pb-28 lg:pt-32">
      <HeroBackground variant="hero" priority />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 flex w-full max-w-3xl flex-col items-center text-center">
          <h1 className="text-balance px-1 text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground drop-shadow-sm sm:text-5xl lg:text-[3.5rem]">
            Golf Is Better With{" "}
            <span className="text-brand">Competition.</span>
          </h1>

          <p className="mt-5 max-w-xl px-1 text-pretty text-base leading-relaxed text-foreground/80 sm:mt-6 sm:text-lg">
            Create rounds with friends, track scores live, complete challenges, and
            climb your group leaderboard.
          </p>

          <div className="mt-8 flex w-full max-w-md flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <AppStoreButtons size="lg" />
            <Link
              href="#features"
              className="btn-outline min-h-12 border-foreground/10 bg-card/90 px-8 py-3.5 text-base shadow-sm backdrop-blur-sm"
            >
              View Features
            </Link>
          </div>
        </div>

        <m.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 mt-12 w-full max-w-md sm:mt-16 sm:max-w-lg lg:max-w-xl"
        >
          <div className="relative mx-auto w-full max-w-[min(72vw,280px)] sm:max-w-[300px] lg:max-w-[320px]">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-brand/10 blur-3xl" aria-hidden />
            <ImagePhone
              bare
              src={deviceMockups.home}
              alt="TeeUp home screen with live rounds and stats"
              priority
              sizes="(max-width: 640px) 72vw, 320px"
              className="relative z-10"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
