"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onExpand?: () => void;
  onStartHero?: () => void;
  onComplete?: () => void;
}

/**
 * Preloader: Reverse-Engineered from mvplogistics.eu
 * Controls the 0% -> 100% progress count and triggers the sequential choreography:
 * 1. onExpand() -> Video scales from 0.35 to 1.0
 * 2. onStartHero() -> Hero text peels down, guideline slices across, navbar drops, card rises
 * 3. onComplete() -> Unmounts preloader
 */
import { hasSeenIntroSession, markIntroAsSeen } from "@/lib/introSession";

export default function Preloader({ onExpand, onStartHero, onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isExpanding, setIsExpanding] = useState(false);
  const [isDone, setIsDone] = useState(() => hasSeenIntroSession());

  useEffect(() => {
    if (isDone) return;

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
    const duration = 2200; // 2.2s count up
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Power1.in ease curve (speeds up towards 100%)
      const eased = Math.pow(t, 1.55);
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (t < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        // Small pause at 100% then trigger shared video expansion
        setTimeout(() => {
          setIsExpanding(true);
          if (onExpand) onExpand();

          // Right as the video expands to full screen, start the hero element choreography
          setTimeout(() => {
            if (onStartHero) onStartHero();
          }, 550);

          // When expansion finishes, complete and unmount preloader UI
          setTimeout(() => {
            markIntroAsSeen();
            setIsDone(true);
            if (onComplete) onComplete();
          }, 850);
        }, 200);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animFrame);
  }, [isDone, onExpand, onStartHero, onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: isExpanding ? 0 : 1 }}
          transition={{ duration: 0.75, delay: 0.1, ease: "easeInOut" }}
          className="fixed inset-0 z-80 bg-white flex flex-col justify-between overflow-hidden select-none pointer-events-none"
        >
          {/* Top buffer */}
          <div className="w-full h-12" />

          {/* Center Stage: The single shared video from page.tsx is positioned at z-[95] */}
          <div className="w-full" />

          {/* ========================================================
              BOTTOM BAR: BRAND TITLE (LEFT) & PERCENT COUNTER (RIGHT)
             ======================================================== */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isExpanding ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="relative z-100 w-full max-w-[1880px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12"
          >
            {/* Meta Row: Brand monogram E. P. T. L. (left) + Percentage (right) */}
            <div className="flex items-end justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="font-headline text-2xl sm:text-3xl lg:text-4xl text-[#1B1E3D] tracking-[0.2em] uppercase font-bold">
                  E. P. T. L.
                </span>
                <span className="hidden sm:inline-block text-xs font-bold tracking-[0.2em] text-[#1B1E3D]/50 uppercase pl-3 border-l border-[#1B1E3D]/20">
                  EXPRESS TRANS-LOGISTICS
                </span>
              </div>

              <div className="font-headline text-3xl sm:text-5xl lg:text-6xl text-[#1B1E3D] tracking-tight leading-none font-bold">
                {progress}%
              </div>
            </div>

            {/* Bottom Hairline Progress Track matching MVP */}
            <div className="w-full h-0.5 bg-[#1B1E3D]/15 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-[#1B1E3D] rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
