"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { ShieldCheck } from "lucide-react";
import SafeBackgroundVideo from "./ui/SafeBackgroundVideo";

interface PartnerItem {
  num: string;
  name: string;
  shortName: string;
  category: string;
  sectorTag: string;
  logo: string;
  scope: string;
}

const FLAGSHIP_PARTNERS: PartnerItem[] = [
  {
    num: "01",
    name: "UN World Food Programme",
    shortName: "UN WFP",
    category: "HUMANITARIAN LIFELINE ALLIANCE",
    sectorTag: "EMERGENCY RELIEF",
    logo: "/assets/partners/wfp.png",
    scope: "Priority food security & emergency humanitarian cargo carriage across the Horn of Africa.",
  },
  {
    num: "02",
    name: "A.P. Moller - Maersk",
    shortName: "MAERSK",
    category: "GLOBAL OCEAN & INTERMODAL ALLIANCE",
    sectorTag: "GLOBAL CARRIER",
    logo: "/assets/partners/maersk.png",
    scope: "Direct carrier haulage and intermodal containerized transit from global deepwater hubs.",
  },
  {
    num: "03",
    name: "Mediterranean Shipping Co.",
    shortName: "MSC",
    category: "GLOBAL MARITIME CONTAINER ALLIANCE",
    sectorTag: "DEEPWATER LINER",
    logo: "/assets/partners/msc.png",
    scope: "Vessel discharge coordination and end-to-end container delivery through Red Sea lanes.",
  },
  {
    num: "04",
    name: "World Health Organization",
    shortName: "WHO",
    category: "INTERNATIONAL HEALTH LOGISTICS",
    sectorTag: "COLD CHAIN & MEDICAL",
    logo: "/assets/partners/who.png",
    scope: "Temperature-controlled medical supply transit and emergency pandemic response transport.",
  },
];

const NATIONAL_PARTNERS: PartnerItem[] = [
  {
    num: "05",
    name: "Ethiopian Commodity Exchange",
    shortName: "ECX",
    category: "COMMODITIES TRADING HUB",
    sectorTag: "NATIONAL EXCHANGE",
    logo: "/assets/partners/ecx.png",
    scope: "Secured export transit for Ethiopian coffee, oilseeds, sesame, and high-value agricultural produce.",
  },
  {
    num: "06",
    name: "Ethiopian Shipping & Logistics",
    shortName: "ESLSE",
    category: "NATIONAL MULTIMODAL ALLIANCE",
    sectorTag: "MULTIMODAL CORRIDOR",
    logo: "/assets/partners/ethiopian_shipping.png",
    scope: "Seamless road-rail multimodal coordination between Djibouti seaports and Mojo dry port terminal.",
  },
  {
    num: "07",
    name: "Commercial Bank of Ethiopia",
    shortName: "CBE",
    category: "FINANCIAL & TRADE SETTLEMENT",
    sectorTag: "STATE BANK",
    logo: "/assets/partners/cbe.png",
    scope: "Institutional import/export letters of credit, customs guarantees, and cargo collateral assurance.",
  },
  {
    num: "08",
    name: "Bank of Abyssinia",
    shortName: "BANK OF ABYSSINIA",
    category: "COMMERCIAL BANKING PARTNER",
    sectorTag: "TRADE FINANCE",
    logo: "/assets/partners/abyssinia.png",
    scope: "Commercial cross-border financing, merchant banking, and fast-track trade documentary credit.",
  },
  {
    num: "09",
    name: "Ministry of Agriculture (FDRE)",
    shortName: "MIN. OF AGRICULTURE",
    category: "FEDERAL GOVERNMENT STRATEGIC PARTNER",
    sectorTag: "FOOD SECURITY",
    logo: "/assets/partners/ministry_agriculture.png",
    scope: "Nationwide seasonal distribution of bulk agricultural fertilizer, seed stock, and agrarian machinery.",
  },
  {
    num: "10",
    name: "Ministry of Trade & Regional Integration",
    shortName: "MIN. OF TRADE",
    category: "FEDERAL REGULATORY PARTNER",
    sectorTag: "TRADE CORRIDOR",
    logo: "/assets/partners/ministry_trade.png",
    scope: "Regulatory border compliance, regional trade agreement facilitation, and transit cargo clearance.",
  },
  {
    num: "11",
    name: "Agricultural Transformation Institute",
    shortName: "ATI (ETHIOPIA)",
    category: "AGRI-DEVELOPMENT & TECH",
    sectorTag: "RURAL AGRI-TECH",
    logo: "/assets/partners/agriculture.png",
    scope: "Value-chain logistics connecting cooperative smallholders with international export corridors.",
  },
  {
    num: "12",
    name: "MASGI Industrial Logistics",
    shortName: "MASGI",
    category: "MANUFACTURING & HEAVY INDUSTRY",
    sectorTag: "HEAVY INDUSTRIAL",
    logo: "/assets/partners/masgi.png",
    scope: "Industrial raw material supply chains, heavy machinery transport, and factory floor distribution.",
  },
];

const ALL_PARTNERS = [...FLAGSHIP_PARTNERS, ...NATIONAL_PARTNERS];

interface PartnersSectionProps {
  hideBackground?: boolean;
}

export default function PartnersSection({ hideBackground = false }: PartnersSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-transparent py-16 sm:py-24 lg:py-32 select-none">
      {/* Background 4K Video Loop (when standalone) */}
      {!hideBackground && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <SafeBackgroundVideo
            src="/assets/gemini_generated_video_1adefa94.mp4"
            poster="/assets/partners_truck.jpg"
            className="w-full h-full object-cover object-[center_45%]"
            filterClass="filter brightness-[0.72] contrast-[1.12]"
            alt="Express Transport Multimodal Fleet Partner Operations"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-[#070B14]/40 to-[#070B14]/85 z-2" />
          <div className="absolute inset-0 bg-linear-to-r from-[#070B14]/80 via-transparent to-[#070B14]/80 z-2" />
        </div>
      )}

      <div className="relative z-10 max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            DESKTOP LAYOUT (lg & above)
            Tier 1: Monumental Title (left) + 4 Flagship Global Cards (right)
            Tier 2: 8 National & Industrial Enterprise Cards (4 cols x 2 rows)
            ======================================================== */}
        <div className="hidden lg:flex flex-col gap-6 xl:gap-8">
          
          {/* TIER 1: Monumental Title + Flagship 4 */}
          <div className="flex gap-4 xl:gap-6 items-stretch">
            
            {/* Top-Left: Massive Stacked "PARTNERS CLIENTS" */}
            <div className="w-[40%] xl:w-[38%] flex flex-col justify-between pr-6 xl:pr-10 pt-2">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span className="text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                    STRATEGIC ALLIANCES & CARRIER ROSTER
                  </span>
                </div>

                <AnimatedText
                  text={"PARTNERS\nCLIENTS"}
                  as="h2"
                  delay={0.15}
                  stagger={0.035}
                  className="font-headline text-7xl xl:text-8xl 2xl:text-[10rem] text-white leading-[0.8] tracking-[-0.03em] uppercase drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
                />

                <p className="text-sm xl:text-base text-slate-300 font-sans max-w-md leading-relaxed mt-6">
                  Direct contractual carriage for international humanitarian relief agencies, global shipping lines, and leading Ethiopian industrial and financial institutions.
                </p>
              </div>

              {/* Express PTL 3-Part Operational Philosophy */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5 max-w-md text-xs text-slate-300 font-sans">
                <div className="flex items-start gap-2.5">
                  <span className="text-[#FF5A1F] font-bold">01.</span>
                  <span>Managed by global institutions, elevating our team&apos;s operational standards.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#FF5A1F] font-bold">02.</span>
                  <span>International cooperation sharpens our cross-border logistics capacity.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-[#FF5A1F] font-bold">03.</span>
                  <span>Uplifting critical emergency aid provides meaningful human impact.</span>
                </div>
              </div>

              {/* Verified Count Pill */}
              <div className="mt-6 flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 flex items-center gap-2 text-xs font-headline tracking-wider text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  <span>12 VERIFIED INSTITUTIONAL PARTNERS</span>
                </div>
              </div>
            </div>

            {/* Top-Right: 4 Flagship Global Cards in a 2x2 Grid */}
            <div className="w-[60%] xl:w-[62%] grid grid-cols-2 gap-4 xl:gap-5">
              {FLAGSHIP_PARTNERS.map((partner, index) => (
                <motion.div
                  key={partner.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-3xl p-6 xl:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:border-[#FF5A1F]/60 cursor-default bg-[#F4F4F7]/5 border border-white/15 backdrop-blur-[45px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] min-h-75"
                >
                  {/* Subtle hover radial reflection */}
                  <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Header: Number & Sector Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 group-hover:text-white font-headline text-2xl xl:text-3xl tracking-widest transition-colors">
                      {partner.num}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider text-[#FF5A1F] uppercase font-headline">
                      {partner.sectorTag}
                    </span>
                  </div>

                  {/* Center: Real Logo on Pristine White Emblem Card */}
                  <div className="my-auto py-4 flex flex-col items-center justify-center">
                    <div className="w-full max-w-52.5 h-20 xl:h-22 bg-white rounded-2xl p-3.5 flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/20 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={180}
                        height={60}
                        className="max-h-full max-w-full object-contain filter contrast-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Card Footer: Partner Name & Category */}
                  <div>
                    <h3 className="font-headline text-base xl:text-lg text-white uppercase tracking-wider group-hover:text-[#FF5A1F] transition-colors line-clamp-1">
                      {partner.name}
                    </h3>
                    <p className="text-[11px] font-bold tracking-[0.15em] text-white/50 uppercase mt-0.5">
                      {partner.category}
                    </p>
                    <p className="text-xs text-slate-400 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {partner.scope}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* TIER 2: National Enterprise & Government Alliances (8 Cards in 4x2 Grid) */}
          <div className="mt-4 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                <h4 className="text-xs font-bold tracking-[0.25em] text-white/70 uppercase font-headline">
                  DOMESTIC INSTITUTIONS & REGIONAL ENTERPRISE NETWORK
                </h4>
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase font-headline">
                CROSS-BORDER & COMMODITY CORRIDORS
              </span>
            </div>

            <div className="grid grid-cols-4 gap-4 xl:gap-5">
              {NATIONAL_PARTNERS.map((partner, index) => (
                <motion.div
                  key={partner.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.35 + index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-2xl xl:rounded-3xl p-5 xl:p-6 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:border-[#FF5A1F]/60 cursor-default bg-[#F4F4F7]/5 border border-white/15 backdrop-blur-[35px] shadow-[0_15px_45px_rgba(0,0,0,0.4)] min-h-65"
                >
                  <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Card Header: Number & Sector Badge */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/40 group-hover:text-white font-headline text-xl tracking-widest transition-colors">
                      {partner.num}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-wider text-[#FF5A1F] uppercase font-headline">
                      {partner.sectorTag}
                    </span>
                  </div>

                  {/* Center: Real Logo on Pristine White Emblem Card */}
                  <div className="my-auto py-3 flex flex-col items-center justify-center">
                    <div className="w-full max-w-42.5 h-16 xl:h-18 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-md border border-white/20 transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={150}
                        height={50}
                        className="max-h-full max-w-full object-contain filter contrast-[1.05]"
                      />
                    </div>
                  </div>

                  {/* Card Footer: Partner Name & Category */}
                  <div>
                    <h3 className="font-headline text-sm xl:text-base text-white uppercase tracking-wider group-hover:text-[#FF5A1F] transition-colors line-clamp-1">
                      {partner.name}
                    </h3>
                    <p className="text-[10px] font-bold tracking-[0.15em] text-white/50 uppercase mt-0.5">
                      {partner.category}
                    </p>
                    <p className="text-[11px] text-slate-400 font-sans mt-1.5 line-clamp-2 leading-relaxed">
                      {partner.scope}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* ========================================================
            MOBILE / TABLET LAYOUT (< 1024px): RESPONSIVE STACK
            ======================================================== */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Header */}
          <div className="mb-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline block mb-2">
              STRATEGIC ALLIANCES & CARRIERS
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.85] tracking-tight">
              PARTNERS <br />
              CLIENTS
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-sans mt-4 max-w-lg leading-relaxed">
              Direct contractual carriage for international humanitarian relief agencies, global shipping lines, and leading Ethiopian industrial partners.
            </p>
          </div>

          {/* 12 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ALL_PARTNERS.map((partner) => (
              <div
                key={partner.num}
                className="relative rounded-2xl p-5 flex flex-col justify-between overflow-hidden bg-[#F4F4F7]/6 border border-white/15 backdrop-blur-[30px] shadow-xl min-h-55"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/40 font-headline text-lg tracking-widest">
                    {partner.num}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold tracking-wider text-[#FF5A1F] uppercase font-headline">
                    {partner.sectorTag}
                  </span>
                </div>

                <div className="my-auto py-3 flex items-center justify-center">
                  <div className="w-full max-w-42.5 h-16 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-md">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={150}
                      height={50}
                      className="max-h-full max-w-full object-contain filter contrast-[1.05]"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="font-headline text-sm text-white uppercase tracking-wider line-clamp-1">
                    {partner.name}
                  </h3>
                  <span className="text-[10px] font-bold tracking-widest text-[#FF5A1F] uppercase block mt-0.5">
                    {partner.category}
                  </span>
                  <p className="text-[11px] text-slate-400 font-sans mt-1 line-clamp-2 leading-relaxed">
                    {partner.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
