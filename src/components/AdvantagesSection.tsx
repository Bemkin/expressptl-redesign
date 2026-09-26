"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, Warehouse, Radio, ThermometerSnowflake, Compass } from "lucide-react";
import AnimatedText from "./AnimatedText";

interface AdvantageItem {
  id: string;
  title: string;
  desc: string;
  isKey?: boolean;
  stat?: string;
  icon?: React.ReactNode;
}

const ADVANTAGES_LIST: AdvantageItem[] = [
  {
    id: "01",
    title: "13+ YEARS OF OVERLAND MASTERY",
    desc: "in international and cross-border heavy haulage across the Horn of Africa's most demanding corridors.",
    icon: <Compass className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "02",
    title: "76 HEAVY PRIME MOVERS",
    desc: "100% company-owned European specification fleet eliminating volatile third-party sub-haulier dependency.",
    icon: <Truck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "03",
    title: "2,916 MT SYNCHRONOUS LIFT",
    desc: "the largest private heavy-lift capability in Ethiopia for bulk, breakbulk & mega industrial projects.",
    isKey: true,
    stat: "180 MT Single Rigging",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "04",
    title: "IN-HOUSE BONDED CONTAINER DEPOT",
    desc: "licensed AEO status enabling 48–72h fast-track customs clearance and secure container staging.",
    icon: <Warehouse className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "05",
    title: "24/7 SATELLITE COMMAND CENTER",
    desc: "real-time GPS geofencing, axle load telemetry, and a verified 99.98% zero-incident security record.",
    icon: <Radio className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "06",
    title: "COLD CHAIN & SPECIALIZED RIGGING",
    desc: "precision -25°C to +25°C pharma reefers and hydraulic multi-axle modular trailers up to 180 MT.",
    icon: <ThermometerSnowflake className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function AdvantagesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".adv-card-row");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.55 && rect.bottom >= windowHeight * 0.15) {
          setActiveIdx(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercentage = ((activeIdx + 1) / ADVANTAGES_LIST.length) * 100;

  return (
    <section id="advantages" className="py-24 sm:py-32 bg-[#070B14] relative select-none">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN: STICKY MONUMENTAL TITLE & PROGRESS BAR
              Matches MVP's giant stacked typography and bottom rail
             ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col justify-between min-h-[300px] lg:min-h-[580px]">
            <div>
              {/* Subtle Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
                  OPERATIONAL SUPERIORITY
                </span>
              </div>

              {/* Monumental Stacked Headline with MVP Character Peel & Elastic Drop */}
              <AnimatedText
                text={"OUR\nADVANTAGES"}
                as="h2"
                delay={0.1}
                stagger={0.035}
                viewportMargin="-5%"
                className="font-headline text-6xl sm:text-8xl lg:text-[7.5rem] xl:text-[9rem] text-white uppercase leading-[0.82] tracking-tight mb-6"
              />

              <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed hidden sm:block">
                Built over 13+ years of high-stakes deployments, Express PTL integrates owned heavy assets, strategic customs infrastructure, and audited humanitarian standards.
              </p>
            </div>

            {/* Bottom Progress Bar Rail & Counter */}
            <div className="pt-8 lg:pt-12">
              <div className="flex items-center justify-between text-xs font-bold tracking-widest text-slate-400 uppercase mb-3">
                <span className="text-white font-headline text-2xl tracking-tight">
                  0{activeIdx + 1} <span className="text-slate-600 text-sm">/ 0{ADVANTAGES_LIST.length}</span>
                </span>
                <span className="text-[11px] text-[#FF5A1F]">CERTIFIED CAPABILITY</span>
              </div>

              {/* Progress Rail matching MVP track */}
              <div className="w-full max-w-[460px] h-[3px] bg-white/10 rounded-full relative overflow-hidden">
                <motion.div
                  className="h-full bg-[#FF5A1F] rounded-full"
                  initial={false}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SCROLLABLE CARDS STACK
              Generous 400px+ height for paced, deliberate scroll travel
             ======================================================== */}
          <div ref={containerRef} className="lg:col-span-7 flex flex-col gap-8 sm:gap-10">
            {ADVANTAGES_LIST.map((item, index) => {
              const isActive = index === activeIdx;

              if (item.isKey) {
                // HIGHLIGHT KEY CARD: Brand Navy #1B1E3D Canvas with MVP .opacity-block Reveal
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
                    className={`adv-card-row relative rounded-3xl p-10 sm:p-14 lg:p-16 min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-between overflow-hidden transition-all duration-500 border ${
                      isActive
                        ? "bg-gradient-to-b from-[#1F234B] via-[#1B1E3D] to-[#151833] border-[#FF5A1F]/60 shadow-[0_25px_60px_rgba(255,90,31,0.18)] scale-[1.01]"
                        : "bg-gradient-to-b from-[#1B1E3D]/90 via-[#181B38]/90 to-[#13152C]/90 border-white/15 opacity-85 hover:opacity-100 hover:border-[#FF5A1F]/40"
                    }`}
                  >
                    {/* Giant Watermark Number */}
                    <span className="absolute right-8 bottom-0 font-headline text-[130px] sm:text-[200px] text-white/[0.04] leading-none select-none pointer-events-none">
                      {item.id}
                    </span>

                    {/* Top Row: Meta Badge */}
                    <div className="relative z-10 flex items-center justify-between mb-8">
                      <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-md bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-xs font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                        <span>CORE FLEET ANCHOR</span>
                      </div>
                      <span className="font-headline text-3xl sm:text-4xl text-slate-500">
                        {item.id}
                      </span>
                    </div>

                    {/* Middle Row: Content Split */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                      <div className="md:col-span-7">
                        <h3 className="font-headline text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] text-white uppercase leading-[0.88] tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                      <div className="md:col-span-5">
                        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row Divider Line with MVP draw */}
                    <div className="relative z-10 w-full overflow-hidden mt-8 mb-6">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                        className="h-[1px] bg-gradient-to-r from-[#FF5A1F]/50 via-white/20 to-transparent"
                      />
                    </div>

                    {/* Bottom Row: Key Metrics */}
                    <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="font-headline text-3xl sm:text-4xl text-[#FF5A1F]">
                          2,916 MT
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                          Synchronous Lift Capacity
                        </span>
                      </div>
                      <div className="px-3.5 py-1.5 rounded-md bg-white/10 text-xs font-bold uppercase tracking-wider text-white">
                        {item.stat}
                      </div>
                    </div>
                  </motion.div>
                );
              }

              // STANDARD INDUSTRIAL CARDS: Minimalist Slate/Dark Navy with MVP .opacity-block Reveal
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
                  className={`adv-card-row relative rounded-3xl p-10 sm:p-14 lg:p-16 min-h-[340px] sm:min-h-[400px] lg:min-h-[440px] flex flex-col justify-between overflow-hidden transition-all duration-500 border ${
                    isActive
                      ? "bg-[#0E1424] border-white/25 shadow-[0_20px_50px_rgba(0,0,0,0.55)] scale-[1.01]"
                      : "bg-[#0A0F1A]/85 border-white/10 opacity-70 hover:opacity-95 hover:border-white/20"
                  }`}
                >
                  {/* Giant Watermark Number */}
                  <span className="absolute right-8 bottom-0 font-headline text-[130px] sm:text-[200px] text-white/[0.03] leading-none select-none pointer-events-none">
                    {item.id}
                  </span>

                  {/* Top Row: Meta Badge */}
                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        {item.icon}
                      </div>
                      <span className="text-[11px] font-extrabold text-[#FF5A1F] tracking-widest uppercase">
                        ADVANTAGE // {item.id}
                      </span>
                    </div>
                    <span className="font-headline text-3xl sm:text-4xl text-slate-600">
                      {item.id}
                    </span>
                  </div>

                  {/* Middle Row: Content Split */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto">
                    <div className="md:col-span-7">
                      <h3 className="font-headline text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] text-white uppercase leading-[0.88] tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Row Divider Line with MVP draw */}
                  <div className="relative z-10 w-full overflow-hidden mt-8 mb-6">
                    <motion.div
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                      className="h-[1px] bg-gradient-to-r from-white/25 via-white/10 to-transparent"
                    />
                  </div>

                  {/* Bottom Row: Verification Pill */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Express Transport & Logistics
                    </span>
                    <span className="text-xs font-semibold text-[#FF5A1F] uppercase tracking-wider">
                      Verified Infrastructure
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
