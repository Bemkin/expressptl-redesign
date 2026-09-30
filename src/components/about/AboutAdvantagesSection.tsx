"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { Truck, ShieldCheck, Warehouse, Radio, Compass, Anchor } from "lucide-react";

interface AdvantageItem {
  num: string;
  tag: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const ADVANTAGES: AdvantageItem[] = [
  {
    num: "01",
    tag: "FLEET AUTONOMY",
    title: "76 Active Heavy Trucks (100% Owned)",
    desc: "Late-model European-specification prime movers with 40 MT payload each. In-house mechanical maintenance depot eliminates dispatch failure.",
    icon: <Truck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "02",
    tag: "HIGH-TONNAGE RIGGING",
    title: "2,916 MT Synchronous Heavy Lift",
    desc: "Ethiopia's premier private single-dispatch capacity. Hydraulic modular multi-axles engineered for turbines, substations, and heavy civil infrastructure.",
    icon: <ShieldCheck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "03",
    tag: "CUSTOMS PRE-ARRIVAL",
    title: "Licensed AEO & Bonded Transit",
    desc: "Authorized Economic Operator priority green-channel customs manifests at Djibouti Port, Galafi border, and Modjo Dry Port.",
    icon: <Warehouse className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "04",
    tag: "COMMAND SUPERVISION",
    title: "24/7 Satellite Telemetry & Geofencing",
    desc: "Dual-redundant GPS transponders, live axle-weight load sensors, and driver fatigue telemetry coordinated from our Addis Ababa dispatch room.",
    icon: <Radio className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "05",
    tag: "SECURE STAGING",
    title: "Bonded Staging Yards & Warehouses",
    desc: "Dedicated container freight depots eliminating port demurrage fees with round-the-clock armed security patrols and bonded storage.",
    icon: <Anchor className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    num: "06",
    tag: "MULTIMODAL ARTERIES",
    title: "Strategic Horn of Africa Corridors",
    desc: "Unbroken logistics routes connecting maritime deep-water berths in Djibouti and Kenya across inland Ethiopian and South Sudanese destinations.",
    icon: <Compass className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function AboutAdvantagesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const cards = containerRef.current.querySelectorAll(".adv-card");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= windowHeight * 0.55 && rect.bottom >= windowHeight * 0.15) {
          setActiveIdx(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progressPercentage = ((activeIdx + 1) / ADVANTAGES.length) * 100;

  return (
    <section className="py-24 sm:py-36 bg-[#070B14] relative border-b border-white/5 select-none">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN: STICKY TITLE & PROGRESS BAR
              Matches MVP's .advantages__container-inner architecture
             ======================================================== */}
          <div className="lg:col-span-5 lg:sticky lg:top-36 flex flex-col justify-between min-h-[300px] lg:min-h-[520px]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
                  OPERATIONAL SUPERIORITY
                </span>
              </div>

              <AnimatedText
                text={"OUR KEY\nADVANTAGES"}
                as="h2"
                delay={0.1}
                stagger={0.03}
                className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white uppercase tracking-tight leading-[0.88] mb-6"
              />

              <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed hidden sm:block">
                Built on complete asset independence, accredited customs green-channels, and heavy lift engineering tailored for East Africa.
              </p>
            </div>

            {/* MVP Vertical / Horizontal Progress Indicator */}
            <div className="pt-8">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">
                <span>Capability Indicator</span>
                <span className="text-[#FF5A1F] font-mono">0{activeIdx + 1} / 0{ADVANTAGES.length}</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-[#FF5A1F] to-[#ff7b47] rounded-full"
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: SCROLLING ADVANTAGE CARDS
              Matches MVP's .advantages__scrollbox & .advantages__key
             ======================================================== */}
          <div ref={containerRef} className="lg:col-span-7 space-y-6 sm:space-y-8">
            {ADVANTAGES.map((adv, idx) => {
              const isActive = activeIdx === idx;
              return (
                <motion.div
                  key={adv.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`adv-card relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 transition-all duration-500 border ${
                    isActive
                      ? "bg-linear-to-br from-[#1F234B] via-[#1B1E3D] to-[#151733] border-[#FF5A1F]/50 shadow-[0_20px_60px_rgba(255,90,31,0.15)] scale-[1.01]"
                      : "bg-[#0D1322] border-white/10 opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
                    {/* MVP .advantages__key-number: Colossal Watermark on left */}
                    <div className="shrink-0 flex items-center justify-between sm:justify-start gap-4">
                      <span className="font-headline text-6xl sm:text-7xl lg:text-8xl text-white/15 select-none leading-none tracking-tight">
                        {adv.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center sm:hidden">
                        {adv.icon}
                      </div>
                    </div>

                    {/* Content on right */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[11px] font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                          {adv.tag}
                        </span>
                      </div>

                      <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug mb-2">
                        {adv.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                        {adv.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
