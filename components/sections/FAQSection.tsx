"use client";

import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
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
  return (
    <section id="faq" className="py-24 bg-muted/80 dark:bg-muted/40">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.1, 0.04)}
      >
        <motion.div variants={fadeUpVariants} className="text-center mb-12">
          <div className="impact-badge mb-4 mx-auto w-fit">FAQs</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Common Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before downloading.
          </p>
        </motion.div>

        <motion.div variants={cascadeVariants(0.05, 0.06)}>
          <Accordion className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={fadeUpSoftVariants}>
                <AccordionItem
                  value={String(i)}
                  className="bg-card border border-border rounded-2xl px-6 shadow-sm open:border-primary/40 open:shadow-md transition-all duration-200 dark:shadow-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 text-sm sm:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </section>
  );
}
