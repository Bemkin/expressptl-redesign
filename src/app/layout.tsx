import type { Metadata } from "next";
import { Bebas_Neue, Outfit, Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
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
  title: "Express Transport & Logistics | Premier East African Supply Chain & Heavy Haul",
  description: "Cross-border heavy haulage, multimodal freight forwarding, bonded warehousing, and temperature-controlled logistics across Kenya, Uganda, Rwanda, DRC, and South Sudan.",
  keywords: "logistics, freight forwarding, heavy haulage, East Africa transport, bonded warehouse, breakbulk cargo, Mombasa corridor, cross border transit",
  icons: {
    icon: "/assets/Gemini_Generated_Image_nmde0znmde0znmde.jpg",
  },
  openGraph: {
    title: "Express Transport & Logistics | Industrial Freight Solutions",
    description: "We Deliver More Than Cargo — We Deliver Peace of Mind.",
    type: "website",
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
      className={`${bebasNeue.variable} ${barlowCondensed.variable} ${outfit.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-[#070B14] text-white font-sans antialiased min-h-screen selection:bg-[#FF5A1F] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
