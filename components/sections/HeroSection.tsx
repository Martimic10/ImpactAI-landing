"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import AppStoreButtons from "@/components/AppStoreButtons";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E9]/40 via-white to-white pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#E8F5E9] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-[#C8E6C9] blur-3xl opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] border border-[#A5D6A7] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              <span className="w-1.5 h-1.5 bg-[#2E7D32] rounded-full animate-pulse" />
              AI-Powered Golf Coaching
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111111] leading-[1.1] tracking-tight text-balance mb-6">
              Fix Your Golf Swing{" "}
              <span className="text-gradient-green">With AI</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#4B5563] leading-relaxed mb-8 max-w-lg">
              Record your swing, get instant coaching feedback, visual analysis,
              drills, and progress tracking — right from your phone.
            </p>

            {/* App store buttons */}
            <AppStoreButtons size="lg" className="mb-8" />

            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-[#6B7280]">
              {[
                "Built for all skill levels",
                "Faster than booking a lesson",
                "Personalized feedback in seconds",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#2E7D32] flex-shrink-0"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Watch demo */}
            <Link
              href="#how-it-works"
              className="mt-8 inline-flex items-center gap-2 text-[#2E7D32] font-semibold hover:gap-3 transition-all group text-sm"
            >
              <div className="w-8 h-8 rounded-full border-2 border-[#2E7D32] flex items-center justify-center group-hover:bg-[#2E7D32] transition-colors">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-[#2E7D32] border-b-[5px] border-b-transparent ml-0.5 group-hover:border-l-white" />
              </div>
              See How It Works
            </Link>
          </div>

          {/* Phone mockups */}
          <div className="relative flex justify-center lg:justify-end items-end h-[480px] sm:h-[560px] lg:h-[620px]">

            {/* Green glow */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#66BB6A]/15 rounded-full blur-3xl pointer-events-none z-0" />

            {/* Results — back, offset right, tilted */}
            <div className="absolute bottom-4 right-0 sm:right-4 lg:right-0 z-0 rotate-6 origin-bottom pointer-events-none">
              <Image
                src="/results-screen-removebg-preview.png"
                alt="Results screen"
                width={220}
                height={475}
                className="w-[170px] sm:w-[210px] lg:w-[230px] h-auto opacity-85 drop-shadow-xl"
                priority
              />
            </div>

            {/* Analyze — front */}
            <div className="relative z-10 -translate-x-6 sm:-translate-x-10 pointer-events-none">
              <Image
                src="/Analyze-screen-removebg-preview.png"
                alt="Analyze screen"
                width={270}
                height={583}
                className="w-[210px] sm:w-[255px] lg:w-[285px] h-auto drop-shadow-2xl"
                priority
              />
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        href="#how-it-works"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#9CA3AF] hover:text-[#2E7D32] transition-colors group"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <ChevronDown size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
