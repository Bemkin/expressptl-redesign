"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Truck, Compass, Calculator } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

interface MonogramItem {
  letter: string;
  tag: string;
  desc: string;
}

const MONOGRAM_ITEMS: MonogramItem[] = [
  {
    letter: "E",
    tag: "EQUIPMENT & FLEET",
    desc: "76 Company-Owned Prime Movers",
  },
  {
    letter: "P",
    tag: "PAYLOAD LIFT",
    desc: "2,916 MT Synchronous Capacity",
  },
  {
    letter: "T",
    tag: "TRADE CORRIDORS",
    desc: "Djibouti Lifeline & Regional Arcs",
  },
  {
    letter: "L",
    tag: "LOGISTICS HUB",
    desc: "14,000 m² Bole Bulbula Terminal",
  },
];

export default function OperationsHero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 bg-[#070B14] text-white border-b border-white/10 select-none overflow-hidden min-h-[85vh] flex flex-col justify-between">
      {/* Background Fleet Visual with Subtle Ken Burns Settle */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0.2 }}
        animate={{ scale: 1.0, opacity: 0.35 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/assets/hero_fleet.jpg"
          alt="Express PTL Heavy Haul Fleet"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-50 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14] via-[#070B14]/70 to-[#070B14]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#070B14]/60 to-[#070B14]" />
      </motion.div>

      {/* Ambient Glows */}
      <div className="absolute top-20 right-10 w-[600px] h-[600px] bg-[#FF5A1F]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-[#1F1F61]/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* Top Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
          <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
            HEAVY ROLLING STOCK • REGIONAL CORRIDORS • TARIFF ESTIMATOR
          </span>
        </motion.div>

        {/* Monumental Headline */}
        <div className="mb-8 sm:mb-12">
          <AnimatedText
            text={"FLEET &\nOPERATIONS"}
            as="h1"
            delay={0.35}
            stagger={0.038}
            className="font-headline text-6xl sm:text-8xl lg:text-[9rem] xl:text-[11rem] 2xl:text-[12.5rem] uppercase leading-[0.80] tracking-[-0.03em] text-white"
          />
        </div>

        {/* Expanding Baseline Guideline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-gradient-to-r from-[#FF5A1F] via-white/30 to-transparent origin-left mb-10 sm:mb-14"
        />

        {/* Middle Row: Subtitle & Quick Navigation Anchor Pills */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="max-w-2xl"
          >
            <p className="font-sans text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
              Express PTL delivers integrated heavy haulage, bonded customs clearance, and out-of-gauge industrial transport across Ethiopia and the Horn of Africa. Explore our 76-truck fleet, verified trade corridor arteries, and interactive freight tariff estimator.
            </p>
          </motion.div>

          {/* Quick-Jump Section Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <button
              onClick={() => handleScrollTo("fleet")}
              className="group px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF5A1F]/50 text-white font-headline text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer shadow-lg"
            >
              <Truck className="w-4 h-4 text-[#FF5A1F] transition-transform duration-300 group-hover:scale-110" />
              <span>01. Fleet &amp; Depot</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("corridors")}
              className="group px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF5A1F]/50 text-white font-headline text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer shadow-lg"
            >
              <Compass className="w-4 h-4 text-[#FF5A1F] transition-transform duration-300 group-hover:scale-110" />
              <span>02. Trade Corridors</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("calculator")}
              className="group px-5 py-3 rounded-xl bg-[#FF5A1F]/15 hover:bg-[#FF5A1F] border border-[#FF5A1F]/30 hover:border-[#FF5A1F] text-white font-headline text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2.5 transition-all cursor-pointer shadow-lg"
            >
              <Calculator className="w-4 h-4 text-[#FF5A1F] group-hover:text-white transition-colors" />
              <span>03. Rate Calculator</span>
              <ArrowDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Row: E.P.T.L. Monogram Pillar Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
          {MONOGRAM_ITEMS.map((item, idx) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05 + idx * 0.12 }}
              className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#FF5A1F]/40 transition-colors"
            >
              <span className="font-headline text-3xl sm:text-4xl font-extrabold text-[#FF5A1F] leading-none">
                {item.letter}
              </span>
              <div className="flex flex-col">
                <span className="font-headline text-xs sm:text-sm uppercase tracking-wider text-white font-bold block mb-1">
                  {item.tag}
                </span>
                <span className="text-xs text-slate-400 font-sans leading-snug">
                  {item.desc}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
