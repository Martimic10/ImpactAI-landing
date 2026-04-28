import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AppPreviewSection from "@/components/sections/AppPreviewSection";
import DifferentiatorSection from "@/components/sections/DifferentiatorSection";
import VisualAnalysisSection from "@/components/sections/VisualAnalysisSection";
import SocialSection from "@/components/sections/SocialSection";
import PricingSection from "@/components/sections/PricingSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AppPreviewSection />
        <DifferentiatorSection />
        <VisualAnalysisSection />
        <SocialSection />
        <PricingSection />
        <WaitlistSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </>
  );
}
