"use client";

import React from "react";
import { Warehouse, ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function FacilitySection() {
  return (
    <section className="py-24 bg-[#070B14] relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        <div className="bg-[#0D1322] border border-white/10 rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual media */}
            <div className="lg:col-span-6 relative min-h-[380px] lg:min-h-full">
              <img
                src="/assets/facility.jpg"
                alt="Express PTL Inland Container Depot & Bonded Facility"
                className="w-full h-full object-cover filter brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0D1322] via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 bg-[#070B14]/85 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <span className="font-headline text-3xl text-white block leading-none">50,000 SQ.FT</span>
                <span className="text-[10px] font-extrabold tracking-widest text-[#FF5A1F] uppercase">
                  BONDED & FREE-CIRCULATION STORAGE
                </span>
              </div>
            </div>

            {/* Content col */}
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
                  SECURE STRATEGIC ASSET
                </span>
                <h2 className="font-headline text-4xl sm:text-5xl text-white uppercase leading-[0.92] tracking-tight mb-6">
                  INLAND CONTAINER DEPOT & <br />
                  AEO BONDED TERMINAL.
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  Located strategically along the primary port artery in Mombasa, our terminal provides direct customs pre-clearance, long-term bonded cargo staging, and immediate equipment dispatch.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    "KRA Authorized Economic Operator (AEO)",
                    "45-Ton Kalmar Container Reach Stackers",
                    "Dual-Circuit 24/7 CCTV & Armed Escorts",
                    "Dedicated High-Cube Reefer Plug Points",
                    "Direct SGR Standard Gauge Rail Siding",
                    "Electronic Weightbridge Certified",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs text-slate-200">
                      <div className="w-5 h-5 rounded-full bg-[#FF5A1F]/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[#FF5A1F]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-[#FF5A1F]" />
                  <span className="text-xs text-slate-300">
                    Compliant with WCO SAFE Framework of Standards
                  </span>
                </div>

                <a
                  href="#contact"
                  className="bg-white hover:bg-[#FF5A1F] text-[#0D1322] hover:text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-2"
                >
                  <span>TERMINAL RATES</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
