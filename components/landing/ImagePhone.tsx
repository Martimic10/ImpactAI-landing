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
};

/** No ring / dark mat: only soft depth so mockups read as floating screenshots. */
const mockupWrap =
  "relative overflow-hidden rounded-[2.75rem] bg-transparent shadow-[0_28px_64px_-32px_rgba(0,0,0,0.55)]";
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
}: ImagePhoneProps) {
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
            className="select-none object-contain object-center"
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
        className="h-auto w-full select-none"
        priority={priority}
        draggable={false}
      />
    </div>
  );
}
