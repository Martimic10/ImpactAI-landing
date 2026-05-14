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
  /**
   * Pin outer frame to the same 290×572 footprint as PhoneMockup (object-contain screenshot).
   * Use in horizontal rails so every mockup matches the AI coach device size.
   */
  fitShell?: boolean;
};

export function ImagePhone({
  src,
  alt,
  width = MOCKUP_IMAGE_W,
  height = MOCKUP_IMAGE_H,
  className,
  priority,
  fitShell,
}: ImagePhoneProps) {
  if (fitShell) {
    return (
      <div
        className={cn(
          "relative overflow-hidden rounded-[2.6rem] border-[2.5px] border-[#333] bg-[#0a0a0a] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85)]",
          className
        )}
        style={{ width: MOCKUP_SHELL_W, height: MOCKUP_SHELL_H }}
      >
        <div className="absolute top-3 left-1/2 z-10 flex h-[26px] w-[88px] -translate-x-1/2 items-center justify-center gap-2 rounded-full bg-[#0a0a0a]">
          <div className="h-2.5 w-2.5 rounded-full border border-[#2a2a2a] bg-[#1a1a1a]" />
          <div className="h-[14px] w-[34px] rounded-full border border-[#2a2a2a] bg-[#1a1a1a]" />
        </div>
        <div className="absolute inset-0 z-[1]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={`${MOCKUP_SHELL_W}px`}
            className="select-none object-contain object-top"
            priority={priority}
            draggable={false}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[2] rounded-[2.45rem] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2.35rem] border border-white/[0.12] bg-[#0c0c0c] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.85)]",
        className
      )}
    >
      <div className="absolute top-2.5 left-1/2 z-10 h-[26px] w-[88px] -translate-x-1/2 rounded-full bg-black/90 ring-1 ring-white/[0.08]" />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full select-none"
        priority={priority}
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[2.35rem] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent" />
    </div>
  );
}
