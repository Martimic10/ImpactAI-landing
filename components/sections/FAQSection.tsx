"use client";

import { m } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const faqs = [
  {
    q: "What is ImpactAI?",
    a: "ImpactAI is a social golf improvement app. Upload swings, track progress, compete on leaderboards with friends, and chat with an AI golf coach for personalized guidance.",
  },
  {
    q: "Does the app use AI?",
    a: "Yes. AI powers the coach chat, lightweight swing feedback, and personalized recommendations — always in service of helping you enjoy the game more, not overwhelming you with data.",
  },
  {
    q: "Can I compete with friends?",
    a: "Absolutely. Leaderboards, streaks, and challenges are built for small groups so you can stay motivated together.",
  },
  {
    q: "Is the app available on iOS?",
    a: "Impact Golf is launching on iOS first. Use the Download section to get the app when it’s live on the App Store.",
  },
  {
    q: "Can I upload swings?",
    a: "Yes. Upload from the range or course, review playback, and keep a timeline of how your game evolves.",
  },
  {
    q: "Is there a free version?",
    a: "You’ll be able to start free with core tracking and social features, with optional upgrades for deeper coaching and uploads.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-pad border-t border-white/[0.06] bg-black">
      <div className="mx-auto max-w-3xl min-w-0">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.08, 0.04)}
        >
          <m.div variants={fadeUpVariants} className="text-center">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Questions, answered.
            </h2>
          </m.div>

          <m.div variants={cascadeVariants(0.06, 0.1)} className="mt-8 sm:mt-12">
            <Accordion className="flex flex-col gap-3">
              {faqs.map((item, i) => (
                <m.div key={item.q} variants={fadeUpSoftVariants}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="overflow-hidden rounded-2xl border border-white/[0.08] bg-card/60 px-1 shadow-sm transition-colors hover:border-white/[0.12]"
                  >
                    <AccordionTrigger className="min-h-[3.25rem] items-center px-4 py-4 text-left text-[15px] font-medium leading-snug text-foreground hover:text-brand hover:no-underline sm:min-h-0 sm:items-start sm:px-5 sm:text-base">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground sm:px-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                </m.div>
              ))}
            </Accordion>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
