"use client";

import React, { useState } from "react";
import { MapPin, Navigation, Clock, Shield, CheckCircle } from "lucide-react";

interface Corridor {
  id: string;
  name: string;
  route: string;
  distance: string;
  transitTime: string;
  borderPost: string;
  description: string;
  checkpoints: string[];
}

const CORRIDORS: Corridor[] = [
  {
    id: "northern",
    name: "NORTHERN MULTIMODAL CORRIDOR",
    route: "Port of Mombasa → Nairobi → Kampala → Kigali → Goma (DRC)",
    distance: "1,750 KM",
    transitTime: "4 - 6 Days",
    borderPost: "Malaba / Busia / Gatuna",
    description: "The economic backbone of East Africa. Carries the highest volume of containerized freight, fuel, and heavy construction equipment from the Indian Ocean to landlocked hinterlands.",
    checkpoints: ["Mombasa Port Terminal", "Nairobi ICD Depot", "Malaba One-Stop Border", "Kampala Central Hub", "Gatuna Border Post", "Kigali Logistics Hub"],
  },
  {
    id: "central",
    name: "CENTRAL TRANSIT CORRIDOR",
    route: "Port of Dar es Salaam → Dodoma → Isaka → Kigali / Bujumbura",
    distance: "1,480 KM",
    transitTime: "5 - 7 Days",
    borderPost: "Rusumo / Mutukula",
    description: "Primary southern artery serving mining concessions in Katanga (DRC), Burundi humanitarian supply lines, and central Tanzanian agricultural hubs.",
    checkpoints: ["Dar es Salaam Berth 1-8", "Morogoro Transit Yard", "Dodoma Waystation", "Isaka Dry Port", "Rusumo Border Crossing", "Bujumbura Port"],
  },
  {
    id: "juba",
    name: "SOUTH SUDAN HUMANITARIAN ARTERY",
    route: "Mombasa / Nairobi → Eldoret → Nimule → Juba",
    distance: "1,920 KM",
    transitTime: "6 - 9 Days",
    borderPost: "Elegu / Nimule",
    description: "Critical relief corridor handling UN World Food Programme grain shipments, emergency shelter supplies, infrastructure steel, and energy materials.",
    checkpoints: ["Nairobi ICD", "Eldoret Highway Hub", "Gulu Logistics Station", "Elegu Border Station", "Nimule Customs Post", "Juba Central Depot"],
  },
  {
    id: "ethiopia",
    name: "LAPSSET ETHIOPIA GATEWAY",
    route: "Lamu Port / Nairobi → Isiolo → Marsabit → Moyale → Addis Ababa",
    distance: "1,260 KM",
    transitTime: "3 - 5 Days",
    borderPost: "Moyale One-Stop Border",
    description: "High-speed modern asphalt corridor connecting Kenya's deepwater Lamu port and central industrial parks to the 120M+ Ethiopian consumer market.",
    checkpoints: ["Lamu Deepwater Port", "Isiolo Inland Port", "Marsabit Relay Station", "Moyale One-Stop Post", "Hawassa Industrial Hub", "Addis Ababa Terminal"],
  },
];

export default function CorridorsMap() {
  const [activeCorridorId, setActiveCorridorId] = useState("northern");
  const activeCorridor = CORRIDORS.find((c) => c.id === activeCorridorId) || CORRIDORS[0];

  return (
    <section id="corridors" className="py-24 bg-[#080C16] border-t border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              TRANS-AFRICAN HIGHWAY NETWORK
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.9] tracking-tight">
              INTER-REGIONAL TRADE <br />
              CORRIDORS & ARTERIES.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Direct arterial connections linking deepwater Indian Ocean seaports directly to capital cities and remote mining/humanitarian installations.
          </p>
        </div>

        {/* Corridor Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {CORRIDORS.map((c) => {
            const isSelected = c.id === activeCorridorId;
            return (
              <button
                key={c.id}
                onClick={() => setActiveCorridorId(c.id)}
                className={`p-5 rounded-xl text-left border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#0D1322] border-[#FF5A1F] shadow-lg shadow-black/50"
                    : "bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-400 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                    CORRIDOR
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />}
                </div>
                <h4 className="font-headline text-lg sm:text-xl text-white uppercase tracking-tight">
                  {c.name}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Detailed Corridor Route Card */}
        <div className="bg-[#0D1322] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#FF5A1F] uppercase block mb-2">
                ACTIVE TRANSIT ROUTE
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase mb-4 tracking-tight">
                {activeCorridor.route}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                {activeCorridor.description}
              </p>

              {/* Waypoints timeline */}
              <div className="mb-8">
                <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase block mb-4">
                  CERTIFIED STAGING & CUSTOMS WAYPOINTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeCorridor.checkpoints.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-4 h-4 text-[#FF5A1F] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Metrics Col */}
            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-xl p-8 flex flex-col gap-6">
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center shrink-0">
                  <Navigation className="w-6 h-6 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    TOTAL HIGHWAY DISTANCE
                  </span>
                  <span className="font-headline text-3xl text-white">{activeCorridor.distance}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    AVERAGE DISPATCH TRANSIT TIME
                  </span>
                  <span className="font-headline text-3xl text-white">{activeCorridor.transitTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#FF5A1F]/10 border border-[#FF5A1F]/30 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    PRIMARY CUSTOMS CLEARANCE POSTS
                  </span>
                  <span className="text-sm font-bold text-white">{activeCorridor.borderPost}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
