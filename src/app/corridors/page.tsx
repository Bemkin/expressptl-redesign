import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CorridorsMap from "@/components/CorridorsMap";

export const metadata: Metadata = {
  title: "Strategic Trade Corridors | Express Transport & Logistics",
  description:
    "Explore Express PTL's strategic freight arteries connecting the Port of Djibouti to Addis Ababa, Mojo Dry Port, and regional East African transit corridors.",
};

export default function CorridorsPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      <Navbar isStarted={true} />

      {/* Header Banner */}
      <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 bg-linear-to-b from-[#0E1224] to-[#070B14] border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF5A1F]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
              INTER-REGIONAL TRANSIT ARTERIES
            </span>
          </div>

          <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl text-white uppercase leading-[0.88] tracking-tight mb-6">
            STRATEGIC CORRIDORS &amp; <br />
            HINTERLAND NETWORKS.
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-2xl leading-relaxed">
            Direct arterial connections linking deepwater Indian Ocean seaports directly to capital dry ports, industrial parks, and humanitarian stations across Ethiopia and East Africa.
          </p>
        </div>
      </section>

      {/* Interactive Map & Route Analyzer */}
      <CorridorsMap />

      <Footer />
    </main>
  );
}
