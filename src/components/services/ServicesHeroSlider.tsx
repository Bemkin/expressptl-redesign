"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Plus, ArrowRight, ChevronRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import ServiceDetailModal, { ModalServiceData } from "./ServiceDetailModal";

export const SERVICES_DATA: ModalServiceData[] = [
  {
    id: "ground-transport",
    num: "01",
    title: "Ground Transport & Heavy Haulage",
    category: "Heavy Fleet Operations",
    description:
      "Express Transport & Logistics is Ethiopia's premier heavy haulage enterprise, specializing in safe, punctual, and high-capacity freight transit across all primary national trade arteries and sea-to-inland transit corridors.",
    routes: [
      ["Djibouti Port", "Galafi Customs Border", "Semera Terminal", "Modjo Dry Port", "Addis Ababa Kality"],
      ["Berbera Port", "Togochale Border", "Jijiga Hub", "Dire Dawa Dry Port", "Addis Ababa"],
      ["Moyale Border (Kenya)", "Hawassa Industrial Belt", "Modjo Dry Port"],
    ],
    metrics: [
      { label: "Active Fleet", value: "76 Prime Movers" },
      { label: "Synchronous Lift", value: "2,916 MT" },
      { label: "Single Payload", value: "40 MT Per Unit" },
      { label: "Telemetry", value: "24/7 Live GPS" },
    ],
    subservices: [
      {
        heading: "Core Transport Solutions & Cargo Types",
        points: [
          "Full Truckload (FTL) and Less-Than-Truckload (LTL) scheduled regional transit",
          "Dry bulk cargo and international containerized shipping lines haulage",
          "Project cargo, heavy engineering plant, and oversized industrial freight",
          "Dual-driver rotations and active GPS anti-tamper tracking on all convoys",
        ],
      },
      {
        heading: "Safety & Compliance Standards",
        points: [
          "Zero-compromise non-contraband freight policy across all routes",
          "In-house certified mobile mechanical escorts on all major corridors",
          "Comprehensive transit insurance covering major international haulage risks",
          "Fully licensed under Ethiopian Ministry of Transport and regional authorities",
        ],
      },
    ],
  },
  {
    id: "construction",
    num: "02",
    title: "Construction & Machinery Rental",
    category: "Civil Works & Equipment Rental",
    description:
      "Actively engaged in the construction sector as both a reliable main contractor and specialized subcontractor for government ministries, private developers, and NGOs. Backed by an extensive modern heavy plant rental fleet.",
    metrics: [
      { label: "Contracting Roles", value: "Main & Subcontractor" },
      { label: "Plant Fleet", value: "Tier-1 Global Brands" },
      { label: "Operators", value: "100% Certified Crew" },
      { label: "Maintenance", value: "Rapid On-Site Support" },
    ],
    subservices: [
      {
        heading: "Civil Contracting Capabilities",
        points: [
          "Heavy highway and asphalt arterial road construction",
          "High-rise commercial towers and industrial steel structures",
          "Residential housing estates, gated communities, and apartment complexes",
          "Earthworks, site leveling, and industrial drainage systems",
        ],
      },
      {
        heading: "Modern Machinery Available for Rental",
        points: [
          "Hydraulic Excavators (Track & Wheel configurations)",
          "Motor Graders for precision leveling and roadbed grading",
          "Wheel Loaders and heavy-duty front-end shovel units",
          "Track Bulldozers (D6, D7, D8 equivalent capacity)",
          "Vibratory Single and Double Drum Soil Compaction Rollers",
          "Heavy-duty multi-axle Dump Trucks for aggregate haulage",
          "Mobile high-output stone crushers and screening plants",
        ],
      },
    ],
  },
  {
    id: "import-export",
    num: "03",
    title: "Import & Export Commodities",
    category: "International Trade",
    description:
      "Connecting East Africa with global economic hubs including China, South Korea, UAE, Europe, and North America. Importing critical industrial capital equipment and exporting premium Ethiopian agricultural products.",
    routes: [
      ["China / Korea / UAE", "Djibouti Free Zone", "Ethiopian Assembly Hubs"],
      ["Humera / Gondar Belt", "Central Export Silos", "Djibouti Port", "Global Buyers"],
      ["Wollega Belt", "ECX Processing Depots", "Middle East / North America"],
    ],
    metrics: [
      { label: "Export Grading", value: "ECX Grade-1 Quality" },
      { label: "Global Reach", value: "Tri-Continent Trade" },
      { label: "Import Origin", value: "Asia, UAE, Europe" },
      { label: "Clearance", value: "Turnkey Port Transit" },
    ],
    subservices: [
      {
        heading: "Major Industrial Imports",
        points: [
          "Commercial light and heavy-duty transport trucks",
          "Construction machinery, excavators, and road-building equipment",
          "Heavy industrial tires, batteries, and genuine automotive spare parts",
          "Structural steel reinforcement bars, beams, and factory raw materials",
        ],
      },
      {
        heading: "Major Agricultural Exports",
        points: [
          "Sesame Seeds: Certified Humera and Wollega premium white varieties",
          "Green Mung Beans: High-purity sorting for Asian food markets",
          "Soybeans: High-protein grade for industrial processing and oil production",
          "Pulses: Red kidney beans, rounded white pea beans, and desi chickpeas",
          "Natural Minerals: Sustainable extraction and export of certified mineral ores",
        ],
      },
    ],
  },
  {
    id: "logistics-warehousing",
    num: "04",
    title: "Logistics & Warehousing Services",
    category: "Supply Chain & Depots",
    description:
      "Full-cycle supply chain management combining expedited customs clearance, multimodal freight forwarding, and nationwide secure warehousing across Ethiopia's principal industrial growth poles.",
    routes: [
      ["Galafi Border Customs Station", "Modjo Dry Port Container Terminal", "Kality Freight Depot"],
    ],
    metrics: [
      { label: "Customs Hubs", value: "Galafi, Modjo, Kality" },
      { label: "Accreditation", value: "Licensed AEO Broker" },
      { label: "Storage", value: "Bonded & Dry Depots" },
      { label: "Security", value: "24/7 Guarded & CCTV" },
    ],
    subservices: [
      {
        heading: "Customs Brokerage & Clearance",
        points: [
          "Expedited customs clearance at Galafi border post and Modjo Dry Port",
          "Fast-track documentation and cargo release at Kality inland freight terminal",
          "Accurate HS code classification and duty pre-assessment to prevent demurrage",
          "Full transit customs bond issuance and direct customs declaration filing",
        ],
      },
      {
        heading: "Tailored Supply Chain & Nationwide Warehousing",
        points: [
          "Flexible short and long-term bonded and non-bonded warehouse rentals",
          "Tailored supply chain flowcharts engineered to cut demurrage and cycle times",
          "Comprehensive inventory logging, palletizing, shrink-wrapping, and labeling",
          "Shipping agency operations (currently under strategic development)",
        ],
      },
    ],
  },
  {
    id: "manufacturing",
    num: "05",
    title: "Manufacturing & Agro-Processing",
    category: "Industrial Infrastructure",
    description:
      "Driving industrial value addition through our flagship 14,000 square meter food processing facility currently under construction in Addis Ababa, strategically positioned around Bole Bulbula.",
    metrics: [
      { label: "Facility Area", value: "14,000 m²" },
      { label: "Location", value: "Bole Bulbula, Addis" },
      { label: "Operational Role", value: "Agro-Processing Plant" },
      { label: "Target Market", value: "Domestic & Global" },
    ],
    subservices: [
      {
        heading: "Facility Specifications & Capabilities",
        points: [
          "14,000 square meter state-of-the-art agro-industrial processing footprint",
          "Direct arterial connectivity to the Addis Ababa–Adama Expressway",
          "Automated sorting, hygienic cleaning, and industrial food processing lines",
          "Climate-controlled storage and hermetically sealed export packaging units",
        ],
      },
      {
        heading: "Strategic Economic Impact",
        points: [
          "Supplying premium processed foods to stabilize domestic consumer markets",
          "Transforming raw Ethiopian harvests into high-margin packaged exports",
          "Creating sustainable technical manufacturing employment in the capital",
          "Transferring modern food safety and automated processing technology",
        ],
      },
    ],
  },
  {
    id: "humanitarian",
    num: "06",
    title: "Humanitarian Aid Logistics",
    category: "Emergency Relief Transport",
    description:
      "Priority relief carrier for global institutions including the UN World Food Programme (WFP) and World Health Organization (WHO), mobilizing dedicated freight convoys for life-saving missions.",
    routes: [
      ["Djibouti Humanitarian Hub", "Semera Relief Corridor", "Northern Regional Silos"],
      ["Adama Central WFP Silos", "Southern Oromia & Somali Region Distribution Points"],
    ],
    metrics: [
      { label: "Relief Uplifted", value: "158,636 MT" },
      { label: "Containers Moved", value: "2,188 Units" },
      { label: "Primary Partners", value: "UN WFP / WHO" },
      { label: "Neutrality", value: "100% Non-Contraband" },
    ],
    subservices: [
      {
        heading: "Audited Regional Dispatch Reach (2022–2026)",
        points: [
          "158,636 MT of emergency relief delivered across 10 primary destinations",
          "Major corridors: Kombolcha (71,683 MT), Adama (28,215 MT), Mekelle (26,136 MT), Hawassa (14,185 MT)",
          "2,188 containerized dispatches to regional dry ports and distribution stations",
          "Dedicated prime movers on permanent standby for rapid humanitarian mobilization",
        ],
      },
      {
        heading: "Why We Prioritize Humanitarian Logistics",
        points: [
          "Delivering life-saving aid cargo provides immense humanitarian purpose and pride",
          "Operating in direct partnership with global agencies sharpens our operational rigor",
          "Continuous institutional development in compliance with United Nations standards",
          "Demonstrating verified heavy haulage capacity when communities need it most",
        ],
      },
    ],
  },
];

const SLIDE_IMAGES = [
  "/assets/hero_truck_mvp_style.jpg", // Cover
  "/assets/services_trucks.jpg",      // 01 Ground Transport
  "/assets/machinery.jpg",            // 02 Construction
  "/assets/partners_truck.jpg",       // 03 Import & Export
  "/assets/footer_depot_warehouse.jpg", // 04 Logistics & Warehousing
  "/assets/facility.jpg",             // 05 Manufacturing
  "/assets/hero_fleet.jpg",           // 06 Humanitarian
];

export default function ServicesHeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModalService, setActiveModalService] = useState<ModalServiceData | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Total panels: Slide 0 (Cover) + 6 Services = 7 panels
  const totalPanels = 7;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring damping matching GSAP's scrub: 1 (calm, luxurious glide without abrupt whipping)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 75,
    damping: 25,
    mass: 0.35,
    restDelta: 0.0005,
  });

  // Desktop horizontal translate
  // 7 panels: translate from 0% to -((7 - 1) / 7 * 100)% = -85.714%
  const maxTranslatePercent = -((totalPanels - 1) / totalPanels) * 100;
  const x = useTransform(smoothProgress, [0, 1], ["0%", `${maxTranslatePercent}%`]);

  // Smooth scroll to contact form
  const handleScrollToContact = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 
        Container:
        Desktop: 880vh calibrated scrollable height (~130vh per panel transition, providing calm, readable pacing)
        Mobile: auto height with stacked cards
      */}
      <section
        ref={containerRef}
        id="hero"
        className="relative bg-[#070B14] w-full lg:h-[880vh]"
      >
        {/* Sticky Desktop Viewport / Static Mobile Wrapper */}
        <div className="lg:sticky lg:top-0 lg:h-screen w-full overflow-hidden flex flex-col justify-between">
          {/* Horizontal Track (Desktop) / Vertical Stack (Mobile) */}
          <motion.div
            style={isDesktop ? { x } : {}}
            className="flex flex-col lg:flex-row h-full w-full lg:w-[700vw] will-change-transform"
          >
            {/* ========================================================
                SLIDE 0: HERO COVER PANEL (.hero-services__section-0)
                Cinematic Entrance Animation matching Homepage & About
               ======================================================== */}
            <div className="w-full lg:w-screen h-screen shrink-0 relative flex flex-col justify-end p-8 sm:p-14 lg:p-24 overflow-hidden select-none">
              {/* Cinematic Background Image Entrance */}
              <motion.div
                initial={{ scale: 1.14, opacity: 0.6 }}
                animate={{ scale: 1.0, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 z-0"
              >
                <Image
                  src={SLIDE_IMAGES[0]}
                  alt="Express PTL Heavy Transport Services"
                  fill
                  priority
                  className="object-cover object-center brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/50 to-black/30" />
                <div className="absolute inset-0 bg-radial from-[#FF5A1F]/15 via-transparent to-transparent pointer-events-none blur-3xl" />
              </motion.div>

              {/* Cover Text Content with Sequential Entrance Animation */}
              <div className="relative z-10 max-w-5xl">
                {/* 1. Eyebrow Tag */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs uppercase tracking-widest text-[#FF5A1F] font-semibold mb-6"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                  <span>COMPREHENSIVE INDUSTRIAL LOGISTICS & INFRASTRUCTURE</span>
                </motion.div>

                {/* 2. Monumental "OUR SERVICES" Title with Character Peel & Elastic Drop */}
                <div className="overflow-hidden mb-2">
                  <AnimatedText
                    text="OUR SERVICES"
                    as="h1"
                    delay={0.45}
                    stagger={0.045}
                    duration={1.15}
                    className="font-headline text-6xl sm:text-8xl lg:text-[130px] xl:text-[160px] uppercase font-black tracking-tight text-white leading-[0.85] select-none"
                  />
                </div>

                {/* 3. MVP .main-animated-line Baseline Guideline Line sweeping across */}
                <motion.div
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-4xl h-px bg-gradient-to-r from-[#FF5A1F] via-white/40 to-transparent my-6"
                />

                {/* 4. Subtitle Paragraph */}
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
                  className="text-base sm:text-xl lg:text-2xl text-slate-300 font-sans max-w-3xl leading-relaxed mb-8"
                >
                  From 76 new heavy prime movers and cross-border port corridors to large-scale construction plant rentals, turnkey customs clearance, and modern agro-processing facilities.
                </motion.p>

                {/* 5. Scroll Prompt Indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-4 text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-headline"
                >
                  <span className="hidden lg:inline text-[#FF5A1F]">Scroll horizontally to explore services</span>
                  <span className="lg:hidden text-[#FF5A1F]">Scroll down to view services</span>
                  <div className="w-12 h-px bg-white/30 hidden lg:block" />
                  <ArrowRight className="w-4 h-4 text-[#FF5A1F] animate-bounce" />
                </motion.div>
              </div>
            </div>

            {/* ========================================================
                SLIDES 1 TO 6: THE 6 PRODUCTION SERVICES
               ======================================================== */}
            {SERVICES_DATA.map((srv, idx) => (
              <div
                key={srv.id}
                id={`service-${idx + 1}`}
                className="w-full lg:w-screen h-auto lg:h-screen shrink-0 flex flex-col lg:flex-row relative border-t lg:border-t-0 lg:border-l border-white/10"
              >
                {/* Left Side: Photo + Watermark Number (.hero-services__image) */}
                <div className="w-full lg:w-1/2 h-[420px] lg:h-full relative overflow-hidden flex flex-col justify-end p-8 sm:p-12 lg:p-16 shrink-0">
                  <Image
                    src={SLIDE_IMAGES[idx + 1]}
                    alt={srv.title}
                    fill
                    className="object-cover object-center brightness-75 scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/40 to-transparent" />

                  {/* Watermark Number & Heading (.hero-services__heading) */}
                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
                    <span className="font-headline text-7xl sm:text-8xl lg:text-[130px] font-black text-white/90 leading-none tracking-tighter">
                      {srv.num}
                    </span>
                    <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl uppercase text-white leading-[0.95] max-w-md">
                      {srv.title}
                    </h2>
                  </div>
                </div>

                {/* Right Side: High-Contrast White Panel (.hero-services__container) */}
                <div className="w-full lg:w-1/2 h-auto lg:h-full bg-white text-[#1f1f61] p-8 sm:p-12 lg:p-16 xl:p-20 flex flex-col justify-between overflow-y-auto">
                  <div className="space-y-6">
                    {/* Category pill */}
                    <div className="inline-block px-3 py-1 rounded-md bg-[#1f1f61]/5 border border-[#1f1f61]/10 text-xs uppercase tracking-widest text-[#1f1f61] font-semibold">
                      {srv.category}
                    </div>

                    {/* Lead Text (.hero-services__text) */}
                    <p className="text-sm sm:text-base text-slate-700 font-sans leading-relaxed font-medium">
                      {srv.description}
                    </p>

                    {/* Sub-services Section (.hero-services__wrapper) */}
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-[#FF5A1F] font-bold mb-3">
                        KEY HIGHLIGHTS & TECHNICAL SPECS:
                      </h3>

                      {/* List (.hero-services__list) */}
                      <ul className="border-t border-[#1f1f61]/15 divide-y divide-[#1f1f61]/15">
                        {srv.subservices[0]?.points.map((pt, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-center justify-between py-3.5 group cursor-pointer"
                            onClick={() => setActiveModalService(srv)}
                          >
                            <span className="text-xs sm:text-sm font-sans font-semibold text-[#1f1f61] group-hover:text-[#FF5A1F] transition-colors pr-4">
                              {pt}
                            </span>

                            {/* Circular Button with Rotating Plus (.hero-services__list-btn) */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveModalService(srv);
                              }}
                              aria-label={`View ${srv.title} details`}
                              className="w-8 h-8 rounded-full border border-[#1f1f61]/25 bg-slate-50 group-hover:bg-[#1f1f61] group-hover:border-[#1f1f61] text-[#1f1f61] group-hover:text-white flex items-center justify-center transition-all duration-300 shrink-0"
                            >
                              <Plus className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Quick Metrics Bar */}
                    <div className="grid grid-cols-2 gap-3 pt-3">
                      {srv.metrics.slice(0, 2).map((m, mIdx) => (
                        <div key={mIdx} className="p-3 rounded-lg bg-slate-50 border border-slate-200/80">
                          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-sans block">
                            {m.label}
                          </span>
                          <span className="font-headline text-base text-[#1f1f61]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order a Service Button (.hero-services__btn) */}
                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={handleScrollToContact}
                      className="w-full py-4 px-6 rounded-xl bg-[#1f1f61] hover:bg-[#FF5A1F] text-white font-headline text-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#1f1f61]/20 group"
                    >
                      <span>Order This Service</span>
                      <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* ========================================================
              BOTTOM PROGRESS BAR (.hero-services__progressbar)
             ======================================================== */}
          <div className="hidden lg:block absolute bottom-0 left-0 w-full h-[6px] bg-white/10 z-20">
            <motion.div
              style={{ scaleX: smoothProgress, transformOrigin: "left" }}
              className="h-full bg-[#FF5A1F]"
            />
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICE DETAIL MODAL OVERLAY (.modal-services)
         ======================================================== */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onOrderClick={() => {
          handleScrollToContact();
        }}
      />
    </>
  );
}
