"use client";

import React, { useState, useEffect, useRef } from "react";
import { ShieldCheck, Radio, Warehouse, Truck, MapPin, ThermometerSnowflake } from "lucide-react";

interface AdvantageCard {
  id: string;
  tag: string;
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  icon: React.ReactNode;
}

const ADVANTAGES: AdvantageCard[] = [
  {
    id: "01",
    tag: "CROSS-BORDER EFFICIENCY",
    title: "DIRECT CORRIDOR TRANSIT WITH ZERO CARGO TRANSSHIPMENT",
    desc: "Single-bill-of-lading through transport from the Port of Mombasa directly to consignee sites across Uganda, Rwanda, South Sudan, and Eastern DRC without unpacking or handling delays.",
    stat: "100%",
    statLabel: "Single Vehicle Transit",
    icon: <Truck className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    id: "02",
    tag: "ACTIVE MONITORING",
    title: "24/7 SATELLITE TELEMATICS & ARMED PROTOCOL ESCORTS",
    desc: "Every prime mover is outfitted with dual GPS redundancy, route geo-fencing, continuous axle-weight telemetry, and remote panic triggers coordinated with regional highway patrols.",
    stat: "99.98%",
    statLabel: "Zero Hijack / Loss Record",
    icon: <Radio className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    id: "03",
    tag: "CUSTOMS PRE-CLEARANCE",
    title: "IN-HOUSE BONDED INLAND CONTAINER DEPOT & YARDS",
    desc: "Licensed Authorized Economic Operator (AEO) status enables expedited bonded border clearance, pre-arrival customs manifest filing, and dedicated secure staging in Mombasa and Nairobi.",
    stat: "48-72h",
    statLabel: "Avg Border Crossing Time",
    icon: <Warehouse className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    id: "04",
    tag: "OVER-DIMENSIONAL ENGINEERING",
    title: "HEAVY HAUL & PROJECT CARGO RIGGING UP TO 180 TONS",
    desc: "Hydraulic multi-axle modular trailers, bridge route stress assessments, electrical utility escorts, and customized load distribution engineering for power generation and mining machinery.",
    stat: "180 MT",
    statLabel: "Single-Payload Capacity",
    icon: <ShieldCheck className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    id: "05",
    tag: "STRATEGIC INFRASTRUCTURE",
    title: "DUAL-CORRIDOR REDUNDANCY ACROSS EAST & CENTRAL AFRICA",
    desc: "Continuous operations across both Northern Corridor (Mombasa & Nairobi) and Central Corridor (Dar es Salaam) with cross-docking hubs in Kampala, Kigali, and Juba.",
    stat: "14",
    statLabel: "Cross-Border Corridors",
    icon: <MapPin className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    id: "06",
    tag: "SPECIALIZED CARGO",
    title: "COLD CHAIN TELEMETRY FOR PHARMACEUTICALS & PERISHABLES",
    desc: "Thermo King and Carrier refrigerated reefers equipped with continuous digital temperature loggers, dual backup diesel gensets, and automated deviation alerts for vaccines and perishables.",
    stat: "-25°C to +25°C",
    statLabel: "Precision Climate Range",
    icon: <ThermometerSnowflake className="w-6 h-6 text-[#FF5A1F]" />,
  },
];

export default function AdvantagesSection() {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".adv-item");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.55 && rect.bottom >= windowHeight * 0.2) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercentage = ((activeCard + 1) / ADVANTAGES.length) * 100;

  return (
    <section id="about" className="py-24 bg-[#070B14] relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Progress Rail Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              OPERATIONAL EXCELLENCE
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white leading-[0.9] uppercase tracking-tight mb-8">
              ENGINEERED FOR <br />
              HIGH-STAKES TRANSIT.
            </h2>

            {/* Dynamic Progress Meter */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md">
              <div className="flex items-baseline justify-between mb-4">
                <span className="font-headline text-3xl text-white">
                  0{activeCard + 1}{" "}
                  <span className="text-slate-500 text-lg font-normal">/ 0{ADVANTAGES.length}</span>
                </span>
                <span className="text-xs font-bold tracking-wider text-[#FF5A1F] uppercase">
                  ACTIVE ADVANTAGE
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-5">
                <div
                  className="h-full bg-[#FF5A1F] transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Scroll through our specialized fleet capabilities, customs clearance protocols, and heavy haulage engineering.
              </p>
            </div>
          </div>

          {/* Right Scrollable Cards Stack */}
          <div ref={containerRef} className="lg:col-span-8 flex flex-col gap-8">
            {ADVANTAGES.map((adv, index) => {
              const isActive = index === activeCard;
              return (
                <div
                  key={adv.id}
                  className={`adv-item p-8 sm:p-10 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? "bg-[#0D1322] border-[#FF5A1F]/50 shadow-[0_20px_50px_rgba(0,0,0,0.6)] scale-[1.01]"
                      : "bg-[#0A0F1A]/70 border-white/10 opacity-70 hover:opacity-90"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        {adv.icon}
                      </div>
                      <span className="text-xs font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                        {adv.tag}
                      </span>
                    </div>
                    <span className="font-headline text-2xl text-slate-500">{adv.id}</span>
                  </div>

                  <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase leading-tight mb-4 tracking-tight">
                    {adv.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
                    {adv.desc}
                  </p>

                  <div className="pt-6 border-t border-white/10 flex items-baseline gap-4">
                    <span className="font-headline text-4xl sm:text-5xl text-white font-normal">
                      {adv.stat}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {adv.statLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
