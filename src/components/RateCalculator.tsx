"use client";

import React, { useState } from "react";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";

export default function RateCalculator() {
  const [origin, setOrigin] = useState("Mombasa Port (KE)");
  const [destination, setDestination] = useState("Kampala (UG)");
  const [cargoType, setCargoType] = useState("dry");
  const [tonnage, setTonnage] = useState(24);
  const [includeCustoms, setIncludeCustoms] = useState(true);

  // Dynamic calculation logic
  const calculateRate = () => {
    let baseRatePerTon = 110;
    let days = "4 - 5 Days";

    if (destination.includes("Kigali")) {
      baseRatePerTon = 150;
      days = "5 - 7 Days";
    } else if (destination.includes("Juba")) {
      baseRatePerTon = 185;
      days = "6 - 9 Days";
    } else if (destination.includes("Goma")) {
      baseRatePerTon = 195;
      days = "7 - 10 Days";
    } else if (destination.includes("Addis")) {
      baseRatePerTon = 135;
      days = "4 - 6 Days";
    }

    if (cargoType === "reefer") {
      baseRatePerTon *= 1.35;
    } else if (cargoType === "heavy") {
      baseRatePerTon *= 1.6;
    }

    let estimatedTotal = Math.round(baseRatePerTon * tonnage);
    if (includeCustoms) {
      estimatedTotal += 350; // Bonded clearance flat brokerage
    }

    return { total: estimatedTotal, days };
  };

  const { total, days } = calculateRate();

  return (
    <section id="calculator" className="py-24 bg-[#070B14] relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
            INSTANT LOGISTICS ESTIMATOR
          </span>
          <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.9] tracking-tight">
            ESTIMATE YOUR TRANSIT <br />
            BUDGET & TIMELINE.
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            Transparent corridor freight calculation based on active regional fuel index, toll duties, and certified heavy payload distribution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#0D1322] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Origin */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Origin Hub / Port
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
              >
                <option value="Mombasa Port (KE)">Mombasa Port Terminal (KE)</option>
                <option value="Nairobi ICD (KE)">Nairobi Inland Container Depot (KE)</option>
                <option value="Dar es Salaam (TZ)">Port of Dar es Salaam (TZ)</option>
              </select>
            </div>

            {/* Destination */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Destination Consignee Hub
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
              >
                <option value="Kampala (UG)">Kampala Industrial Area (Uganda)</option>
                <option value="Kigali (RW)">Kigali Special Economic Zone (Rwanda)</option>
                <option value="Juba (SS)">Juba Central Depot (South Sudan)</option>
                <option value="Goma (DRC)">Goma / Bukavu (Eastern DRC)</option>
                <option value="Addis Ababa (ET)">Addis Ababa Terminal (Ethiopia)</option>
              </select>
            </div>

            {/* Cargo Type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Cargo Classification
              </label>
              <select
                value={cargoType}
                onChange={(e) => setCargoType(e.target.value)}
                className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
              >
                <option value="dry">General Containerized / Dry Freight</option>
                <option value="heavy">Breakbulk / Project Heavy Haul</option>
                <option value="reefer">Cold Chain / Refrigerated Reefer</option>
              </select>
            </div>

            {/* Tonnage */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Cargo Payload Weight
                </label>
                <span className="font-headline text-lg text-[#FF5A1F]">{tonnage} Metric Tons</span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="1"
                value={tonnage}
                onChange={(e) => setTonnage(Number(e.target.value))}
                className="w-full accent-[#FF5A1F] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>5 MT</span>
                <span>40 MT</span>
                <span>80 MT (Multi-Axle)</span>
              </div>
            </div>

          </div>

          {/* Customs Checkbox */}
          <div className="p-4 bg-white/2 border border-white/10 rounded-xl mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />
              <div>
                <span className="text-xs font-bold text-white block">
                  Include AEO Bonded Customs Transit Brokerage
                </span>
                <span className="text-[11px] text-slate-400">
                  Pre-manifest border clearance, documentation filing, and physical escort.
                </span>
              </div>
            </div>
            <input
              type="checkbox"
              checked={includeCustoms}
              onChange={(e) => setIncludeCustoms(e.target.checked)}
              className="w-5 h-5 accent-[#FF5A1F] cursor-pointer"
            />
          </div>

          {/* Results Display */}
          <div className="p-6 bg-white/4 border border-white/15 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                ESTIMATED FREIGHT COST
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-headline text-4xl sm:text-5xl text-white font-normal">
                  ${total.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">USD (Indicative)</span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 block mb-1">
                  ESTIMATED TRANSIT TIME
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="font-headline text-2xl text-white">{days}</span>
                </div>
              </div>

              <a
                href="#contact"
                className="bg-[#FF5A1F] hover:bg-[#E04810] text-white px-6 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shrink-0 shadow-lg shadow-[#FF5A1F]/20"
              >
                <span>BOOK RATE</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
