"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { DEVICE_MOCKUP_ASPECT } from "@/lib/mockups";
import { MOCKUP_IMAGE_H, MOCKUP_IMAGE_W } from "@/lib/mockup-size";

type ImagePhoneProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  /** Responsive `sizes` for next/image (important for mobile bandwidth). */
  sizes?: string;
  /** Fixed-size slot for rails / grids. */
  fitShell?: boolean;
  /** Hero layout: full device render without extra wrapper constraints. */
  bare?: boolean;
  /** Shadow intensity */
  shadow?: "default" | "soft" | "none";
};

const mockupImageClass = "select-none object-contain object-center";

const mockupShadowClass = {
  default: "drop-shadow-[0_24px_48px_rgba(0,0,0,0.18)]",
  soft: "drop-shadow-[0_16px_36px_rgba(0,0,0,0.1)]",
  none: "",
} as const;

const defaultFitSizes =
  "(max-width: 640px) min(calc(100vw - 2rem), 360px), (max-width: 1024px) 40vw, 320px";

export function ImagePhone({
  src,
  alt,
  width = MOCKUP_IMAGE_W,
  height = MOCKUP_IMAGE_H,
  className,
  priority,
  sizes,
  fitShell,
  bare,
  shadow = "default",
}: ImagePhoneProps) {
  const imageClass = cn(mockupImageClass, mockupShadowClass[shadow]);

  if (fitShell) {
    const resolvedSizes = sizes ?? defaultFitSizes;
    return (
      <div
        className={cn(
          "relative mx-auto w-full max-w-[min(100%,var(--phone-shell-max,320px))]",
          className
        )}
        style={{ aspectRatio: String(DEVICE_MOCKUP_ASPECT) }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={resolvedSizes}
          className={imageClass}
          priority={priority}
          draggable={false}
        />
      </div>
    );
  }

  const resolvedSizes =
    sizes ?? "(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 360px";

  if (bare) {
    return (
      <div className={cn("relative w-full", className)} style={{ aspectRatio: String(DEVICE_MOCKUP_ASPECT) }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={resolvedSizes}
          className={imageClass}
          priority={priority}
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative bg-transparent", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={resolvedSizes}
        className={cn(imageClass, "h-auto w-full")}
        priority={priority}
        draggable={false}
      />
    </div>
  );
}
