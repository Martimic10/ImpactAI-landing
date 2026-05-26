"use client";

import Link from "next/link";
import { AppleIcon } from "@/components/icons/StoreIcons";
import { BrandLogo } from "@/components/BrandLogo";
import { ImagePhone } from "@/components/landing/ImagePhone";

const perks = [
  "AI coach for drills and personalized feedback",
  "Leaderboards and friendly competition",
  "Swing uploads, streaks, and progress over time",
];

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 size-5 shrink-0 text-brand"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function FinalCTASection() {
  return (
    <section id="download" className="section-pad border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-6xl min-w-0">
        <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-5 sm:rounded-3xl sm:p-8 lg:p-12">
          <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-5 flex justify-center lg:justify-start">
                <BrandLogo variant="footer" />
              </div>

              <p className="section-label mb-3">Get started</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Download Impact Golf for iOS
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Everything you need to practice smarter, compete with friends, and
                actually see your game improve — in one app built for modern golfers.
              </p>

              <ul className="mx-auto mt-6 max-w-md space-y-3 text-left lg:mx-0 lg:max-w-none">
                {perks.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-zinc-300 sm:text-base">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex w-full max-w-sm flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-start sm:gap-4 lg:items-start">
                <Link
                  href="#download"
                  className="btn-hero inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-base font-semibold sm:w-auto"
                  aria-label="Download Impact Golf for iOS"
                >
                  <AppleIcon className="size-5 shrink-0" />
                  Download
                </Link>
                <p className="text-center text-xs text-zinc-500 sm:text-left">
                  Coming soon on the{" "}
                  <span className="text-zinc-300">App Store</span>
                </p>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <div className="phone-shell-max-sm w-full">
                <ImagePhone
                  bare
                  src="/progress-mockup1-removebg-preview.png"
                  alt="Impact Golf progress tracking screen"
                  sizes="(max-width: 640px) min(88vw, 260px), 300px"
                  className="mx-auto shadow-[0_24px_64px_-24px_rgba(0,0,0,0.75)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
