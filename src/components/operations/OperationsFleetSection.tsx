"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Radio, Check, HeartHandshake, ArrowUpRight, X, FileSpreadsheet, PackageCheck } from "lucide-react";

// Ground-Truth Audited Transport Records directly from Express PTL (2022–2026)
interface AidCargoRecord {
  year: string;
  kombolcha?: number;
  adama?: number;
  direDawa?: number;
  mekelle?: number;
  hawassa?: number;
  semera?: number;
  nefasMewucha?: number;
  bahirDar?: number;
  dessie?: number;
  addisAbaba?: number;
  total: number;
}

const AID_CARGO_DATA: AidCargoRecord[] = [
  { year: "2022", kombolcha: 46197, adama: 19605, direDawa: 1200, hawassa: 10094, total: 77096 },
  { year: "2023", kombolcha: 7110, adama: 4610, direDawa: 1987, mekelle: 1918, hawassa: 1005, nefasMewucha: 2000, bahirDar: 2690, dessie: 900, total: 22220 },
  { year: "2024", addisAbaba: 6400, total: 6400 },
  { year: "2025", kombolcha: 18376, adama: 4000, direDawa: 2280, mekelle: 24218, hawassa: 3086, semera: 960, total: 52920 },
];

const AID_CARGO_TOTALS = {
  kombolcha: 71683,
  adama: 28215,
  direDawa: 5467,
  mekelle: 26136,
  hawassa: 14185,
  semera: 960,
  nefasMewucha: 2000,
  bahirDar: 2690,
  dessie: 900,
  addisAbaba: 6400,
  grandTotal: 158636,
};

interface ContainerRecord {
  year: string;
  kombolcha?: number;
  adama?: number;
  direDawa?: number;
  mekelle?: number;
  hawassa?: number;
  semera?: number;
  nefasMewucha?: number;
  total: number;
}

const CONTAINER_DATA: ContainerRecord[] = [
  { year: "2022", kombolcha: 514, total: 514 },
  { year: "2023", kombolcha: 179, adama: 157, direDawa: 8, mekelle: 43, hawassa: 205, nefasMewucha: 137, total: 729 },
  { year: "2024", kombolcha: 46, adama: 35, direDawa: 91, mekelle: 155, nefasMewucha: 7, total: 334 },
  { year: "2025", kombolcha: 126, adama: 31, direDawa: 4, mekelle: 312, hawassa: 39, total: 512 },
  { year: "2026", kombolcha: 15, adama: 40, direDawa: 16, mekelle: 15, semera: 13, total: 99 },
];

const CONTAINER_TOTALS = {
  kombolcha: 880,
  adama: 263,
  direDawa: 119,
  mekelle: 525,
  hawassa: 244,
  semera: 13,
  nefasMewucha: 144,
  grandTotal: 2188,
};

interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  power: string;
  capacity: string;
  telemetry: string;
  fleetCount: string;
  img: string;
  highlights: string[];
}

const FLEET_VEHICLES: FleetVehicle[] = [
  {
    id: "prime-mover",
    name: "40 MT HEAVY CORRIDOR PRIME MOVER",
    category: "Cross-Border Long-Haul Backbone",
    power: "High-Torque Turbocharged Powertrain",
    capacity: "40 MT Payload (2,916 MT Total Lift)",
    telemetry: "24/7 Satellite GPS & Wollo Sefer Dispatch",
    fleetCount: "76 Units 100% Company-Owned",
    img: "/assets/fleet/prime_mover_corridor.jpg",
    highlights: [
      "Dedicated prime movers for the primary Djibouti–Addis Ababa economic lifeline",
      "Late-model European heavy-duty trucks operated with zero broker dilution",
      "Continuous preventative maintenance schedule at Bole Bulbula 14,000 m² depot",
    ],
  },
  {
    id: "modular-lowbed",
    name: "MODULAR MULTI-AXLE HEAVY LOWBED",
    category: "Over-Dimensional Project Rigging",
    power: "Independent Multi-Axle Hydraulic Suspension",
    capacity: "Up to 150 MT Combined Train Weight",
    telemetry: "Computerized Deck Leveling & Steerable Bogies",
    fleetCount: "Dedicated Heavy Haul Division",
    img: "/assets/fleet/modular_heavy_lowbed.jpg",
    highlights: [
      "Engineered for heavy power transformers, industrial plant & substation turbines",
      "Adjustable hydraulic deck height for rugged terrain and overhead clearances",
      "Steerable multi-wheel bogies designed for tight mountainous corridor hairpins",
    ],
  },
  {
    id: "container-rig",
    name: "20FT & 40FT INTERMODAL CONTAINER RIG",
    category: "Maritime Port Multimodal Transit",
    power: "Tri-Axle Heavy Duty Container Chassis",
    capacity: "2x 20ft or 1x 40ft High-Cube Maritime Containers",
    telemetry: "Electronic Cargo Seal & GPS Corridor Tracking",
    fleetCount: "Full Corridor Deployment",
    img: "/assets/fleet/intermodal_container_rig.jpg",
    highlights: [
      "Twist-lock container stabilization for rugged Horn of Africa corridors",
      "Fast-track bonded customs escort directly to Modjo Dry Port under AEO license",
      "Partner multimodal carrier handling international shipping lines (Maersk, MSC)",
    ],
  },
  {
    id: "bulk-agri",
    name: "REINFORCED SIDEBOARD BULK AGRI-CARRIER",
    category: "Agricultural Commodity & Grain Haulage",
    power: "High-Tensile Steel Drop-Side Chassis",
    capacity: "40 MT Bulk Cargo & Palletized Freight",
    telemetry: "Tamper-Evident Tarpaulin Electronic Seal",
    fleetCount: "Dedicated Agricultural Division",
    img: "/assets/fleet/bulk_agri_sideboard.jpg",
    highlights: [
      "Weatherproof strapped heavy tarpaulin enclosures protecting sesame, coffee & pulses",
      "Direct harvest uplift from Humera, Gondar, and Wollega farming belts",
      "High-volume deployment for UN WFP humanitarian relief grain distribution",
    ],
  },
];

export default function OperationsFleetSection() {
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle>(FLEET_VEHICLES[0]);
  const [showLedgerModal, setShowLedgerModal] = useState(false);
  const [ledgerTab, setLedgerTab] = useState<"aid" | "container">("aid");

  return (
    <section id="fleet" className="py-24 sm:py-32 lg:py-40 bg-[#070B14] text-white border-b border-white/10 select-none relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#FF5A1F]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            HEADER ROW: TITLE & CAPACITY SUMMARY BADGE
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                SECTION 01 • COMPANY-OWNED ASSETS
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              76 PRIME MOVERS &amp; <br className="hidden sm:inline" />
              SPECIALIZED ROLLING STOCK.
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D1322] border border-white/10 max-w-md shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-headline">
                TOTAL COMBINED LIFT
              </span>
              <span className="text-xs font-bold text-[#FF5A1F] font-mono">
                100% OWNED
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline text-4xl sm:text-5xl text-white font-extrabold">
                2,916 MT
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                Single-Lift Capacity
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Every prime mover and trailer in our operations is directly owned, OEM-maintained, and operated under strict zero-subcontracting governance.
            </p>
          </div>
        </div>

        {/* ========================================================
            INTERACTIVE VEHICLE CATEGORY CARDS (GRID)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20 sm:mb-28">
          
          {/* Left Column: Vehicle Selector List (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            {FLEET_VEHICLES.map((vehicle) => {
              const isSelected = selectedVehicle.id === vehicle.id;
              return (
                <button
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#0E1528] border-[#FF5A1F] shadow-xl shadow-[#FF5A1F]/10 scale-[1.01]"
                      : "bg-[#0A0E1A]/70 border-white/10 hover:border-white/20 hover:bg-[#0E1528]/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#FF5A1F] font-headline">
                      {vehicle.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {vehicle.fleetCount}
                    </span>
                  </div>

                  <h3 className="font-headline text-xl sm:text-2xl text-white uppercase tracking-wide leading-tight mb-3">
                    {vehicle.name}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 text-xs font-sans text-slate-300 pt-3 border-t border-white/10">
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-headline">
                        Output
                      </span>
                      <span className="font-semibold">{vehicle.power}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-headline">
                        Max Capacity
                      </span>
                      <span className="font-semibold text-white">{vehicle.capacity}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Vehicle Visual Showcase (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1322] border border-white/10 overflow-hidden shadow-2xl flex flex-col">
            <div className="relative w-full aspect-[16/10] bg-[#070B14] overflow-hidden">
              <Image
                src={selectedVehicle.img}
                alt={selectedVehicle.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter brightness-90 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="bg-[#070B14]/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl text-xs font-headline uppercase tracking-wider text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span>CORRIDOR FLEET CONFIGURATION</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 bg-[#070B14]/85 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-xl text-xs font-mono text-[#FF5A1F]">
                <span>{selectedVehicle.fleetCount}</span>
              </div>
            </div>

            <div className="p-8 sm:p-10 flex flex-col justify-between flex-1">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline block mb-1">
                  {selectedVehicle.category}
                </span>
                <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
                  {selectedVehicle.name}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <Gauge className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                    <span><strong>Power:</strong> {selectedVehicle.power}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                    <span><strong>Telemetry:</strong> {selectedVehicle.telemetry}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2">
                    TECHNICAL CAPABILITIES &amp; INTEGRITY
                  </span>
                  {selectedVehicle.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-sans">
                <span>Licensed for Djibouti Corridor &amp; Regional Arteries</span>
                <span className="text-[#FF5A1F] font-semibold font-mono">100% Operational Readiness</span>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            BOLE BULBULA 14,000 M² HUB & RELIEF STATISTICS
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Bole Bulbula 14,000 m² Facility Card (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1322] border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/assets/facility.jpg"
                alt="Bole Bulbula 14,000 m² Logistics Terminal"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1322] via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 bg-[#070B14]/90 backdrop-blur-md border border-white/15 p-4 rounded-2xl">
                <span className="font-headline text-3xl sm:text-4xl text-white block leading-none font-bold">
                  14,000 M²
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#FF5A1F] uppercase font-headline">
                  HEAVY FLEET TERMINAL &amp; WORKSHOP
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF5A1F] font-headline block mb-2">
                CENTRAL LOGISTICS COMMAND • ADDIS ABABA
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                BOLE BULBULA OPERATIONAL TERMINAL.
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                Our owned 14,000 m² facility serves as the strategic marshalling yard for all 76 prime movers. Equipped with multi-bay preventative maintenance pits, diagnostic rigging rigs, bonded customs-escort staging, and 24/7 telematics operations room monitoring active Horn of Africa convoys.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-sans text-slate-400">
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">Preventative Bays</span>
                  <span>In-House OEM Overhauls</span>
                </div>
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">Bonded Staging</span>
                  <span>Customs-Escorted Storage</span>
                </div>
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">24/7 Dispatch</span>
                  <span>Continuous Satellite GPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: UN WFP Humanitarian Relief Impact Card (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0E1528] border border-white/10 p-8 sm:p-12 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF5A1F]/15 flex items-center justify-center text-[#FF5A1F]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline block">
                    HUMANITARIAN CARRIER
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    UN WFP &amp; Multilateral Agency Partner
                  </span>
                </div>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
                DEDICATED EMERGENCY RELIEF HAULAGE.
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
                Express PTL gives highest operational priority to humanitarian cargo. Over the last decade, our dedicated prime movers have transported life-saving food, medical supplies, and shelter materials into challenging environments with complete transparency and zero contraband policy.
              </p>

              {/* Statistics Counters */}
              <div className="space-y-3 mb-6">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                    Aid Cargo Delivered
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-white font-extrabold">
                    158,636 MT
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                    Containerized Units
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-[#FF5A1F] font-extrabold">
                    2,188 Units
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                    Mission Delivery Reliability
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-emerald-400 font-extrabold">
                    99.98%
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                    Direct Fleet Control
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-white font-extrabold">
                    76 Prime Movers
                  </span>
                </div>
              </div>

              {/* Verified Ledger Trigger Button */}
              <button
                type="button"
                onClick={() => setShowLedgerModal(true)}
                className="w-full py-3 px-4 rounded-xl bg-[#FF5A1F] hover:bg-[#ff723f] text-white font-headline text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer shadow-lg shadow-[#FF5A1F]/20"
              >
                <FileSpreadsheet className="w-4 h-4 text-white" />
                <span>VIEW AUDITED DISPATCH LEDGER (2022–2026)</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 font-sans">
              <span>Audited under UN Logistics Cluster safety and operational governance. Verified data across 10 regional hubs.</span>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
          AUTHENTIC AUDITED DISPATCH LEDGER MODAL (2022–2026)
          Exact ground-truth tables from Express PTL production
         ======================================================== */}
      <AnimatePresence>
        {showLedgerModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowLedgerModal(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl rounded-2xl bg-[#0D1322] border border-white/15 p-6 sm:p-8 md:p-10 shadow-2xl z-10 my-8 overflow-hidden max-h-[92vh] flex flex-col"
            >
              {/* Top Header */}
              <div className="flex items-start justify-between pb-6 border-b border-white/10 shrink-0">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                    <span className="text-xs font-bold tracking-[0.2em] text-[#FF5A1F] uppercase font-headline">
                      OFFICIAL DISPATCH RECORDS (2022 – 2026)
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl sm:text-4xl text-white uppercase tracking-tight">
                    EXPRESS PTL VERIFIED TRANSPORT CAPABILITY
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                    Audited capacity of uplifting for Humanitarian Aid Cargo and Containerized Shipments across Ethiopian trade corridors.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setShowLedgerModal(false)}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-3 my-6 shrink-0">
                <button
                  type="button"
                  onClick={() => setLedgerTab("aid")}
                  className={`py-2.5 px-5 rounded-xl font-headline text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    ledgerTab === "aid"
                      ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/25"
                      : "bg-white/5 hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>AID CARGO UPLIFT (158,636 MT)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setLedgerTab("container")}
                  className={`py-2.5 px-5 rounded-xl font-headline text-sm tracking-wider uppercase transition-all cursor-pointer flex items-center gap-2 ${
                    ledgerTab === "container"
                      ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/25"
                      : "bg-white/5 hover:bg-white/10 text-slate-300"
                  }`}
                >
                  <PackageCheck className="w-4 h-4" />
                  <span>CONTAINERIZED CARGO (2,188 UNITS)</span>
                </button>
              </div>

              {/* Table Body Area */}
              <div className="overflow-x-auto overflow-y-auto flex-1 border border-white/10 rounded-xl bg-black/30">
                {ledgerTab === "aid" ? (
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[980px]">
                    <thead>
                      <tr className="bg-white/[0.06] border-b border-white/10 text-slate-300 font-headline uppercase tracking-wider text-xs">
                        <th className="py-3 px-4 text-white">Year ↓</th>
                        <th className="py-3 px-3 text-right">Kombolcha</th>
                        <th className="py-3 px-3 text-right">Adama</th>
                        <th className="py-3 px-3 text-right">Dire Dawa</th>
                        <th className="py-3 px-3 text-right">Mekelle</th>
                        <th className="py-3 px-3 text-right">Hawassa</th>
                        <th className="py-3 px-3 text-right">Semera</th>
                        <th className="py-3 px-3 text-right">Nefas Mewucha</th>
                        <th className="py-3 px-3 text-right">Bahir Dar</th>
                        <th className="py-3 px-3 text-right">Dessie</th>
                        <th className="py-3 px-3 text-right">Addis Ababa</th>
                        <th className="py-3 px-4 text-right text-[#FF5A1F] font-bold">Total (MT)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-sans text-slate-300">
                      {AID_CARGO_DATA.map((row) => (
                        <tr key={row.year} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-headline text-base text-white">{row.year}</td>
                          <td className="py-3.5 px-3 text-right">{row.kombolcha ? row.kombolcha.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.adama ? row.adama.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.direDawa ? row.direDawa.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.mekelle ? row.mekelle.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.hawassa ? row.hawassa.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.semera ? row.semera.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.nefasMewucha ? row.nefasMewucha.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.bahirDar ? row.bahirDar.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.dessie ? row.dessie.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.addisAbaba ? row.addisAbaba.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-4 text-right font-headline text-base font-bold text-white">
                            {row.total.toLocaleString()} MT
                          </td>
                        </tr>
                      ))}
                      {/* Subtotal Row */}
                      <tr className="bg-[#FF5A1F]/10 border-t-2 border-[#FF5A1F]/40 font-bold text-white">
                        <td className="py-4 px-4 font-headline text-base text-[#FF5A1F]">SUBTOTAL</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.kombolcha.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.adama.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.direDawa.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.mekelle.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.hawassa.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.semera.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.nefasMewucha.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.bahirDar.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.dessie.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{AID_CARGO_TOTALS.addisAbaba.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-headline text-lg font-extrabold text-[#FF5A1F]">
                          {AID_CARGO_TOTALS.grandTotal.toLocaleString()} MT
                        </td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[780px]">
                    <thead>
                      <tr className="bg-white/[0.06] border-b border-white/10 text-slate-300 font-headline uppercase tracking-wider text-xs">
                        <th className="py-3 px-4 text-white">Year ↓</th>
                        <th className="py-3 px-3 text-right">Kombolcha</th>
                        <th className="py-3 px-3 text-right">Adama</th>
                        <th className="py-3 px-3 text-right">Dire Dawa</th>
                        <th className="py-3 px-3 text-right">Mekelle</th>
                        <th className="py-3 px-3 text-right">Hawassa</th>
                        <th className="py-3 px-3 text-right">Semera</th>
                        <th className="py-3 px-3 text-right">Nefas Mewucha</th>
                        <th className="py-3 px-4 text-right text-[#FF5A1F] font-bold">Total Containers</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-sans text-slate-300">
                      {CONTAINER_DATA.map((row) => (
                        <tr key={row.year} className="hover:bg-white/[0.02] transition-colors">
                          <td className="py-3.5 px-4 font-headline text-base text-white">{row.year}</td>
                          <td className="py-3.5 px-3 text-right">{row.kombolcha ? row.kombolcha.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.adama ? row.adama.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.direDawa ? row.direDawa.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.mekelle ? row.mekelle.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.hawassa ? row.hawassa.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.semera ? row.semera.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-3 text-right">{row.nefasMewucha ? row.nefasMewucha.toLocaleString() : "—"}</td>
                          <td className="py-3.5 px-4 text-right font-headline text-base font-bold text-white">
                            {row.total.toLocaleString()} Units
                          </td>
                        </tr>
                      ))}
                      {/* Subtotal Row */}
                      <tr className="bg-[#FF5A1F]/10 border-t-2 border-[#FF5A1F]/40 font-bold text-white">
                        <td className="py-4 px-4 font-headline text-base text-[#FF5A1F]">SUBTOTAL</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.kombolcha.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.adama.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.direDawa.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.mekelle.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.hawassa.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.semera.toLocaleString()}</td>
                        <td className="py-4 px-3 text-right">{CONTAINER_TOTALS.nefasMewucha.toLocaleString()}</td>
                        <td className="py-4 px-4 text-right font-headline text-lg font-extrabold text-[#FF5A1F]">
                          {CONTAINER_TOTALS.grandTotal.toLocaleString()} Units
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>

              {/* Bottom Summary Bar */}
              <div className="pt-4 mt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 shrink-0">
                <span>Directly sourced from Express Transport & Logistics operational dispatches (2022–2026).</span>
                <span className="text-[#FF5A1F] font-bold">158,636 MT Relief Cargo • 2,188 Container Dispatches</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
