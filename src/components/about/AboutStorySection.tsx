"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MvpButton from "@/components/MvpButton";

export default function AboutStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // MVP .scale-block viewport scrub: scales from 0.8 to 1.0 as it enters center viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.82, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.88, 1]);

  const tickerText = "OPERATING CONTINUOUSLY SINCE 2013 • 76 HEAVY PRIME MOVERS • 2,916 MT SYNCHRONOUS LIFT • UN WFP AUDITED CARRIER • ZERO-HIJACK ESCORT PROTOCOL • ";

  return (
    <section className="py-20 sm:py-32 bg-[#070B14] relative select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* MVP .scale-block container with #1B1E3D brand gradient */}
        <motion.div
          ref={containerRef}
          style={{ scale: cardScale, opacity: cardOpacity }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-linear-to-b from-[#1F234B] via-[#1B1E3D] to-[#151733] shadow-[0_30px_90px_rgba(0,0,0,0.65)] will-change-transform"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial from-[#FF5A1F]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

          {/* 1. TOP METADATA ROW (.our-story__top) */}
          <div className="flex items-center justify-between px-6 sm:px-12 lg:px-16 pt-8 sm:pt-10 pb-6 border-b border-white/10 relative z-10">
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#FF5A1F] uppercase">
              Why us?
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/70 uppercase">
              EXPRESS PTL TRANS-LOGISTICS
            </span>
          </div>

          {/* 2. DUAL-COLUMN CONTENT (.our-story__container) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 relative z-10">
            {/* Left Column: Corporate Resilience Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between lg:border-r lg:border-white/10 lg:pr-16">
              <div>
                <h2 className="font-headline text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.98] mb-6 sm:mb-8">
                  BUILT ON QUALITY, TRANSPARENCY & AFRICAN RESILIENCE.
                </h2>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    Over the last ten years, Express Transport and Logistics has forged a stellar reputation as an agile, reliable partner to multinational corporations, UN humanitarian agencies, and governmental bodies navigating complex East African terrains.
                  </p>
                  <p>
                    Where conventional forwarders rely on unpredictable third-party brokerage, Express PTL operates with 100% owned asset autonomy. Every heavy prime mover undergoes rigorous preventive maintenance in our specialized depot, eliminating dispatch delays along critical trade arteries.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Fleet Experience & CTA */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-snug mb-6 text-balance">
                  Operating continuously since 2013, with over a decade of proven heavy haul reliability.
                </h3>
                <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  <p>
                    Our operational team unites international-level logisticians, mechanical rigging engineers, and veteran drivers dedicated to one core objective: ensuring safe, punctual cargo transit across rugged rift valleys and desert corridors.
                  </p>
                  <p>
                    We continuously optimize efficiency through dual-redundant GPS telematics, live axle-load sensors, and personalized account management for every client.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <MvpButton
                  href="/corridors"
                  text="Explore Regional Corridors"
                  showArrow
                />
              </div>
            </div>
          </div>

          {/* 3. MVP .our-story__bottom: Giant Monumental Watermark Marquee */}
          <div className="w-full bg-[#111326] border-t border-white/10 py-6 sm:py-8 overflow-hidden relative z-10 flex items-center">
            <div className="flex w-max animate-ticker">
              <span className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white/20 tracking-wider uppercase mr-12 whitespace-nowrap">
                {tickerText}
              </span>
              <span className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white/20 tracking-wider uppercase mr-12 whitespace-nowrap">
                {tickerText}
              </span>
              <span className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white/20 tracking-wider uppercase mr-12 whitespace-nowrap">
                {tickerText}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
