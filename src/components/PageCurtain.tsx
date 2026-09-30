"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type CurtainStatus = "idle" | "exiting" | "entering";

/**
 * Reverse-Engineered Page Curtain Transition from mvplogistics.eu (.transition-plug & .transition-plug__inner)
 * 
 * Mechanics & Timelines:
 * - GSAP power4.inOut equivalent: cubic-bezier(0.77, 0, 0.175, 1)
 * - Layer 1 (.transition-plug): Fixed #070B14 obsidian canopy
 * - Layer 2 (.transition-plug__inner): Pinned accent gradient blade (#FF5A1F -> #1F1F61)
 * 
 * Two-Phase Choreography:
 * 1. Exit Phase (Su timeline):
 *    - User clicks any internal navigation link
 *    - Outer plug sweeps in from top (translateY: -105% -> 0%)
 *    - Inner accent blade expands to 100%
 *    - Viewport is completely sealed, router.push() executes
 * 
 * 2. Entrance Phase (n timeline):
 *    - New page mounts
 *    - Inner accent blade pulls back from top to bottom (height: 100% -> 0%)
 *    - Outer plug sweeps away down (translateY: 0% -> 105%), revealing the new page
 */
export default function PageCurtain() {
  const router = useRouter();
  const pathname = usePathname();
  const [status, setStatus] = useState<CurtainStatus>("idle");
  const pendingHrefRef = useRef<string | null>(null);

  // Global Link Interceptor (Reverse-Engineered from mvp's jg() link handler)
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const target = anchor.getAttribute("target");

      // Filter out external, modifier clicks, anchors, or new-tab links
      if (
        !href ||
        target === "_blank" ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey ||
        e.altKey ||
        href.startsWith("#") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("http://") ||
        href.startsWith("https://")
      ) {
        return;
      }

      // If clicking home while already on home, let smooth scroll handle it
      if (href === "/" && pathname === "/") {
        return;
      }

      // If clicking the current exact route, ignore
      if (href === pathname) {
        return;
      }

      // Prevent abrupt default jump
      e.preventDefault();

      // Trigger Exit Phase
      pendingHrefRef.current = href;
      setStatus("exiting");

      // Once the screen is 100% sealed by the curtain (~420ms), navigate
      setTimeout(() => {
        router.push(href);
      }, 420);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, [pathname, router]);

  // When pathname changes (new route has mounted), trigger Entrance Phase
  useEffect(() => {
    if (pendingHrefRef.current !== null) {
      pendingHrefRef.current = null;
      setStatus("entering");

      // When entrance wipe completes (~750ms), return to idle
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const isVisible = status !== "idle";

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-9999 pointer-events-none overflow-hidden select-none">
          
          {/* Layer 1: Outer Dark Plug (.transition-plug) */}
          <motion.div
            key="curtain-plug"
            initial={status === "exiting" ? { y: "-105%" } : { y: "0%" }}
            animate={status === "exiting" ? { y: "0%" } : { y: "105%" }}
            transition={{
              duration: status === "exiting" ? 0.42 : 0.72,
              ease: [0.77, 0, 0.175, 1], // GSAP power4.inOut
            }}
            className="absolute inset-0 w-full h-full bg-[#070B14] shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col justify-between"
          >
            {/* Layer 2: Inner Accent Blade (.transition-plug__inner) */}
            <motion.div
              initial={status === "exiting" ? { height: "0%" } : { height: "100%" }}
              animate={status === "exiting" ? { height: "100%" } : { height: "0%" }}
              transition={{
                duration: status === "exiting" ? 0.38 : 0.55,
                delay: status === "exiting" ? 0.05 : 0.03,
                ease: [0.77, 0, 0.175, 1],
              }}
              className={`absolute left-0 right-0 w-full bg-linear-to-b from-[#1F1F61] via-[#0E1428] to-[#FF5A1F]/30 ${
                status === "exiting" ? "top-0" : "bottom-0"
              }`}
            />

            {/* Top Hairline Indicator */}
            <div className="relative z-10 w-full h-1 bg-linear-to-r from-transparent via-[#FF5A1F] to-transparent opacity-80" />

            {/* Center Brand Monogram Watermark during transition */}
            <div className="relative z-10 w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/4 border border-white/10 backdrop-blur-md shadow-2xl"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-ping" />
                <span className="font-headline text-lg sm:text-2xl tracking-[0.25em] text-white uppercase font-bold">
                  E. P. T. L.
                </span>
                <span className="hidden sm:inline-block text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase pl-3 border-l border-white/20">
                  EXPRESS TRANS-LOGISTICS
                </span>
              </motion.div>
            </div>

            {/* Bottom Hairline Indicator */}
            <div className="relative z-10 w-full h-1 bg-linear-to-r from-transparent via-[#FF5A1F]/60 to-transparent" />
          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
}
