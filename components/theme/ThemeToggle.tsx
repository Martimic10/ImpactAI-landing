"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.06] px-3 py-2 sm:px-4 sm:py-2.5",
        className
      )}
      suppressHydrationWarning
    >
      <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 hidden sm:inline">
        Theme
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={cn(
          "relative h-7 w-14 shrink-0 rounded-full p-0.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#66BB6A] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950",
          isDark ? "bg-emerald-700/90" : "bg-zinc-600"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            isDark ? "translate-x-7" : "translate-x-0"
          )}
        >
          {isDark ? (
            <Moon className="h-3 w-3 text-emerald-800" strokeWidth={2.5} />
          ) : (
            <Sun className="h-3 w-3 text-amber-500" strokeWidth={2.5} />
          )}
        </span>
        <span className="flex h-full items-center justify-between px-1 opacity-40">
          <Sun className="h-2.5 w-2.5 text-white" strokeWidth={2} aria-hidden />
          <Moon className="h-2.5 w-2.5 text-white" strokeWidth={2} aria-hidden />
        </span>
      </button>
    </div>
  );
}
