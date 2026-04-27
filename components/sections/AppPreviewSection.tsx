"use client";

import { useState } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import PhoneMockup from "@/components/PhoneMockup";
import OverlayScreen from "@/components/screens/OverlayScreen";
import LeaderboardScreen from "@/components/screens/LeaderboardScreen";

type Screen =
  | { label: string; mockupSrc: string; alt: string; title: string; body: string; points: string[] }
  | { label: string; component: React.ComponentType; title: string; body: string; points: string[] };

const screens: Screen[] = [
  {
    label: "Analyze",
    mockupSrc: "/Analyze-screen-removebg-preview.png",
    alt: "ImpactAI analyze swing screen",
    title: "Record & Analyze",
    body: "Open the app, record your swing directly or upload a video. ImpactAI immediately begins processing your footage — no waiting, no uploading to a cloud form.",
    points: ["Works with any camera angle", "Live recording or existing video", "Instant processing"],
  },
  {
    label: "Results",
    mockupSrc: "/results-screen-removebg-preview.png",
    alt: "ImpactAI results screen",
    title: "Your Results Dashboard",
    body: "Get a full breakdown of your swing with an AI summary, overall score, and per-metric scores for Setup, Posture, Swing Path, Tempo, and more — all in seconds.",
    points: ["Overall swing score + AI summary", "Per-metric scores with explanations", "Instant feedback after every swing"],
  },
  {
    label: "Compare",
    mockupSrc: "/Compare-screen-removebg-preview.png",
    alt: "ImpactAI compare swings screen",
    title: "Compare Any Two Swings",
    body: "Put two swings side by side and see exactly what changed — or what hasn't. Compare today vs. last week, driver vs. iron, or your swing against a friend's.",
    points: ["Side-by-side swing comparison", "Metric-by-metric breakdown", "Track what's improving over time"],
  },
  {
    label: "Visual Overlay",
    component: OverlayScreen,
    title: "Visual Swing Overlay",
    body: "See your actual swing path drawn over your video alongside the ideal path. The visual gap makes it instantly clear what to correct — no guessing.",
    points: ["Swing path visualization", "Ideal path ghost overlay", "Impact point marker"],
  },
  {
    label: "Leaderboard",
    component: LeaderboardScreen,
    title: "Friends Leaderboard",
    body: "Stay motivated by competing with friends on weekly improvement challenges. Share your best swings, celebrate progress, and keep each other accountable.",
    points: ["Weekly swing challenges", "Share videos with friends", "Progress streak tracking"],
  },
];

export default function AppPreviewSection() {
  const [active, setActive] = useState(0);
  const ref = useScrollAnimation();

  const screen = screens[active];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden scroll-animate">
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
            Every screen is designed to make coaching simple, visual, and actionable.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Phone / mockup display */}
          <div className="flex justify-center lg:w-80 shrink-0">
            {"mockupSrc" in screen ? (
              <div className="transition-all duration-500">
                <Image
                  src={screen.mockupSrc}
                  alt={screen.alt}
                  width={280}
                  height={605}
                  className="w-[240px] sm:w-[280px] lg:w-[300px] h-auto drop-shadow-2xl"
                  priority
                />
              </div>
            ) : (
              <PhoneMockup screen={<screen.component />} tilt="none" />
            )}
          </div>

          {/* Tabs + description */}
          <div className="flex-1 max-w-xl w-full">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {screens.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active === i
                      ? "bg-[#2E7D32] text-white shadow-md"
                      : "bg-[#F3F4F6] text-[#374151] hover:bg-[#E8F5E9] hover:text-[#2E7D32]"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Description */}
            <ScreenDesc
              title={screen.title}
              body={screen.body}
              points={screen.points}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ScreenDesc({ title, body, points }: { title: string; body: string; points: string[] }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#111111] mb-3">{title}</h3>
      <p className="text-[#6B7280] leading-relaxed mb-5">{body}</p>
      <ul className="flex flex-col gap-2">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-sm text-[#374151]">
            <div className="w-5 h-5 rounded-full bg-[#E8F5E9] flex items-center justify-center shrink-0">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2 2 4-4" stroke="#2E7D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
