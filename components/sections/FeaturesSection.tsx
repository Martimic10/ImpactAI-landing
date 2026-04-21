"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Brain,
  PlayCircle,
  Eye,
  Zap,
  BookOpen,
  GitCompare,
  BarChart3,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Swing Analysis",
    description:
      "Frame-by-frame AI evaluates your swing plane, face angle, path, tempo, and impact position with professional precision.",
    highlight: true,
  },
  {
    icon: PlayCircle,
    title: "Slow Motion Playback",
    description:
      "Review your swing at any speed. Scrub frame-by-frame to pinpoint exactly where your form breaks down.",
  },
  {
    icon: Eye,
    title: "Visual Swing Overlay",
    description:
      "See your actual swing path drawn over your video with ideal path comparison — making corrections instantly clear.",
  },
  {
    icon: Zap,
    title: "Impact Snapshot",
    description:
      "AI identifies your exact impact frame and grades your clubface position, path, and power transfer at the moment of contact.",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Auto Lesson Recommendations",
    description:
      "Based on your analysis, ImpactAI automatically suggests the most relevant lessons and drills for your specific faults.",
  },
  {
    icon: GitCompare,
    title: "Ghost Swing Comparison",
    description:
      "Overlay your swing against an ideal path or a previous swing to visualize exactly what changed and what to fix.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Every swing is stored. Watch your scores improve over time with detailed metrics and trend analysis.",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "Friends Leaderboard",
    description:
      "Compete with friends, share swings, and stay motivated with weekly challenges and improvement streaks.",
  },
];

export default function FeaturesSection() {
  const ref = useScrollAnimation();

  return (
    <section
      id="features"
      ref={ref}
      className="py-24 bg-[#F9FAFB] scroll-animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Full Feature Set
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Everything You Need to Improve
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            ImpactAI packs professional-grade coaching tools into a clean,
            intuitive mobile experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                feature.highlight
                  ? "bg-white border border-[#A5D6A7] shadow-md"
                  : "bg-white border border-[#E5E7EB] shadow-sm"
              }`}
            >
              {feature.highlight && (
                <div className="absolute -top-2.5 left-4">
                  <span className="bg-[#2E7D32] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Key Feature
                  </span>
                </div>
              )}

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  feature.highlight
                    ? "bg-[#E8F5E9] group-hover:bg-[#2E7D32]"
                    : "bg-[#F3F4F6] group-hover:bg-[#E8F5E9]"
                }`}
              >
                <feature.icon
                  size={20}
                  className={`transition-colors ${
                    feature.highlight
                      ? "text-[#2E7D32] group-hover:text-white"
                      : "text-[#374151] group-hover:text-[#2E7D32]"
                  }`}
                />
              </div>

              <h3 className="font-bold text-[#111111] mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
