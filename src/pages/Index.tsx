import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StakesSection from "@/components/StakesSection";
import ValueProposition from "@/components/ValueProposition";
import GuideSection from "@/components/GuideSection";
import PlanSection from "@/components/PlanSection";
import BrandScriptSection from "@/components/BrandScriptSection";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StakesSection />
        <ValueProposition />
        <GuideSection />
        <PlanSection />
        <BrandScriptSection />
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
