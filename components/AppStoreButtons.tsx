import Link from "next/link";
import { AppleIcon, GooglePlayIcon } from "@/components/icons/StoreIcons";

interface AppStoreButtonsProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

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
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {/* App Store */}
      <Link
        href="#"
        aria-label="Coming Soon on the App Store"
        className={`inline-flex items-center ${sizeClasses[size]} bg-foreground text-background rounded-2xl hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-primary dark:hover:text-primary-foreground`}
      >
        <AppleIcon className={`${iconSize[size]} flex-shrink-0 text-background dark:text-zinc-900 group-hover:text-white dark:group-hover:text-primary-foreground`} />
        <div className="flex flex-col text-left leading-tight">
          <span className={`${textSize[size]} opacity-80 uppercase tracking-wider`}>
            Coming Soon on the
          </span>
          <span className={titleSize[size]}>App Store</span>
        </div>
      </Link>

      {/* Google Play */}
      <Link
        href="#"
        aria-label="Coming Soon on Google Play"
        className={`inline-flex items-center ${sizeClasses[size]} bg-foreground text-background rounded-2xl hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-primary dark:hover:text-primary-foreground`}
      >
        <GooglePlayIcon className={`${iconSize[size]} flex-shrink-0`} />
        <div className="flex flex-col text-left leading-tight">
          <span className={`${textSize[size]} opacity-80 uppercase tracking-wider`}>
            Coming Soon on
          </span>
          <span className={titleSize[size]}>Google Play</span>
        </div>
      </Link>
    </div>
  );
}
