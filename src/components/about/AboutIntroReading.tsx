"use client";

import React from "react";
import ReadingScrubText from "@/components/ReadingScrubText";

export default function AboutIntroReading() {
  const narrativeText =
    "WE SPECIALIZE IN AND ARE UNIQUELY POSITIONED TO PROVIDE GLOBALLY INTEGRATED LOGISTICS SOLUTIONS TO ENSURE SEAMLESS SERVICE FROM ANYWHERE IN THE WORLD TO YOUR LOCATION IN ETHIOPIA. WE PROVIDE COMPREHENSIVE SERVICES IN GLOBAL FREIGHT FORWARDING, CUSTOMS CLEARING, TRANSPORT, WAREHOUSING, AND DISTRIBUTION.";

  return (
    <section className="py-28 sm:py-44 bg-[#070B14] relative border-b border-white/5 select-none overflow-hidden">
      {/* Subtle ambient brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-72 bg-radial from-[#1F234B]/60 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
              GLOBALLY INTEGRATED CAPABILITY
            </span>
          </div>

          {/* Reverse-engineered Reading Scrub Block with MVP Monumental Sizing */}
          <ReadingScrubText
            text={narrativeText}
            className="font-headline text-2xl sm:text-4xl md:text-5xl lg:text-[3.8rem] text-white font-normal leading-[1.08] tracking-tight max-w-6xl mx-auto"
            offset={["start 0.85", "end 0.35"]}
          />
        </div>
      </div>
    </section>
  );
}
