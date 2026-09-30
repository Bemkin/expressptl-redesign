import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import PageCurtain from "@/components/PageCurtain";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://expressptl.com"),
  title: "Express Transport & Logistics (Express PTL) | Premier Ethiopian Heavy Haulage & Multimodal Freight",
  description:
    "Operating continuously since 2013, Express PTL provides 76 company-owned heavy prime movers (2,916 MT synchronous lift), licensed AEO customs clearance, and strategic Djibouti–Addis trade corridor logistics across Ethiopia and East Africa.",
  keywords:
    "Express PTL, Express Transport & Logistics, Ethiopia logistics, heavy haulage Ethiopia, Djibouti Addis corridor transport, 76 prime movers, Bole Bulbula terminal, customs clearance Addis Ababa, UN WFP transport partner, Ambasel building",
  icons: {
    icon: [
      { url: "/assets/Gemini_Generated_Image_1ppnm1ppnm1ppnm1 (1).jpg" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/assets/Gemini_Generated_Image_1ppnm1ppnm1ppnm1 (1).jpg" },
    ],
    shortcut: "/assets/Gemini_Generated_Image_1ppnm1ppnm1ppnm1 (1).jpg",
  },
  openGraph: {
    title: "Express Transport & Logistics (Express PTL) | Premier Heavy Haulage",
    description: "76 company-owned prime movers, 2,916 MT lift capacity, and licensed customs clearance across Ethiopia and the Horn of Africa.",
    url: "https://expressptl.com/",
    siteName: "Express Transport & Logistics",
    images: [
      {
        url: "/assets/Gemini_Generated_Image_1ppnm1ppnm1ppnm1 (1).jpg",
        width: 2048,
        height: 2048,
        alt: "Express Transport & Logistics (Express PTL) Official Brand Emblem",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Transport & Logistics (Express PTL)",
    description: "Premier Ethiopian Heavy Haulage & Multimodal Freight Operations. 76 prime movers, 2,916 MT lift capacity, UN WFP carrier.",
    images: ["/assets/Gemini_Generated_Image_1ppnm1ppnm1ppnm1 (1).jpg"],
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
