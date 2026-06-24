"use client";

import { useState } from "react";
import Image from "next/image";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const tabs = [
  {
    id: "crew",
    label: "Create Crew",
    description:
      "Invite your regular foursome and set up your golf group in minutes.",
    mockup: "/social-mockup-removebg-preview.png",
    alt: "Create your golf group",
  },
  {
    id: "round",
    label: "Live Round",
    description:
      "Track scores live during the round — every hole updates in real time.",
    mockup: "/results-mockup1-removebg-preview.png",
    alt: "Live score tracking during a round",
  },
  {
    id: "compete",
    label: "Compete",
    description:
      "See standings, achievements, and challenge winners when the round ends.",
    mockup: "/friends-mockup-removebg-preview.png",
    alt: "Group leaderboard and standings",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function HowItWorksSection() {
  const [active, setActive] = useState<TabId>(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section id="how-it-works" className="section-pad bg-background">
      <div className="mx-auto max-w-6xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.12, 0.06)}
        >
          <m.div variants={fadeUpVariants} className="px-1 text-center">
            <p className="section-label mb-3">How it works</p>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Every round, a new competition.
            </h2>
          </m.div>

          <m.div variants={fadeUpVariants} className="mt-12 sm:mt-16">
            <div className="flex justify-center px-2">
              <div
                className="inline-flex max-w-full flex-wrap justify-center gap-1 rounded-full bg-foreground p-1.5 shadow-lg sm:flex-nowrap sm:gap-0"
                role="tablist"
                aria-label="How Impact Golf works"
              >
                {tabs.map((tab) => {
                  const isActive = active === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="how-it-works-panel"
                      id={`how-it-works-tab-${tab.id}`}
                      onClick={() => setActive(tab.id)}
                      className={cn(
                        "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 sm:px-6",
                        isActive
                          ? "bg-card text-foreground shadow-sm"
                          : "text-background/65 hover:text-background"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 min-h-[3.5rem] px-4 text-center sm:mt-8">
              <AnimatePresence mode="wait">
                <m.p
                  key={activeTab.id}
                  id="how-it-works-panel"
                  role="tabpanel"
                  aria-labelledby={`how-it-works-tab-${activeTab.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.22 }}
                  className="mx-auto max-w-lg text-base text-muted-foreground sm:text-lg"
                >
                  {activeTab.description}
                </m.p>
              </AnimatePresence>
            </div>

            <div className="relative mx-auto mt-10 w-full max-w-[min(72vw,280px)] sm:mt-12 sm:max-w-[300px] lg:max-w-[320px]">
              <div className="relative aspect-[290/572] w-full">
                <AnimatePresence mode="wait">
                  <m.div
                    key={activeTab.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeTab.mockup}
                      alt={activeTab.alt}
                      fill
                      sizes="(max-width: 640px) 72vw, 320px"
                      className="select-none object-contain object-center mix-blend-multiply drop-shadow-[0_20px_44px_rgba(0,0,0,0.14)]"
                      priority={activeTab.id === tabs[0].id}
                      draggable={false}
                    />
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
