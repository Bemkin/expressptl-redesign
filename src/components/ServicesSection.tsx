"use client";

import React, { useState } from "react";
import { Truck, Ship, Warehouse, Thermometer, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  specs: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: "heavy-haul",
    num: "01",
    title: "CROSS-BORDER HEAVY HAULAGE & PROJECT CARGO",
    desc: "Engineered transport solutions for high-tonnage mining components, power generation turbines, transformer sets, and modular industrial processing plants across East Africa.",
    icon: <Truck className="w-6 h-6 text-[#FF5A1F]" />,
    specs: [
      "Modular hydraulic multi-axles up to 180 MT payload",
      "Comprehensive bridge load surveys and police escorts",
      "Route clearance utility teams for overhead powerlines",
      "Turnkey on-site jacking, skidding, and installation",
    ],
  },
  {
    id: "multimodal",
    num: "02",
    title: "MULTIMODAL SEA-TO-HINTERLAND CONTAINER TRANSIT",
    desc: "Direct vessel-to-truck discharge at Mombasa Container Terminal (KPA) with through bill of lading delivery straight to factory consignees across Uganda, Rwanda, and DRC.",
    icon: <Ship className="w-6 h-6 text-[#FF5A1F]" />,
    specs: [
      "FCL and specialized OOG flat rack container handling",
      "Direct interchange agreements with Maersk, MSC, CMA CGM",
      "Pre-arrival customs manifestation to minimize demurrage",
      "Continuous container seal inspection & GPS security tracking",
    ],
  },
  {
    id: "bonded-yard",
    num: "03",
    title: "AEO BONDED WAREHOUSING & INLAND CONTAINER DEPOT",
    desc: "Over 50,000 sq.ft of secure covered bonded warehousing and 4-acre container staging yards located within direct reach of the Mombasa port gates and Nairobi ICD.",
    icon: <Warehouse className="w-6 h-6 text-[#FF5A1F]" />,
    specs: [
      "Full Authorized Economic Operator (AEO) certified facility",
      "24/7 CCTV surveillance, biometric access, and armed guards",
      "Heavy reach-stackers capable of handling 45-ton laden containers",
      "Customs de-consolidation, palletizing, and long-term storage",
    ],
  },
  {
    id: "cold-chain",
    num: "04",
    title: "TEMPERATURE-CONTROLLED PHARMA & FOOD COLD CHAIN",
    desc: "Certified refrigerated trailers offering rigorous climate control from -25°C to +25°C for humanitarian pharmaceutical shipments, vaccines, fresh agricultural produce, and confectionery.",
    icon: <Thermometer className="w-6 h-6 text-[#FF5A1F]" />,
    specs: [
      "Carrier Transicold & Thermo King digital temperature loggers",
      "Dual independent diesel generator backup systems",
      "GDP compliant sanitization protocols and thermal blankets",
      "Continuous live telemetry with automatic temperature alarms",
    ],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(0);

  return (
    <section id="services" className="py-24 bg-[#070B14] relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              END-TO-END SUPPLY CHAIN DIVISIONS
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.9] tracking-tight">
              PRECISION LOGISTICS <br />
              ACROSS EVERY SECTOR.
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md leading-relaxed">
            Industrial capability designed to eliminate supply chain friction, avoid port demurrage penalties, and protect high-value capital assets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => (
            <div
              key={srv.id}
              className="bg-[#0D1322] border border-white/10 hover:border-[#FF5A1F]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#FF5A1F]/40 transition-colors">
                    {srv.icon}
                  </div>
                  <span className="font-headline text-2xl text-slate-500 group-hover:text-white transition-colors">
                    {srv.num}
                  </span>
                </div>

                <h3 className="font-headline text-2xl text-white uppercase mb-4 leading-tight tracking-tight">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {srv.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-8">
                  {srv.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="w-full py-3 px-4 rounded-lg bg-white/5 hover:bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-200 group-hover:bg-[#FF5A1F]"
              >
                <span>REQUEST DIVISION SPEC</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
