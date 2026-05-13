"use client";

import { motion } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import {
  Brain,
  PlayCircle,
  Eye,
  Zap,
  BookOpen,
  GitCompare,
  BarChart3,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Swing Analysis",
    description:
      "Frame-by-frame AI evaluates your swing plane, face angle, path, tempo, and impact position with professional precision.",
    highlight: true,
  },
  {
    icon: PlayCircle,
    title: "Slow Motion Playback",
    description:
      "Review your swing at any speed. Scrub frame-by-frame to pinpoint exactly where your form breaks down.",
  },
  {
    icon: Eye,
    title: "Visual Swing Overlay",
    description:
      "See your actual swing path drawn over your video with ideal path comparison — making corrections instantly clear.",
  },
  {
    icon: Zap,
    title: "Impact Snapshot",
    description:
      "AI identifies your exact impact frame and grades your clubface position, path, and power transfer at the moment of contact.",
    highlight: true,
  },
  {
    icon: BookOpen,
    title: "Auto Lesson Recommendations",
    description:
      "Based on your analysis, ImpactAI automatically suggests the most relevant lessons and drills for your specific faults.",
  },
  {
    icon: GitCompare,
    title: "Ghost Swing Comparison",
    description:
      "Overlay your swing against an ideal path or a previous swing to visualize exactly what changed and what to fix.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description:
      "Every swing is stored. Watch your scores improve over time with detailed metrics and trend analysis.",
    highlight: true,
  },
  {
    icon: Trophy,
    title: "Friends Leaderboard",
    description:
      "Compete with friends, share swings, and stay motivated with weekly challenges and improvement streaks.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/80 dark:bg-muted/40">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.04)}
      >
        <motion.div variants={fadeUpVariants} className="text-center mb-16">
          <div className="impact-badge mb-4 mx-auto w-fit">Full Feature Set</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Everything You Need to Improve
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ImpactAI packs professional-grade coaching tools into a clean,
            intuitive mobile experience.
          </p>
        </motion.div>

        <motion.div
          variants={cascadeVariants(0.06, 0.06)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUpSoftVariants}
              className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-default ${
                feature.highlight
                  ? "bg-card border border-primary/35 shadow-md dark:border-primary/40 dark:shadow-primary/5"
                  : "bg-card border border-border shadow-sm dark:shadow-none"
              }`}
            >
              {feature.highlight && (
                <div className="absolute -top-2.5 left-4">
                  <span className="bg-primary text-primary-foreground text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                    Key Feature
                  </span>
                </div>
              )}

              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  feature.highlight
                    ? "bg-accent/80 group-hover:bg-primary dark:bg-accent/50"
                    : "bg-muted group-hover:bg-accent/60 dark:group-hover:bg-accent/40"
                }`}
              >
                <feature.icon
                  size={20}
                  className={`transition-colors ${
                    feature.highlight
                      ? "text-primary group-hover:text-primary-foreground"
                      : "text-muted-foreground group-hover:text-primary"
                  }`}
                />
              </div>

              <h3 className="font-bold text-foreground mb-2 text-sm">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
