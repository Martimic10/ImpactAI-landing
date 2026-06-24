/**
 * Canonical on-page mockup footprint — single size for rails, social, AI coach strip.
 * PNGs include their own device chrome; we only clip to this rounded rect (no double frame).
 */
/** iPhone 16 device-frame aspect (1274×2690). */
export const MOCKUP_SHELL_W = 320;
export const MOCKUP_SHELL_H = Math.round(MOCKUP_SHELL_W / (1274 / 2690));

/** Legacy Next/Image hint for non–fit-shell layouts. */
export const MOCKUP_IMAGE_W = MOCKUP_SHELL_W;
export const MOCKUP_IMAGE_H = MOCKUP_SHELL_H;
