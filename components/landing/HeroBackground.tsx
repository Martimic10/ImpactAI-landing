import Image from "next/image";
import { HERO_BACKGROUND_SRC } from "@/lib/brand";
import { cn } from "@/lib/utils";

type HeroBackgroundProps = {
  variant?: "hero" | "footer";
  priority?: boolean;
};

export function HeroBackground({ variant = "hero", priority }: HeroBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      <Image
        src={HERO_BACKGROUND_SRC}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className={cn(
          "object-cover",
          variant === "hero"
            ? "object-[center_42%] sm:object-[center_38%] lg:object-[center_32%] xl:object-center"
            : "object-bottom"
        )}
        draggable={false}
      />
      {variant === "hero" ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/25 to-background/95" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/80 to-transparent sm:h-36 lg:h-44" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-background from-0% via-background/20 via-12% to-black/55" />
          <div className="absolute inset-0 bg-black/35" />
        </>
      )}
    </div>
  );
}
