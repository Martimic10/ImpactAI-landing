"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AppStoreButtons from "@/components/AppStoreButtons";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  cascadeVariants,
  easeSmooth,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-100/50 via-background to-background dark:from-emerald-950/35 dark:via-background dark:to-background pointer-events-none" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-emerald-100/70 dark:bg-emerald-900/25 blur-3xl opacity-60 dark:opacity-80 pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-80 h-80 rounded-full bg-emerald-200/50 dark:bg-emerald-800/15 blur-3xl opacity-40 dark:opacity-60 pointer-events-none" />

      <motion.div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-28"
        initial={{ opacity: 0, y: 16 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeSmooth },
        }}
      >
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={cascadeVariants(0.12, 0.06)}
        >
          <motion.div
            className="flex flex-col items-start max-w-xl"
            variants={cascadeVariants(0.08, 0)}
          >
            <motion.div variants={fadeUpSoftVariants} className="impact-badge mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              AI-Powered Golf Coaching
            </motion.div>

            <motion.h1
              variants={fadeUpSoftVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance mb-6"
            >
              Fix Your Golf Swing{" "}
              <span className="text-gradient-green">With AI</span>
            </motion.h1>

            <motion.p
              variants={fadeUpSoftVariants}
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg"
            >
              Record your swing, get instant coaching feedback, visual analysis,
              drills, and progress tracking — right from your phone.
            </motion.p>

            <motion.div variants={fadeUpSoftVariants} className="mb-8">
              <AppStoreButtons size="lg" />
            </motion.div>

            <motion.div
              variants={fadeUpSoftVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-sm text-muted-foreground"
            >
              {[
                "Built for all skill levels",
                "Faster than booking a lesson",
                "Personalized feedback in seconds",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-primary flex-shrink-0"
                  >
                    <path
                      d="M3 8l3.5 3.5L13 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpSoftVariants}>
              <Link
                href="#how-it-works"
                className="mt-8 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group text-sm"
              >
                <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                  <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-primary group-hover:border-l-white border-b-[5px] border-b-transparent ml-0.5" />
                </div>
                See How It Works
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="relative flex justify-center lg:justify-end items-end h-[480px] sm:h-[560px] lg:h-[620px]"
          >
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-primary/15 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none z-0" />

            <motion.div
              className="absolute bottom-4 right-0 sm:right-4 lg:right-0 z-0 rotate-6 origin-bottom pointer-events-none"
              initial={{ opacity: 0, x: 36, rotate: 8 }}
              animate={{
                opacity: 0.85,
                x: 0,
                rotate: 6,
                transition: { duration: 0.65, ease: easeSmooth, delay: 0.35 },
              }}
            >
              <Image
                src="/results-screen-removebg-preview.png"
                alt="Results screen"
                width={220}
                height={475}
                className="w-[170px] sm:w-[210px] lg:w-[230px] h-auto opacity-85 drop-shadow-xl dark:opacity-95"
                priority
              />
            </motion.div>

            <motion.div
              className="relative z-10 -translate-x-6 sm:-translate-x-10 pointer-events-none"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.68, ease: easeSmooth, delay: 0.2 },
              }}
            >
              <Image
                src="/Analyze-screen-removebg-preview.png"
                alt="Analyze screen"
                width={270}
                height={583}
                className="w-[210px] sm:w-[255px] lg:w-[285px] h-auto drop-shadow-2xl dark:drop-shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeSmooth, delay: 0.75 },
        }}
      >
        <Link
          href="#how-it-works"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
