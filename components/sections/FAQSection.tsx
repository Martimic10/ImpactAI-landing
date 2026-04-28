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
      "ImpactAI uses AI-powered motion analysis to break down your swing frame-by-frame. It evaluates your setup, posture, swing path, tempo, balance, and contact to give you clear, actionable feedback—just like a real coach.",
  },
  {
    question: "What do I need to record a good swing?",
    answer:
      "All you need is your phone. For best results, record your full body and club from either a down-the-line or face-on angle with good lighting. No special equipment is required.",
  },
  {
    question: "How accurate is the analysis?",
    answer:
      "ImpactAI is designed to give realistic, coach-style feedback based on what's visible in your swing. While it's not a replacement for in-person coaching, it provides highly useful insights to help you improve faster and more consistently.",
  },
  {
    question: "Can I use any club?",
    answer:
      "Yes. You can select from driver, woods, irons, and wedges, and ImpactAI adjusts its analysis based on the club you're using to give more relevant feedback.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Yes. Every swing is saved so you can review past sessions, compare swings, and see how your scores and mechanics improve over time.",
  },
  {
    question: "Can I compare my swings?",
    answer:
      "Yes. You can compare your current swing to previous ones to see what's improved, what's changed, and what still needs work—all side-by-side.",
  },
  {
    question: "Do I need a subscription to use ImpactAI?",
    answer:
      "You can start with a limited free version. The Pro plan unlocks unlimited analyses, advanced feedback, and additional features designed to help you improve faster.",
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
