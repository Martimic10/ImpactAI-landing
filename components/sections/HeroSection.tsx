"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { AppleIcon } from "@/components/icons/StoreIcons";
import { ImagePhone } from "@/components/landing/ImagePhone";
import { easeSmooth } from "@/components/motion/scroll-motion";

const phones = {
  left: {
    src: "/social-mockup-removebg-preview.png",
    alt: "Social feed and activity",
  },
  right: {
    src: "/friends-mockup-removebg-preview.png",
    alt: "Friends and leaderboards",
  },
  center: {
    src: "/coachai-mockup-removebg-preview.png",
    alt: "AI golf coach",
    priority: true,
  },
} as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-x-clip bg-black pb-12 pt-[calc(env(safe-area-inset-top,0px)+4.75rem)] sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="relative z-20 flex w-full max-w-3xl flex-col items-center text-center">
          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeSmooth }}
            className="mb-4 inline-flex max-w-[calc(100vw-2rem)] flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] leading-snug text-zinc-300 sm:mb-5 sm:max-w-none sm:text-xs"
          >
            <span className="flex -space-x-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-flex size-5 items-center justify-center rounded-full border border-black bg-brand/90 text-[8px] font-bold text-black sm:size-6 sm:text-[9px]"
                  aria-hidden
                >
                  {["⛳", "🏌", "📈"][i]}
                </span>
              ))}
            </span>
            <span className="text-balance">
              Built for golfers who want to improve together
            </span>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: easeSmooth }}
            className="text-balance px-1 text-[1.625rem] font-semibold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
          >
            Connect, compete, and grow with{" "}
            <span className="text-brand">Impact Golf</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12, ease: easeSmooth }}
            className="mt-4 max-w-lg px-1 text-pretty text-sm leading-relaxed text-zinc-400 sm:mt-5 sm:text-base lg:text-lg"
          >
            Upload swings, track progress, compete with friends, and get personalized
            AI coaching — all in one modern iOS app.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease: easeSmooth }}
            className="mt-6 w-full max-w-sm sm:mt-8"
          >
            <Link
              href="#download"
              className="btn-hero inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold sm:w-auto"
              aria-label="Download Impact Golf for iOS"
            >
              <AppleIcon className="size-5 shrink-0" />
              Download
            </Link>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.24, ease: easeSmooth }}
          className="relative z-10 mt-10 flex w-full max-w-5xl items-end justify-center gap-0 overflow-visible sm:mt-14 md:mt-16"
        >
          <div className="hidden w-[26%] max-w-[170px] shrink-0 -rotate-8 pb-2 md:block lg:max-w-[190px]">
            <ImagePhone
              bare
              src={phones.left.src}
              alt={phones.left.alt}
              sizes="190px"
              className="shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)]"
            />
          </div>

          <div className="mx-auto w-full max-w-[min(72vw,220px)] shrink-0 sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px]">
            <ImagePhone
              bare
              src={phones.center.src}
              alt={phones.center.alt}
              priority={phones.center.priority}
              sizes="(max-width: 640px) 72vw, 240px"
              className="shadow-[0_32px_80px_-24px_rgba(52,224,111,0.22)]"
            />
          </div>

          <div className="hidden w-[26%] max-w-[170px] shrink-0 rotate-8 pb-2 md:block lg:max-w-[190px]">
            <ImagePhone
              bare
              src={phones.right.src}
              alt={phones.right.alt}
              sizes="190px"
              className="shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)]"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
}
