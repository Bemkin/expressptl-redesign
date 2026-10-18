import type { Metadata } from "next";
import { shareImage } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHeroSlider from "@/components/services/ServicesHeroSlider";
import FeedbackSection from "@/components/FeedbackSection";

export const metadata: Metadata = {
  title: "Services | Express Transport & Logistics (Express PTL)",
  description:
    "Express PTL services: cargo transport with 76 new trucks (40 MT each, 2,916 MT at a time), construction and machinery rental, import and export, customs clearance, cargo forwarding, warehousing, humanitarian aid cargo, and a 14,000 m² food processing factory under construction in Addis Ababa.",
  keywords: [
    "Express PTL services",
    "Ethiopia cargo transport",
    "Ethiopia trucking",
    "machinery rental Ethiopia",
    "customs clearance Ethiopia",
    "sesame export Ethiopia",
    "humanitarian aid cargo Ethiopia",
    "food processing factory Addis Ababa",
  ],
  openGraph: {
    title: "Services | Express Transport & Logistics (Express PTL)",
    description:
      "Cargo transport with 76 new trucks, construction and machinery rental, import and export, customs clearance, warehousing and humanitarian aid cargo across Ethiopia.",
    url: "/services",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
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
