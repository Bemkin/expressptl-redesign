"use client";

import React from "react";

const PARTNERS = [
  {
    name: "UN WFP",
    desc: "World Food Programme Humanitarian Partner",
    badge: (
      <svg viewBox="0 0 160 50" fill="currentColor" className="h-9 w-auto text-white">
        <circle cx="25" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M25 12v26M15 25h20M18 18l14 14M32 18L18 32" stroke="currentColor" strokeWidth="1.5" />
        <text x="52" y="24" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill="#FFFFFF">UN WFP</text>
        <text x="52" y="38" fontFamily="sans-serif" fontSize="9" fill="#94A3B8">World Food Programme</text>
      </svg>
    ),
  },
  {
    name: "MAERSK",
    desc: "A.P. Moller - Maersk Intermodal Partner",
    badge: (
      <svg viewBox="0 0 150 50" fill="currentColor" className="h-9 w-auto">
        <polygon points="25,12 28,21 37,21 30,27 33,36 25,30 17,36 20,27 13,21 22,21" fill="#40B4E5" />
        <text x="46" y="32" fontFamily="sans-serif" fontWeight="800" fontSize="18" fill="#FFFFFF" letterSpacing="1">MAERSK</text>
      </svg>
    ),
  },
  {
    name: "MSC",
    desc: "Mediterranean Shipping Company",
    badge: (
      <svg viewBox="0 0 140 50" fill="currentColor" className="h-9 w-auto">
        <text x="20" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="#FFC82C" letterSpacing="2">msc</text>
      </svg>
    ),
  },
  {
    name: "CMA CGM",
    desc: "CMA CGM Group Shipping Partner",
    badge: (
      <svg viewBox="0 0 160 50" fill="currentColor" className="h-9 w-auto">
        <text x="15" y="33" fontFamily="sans-serif" fontWeight="800" fontSize="20" fill="#FFFFFF" letterSpacing="1">CMA CGM</text>
      </svg>
    ),
  },
  {
    name: "DHL",
    desc: "Global Forwarding Regional Carrier",
    badge: (
      <svg viewBox="0 0 140 50" fill="currentColor" className="h-9 w-auto">
        <rect x="10" y="14" width="120" height="24" rx="3" fill="#D40511" />
        <text x="32" y="32" fontFamily="sans-serif" fontWeight="900" fontStyle="italic" fontSize="17" fill="#FFCC00" letterSpacing="2">DHL</text>
      </svg>
    ),
  },
  {
    name: "BOLLORÉ",
    desc: "Bolloré / AGL Multimodal Network",
    badge: (
      <svg viewBox="0 0 150 50" fill="currentColor" className="h-9 w-auto">
        <text x="15" y="32" fontFamily="sans-serif" fontWeight="800" fontSize="18" fill="#FFFFFF" letterSpacing="1.5">BOLLORÉ</text>
      </svg>
    ),
  },
];

export default function PartnersWall() {
  return (
    <section className="py-12 bg-[#080C16] border-y border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="text-center mb-8">
          <p className="text-[11px] font-extrabold tracking-[0.2em] text-slate-400 uppercase">
            TRUSTED BY GLOBAL HUMANITARIAN INSTITUTIONS & PREMIER SHIPPING ALLIANCES
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 rounded-lg bg-white/2 border border-white/5 hover:border-white/20 transition-all duration-300 hover:scale-[1.03] group"
              title={partner.desc}
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                {partner.badge}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
