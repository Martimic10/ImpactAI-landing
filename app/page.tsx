import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import WhyImpactSection from "@/components/sections/WhyImpactSection";
import ScreenshotsRailSection from "@/components/sections/ScreenshotsRailSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import AICoachSection from "@/components/sections/AICoachSection";
import SocialCompetitionSection from "@/components/sections/SocialCompetitionSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-0 min-w-0 flex-1 overflow-x-clip bg-background text-foreground">
        <HeroSection />
        <WhyImpactSection />
        <ScreenshotsRailSection />
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
