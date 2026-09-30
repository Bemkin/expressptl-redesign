"use client";

import React from "react";
import AnimatedText from "@/components/AnimatedText";
import ReadingScrubText from "@/components/ReadingScrubText";

export default function AboutMissionReading() {
  const missionText =
    "EXPRESS TRANSPORT AND LOGISTICS IS MANAGED DYNAMICALLY AND EFFICIENTLY BY PROFESSIONAL STAFF PREPARED TO MEET DEMANDING LOGISTICS REQUIREMENTS AND PROVIDE THE MOST RELIABLE, EXTENSIVE FREIGHT SERVICES. WE WELCOME YOU TO JOIN OUR EXPANDING NETWORK IN ETHIOPIA AND WORLDWIDE.";

  return (
    <section className="py-28 sm:py-44 bg-[#070B14] relative border-b border-white/5 select-none overflow-hidden">
      {/* Subtle radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-5xl h-80 bg-radial from-[#FF5A1F]/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* MVP Section 6 Split Grid (.info__container: .info__title + .info__text) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Colossal Section Title */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
                STRATEGIC MISSION
              </span>
            </div>

            <AnimatedText
              text={"OUR\nMISSION"}
              as="h2"
              delay={0.1}
              stagger={0.03}
              className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-[8.5rem] text-white uppercase tracking-tight leading-[0.85]"
            />
          </div>

          {/* Right Column: Monumental Uppercase Reading Scrub Block */}
          <div className="lg:col-span-8 pt-2">
            <ReadingScrubText
              text={missionText}
              className="font-headline text-2xl sm:text-4xl md:text-5xl lg:text-[3.6rem] text-white font-normal leading-[1.1] tracking-tight"
              offset={["start 0.85", "end 0.35"]}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
