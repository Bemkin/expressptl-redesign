"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react";

export interface ModalServiceData {
  id: string;
  num: string;
  title: string;
  category: string;
  description: string;
  routes?: string[][];
  subservices: {
    heading: string;
    points: string[];
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  keyBenefits?: string[];
}

interface ServiceDetailModalProps {
  service: ModalServiceData | null;
  onClose: () => void;
  onOrderClick?: (serviceTitle: string) => void;
}

export default function ServiceDetailModal({
  service,
  onClose,
  onOrderClick,
}: ServiceDetailModalProps) {
  // Close on Escape key press and manage Lenis scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (service) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#070B14]/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            data-lenis-prevent="true"
            className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#131B2E] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.8)] text-white p-6 sm:p-10 lg:p-14"
          >
            {/* Top Close Button (Matching MVP .is-close-button) */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 w-11 h-11 rounded-lg bg-white/10 hover:bg-[#FF5A1F] text-white flex items-center justify-center transition-all duration-300 group"
            >
              <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" />
            </button>

            {/* Header Badge & Number */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-headline text-3xl sm:text-4xl text-[#FF5A1F] tracking-wider">
                {service.num}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/50 font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {service.category}
              </span>
            </div>

            {/* Modal Title */}
            <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-tight text-white mb-6">
              {service.title}
            </h3>

            {/* Main Lead Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-8">
              {service.description}
            </p>

            {/* Operational Metrics Cards */}
            {service.metrics && service.metrics.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                {service.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-sans">
                      {m.label}
                    </span>
                    <span className="font-headline text-lg sm:text-xl text-white mt-1">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Route / Corridors Section (Matching MVP .modal-services__city arrows) */}
            {service.routes && service.routes.length > 0 && (
              <div className="mb-8">
                <h4 className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3 flex items-center gap-2">
                  <span>ACTIVE CORRIDORS & TRADE TRANSIT ARTERIES</span>
                </h4>
                <div className="space-y-2.5">
                  {service.routes.map((route, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-black/30 border border-white/5 text-xs sm:text-sm font-sans"
                    >
                      {route.map((city, cIdx) => (
                        <React.Fragment key={cIdx}>
                          <span className="font-semibold text-white uppercase tracking-wider">
                            {city}
                          </span>
                          {cIdx < route.length - 1 && (
                            <ArrowRight className="w-3.5 h-3.5 text-[#FF5A1F]" />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Sub-Services & Specifications Sections */}
            {service.subservices.map((sub, sIdx) => (
              <div key={sIdx} className="mb-8 last:mb-0">
                <h4 className="font-headline text-xl sm:text-2xl uppercase tracking-wider text-white mb-4 pb-2 border-b border-white/10">
                  {sub.heading}
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sub.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Bottom Actions */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-400 font-sans">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Certified Operational Compliance & Licensed Carrier</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOrderClick) onOrderClick(service.title);
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#FF5A1F] hover:bg-[#ff6d38] text-white font-headline text-base tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-[#FF5A1F]/20"
                >
                  <span>Request Route / Service Quote</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
