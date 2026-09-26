"use client";

import React from "react";
import { Gauge, Shield, Wrench, Radio } from "lucide-react";

interface FleetVehicle {
  name: string;
  category: string;
  power: string;
  capacity: string;
  telemetry: string;
  img: string;
}

const FLEET_VEHICLES: FleetVehicle[] = [
  {
    name: "VOLVO FH16 750HP 6X4 TRACTOR UNIT",
    category: "Super Heavy Haul Prime Mover",
    power: "750 HP / 3,550 Nm Torque",
    capacity: "150 MT Combined Train Weight",
    telemetry: "Dual I-Shift Crawler & GPS satellite beacon",
    img: "/assets/hero_truck_wet.jpg",
  },
  {
    name: "MERCEDES-BENZ ACTROS 3344 6X4",
    category: "Long-Distance Regional Hauler",
    power: "440 HP V6 Turbocharged",
    capacity: "34 MT Kingpin Load",
    telemetry: "Fleetboard real-time axle telemetry",
    img: "/assets/hero_truck_poster.jpg",
  },
  {
    name: "GOLDHOFER MODULAR MULTI-AXLE LOWBED",
    category: "Over-Dimensional Project Rigging",
    power: "Independent Hydraulic Suspension",
    capacity: "Up to 180 MT Payload",
    telemetry: "Computerized axle leveling & steerable bogies",
    img: "/assets/machinery.jpg",
  },
];

export default function FleetSection() {
  return (
    <section id="fleet" className="py-24 bg-[#080C16] border-t border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              EQUIPMENT & ASSET INTEGRITY
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.9] tracking-tight">
              COMMERCIAL FLEET & <br />
              SPECIALIZED ROLLING STOCK.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Company-owned fleet maintained under strict OEM preventative schedules with 100% telemetry visibility across all East African corridors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FLEET_VEHICLES.map((vehicle, idx) => (
            <div
              key={idx}
              className="bg-[#0D1322] border border-white/10 rounded-2xl overflow-hidden hover:border-[#FF5A1F]/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={vehicle.img}
                  alt={vehicle.name}
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#070B14]/80 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-extrabold tracking-widest text-[#FF5A1F] uppercase border border-white/10">
                  {vehicle.category}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-2xl text-white uppercase mb-6 tracking-tight">
                    {vehicle.name}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2.5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-[#FF5A1F]" /> Engine Output:
                      </span>
                      <span className="font-bold text-white">{vehicle.power}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2.5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[#FF5A1F]" /> Payload Rating:
                      </span>
                      <span className="font-bold text-white">{vehicle.capacity}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2.5">
                      <span className="text-slate-400 flex items-center gap-2">
                        <Radio className="w-4 h-4 text-[#FF5A1F]" /> Telemetry:
                      </span>
                      <span className="font-bold text-white truncate max-w-[200px]" title={vehicle.telemetry}>
                        {vehicle.telemetry}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#FF5A1F]" /> 10,000 KM Service Cycle
                  </span>
                  <span className="text-[10px] font-extrabold text-[#FF5A1F] uppercase tracking-widest">
                    ACTIVE FLEET
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
