import BackgroundVideo from "./components/BackgroundVideo";
import CustomCursor from "./components/CustomCursor";
import StatsBar from "./components/StatsBar";
import Partners from "./components/Partners";
import ProductShowcase from "./components/ProductShowcase";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BlurHero from "./components/BlurHero";
import StartSection from "./components/StartSection";
import Testimonials from "./components/Testimonials";


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
        <Partners />
        <ProductShowcase />
        <Footer />
      </div>
    </div>
  );
}
