"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight, CheckCircle2, ShieldCheck, Truck, Ship, Warehouse, Thermometer, HeartHandshake } from "lucide-react";

export interface ServiceDetail {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  isAccent?: boolean;
  icon: React.ReactNode;
  specs: string[];
  metrics: { label: string; value: string }[];
}

const SERVICES: ServiceDetail[] = [
  {
    id: "heavy-haul",
    num: "01",
    title: "INTERNATIONAL FREIGHT & HEAVY HAULAGE",
    subtitle: "Fast, safe and without borders.",
    desc: "Specialized high-tonnage heavy haulage engineered for infrastructure equipment, hydro turbines, transformer substations, and modular industrial plants across East Africa.",
    isAccent: false,
    icon: <Truck className="w-6 h-6" />,
    specs: [
      "Modular hydraulic multi-axles up to 180 MT payload",
      "Route clearance utility teams for overhead powerlines",
      "Comprehensive bridge load surveys and police escorts",
      "Turnkey on-site hydraulic jacking, skidding, and placement",
    ],
    metrics: [
      { label: "Max Single Lift", value: "180 MT" },
      { label: "Corridor Safety", value: "99.98%" },
    ],
  },
  {
    id: "multimodal",
    num: "02",
    title: "MULTIMODAL PORT-TO-HINTERLAND TRANSIT",
    subtitle: "Direct vessel discharge to factory gate.",
    desc: "Direct vessel-to-truck discharge at Mombasa Container Terminal (KPA) and Djibouti with through bill of lading delivery straight to factory consignees across Uganda, Rwanda, and DRC.",
    isAccent: true,
    icon: <Ship className="w-6 h-6" />,
    specs: [
      "FCL & specialized OOG flat rack container handling",
      "Direct interchange agreements with Maersk, MSC, CMA CGM",
      "Pre-arrival customs manifestation to eliminate demurrage",
      "Continuous container seal inspection & GPS security tracking",
    ],
    metrics: [
      { label: "Mombasa Clearance", value: "24-48h" },
      { label: "Container Types", value: "20ft / 40ft / OOG" },
    ],
  },
  {
    id: "bonded-yard",
    num: "03",
    title: "AEO BONDED DEPOT & WAREHOUSING",
    subtitle: "Authorized Economic Operator priority handling.",
    desc: "Over 50,000 sq.ft of secure covered bonded warehousing and 4-acre container staging yards located within direct reach of the Mombasa port gates and Nairobi ICD.",
    isAccent: false,
    icon: <Warehouse className="w-6 h-6" />,
    specs: [
      "Full Authorized Economic Operator (AEO) certified facility",
      "24/7 CCTV surveillance, biometric access, and armed security",
      "Heavy reach-stackers capable of handling 45-ton laden containers",
      "Customs de-consolidation, palletizing, and long-term bonded staging",
    ],
    metrics: [
      { label: "Covered Storage", value: "50,000 sq.ft" },
      { label: "Yard Capacity", value: "45-Ton Reach" },
    ],
  },
  {
    id: "cold-chain",
    num: "04",
    title: "TEMPERATURE-CONTROLLED COLD CHAIN",
    subtitle: "Certified pharmaceutical & food climate transit.",
    desc: "Certified refrigerated trailers offering rigorous climate control from -25°C to +25°C for humanitarian pharmaceutical shipments, vaccines, fresh agricultural produce, and confectionery.",
    isAccent: true,
    icon: <Thermometer className="w-6 h-6" />,
    specs: [
      "Thermo King active digital temperature loggers",
      "Dual independent diesel generator backup systems",
      "GDP compliant sanitization protocols and thermal blankets",
      "Continuous live telemetry with automatic temperature breach alarms",
    ],
    metrics: [
      { label: "Thermal Range", value: "-25°C to +25°C" },
      { label: "Compliance", value: "WHO GDP Audited" },
    ],
  },
  {
    id: "humanitarian",
    num: "05",
    title: "HUMANITARIAN AID & EMERGENCY RELIEF",
    subtitle: "UN WFP audited critical lifeline carrier.",
    desc: "Dedicated rapid-response convoys deploying emergency food rations, medical relief, and shelter supplies into remote and hard-to-reach conflict or disaster-impacted zones.",
    isAccent: false,
    icon: <HeartHandshake className="w-6 h-6" />,
    specs: [
      "Over 158,000 MT uplifted across Horn of Africa operations",
      "Dedicated mobile mechanical teams accompanying every convoy",
      "Priority green-corridor customs facilitation across land borders",
      "Satellite phone dispatch communications with 24/7 incident tracking",
    ],
    metrics: [
      { label: "Relief Uplifted", value: "158,636+ MT" },
      { label: "Partner Agency", value: "UN WFP Certified" },
    ],
  },
];

interface CardProps {
  service: ServiceDetail;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onSelect: (srv: ServiceDetail) => void;
}

function PinnedServiceCard({ service, index, total, progress, onSelect }: CardProps) {
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const step = 1 / total;
  
  // Exact MVP Stacking Math:
  // Card enters: slides up from translateY(100%) to translateY(0%)
  // Card active: stays at center
  // Card exits: scales to 0.8 (Br = 0.8 in MVP) and fades slightly as the next card covers it
  const enterStart = (index - 0.9) * step;
  const enterEnd = index * step;
  const exitStart = (index + 0.1) * step;
  const exitEnd = (index + 1) * step;

  // Compute transform values
  const y = useTransform(
    progress,
    isFirst
      ? [0, exitStart, exitEnd]
      : [enterStart, enterEnd, exitStart, exitEnd],
    isFirst
      ? ["0%", "0%", "-5%"]
      : ["100%", "0%", "0%", "-5%"]
  );

  const scale = useTransform(
    progress,
    isLast
      ? isFirst ? [0, 1] : [enterStart, enterEnd]
      : [enterEnd, exitStart, exitEnd],
    isLast
      ? [1, 1]
      : [1, 1, 0.82] // Reverse-Engineered Br = 0.8
  );

  const opacity = useTransform(
    progress,
    isLast
      ? [enterStart, enterEnd]
      : [enterEnd, exitStart, exitEnd],
    isLast
      ? [1, 1]
      : [1, 1, 0.25]
  );

  const isDark = service.isAccent;

  return (
    <motion.div
      style={{
        y: isFirst ? 0 : y,
        scale: isLast ? 1 : scale,
        opacity: isLast ? 1 : opacity,
        zIndex: index + 1,
      }}
      className={`absolute inset-0 rounded-[28px] sm:rounded-[36px] p-10 sm:p-14 lg:p-20 flex flex-col justify-between shadow-[0_25px_80px_rgba(0,0,0,0.5)] transition-colors will-change-transform ${
        isDark
          ? "bg-[#1B1E3D] text-[#F4F4F7]"
          : "bg-[#F4F4F7] text-[#1B1E3D]"
      }`}
    >
      {/* Spacer to push content to middle */}
      <div />

      {/* Center content: Monumental Number + Headline & Subtitle */}
      <div className="flex flex-col xl:flex-row xl:items-center gap-6 xl:gap-14 my-auto">
        <div
          className={`font-headline text-8xl sm:text-[11rem] lg:text-[14rem] xl:text-[17rem] 2xl:text-[19rem] leading-none tracking-[-0.03em] select-none shrink-0 ${
            isDark ? "text-white" : "text-[#1B1E3D]"
          }`}
        >
          {service.num}
        </div>

        <div className="flex-1 max-w-xl">
          <h3
            className={`font-headline text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase leading-[0.88] tracking-tight mb-4 ${
              isDark ? "text-white" : "text-[#1B1E3D]"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-base sm:text-lg lg:text-xl font-sans font-medium leading-snug max-w-md ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Center: MVP Signature Square + Button with 180° hover rotate */}
      <div className="flex items-center justify-center pt-4">
        <button
          onClick={() => onSelect(service)}
          className={`group/btn w-18 h-18 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl ${
            isDark
              ? "bg-white text-[#1B1E3D] hover:bg-[#FF5A1F] hover:text-white"
              : "bg-[#1B1E3D] text-white hover:bg-[#FF5A1F]"
          }`}
          aria-label={`View technical specifications for ${service.title}`}
        >
          <Plus className="w-7 h-7 stroke-[2.5] transition-transform duration-400 group-hover/btn:rotate-180" />
        </button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  // Pinning Scrub using scroll progress through 350vh total travel distance
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["6%", "100%"]);

  return (
    <section id="services" className="relative w-full bg-[#070B14]">
      {/* ========================================================
          DESKTOP: REVERSE-ENGINEERED MVP LOGISTICS PINNED STACK
          Monumental Full-Viewport Scale matching mvplogistics.eu
          ======================================================== */}
      <div ref={containerRef} className="hidden lg:block relative h-[380vh]">
        {/* Sticky 100vh Viewport */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center px-3 sm:px-5 lg:px-6 py-4 sm:py-6 overflow-hidden">
          <div className="max-w-[1880px] w-full h-[90vh] min-h-[820px] max-h-[960px] flex gap-2.5 sm:gap-3 items-stretch">
            
            {/* 1. LEFT CARD: Pinned Warehouse Visual with Massive "OUR SERVICES" & Minimalist Progress Rail */}
            <div className="relative w-1/2 rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col justify-between p-10 sm:p-14 lg:p-20 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              {/* Background Truck Image */}
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-[0.80] contrast-[1.08] transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/assets/services_trucks.jpg')` }}
              />
              {/* Subtle Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 pointer-events-none" />

              {/* Top: Clean space matching inspo */}
              <div />

              {/* Center: Monumental "OUR SERVICES" Heading */}
              <div className="relative z-10 flex flex-col select-none my-auto">
                <span className="font-headline text-8xl sm:text-[10rem] lg:text-[12rem] xl:text-[14.5rem] 2xl:text-[16.5rem] text-white leading-[0.78] tracking-[-0.03em] uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
                  OUR
                </span>
                <span className="font-headline text-8xl sm:text-[10rem] lg:text-[12rem] xl:text-[14.5rem] 2xl:text-[16.5rem] text-white leading-[0.78] tracking-[-0.03em] uppercase drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]">
                  SERVICES
                </span>
              </div>

              {/* Bottom: Minimalist progress rail matching exact inspo */}
              <div className="relative z-10 w-full pb-2">
                <div className="w-full h-[2px] bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full origin-left"
                    style={{ width: progressBarWidth }}
                  />
                </div>
              </div>
            </div>

            {/* 2. RIGHT CONTAINER: Monumental Stack of Overlapping Service Cards */}
            <div className="relative w-1/2 rounded-[28px] sm:rounded-[36px] overflow-hidden">
              {SERVICES.map((srv, idx) => (
                <PinnedServiceCard
                  key={srv.id}
                  service={srv}
                  index={idx}
                  total={SERVICES.length}
                  progress={scrollYProgress}
                  onSelect={(s) => setSelectedService(s)}
                />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================
          MOBILE / TABLET (< 1024px): RESPONSIVE CAROUSEL & CARDS
          ======================================================== */}
      <div className="block lg:hidden px-5 py-16">
        {/* Mobile Header Banner */}
        <div className="relative rounded-2xl overflow-hidden p-8 mb-8 border border-white/10 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center filter brightness-[0.75]"
            style={{ backgroundImage: `url('/assets/services_trucks.jpg')` }}
          />
          <div className="absolute inset-0 bg-[#070B14]/75 backdrop-blur-[2px]" />
          <div className="relative z-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-2">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="font-headline text-5xl text-white uppercase leading-[0.88] tracking-tight">
              OUR <br />
              SERVICES
            </h2>
          </div>
        </div>

        {/* Mobile Cards Stack */}
        <div className="flex flex-col gap-5">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl ${
                srv.isAccent
                  ? "bg-[#1B1E3D] text-[#F4F4F7] border border-white/10"
                  : "bg-[#F4F4F7] text-[#1B1E3D]"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-headline text-5xl leading-none ${
                    srv.isAccent ? "text-[#FF5A1F]" : "text-[#1B1E3D]"
                  }`}
                >
                  {srv.num}
                </span>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    srv.isAccent ? "bg-white/10 text-[#FF5A1F]" : "bg-[#1B1E3D]/10 text-[#1B1E3D]"
                  }`}
                >
                  {srv.icon}
                </div>
              </div>

              <h3
                className={`font-headline text-2xl uppercase leading-tight mb-2 ${
                  srv.isAccent ? "text-white" : "text-[#1B1E3D]"
                }`}
              >
                {srv.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-medium mb-6 ${
                  srv.isAccent ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {srv.subtitle}
              </p>

              <button
                onClick={() => setSelectedService(srv)}
                className={`w-full py-3 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors ${
                  srv.isAccent
                    ? "bg-[#FF5A1F] text-white hover:bg-white hover:text-[#1B1E3D]"
                    : "bg-[#1B1E3D] text-white hover:bg-[#FF5A1F]"
                }`}
              >
                <span>SPECIFICATIONS & METRICS</span>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          DETAIL MODAL: EXPANDS WHEN USER CLICKS THE "+" BUTTON
          ======================================================== */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[#0E1224] border border-white/20 rounded-[28px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] z-10 text-white overflow-hidden"
            >
              {/* Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A1F]/15 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#FF5A1F] font-headline text-3xl">
                  {selectedService.num}
                </span>
                <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                  DIVISION SPECIFICATIONS
                </span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl text-white uppercase leading-tight mb-4">
                {selectedService.title}
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-sans">
                {selectedService.desc}
              </p>

              {/* Key Metrics Row */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {selectedService.metrics.map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-1">
                      {m.label}
                    </span>
                    <span className="font-headline text-2xl text-[#FF5A1F]">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical Capabilities */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block">
                  DEPLOYED OPERATIONAL PROTOCOLS
                </span>
                {selectedService.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="flex items-center gap-4">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className="flex-1 py-4 rounded-xl bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 text-white font-headline text-xl tracking-wider uppercase text-center transition-colors shadow-lg shadow-[#FF5A1F]/25 flex items-center justify-center gap-2"
                >
                  <span>REQUEST DIVISION DISPATCH</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
