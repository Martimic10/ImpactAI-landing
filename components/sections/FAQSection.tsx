"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does ImpactAI analyze my golf swing?",
    answer:
      "ImpactAI uses computer vision and machine learning to analyze your swing video frame-by-frame. It evaluates over 20 swing metrics including club path, face angle, swing plane, hip rotation, tempo, and impact position. The AI then compares your swing against ideal biomechanical models and surfaces the most impactful areas to improve.",
  },
  {
    question: "Is ImpactAI for beginners or advanced golfers?",
    answer:
      "Both. ImpactAI adapts its feedback and drill recommendations to your skill level. Beginners get simplified, actionable feedback with foundational drills. Intermediate and advanced golfers get deeper metric breakdowns and targeted refinements. You can also set your level in the app.",
  },
  {
    question: "Can I use it for my driver, irons, and short game?",
    answer:
      "Yes. ImpactAI analyzes swings for all club types — driver, woods, irons, wedges, and even putting mechanics. Each club type has specific benchmarks and drill recommendations tailored to that club's requirements.",
  },
  {
    question: "Does ImpactAI replace a real golf coach?",
    answer:
      "ImpactAI is a powerful complement to coaching — not a replacement. It gives you instant, data-driven feedback between lessons so you can practice with purpose. Many golfers use it to apply their coach's advice more effectively and track whether changes are actually showing up in their swing.",
  },
  {
    question: "Is ImpactAI available on iPhone and Android?",
    answer:
      "ImpactAI is launching on both iOS and Android. The app is currently in development and preparing for release. Join the waitlist to be notified first and get early access.",
  },
  {
    question: "What do I get with the Pro plan?",
    answer:
      "Pro gives you unlimited swing analyses (vs. 5/month on Free), advanced visual overlays with ghosted ideal swing paths, the full lesson library with 50+ drills, complete progress tracking history, friends leaderboard, and deep impact frame analysis. At $8/month, it's less than the cost of a single range lesson.",
  },
  {
    question: "How accurate is the AI analysis?",
    answer:
      "ImpactAI's analysis is built on validated biomechanical data and has been tested against professional swing coaches. While it's not a substitute for in-person coaching, it consistently identifies the same high-priority faults that certified instructors flag. Accuracy improves the better the video quality and angle.",
  },
];

export default function FAQSection() {
  const ref = useScrollAnimation();

  return (
    <section id="faq" ref={ref} className="py-24 bg-[#F9FAFB] scroll-animate">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Everything you need to know before downloading.
          </p>
        </div>

        {/* Accordion */}
        <Accordion className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={i}
              className="bg-white border border-[#E5E7EB] rounded-2xl px-6 shadow-sm open:border-[#A5D6A7] open:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-[#111111] hover:text-[#2E7D32] hover:no-underline py-5 text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#6B7280] leading-relaxed pb-5 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
