"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Send } from "lucide-react";
import AnimatedText from "./AnimatedText";

export default function FeedbackSection() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Reverse-Engineered MVP .scale-block Scroll Scrub:
  // Starts growing at top-bottom (scale ~0.76), reaches full scale 1.0 at center-center
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 1], [0.76, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.4, 0.85, 1]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="feedback" className="relative w-full pt-10 sm:pt-16 lg:pt-20 pb-8 sm:pb-12 lg:pb-16 z-10 select-none">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================
            REVERSE-ENGINEERED MVP .scale-block FEEDBACK CARD
            Crisp off-white #F4F4F7 card floating over continuing truck video
            ======================================================== */}
        <motion.div
          ref={cardRef}
          style={{ scale: cardScale, opacity: cardOpacity }}
          className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#F4F4F7] text-[#1B1E3D] px-8 sm:px-16 lg:px-24 pt-10 sm:pt-14 pb-16 sm:pb-24 shadow-[0_35px_100px_rgba(0,0,0,0.7)] will-change-transform border border-slate-200"
        >
          {/* 1. TOP METADATA ROW (.contact__top) */}
          <div className="flex items-center justify-between pb-5 border-b border-[#1B1E3D]/10 mb-12 sm:mb-20">
            <span className="font-headline text-sm sm:text-base tracking-[0.2em] uppercase font-bold text-[#1B1E3D]">
              FEEDBACK
            </span>
            <span className="font-headline text-xs sm:text-sm tracking-[0.15em] uppercase font-bold text-[#1B1E3D] hidden sm:block">
              YOUR CARGO IS OUR CONCERN. CONTACT US!
            </span>
          </div>

          {/* 2. MONUMENTAL HEADLINE (.contact__title) */}
          <div className="mb-14 sm:mb-24">
            <AnimatedText
              text={"YOUR CARGO IS IN\nRELIABLE HANDS."}
              as="h2"
              delay={0.15}
              stagger={0.035}
              className="font-headline text-6xl sm:text-8xl lg:text-[9.5rem] xl:text-[11.5rem] 2xl:text-[13.5rem] text-[#1B1E3D] uppercase leading-[0.80] tracking-[-0.03em] select-none"
            />
          </div>

          {/* 3. BOTTOM CONTENT BLOCK (.contact__container-inner) */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pt-4">
            <div className="max-w-md">
              <p className="font-headline text-2xl sm:text-3xl text-[#1B1E3D] uppercase leading-[1.05] tracking-tight mb-2">
                Write to us — our specialist will offer the optimal logistics solution just for you.
              </p>
              <span className="text-xs sm:text-sm text-slate-500 font-sans">
                Direct 2-hour SLA response for cross-border corridor and project cargo tenders.
              </span>
            </div>

            {/* MVP Reverse-Engineered Action Button with Liquid Bubble & Split Roll */}
            <button
              onClick={() => setModalOpen(true)}
              className="group mvp-bubble-btn px-8 sm:px-12 py-5 sm:py-6 rounded-2xl shadow-[0_15px_40px_rgba(27,30,61,0.25)] font-headline text-xl sm:text-2xl tracking-[0.05em] uppercase flex items-center justify-center gap-3 bg-[#1B1E3D] text-white cursor-pointer select-none"
            >
              <span className="mvp-text-clip">
                <span className="inline-flex">
                  {"LEAVE A REQUEST — WE WILL CALL YOU BACK!".split("").map((c, i) => (
                    <span
                      key={`fb1-${i}`}
                      className="mvp-char-primary"
                      style={{ transitionDelay: `${i * 12}ms` }}
                    >
                      {c === " " ? "\u00A0" : c}
                    </span>
                  ))}
                </span>
                <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
                  {"LEAVE A REQUEST — WE WILL CALL YOU BACK!".split("").map((c, i) => (
                    <span
                      key={`fb2-${i}`}
                      className="mvp-char-secondary"
                      style={{ transitionDelay: `${i * 12}ms` }}
                    >
                      {c === " " ? "\u00A0" : c}
                    </span>
                  ))}
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 stroke-[2.5] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* ========================================================
          DISPATCH & FREIGHT REQUEST MODAL DIALOG
          ======================================================== */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#0E1224] border border-white/20 rounded-[28px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.9)] z-10 text-white overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Direct Hotlines Row */}
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-xs font-bold tracking-[0.2em] text-[#FF5A1F] uppercase font-headline">
                  24/7 REGIONAL FREIGHT DESK
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-white uppercase leading-tight mb-2">
                LEAVE A FREIGHT REQUEST
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                Our logistics coordinators in Mombasa and Addis Ababa will review your specifications and contact you directly with a route plan.
              </p>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-headline text-3xl text-white uppercase mb-2">
                    REQUEST RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto mb-6">
                    A senior operations dispatcher will contact your team within 2 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setModalOpen(false);
                    }}
                    className="py-3 px-8 rounded-xl bg-white text-[#0E1224] font-headline text-lg uppercase tracking-wider hover:bg-[#FF5A1F] hover:text-white transition-colors"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                        FULL NAME
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. David Mwangi"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Kenya Power / Aid Agency"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                        PHONE NUMBER
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="+254 700 000 000"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                        EMAIL ADDRESS
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="operations@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block mb-1.5">
                      ROUTE CORRIDOR & CARGO SPECIFICATION
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. 8x 40ft containers from Mombasa Port to Kigali, or 90 MT transformer lift."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 text-white font-headline text-xl tracking-wider uppercase text-center transition-colors shadow-lg shadow-[#FF5A1F]/30 flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    <span>SUBMIT ALLOCATION REQUEST</span>
                    <Send className="w-4 h-4" />
                  </button>

                  {/* Direct Contact Links */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" />
                      <span>+254 (0) 700 882 119</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
                      <span>operations@expressptl.com</span>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
