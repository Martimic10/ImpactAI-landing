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

const BenefitsSection = dynamic(
  () => import("@/components/sections/BenefitsSection"),
  { loading: () => <SectionFallback /> }
);
const HowItWorksSection = dynamic(
  () => import("@/components/sections/HowItWorksSection"),
  { loading: () => <SectionFallback /> }
);
const AICoachSection = dynamic(
  () => import("@/components/sections/AICoachSection"),
  { loading: () => <SectionFallback /> }
);
const SocialCompetitionSection = dynamic(
  () => import("@/components/sections/SocialCompetitionSection"),
  { loading: () => <SectionFallback /> }
);
const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection"),
  { loading: () => <SectionFallback /> }
);
const FinalCTASection = dynamic(
  () => import("@/components/sections/FinalCTASection"),
  { loading: () => <SectionFallback /> }
);
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-0 min-w-0 flex-1 overflow-x-clip bg-black text-foreground">
        <HeroSection />
        <BenefitsSection />
        <HowItWorksSection />
        <AICoachSection />
        <SocialCompetitionSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
