import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import PageCurtain from "@/components/PageCurtain";
import { shareImage, siteUrl } from "@/lib/seo";
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

// Icons come from the file conventions in this folder (favicon.ico, icon.png, apple-icon.png).
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Express Transport & Logistics (Express PTL) | Transport, Customs Clearing & Logistics in Ethiopia",
  description:
    "Since 2013, Express Transport and Logistics has provided global freight forwarding, customs clearing, transport, warehousing and distribution in Ethiopia, with a new fleet of 76 trucks (40 MT each).",
  keywords:
    "Express PTL, Express Transport & Logistics, Ethiopia logistics, freight forwarding Ethiopia, customs clearance Addis Ababa, truck transport Ethiopia, humanitarian aid cargo, warehousing Ethiopia, Ambasel building",
  openGraph: {
    title: "Express Transport & Logistics (Express PTL)",
    description: "Freight forwarding, customs clearing, transport, warehousing and distribution in Ethiopia since 2013. 76 new trucks, 2,916 MT capacity at a time.",
    url: "/",
    siteName: "Express Transport & Logistics",
    images: [shareImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Express Transport & Logistics (Express PTL)",
    description: "Freight forwarding, customs clearing, transport and warehousing in Ethiopia since 2013. 76 new trucks, 2,916 MT capacity at a time.",
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
