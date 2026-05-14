"use client";

import { m } from "framer-motion";
import { AppleIcon, GooglePlayIcon } from "@/components/icons/StoreIcons";
import { ImagePhone } from "@/components/landing/ImagePhone";
import {
  cascadeVariants,
  defaultViewport,
  easeSmooth,
  fadeUpSoftVariants,
} from "@/components/motion/scroll-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-[calc(env(safe-area-inset-top,0px)+6.75rem)] pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(52,224,111,0.18),transparent)]" />
      <div className="pointer-events-none absolute -left-32 top-1/3 hidden h-80 w-80 rounded-full bg-brand/10 blur-[100px] sm:block" />
      <div className="pointer-events-none absolute -right-24 bottom-0 hidden h-96 w-96 rounded-full bg-brand/8 blur-[120px] sm:block" />

      <div className="relative mx-auto grid max-w-6xl min-w-0 items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeSmooth }}
          className="min-w-0 max-w-xl"
        >
          <p className="section-label mb-3 sm:mb-4">ImpactAI</p>
          <h1 className="text-balance text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            The AI-powered{" "}
            <span className="text-gradient-brand">social app</span> for golfers.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg lg:text-xl">
            Upload swings, track your progress, compete with friends, and get
            personalized golf coaching powered by AI.
          </p>
          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <div
              className="btn-brand inline-flex w-full items-center justify-center gap-3 rounded-2xl !px-5 !py-3.5 text-left shadow-lg transition hover:brightness-110 hover:shadow-xl hover:-translate-y-0.5 sm:w-auto sm:justify-start sm:!py-3"
              role="status"
              aria-label="Coming soon on iOS, the App Store"
            >
              <AppleIcon className="h-7 w-7 shrink-0 text-primary-foreground opacity-95 sm:h-8 sm:w-8" />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-wider text-primary-foreground/85 sm:text-[11px]">
                  Coming soon on
                </span>
                <span className="text-[14px] font-semibold text-primary-foreground sm:text-[15px]">
                  iOS
                </span>
              </div>
            </div>
            <div
              className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-left shadow-md transition hover:border-brand/35 hover:bg-white/[0.07] hover:shadow-lg hover:-translate-y-0.5 sm:w-auto sm:justify-start sm:py-3"
              role="status"
              aria-label="Coming soon on Google Play for Android"
            >
              <GooglePlayIcon className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
              <div className="flex min-w-0 flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  Coming soon on
                </span>
                <span className="text-[14px] font-semibold text-foreground sm:text-[15px]">
                  Google Play
                </span>
              </div>
            </div>
          </div>
        </m.div>

        <m.div
          className="relative mx-auto h-[min(68svh,480px)] w-full min-w-0 max-w-[min(100%,420px)] sm:h-[min(72vh,560px)] sm:max-w-[460px] lg:mx-0 lg:max-w-none lg:justify-self-end"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.12, 0.06)}
        >
          <div className="absolute bottom-[8%] left-[4%] right-[4%] h-40 rounded-full bg-brand/15 blur-3xl" />
          <div className="absolute bottom-[12%] left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/10 blur-[80px]" />

          <m.div
            variants={fadeUpSoftVariants}
            className="absolute left-0 top-[18%] z-10 w-[46%] -rotate-[8deg] sm:w-[44%]"
          >
            <ImagePhone
              src="/social-mockup-removebg-preview.png"
              alt="Social feed"
              sizes="(max-width: 640px) 46vw, 200px"
            />
          </m.div>

          <m.div
            variants={fadeUpSoftVariants}
            className="absolute right-[2%] top-[8%] z-20 w-[48%] rotate-[6deg] sm:w-[46%]"
          >
            <ImagePhone
              src="/results-mockup1-removebg-preview.png"
              alt="Swing analysis results"
              sizes="(max-width: 640px) 48vw, 220px"
            />
          </m.div>

          <m.div
            variants={fadeUpSoftVariants}
            className="absolute bottom-[6%] left-[12%] z-30 w-[52%] -rotate-[3deg] sm:left-[10%] sm:w-[50%]"
          >
            <ImagePhone
              src="/friends-mockup-removebg-preview.png"
              alt="Friends"
              sizes="(max-width: 640px) 52vw, 240px"
            />
          </m.div>

          <m.div
            variants={fadeUpSoftVariants}
            className="absolute left-1/2 top-[2%] z-40 w-[58%] -translate-x-1/2 sm:w-[54%]"
          >
            <ImagePhone
              src="/coachai-mockup-removebg-preview.png"
              alt="AI golf coach"
              priority
              sizes="(max-width: 640px) 58vw, 280px"
            />
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
