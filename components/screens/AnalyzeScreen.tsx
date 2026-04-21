export default function AnalyzeScreen() {
  return (
    <div className="h-full bg-[#0a0a0a] flex flex-col pt-8">
      {/* Header */}
      <div className="px-4 pt-2 pb-3">
        <p className="text-[#66BB6A] text-[9px] font-semibold uppercase tracking-widest">
          ImpactAI
        </p>
        <h3 className="text-white text-sm font-bold mt-0.5">Analyze Swing</h3>
      </div>

      {/* Video frame mock */}
      <div className="relative mx-4 rounded-xl overflow-hidden bg-[#1a1a1a] flex-1 max-h-48 flex items-center justify-center">
        <div className="absolute inset-0 flex items-end">
          {/* Silhouette */}
          <svg viewBox="0 0 120 140" className="w-20 mx-auto mb-2 opacity-50" fill="none">
            <circle cx="60" cy="18" r="12" fill="#66BB6A" />
            <line x1="60" y1="30" x2="60" y2="85" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="50" x2="30" y2="70" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="50" x2="90" y2="40" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="85" x2="40" y2="115" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
            <line x1="60" y1="85" x2="80" y2="115" stroke="#66BB6A" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        {/* Overlay lines */}
        <div className="absolute top-3 left-3 right-3 bottom-3 border border-[#2E7D32]/30 rounded-lg" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#66BB6A]/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full border-2 border-[#66BB6A] flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-[#66BB6A] border-b-[6px] border-b-transparent ml-1" />
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex justify-between">
          <span className="text-[#66BB6A] text-[7px] font-mono">REC ●</span>
          <span className="text-white/60 text-[7px] font-mono">0:04</span>
        </div>
      </div>

      {/* Stats row */}
      <div className="px-4 py-2 flex gap-2">
        {["Tempo", "Path", "Face"].map((label, i) => (
          <div key={label} className="flex-1 bg-[#1a1a1a] rounded-lg p-2 text-center">
            <div className="text-[#66BB6A] text-xs font-bold">
              {["87°", "+2°", "0°"][i]}
            </div>
            <div className="text-white/50 text-[7px] mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="px-4 pb-6">
        <div className="w-full py-2.5 rounded-xl bg-[#2E7D32] text-center text-white text-xs font-bold shadow-lg">
          Analyze Swing →
        </div>
      </div>
    </div>
  );
}
