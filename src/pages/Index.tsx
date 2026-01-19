import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PhilosophySection } from "@/components/landing/PhilosophySection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-background font-sans overflow-x-hidden">
      <ScrollProgress />

      {/* Main Container */}
      <div className="relative w-full max-w-[1800px] bg-card md:rounded-4xl md:m-4 lg:m-6 overflow-hidden shadow-2xl ring-1 ring-border flex flex-col min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <PhilosophySection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
