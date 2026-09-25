"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceDivision {
  id: string;
  total: string;
  title: string;
  progress: number;
}

const SERVICES_DATA: ServiceDivision[] = [
  {
    id: "01",
    total: "05",
    title: "INTERNATIONAL FREIGHT TRANSPORTATION",
    progress: 20,
  },
  {
    id: "02",
    total: "05",
    title: "CROSS-BORDER CUSTOMS & BONDED CLEARANCE",
    progress: 40,
  },
  {
    id: "03",
    total: "05",
    title: "HEAVY HAUL & PROJECT CARGO LOGISTICS",
    progress: 60,
  },
  {
    id: "04",
    total: "05",
    title: "TEMPERATURE-CONTROLLED PHARMA & COLD CHAIN",
    progress: 80,
  },
  {
    id: "05",
    total: "05",
    title: "DOOR-TO-DOOR MULTIMODAL DISTRIBUTION",
    progress: 100,
  },
];

export default function HeroSection() {
  const [currentServiceIdx, setCurrentServiceIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle services card every 5 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentServiceIdx((prev) => (prev + 1) % SERVICES_DATA.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const activeService = SERVICES_DATA[currentServiceIdx];

  const handleNextService = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentServiceIdx((prev) => (prev + 1) % SERVICES_DATA.length);
  };

  return (
    <section className="relative w-full h-screen min-h-[720px] overflow-hidden bg-[#070B14] flex flex-col justify-end select-none">
      
      {/* 1. BACKGROUND & BASE LAYER: CINEMATIC TRUCK VIDEO ON WET HIGHWAY + DUAL GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/hero_truck_exact.jpg"
          className="w-full h-full object-cover object-[center_65%] filter brightness-[0.92] contrast-[1.05]"
        >
          <source src="/assets/gemini_generated_video_40cb6d4f.mp4" type="video/mp4" />
        </video>
        {/* Dark cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070B14]/50 via-[#070B14]/20 to-[#070B14]/75" />
      </div>

      {/* 2. SPATIAL FLOATING DEPTH ELEMENTS (E. P. T. L. + TRANS-LOGISTICS) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full z-10 pointer-events-none">
        {/* Subtle Horizontal Depth Guideline */}
        <div className="w-full h-[1px] bg-white/20 absolute top-1/2 left-0 -translate-y-1/2" />

        <div className="relative flex items-center justify-center md:justify-between px-5 md:px-12 max-w-[1720px] mx-auto w-full">
          <div className="flex items-center gap-3.5 sm:gap-6 md:gap-24 lg:gap-32">
            <span className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-wider drop-shadow-md">
              E.
            </span>
            <span className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-wider drop-shadow-md">
              P.
            </span>
            <span className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-wider drop-shadow-md">
              T.
            </span>
            <span className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-wider drop-shadow-md">
              L.
            </span>
          </div>

          <span className="font-headline text-xs sm:text-base md:text-4xl lg:text-5xl tracking-widest text-white/95 drop-shadow-md uppercase ml-4 sm:ml-6 md:ml-0">
            TRANS-LOGISTICS
          </span>
        </div>
      </div>

      {/* 3. BOTTOM ROW: MONUMENTAL HEADLINE (LEFT) & SERVICES CARD (RIGHT) */}
      <div className="relative z-20 w-full px-5 pb-5 sm:pb-8 md:px-12 md:pb-12 max-w-[1720px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 sm:gap-6 lg:gap-8">
        
        {/* Monumental Headline (Bottom-Left) */}
        <div className="max-w-2xl lg:max-w-3xl pointer-events-none">
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.88] tracking-tight text-white uppercase drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)]"
          >
            WE DELIVER MORE THAN CARGO — <br />
            WE DELIVER PEACE OF MIND.
          </motion.h1>
        </div>

        {/* Interactive Services Mini-Card (Bottom-Right Anchored) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full sm:w-[420px] lg:w-[440px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.65)] p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.75)]"
        >
          {/* Card Meta Row: Counter & Tag */}
          <div className="flex items-baseline justify-between mb-6">
            <div className="font-headline text-2xl tracking-tight text-[#0D1322]">
              {activeService.id}{" "}
              <span className="text-sm font-medium text-slate-400">
                / {activeService.total}
              </span>
            </div>
            <span className="text-[11px] font-extrabold tracking-widest text-[#0D1322] uppercase">
              OUR SERVICES
            </span>
          </div>

          {/* Progress Rail */}
          <div className="w-full h-0.5 bg-slate-200 relative rounded-full overflow-hidden mb-6">
            <motion.div
              className="h-full bg-[#0D1322] rounded-full"
              initial={false}
              animate={{ width: `${activeService.progress}%` }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
            />
          </div>

          {/* Service Title & Cycle Button */}
          <div className="flex items-center justify-between gap-4">
            <div className="min-h-[46px] flex items-center flex-1">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={activeService.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="font-headline text-xl sm:text-2xl text-[#0D1322] leading-tight uppercase tracking-tight"
                >
                  {activeService.title}
                </motion.h3>
              </AnimatePresence>
            </div>

            <button
              onClick={handleNextService}
              className="w-11 h-11 rounded-lg bg-[#0D1322] text-white flex items-center justify-center shrink-0 hover:bg-[#FF5A1F] transition-all duration-200 hover:scale-105 active:scale-95 shadow-md group"
              aria-label="Next service division"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
