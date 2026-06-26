import Image from "next/image";
import { BRAND_LOGO_SRC } from "@/lib/brand";
import { cn } from "@/lib/utils";

export { BRAND_LOGO_SRC };
export const BRAND_LOGO_ALT = "TeeUp";

type BrandLogoProps = {
  /** Navbar: compact square lockup. Footer: slightly larger. */
  variant?: "nav" | "footer";
  className?: string;
  priority?: boolean;
};

const variantClass = {
  nav: "h-10 w-10 sm:h-11 sm:w-11",
  footer: "h-11 w-11 sm:h-12 sm:w-12",
} as const;

/**
 * TeeUp logo styled like an iOS home-screen app icon (squircle + depth + gloss).
 */
export function BrandLogo({
  variant = "nav",
  className,
  priority = false,
}: BrandLogoProps) {
  const size = variant === "nav" ? 44 : 48;

  return (
    <span
      className={cn(
        "ios-app-icon relative inline-flex shrink-0 overflow-hidden bg-white",
        variantClass[variant],
        className
      )}
    >
      <Image
        src={BRAND_LOGO_SRC}
        alt={BRAND_LOGO_ALT}
        width={size}
        height={size}
        priority={priority}
        className="size-full object-cover object-center"
        sizes={variant === "nav" ? "44px" : "48px"}
      />
      <span
        className="ios-app-icon-gloss pointer-events-none absolute inset-0"
        aria-hidden
      />
    </span>
  );
}
