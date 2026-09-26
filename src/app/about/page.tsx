import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnersWall from "@/components/PartnersWall";
import {
  ShieldCheck,
  Truck,
  Warehouse,
  Radio,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Award,
  Clock,
  Compass,
  FileCheck,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Express Transport & Logistics (Express PTL)",
  description:
    "Learn about Express PTL's 13+ year heritage, 76 owned prime movers (2,916 MT lift capacity), UN WFP certified humanitarian logistics, and strategic cross-border freight corridors across East Africa.",
};

const STATS = [
  { value: "76", label: "HEAVY PRIME MOVERS", sub: "100% Owned Euro-Spec Fleet" },
  { value: "2,916 MT", label: "SYNCHRONOUS LIFT", sub: "Largest Private Lift in Ethiopia" },
  { value: "158,636+", label: "METRIC TONS UPLIFTED", sub: "UN WFP & Aid Deployments" },
  { value: "99.98%", label: "SECURITY & SAFETY RECORD", sub: "Zero-Hijack Escort Protocol" },
];

const PILLARS = [
  {
    num: "01",
    tag: "CAPACITY INTEGRITY",
    title: "100% OWNED ASSET AUTONOMY",
    desc: "Unlike standard brokerage forwarders who rely on unpredictable third-party owner-operators, Express PTL owns and operates its complete fleet of 76 heavy-duty prime movers. Every vehicle undergoes stringent preventive maintenance in our specialized depot, guaranteeing zero dispatch cancellations.",
    icon: <Truck className="w-6 h-6 text-[#FF5A1F]" />,
    metric: "40 MT Payload",
    metricLabel: "Per Standard Unit",
  },
  {
    num: "02",
    tag: "CUSTOMS ACCREDITATION",
    title: "LICENSED AEO & BONDED DEPOT",
    desc: "Holding official Authorized Economic Operator (AEO) status, Express PTL secures priority pre-arrival customs manifest filing and bonded cross-border clearance. Our dedicated Inland Container Depot (ICD) provides secure staging, de-stuffing, and direct distribution across Ethiopia and regional neighbors.",
    icon: <Warehouse className="w-6 h-6 text-[#FF5A1F]" />,
    metric: "48-72h",
    metricLabel: "Fast-Track Border Clearance",
  },
  {
    num: "03",
    tag: "HIGH-TONNAGE RIGGING",
    title: "OVER-DIMENSIONAL HEAVY HAULAGE",
    desc: "Engineered specifically for mega-infrastructure, hydro-electric turbines, substations, and mining equipment. Our multi-axle modular hydraulic trailers and certified rigging engineers manage axle load distribution, bridge assessments, and utility escorts for individual loads up to 180 MT.",
    icon: <ShieldCheck className="w-6 h-6 text-[#FF5A1F]" />,
    metric: "Up to 180 MT",
    metricLabel: "Single Out-of-Gauge Lift",
  },
  {
    num: "04",
    tag: "REAL-TIME TELEMETRICS",
    title: "24/7 SATELLITE COMMAND CENTER",
    desc: "Every prime mover in our network is hardwired with dual-redundant GPS telematics, real-time geofence alarms, axle-weight load sensors, and driver fatigue monitoring. Route operations are supervised 24/7 from our Addis Ababa dispatch room with coordinated regional highway response teams.",
    icon: <Radio className="w-6 h-6 text-[#FF5A1F]" />,
    metric: "Real-Time",
    metricLabel: "Live Corridors Telemetry",
  },
];

const CERTIFICATIONS = [
  {
    title: "UN WFP Humanitarian Partner",
    desc: "Audited and approved long-haul food aid and emergency medical carrier across the Horn of Africa.",
  },
  {
    title: "Authorized Economic Operator (AEO)",
    desc: "Customs green-channel priority clearance and compliant bonded cargo transfer certification.",
  },
  {
    title: "ISO-Aligned Fleet Safety Standards",
    desc: "Mandatory driver rest protocols, digital speed governors, and daily pre-trip mechanical certifications.",
  },
  {
    title: "Cross-Border Transit Licenses",
    desc: "Fully bonded operations across Kenya, Djibouti, Ethiopia, South Sudan, and Central Africa.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      <Navbar />

      {/* 1. HERO HEADER WITH MOODY INDUSTRIAL CANVAS */}
      <section className="relative pt-36 sm:pt-44 pb-20 sm:pb-28 overflow-hidden border-b border-white/10">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[#1B1E3D] blur-3xl opacity-30 pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#FF5A1F]/10 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-[1720px] mx-auto px-5 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400 uppercase mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FF5A1F]">ABOUT US</span>
          </div>

          <div className="max-w-5xl">
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#FF5A1F] uppercase block mb-4">
              ABOUT EXPRESS TRANSPORT & LOGISTICS
            </span>
            <h1 className="font-headline text-4xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] text-white uppercase tracking-tight leading-[0.92] mb-8">
              PIONEERING EAST AFRICAN HEAVY HAULAGE & MULTIMODAL TRANSIT.
            </h1>
            <p className="text-slate-300 text-base sm:text-xl lg:text-2xl font-light leading-relaxed max-w-4xl">
              Operating Ethiopia&apos;s largest private 2,916 MT synchronous heavy-haul fleet, Express PTL connects critical maritime gateways across Djibouti and Kenya directly to inland industrial hubs, infrastructure projects, and humanitarian supply lines.
            </p>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="bg-[#0B0F1A] border-b border-white/10 py-12">
        <div className="max-w-[1720px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((item, idx) => (
              <div key={idx} className="flex flex-col border-l-2 border-[#FF5A1F] pl-6">
                <span className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none mb-2">
                  {item.value}
                </span>
                <span className="text-xs font-bold tracking-wider text-slate-200 uppercase mb-1">
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-400">
                  {item.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORPORATE HERITAGE & MISSION */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-[1720px] mx-auto px-5 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Editorial Heritage Story */}
            <div className="lg:col-span-7">
              <span className="text-xs font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
                OVER 13+ YEARS OF OVERLAND MASTERY
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight mb-8">
                BUILT FOR THE RIGORS OF THE HORN OF AFRICA.
              </h2>
              <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Established over a decade ago, Express Transport & Logistics was formed with a singular strategic mandate: to eliminate the logistics bottlenecks that paralyze East African supply chains. The journey began along the vital Djibouti–Addis Ababa freight corridor — a lifeline responsible for more than 90% of Ethiopia&apos;s foreign trade.
                </p>
                <p>
                  Where other forwarders relied on fragmented sub-contracting and aging machinery, Express PTL invested heavily in an owned, European-specification fleet. By standardizing high-capacity prime movers, rigorous in-house maintenance, and digital dispatch governance, we transformed transit reliability across rugged rift valley terrain and desert corridors.
                </p>
                <p>
                  Today, Express PTL has expanded into a multidisciplinary logistics titan. We proudly stand as a primary humanitarian carrier for the United Nations World Food Programme (UN WFP) and the World Health Organization, delivering hundreds of thousands of metric tons of life-saving relief alongside commercial machinery, automotive parts, and high-tech capital goods.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block uppercase">Headquarters</span>
                    <span className="text-xs text-slate-400">Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center text-[#FF5A1F]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block uppercase">Regional Hubs</span>
                    <span className="text-xs text-slate-400">Mombasa · Nairobi · Djibouti</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Showcase Card styled with brand #1B1E3D */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#1F234B] via-[#1B1E3D] to-[#151733] p-8 sm:p-10 shadow-2xl">
                <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                    <span className="text-xs font-bold tracking-widest text-white uppercase">
                      OPERATIONAL COMMAND
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">24/7/365</span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase mb-4 tracking-tight">
                  ZERO COMPROMISE ON CARGO SAFETY & SPEED
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  Our integrated operations unite bonded yards, armed patrol relays, and direct telemetric coordination with regional customs authorities.
                </p>

                <div className="space-y-4 text-xs font-medium text-slate-200">
                  <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>Real-time GPS geofencing & remote axle-weight monitoring</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>Mandatory driver defensive training & 4-hour rest governance</span>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>In-house bonded staging depot eliminating port demurrage</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Carrier Rating
                  </span>
                  <span className="font-headline text-2xl text-[#FF5A1F]">
                    GRADE A1 CERTIFIED
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE 4 STRATEGIC PILLARS */}
      <section className="py-24 bg-[#080C16] border-y border-white/10">
        <div className="max-w-[1720px] mx-auto px-5 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold tracking-[0.25em] text-[#FF5A1F] uppercase block mb-3">
              OUR INFRASTRUCTURE ADVANTAGE
            </span>
            <h2 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-tight">
              FOUR PILLARS OF HIGH-STAKES RELIABILITY.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.num}
                className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#FF5A1F]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                        {pillar.tag}
                      </span>
                    </div>
                    <span className="font-headline text-2xl text-slate-500">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase mb-4 tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-baseline justify-between">
                  <div>
                    <span className="font-headline text-3xl text-white block">
                      {pillar.metric}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {pillar.metricLabel}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS & ACCREDITATIONS */}
      <section className="py-24">
        <div className="max-w-[1720px] mx-auto px-5 md:px-12">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              INSTITUTIONAL RIGOR
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl text-white uppercase tracking-tight">
              ACCREDITED COMPLIANCE & SAFETY STANDARDS.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <Award className="w-6 h-6 text-[#FF5A1F] mb-4" />
                  <h4 className="font-headline text-xl text-white uppercase mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Audited & Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARTNERS WALL REUSE */}
      <PartnersWall />

      {/* 7. CALL TO ACTION SECTION */}
      <section className="py-24 bg-gradient-to-b from-[#080C16] to-[#05080E] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          <span className="text-xs font-extrabold tracking-[0.25em] text-[#FF5A1F] uppercase block mb-4">
            INITIATE HIGH-TONNAGE FREIGHT DISPATCH
          </span>
          <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-tight mb-8">
            READY TO MOBILIZE YOUR CARGO ACROSS EAST AFRICA?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Connect directly with our 24/7 central dispatch team or utilize our instant rate calculator to model corridor transit times and container lift economics.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#calculator"
              className="bg-[#FF5A1F] text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg hover:bg-[#e04a14] transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-3"
            >
              <span>CALCULATE FREIGHT RATES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/#contact"
              className="bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
            >
              CONTACT OPERATIONS HUB
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
