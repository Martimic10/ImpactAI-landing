"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Desktop ── */}
      <div
        className={`fixed z-50 hidden md:flex transition-all duration-500 ease-out ${
          scrolled
            ? "top-4 left-1/2 -translate-x-1/2"
            : "top-0 left-0 right-0"
        }`}
      >
        <div
          className={`flex items-center transition-all duration-500 ease-out ${
            scrolled
              ? // Floating pill
                "w-auto gap-6 bg-white/90 backdrop-blur-xl border border-[#E5E7EB] shadow-xl rounded-2xl px-5 py-2.5"
              : // Full-width bar
                "w-screen max-w-7xl mx-auto px-8 py-5 gap-0"
          }`}
        >
          {/* Left — Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/ImpactAI-logo-removebg-preview.png"
              alt="ImpactAI"
              width={34}
              height={34}
              className="rounded-xl shadow-sm group-hover:shadow-md transition-shadow"
            />
            <span className="font-bold text-base text-[#111111] tracking-tight">
              Impact<span className="text-[#2E7D32]">AI</span>
            </span>
          </Link>

          {/* Center — Nav links */}
          <nav
            className={`flex items-center gap-7 ${
              scrolled ? "ml-6" : "flex-1 justify-center"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#374151] hover:text-[#2E7D32] transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right — CTA */}
          <Link
            href="#download"
            className={`gradient-green text-white text-sm font-semibold rounded-xl px-5 py-2.5 shadow-md hover:opacity-90 hover:shadow-lg transition-all whitespace-nowrap shrink-0 ${
              scrolled ? "ml-6" : ""
            }`}
          >
            Download Free
          </Link>
        </div>
      </div>

      {/* ── Mobile nav bar ── */}
      <div
        className={`fixed z-50 flex md:hidden transition-all duration-500 ease-out ${
          scrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
        }`}
      >
        <div
          className={`w-full flex items-center justify-between transition-all duration-500 ease-out ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-[#E5E7EB] shadow-xl rounded-2xl px-4 py-2.5"
              : "px-5 py-4"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/ImpactAI-logo-removebg-preview.png"
              alt="ImpactAI"
              width={30}
              height={30}
              className="rounded-xl"
            />
            <span className="font-bold text-base text-[#111111] tracking-tight">
              Impact<span className="text-[#2E7D32]">AI</span>
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-[#374151] hover:bg-[#F3F4F6]"
                : "text-[#374151] hover:bg-black/5"
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown — separate from pill so it doesn't resize it ── */}
      <div
        className={`fixed z-40 md:hidden transition-all duration-300 ease-out ${
          scrolled ? "left-4 right-4 top-[72px]" : "left-3 right-3 top-[68px]"
        } ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-2xl rounded-2xl px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#374151] hover:text-[#2E7D32] hover:bg-[#F0FDF4] px-3 py-2.5 rounded-xl transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 mt-1 border-t border-[#F3F4F6]">
            <Link
              href="#download"
              onClick={() => setMobileOpen(false)}
              className="gradient-green text-white text-sm font-semibold rounded-xl shadow-md w-full py-2.5 text-center block"
            >
              Download Free
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
