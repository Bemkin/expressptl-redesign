"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutBrandNote() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.9, 1]);

  const monogram = ["E.", "P.", "T.", "L."];

  return (
    <section className="py-20 sm:py-32 bg-[#070B14] relative select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        <motion.div
          ref={containerRef}
          style={{ scale: cardScale, opacity: cardOpacity }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/15 bg-linear-to-r from-[#171938] via-[#1B1E3D] to-[#171938] px-8 sm:px-16 lg:px-24 py-16 sm:py-28 text-center shadow-2xl will-change-transform"
        >
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-64 bg-radial from-[#FF5A1F]/20 via-transparent to-transparent pointer-events-none blur-3xl" />

          {/* MVP .note__head: Full-width spaced acronym letters */}
          <div className="flex items-center justify-between w-full max-w-5xl mx-auto mb-12 sm:mb-16 pb-6 border-b border-white/10 relative z-10">
            {monogram.map((char, i) => (
              <span
                key={i}
                className="font-headline text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FF5A1F] tracking-widest drop-shadow-md"
              >
                {char}
              </span>
            ))}
          </div>

          {/* Monumental Headline (.note__title) */}
          <h2 className="relative z-10 font-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-white uppercase tracking-tight leading-[0.98] max-w-5xl mx-auto drop-shadow-lg">
            HEAVY HAULAGE & MULTIMODAL LIFELINES ENGINEERED FOR EAST AFRICA.
          </h2>

          <div className="mt-10 flex items-center justify-center gap-3 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-slate-300 uppercase">
              ETHIOPIA • DJIBOUTI • KENYA • REGIONAL CORRIDORS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
