import dynamic from "next/dynamic";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";

function SectionFallback() {
  return (
    <div
      className="w-full animate-pulse rounded-none bg-foreground/[0.04] sm:rounded-2xl"
      style={{ minHeight: "min(28vh, 16rem)" }}
      aria-hidden
    />
  );
}

const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection"),
  { loading: () => <SectionFallback /> }
);
const FeaturesSection = dynamic(
  () => import("@/components/sections/FeaturesSection"),
  { loading: () => <SectionFallback /> }
);
const GroupsSection = dynamic(
  () => import("@/components/sections/GroupsSection"),
  { loading: () => <SectionFallback /> }
);
const ScreenshotsRailSection = dynamic(
  () => import("@/components/sections/ScreenshotsRailSection"),
  { loading: () => <SectionFallback /> }
);
const PricingSection = dynamic(
  () => import("@/components/sections/PricingSection"),
  { loading: () => <SectionFallback /> }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection"),
  { loading: () => <SectionFallback /> }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-0 min-w-0 flex-1 overflow-x-clip bg-background text-foreground">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <GroupsSection />
        <ScreenshotsRailSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
