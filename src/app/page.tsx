"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import ServicesSection from "@/components/ServicesSection";
import ImpactMetricsStrip from "@/components/ImpactMetricsStrip";
import PartnersSection from "@/components/PartnersSection";
import FeedbackSection from "@/components/FeedbackSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isExpanding, setIsExpanding] = useState(false);
  const [heroActive, setHeroActive] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);

      if (!preloaderDone) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [preloaderDone]);

  return (
    <main className="min-h-screen bg-[#070B14] text-white selection:bg-[#FF5A1F] selection:text-white">
      <Preloader
        onExpand={() => setIsExpanding(true)}
        onStartHero={() => setHeroActive(true)}
        onComplete={() => setPreloaderDone(true)}
      />
      <Navbar isStarted={heroActive} />

      {/* Seamless Unified Hero + About Section Container with Single Shared Video */}
      <div className="relative w-full bg-[#070B14]">
        {/* Sticky/Fixed 100vh Video Viewport: fixed during preloader so it ALWAYS shows in center regardless of scroll position, then sticky once preloader completes */}
        <div
          className={`${
            preloaderDone
              ? "sticky top-0 h-screen w-full mb-[-100vh] z-0"
              : "fixed inset-0 w-full h-screen z-90"
          } overflow-hidden pointer-events-none flex items-center justify-center transition-all`}
        >
          <motion.div
            initial={{ y: "82vh", rotate: 6, scale: 0.28, borderRadius: "24px" }}
            animate={{
              y: 0,
              rotate: 0,
              scale: isExpanding ? 1 : 0.35,
              borderRadius: isExpanding ? "0px" : "16px",
            }}
            transition={
              isExpanding
                ? {
                    scale: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1] },
                    borderRadius: { duration: 0.85, ease: [0.215, 0.61, 0.355, 1] },
                    default: { duration: 0.5 },
                  }
                : {
                    y: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
                    rotate: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
                    borderRadius: { duration: 1.25, ease: [0.16, 1, 0.3, 1] },
                  }
            }
            className="w-full h-full relative overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.65)] will-change-transform"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/hero_truck_poster.jpg"
              className="w-full h-full object-cover object-[center_65%] filter brightness-[0.90] contrast-[1.05]"
            >
              <source src="/assets/gemini_generated_video_40cb6d4f.mp4" type="video/mp4" />
            </video>
            {/* Subtle cinematic gradient overlays that keep readability crisp */}
            <div className="absolute inset-0 bg-linear-to-b from-[#070B14]/50 via-transparent via-50% to-[#070B14]/85 z-1" />
          </motion.div>
        </div>

        {/* Scrolling Content Layer: Hero (100vh) followed by AboutSection */}
        <div className="relative z-10">
          <HeroSection hideBackground isStarted={heroActive} />
          <AboutSection />
          {/* Bottom gradient fade smoothly transitioning into AdvantagesSection */}
          <div className="w-full h-24 bg-linear-to-b from-transparent to-[#070B14] pointer-events-none" />
        </div>
      </div>

      <AdvantagesSection />
      <ServicesSection />
      <ImpactMetricsStrip />
      {/* Seamless Unified Partners + Feedback Section with Single Continuing 4K Truck Video */}
      <div className="relative w-full bg-[#070B14]">
        {/* Sticky 100vh Video: Unzoomed at native 16:9 viewport ratio, pins behind Partners and Feedback */}
        <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/assets/partners_truck.jpg"
            className="w-full h-full object-cover object-[center_45%] filter brightness-[0.72] contrast-[1.12]"
          >
            <source src="/assets/gemini_generated_video_1adefa94.mp4" type="video/mp4" />
          </video>
          {/* Ambient Dark Industrial Vignette Overlays matching #070B14 */}
          <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-[#070B14]/30 to-[#070B14]/85 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-r from-[#070B14]/80 via-transparent to-[#070B14]/80 pointer-events-none" />
        </div>

        {/* Scrolling Content Layer pulled over the sticky 100vh video */}
        <div className="relative z-10 mt-[-100vh]">
          <PartnersSection hideBackground />
          <FeedbackSection />
          <Footer hideBackground />
        </div>
      </div>
    </main>
  );
}
