"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    scrollWindowToTop();

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) scrollWindowToTop();
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useEffect(() => {
    scrollWindowToTop();
  }, [pathname]);

  return null;
}
