import Link from "next/link";
import { AppleIcon } from "@/components/icons/StoreIcons";
import { cn } from "@/lib/utils";

interface AppStoreButtonsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}

const sizeClasses = {
  sm: "gap-2 px-4 py-2.5 text-sm",
  md: "gap-2.5 px-5 py-3 text-sm",
  lg: "gap-3 px-7 py-3.5 text-base",
} as const;

const iconSizes = {
  sm: "size-[1.125rem]",
  md: "size-5",
  lg: "size-5",
} as const;

/** Pill download CTA with Apple logo. */
export default function AppStoreButtons({
  size = "md",
  className,
  href = "#download",
  fullWidth = false,
  onClick,
}: AppStoreButtonsProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-label="Download for iPhone"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#1a1a1a] font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.18)] transition-all duration-300 hover:bg-[#252525] hover:shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 active:translate-y-0",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      <AppleIcon className={cn(iconSizes[size], "shrink-0")} />
      <span>Download for iPhone</span>
    </Link>
  );
}
