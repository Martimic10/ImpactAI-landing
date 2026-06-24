import Link from "next/link";
import { Mail } from "lucide-react";
import AppStoreButtons from "@/components/AppStoreButtons";
import { HeroBackground } from "@/components/landing/HeroBackground";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Groups", href: "/#groups" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
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
];

export default function Footer() {
  return (
    <footer id="download" className="relative isolate overflow-hidden text-white">
      <HeroBackground variant="footer" />

      <div className="relative z-10">
        <section className="px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl">
              Ready For Your Next Round?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-white/85 sm:text-lg">
              Bring your golf group to the app built for competition.
            </p>
            <div className="mt-8 flex justify-center">
              <AppStoreButtons size="lg" />
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl border-t border-white/20 px-4 sm:px-6 lg:px-8" />

        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-8 pb-[max(2rem,env(safe-area-inset-bottom,0px))] text-sm text-white/85 sm:flex-row sm:justify-between sm:gap-4 sm:px-6 sm:py-10 lg:px-8">
          <p className="order-2 text-center sm:order-1 sm:text-left">
            © {new Date().getFullYear()} Impact Golf. All rights reserved.
          </p>

          <nav
            className="order-1 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:order-2"
            aria-label="Footer"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="order-3 flex flex-col items-center gap-3 sm:items-end">
            <a
              href="mailto:hello@impactai.golf"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />
              <span>hello@impactai.golf</span>
            </a>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:border-white/40 hover:bg-white/20"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
