import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/FeedbackSection";

import OperationsHero from "@/components/operations/OperationsHero";
import OperationsReadingScrub from "@/components/operations/OperationsReadingScrub";
import OperationsFleetSection from "@/components/operations/OperationsFleetSection";
import OperationsCorridorsSection from "@/components/operations/OperationsCorridorsSection";
import OperationsCalculatorSection from "@/components/operations/OperationsCalculatorSection";

export const metadata: Metadata = {
  title: "Fleet & Operations | Express Transport & Logistics (Express PTL)",
  description:
    "Explore Express PTL's owned heavy haulage infrastructure: 76 new prime movers, 2,916 MT synchronous lift, 14,000 m² Bole Bulbula facility, strategic Djibouti–Addis corridors, and instant freight tariff calculator.",
  keywords: [
    "Express PTL operations",
    "Ethiopia heavy fleet",
    "76 prime movers Ethiopia",
    "Djibouti Addis trade corridor",
    "Bole Bulbula logistics hub",
    "freight rate calculator Ethiopia",
    "UN WFP humanitarian transport",
    "Goldhofer lowbed Ethiopia",
  ],
  openGraph: {
    title: "Fleet & Operations | Express Transport & Logistics (Express PTL)",
    description:
      "76 company-owned heavy prime movers, 2,916 MT capacity, strategic Horn of Africa corridors, and real-time freight estimation.",
    url: "https://expressptl.com/operations/",
    siteName: "Express Transport & Logistics",
    type: "website",
  },
};

export default function OperationsPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar isStarted={true} />

      {/* 2. Section 1: Hero Operations Cover with Monogram & Quick Anchor Pills */}
      <OperationsHero />

      {/* 3. Section 2: Scroll-Driven Reading Scrub Narrative */}
      <OperationsReadingScrub />

      {/* 4. Section 3: 76-Truck Heavy Fleet & Bole Bulbula 14,000 m² Hub */}
      <OperationsFleetSection />

      {/* 5. Section 4: Strategic Trade Corridors & Route Inspector */}
      <OperationsCorridorsSection />

      {/* 6. Section 5: Precision Freight Rate & Transit Estimator */}
      <OperationsCalculatorSection />

      {/* 7. Section 6: Signature Scale-Block Feedback Card (Homepage Theme) */}
      <div className="relative z-20 bg-[#070B14] pt-8 sm:pt-16 pb-4 sm:pb-8">
        <FeedbackSection />
      </div>

      {/* 8. Global Footer */}
      <Footer />
    </main>
  );
}
