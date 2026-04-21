"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import AppStoreButtons from "@/components/AppStoreButtons";

export default function FinalCTASection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="download"
      ref={ref}
      className="py-24 overflow-hidden scroll-animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl gradient-green overflow-hidden glow-green">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center py-16 px-6 sm:py-20 sm:px-12">
            <div className="inline-flex items-center gap-2 bg-white/15 text-white rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <span className="w-1.5 h-1.5 bg-[#A5D6A7] rounded-full animate-pulse" />
              Available on iOS & Android — Coming Soon
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5 max-w-2xl text-balance">
              Start Improving Your Swing Today
            </h2>

            <p className="text-lg sm:text-xl text-white/80 max-w-xl mb-10 leading-relaxed">
              Download ImpactAI and get AI-powered golf coaching in your pocket.
              Free to start. No credit card required.
            </p>

            <AppStoreButtons size="lg" className="justify-center" />

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm text-white/60">
              {[
                "Free forever plan",
                "No credit card required",
                "Cancel Pro anytime",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-[#A5D6A7]"
                  >
                    <path
                      d="M2.5 7l3 3 6-6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
