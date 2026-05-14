/**
 * Canonical on-page phone size — matches PhoneMockup at the large (sm+) breakpoint.
 * Use for ImagePhone screenshots and PhoneMockup shell everywhere for visual parity.
 */
export const MOCKUP_SHELL_W = 290;
export const MOCKUP_SHELL_H = 572;

/** ImagePhone / Next.Image intrinsic size (PNG art is authored at 280×605). */
export const MOCKUP_IMAGE_W = MOCKUP_SHELL_W;
export const MOCKUP_IMAGE_H = Math.round((MOCKUP_IMAGE_W * 605) / 280);
