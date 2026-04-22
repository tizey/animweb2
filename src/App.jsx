import BackgroundVideo from "./components/BackgroundVideo";
import CustomCursor from "./components/CustomCursor";
import StatsBar from "./components/StatsBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlurHero from "./components/BlurHero";
import StartSection from "./components/StartSection";
import FeaturesChess from "./components/FeaturesChess";
import FeaturesGrid from "./components/FeaturesGrid";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaFooter from "./components/CtaFooter";

export default function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      {/* Global scroll-driven video background */}
      <BackgroundVideo />

      {/* All page content sits above z-1 overlay */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <BlurHero />
        <StartSection />
        <Testimonials />
        <StatsBar />
        <FeaturesChess />
        <FeaturesGrid />
        <Stats />
        <Process />
        <Pricing />
        <Faq />
        <CtaFooter />
      </div>
    </div>
  );
}
