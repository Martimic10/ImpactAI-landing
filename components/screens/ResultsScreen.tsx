export default function ResultsScreen() {
  const scores = [
    { label: "Swing Plane", score: 82, color: "#66BB6A" },
    { label: "Hip Rotation", score: 74, color: "#4CAF50" },
    { label: "Follow Through", score: 91, color: "#2E7D32" },
    { label: "Tempo", score: 68, color: "#81C784" },
  ];

  return (
    <div className="h-full bg-white flex flex-col pt-8">
      {/* Header */}
      <div className="px-4 pt-2 pb-3 flex items-center justify-between">
        <div>
          <p className="text-[#2E7D32] text-[9px] font-semibold uppercase tracking-widest">
            Analysis Complete
          </p>
          <h3 className="text-[#111] text-sm font-bold">Your Results</h3>
        </div>
        <div className="w-10 h-10 rounded-full gradient-green flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">79</span>
        </div>
      </div>

      {/* Score bars */}
      <div className="px-4 flex flex-col gap-2.5 flex-1">
        {scores.map((item) => (
          <div key={item.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[#374151] text-[9px] font-medium">{item.label}</span>
              <span className="text-[10px] font-bold" style={{ color: item.color }}>
                {item.score}
              </span>
            </div>
            <div className="h-1.5 bg-[#F3F4F6] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.score}%`,
                  backgroundColor: item.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Insight card */}
      <div className="mx-4 mb-4 bg-[#E8F5E9] rounded-xl p-3">
        <p className="text-[#1B5E20] text-[9px] font-semibold mb-0.5">AI Insight</p>
        <p className="text-[#2E7D32] text-[8px] leading-relaxed">
          Focus on hip rotation during transition. Try the hip drill recommended below.
        </p>
      </div>

      {/* CTA */}
      <div className="px-4 pb-6">
        <div className="w-full py-2.5 rounded-xl bg-[#2E7D32] text-center text-white text-xs font-bold shadow">
          View Lessons →
        </div>
      </div>
    </div>
  );
}
