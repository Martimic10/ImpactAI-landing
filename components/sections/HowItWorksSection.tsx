"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { ImagePhone } from "@/components/landing/ImagePhone";
import { cn } from "@/lib/utils";
import { howItWorksTabs } from "@/lib/mockups";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

type TabId = (typeof howItWorksTabs)[number]["id"];

export default function HowItWorksSection() {
  const [active, setActive] = useState<TabId>(howItWorksTabs[0].id);
  const activeTab = howItWorksTabs.find((t) => t.id === active) ?? howItWorksTabs[0];

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
                {howItWorksTabs.map((tab) => {
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
                        "rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 sm:px-6 sm:py-3",
                        isActive
                          ? "bg-brand text-primary-foreground shadow-sm"
                          : "text-white/70 hover:text-white"
                      )}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center sm:mt-10">
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
              <AnimatePresence mode="wait">
                <m.div
                  key={activeTab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImagePhone
                    bare
                    src={activeTab.src}
                    alt={activeTab.alt}
                    priority={activeTab.id === howItWorksTabs[0].id}
                    sizes="(max-width: 640px) 72vw, 320px"
                  />
                </m.div>
              </AnimatePresence>
            </div>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
