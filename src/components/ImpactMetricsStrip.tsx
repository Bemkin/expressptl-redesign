"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Anchor, Users, Truck } from "lucide-react";

interface MetricCounter {
  value: string;
  suffix?: string;
  label: string;
  sub: string;
  icon: React.ReactNode;
}

const METRICS: MetricCounter[] = [
  {
    value: "125",
    suffix: "",
    label: "COUNTRIES COVERED",
    sub: "Global cross-border freight network",
    icon: <Globe2 className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    value: "150",
    suffix: "",
    label: "PORTS COVERED",
    sub: "Direct deepwater & dry port connectivity",
    icon: <Anchor className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    value: "4000",
    suffix: "+",
    label: "SATISFIED CLIENTS",
    sub: "Global agencies & enterprise partners",
    icon: <Users className="w-6 h-6 text-[#FF5A1F]" />,
  },
  {
    value: "13M",
    suffix: "+",
    label: "TONNAGE DELIVERED",
    sub: "Millions of metric tons safely uplifted",
    icon: <Truck className="w-6 h-6 text-[#FF5A1F]" />,
  },
];

export default function ImpactMetricsStrip() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section ref={containerRef} className="relative w-full py-16 sm:py-24 bg-[#070B14] select-none border-t border-white/10 z-10">
      {/* Background ambient orange flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-5xl h-48 bg-[#FF5A1F]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        
        {/* Section Header Eyebrow */}
        <div className="flex items-center justify-between pb-6 mb-10 sm:mb-14 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
              GLOBAL OPERATIONAL FOOTPRINT
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-white/50 uppercase font-headline hidden sm:block">
            AUTHENTIC LIFETIME CAPABILITY
          </span>
        </div>

        {/* 4 Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {METRICS.map((metric, idx) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              transition={{
                duration: 0.75,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 bg-[#F4F4F7]/[0.035] border border-white/10 backdrop-blur-[30px] hover:border-[#FF5A1F]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(255,90,31,0.15)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Row: Icon + Glow Orb */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {metric.icon}
                </div>
                <div className="w-3 h-3 rounded-full border border-white/20 group-hover:border-[#FF5A1F] group-hover:bg-[#FF5A1F] transition-all" />
              </div>

              {/* Large Metric Number */}
              <div className="mb-4">
                <div className="font-headline text-6xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-none flex items-baseline">
                  <span>{metric.value}</span>
                  {metric.suffix && (
                    <span className="text-[#FF5A1F] text-4xl sm:text-5xl ml-1 font-headline">
                      {metric.suffix}
                    </span>
                  )}
                </div>
              </div>

              {/* Metric Label & Subtitle */}
              <div>
                <h3 className="font-headline text-lg sm:text-xl text-white tracking-wider uppercase mb-1 group-hover:text-[#FF5A1F] transition-colors">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {metric.sub}
                </p>
              </div>

              {/* Bottom Orange Accent Line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#FF5A1F] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
