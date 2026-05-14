"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top,0px)]">
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-[height,padding,box-shadow,border-radius,max-width,margin] duration-300 ease-out",
            scrolled
              ? "glass-nav-float mt-3 h-14 max-w-[min(48rem,calc(100vw-1.25rem))] px-3 sm:mt-4 sm:h-[3.75rem] sm:max-w-[min(48rem,calc(100vw-2.5rem))] sm:px-5"
              : "mt-0 h-16 max-w-6xl border-b border-transparent bg-transparent px-4 sm:h-[4.25rem] sm:px-6 lg:px-8"
          )}
        >
          <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
            <Image
              src="/ImpactAI-logo-removebg-preview.png"
              alt="ImpactAI"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-xl object-contain ring-1 ring-white/10 transition group-hover:ring-brand/40"
            />
            <span className="truncate text-base font-semibold tracking-tight text-foreground">
              Impact<span className="text-brand">AI</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link href="#download" className="btn-brand !py-2.5 !px-5 !text-sm">
              Download
            </Link>
          </nav>

          <button
            type="button"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-foreground active:bg-white/[0.08] md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close menu backdrop"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="absolute inset-0 flex w-full flex-col bg-[#0a0c0b] pt-[env(safe-area-inset-top,0px)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5 sm:py-4">
                <span className="text-sm font-semibold text-foreground">Menu</span>
                <button
                  type="button"
                  className="flex size-11 items-center justify-center rounded-xl bg-white/[0.06] text-foreground active:bg-white/[0.1]"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-0.5 overflow-y-auto px-3 py-4 sm:px-4 sm:py-6">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="flex min-h-12 items-center rounded-2xl px-4 py-3 text-base font-medium text-foreground/90 transition active:bg-white/[0.08] hover:bg-white/[0.05]"
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="border-t border-white/[0.06] p-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] sm:p-5">
                <Link
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="btn-brand flex min-h-12 w-full items-center justify-center !py-3.5 text-center"
                >
                  Download
                </Link>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
