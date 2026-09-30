"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Clock, Truck, CheckCircle2, Send, Phone, Mail, ArrowUpRight, X } from "lucide-react";

interface RouteOption {
  label: string;
  value: string;
  baseDays: number;
  ratePerTon: number;
}

const ORIGINS: RouteOption[] = [
  { label: "Port of Djibouti (Doraleh DCT)", value: "djibouti", baseDays: 3, ratePerTon: 85 },
  { label: "Berbera Port (DP World)", value: "berbera", baseDays: 4, ratePerTon: 92 },
  { label: "Port of Mombasa (Kenya / LAPSSET)", value: "mombasa", baseDays: 5, ratePerTon: 110 },
  { label: "Modjo Multimodal Dry Port", value: "modjo", baseDays: 1, ratePerTon: 35 },
  { label: "Addis Ababa (Bole Bulbula)", value: "addis", baseDays: 1, ratePerTon: 30 },
];

const DESTINATIONS: RouteOption[] = [
  { label: "Addis Ababa Central Terminal", value: "addis_dest", baseDays: 0, ratePerTon: 0 },
  { label: "Modjo Multimodal Dry Port", value: "modjo_dest", baseDays: -1, ratePerTon: -10 },
  { label: "Hawassa Industrial Park", value: "hawassa_dest", baseDays: 1, ratePerTon: 25 },
  { label: "Dire Dawa Free Trade Zone", value: "diredawa_dest", baseDays: 0, ratePerTon: 15 },
  { label: "Mekelle Logistics Hub", value: "mekelle_dest", baseDays: 2, ratePerTon: 45 },
  { label: "Kombolcha Industrial Park", value: "kombolcha_dest", baseDays: 1, ratePerTon: 30 },
];

const CARGO_TYPES = [
  { id: "container", label: "Containerized FCL (20ft / 40ft HC)", multiplier: 1.0, unitDesc: "Standard Prime Mover Flatbed" },
  { id: "agri", label: "Agricultural Breakbulk (Sesame / Coffee)", multiplier: 1.15, unitDesc: "Reinforced Sideboard Cargo Trailer" },
  { id: "heavy", label: "Heavy Lift & OOG Machinery (>40 MT)", multiplier: 1.65, unitDesc: "Goldhofer Modular Hydraulic Lowbed" },
  { id: "humanitarian", label: "UN WFP Humanitarian Aid Cargo", multiplier: 0.95, unitDesc: "Dedicated Priority Aid Convoy" },
];

export default function OperationsCalculatorSection() {
  const [origin, setOrigin] = useState("djibouti");
  const [destination, setDestination] = useState("addis_dest");
  const [cargoType, setCargoType] = useState("container");
  const [tonnage, setTonnage] = useState(38);
  const [includeCustoms, setIncludeCustoms] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic calculations
  const selectedOrigin = ORIGINS.find((o) => o.value === origin) || ORIGINS[0];
  const selectedDest = DESTINATIONS.find((d) => d.value === destination) || DESTINATIONS[0];
  const selectedCargo = CARGO_TYPES.find((c) => c.id === cargoType) || CARGO_TYPES[0];

  const totalDaysMin = Math.max(1, selectedOrigin.baseDays + selectedDest.baseDays);
  const totalDaysMax = totalDaysMin + 2;

  const baseRate = (selectedOrigin.ratePerTon + selectedDest.ratePerTon) * selectedCargo.multiplier;
  const estimatedSubtotal = Math.round(baseRate * tonnage);
  const customsFee = includeCustoms ? 350 : 0;
  const estimatedTotal = estimatedSubtotal + customsFee;

  const requiredTrucks = Math.max(1, Math.ceil(tonnage / 40));

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 lg:py-40 bg-[#070B14] text-white border-b border-white/10 select-none relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#FF5A1F]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            HEADER ROW: TITLE & EXPLANATION
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                SECTION 03 • ALGORITHMIC FREIGHT ESTIMATOR
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              CALCULATE YOUR ROUTE, <br className="hidden sm:inline" />
              TRANSIT TIME &amp; TARIFF.
            </h2>
          </div>

          <p className="text-sm text-slate-300 font-sans max-w-lg leading-relaxed">
            Real-time algorithmic dispatch estimates calibrated for Horn of Africa dry ports, container tariffs, out-of-gauge heavy lift configurations, and bonded customs clearance.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE ESTIMATOR GRID
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: CALCULATOR INPUT CONTROLS (lg:col-span-7) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D1322] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
            
            {/* 1. Origin & Destination Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2">
                  POINT OF ORIGIN (PORT / HUB)
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                >
                  {ORIGINS.map((o) => (
                    <option key={o.value} value={o.value} className="bg-[#0D1322] text-white">
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2">
                  DESTINATION (DRY PORT / PARK)
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-sans text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                >
                  {DESTINATIONS.map((d) => (
                    <option key={d.value} value={d.value} className="bg-[#0D1322] text-white">
                      {d.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* 2. Cargo Category Selector */}
            <div>
              <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-3">
                CARGO CLASSIFICATION &amp; SPECIFICATION
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CARGO_TYPES.map((type) => {
                  const isChecked = cargoType === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setCargoType(type.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? "bg-[#0E1528] border-[#FF5A1F] shadow-md shadow-[#FF5A1F]/15"
                          : "bg-white/[0.02] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <span className="font-headline text-sm uppercase text-white font-bold block mb-1">
                        {type.label}
                      </span>
                      <span className="text-[11px] text-slate-400 font-sans">
                        {type.unitDesc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Weight / Tonnage Slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline">
                  ESTIMATED CARGO TONNAGE
                </label>
                <span className="font-headline text-2xl text-[#FF5A1F] font-bold">
                  {tonnage} METRIC TONS
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={150}
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF5A1F]"
              />
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-2">
                <span>1 MT (LCL / Sample)</span>
                <span>40 MT (1 Full Truck)</span>
                <span>80 MT (2 Trucks)</span>
                <span>150 MT (Super Heavy Lift)</span>
              </div>
            </div>

            {/* 4. Customs Clearance AEO Toggle */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FF5A1F] shrink-0" />
                <div>
                  <span className="font-headline text-sm uppercase text-white font-bold block">
                    ECC Authorized Economic Operator (AEO) Customs Brokerage
                  </span>
                  <span className="text-xs text-slate-400 font-sans">
                    Includes expedited bonded manifest filing at Galafi and Modjo Dry Port (+$350 flat)
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIncludeCustoms(!includeCustoms)}
                className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                  includeCustoms ? "bg-[#FF5A1F]" : "bg-white/10"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white transition-transform ${
                    includeCustoms ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>

          </div>

          {/* RIGHT: ALGORITHMIC ESTIMATION SUMMARY CARD (lg:col-span-5) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0E1528] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline">
                  ESTIMATION BREAKDOWN
                </span>
                <span className="text-xs font-mono text-slate-400">
                  REAL-TIME QUOTE
                </span>
              </div>

              {/* Transit Time Box */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-1">
                    TRANSIT DURATION
                  </span>
                  <span className="font-headline text-3xl sm:text-4xl text-white font-bold">
                    {totalDaysMin} – {totalDaysMax} DAYS
                  </span>
                </div>
                <Clock className="w-8 h-8 text-[#FF5A1F] opacity-80" />
              </div>

              {/* Rolling Stock Allocation */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-1">
                    FLEET ALLOCATION REQUIRED
                  </span>
                  <span className="font-headline text-2xl text-white font-bold">
                    {requiredTrucks}x {tonnage > 60 ? "Heavy Prime Movers / Lowbed" : "Prime Mover (40 MT Unit)"}
                  </span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {selectedCargo.unitDesc}
                  </span>
                </div>
                <Truck className="w-8 h-8 text-[#FF5A1F] opacity-80" />
              </div>

              {/* Rate Range Output */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1B223D] to-[#0E1528] border border-white/15 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-1">
                  ESTIMATED FREIGHT TARIFF BRACKET
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-headline text-4xl sm:text-5xl text-white font-extrabold">
                    ${estimatedTotal.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-slate-400 uppercase">
                    USD Baseline
                  </span>
                </div>
                <div className="text-[11px] text-slate-400 font-sans space-y-1 pt-2 border-t border-white/10">
                  <div className="flex justify-between">
                    <span>Haulage Baseline ({tonnage} MT @ ${baseRate.toFixed(1)}/MT):</span>
                    <span className="text-white">${estimatedSubtotal.toLocaleString()}</span>
                  </div>
                  {includeCustoms && (
                    <div className="flex justify-between">
                      <span>AEO Customs Brokerage &amp; Staging:</span>
                      <span className="text-emerald-400">+$350</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CTA Button Opening Dispatch Modal */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="group mvp-bubble-btn w-full py-5 rounded-2xl shadow-[0_15px_40px_rgba(255,90,31,0.25)] font-headline text-xl sm:text-2xl tracking-wider uppercase flex items-center justify-center gap-3 bg-[#FF5A1F] text-white cursor-pointer select-none transition-all"
              >
                <span className="mvp-text-clip">
                  <span className="inline-flex">
                    {"REQUEST FORMAL TENDER ALLOCATION".split("").map((c, i) => (
                      <span
                        key={`c1-${i}`}
                        className="mvp-char-primary"
                        style={{ transitionDelay: `${i * 10}ms` }}
                      >
                        {c === " " ? "\u00A0" : c}
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
                    {"REQUEST FORMAL TENDER ALLOCATION".split("").map((c, i) => (
                      <span
                        key={`c2-${i}`}
                        className="mvp-char-secondary"
                        style={{ transitionDelay: `${i * 10}ms` }}
                      >
                        {c === " " ? "\u00A0" : c}
                      </span>
                    ))}
                  </span>
                </span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
              <span className="text-[11px] text-slate-400 font-sans block text-center mt-2.5">
                Official commercial rate contracts guaranteed within 2 hours.
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          DISPATCH TENDER REQUEST MODAL OVERLAY
         ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-2xl bg-[#0E1224] border border-white/20 rounded-[28px] p-6 sm:p-10 shadow-2xl z-10 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#FF5A1F] uppercase font-headline">
                  FORMAL TENDER DISPATCH
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-white uppercase leading-tight mb-2">
                LOCK YOUR FLEET ALLOCATION
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                Submitting calculated estimate for <strong>{tonnage} MT</strong> ({selectedCargo.label}) from <strong>{selectedOrigin.label}</strong> to <strong>{selectedDest.label}</strong>.
              </p>

              {submitted ? (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-3xl text-white uppercase mb-2">
                    TENDER REQUEST DISPATCHED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
                    Our operations room at Wollo Sefer headquarters will review your specifications and contact your enterprise within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setModalOpen(false);
                    }}
                    className="py-3 px-8 rounded-xl bg-white text-[#0E1224] font-headline text-lg uppercase tracking-wider hover:bg-[#FF5A1F] hover:text-white transition-colors"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 font-headline">
                        FULL NAME *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Temesgen Yohannes"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 font-headline">
                        COMPANY / ORGANIZATION *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Commercial Importer / Agency"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 font-headline">
                        PHONE NUMBER *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+251 91 124 8830"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1 font-headline">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="client@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 text-white font-headline text-xl tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer mt-3 shadow-lg shadow-[#FF5A1F]/30"
                  >
                    <span>SUBMIT FORMAL TENDER ALLOCATION</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs text-slate-400 font-sans">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                      <span>+251 11 470 2031</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
                      <span>express@expressptl.com</span>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
