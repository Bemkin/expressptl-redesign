import type { Metadata } from "next";
import { shareImage } from "@/lib/seo";
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
    "Express PTL's fleet of 76 new trucks (40 MT each, 2,916 MT at a time), our humanitarian aid cargo delivery record across Ethiopia, and a quick freight quote request.",
  keywords: [
    "Express PTL operations",
    "Ethiopia heavy fleet",
    "76 prime movers Ethiopia",
    "truck transport Ethiopia",
    "humanitarian aid cargo transport",
    "freight quote Ethiopia",
    "customs clearing Addis Ababa",
  ],
  openGraph: {
    title: "Fleet & Operations | Express Transport & Logistics (Express PTL)",
    description:
      "76 new trucks, 2,916 MT capacity at a time, aid cargo delivered across Ethiopia, and a quick quote request.",
    url: "/operations",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
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
