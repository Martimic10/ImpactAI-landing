"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Video, Cpu, TrendingUp } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Video,
    title: "Record or Upload Your Swing",
    description:
      "Capture your swing from any angle using your phone camera, or upload an existing video. No special equipment needed.",
    color: "#E8F5E9",
    iconColor: "#2E7D32",
  },
  {
    step: "02",
    icon: Cpu,
    title: "Get Instant AI Analysis",
    description:
      "Our AI engine analyzes your swing frame-by-frame — evaluating plane, path, face angle, tempo, and impact position in seconds.",
    color: "#F0FDF4",
    iconColor: "#1B5E20",
  },
  {
    step: "03",
    icon: TrendingUp,
    title: "Improve With Drills & Feedback",
    description:
      "Receive personalized lessons, visual overlays, and targeted drills. Track your improvement over time with every swing.",
    color: "#DCFCE7",
    iconColor: "#166534",
  },
];

export default function HowItWorksSection() {
  const ref = useScrollAnimation();

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            How ImpactAI Works
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            From recording your swing to measurable improvement — the whole
            coaching loop is right in your pocket.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px bg-gradient-to-r from-[#A5D6A7] via-[#2E7D32] to-[#A5D6A7]" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center group"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Icon circle */}
              <div
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300"
                style={{ backgroundColor: step.color }}
              >
                <step.icon size={32} style={{ color: step.iconColor }} />
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-green text-white text-xs font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#111111] mb-2">{step.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
