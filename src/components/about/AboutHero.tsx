"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";

export default function AboutHero() {
  const acronymLetters = ["E.", "P.", "T.", "L."];

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-white/10 select-none">
      {/* 1. Atmospheric Dark Background Visual with Gradient Fade */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_truck_mvp_style.jpg"
          alt="Express PTL Heavy Transport"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.38] contrast-[1.12]"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#070B14]/85 via-[#070B14]/60 to-[#070B14]" />
        <div className="absolute inset-0 bg-radial from-[#FF5A1F]/15 via-transparent to-transparent pointer-events-none blur-3xl" />
      </div>

      <div className="max-w-[1720px] w-full mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
          <span className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-[#FF5A1F] uppercase">
            SINCE 2013 • OVERLAND MASTER CARRIER
          </span>
        </motion.div>

        {/* 2. MVP .hero-about__head: Headline & Acronym Baseline Aligned */}
        <div className="relative pb-6 sm:pb-8 mb-10 sm:mb-14 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-12">
            
            {/* Monumental Headline */}
            <div className="overflow-hidden">
              <AnimatedText
                text="ABOUT US"
                as="h1"
                delay={0.15}
                stagger={0.04}
                className="font-headline text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[11.8rem] text-white uppercase tracking-tight leading-[0.82]"
              />
            </div>

            {/* MVP .hero-about__abb: Acronym Letters + Subtitle Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-between lg:justify-end gap-6 sm:gap-12 pb-2 lg:pb-5 w-full lg:w-auto"
            >
              <div className="flex items-center gap-4 sm:gap-8">
                {acronymLetters.map((letter, idx) => (
                  <span
                    key={idx}
                    className="font-headline text-3xl sm:text-4xl lg:text-5xl text-white tracking-widest"
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div className="h-6 w-px bg-white/20 hidden sm:block" />

              <span className="font-headline text-lg sm:text-2xl text-slate-300 uppercase tracking-widest">
                EXPRESS TRANS-LOGISTICS
              </span>
            </motion.div>
          </div>

          {/* MVP .main-animated-line expanding line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.45, ease: [0.77, 0, 0.175, 1] }}
            className="absolute left-0 bottom-0 w-full h-[2px] bg-linear-to-r from-[#FF5A1F] via-white/50 to-transparent"
          />
        </div>

        {/* 3. Lower Editorial Grid (MVP .hero-about__container-inner) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-2"
        >
          <div className="lg:col-span-7">
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tight leading-snug">
              A professional logistics enterprise with extensive heavy-haul & supply chain mastery across East Africa.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Over the last ten years, Express Transport and Logistics has forged a stellar reputation for quality, transparency, and operational reliability. We are proud to support some of the most prominent multinational organizations in Ethiopia to achieve supply chain excellence.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">
              Our commitment to our clients is unwavering: delivering world-class transport, customs brokerage, and bonded container clearance in challenging operating environments.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
