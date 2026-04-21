interface PhoneMockupProps {
  screen: React.ReactNode;
  className?: string;
  tilt?: "left" | "right" | "none";
}

export default function PhoneMockup({
  screen,
  className = "",
  tilt = "none",
}: PhoneMockupProps) {
  const tiltClass = {
    left: "-rotate-6",
    right: "rotate-6",
    none: "",
  };

  return (
    <div
      className={`relative ${tiltClass[tilt]} ${className} transition-transform duration-500`}
    >
      {/* Phone shell */}
      <div className="relative w-[220px] h-[440px] sm:w-[260px] sm:h-[520px] bg-[#111111] rounded-[3rem] shadow-2xl border-[3px] border-[#2a2a2a] overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-[#111111] rounded-b-2xl z-10 flex items-center justify-center gap-1">
          <div className="w-2 h-2 bg-[#2a2a2a] rounded-full" />
          <div className="w-10 h-1.5 bg-[#2a2a2a] rounded-full" />
        </div>

        {/* Side buttons */}
        <div className="absolute right-[-5px] top-20 w-1 h-8 bg-[#333] rounded-r-sm" />
        <div className="absolute left-[-5px] top-16 w-1 h-6 bg-[#333] rounded-l-sm" />
        <div className="absolute left-[-5px] top-24 w-1 h-8 bg-[#333] rounded-l-sm" />

        {/* Screen */}
        <div className="absolute inset-0 bg-white overflow-hidden">{screen}</div>

        {/* Screen glare */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none z-20 rounded-[2.8rem]" />
      </div>

      {/* Phone shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-6 bg-black/20 blur-xl rounded-full" />
    </div>
  );
}
