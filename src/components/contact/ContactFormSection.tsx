"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Phone, Mail, ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

export default function ContactFormSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    cargo: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reverse-Engineered MVP .scale-block Scroll Scrub:
  // Starts at scale 0.76 at bottom of viewport, scales up to 1.0 smoothly
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.76, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.85, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="feedback" className="relative w-full py-16 sm:py-24 lg:py-32 bg-[#070B14] z-10 select-none">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* ========================================================
            REVERSE-ENGINEERED MVP .scale-block FEEDBACK CARD
            Crisp off-white #F4F4F7 card with Homepage Navy theme
           ======================================================== */}
        <motion.div
          ref={cardRef}
          style={{ scale: cardScale, opacity: cardOpacity }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#F4F4F7] text-[#1B1E3D] px-8 sm:px-16 lg:px-24 pt-10 sm:pt-14 pb-16 sm:pb-24 shadow-[0_35px_100px_rgba(0,0,0,0.7)] will-change-transform border border-slate-200"
        >
          {/* 1. TOP METADATA ROW (.contact__top) */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1B1E3D]/10 mb-12 sm:mb-16">
            <span className="font-headline text-sm sm:text-base tracking-[0.2em] uppercase font-bold text-[#1B1E3D]">
              FEEDBACK
            </span>
            <span className="font-headline text-xs sm:text-sm tracking-[0.15em] uppercase font-bold text-[#1B1E3D] hidden sm:block">
              YOUR CARGO IS OUR CONCERN. CONTACT US!
            </span>
          </div>

          {/* 2. MONUMENTAL HEADLINE & SUBTITLE */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 mb-12 sm:mb-16 items-end">
            <div className="xl:col-span-8">
              <AnimatedText
                text={"YOUR CARGO IS IN\nRELIABLE HANDS."}
                as="h2"
                delay={0.15}
                stagger={0.035}
                className="font-headline text-5xl sm:text-7xl lg:text-8xl xl:text-[9.5rem] 2xl:text-[11rem] text-[#1B1E3D] uppercase leading-[0.82] tracking-[-0.03em] select-none"
              />
            </div>
            <div className="xl:col-span-4 flex flex-col justify-end">
              <div className="pl-4 border-l-2 border-[#FF5A1F] mb-4">
                <p className="font-headline text-xl sm:text-2xl text-[#1B1E3D] uppercase leading-[1.05] tracking-tight">
                  Write to us — our specialist will offer the optimal logistics solution just for you.
                </p>
              </div>
              <span className="text-xs sm:text-sm text-slate-500 font-sans block">
                Direct 2-hour SLA response for cross-border corridor and project cargo tenders.
              </span>
            </div>
          </div>

          {/* 3. DIRECT CONTACT FORM (.contact__form desktop-visible) */}
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-16 sm:py-20 px-8 rounded-2xl bg-white border border-slate-200 text-center shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/15 text-[#FF5A1F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#1B1E3D] uppercase tracking-wide mb-3">
                REQUEST TRANSMITTED SUCCESSFULLY
              </h3>
              <p className="text-slate-600 font-sans max-w-md mx-auto text-sm sm:text-base mb-8">
                Thank you, <span className="font-bold text-[#1B1E3D]">{formData.fullName}</span>. Our senior operations dispatcher at Wollo Sefer headquarters will review your specifications and call you within 2 hours.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="py-3 px-8 rounded-xl bg-[#1B1E3D] hover:bg-[#FF5A1F] text-white font-headline text-lg uppercase tracking-wider transition-colors cursor-pointer"
              >
                SEND ANOTHER REQUEST
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold tracking-wider text-[#1B1E3D]/80 uppercase block mb-2 font-headline">
                    FULL NAME <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Dawit Haile"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-300 text-[#1B1E3D] placeholder-slate-400 text-sm focus:border-[#1B1E3D] focus:ring-1 focus:ring-[#1B1E3D] focus:outline-none transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold tracking-wider text-[#1B1E3D]/80 uppercase block mb-2 font-headline">
                    PHONE NUMBER <span className="text-[#FF5A1F]">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+251 91 124 8830"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-300 text-[#1B1E3D] placeholder-slate-400 text-sm focus:border-[#1B1E3D] focus:ring-1 focus:ring-[#1B1E3D] focus:outline-none transition-all"
                  />
                </div>

                {/* E-mail */}
                <div className="flex flex-col">
                  <label className="text-[11px] font-bold tracking-wider text-[#1B1E3D]/80 uppercase block mb-2 font-headline">
                    E-MAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@company.com"
                    className="w-full px-5 py-4 rounded-xl bg-white border border-slate-300 text-[#1B1E3D] placeholder-slate-400 text-sm focus:border-[#1B1E3D] focus:ring-1 focus:ring-[#1B1E3D] focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Route Corridor & Cargo Requirements */}
              <div className="flex flex-col">
                <label className="text-[11px] font-bold tracking-wider text-[#1B1E3D]/80 uppercase block mb-2 font-headline">
                  ROUTE CORRIDOR &amp; CARGO SPECIFICATIONS (OPTIONAL)
                </label>
                <input
                  type="text"
                  value={formData.cargo}
                  onChange={(e) => setFormData({ ...formData, cargo: e.target.value })}
                  placeholder="e.g. 12x 40ft containers from Djibouti Port to Modjo Dry Port, or 120 MT transformer lift"
                  className="w-full px-5 py-4 rounded-xl bg-white border border-slate-300 text-[#1B1E3D] placeholder-slate-400 text-sm focus:border-[#1B1E3D] focus:ring-1 focus:ring-[#1B1E3D] focus:outline-none transition-all"
                />
              </div>

              {/* Submit Row & Hotlines */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4">
                <div className="flex items-center gap-6 text-xs text-slate-500 font-sans">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#FF5A1F]" />
                    <span className="font-semibold text-[#1B1E3D]">+251 11 470 2031</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#FF5A1F]" />
                    <span className="font-semibold text-[#1B1E3D]">express@expressptl.com</span>
                  </div>
                </div>

                {/* MVP Reverse-Engineered Action Button with Liquid Bubble & Split Roll */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group mvp-bubble-btn w-full lg:w-auto px-10 sm:px-14 py-5 sm:py-6 rounded-2xl shadow-[0_15px_40px_rgba(27,30,61,0.25)] font-headline text-xl sm:text-2xl tracking-wider uppercase flex items-center justify-center gap-3 bg-[#1B1E3D] text-white cursor-pointer select-none transition-all"
                >
                  <span className="mvp-text-clip">
                    <span className="inline-flex">
                      {"SEND A REQUEST".split("").map((c, i) => (
                        <span
                          key={`s1-${i}`}
                          className="mvp-char-primary"
                          style={{ transitionDelay: `${i * 14}ms` }}
                        >
                          {c === " " ? "\u00A0" : c}
                        </span>
                      ))}
                    </span>
                    <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
                      {"SEND A REQUEST".split("").map((c, i) => (
                        <span
                          key={`s2-${i}`}
                          className="mvp-char-secondary"
                          style={{ transitionDelay: `${i * 14}ms` }}
                        >
                          {c === " " ? "\u00A0" : c}
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
