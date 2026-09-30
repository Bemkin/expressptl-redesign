import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoList from "@/components/contact/ContactInfoList";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contacts | Express Transport & Logistics (Express PTL)",
  description:
    "Get in touch with Express PTL's executive dispatch room and corporate headquarters at Ambasel Building, Addis Ababa. Direct communications for heavy haulage tenders, cross-border Djibouti corridor manifests, and 24/7 fleet coordination.",
  keywords: [
    "Express PTL contacts",
    "Ethiopia transport contact",
    "Addis Ababa freight dispatch",
    "Ambasel building logistics",
    "Temesgen Yohannes",
    "Melaku Yenew",
    "Djibouti corridor freight phone",
    "heavy haulage quotation Ethiopia",
  ],
  openGraph: {
    title: "Contacts | Express Transport & Logistics (Express PTL)",
    description:
      "Direct communications for heavy haulage, cross-border multimodal transport, and project cargo across Ethiopia and East Africa.",
    url: "https://expressptl.com/contact/",
    siteName: "Express Transport & Logistics",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white overflow-x-hidden">
      {/* 1. Global Navigation */}
      <Navbar isStarted={true} />

      {/* 2. Section 1: Hero Contacts with Executive Leadership Portraits (Temesgen Yohannes & Melaku Yenew) */}
      <ContactHero />

      {/* 3. Section 2: Info Contacts Typographic List (Emails, Phones, Facilities, Channels) */}
      <ContactInfoList />

      {/* 4. Section 3: Interactive Dark-Mode Logistics Hubs Map (Ambasel HQ & Bole Bulbula Depot) */}
      <ContactMapSection />

      {/* 5. Section 4: Scale-Block Contact & Feedback Card (Homepage Theme) */}
      <ContactFormSection />

      {/* 6. Global Footer */}
      <Footer />
    </main>
  );
}
