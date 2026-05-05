"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Eye, Crosshair, GitCompare, Lightbulb } from "lucide-react";

const points = [
  {
    icon: Eye,
    title: "AI Visual Overlays",
    description: "Your swing path drawn directly over your video in real time.",
  },
  {
    icon: Crosshair,
    title: "Impact Frame Analysis",
    description:
      "The exact frame at impact analyzed for clubface, path, and power.",
  },
  {
    icon: GitCompare,
    title: "Ideal Path Comparison",
    description: "Ghost your ideal swing path alongside your actual swing.",
  },
  {
    icon: Lightbulb,
    title: "Clear Coaching Visuals",
    description:
      "No confusing numbers — just visual feedback you can see and understand.",
  },
];

export default function VisualAnalysisSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Phone mockup */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#A5D6A7]/20 blur-3xl scale-125 rounded-full pointer-events-none" />

              {/* Slanted overlay mockup */}
              <Image
                src="/overlay-mockup-removebg-preview.png"
                alt="ImpactAI visual overlay analysis"
                width={280}
                height={605}
                className="w-[220px] sm:w-[260px] lg:w-[280px] h-auto drop-shadow-2xl -rotate-6"
                priority
              />

              {/* Path Deviation badge */}
              <div className="absolute -right-4 sm:-right-8 top-16 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] px-4 py-3 z-10">
                <p className="text-[#2E7D32] text-xs font-bold">Path Deviation</p>
                <p className="text-[#111111] text-xl font-extrabold">+2°</p>
                <p className="text-[#9CA3AF] text-[10px]">Outside-in</p>
              </div>

              {/* Impact Score badge */}
              <div className="absolute -left-4 sm:-left-8 bottom-24 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] px-4 py-3 z-10">
                <p className="text-[#2E7D32] text-xs font-bold">Impact Score</p>
                <p className="text-[#111111] text-xl font-extrabold">91</p>
                <p className="text-[#9CA3AF] text-[10px]">Excellent</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              Visual Analysis
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-5">
              See What Happens
              <br />
              <span className="text-gradient-green">at Impact</span>
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              The impact zone is where everything happens — and it happens in
              milliseconds. ImpactAI captures it, analyzes it, and shows you
              exactly what to improve.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start p-4 rounded-2xl bg-[#F9FAFB] border border-[#E5E7EB] hover:border-[#A5D6A7] hover:bg-[#F0FDF4] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                    <point.icon size={18} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#111111] mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
