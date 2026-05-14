/**
 * Canonical on-page mockup footprint — single size for rails, social, AI coach strip.
 * PNGs include their own device chrome; we only clip to this rounded rect (no double frame).
 */
export const MOCKUP_SHELL_W = 320;
/** Preserve ~290:572 visual ratio scaled to new width */
export const MOCKUP_SHELL_H = Math.round((MOCKUP_SHELL_W * 572) / 290);

/** Legacy Next/Image hint for non–fit-shell layouts (aspect from older 280×605 art). */
export const MOCKUP_IMAGE_W = MOCKUP_SHELL_W;
export const MOCKUP_IMAGE_H = Math.round((MOCKUP_IMAGE_W * 605) / 280);
