import type { Metadata } from "next";
import { shareImage } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoList from "@/components/contact/ContactInfoList";
import ContactMapSection from "@/components/contact/ContactMapSection";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contacts | Express Transport & Logistics (Express PTL)",
  description:
    "Contact Express Transport and Logistics at Ambasel Building, Wollo Sefer, Addis Ababa. Call +251 11 470 2031 or +251 91 124 8830, or e-mail express@expressptl.com. Open Mon–Sat 8:00–18:30.",
  keywords: [
    "Express PTL contacts",
    "Ethiopia transport contact",
    "Addis Ababa freight forwarding",
    "Ambasel building logistics",
    "Temesgen Yohannes",
    "Melaku Yenew",
    "customs clearance Addis Ababa",
    "transport quotation Ethiopia",
  ],
  openGraph: {
    title: "Contacts | Express Transport & Logistics (Express PTL)",
    description:
      "Reach our Addis Ababa headquarters for freight forwarding, customs clearing, transport and warehousing in Ethiopia.",
    url: "/contact",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
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

      {/* 3. Section 2: Info Contacts Typographic List (E-mail, Phones, Office, Hours) */}
      <ContactInfoList />

      {/* 4. Section 3: Dark-Mode Headquarters Map (Ambasel Building, Wollo Sefer) */}
      <ContactMapSection />

      {/* 5. Section 4: Scale-Block Contact & Feedback Card (Homepage Theme) */}
      <ContactFormSection />

      {/* 6. Global Footer */}
      <Footer />
    </main>
  );
}
