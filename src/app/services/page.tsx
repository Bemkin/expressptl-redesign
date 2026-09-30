import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHeroSlider from "@/components/services/ServicesHeroSlider";
import FeedbackSection from "@/components/FeedbackSection";

export const metadata: Metadata = {
  title: "Services | Express Transport & Logistics (Express PTL)",
  description:
    "Explore Express PTL's full-cycle logistics solutions: 76 new prime movers, 2,916 MT synchronous heavy haulage, construction machinery rental, tri-continent import/export, customs brokerage at Galafi & Modjo, 14,000 m² Bole Bulbula facility, and UN WFP humanitarian aid carrier.",
  keywords: [
    "Express PTL services",
    "Ethiopia heavy transport",
    "Djibouti corridor haulage",
    "machinery rental Ethiopia",
    "customs clearance Galafi Modjo",
    "sesame export Ethiopia",
    "UN WFP humanitarian logistics",
    "Bole Bulbula manufacturing plant",
  ],
  openGraph: {
    title: "Services | Express Transport & Logistics (Express PTL)",
    description:
      "Explore Express PTL's full-cycle logistics solutions: 76 new prime movers, 2,916 MT lift, construction plant rentals, import/export trade, customs brokerage, and UN WFP relief carrier.",
    url: "https://expressptl.com/services/",
    siteName: "Express Transport & Logistics",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* 2. Hero Services Horizontal Scroll Showcase (Slide 0 + 6 Services + Progress Bar + Modals) */}
      <ServicesHeroSlider />

      {/* 3. Scale-block Feedback Section (Exact Inspo Structure & Homepage Theme) */}
      <div className="relative z-20 bg-[#070B14] pt-8 sm:pt-16 pb-4 sm:pb-8">
        <FeedbackSection />
      </div>

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}
