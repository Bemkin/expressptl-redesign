"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Radio } from "lucide-react";

interface TradeCorridor {
  id: string;
  name: string;
  tag: string;
  route: string;
  distance: string;
  transitTime: string;
  borderPost: string;
  significance: string;
  checkpoints: string[];
  telemetryStatus: string;
  specialty: string;
}

const TRADE_CORRIDORS: TradeCorridor[] = [
  {
    id: "djibouti",
    name: "DJIBOUTI – ADDIS ABABA STRATEGIC LIFELINE",
    tag: "PRIMARY ARTERY • >90% NATIONAL VOLUME",
    route: "Port of Djibouti (Doraleh) → Galafi Border → Modjo Dry Port → Addis Ababa",
    distance: "910 KM",
    transitTime: "3 – 4 Days (FCL) / 4 – 6 Days (OOG)",
    borderPost: "Galafi / Dewele (ECC AEO Priority Fast-Track)",
    significance:
      "The undisputed economic lifeline of Ethiopia. Carries over 90% of national containerized imports, capital infrastructure equipment, and international export commodities under bonded customs escort.",
    checkpoints: [
      "Doraleh Container Terminal (Djibouti Port)",
      "Galafi One-Stop Customs Border Post",
      "Awash Waystation & Relay Depot",
      "Modjo Multimodal Dry Port Hub",
      "Bole Bulbula Heavy Fleet Terminal (Addis Ababa)",
    ],
    telemetryStatus: "Active Continuous GPS Tracking (100% Corridor Visibility)",
    specialty: "Heavy transformers, containerized industrial lines, AEO customs bonded clearance",
  },
  {
    id: "berbera",
    name: "BERBERA – EASTERN ETHIOPIA ARTERY",
    tag: "STRATEGIC DIVERSIFICATION ARTERY",
    route: "Berbera Deepwater Port → Tog Wajaale → Jigjiga → Dire Dawa → Addis Ababa",
    distance: "880 KM",
    transitTime: "3 – 5 Days",
    borderPost: "Tog Wajaale One-Stop Customs Post",
    significance:
      "Strategic eastern maritime access corridor connecting the modernized deepwater port at Berbera directly to the Dire Dawa Free Trade Zone, industrial parks, and eastern agricultural producers.",
    checkpoints: [
      "Berbera DP World Maritime Berth",
      "Tog Wajaale Customs Border Gate",
      "Jigjiga Logistics Station",
      "Dire Dawa Dry Port & Free Trade Zone",
      "Modjo Dry Port Relay Station",
    ],
    telemetryStatus: "Satellite Geo-Fenced Corridor Monitoring",
    specialty: "Industrial park container transfers, breakbulk machinery, regional export cargo",
  },
  {
    id: "moyale",
    name: "MOYALE – SOUTHERN KENYA GATEWAY (LAPSSET)",
    tag: "REGIONAL INTER-STATE LINK",
    route: "Port of Mombasa / Lamu → Moyale OSBP → Hawassa Industrial Park → Addis Ababa",
    distance: "1,260 KM",
    transitTime: "4 – 6 Days",
    borderPost: "Moyale One-Stop Border Post (OSBP)",
    significance:
      "High-speed modern asphalt artery connecting the Indian Ocean seaports of Kenya directly to southern Ethiopia's textile hubs, manufacturing parks, and capital consumer markets.",
    checkpoints: [
      "Mombasa / Lamu Deepwater Terminal",
      "Isiolo Transit Relay Depot",
      "Moyale One-Stop Border Station",
      "Hawassa Industrial Park Terminal",
      "Addis Ababa Logistics Depot",
    ],
    telemetryStatus: "Real-Time Inter-State Axle Telemetry",
    specialty: "Cross-border consumer cargo, project construction steel, industrial raw materials",
  },
  {
    id: "metema",
    name: "SUDAN – METEMA RED SEA EXPORT ARTERY",
    tag: "NORTHWESTERN AGRO-EXPORT ARTERY",
    route: "Port Sudan → Gedaref → Metema Border → Gondar → Bahir Dar",
    distance: "860 KM",
    transitTime: "4 – 5 Days",
    borderPost: "Metema / Gallabat Border Crossing",
    significance:
      "Crucial overland export artery providing direct Red Sea maritime access for Amhara agricultural exporters, handling high-value sesame seed exports, pulses, and UN relief cargo.",
    checkpoints: [
      "Port Sudan Bulk Terminal",
      "Gedaref Logistics Relay Station",
      "Metema Customs Clearing Gate",
      "Gondar Agro-Logistics Depot",
      "Bahir Dar Industrial Hub",
    ],
    telemetryStatus: "GPS Armed Convoy Escort Monitoring",
    specialty: "Bulk sesame seed hoppers, coffee export containers, emergency aid supplies",
  },
];

export default function OperationsCorridorsSection() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>("djibouti");

  const activeCorridor =
    TRADE_CORRIDORS.find((c) => c.id === activeCorridorId) || TRADE_CORRIDORS[0];

  return (
    <section id="corridors" className="py-24 sm:py-32 lg:py-40 bg-[#070B14] text-white border-b border-white/10 select-none relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-[#1F1F61]/20 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            HEADER ROW: TITLE & CORRIDOR NETWORK SUMMARY
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                SECTION 02 • REGIONAL TRANSIT INFRASTRUCTURE
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              STRATEGIC TRADE CORRIDORS &amp; <br className="hidden sm:inline" />
              CROSS-BORDER ARTERIES.
            </h2>
          </div>

          <p className="text-sm text-slate-300 font-sans max-w-lg leading-relaxed">
            Express PTL operates scheduled convoy dispatches and synchronous heavy haulage along all primary freight corridors connecting deepwater Red Sea and Indian Ocean ports to landlocked Ethiopian dry ports.
          </p>
        </div>

        {/* ========================================================
            CORRIDOR SELECTOR TABS
           ======================================================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {TRADE_CORRIDORS.map((corridor) => {
            const isActive = corridor.id === activeCorridorId;
            return (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridorId(corridor.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-[#0E1528] border-[#FF5A1F] shadow-lg shadow-[#FF5A1F]/15 scale-[1.01]"
                    : "bg-[#0A0E1A]/80 border-white/10 hover:border-white/20 hover:bg-[#0E1528]/50"
                }`}
              >
                <div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#FF5A1F] font-headline block mb-1">
                    {corridor.tag}
                  </span>
                  <h3 className="font-headline text-lg sm:text-xl text-white uppercase tracking-wide leading-tight mb-3">
                    {corridor.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                  <span>{corridor.distance}</span>
                  <span className="text-white font-bold">{corridor.transitTime}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================
            ACTIVE CORRIDOR DETAIL CARD & WAYPOINTS
           ======================================================== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCorridor.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-[#0D1322] border border-white/10 p-8 sm:p-12 lg:p-16 shadow-2xl"
          >
            {/* Top Corridor Specs Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 border-b border-white/10 gap-6 mb-8">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#FF5A1F] font-headline block mb-2">
                  {activeCorridor.tag}
                </span>
                <h3 className="font-headline text-3xl sm:text-5xl text-white uppercase tracking-tight">
                  {activeCorridor.name}
                </h3>
              </div>

              {/* Stat Chips */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-headline">
                    Route Distance
                  </span>
                  <span className="font-headline text-2xl text-white font-bold">
                    {activeCorridor.distance}
                  </span>
                </div>

                <div className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block font-headline">
                    Average Transit
                  </span>
                  <span className="font-headline text-2xl text-[#FF5A1F] font-bold">
                    {activeCorridor.transitTime}
                  </span>
                </div>

                <div className="px-5 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center">
                  <span className="text-[10px] uppercase tracking-wider text-emerald-400 block font-headline">
                    Customs Protocol
                  </span>
                  <span className="font-headline text-sm text-emerald-300 font-bold">
                    AEO PRIORITY
                  </span>
                </div>
              </div>
            </div>

            {/* Middle: Corridor Description & Telemetry Status */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-start">
              <div className="lg:col-span-8">
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed mb-6">
                  {activeCorridor.significance}
                </p>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-slate-300">
                  <Radio className="w-4 h-4 text-[#FF5A1F] shrink-0 animate-pulse" />
                  <span><strong>Corridor Telematics:</strong> {activeCorridor.telemetryStatus}</span>
                </div>
              </div>

              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2">
                  PRIMARY CARGO SPECIALTY
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {activeCorridor.specialty}
                </p>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400 font-mono">
                  Border: {activeCorridor.borderPost}
                </div>
              </div>
            </div>

            {/* Bottom: Sequenced Transit Checkpoints (The Lifeline Pipeline) */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline block mb-6">
                TRANSIT STAGING &amp; CLEARANCE CHECKPOINTS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {activeCorridor.checkpoints.map((cp, idx) => (
                  <div
                    key={cp}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 relative flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="w-6 h-6 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center font-headline text-xs font-bold">
                        0{idx + 1}
                      </span>
                      {idx === 0 ? (
                        <span className="text-[9px] uppercase font-mono text-emerald-400 font-bold">Origin</span>
                      ) : idx === activeCorridor.checkpoints.length - 1 ? (
                        <span className="text-[9px] uppercase font-mono text-[#FF5A1F] font-bold">Terminal</span>
                      ) : (
                        <span className="text-[9px] uppercase font-mono text-slate-400">Waystation</span>
                      )}
                    </div>
                    <span className="font-headline text-sm sm:text-base text-white uppercase leading-snug">
                      {cp}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
