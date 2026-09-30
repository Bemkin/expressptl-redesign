"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock, Building, Warehouse, ExternalLink, Copy, Check } from "lucide-react";

interface HubLocation {
  id: "headquarters" | "depot";
  tag: string;
  name: string;
  subname: string;
  building: string;
  floor: string;
  address: string;
  city: string;
  gps: string;
  hours: string;
  specialty: string;
  embedUrl: string;
  mapsUrl: string;
  icon: React.ReactNode;
}

const HUBS: HubLocation[] = [
  {
    id: "headquarters",
    tag: "EXECUTIVE HEADQUARTERS",
    name: "Wollo Sefer Corporate Office",
    subname: "Executive Directorate & Commercial Dispatch",
    building: "Ambasel Building",
    floor: "6th Floor (607–610) & 7th Floor (701–702)",
    address: "Ethio-China Friendship Ring Road, Wollo Sefer",
    city: "Addis Ababa, Ethiopia",
    gps: '8°59\'08.7"N 38°45\'56.2"E',
    hours: "Mon – Fri: 08:30 – 17:30 EAT | Sat: 08:30 – 12:30 EAT",
    specialty: "Cross-Border Customs Clearing, Corridor Contracts, Project Tenders & Multilateral Accounts",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.8484673626003!2d38.76560083991744!3d8.985747200383535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8444d1af7dbb%3A0x6c196562a07654ec!2zQW1iYXNzZWwgQnVpbGRpbmcgfCB3b2xsbyBzZWZlciB8IOGKoOGIneGJo-GIsOGIjSDhiIXhipXhjYMgfCDhi4jhiI7hiKDhjYjhiK0!5e0!3m2!1sen!2set!4v1786603200377!5m2!1sen!2set",
    mapsUrl: "https://maps.google.com/?q=Ambassel+Building+Wollo+Sefer+Addis+Ababa",
    icon: <Building className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    id: "depot",
    tag: "HEAVY FLEET TERMINAL",
    name: "Bole Bulbula Logistics Hub",
    subname: "14,000 m² Staging Yard & Engineering Yard",
    building: "Express PTL Heavy Transport Complex",
    floor: "Ground Operations & Workshop Yard",
    address: "Bole Bulbula Industrial Access Corridor",
    city: "Addis Ababa, Ethiopia",
    gps: '8°56\'53.5"N 38°47\'20.8"E',
    hours: "24/7 Gate Security, Continuous Loading & GPS Ops Room",
    specialty: "76 Prime Movers Marshalling, 2,916 MT Synchronous Lift Rigging, Bonded Storage & Mobile Workshop",
    embedUrl:
      "https://maps.google.com/maps?q=Bole+Bulbula+Addis+Ababa&t=&z=14&ie=UTF8&iwloc=&output=embed",
    mapsUrl: "https://maps.google.com/?q=Bole+Bulbula+Addis+Ababa",
    icon: <Warehouse className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function ContactMapSection() {
  const [activeHubId, setActiveHubId] = useState<"headquarters" | "depot">("headquarters");
  const [copied, setCopied] = useState(false);

  const activeHub = HUBS.find((h) => h.id === activeHubId) || HUBS[0];

  const handleCopyAddress = () => {
    const fullText = `${activeHub.building}, ${activeHub.floor}, ${activeHub.address}, ${activeHub.city} (GPS: ${activeHub.gps})`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-[#070B14] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#FF5A1F]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================
            HEADER ROW: SECTION TITLE & DUAL-HUB TOGGLE TABS
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                PHYSICAL HUBS &amp; DISPATCH TERMINALS
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.92]">
              VISIT OUR HEADQUARTERS &amp; <br className="hidden sm:inline" />
              HEAVY FLEET DEPOT.
            </h2>
          </div>

          {/* Segmented Location Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-[#0E1528] border border-white/15 w-full sm:w-auto">
            <button
              onClick={() => setActiveHubId("headquarters")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-headline text-sm sm:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeHubId === "headquarters"
                  ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/30 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Building className="w-4 h-4" />
              <span>AMBASEL BUILDING (HQ)</span>
            </button>

            <button
              onClick={() => setActiveHubId("depot")}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-headline text-sm sm:text-base uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeHubId === "depot"
                  ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/30 font-bold"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Warehouse className="w-4 h-4" />
              <span>BOLE BULBULA (14,000 M²)</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            MAIN MAP CARD CONTAINER (Dark-Mode Stylized Cartography)
           ======================================================== */}
        <div className="relative rounded-3xl bg-[#0D1322] border border-white/10 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.7)] grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: HUB SPECIFICATIONS & DIRECTIONS (lg:col-span-5) */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-[#0A0F1D]/80 backdrop-blur-md z-10">
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeHub.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FF5A1F] font-headline">
                      {activeHub.tag}
                    </span>
                  </div>

                  <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight mb-2">
                    {activeHub.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans mb-8">
                    {activeHub.subname}
                  </p>

                  {/* Location Details Grid */}
                  <div className="space-y-5 text-sm font-sans mb-8">
                    {/* Facility & Floor */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A1F]">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">
                          {activeHub.building} • {activeHub.floor}
                        </span>
                        <span className="text-slate-400 text-xs block mt-0.5">
                          {activeHub.address}, {activeHub.city}
                        </span>
                      </div>
                    </div>

                    {/* Operational Hours */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A1F]">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Operational Hours</span>
                        <span className="text-slate-400 text-xs block mt-0.5">
                          {activeHub.hours}
                        </span>
                      </div>
                    </div>

                    {/* Operational Capability */}
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#FF5A1F]">
                        <Navigation className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white block">Facility Focus</span>
                        <span className="text-slate-400 text-xs block mt-0.5 leading-relaxed">
                          {activeHub.specialty}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Actions: Google Maps Link & Copy GPS */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>GPS: {activeHub.gps}</span>
                <span className="text-[#FF5A1F] uppercase font-headline tracking-wider">Verified Location</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={activeHub.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-6 rounded-xl bg-white text-[#1B1E3D] hover:bg-[#FF5A1F] hover:text-white font-headline text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer font-bold shadow-md"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="py-3.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 transition-colors cursor-pointer text-xs uppercase font-headline tracking-wider shrink-0"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 hidden sm:inline">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: BESPOKE DARK-STYLED INTERACTIVE GOOGLE MAP (lg:col-span-7) */}
          <div className="lg:col-span-7 relative min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] bg-[#070B14] overflow-hidden">
            {/* The Stylized Dark Map Iframe */}
            <iframe
              key={activeHub.id}
              src={activeHub.embedUrl}
              title={`Map of Express PTL ${activeHub.name}`}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[420px] sm:min-h-[520px] lg:min-h-[640px] border-0 select-none"
              style={{
                filter: "invert(90%) hue-rotate(180deg) contrast(1.15) brightness(0.85) grayscale(25%)",
              }}
            />

            {/* Subtle Gradient Overlays for Seamless Bleed into Dark Card Borders */}
            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-3xl" />
            <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#0D1322]/80 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0D1322]/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#0D1322]/80 to-transparent pointer-events-none hidden lg:block" />

            {/* Live GPS Status Pill */}
            <div className="absolute top-4 right-4 bg-[#0A0F1D]/90 backdrop-blur-md border border-white/15 px-4 py-2 rounded-xl text-xs font-mono text-slate-300 flex items-center gap-2 shadow-lg pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>LIVE PINPOINT: {activeHub.city}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
