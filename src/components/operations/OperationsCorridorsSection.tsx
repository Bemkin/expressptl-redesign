"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

// Source: Express PTL's published humanitarian aid cargo delivery record (expressptl.com), 2022–2026.
interface DeliveryRecord {
  id: string;
  label: string;
  unit: string;
  total: number;
  byDestination: { name: string; value: number }[];
  byYear: { year: string; value: number }[];
}

const RECORDS: DeliveryRecord[] = [
  {
    id: "bulk",
    label: "BULK CARGO",
    unit: "MT",
    total: 158636,
    byDestination: [
      { name: "Kombolcha", value: 71683 },
      { name: "Adama", value: 28215 },
      { name: "Mekelle", value: 26136 },
      { name: "Hawassa", value: 14185 },
      { name: "Addis Ababa", value: 6400 },
      { name: "Dire Dawa", value: 5467 },
      { name: "Bahir Dar", value: 2690 },
      { name: "Nefas Mewcha", value: 2000 },
      { name: "Semera", value: 960 },
      { name: "Dessie", value: 900 },
    ],
    byYear: [
      { year: "2022", value: 77096 },
      { year: "2023", value: 22220 },
      { year: "2024", value: 6400 },
      { year: "2025", value: 52920 },
    ],
  },
  {
    id: "containers",
    label: "CONTAINERIZED CARGO",
    unit: "containers",
    total: 2188,
    byDestination: [
      { name: "Kombolcha", value: 880 },
      { name: "Mekelle", value: 525 },
      { name: "Adama", value: 263 },
      { name: "Hawassa", value: 244 },
      { name: "Nefas Mewcha", value: 144 },
      { name: "Dire Dawa", value: 119 },
      { name: "Semera", value: 13 },
    ],
    byYear: [
      { year: "2022", value: 514 },
      { year: "2023", value: 729 },
      { year: "2024", value: 334 },
      { year: "2025", value: 512 },
      { year: "2026", value: 99 },
    ],
  },
];

const fmt = (n: number) => n.toLocaleString("en-US");

export default function OperationsCorridorsSection() {
  const [activeId, setActiveId] = useState<string>(RECORDS[0].id);
  const active = RECORDS.find((r) => r.id === activeId) ?? RECORDS[0];
  const maxDest = Math.max(...active.byDestination.map((d) => d.value));

  return (
    <section id="corridors" className="py-24 sm:py-32 lg:py-40 bg-[#070B14] text-white border-b border-white/10 select-none relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#1F1F61]/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ========================================================
            HEADER ROW
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                SECTION 02 • WHERE WE DELIVER
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              HUMANITARIAN CARGO <br className="hidden sm:inline" />
              DELIVERED ACROSS ETHIOPIA.
            </h2>
          </div>

          <p className="text-sm text-slate-300 font-sans max-w-lg leading-relaxed">
            We transport bulk, containerized and commercial cargo across major trade routes, with a special focus on humanitarian aid. This is our aid cargo delivery record from 2022 to 2026.
          </p>
        </div>

        {/* ========================================================
            CARGO TYPE TABS
           ======================================================== */}
        <div role="tablist" aria-label="Cargo type" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {RECORDS.map((record) => {
            const isActive = record.id === activeId;
            return (
              <button
                key={record.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="delivery-panel"
                onClick={() => setActiveId(record.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-end justify-between gap-4 ${
                  isActive
                    ? "bg-[#0E1528] border-[#FF5A1F] shadow-lg shadow-[#FF5A1F]/15 scale-[1.01]"
                    : "bg-[#0A0E1A]/80 border-white/10 hover:border-white/20 hover:bg-[#0E1528]/50"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF5A1F] font-headline block mb-1">
                    2022 – 2026
                  </span>
                  <h3 className="font-headline text-lg sm:text-xl text-white uppercase tracking-wide leading-tight">
                    {record.label}
                  </h3>
                </div>
                <span className="font-headline text-3xl sm:text-4xl text-white font-bold whitespace-nowrap">
                  {fmt(record.total)} <span className="text-sm text-slate-400 uppercase">{record.unit}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            ACTIVE RECORD: BY DESTINATION + BY YEAR
           ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            id="delivery-panel"
            role="tabpanel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#0D1322] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          >
            {/* By destination */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline block mb-6">
                DELIVERED BY DESTINATION ({active.unit.toUpperCase()})
              </span>
              <ul className="space-y-3">
                {active.byDestination.map((d) => (
                  <li key={d.name} className="grid grid-cols-[8.5rem_1fr_auto] sm:grid-cols-[10rem_1fr_6rem] items-center gap-3 sm:gap-4">
                    <span className="flex items-center gap-2 font-headline text-sm sm:text-base text-white uppercase">
                      <MapPin className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" aria-hidden="true" />
                      {d.name}
                    </span>
                    <span className="h-3 rounded-full bg-white/5 overflow-hidden" aria-hidden="true">
                      <motion.span
                        className="block h-full rounded-full bg-[#FF5A1F]"
                        initial={{ width: 0 }}
                        animate={{ width: `${(d.value / maxDest) * 100}%` }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-slate-300 text-right tabular-nums">
                      {fmt(d.value)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* By year */}
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline block mb-6">
                DELIVERED BY YEAR
              </span>
              <dl className="space-y-3">
                {active.byYear.map((y) => (
                  <div key={y.year} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                    <dt className="font-headline text-lg text-slate-300">{y.year}</dt>
                    <dd className="font-headline text-2xl text-white font-bold tabular-nums">
                      {fmt(y.value)} <span className="text-xs text-slate-400 uppercase">{active.unit}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
