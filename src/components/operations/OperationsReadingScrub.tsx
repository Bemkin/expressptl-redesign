"use client";

import React from "react";
import ReadingScrubText from "@/components/ReadingScrubText";

export default function OperationsReadingScrub() {
  const narrativeText =
    "OPERATING CONTINUOUSLY SINCE 2013, EXPRESS PTL DEPLOYS 76 COMPANY-OWNED HEAVY PRIME MOVERS CAPABLE OF MOBILIZING 2,916 METRIC TONS SIMULTANEOUSLY. BACKED BY OUR 14,000 SQUARE METER BOLE BULBULA TERMINAL AND LICENSED AEO CUSTOMS ACCREDITATION ACROSS GALAFI AND MODJO, WE DELIVER ZERO-DISRUPTION HEAVY HAULAGE ACROSS THE HORN OF AFRICA.";

  return (
    <section className="py-24 sm:py-36 lg:py-44 bg-[#070B14] relative border-b border-white/10 select-none overflow-hidden">
      {/* Subtle ambient brand glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-4xl h-72 bg-radial from-[#FF5A1F]/10 via-[#1F1F61]/15 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 sm:mb-12">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
              VERIFIED INFRASTRUCTURE &amp; FLEET CAPACITY
            </span>
          </div>

          {/* Reverse-engineered Reading Scrub Block */}
          <ReadingScrubText
            text={narrativeText}
            className="font-headline text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] text-white font-normal leading-[1.08] tracking-tight max-w-6xl mx-auto"
            offset={["start 0.85", "end 0.35"]}
          />
        </div>
      </div>
    </section>
  );
}
