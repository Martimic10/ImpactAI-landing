import Link from "next/link";
import { AppleIcon } from "@/components/icons/StoreIcons";

interface AppStoreButtonsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

/** iOS-only store CTA (no Google Play). */
export default function AppStoreButtons({
  size = "md",
  className = "",
}: AppStoreButtonsProps) {
  const sizeClasses = {
    sm: "px-4 py-2.5 gap-2",
    md: "px-5 py-3 gap-2.5",
    lg: "px-6 py-3.5 gap-3",
  };

  const iconSize = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7",
  };

  const textSize = {
    sm: "text-[10px] font-normal",
    md: "text-[11px] font-normal",
    lg: "text-[12px] font-normal",
  };

  const titleSize = {
    sm: "text-[13px] font-semibold",
    md: "text-[15px] font-semibold",
    lg: "text-[17px] font-semibold",
  };

  return (
    <div className={className}>
      <Link
        href="#download"
        aria-label="Coming soon on the App Store for iOS"
        className={`inline-flex items-center ${sizeClasses[size]} rounded-2xl bg-white text-black shadow-lg transition-all duration-300 hover:bg-zinc-100 hover:shadow-xl hover:-translate-y-0.5`}
      >
        <AppleIcon className={`${iconSize[size]} shrink-0`} />
        <div className="flex flex-col text-left leading-tight">
          <span className={`${textSize[size]} uppercase tracking-wider opacity-70`}>
            Coming soon on the
          </span>
          <span className={titleSize[size]}>App Store</span>
        </div>
      </Link>
    </div>
  );
}
