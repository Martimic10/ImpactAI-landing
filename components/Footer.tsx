"use client";

import Link from "next/link";
import { m } from "framer-motion";
import { BrandLogo } from "@/components/BrandLogo";
import { defaultViewport, fadeUpVariants } from "@/components/motion/scroll-motion";
import ThemeToggle from "@/components/theme/ThemeToggle";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Support", href: "mailto:support@impactai.golf" },
  { label: "Contact", href: "mailto:hello@impactai.golf" },
];

const socials = [
  { label: "X", href: "https://x.com/ImpactAIGolf" },
  { label: "Instagram", href: "https://www.instagram.com/impactaigolf" },
  { label: "TikTok", href: "https://www.tiktok.com/@impactaigolf" },
];

export default function Footer() {
  return (
    <m.footer
      className="border-t border-white/10 bg-[#050605] py-12 pb-[max(3rem,env(safe-area-inset-bottom,0px))] sm:py-14"
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUpVariants}
    >
      <div className="mx-auto flex max-w-6xl min-w-0 flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="w-fit transition hover:opacity-90"
            aria-label="Impact Golf home"
          >
            <BrandLogo variant="footer" />
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
          <nav className="flex flex-col gap-3 text-sm text-zinc-400">
            {footerLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="block py-1.5 transition hover:text-zinc-100"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col gap-3 text-sm text-zinc-400">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1.5 transition hover:text-zinc-100"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl px-4 text-center text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} ImpactAI. All rights reserved.
      </p>
    </m.footer>
  );
}
