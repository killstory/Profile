import { HeroSection } from "@/components/landing/HeroSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { ImageSlider } from "@/components/landing/ImageSlider";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { PhilosophySection } from "@/components/landing/PhilosophySection";
import { Footer } from "@/components/landing/Footer";
import { Cursor } from "@/components/landing/Cursor";

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-background font-sans overflow-x-hidden">
      {/* Custom Cursor */}
      <Cursor />

      {/* Main Content */}
      <main>
        <HeroSection />
        <IntroSection />
        <ImageSlider />
        <FeaturesSection />
        <PhilosophySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
