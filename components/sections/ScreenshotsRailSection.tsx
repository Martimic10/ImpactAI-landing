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

const shots = [
  {
    key: "social",
    label: "Social",
    node: (
      <ImagePhone
        src="/social-mockup-removebg-preview.png"
        alt="Social feed and activity"
        fitShell
      />
    ),
  },
  {
    key: "coach",
    label: "AI Coach",
    node: (
      <ImagePhone
        src="/coachai-mockup-removebg-preview.png"
        alt="AI golf coach chat"
        fitShell
      />
    ),
  },
  {
    key: "results",
    label: "Results",
    node: (
      <ImagePhone
        src="/results-mockup1-removebg-preview.png"
        alt="Swing analysis results"
        fitShell
      />
    ),
  },
  {
    key: "progress",
    label: "Progress",
    node: (
      <ImagePhone
        src="/progress-mockup1-removebg-preview.png"
        alt="Training progress over time"
        fitShell
      />
    ),
  },
  {
    key: "upload",
    label: "Upload",
    node: (
      <ImagePhone
        src="/Analyze-screen-removebg-preview.png"
        alt="Upload swing"
        fitShell
      />
    ),
  },
  {
    key: "friends",
    label: "Friends",
    node: (
      <ImagePhone
        src="/friends-mockup-removebg-preview.png"
        alt="Friends and compare"
        fitShell
      />
    ),
  },
];

export default function ScreenshotsRailSection() {
  const railRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
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
    <section id="screenshots" className="relative overflow-hidden bg-black py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={cascadeVariants(0.1, 0.04)}
          className="text-center"
        >
          <m.div variants={fadeUpVariants}>
            <p className="section-label mb-3">Screenshots</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for modern golfers.
            </h2>
            <p className="mx-auto mt-3 max-w-xl px-1 text-sm text-muted-foreground sm:mt-4 sm:text-base">
              Swipe on your phone, or on desktop{" "}
              <span className="whitespace-nowrap text-foreground/90">drag</span> /{" "}
              <span className="whitespace-nowrap text-foreground/90">Shift + scroll</span>{" "}
              sideways to see every screen.
            </p>
          </m.div>
        </m.div>
      </div>

      <m.div
        className="mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
        variants={cascadeVariants(0.12, 0.08)}
      >
        <div className="mx-auto max-w-6xl min-w-0">
          <div
            ref={railRef}
            role="region"
            aria-label="App screenshots. Drag horizontally or shift-scroll to browse."
            tabIndex={0}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endPointerDrag}
            onPointerCancel={endPointerDrag}
            className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible scroll-smooth pl-[max(1rem,env(safe-area-inset-left,0px))] pr-[max(1rem,env(safe-area-inset-right,0px))] pb-8 pt-2 touch-pan-x sm:-mx-6 sm:gap-6 sm:pl-6 sm:pr-6 lg:-mx-8 lg:pl-8 lg:pr-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [@media(pointer:fine)]:cursor-grab [@media(pointer:fine)]:select-none"
          >
            {shots.map((s) => (
              <m.div
                key={s.key}
                variants={fadeUpSoftVariants}
                className="group relative w-[min(calc(100vw-2.5rem),320px)] shrink-0 snap-center sm:w-[320px]"
              >
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-brand/0 opacity-0 blur-2xl transition duration-500 group-hover:bg-brand/15 group-hover:opacity-100" />
                <p className="mb-3 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
                <div className="flex min-h-[min(74svh,560px)] w-full items-center justify-center pb-2 sm:min-h-[min(80svh,640px)] lg:min-h-[640px]">
                  {s.node}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>
    </section>
  );
}
