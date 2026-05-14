interface PhoneMockupProps {
  screen: React.ReactNode;
  className?: string;
  tilt?: "left" | "right" | "none";
  /** Fixed shell width (px); height from 252×497 unless `shellHeight` is set. Omit both for default responsive sizes. */
  shellWidth?: number;
  shellHeight?: number;
}

export default function PhoneMockup({
  screen,
  className = "",
  tilt = "none",
  shellWidth,
  shellHeight,
}: PhoneMockupProps) {
  const tiltClass = {
    left: "-rotate-6",
    right: "rotate-6",
    none: "",
  };

  const derivedH =
    shellWidth != null
      ? Math.round((shellWidth * 497) / 252)
      : undefined;
  const shellH: number | undefined =
    shellWidth != null ? (shellHeight ?? derivedH) : undefined;

  return (
    <div
      className={`relative ${tiltClass[tilt]} ${className} transition-transform duration-500`}
    >
      {/* Outer shell — default 252 / 290; optional fixed shell for rails & grids */}
      <div
        className={
          shellWidth != null
            ? "relative bg-[#0a0a0a] rounded-[2.6rem] shadow-2xl border-[2.5px] border-[#333] overflow-hidden"
            : "relative w-[252px] h-[497px] sm:w-[290px] sm:h-[572px] bg-[#0a0a0a] rounded-[2.6rem] shadow-2xl border-[2.5px] border-[#333] overflow-hidden"
        }
        style={
          shellWidth != null && shellH != null
            ? { width: shellWidth, height: shellH }
            : undefined
        }
      >

        {/* Dynamic island notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 w-[88px] h-[26px] bg-[#0a0a0a] rounded-full flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-[#2a2a2a]" />
          <div className="w-[34px] h-[14px] bg-[#1a1a1a] rounded-full border border-[#2a2a2a]" />
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-3px] top-[88px] w-[3px] h-10 bg-[#2a2a2a] rounded-r-sm" />
        <div className="absolute left-[-3px] top-[72px] w-[3px] h-7 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-3px] top-[108px] w-[3px] h-10 bg-[#2a2a2a] rounded-l-sm" />

        {/* Screen — fills entire shell, content sits behind notch */}
        <div className="absolute inset-0 bg-[#111111] overflow-hidden">
          {screen}
        </div>

        {/* Subtle glass glare overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-transparent to-transparent pointer-events-none z-10 rounded-[2.4rem]" />
      </div>

      {/* Ground shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-5 bg-black/25 blur-xl rounded-full" />
    </div>
  );
}
