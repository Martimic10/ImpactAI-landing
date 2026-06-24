"use client";

import { useCallback, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { ImagePhone } from "@/components/landing/ImagePhone";
import {
  cascadeVariants,
  defaultViewport,
  fadeUpSoftVariants,
  fadeUpVariants,
} from "@/components/motion/scroll-motion";
import { screenshotRail } from "@/lib/mockups";

export default function ScreenshotsRailSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || e.pointerType === "touch") return;
    const el = railRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.classList.add("cursor-grabbing");
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = railRef.current;
    if (!el || !dragRef.current.active) return;
    if (!el.hasPointerCapture(e.pointerId)) return;
    const dx = e.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startScroll - dx;
  }, []);

  const endPointerDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = railRef.current;
    if (!el) return;
    if (dragRef.current.active) {
      dragRef.current.active = false;
      el.classList.remove("cursor-grabbing");
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
    }
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    const onWheelNative = (e: WheelEvent) => {
      const canScrollX = el.scrollWidth > el.clientWidth;
      if (!canScrollX) return;
      const dominantX = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (dominantX && e.deltaX !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaX;
        return;
      }
      if (e.shiftKey && e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };
    el.addEventListener("wheel", onWheelNative, { passive: false });
    return () => el.removeEventListener("wheel", onWheelNative);
  }, []);

  return (
    <section id="screenshots" className="relative bg-background py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
          className="text-center"
        >
          <m.div variants={fadeUpVariants}>
            <p className="section-label mb-3">App Screenshots</p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
              Built for competition.
            </h2>
          </m.div>
        </m.div>
      </div>

      <m.div
        className="mt-14 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.08)}
      >
        <div
          ref={railRef}
          role="region"
          aria-label="App screenshots"
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointerDrag}
          onPointerCancel={endPointerDrag}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible scroll-smooth overscroll-x-contain py-2 pl-4 pr-4 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pl-6 sm:pr-6 lg:pl-8 lg:pr-8 [@media(pointer:fine)]:cursor-grab [@media(pointer:fine)]:select-none [@media(pointer:fine)]:touch-none"
          style={{
            scrollPaddingLeft: "1rem",
            scrollPaddingRight: "1rem",
          }}
        >
          {screenshotRail.map((shot) => (
            <m.div
              key={shot.key}
              variants={fadeUpSoftVariants}
              className="w-[min(82vw,300px)] shrink-0 snap-start sm:w-[300px] lg:w-[320px]"
            >
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {shot.label}
              </p>
              <div className="flex w-full items-center justify-center pb-2">
                <ImagePhone src={shot.src} alt={shot.alt} fitShell shadow="soft" />
              </div>
            </m.div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
