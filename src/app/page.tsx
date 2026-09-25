import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersWall from "@/components/PartnersWall";
import AdvantagesSection from "@/components/AdvantagesSection";
import ServicesSection from "@/components/ServicesSection";
import CorridorsMap from "@/components/CorridorsMap";
import RateCalculator from "@/components/RateCalculator";
import FleetSection from "@/components/FleetSection";
import FacilitySection from "@/components/FacilitySection";
import ImpactMetrics from "@/components/ImpactMetrics";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      <Navbar />
      <HeroSection />
      <PartnersWall />
      <AdvantagesSection />
      <ServicesSection />
      <CorridorsMap />
      <RateCalculator />
      <FleetSection />
      <FacilitySection />
      <ImpactMetrics />
      <ContactSection />
      <Footer />
    </main>
  );
}
