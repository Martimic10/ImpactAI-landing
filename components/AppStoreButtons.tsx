import Link from "next/link";

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
        className={`inline-flex items-center ${sizeClasses[size]} bg-[#111111] text-white rounded-2xl hover:bg-[#2E7D32] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group`}
      >
        <AppleIcon className={`${iconSize[size]} flex-shrink-0 text-white`} />
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
        className={`inline-flex items-center ${sizeClasses[size]} bg-[#111111] text-white rounded-2xl hover:bg-[#2E7D32] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group`}
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

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.7 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.55-1.28 3.08-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.18 1.05C2.86 1.38 2.67 1.9 2.67 2.57v18.86c0 .67.19 1.19.51 1.52l.08.08 10.56-10.56v-.25L3.26.97l-.08.08z"
        fill="#4FC3F7"
      />
      <path
        d="M17.34 15.5l-3.52-3.52v-.25l3.52-3.52.08.04 4.17 2.37c1.19.67 1.19 1.78 0 2.46l-4.17 2.37-.08.05z"
        fill="#FFCA28"
      />
      <path
        d="M17.42 15.45L13.82 11.85 3.18 22.49c.39.42 1.04.47 1.77.06l12.47-7.1"
        fill="#F48FB1"
      />
      <path
        d="M17.42 8.55L4.95 1.45C4.22 1.04 3.57 1.09 3.18 1.51l10.64 10.34 3.6-3.3z"
        fill="#A5D6A7"
      />
    </svg>
  );
}
