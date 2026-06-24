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
    q: "What is Impact Golf?",
    a: "Impact Golf is a social golf competition app. Create rounds with friends, track scores live, complete challenges, and climb your group leaderboard every week.",
  },
  {
    q: "Can I compete with friends?",
    a: "Yes. Leaderboards, weekly rankings, and in-round challenges are built for foursomes, friend groups, and golf leagues.",
  },
  {
    q: "How do groups work?",
    a: "Create a crew, invite your regular playing partners, and every round updates your group standings. See who's on top and who's chasing.",
  },
  {
    q: "Is the app available on iOS?",
    a: "Impact Golf is launching on iOS first. Tap Download for iPhone to get it when it's live on the App Store.",
  },
  {
    q: "How do challenges work?",
    a: "During a round, your group can run side competitions like longest drive or closest to the pin. Winners are tracked automatically.",
  },
  {
    q: "Is there a free version?",
    a: "Yes. Start free with unlimited rounds, groups, leaderboards, and challenges. Pro adds advanced stats, seasons, and premium game modes.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-pad bg-background">
      <div className="mx-auto max-w-3xl min-w-0 px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.08, 0.04)}
        >
          <m.div variants={fadeUpVariants} className="text-center">
            <p className="section-label mb-3">FAQ</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Questions, answered.
            </h2>
          </m.div>

          <m.div variants={cascadeVariants(0.06, 0.1)} className="mt-8 sm:mt-12">
            <Accordion className="flex flex-col gap-3">
              {faqs.map((item, i) => (
                <m.div key={item.q} variants={fadeUpSoftVariants}>
                  <AccordionItem
                    value={`faq-${i}`}
                    className="overflow-hidden rounded-2xl border border-border bg-card px-1 shadow-sm transition-colors hover:border-brand/25"
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
