import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const navLinks = [
  { label: "Benefits", href: "#benefits" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Download", href: "#download" },
];

const socials = [
  {
    label: "X",
    href: "https://x.com/ImpactAIGolf",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/impactaigolf",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@impactaigolf",
    icon: (
      <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black pb-[max(2rem,env(safe-area-inset-bottom,0px))] pt-14 sm:pt-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Link
          href="/"
          className="inline-flex flex-col items-center gap-3 transition hover:opacity-90"
          aria-label="Impact Golf home"
        >
          <BrandLogo variant="footer" />
          <span className="text-xl font-semibold tracking-tight text-white">
            Impact Golf
          </span>
        </Link>

        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-zinc-400">
          Empower your golf game with social swings, AI coaching, and friends who
          keep you accountable.
        </p>

        <a
          href="mailto:hello@impactai.golf"
          className="mt-6 inline-flex max-w-full items-center justify-center gap-2.5 rounded-2xl border border-white/[0.08] bg-[#111111] px-4 py-3 text-sm text-zinc-200 transition hover:border-white/[0.14] hover:bg-[#161616] sm:px-5"
        >
          <svg
            className="size-4 shrink-0 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <span className="break-all sm:break-normal">hello@impactai.golf</span>
        </a>

        <nav
          className="mt-8 flex flex-col items-stretch gap-0.5 text-sm text-zinc-400 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-2 sm:gap-y-2"
          aria-label="Footer"
        >
          {navLinks.map((link, index) => (
            <span
              key={link.href}
              className="inline-flex items-center justify-center gap-2 sm:justify-start"
            >
              {index > 0 ? (
                <span className="hidden text-zinc-600 select-none sm:inline" aria-hidden>
                  ·
                </span>
              ) : null}
              <Link
                href={link.href}
                className="flex min-h-11 items-center justify-center rounded-lg px-3 py-2 transition hover:bg-white/[0.04] hover:text-white sm:min-h-0 sm:rounded-none sm:p-0 sm:hover:bg-transparent"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="mt-10 border-t border-white/[0.08] pt-6">
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between sm:gap-4">
            <p className="order-2 text-xs text-zinc-500 sm:order-1">
              © {new Date().getFullYear()} Impact Golf. All rights reserved.
            </p>

            <div className="order-1 flex items-center gap-2 sm:order-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/[0.08] bg-[#111111] text-white transition hover:border-white/[0.14] hover:bg-[#161616]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <Link
              href="#"
              className="order-3 text-xs text-zinc-500 transition hover:text-zinc-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
