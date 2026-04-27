import Image from "next/image";

export default function RealCompareScreen() {
  return (
    <div className="relative w-full h-full bg-[#111111]">
      <Image
        src="/Compare-screen.png"
        alt="ImpactAI compare screen"
        fill
        className="object-fill"
        priority
        sizes="260px"
      />
    </div>
  );
}
