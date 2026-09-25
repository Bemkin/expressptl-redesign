"use client";

import React from "react";
import { ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05080E] text-slate-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-lg border border-white/10 bg-[#0E1224] flex items-center justify-center">
                <img
                  src="/assets/Gemini_Generated_Image_nmde0znmde0znmde.jpg"
                  alt="Express Logistics Logo"
                  className="w-full h-full object-cover scale-[1.08]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl tracking-wider leading-none text-white">
                  EXPRESS
                </span>
                <span className="font-headline text-[0.75rem] tracking-[0.14em] text-[#FF5A1F] leading-none mt-0.5 uppercase">
                  TRANS-LOGISTICS
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-6">
              Premier East African heavy haulage, multimodal freight forwarding, bonded container depot, and cross-border supply chain solutions connecting the Indian Ocean to Central Africa.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#FF5A1F]" />
              <span>Certified AEO (Authorized Economic Operator)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white block mb-4">
              CAPABILITIES
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Cross-Border Heavy Haulage</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Multimodal Container Transit</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bonded Warehousing (ICD)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Cold Chain & Pharma Reefer</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Project Cargo Engineering</a></li>
            </ul>
          </div>

          {/* Corridors */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white block mb-4">
              TRADE ARTERIES
            </span>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#corridors" className="hover:text-white transition-colors">Northern Corridor (Mombasa - Kampala)</a></li>
              <li><a href="#corridors" className="hover:text-white transition-colors">Central Corridor (Dar - Kigali)</a></li>
              <li><a href="#corridors" className="hover:text-white transition-colors">South Sudan Artery (Nimule - Juba)</a></li>
              <li><a href="#corridors" className="hover:text-white transition-colors">Eastern DRC (Goma / Bukavu)</a></li>
              <li><a href="#corridors" className="hover:text-white transition-colors">LAPSSET Ethiopia Gateway</a></li>
            </ul>
          </div>

          {/* Compliance & Standards */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-white block mb-4">
              CERTIFICATIONS
            </span>
            <ul className="space-y-2.5 text-xs">
              <li>ISO 9001:2015 Quality Management</li>
              <li>KRA Authorized Economic Operator</li>
              <li>FIATA International Freight Forwarder</li>
              <li>KIFWA Licensed Customs Agent</li>
              <li>GDP Pharma Transport Compliance</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Express Transport & Logistics Ltd. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Carriage</a>
            <a href="#" className="hover:text-white transition-colors">Safety Standards</a>

            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#FF5A1F] text-white flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
