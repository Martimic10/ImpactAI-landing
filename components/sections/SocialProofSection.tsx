"use client";

import { m } from "framer-motion";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";

const stats = [
  { value: "2,400+", label: "Active rounds" },
  { value: "680+", label: "Groups created" },
  { value: "4,200+", label: "Players competing" },
];

export default function SocialProofSection() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
        >
          <m.p
            variants={fadeUpVariants}
            className="text-center text-sm text-muted-foreground sm:text-base"
          >
            Built for weekend golfers, friend groups, and golf leagues.
          </m.p>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
            {stats.map((stat) => (
              <m.div
                key={stat.label}
                variants={fadeUpSoftVariants}
                className="text-center"
              >
                <p className="stat-value text-brand">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
