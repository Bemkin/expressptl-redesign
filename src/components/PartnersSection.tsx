"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

interface PartnerItem {
  num: string;
  name: string;
  category: string;
  badge: React.ReactNode;
}

const PARTNERS: PartnerItem[] = [
  {
    num: "01",
    name: "UN WFP",
    category: "HUMANITARIAN LIFELINE PARTNER",
    badge: (
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 160 55" fill="currentColor" className="h-12 sm:h-14 w-auto text-white">
          <circle cx="26" cy="27" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M26 12v30M14 27h24M18 19l16 16M34 19L18 35" stroke="currentColor" strokeWidth="2" />
          <text x="56" y="27" fontFamily="var(--font-headline), sans-serif" fontWeight="700" fontSize="22" fill="#FFFFFF" letterSpacing="0.05em">
            UN WFP
          </text>
          <text x="56" y="42" fontFamily="var(--font-body), sans-serif" fontSize="10" fill="#CBD5E1" letterSpacing="0.08em" fontWeight="600">
            WORLD FOOD PROGRAMME
          </text>
        </svg>
      </div>
    ),
  },
  {
    num: "02",
    name: "MAERSK",
    category: "GLOBAL OCEAN & INTERMODAL ALLIANCE",
    badge: (
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 180 55" fill="currentColor" className="h-11 sm:h-13 w-auto text-white">
          <polygon points="26,10 30,22 42,22 32,30 36,42 26,34 16,42 20,30 10,22 22,22" fill="#40B4E5" />
          <text x="52" y="36" fontFamily="var(--font-headline), sans-serif" fontWeight="800" fontSize="28" fill="#FFFFFF" letterSpacing="0.1em">
            MAERSK
          </text>
        </svg>
      </div>
    ),
  },
  {
    num: "03",
    name: "MSC",
    category: "MEDITERRANEAN SHIPPING COMPANY",
    badge: (
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 160 55" fill="currentColor" className="h-12 sm:h-14 w-auto text-white">
          <text x="25" y="38" fontFamily="var(--font-headline), sans-serif" fontWeight="900" fontSize="42" fill="#FFC82C" letterSpacing="0.06em">
            msc
          </text>
          <text x="105" y="28" fontFamily="var(--font-body), sans-serif" fontSize="9" fill="#94A3B8" fontWeight="700" letterSpacing="0.12em">
            CARGO
          </text>
          <text x="105" y="40" fontFamily="var(--font-body), sans-serif" fontSize="9" fill="#94A3B8" fontWeight="700" letterSpacing="0.12em">
            LOGISTICS
          </text>
        </svg>
      </div>
    ),
  },
  {
    num: "04",
    name: "CMA CGM",
    category: "TRANS-CONTINENTAL SHIPPING ALLIANCE",
    badge: (
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 190 55" fill="currentColor" className="h-11 sm:h-13 w-auto text-white">
          <text x="20" y="37" fontFamily="var(--font-headline), sans-serif" fontWeight="800" fontSize="30" fill="#FFFFFF" letterSpacing="0.08em">
            CMA CGM
          </text>
        </svg>
      </div>
    ),
  },
  {
    num: "05",
    name: "BOLLORÉ AGL",
    category: "AFRICA GLOBAL LOGISTICS NETWORK",
    badge: (
      <div className="flex flex-col items-center justify-center text-center">
        <svg viewBox="0 0 190 55" fill="currentColor" className="h-11 sm:h-13 w-auto text-white">
          <text x="20" y="36" fontFamily="var(--font-headline), sans-serif" fontWeight="800" fontSize="26" fill="#FFFFFF" letterSpacing="0.14em">
            BOLLORÉ
          </text>
          <text x="145" y="24" fontFamily="var(--font-body), sans-serif" fontSize="10" fill="#FF5A1F" fontWeight="800">
            AGL
          </text>
        </svg>
      </div>
    ),
  },
];

interface PartnersSectionProps {
  hideBackground?: boolean;
}

export default function PartnersSection({ hideBackground = false }: PartnersSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-transparent py-16 sm:py-24 lg:py-32 select-none">
      {/* ========================================================
          BACKGROUND: SEAMLESS 4K TRUCK VIDEO LOOP WITH BRAND LOGO
          (Rendered only if not hosted in a shared continuous viewport)
          ======================================================== */}
      {!hideBackground && (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/partners_truck.jpg"
            className="w-full h-full object-cover object-[center_45%] filter brightness-[0.72] contrast-[1.12]"
          >
            <source src="/assets/gemini_generated_video_1adefa94.mp4" type="video/mp4" />
          </video>

          {/* Ambient Dark Industrial Vignette Overlays matching #070B14 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-[#070B14]/85" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14]/80 via-transparent to-[#070B14]/80" />
        </div>
      )}

      {/* ========================================================
          CONTENT: ASYMMETRIC STAGGERED FROSTED GLASS GRID
          ======================================================== */}
      <div className="relative z-10 max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            DESKTOP LAYOUT (lg & above): EXACT MVP LOGISTICS ASYMMETRY
            Row 1: Title (left) + Card 01 & Card 02 (right)
            Row 2: Card 03 + Card 04 + Card 05 (spanning full width)
            ======================================================== */}
        <div className="hidden lg:flex flex-col gap-3 xl:gap-3.5">
          
          {/* TOP ROW: Monumental Headline on left + Cards 01 & 02 on right */}
          <div className="flex gap-3 xl:gap-3.5 items-stretch">
            
            {/* Top-Left: Massive Stacked "PARTNERS CLIENTS" */}
            <div className="w-[43%] xl:w-[42%] flex flex-col justify-between pr-8 xl:pr-12 pt-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.25em] text-white/80 uppercase font-headline">
                  STRATEGIC ALLIANCES
                </span>
              </div>

              <AnimatedText
                text={"PARTNERS\nCLIENTS"}
                as="h2"
                delay={0.15}
                stagger={0.035}
                className="font-headline text-8xl xl:text-[10.5rem] 2xl:text-[12.5rem] text-white leading-[0.78] tracking-[-0.03em] uppercase drop-shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
              />

              <p className="text-sm xl:text-base text-slate-300 font-sans max-w-md leading-relaxed mt-6">
                Direct contractual carriage for premier ocean carriers, international food aid programs, and regional infrastructure leaders across East Africa.
              </p>
            </div>

            {/* Top-Right: Card 01 & Card 02 */}
            <div className="w-[57%] xl:w-[58%] grid grid-cols-2 gap-3 xl:gap-3.5">
              {PARTNERS.slice(0, 2).map((partner, index) => (
                <motion.div
                  key={partner.num}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + index * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-[24px] sm:rounded-[28px] h-[340px] xl:h-[375px] p-8 xl:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:border-[#FF5A1F]/60 cursor-default bg-[#F4F4F7]/[0.05] border border-white/15 backdrop-blur-[45px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
                >
                  {/* Subtle hover radial reflection */}
                  <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top-left number */}
                  <span className="text-white/50 group-hover:text-white font-headline text-2xl xl:text-3xl tracking-widest transition-colors">
                    {partner.num}
                  </span>

                  {/* Center Brand Mark */}
                  <div className="flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                    {partner.badge}
                  </div>

                  {/* Bottom partner category descriptor */}
                  <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 group-hover:text-[#FF5A1F] uppercase transition-colors">
                    {partner.category}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

          {/* BOTTOM ROW: Cards 03, 04, 05 Spanning Edge-to-Edge */}
          <div className="grid grid-cols-3 gap-3 xl:gap-3.5">
            {PARTNERS.slice(2, 5).map((partner, index) => (
              <motion.div
                key={partner.num}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-[24px] sm:rounded-[28px] h-[340px] xl:h-[375px] p-8 xl:p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:scale-[1.015] hover:border-[#FF5A1F]/60 cursor-default bg-[#F4F4F7]/[0.05] border border-white/15 backdrop-blur-[45px] shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
              >
                {/* Subtle hover radial reflection */}
                <div className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top-left number */}
                <span className="text-white/50 group-hover:text-white font-headline text-2xl xl:text-3xl tracking-widest transition-colors">
                  {partner.num}
                </span>

                {/* Center Brand Mark */}
                <div className="flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                  {partner.badge}
                </div>

                {/* Bottom partner category descriptor */}
                <span className="text-[11px] font-bold tracking-[0.2em] text-white/60 group-hover:text-[#FF5A1F] uppercase transition-colors">
                  {partner.category}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ========================================================
            MOBILE / TABLET LAYOUT (< 1024px): RESPONSIVE STACK
            ======================================================== */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Header */}
          <div className="mb-2">
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline block mb-2">
              STRATEGIC ALLIANCES
            </span>
            <h2 className="font-headline text-6xl sm:text-7xl text-white uppercase leading-[0.85] tracking-tight">
              PARTNERS <br />
              CLIENTS
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PARTNERS.map((partner) => (
              <div
                key={partner.num}
                className="relative rounded-2xl h-[240px] sm:h-[260px] p-6 flex flex-col justify-between overflow-hidden bg-[#F4F4F7]/[0.06] border border-white/15 backdrop-blur-[30px] shadow-xl"
              >
                <span className="text-white/50 font-headline text-xl tracking-widest">
                  {partner.num}
                </span>

                <div className="flex items-center justify-center my-auto">
                  {partner.badge}
                </div>

                <span className="text-[10px] font-bold tracking-widest text-white/60 uppercase">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
