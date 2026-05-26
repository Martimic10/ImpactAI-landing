/** Shared easing for scroll / entrance motion */
export const easeSmooth = [0.22, 1, 0.36, 1] as const;

export const defaultViewport = { once: true, amount: 0.08 as const };

/** Single block: fade + lift */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeSmooth },
  },
} as const;

/** Slightly subtler motion for dense grids */
export const fadeUpSoftVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeSmooth },
  },
} as const;

/** Parent: stagger direct children */
export const cascadeVariants = (
  staggerChildren = 0.08,
  delayChildren = 0.04
) =>
  ({
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  }) as const;
