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
    name: "76 NEW TRUCKS, 40 MT EACH",
    category: "Our Fleet",
    power: "All trucks new",
    capacity: "40 MT each · 2,916 MT at a time",
    telemetry: "Cargo transport from source to destination",
    fleetCount: "76 Active Trucks",
    img: "/assets/fleet/prime_mover_corridor.jpg",
    highlights: [
      "Regular cargo transport across major trade routes",
      "Inland transport services across Ethiopia",
      "End-to-end logistics solutions for small and large businesses",
    ],
  },
  {
    id: "modular-lowbed",
    name: "COMMERCIAL & INDUSTRIAL SHIPMENTS",
    category: "Import & Industrial Cargo",
    power: "Machinery, steel, spare parts",
    capacity: "40 MT per truck",
    telemetry: "Customs clearance and forwarding available",
    fleetCount: "Commercial Cargo",
    img: "/assets/fleet/modular_heavy_lowbed.jpg",
    highlights: [
      "Light and heavy trucks, construction machinery, tires and batteries",
      "Factory raw materials, spare parts and all types of steel",
      "Imports from China, Korea, the UAE, Europe and other markets",
    ],
  },
  {
    id: "container-rig",
    name: "CONTAINERIZED CARGO",
    category: "Container Transport",
    power: "Standard shipping containers",
    capacity: "2,188 aid containers delivered (2022–2026)",
    telemetry: "Customs clearance and forwarding available",
    fleetCount: "Containers",
    img: "/assets/fleet/intermodal_container_rig.jpg",
    highlights: [
      "Containerized cargo moved from source to designated destination",
      "Customs clearance and cargo forwarding handled in-house",
      "Warehouse rental when cargo needs to wait",
    ],
  },
  {
    id: "bulk-agri",
    name: "BULK & AGRICULTURAL CARGO",
    category: "Bulk & Humanitarian Cargo",
    power: "Grain, pulses and oilseeds",
    capacity: "158,636 MT of aid cargo delivered (2022–2026)",
    telemetry: "Special focus on humanitarian aid cargo",
    fleetCount: "Bulk Cargo",
    img: "/assets/fleet/bulk_agri_sideboard.jpg",
    highlights: [
      "Sesame (Humera and Wollega), mung beans, soybeans, kidney beans, white beans and chickpeas for export",
      "Humanitarian aid cargo for international organizations",
      "Deliveries to Kombolcha, Adama, Mekelle, Hawassa and more",
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
                SECTION 01 • OUR FLEET
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              76 NEW TRUCKS &amp; <br className="hidden sm:inline" />
              THE CARGO WE MOVE.
            </h2>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D1322] border border-white/10 max-w-md shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-headline">
                TOTAL CAPACITY
              </span>
              <span className="text-xs font-bold text-[#FF5A1F] font-mono">
                ALL NEW
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-headline text-4xl sm:text-5xl text-white font-extrabold">
                2,916 MT
              </span>
              <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                At a time
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans leading-relaxed">
              Our fleet includes 76 active trucks, all new, each loading 40 MT. Together they move up to 2,916 MT of cargo at a time.
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
                        Cargo
                      </span>
                      <span className="font-semibold">{vehicle.power}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-headline">
                        Capacity
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
                  <span>FLEET &amp; CARGO</span>
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
                    <span><strong>Cargo:</strong> {selectedVehicle.power}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Radio className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                    <span><strong>Service:</strong> {selectedVehicle.telemetry}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2">
                    WHAT WE HANDLE
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
                <span>Cargo transport across major trade routes</span>
                <span className="text-[#FF5A1F] font-semibold font-mono">76 Active Trucks</span>
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
                alt="Express PTL facility"
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
                  FOOD PROCESSING FACTORY
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF5A1F] font-headline block mb-2">
                UNDER CONSTRUCTION • BOLE BULBULA, ADDIS ABABA
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight mb-4">
                GROWING INTO MANUFACTURING.
              </h3>
              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                As part of our long-term expansion, we are building a 14,000 m² food processing factory around Bole Bulbula in Addis Ababa. It will focus on food production and processing for both local supply and export.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-sans text-slate-400">
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">14,000 m²</span>
                  <span>Factory site</span>
                </div>
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">Food Processing</span>
                  <span>Production &amp; processing</span>
                </div>
                <div>
                  <span className="font-bold text-white block uppercase font-headline text-[11px]">Local &amp; Export</span>
                  <span>Supply markets</span>
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
                    HUMANITARIAN AID CARGO
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    A special focus of our transport work
                  </span>
                </div>
              </div>

              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-4">
                DELIVERING AID WHERE IT IS NEEDED.
              </h3>

              <p className="text-sm text-slate-300 font-sans leading-relaxed mb-8">
                We give special focus to humanitarian aid cargo. Working with professional international organizations raises our operational standards, and every delivery directly supports people in need.
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
                    Destinations Served
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-emerald-400 font-extrabold">
                    10 Cities
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-headline">
                    Active Fleet
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl text-white font-extrabold">
                    76 Trucks
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
                <span>VIEW DELIVERY RECORD (2022–2026)</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs text-slate-400 font-sans">
              <span>Deliveries to 10 destinations across Ethiopia, from Kombolcha and Mekelle to Hawassa and Semera.</span>
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
                      DELIVERY RECORD (2022 – 2026)
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl sm:text-4xl text-white uppercase tracking-tight">
                    HUMANITARIAN AID CARGO DELIVERED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans mt-1">
                    Bulk aid cargo and containerized shipments we delivered, by destination and year.
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
                <span>Express Transport & Logistics delivery records, 2022–2026.</span>
                <span className="text-[#FF5A1F] font-bold">158,636 MT bulk aid cargo • 2,188 containers</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
