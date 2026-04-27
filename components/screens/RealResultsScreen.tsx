import Image from "next/image";

export default function RealResultsScreen() {
  return (
    <div className="relative w-full h-full bg-[#111111]">
      <Image
        src="/Results-screen.png"
        alt="ImpactAI results screen"
        fill
        className="object-fill"
        priority
        sizes="260px"
      />
    </div>
  );
}
