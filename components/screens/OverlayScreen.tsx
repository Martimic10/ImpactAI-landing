export default function OverlayScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col pt-8">
      {/* Header */}
      <div className="px-4 pt-2 pb-2">
        <p className="text-[#66BB6A] text-[9px] font-semibold uppercase tracking-widest">
          Visual Analysis
        </p>
        <h3 className="text-white text-sm font-bold">Swing Overlay</h3>
      </div>

      {/* Overlay visualization */}
      <div className="relative mx-4 rounded-xl overflow-hidden bg-[#111] flex-1 max-h-52">
        <svg viewBox="0 0 180 200" className="w-full h-full" fill="none">
          {/* Background grid */}
          <line x1="0" y1="100" x2="180" y2="100" stroke="#1a1a1a" strokeWidth="0.5" />
          <line x1="90" y1="0" x2="90" y2="200" stroke="#1a1a1a" strokeWidth="0.5" />

          {/* Ideal swing path (ghost) */}
          <path
            d="M30 160 Q60 100 90 60 Q120 30 150 40"
            stroke="#66BB6A"
            strokeWidth="1.5"
            strokeDasharray="4 2"
            opacity="0.5"
          />

          {/* Your swing path */}
          <path
            d="M30 160 Q55 105 85 72 Q115 45 148 55"
            stroke="#66BB6A"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Golfer silhouette */}
          <circle cx="90" cy="55" r="8" fill="#2E7D32" />
          <line x1="90" y1="63" x2="90" y2="100" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="90" y1="78" x2="68" y2="90" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="78" x2="115" y2="70" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
          <line x1="90" y1="100" x2="74" y2="128" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="90" y1="100" x2="106" y2="128" stroke="#2E7D32" strokeWidth="2.5" strokeLinecap="round" />

          {/* Impact point highlight */}
          <circle cx="90" cy="130" r="5" fill="#66BB6A" opacity="0.3" />
          <circle cx="90" cy="130" r="2.5" fill="#66BB6A" />

          {/* Labels */}
          <text x="100" y="45" fill="#66BB6A" fontSize="5" fontFamily="monospace">IDEAL</text>
          <text x="100" y="70" fill="white" fontSize="5" fontFamily="monospace">YOURS</text>
          <text x="66" y="137" fill="#66BB6A" fontSize="5" fontFamily="monospace">IMPACT</text>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-2 left-2 right-2 flex gap-3">
          <div className="flex items-center gap-1">
            <div className="w-4 h-0.5 bg-[#66BB6A] opacity-50" style={{ borderTop: "1px dashed #66BB6A" }} />
            <span className="text-[#66BB6A] text-[6px]">Ideal Path</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-0.5 bg-[#66BB6A]" />
            <span className="text-white text-[6px]">Your Swing</span>
          </div>
        </div>
      </div>

      {/* Fix tip */}
      <div className="mx-4 mt-2 mb-4 bg-[#1a1a1a] rounded-xl p-2.5">
        <p className="text-[#66BB6A] text-[8px] font-semibold">Path Deviation: +2°</p>
        <p className="text-white/60 text-[7px] mt-0.5">Slightly outside-in. Watch Hip Drill #3.</p>
      </div>

      <div className="px-4 pb-6">
        <div className="w-full py-2.5 rounded-xl bg-[#2E7D32] text-center text-white text-xs font-bold">
          View Full Analysis →
        </div>
      </div>
    </div>
  );
}
