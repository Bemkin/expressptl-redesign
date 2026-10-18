import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import PageCurtain from "@/components/PageCurtain";
import { shareImage } from "@/lib/seo";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// Absolute base for canonical / Open Graph URLs. Icons and share images come from the
// file conventions in this folder (favicon.ico, icon.png, apple-icon.png); the share image from @/lib/seo.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Express Transport & Logistics (Express PTL) | Premier Ethiopian Heavy Haulage & Multimodal Freight",
  description:
    "Operating continuously since 2013, Express PTL provides 76 company-owned heavy prime movers (2,916 MT synchronous lift), licensed AEO customs clearance, and strategic Djibouti–Addis trade corridor logistics across Ethiopia and East Africa.",
  keywords:
    "Express PTL, Express Transport & Logistics, Ethiopia logistics, heavy haulage Ethiopia, Djibouti Addis corridor transport, 76 prime movers, Bole Bulbula terminal, customs clearance Addis Ababa, UN WFP transport partner, Ambasel building",
  openGraph: {
    title: "Express Transport & Logistics (Express PTL) | Premier Heavy Haulage",
    description: "76 company-owned prime movers, 2,916 MT lift capacity, and licensed customs clearance across Ethiopia and the Horn of Africa.",
    url: "/",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Transport & Logistics (Express PTL)",
    description: "Premier Ethiopian Heavy Haulage & Multimodal Freight Operations. 76 prime movers, 2,916 MT lift capacity, UN WFP carrier.",
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${outfit.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('express_ptl_preloader_seen')==='true'){document.documentElement.dataset.introSeen='true';}}catch(e){}`,
          }}
        />
      </head>
      <body
        className="bg-[#070B14] text-white font-sans antialiased min-h-screen selection:bg-[#FF5A1F] selection:text-white"
        suppressHydrationWarning
      >
        <SmoothScroll />
        <PageCurtain />
        {children}
      </body>
    </html>
  );
}
