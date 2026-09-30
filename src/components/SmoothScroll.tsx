"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * SmoothScroll: Reverse-Engineered from mvplogistics.eu
 * 
 * Exact MVP Logistics Production Configuration:
 * - Desktop: ScrollSmoother.create({ smooth: 2.5, speed: 0.7, normalizeScroll: true })
 * - Mobile:  ScrollSmoother.create({ smooth: 1, speed: 1, normalizeScroll: true, ignoreMobileResize: true })
 * 
 * Recreated with:
 * - duration: 2.2s weighted heavy flywheel inertia
 * - wheelMultiplier: 0.75 (speed: 0.7 dampening)
 * - easing: exponential decay curve matching GSAP power4.out
 */
declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    const lenis = new Lenis({
      // Desktop: 2.2s weighted heavy flywheel inertia matching MVP's smooth: 2.5
      // Mobile: 1.0s matching MVP's smooth: 1
      duration: isMobile ? 1.0 : 2.2,
      // Exponential power curve matching GSAP power4.out
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      // Heavy speed damping matching MVP's speed: 0.7
      wheelMultiplier: isMobile ? 1.0 : 0.75,
      touchMultiplier: 1.2,
      infinite: false,
      smoothWheel: true,
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animFrame);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return null;
}
