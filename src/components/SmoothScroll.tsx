"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

/**
 * Unified SmoothScroll System
 * 
 * Standardized across all pages (Home, About, Services, Corridors, Fleet, Contact):
 * - Consistent duration (1.2s) providing smooth, responsive flywheel inertia
 * - 1:1 Wheel multiplier (1.0) eliminating artificial damping and ensuring uniform scrolling resistance
 * - Route-aware re-calibration and ResizeObserver tracking document mutations across client-side navigation
 */
export default function SmoothScroll() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // 1. Initialize single uniform Lenis instance
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
      infinite: false,
      smoothWheel: true,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // 2. RequestAnimationFrame loop
    let animFrame: number;
    function raf(time: number) {
      lenis.raf(time);
      animFrame = requestAnimationFrame(raf);
    }
    animFrame = requestAnimationFrame(raf);

    // 3. Dynamic ResizeObserver to keep scroll bounds and inertia 100% accurate
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    return () => {
      cancelAnimationFrame(animFrame);
      resizeObserver.disconnect();
      lenis.destroy();
      delete window.__lenis;
      lenisRef.current = null;
    };
  }, []);

  // 4. On page navigation (pathname change), recalibrate Lenis instantly
  useEffect(() => {
    if (lenisRef.current) {
      // Scroll to top instantly on route change
      window.scrollTo(0, 0);
      lenisRef.current.scrollTo(0, { immediate: true });
      // Recalibrate document dimensions for the new page
      requestAnimationFrame(() => {
        lenisRef.current?.resize();
      });
    }
  }, [pathname]);

  return null;
}
