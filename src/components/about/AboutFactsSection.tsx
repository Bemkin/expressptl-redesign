"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { Globe2, Anchor, Building2, Weight } from "lucide-react";

interface FactItem {
  val: string;
  label: string;
  desc: string;
}

const FACTS: FactItem[] = [
  {
    val: "76",
    label: "ACTIVE HEAVY TRUCKS",
    desc: "100% company-owned late-model prime movers with 40 MT payload each, zero dispatch cancellations.",
  },
  {
    val: "2,916 MT",
    label: "SYNCHRONOUS LIFT",
    desc: "Largest private single-dispatch heavy lift capability in Ethiopia, transporting industrial turbines and project cargo.",
  },
  {
    val: "158,636 MT",
    label: "AID CARGO UPLIFTED",
    desc: "158,636 metric tons of emergency relief and 2,188 containerized shipments delivered for UN WFP and partners across 10 Ethiopian destinations.",
  },
  {
    val: "99.98%",
    label: "SECURITY & SAFETY RECORD",
    desc: "Zero-hijack escort protocol, satellite route monitoring, and preventive maintenance standards.",
  },
];

// Exact 4 Counters from original https://expressptl.com/about-us/
const ORIGINAL_ABOUT_COUNTERS = [
  {
    val: "06+",
    label: "Countries Covered",
    desc: "Ethiopia, Djibouti, Kenya, South Sudan, Sudan, Uganda",
    icon: <Globe2 className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    val: "04",
    label: "Ports Covered",
    desc: "Djibouti Port, Mombasa, Berbera, and Lamu Gateway",
    icon: <Anchor className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    val: "150+",
    label: "Satisfied Clients",
    desc: "Multinational corporations, UN humanitarian agencies, NGOs",
    icon: <Building2 className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    val: "MILLIONS+",
    label: "Tonnage Delivered",
    desc: "Bulk agricultural, heavy industrial, and commercial shipments",
    icon: <Weight className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function AboutFactsSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#070B14] relative border-b border-white/5 select-none">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header with MVP Character Peel */}
        <div className="flex flex-col items-start mb-14 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
              PROVEN PERFORMANCE & REACH
            </span>
          </div>

          <AnimatedText
            text="FACTS ABOUT US"
            as="h2"
            delay={0.1}
            stagger={0.03}
            className="font-headline text-5xl sm:text-7xl lg:text-8xl text-white uppercase tracking-tight leading-[0.9]"
          />
        </div>

        {/* 1. Primary 4 Heavy Fleet Power Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {FACTS.map((fact, idx) => (
            <motion.div
              key={fact.val}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-[#0D1322] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-2 min-h-[380px]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A1F]/10 rounded-full blur-xl group-hover:bg-[#FF5A1F]/20 transition-all duration-500 pointer-events-none" />

              <div>
                <span className="font-headline text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[0.9] block mb-4 group-hover:text-[#FF5A1F] transition-colors duration-300">
                  {fact.val}
                </span>

                <span className="text-xs font-extrabold tracking-widest text-[#FF5A1F] uppercase block mb-4">
                  {fact.label}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {fact.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Fleet Asset Metric</span>
                <span className="text-[#FF5A1F]">● Verified Active</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2. Original 4 About Us Counters Strip (Countries, Ports, Clients, Millions+ Tonnage) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-linear-to-r from-[#171938] via-[#1B1E3D] to-[#171938] border border-white/15 p-8 sm:p-12 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#FF5A1F] uppercase block mb-1">
                REGIONAL REACH & ENTERPRISE SATISFACTION
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-tight">
                OPERATIONAL FOOTPRINT ACROSS EAST AFRICA
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
              LIVE NETWORK AUDIT
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ORIGINAL_ABOUT_COUNTERS.map((cnt, i) => (
              <div key={i} className="flex flex-col justify-between border-l-2 border-[#FF5A1F] pl-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-headline text-3xl sm:text-4xl text-white tracking-tight">
                      {cnt.val}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                      {cnt.icon}
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-200 block mb-1">
                    {cnt.label}
                  </span>
                  <span className="text-xs text-slate-400 leading-relaxed block">
                    {cnt.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
