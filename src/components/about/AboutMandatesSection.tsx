"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { ShieldCheck, Truck, Warehouse, CheckCircle2 } from "lucide-react";

interface MandateItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
  points?: string[];
  icon: React.ReactNode;
}

const MANDATES: MandateItem[] = [
  {
    num: "01",
    tag: "ZERO-DISRUPTION",
    title: "Zero-Disruption Logistics Philosophy",
    desc: "Equipped with dedicated backup prime movers, designated mobile technical workshop units, and satellite routing to prevent convoy delays across remote rift-valley corridors.",
    icon: <Truck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "02",
    tag: "HUMANITARIAN LIFELINE",
    title: "Certified UN Humanitarian Partner",
    desc: "We give special focus to humanitarian aid cargo for three core reasons:",
    points: [
      "Rigorous oversight by international bodies elevates our operational standards.",
      "Global partnerships enhance our multilateral cross-border experience.",
      "Delivering relief directly supports vulnerable communities in need.",
    ],
    icon: <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "03",
    tag: "DIRECT BROKERAGE",
    title: "In-House Customs Accreditation",
    desc: "Licensed Authorized Economic Operator (AEO) with dedicated in-house brokerage stationed at Djibouti Port, Galafi border, and Modjo Dry Port executing fast-track manifest clearance.",
    icon: <Warehouse className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function AboutMandatesSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#070B14] relative border-b border-white/5 select-none">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header with MVP Character Drop */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
              OPERATIONAL CORE MANDATES
            </span>
          </div>

          <AnimatedText
            text="OUR STRATEGIC PILLARS"
            as="h2"
            delay={0.1}
            stagger={0.03}
            className="font-headline text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.9]"
          />
        </div>

        {/* 3 Numbered Mandate Cards Grid (.goals__container) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {MANDATES.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-[#0D1322] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 p-8 sm:p-12 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-2 min-h-[480px]"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF5A1F]/10 rounded-full blur-2xl group-hover:bg-[#FF5A1F]/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* MVP .goals__item-number: Monumental Watermark Numeral */}
                <div className="flex items-start justify-between mb-4">
                  <span className="font-headline text-7xl sm:text-8xl lg:text-9xl text-white/10 group-hover:text-[#FF5A1F]/25 transition-colors duration-500 leading-none select-none">
                    {item.num}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <span className="text-[11px] font-extrabold tracking-widest text-[#FF5A1F] uppercase block mb-3">
                  {item.tag}
                </span>

                <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-snug mb-4">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {item.desc}
                </p>

                {item.points && (
                  <div className="space-y-2.5 pt-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-wider font-semibold">Standard Operating Protocol</span>
                <span className="text-white/60 font-mono">100% Verified</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
