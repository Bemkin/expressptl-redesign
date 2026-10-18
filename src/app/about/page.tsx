import type { Metadata } from "next";
import { shareImage } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeedbackSection from "@/components/FeedbackSection";

import AboutHero from "@/components/about/AboutHero";
import AboutIntroReading from "@/components/about/AboutIntroReading";
import AboutStorySection from "@/components/about/AboutStorySection";
import AboutMandatesSection from "@/components/about/AboutMandatesSection";
import AboutAdvantagesSection from "@/components/about/AboutAdvantagesSection";
import AboutMissionReading from "@/components/about/AboutMissionReading";
import AboutBrandNote from "@/components/about/AboutBrandNote";
import AboutFactsSection from "@/components/about/AboutFactsSection";
import AboutTeamSection from "@/components/about/AboutTeamSection";

export const metadata: Metadata = {
  title: "About Us | Express Transport & Logistics (Express PTL)",
  description:
    "Operating since 2013, Express Transport & Logistics provides transport, customs clearing, freight forwarding, warehousing and distribution in Ethiopia, with 76 new trucks moving 2,916 MT at a time and a special focus on humanitarian aid cargo.",
  keywords: [
    "Express PTL About",
    "Ethiopia heavy transport",
    "freight forwarding Ethiopia",
    "humanitarian aid cargo transport Ethiopia",
    "Ambasel building logistics",
    "Temesgen Yohannes Express PTL",
    "truck transport Ethiopia",
    "customs clearing Ethiopia",
  ],
  openGraph: {
    title: "About Us | Express Transport & Logistics (Express PTL)",
    description:
      "Operating since 2013, Express PTL provides transport, customs clearing, forwarding and warehousing in Ethiopia, with 76 new trucks moving 2,916 MT at a time.",
    url: "/about",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar />

      {/* ========================================================
          MVP LOGISTICS 10-SECTION ARCHITECTURE
          Migrated from production https://expressptl.com/about-us/
         ======================================================== */}

      {/* Section 1: Hero About with E.P.T.L. monogram & expanding line */}
      <AboutHero />

      {/* Section 2: Intro Reading Scrub Block (Global Freight & Customs) */}
      <AboutIntroReading />

      {/* Section 3: Our Story Scale Block with Marquee Ticker */}
      <AboutStorySection />

      {/* Section 4: 3 Strategic Pillars Grid (Zero-Disruption, UN WFP, Direct Brokerage) */}
      <AboutMandatesSection />

      {/* Section 5: Sticky Advantages with Dynamic Progress Bar & 6 Cards */}
      <AboutAdvantagesSection />

      {/* Section 6: Mission Reading Scrub Block */}
      <AboutMissionReading />

      {/* Section 7: Monumental Brand Acronym Note Card */}
      <AboutBrandNote />

      {/* Section 8: Facts About Us (76 Trucks, 2,916 MT, 158,636+ MT, 99.98%) */}
      <AboutFactsSection />

      {/* Section 9: Executive & Operations Leadership Team ("Meet Our Team Behind Our Success!") */}
      <AboutTeamSection />

      {/* Section 10: Scale-block Feedback Section (Exact Inspo Structure & Homepage Theme) */}
      <div className="relative z-20 bg-[#070B14] pt-8 sm:pt-16 pb-4 sm:pb-8">
        <FeedbackSection />
      </div>

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
