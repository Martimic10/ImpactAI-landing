export default function LeaderboardScreen() {
  const players = [
    { rank: 1, name: "Tyler M.", score: 94, badge: "🏆" },
    { rank: 2, name: "Sarah K.", score: 89, badge: "🥈" },
    { rank: 3, name: "You", score: 82, badge: "🥉", highlight: true },
    { rank: 4, name: "James R.", score: 77, badge: "" },
    { rank: 5, name: "Chris P.", score: 71, badge: "" },
  ];

  return (
    <div className="h-full bg-white flex flex-col pt-8">
      {/* Header */}
      <div className="px-4 pt-2 pb-3">
        <p className="text-[#2E7D32] text-[9px] font-semibold uppercase tracking-widest">
          This Week
        </p>
        <h3 className="text-[#111] text-sm font-bold">Leaderboard</h3>
      </div>

      {/* Players */}
      <div className="px-4 flex flex-col gap-2 flex-1">
        {players.map((p) => (
          <div
            key={p.rank}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 ${
              p.highlight
                ? "bg-[#E8F5E9] border border-[#66BB6A]"
                : "bg-[#F9FAFB]"
            }`}
          >
            <span className="text-sm w-4">{p.badge || `#${p.rank}`}</span>
            <span
              className={`text-[10px] flex-1 font-medium ${
                p.highlight ? "text-[#1B5E20] font-bold" : "text-[#374151]"
              }`}
            >
              {p.name}
            </span>
            <div className="text-right">
              <span
                className={`text-xs font-bold ${
                  p.highlight ? "text-[#2E7D32]" : "text-[#6B7280]"
                }`}
              >
                {p.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Progress note */}
      <div className="mx-4 mb-4 bg-[#E8F5E9] rounded-xl p-2.5 flex items-center gap-2">
        <span className="text-sm">📈</span>
        <p className="text-[#1B5E20] text-[8px] font-medium">
          You improved 7 pts this week!
        </p>
      </div>

      <div className="px-4 pb-6">
        <div className="w-full py-2.5 rounded-xl bg-[#2E7D32] text-center text-white text-xs font-bold shadow">
          Challenge a Friend →
        </div>
      </div>
    </div>
  );
}
