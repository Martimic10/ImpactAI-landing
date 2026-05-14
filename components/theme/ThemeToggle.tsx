"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
      className={cn(
        "relative h-7 w-14 shrink-0 rounded-full p-0.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isDark ? "bg-brand/85" : "bg-zinc-500",
        className
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isDark ? "translate-x-7" : "translate-x-0"
        )}
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-emerald-900" strokeWidth={2.5} />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" strokeWidth={2.5} />
        )}
      </span>
      <span className="flex h-full items-center justify-between px-1 opacity-35">
        <Sun className="h-2.5 w-2.5 text-white" strokeWidth={2} aria-hidden />
        <Moon className="h-2.5 w-2.5 text-white" strokeWidth={2} aria-hidden />
      </span>
    </button>
  );
}
