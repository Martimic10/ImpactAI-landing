"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PhoneMockup from "@/components/PhoneMockup";
import AnalyzeScreen from "@/components/screens/AnalyzeScreen";
import ResultsScreen from "@/components/screens/ResultsScreen";
import OverlayScreen from "@/components/screens/OverlayScreen";
import LessonsScreen from "@/components/screens/LessonsScreen";
import LeaderboardScreen from "@/components/screens/LeaderboardScreen";

const screens = [
  { label: "Analyze", component: AnalyzeScreen },
  { label: "Results", component: ResultsScreen },
  { label: "Visual Overlay", component: OverlayScreen },
  { label: "Lessons", component: LessonsScreen },
  { label: "Leaderboard", component: LeaderboardScreen },
];

export default function AppPreviewSection() {
  const [active, setActive] = useState(0);
  const ref = useScrollAnimation();

  const ActiveScreen = screens[active].component;

  return (
    <section
      ref={ref}
      className="py-24 bg-white overflow-hidden scroll-animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            App Screenshots
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-[#6B7280] max-w-2xl mx-auto">
            Every screen is designed to make coaching simple, visual, and
            actionable.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Phone mockup */}
          <div className="flex justify-center lg:w-72 flex-shrink-0">
            <div className="transition-all duration-500">
              <PhoneMockup screen={<ActiveScreen />} tilt="none" />
            </div>
          </div>

          {/* Screen selector + descriptions */}
          <div className="flex-1 max-w-xl w-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "bg-[#2E7D32] text-white shadow-md"
                      : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E8F5E9] hover:text-[#2E7D32]"
                  }`}
                >
                  {screen.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="transition-all duration-300">
              {active === 0 && (
                <ScreenDesc
                  title="Record & Analyze"
                  body="Open the app, record your swing directly or upload a video. ImpactAI immediately begins processing your footage — no waiting, no uploading to a cloud form."
                  points={["Works with any camera angle", "Live recording or existing video", "Instant processing"]}
                />
              )}
              {active === 1 && (
                <ScreenDesc
                  title="Your Results Dashboard"
                  body="Get a comprehensive score across all the key swing metrics. Each score is explained with a specific AI-generated insight so you know exactly what to focus on."
                  points={["Swing plane, hip rotation, tempo", "Detailed per-metric scores", "Personalized AI insight"]}
                />
              )}
              {active === 2 && (
                <ScreenDesc
                  title="Visual Swing Overlay"
                  body="See your actual swing path drawn over your video alongside the ideal path. The visual gap makes it instantly clear what to correct — no guessing."
                  points={["Swing path visualization", "Ideal path ghost overlay", "Impact point marker"]}
                />
              )}
              {active === 3 && (
                <ScreenDesc
                  title="Personalized Lessons"
                  body="ImpactAI auto-selects the most relevant lessons and drills based on your specific faults. Every session builds on the last for continuous improvement."
                  points={["Auto-recommended drills", "Structured lesson packs", "Beginner to advanced"]}
                />
              )}
              {active === 4 && (
                <ScreenDesc
                  title="Friends Leaderboard"
                  body="Stay motivated by competing with friends on weekly improvement challenges. Share your best swings, celebrate progress, and keep each other accountable."
                  points={["Weekly swing challenges", "Share videos with friends", "Progress streak tracking"]}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenDesc({
  title,
  body,
  points,
}: {
  title: string;
  body: string;
  points: string[];
}) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#111111] mb-3">{title}</h3>
      <p className="text-[#6B7280] leading-relaxed mb-5">{body}</p>
      <ul className="flex flex-col gap-2">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-sm text-[#374151]">
            <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5l2 2 4-4"
                  stroke="#2E7D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
