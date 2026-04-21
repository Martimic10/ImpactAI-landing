"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    others: "Shows you a score with no context",
    impact: "Explains what's wrong and why it matters",
  },
  {
    others: "Generic video tools with no coaching",
    impact: "Personalized drills matched to your exact faults",
  },
  {
    others: "Confusing jargon and raw data",
    impact: "Clear visual feedback anyone can understand",
  },
  {
    others: "One-time analysis with no follow-up",
    impact: "Continuous improvement loop with progress tracking",
  },
];

export default function DifferentiatorSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-[#F9FAFB] scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              Why ImpactAI
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-5">
              More Than a
              <br />
              Swing Analyzer
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Most swing apps give you a score and leave you guessing. ImpactAI
              closes the loop — you&apos;ll know exactly what&apos;s wrong, how
              to fix it, and whether you&apos;re getting better.
            </p>

            {/* Loop diagram */}
            <div className="flex items-center gap-3 flex-wrap">
              {["Analyze", "Understand", "Practice", "Improve"].map(
                (step, i, arr) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-white border border-[#E5E7EB] rounded-xl px-3 py-2 shadow-sm">
                      <div className="w-5 h-5 rounded-full gradient-green text-white text-[9px] font-bold flex items-center justify-center">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-[#111111]">
                        {step}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-[#9CA3AF]">→</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Right: comparison table */}
          <div className="bg-white rounded-3xl border border-[#E5E7EB] shadow-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="bg-[#F9FAFB] px-5 py-4 border-r border-[#E5E7EB]">
                <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-wider">
                  Generic Apps
                </p>
              </div>
              <div className="gradient-green px-5 py-4">
                <p className="text-xs font-bold text-white uppercase tracking-wider">
                  ImpactAI
                </p>
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-2 ${
                  i < comparisons.length - 1 ? "border-b border-[#E5E7EB]" : ""
                }`}
              >
                <div className="px-5 py-4 border-r border-[#E5E7EB] flex items-start gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#FEE2E2] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={8} className="text-[#EF4444]" />
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {row.others}
                  </p>
                </div>
                <div className="px-5 py-4 flex items-start gap-2.5 bg-[#F0FDF4]/50">
                  <div className="w-4 h-4 rounded-full bg-[#DCFCE7] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={8} className="text-[#16A34A]" />
                  </div>
                  <p className="text-sm text-[#111111] font-medium leading-relaxed">
                    {row.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
