export default function LessonsScreen() {
  const lessons = [
    { title: "Hip Rotation Drill", level: "Beginner", time: "5 min", tag: "Recommended" },
    { title: "Downswing Path Fix", level: "Intermediate", time: "8 min", tag: "" },
    { title: "Impact Position", level: "All Levels", time: "6 min", tag: "" },
  ];

  return (
    <div className="h-full bg-white flex flex-col pt-8">
      {/* Header */}
      <div className="px-4 pt-2 pb-3">
        <p className="text-[#2E7D32] text-[9px] font-semibold uppercase tracking-widest">
          For You
        </p>
        <h3 className="text-[#111] text-sm font-bold">Lessons & Drills</h3>
      </div>

      {/* Lesson cards */}
      <div className="px-4 flex flex-col gap-2.5 flex-1">
        {lessons.map((lesson, i) => (
          <div
            key={i}
            className={`rounded-xl p-3 ${
              i === 0 ? "bg-[#E8F5E9] border border-[#A5D6A7]" : "bg-[#F9FAFB]"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-1.5 mb-0.5">
                  {lesson.tag && (
                    <span className="text-[6px] font-bold text-white bg-[#2E7D32] px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                      {lesson.tag}
                    </span>
                  )}
                </div>
                <p className={`text-[10px] font-semibold ${i === 0 ? "text-[#1B5E20]" : "text-[#111]"}`}>
                  {lesson.title}
                </p>
                <p className="text-[#6B7280] text-[8px] mt-0.5">
                  {lesson.level} · {lesson.time}
                </p>
              </div>
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                  i === 0 ? "bg-[#2E7D32]" : "bg-[#E5E7EB]"
                }`}
              >
                <div
                  className={`w-0 h-0 border-t-[4px] border-t-transparent border-l-[7px] border-b-[4px] border-b-transparent ml-0.5 ${
                    i === 0 ? "border-l-white" : "border-l-[#9CA3AF]"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-4 pb-6 mt-2">
        <div className="w-full py-2.5 rounded-xl bg-[#2E7D32] text-center text-white text-xs font-bold shadow">
          View All Lessons →
        </div>
      </div>
    </div>
  );
}
