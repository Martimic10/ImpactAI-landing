"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Loads a smaller Framer Motion feature set so initial JS is lighter (especially on mobile).
 */
export function MotionLazyProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
