"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PhoneMockup from "@/components/PhoneMockup";
import LeaderboardScreen from "@/components/screens/LeaderboardScreen";
import { Users, Share2, TrendingUp, Flame } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Friends Leaderboard",
    description: "See how you stack up against your golfing crew every week.",
  },
  {
    icon: Share2,
    title: "Share Your Swings",
    description: "Send your best swings to friends and get real feedback.",
  },
  {
    icon: TrendingUp,
    title: "Improvement Tracking",
    description: "Watch your weekly scores climb with consistent practice.",
  },
  {
    icon: Flame,
    title: "Practice Streaks",
    description: "Build momentum with daily and weekly practice challenges.",
  },
];

export default function SocialSection() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-[#F9FAFB] scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-5">
              Social & Retention
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight leading-tight mb-5">
              Train With Friends
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Golf is better with friends. ImpactAI keeps you accountable,
              motivated, and improving — together. Challenge your crew, share
              your best swings, and celebrate every breakthrough.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md hover:border-[#A5D6A7] transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-[#2E7D32]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#111111] mb-0.5">
                      {f.title}
                    </p>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 p-4 bg-[#E8F5E9] rounded-2xl border border-[#A5D6A7]">
              <div className="flex -space-x-2">
                {["T", "S", "J", "M"].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full gradient-green flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#1B5E20] font-medium">
                Join golfers already improving their game with friends
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-[#A5D6A7]/20 to-transparent scale-150 pointer-events-none" />
              <PhoneMockup screen={<LeaderboardScreen />} tilt="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
