"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import MvpButton from "./MvpButton";
import AnimatedText from "./AnimatedText";
import ReadingScrubText from "./ReadingScrubText";

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Reverse-Engineered MVP .scale-block Scroll Scrub:
  // Starts growing at top-bottom (scale ~0.75), reaches full scale 1.0 at center-center
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.76, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.85, 1]);

  return (
    <section id="about" className="relative w-full py-12 sm:py-20 lg:py-28 z-10 select-none">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Floating Card with #1B1E3D Brand Background & MVP .scale-block scrub */}
        <motion.div
          ref={cardRef}
          style={{ scale: cardScale, opacity: cardOpacity }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.65)] bg-gradient-to-b from-[#1F234B] via-[#1B1E3D] to-[#151733] px-6 sm:px-12 lg:px-20 pt-10 sm:pt-16 pb-20 sm:pb-32 will-change-transform"
        >
          {/* Subtle Ambient Radial Highlight matching the brand glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-radial from-[#FF5A1F]/10 via-transparent to-transparent pointer-events-none blur-2xl" />

          {/* 1. TOP METADATA ROW */}
          <div className="relative z-10 flex items-center justify-between pb-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/80 uppercase">
                ABOUT US
              </span>
            </div>

            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-white/70 uppercase">
              EXPRESS TRANS-LOGISTICS
            </span>
          </div>

          {/* MVP .main-animated-line Divider Line */}
          <div className="w-full overflow-hidden flex justify-center mb-12 sm:mb-16">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
              className="h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />
          </div>

          {/* 2. CENTER CONTENT: MONUMENTAL TITLE & EDITORIAL NARRATIVE */}
          <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
            {/* Monumental Headline with MVP Character Peel & Elastic Drop */}
            <AnimatedText
              text="EXPRESS COMPANY"
              as="h2"
              delay={0.1}
              stagger={0.03}
              viewportMargin="-5%"
              className="font-headline text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.2rem] text-white uppercase tracking-tight leading-[0.92] mb-6 sm:mb-8 drop-shadow-md"
            />

            {/* Reverse-Engineered MVP Reading Scrub Block: Words illuminate from 18% dim watermark to 100% white */}
            <ReadingScrubText
              text="For over 13+ years, Express PTL has been a trusted benchmark in East African heavy haulage and multimodal freight logistics. We unite an experienced team of logistics engineers, route dispatchers, and bonded customs specialists to ensure stable, safe, and on-time deliveries worldwide, continuously raising service standards in regional supply chains."
              className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl mb-10 sm:mb-12"
            />

            {/* CTA Button with Reliable Entrance Animation */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              <MvpButton
                href="/about"
                text="Learn more about us"
              />
            </motion.div>

            {/* Quick Proof Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold tracking-wider text-slate-300 uppercase"
            >
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#FF5A1F]" />
                <span>76 Heavy Prime Movers</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
                <span>2,916 MT Lift Capacity</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FF5A1F]" />
                <span>24/7 Satellite Telematics</span>
              </div>
            </motion.div>
          </div>

          {/* 3. COLOSSAL ARCHITECTURAL WATERMARK AT CARD BOTTOM - MOVING TO THE LEFT */}
          <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full pointer-events-none select-none overflow-hidden z-0">
            <motion.div
              className="flex whitespace-nowrap will-change-transform"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 12,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Loop Block 1 */}
              <div className="flex items-center gap-10 sm:gap-16 shrink-0 pr-10 sm:pr-16">
                <span className="font-headline text-[13vw] lg:text-[180px] xl:text-[210px] leading-none text-white/[0.055] tracking-tight uppercase">
                  YEARS ON THE MARKET
                </span>
                <span className="font-headline text-[8vw] lg:text-[110px] leading-none text-white/[0.04]">
                  •
                </span>
                <span className="font-headline text-[13vw] lg:text-[180px] xl:text-[210px] leading-none text-white/[0.055] tracking-tight uppercase">
                  YEARS ON THE MARKET
                </span>
                <span className="font-headline text-[8vw] lg:text-[110px] leading-none text-white/[0.04]">
                  •
                </span>
              </div>

              {/* Loop Block 2 (identical clone for seamless infinite loop) */}
              <div className="flex items-center gap-10 sm:gap-16 shrink-0 pr-10 sm:pr-16">
                <span className="font-headline text-[13vw] lg:text-[180px] xl:text-[210px] leading-none text-white/[0.055] tracking-tight uppercase">
                  YEARS ON THE MARKET
                </span>
                <span className="font-headline text-[8vw] lg:text-[110px] leading-none text-white/[0.04]">
                  •
                </span>
                <span className="font-headline text-[13vw] lg:text-[180px] xl:text-[210px] leading-none text-white/[0.055] tracking-tight uppercase">
                  YEARS ON THE MARKET
                </span>
                <span className="font-headline text-[8vw] lg:text-[110px] leading-none text-white/[0.04]">
                  •
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
