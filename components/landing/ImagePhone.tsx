"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { MOCKUP_IMAGE_H, MOCKUP_IMAGE_W, MOCKUP_SHELL_H, MOCKUP_SHELL_W } from "@/lib/mockup-size";

type ImagePhoneProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  /** Responsive `sizes` for next/image (important for mobile bandwidth). */
  sizes?: string;
  /**
   * Fixed-size slot for rails / grids. No extra bezel — PNG includes its own device frame.
   */
  fitShell?: boolean;
  /** Hero layout: no clip mask so full PNGs show. */
  bare?: boolean;
  /** Skip multiply blend (e.g. horizontal rails where matte reads as white bars). */
  noBlend?: boolean;
  /** Shadow intensity — soft/none for dense rails to avoid gray halos. */
  shadow?: "default" | "soft" | "none";
};

/** PNGs include device chrome — multiply knocks out light mattes on page bg. */
const mockupImageCore =
  "select-none object-contain object-center mix-blend-multiply";

const mockupShadowClass = {
  default: "drop-shadow-[0_20px_44px_rgba(0,0,0,0.14)]",
  soft: "drop-shadow-[0_16px_36px_rgba(0,0,0,0.07)]",
  none: "",
} as const;

const mockupWrap = "relative bg-transparent";
const mockupWrapBare = "relative bg-transparent";

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
  noBlend,
  shadow = "default",
}: ImagePhoneProps) {
  const imageClass = cn(
    mockupImageCore,
    mockupShadowClass[shadow],
    noBlend && "mix-blend-normal"
  );
  const wrapClass = bare ? mockupWrapBare : mockupWrap;
  if (fitShell) {
    const resolvedSizes = sizes ?? defaultFitSizes;
    return (
      <div
        className={cn(
          wrapClass,
          "relative mx-auto aspect-[290/572] w-full max-w-[min(100%,var(--phone-shell-max,320px))]",
          className
        )}
      >
        <div className="absolute inset-0 z-[1]">
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
      </div>
    );
  }

  const resolvedSizes =
    sizes ?? "(max-width: 640px) 60vw, (max-width: 1024px) 45vw, 360px";

  return (
    <div className={cn(wrapClass, className)}>
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
