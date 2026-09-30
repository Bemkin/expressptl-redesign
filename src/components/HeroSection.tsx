"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedText from "./AnimatedText";

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
    title: "CONSTRUCTION",
    progress: 20,
  },
  {
    id: "02",
    total: "05",
    title: "GROUND TRANSPORT",
    progress: 40,
  },
  {
    id: "03",
    total: "05",
    title: "IMPORT AND EXPORT",
    progress: 60,
  },
  {
    id: "04",
    total: "05",
    title: "LOGISTIC SERVICE",
    progress: 80,
  },
  {
    id: "05",
    total: "05",
    title: "MANUFACTURING",
    progress: 100,
  },
];

export default function HeroSection({
  hideBackground = false,
  isStarted = true,
}: {
  hideBackground?: boolean;
  isStarted?: boolean;
}) {
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
    <section className={`relative w-full h-screen min-h-180 overflow-hidden ${hideBackground ? "bg-transparent" : "bg-[#070B14]"} flex flex-col justify-end select-none`}>
      
      {/* 1. BACKGROUND & BASE LAYER: CINEMATIC TRUCK VIDEO ON WET HIGHWAY + DUAL GRADIENT OVERLAYS */}
      {!hideBackground && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/hero_truck_poster.jpg"
            className="w-full h-full object-cover object-[center_65%] filter brightness-[0.92] contrast-[1.05]"
          >
            <source src="/assets/gemini_generated_video_40cb6d4f.mp4" type="video/mp4" />
          </video>
          {/* Dark cinematic gradient overlays */}
          <div className="absolute inset-0 bg-linear-to-b from-[#070B14]/50 via-[#070B14]/20 to-[#070B14]/75" />
        </div>
      )}

      {/* 2. MAIN HERO CONTAINER: HERO HEAD (MONOGRAM + GUIDELINE) + HERO INNER (HEADLINE + SERVICES CARD) */}
      <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-10 md:pb-14 max-w-[1880px] mx-auto flex flex-col justify-end">
        
        {/* REVERSE-ENGINEERED MVP .hero__head WITH .main-animated-line */}
        <div className="relative w-full flex items-center justify-between pb-3 sm:pb-4 lg:pb-5 mb-8 sm:mb-12 lg:mb-16 select-none">
          {/* Left: Monogram items with wide rhythmic column spacing matching MVP .hero__abb-item */}
          <div className="flex items-center">
            {["E.", "P.", "T.", "L."].map((char, i) => (
              <span key={char} className="w-16 sm:w-24 md:w-36 lg:w-48 xl:w-56 inline-block overflow-hidden">
                <motion.span
                  custom={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scaleY: 0,
                      y: "-40%",
                      transformOrigin: "50% 0%",
                    },
                    visible: (idx: number) => ({
                      opacity: 1,
                      scaleY: 1,
                      y: "0%",
                      transformOrigin: "50% 0%",
                      transition: {
                        delay: 0.06 + idx * 0.08,
                        duration: 0.85,
                        ease: [0.175, 0.885, 0.32, 1.275], // GSAP back.out(1.7) overshoot curve
                      },
                    }),
                  }}
                  initial="hidden"
                  animate={isStarted ? "visible" : "hidden"}
                  className="font-headline text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white/95 tracking-wider inline-block drop-shadow-md"
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </div>

          {/* Right: TRANS-LOGISTICS with SplitType character animation */}
          <div className="select-none">
            <AnimatedText
              text="TRANS-LOGISTICS"
              as="span"
              animate={isStarted}
              delay={0.25}
              stagger={0.025}
              duration={0.8}
              className="font-headline text-sm sm:text-lg md:text-3xl lg:text-4xl tracking-[0.16em] text-white/90 uppercase drop-shadow-md"
            />
          </div>

          {/* MVP .main-animated-line Baseline Guideline Line sweeping across */}
          <motion.div
            initial={{ width: "0%" }}
            animate={isStarted ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.3, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 bottom-0 h-px bg-white/20 origin-left"
          />
        </div>

        {/* 3. HERO INNER ROW: MONUMENTAL HEADLINE (LEFT) & SERVICES CARD (RIGHT) */}
        <div className="w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-8">
          
          {/* Monumental Headline (Bottom-Left) with MVP Character Peel & Elastic Drop */}
          <div className="max-w-2xl lg:max-w-3xl pointer-events-none">
            <AnimatedText
              text={"WE DELIVER MORE THAN CARGO —\nWE DELIVER PEACE OF MIND."}
            as="h1"
            animate={isStarted}
            delay={0.05}
            stagger={0.02}
            duration={0.75}
            className="font-headline text-3xl sm:text-4xl md:text-6xl lg:text-[5.5rem] xl:text-[6.2rem] leading-[0.88] tracking-tight text-white uppercase drop-shadow-[0_12px_30px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Interactive Services Mini-Card (Bottom-Right Anchored) with MVP Scale Entrance: t = 0.45s */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={isStarted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 30 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="w-full sm:w-105 lg:w-110 bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.65)] p-5 sm:p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.75)]"
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
            <div className="min-h-11.5 flex items-center flex-1">
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

      </div>

    </section>
  );
}
