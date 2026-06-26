"use client";

import { useEffect, useRef, useState } from "react";
import AppStoreButtons from "@/components/AppStoreButtons";
import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Groups", href: "#groups" },
  { label: "Download", href: "#download" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (menuRef.current?.contains(event.target as Node)) return;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
      <div
        className={cn(
          "relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 transition-all duration-300 sm:h-[4.25rem] sm:px-6 lg:px-8",
          scrolled &&
            "mx-3 mt-2 max-w-[min(52rem,calc(100vw-1.5rem))] rounded-full border border-border bg-card px-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] sm:mx-auto sm:mt-4 sm:px-4"
        )}
      >
        <Link
          href="/"
          className="relative z-10 flex min-w-0 items-center transition hover:opacity-90"
          aria-label="TeeUp home"
        >
          <BrandLogo variant="nav" priority />
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex lg:gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="relative z-10 hidden md:block">
          <AppStoreButtons size="sm" />
        </div>

        <div ref={menuRef} className="relative z-20 md:hidden">
          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-primary-foreground transition hover:brightness-110 active:scale-[0.98]"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-haspopup="true"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={2} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={2} />
            )}
          </button>

          <AnimatePresence>
            {open ? (
              <m.nav
                initial={{ opacity: 0, y: -6, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.97 }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-[calc(100%+0.625rem)] w-[min(17.5rem,calc(100vw-2rem))] origin-top-right rounded-2xl border border-border bg-card p-5 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.15)]"
                aria-label="Mobile navigation"
              >
                <ul className="flex flex-col gap-0.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-1 py-2.5 text-[15px] font-medium text-foreground transition hover:text-muted-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>

                <AppStoreButtons
                  size="md"
                  fullWidth
                  className="mt-5"
                  onClick={() => setOpen(false)}
                />
              </m.nav>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
