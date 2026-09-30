"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, MotionValue, AnimatePresence } from "framer-motion";
import { Plus, X, ArrowUpRight, CheckCircle2, Truck, Ship, Warehouse, HardHat, Factory } from "lucide-react";

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
  subdivisions?: {
    heading: string;
    items: string[];
  }[];
}

const SERVICES: ServiceDetail[] = [
  {
    id: "construction",
    num: "01",
    title: "CONSTRUCTION",
    subtitle: "Main contractor, subcontractor & modern plant rental fleet from globally recognized brands.",
    desc: "Our company is actively engaged in the construction sector, working both as a main contractor and subcontractor for project owners including government institutions, private companies, NGOs, and other organizations.\n\nWe also provide construction machinery rental services, offering high-quality equipment from globally recognized brands. With the growing demand in the construction industry, our company provides a reliable fleet of modern construction equipment, enabling clients to access the machinery they need through a convenient one-stop solution.",
    isAccent: false,
    icon: <HardHat className="w-6 h-6" />,
    specs: [
      "Construction: Main contractor and subcontractor for government institutions, private companies & NGOs",
      "Services: Road construction, building towers, residential housing, apartments & infrastructure",
      "Machinery Rental: High-quality modern equipment fleet from globally recognized brands",
      "One-Stop Solution: Convenient machinery rental enabling rapid turnkey project execution",
    ],
    metrics: [
      { label: "Contracting Role", value: "Main & Subcontractor" },
      { label: "Machinery Fleet", value: "Global Brand Fleet" },
    ],
    subdivisions: [
      {
        heading: "CONSTRUCTION SERVICES INCLUDE",
        items: [
          "Road construction",
          "Building towers",
          "Residential housing projects",
          "Apartments",
          "Other infrastructure projects based on client requirements",
        ],
      },
      {
        heading: "MACHINES AVAILABLE FOR RENTAL",
        items: [
          "Rollers",
          "Graders",
          "Loaders",
          "Bulldozers",
          "Excavators",
          "Dump trucks",
          "Crushers",
        ],
      },
    ],
  },
  {
    id: "ground-transport",
    num: "02",
    title: "GROUND TRANSPORT",
    subtitle: "76 active new trucks · 40 MT each · 2,916 MT total synchronous capacity.",
    desc: "Our company provides reliable, safe, and efficient transport services designed to meet the needs of businesses and individuals. We specialize in the secure movement of goods and materials with a strong focus on punctuality, safety, and customer satisfaction. Regardless of industry, commodity, or market, Express Transport and Logistics provides solutions that support both small and large businesses.",
    isAccent: true,
    icon: <Truck className="w-6 h-6" />,
    specs: [
      "Currently 76 active trucks (all are new) with 40 MT capacity each (2,916 MT in total)",
      "Regular cargo transport across major trade routes & inland transport services",
      "Transports bulk cargo, containerized cargo, commercial shipments & humanitarian aid",
      "Specialized focus on humanitarian relief (safe cargo transport excluding contraband)",
    ],
    metrics: [
      { label: "Fleet Capacity", value: "2,916 MT" },
      { label: "Active Fleet (All New)", value: "76 Trucks" },
    ],
    subdivisions: [
      {
        heading: "CORE TRANSPORT SOLUTIONS & CARGO TYPES",
        items: [
          "Regular cargo transport across major trade routes",
          "Inland transport services nationwide",
          "End-to-end logistics solutions for all business scales",
          "Bulk cargo transport",
          "Containerized cargo transport",
          "Commercial shipments & industrial materials (excluding contraband)",
        ],
      },
      {
        heading: "WHY WE GIVE SPECIAL FOCUS TO HUMANITARIAN AID CARGO",
        items: [
          "1. Managed by international, highly professional organizations, improving our professionalism & operational standards.",
          "2. Working with global organizations develops our management capacity and international operational experience.",
          "3. Delivering aid cargo provides great satisfaction, as it directly supports people in need.",
          "Showcase uplifting capacity dedicated for emergency aid cargo.",
        ],
      },
    ],
  },
  {
    id: "import-export",
    num: "03",
    title: "IMPORT AND EXPORT",
    subtitle: "Supplying international industrial goods & exporting premium Ethiopian agricultural crops.",
    desc: "We import a wide range of products from international markets including China, Korea, UAE, Europe, and other countries to support domestic infrastructure and industry. Simultaneously, our company exports a variety of agricultural and mining products to international markets including China, Europe, the Middle East, the USA, Canada, and other regions worldwide.",
    isAccent: false,
    icon: <Ship className="w-6 h-6" />,
    specs: [
      "Imports from China, Korea, UAE, Europe: trucks, machinery, tires, batteries, steel & parts",
      "Exports to China, Europe, Middle East, USA, Canada: sesame, mung beans, soybeans, pulses",
      "Specialized in Humera and Wollega sesame seeds, red kidney beans, white beans, and chickpeas",
      "Dedicated to sustainable extraction, development, and export of natural mineral resources",
    ],
    metrics: [
      { label: "Export Standard", value: "ECX Grade-1 Certified" },
      { label: "Global Reach", value: "Tri-Continent Trade" },
    ],
    subdivisions: [
      {
        heading: "IMPORT — MAIN IMPORTED PRODUCTS (China, Korea, UAE, Europe)",
        items: [
          "Light trucks",
          "Heavy trucks",
          "Construction machinery",
          "Tires",
          "Batteries",
          "Factory raw materials",
          "Spare parts",
          "All types of steel",
          "Other required industrial products",
        ],
      },
      {
        heading: "EXPORT — MAJOR EXPORT PRODUCTS (China, Europe, M. East, USA, Canada)",
        items: [
          "Sesame seeds (Humera and Wollega types)",
          "Green mung beans",
          "Soybeans",
          "Red kidney beans",
          "Rounded white beans",
          "Chickpeas",
          "Other agricultural products",
          "Natural mineral ores & extracted minerals",
        ],
      },
    ],
  },
  {
    id: "logistic-service",
    num: "04",
    title: "LOGISTIC SERVICE",
    subtitle: "Customs clearance · Cargo forwarding · Warehouse rental · Shipping agency.",
    desc: "Understanding that transport and logistics go hand in hand, we also provide logistics services designed to meet your business needs. We take pride in catering to a broad range of clientele throughout the country with our warehousing services—comprehensive, reliable, and flexible. Our experienced experts design a supply chain flowchart tailored to meet your business and logistic needs, focused on increasing efficiency and cutting down costs.",
    isAccent: true,
    icon: <Warehouse className="w-6 h-6" />,
    specs: [
      "Customs clearance (Galafi, Modjo Dry Port, and Kality terminal)",
      "Dedicated cargo forwarding and automated shipping documentation",
      "Comprehensive warehouse rental and nationwide distribution centers",
      "Shipping agency services (currently under development)",
    ],
    metrics: [
      { label: "Clearance Hubs", value: "Galafi / Modjo / Kality" },
      { label: "Network Scope", value: "Nationwide Warehousing" },
    ],
    subdivisions: [
      {
        heading: "CORE LOGISTICS SERVICES",
        items: [
          "Customs clearance at major ports & border posts",
          "Cargo forwarding across global and inland routes",
          "Warehouse rental with flexible storage terms",
          "Shipping agency services (currently under development)",
        ],
      },
      {
        heading: "TAILORED SUPPLY CHAIN & NATIONWIDE WAREHOUSING",
        items: [
          "Tailored supply chain flowcharts designed by experienced experts",
          "Focused on increasing operational efficiency & cutting down costs",
          "Vast network of warehouses & distribution centers across the country",
          "Record response times catering to diverse enterprise clientele",
          "Long-term cost savings giving your business a competitive edge",
        ],
      },
    ],
  },
  {
    id: "manufacturing",
    num: "05",
    title: "MANUFACTURING",
    subtitle: "14,000 m² food processing factory in Addis Ababa, around Bole Bulbula.",
    desc: "As part of our long-term business expansion, we are currently constructing a food processing factory in Addis Ababa, around Bole Bulbula. The factory covers an area of 14,000 square meters and will focus on food production and processing, contributing to both local supply and export opportunities.",
    isAccent: false,
    icon: <Factory className="w-6 h-6" />,
    specs: [
      "Facility Scale: 14,000 square meter food processing factory under active construction",
      "Strategic Location: Situated in Addis Ababa, around Bole Bulbula with direct arterial access",
      "Operational Focus: Modern food production, industrial processing, and hygienic packaging",
      "Market Impact: Contributing significantly to both local supply and international export opportunities",
    ],
    metrics: [
      { label: "Factory Area", value: "14,000 m²" },
      { label: "Location", value: "Bole Bulbula, Addis" },
    ],
    subdivisions: [
      {
        heading: "FACILITY SPECIFICATIONS & LOCATION",
        items: [
          "14,000 square meters factory footprint",
          "Located in Addis Ababa around Bole Bulbula",
          "Advanced food production & processing technology",
          "Hygienic storage and quality-controlled packaging",
        ],
      },
      {
        heading: "BUSINESS EXPANSION & VALUE CREATION",
        items: [
          "Core component of our long-term business expansion",
          "Contributing directly to domestic and local food supply",
          "Unlocking high-value international export opportunities",
          "Industrial job creation and agricultural value addition",
        ],
      },
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

  // Prevent background scroll and pause Lenis smooth scroll while modal is active
  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;

    if (selectedService) {
      document.body.style.overflow = "hidden";
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    }

    return () => {
      document.body.style.overflow = "";
      if (lenis) lenis.start();
    };
  }, [selectedService]);

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
          <div className="max-w-[1880px] w-full h-[90vh] min-h-205 max-h-240 flex gap-2.5 sm:gap-3 items-stretch">
            
            {/* 1. LEFT CARD: Pinned Warehouse Visual with Massive "OUR SERVICES" & Minimalist Progress Rail */}
            <div className="relative w-1/2 rounded-[28px] sm:rounded-[36px] overflow-hidden flex flex-col justify-between p-10 sm:p-14 lg:p-20 shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
              {/* Background Truck Image */}
              <div
                className="absolute inset-0 bg-cover bg-center filter brightness-[0.80] contrast-[1.08] transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('/assets/services_trucks.jpg')` }}
              />
              {/* Subtle Dark Vignette Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/20 to-black/80 pointer-events-none" />

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
                <div className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden">
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
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none"
            data-lenis-prevent="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
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
              data-lenis-prevent="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto overscroll-contain no-scrollbar scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-[#0E1224] border border-white/20 rounded-[28px] p-6 sm:p-10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] z-10 text-white"
            >
              {/* Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A1F]/15 blur-3xl pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="sticky top-0 float-right -mt-2 -mr-2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors backdrop-blur-md"
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

              <div className="space-y-3 mb-6">
                {selectedService.desc.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx} className="text-sm text-slate-300 leading-relaxed font-sans">
                    {para}
                  </p>
                ))}
              </div>

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

              {/* Structured Production Subdivisions Breakdown */}
              {selectedService.subdivisions && selectedService.subdivisions.length > 0 && (
                <div className="space-y-4 mb-6">
                  {selectedService.subdivisions.map((sub, idx) => (
                    <div key={idx} className="bg-white/4 border border-white/10 rounded-2xl p-4 sm:p-5">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#FF5A1F] uppercase font-headline block mb-2.5">
                        {sub.heading}
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-[13px] text-slate-300 font-sans">
                        {sub.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Technical Capabilities */}
              <div className="space-y-3 mb-8">
                <span className="text-xs font-bold tracking-wider text-slate-400 uppercase block font-headline">
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
