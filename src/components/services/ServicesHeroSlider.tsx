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
    category: "Cargo Transport",
    description:
      "Since 2013, Express Transport and Logistics has provided cargo transport across major trade routes and inland transport across Ethiopia, with a new fleet of 76 active trucks carrying bulk, containerized, commercial and humanitarian aid cargo.",
    metrics: [
      { label: "Active Fleet", value: "76 Trucks" },
      { label: "Total Capacity", value: "2,916 MT" },
      { label: "Per Truck", value: "40 MT" },
      { label: "Fleet Condition", value: "All New" },
    ],
    subservices: [
      {
        heading: "Core Transport Solutions & Cargo Types",
        points: [
          "Regular cargo transport across major trade routes",
          "Bulk cargo and containerized cargo transport",
          "Commercial shipments and humanitarian aid cargo",
          "Inland transport and end-to-end logistics solutions",
        ],
      },
      {
        heading: "Our Fleet",
        points: [
          "76 active trucks, all new",
          "40 MT capacity per truck",
          "2,916 MT total capacity at a time",
          "Special focus on humanitarian aid cargo",
        ],
      },
    ],
  },
  {
    id: "construction",
    num: "02",
    title: "Construction & Machinery Rental",
    category: "Construction & Equipment Rental",
    description:
      "Active in the construction sector as both main contractor and subcontractor for government institutions, private companies and NGOs, with construction machinery available for rental.",
    metrics: [
      { label: "Contracting Roles", value: "Main & Subcontractor" },
      { label: "Clients", value: "Government, Private, NGOs" },
      { label: "Rental Machinery", value: "7 Machine Types" },
      { label: "Project Types", value: "Roads & Buildings" },
    ],
    subservices: [
      {
        heading: "Construction Services",
        points: [
          "Road construction",
          "Building towers",
          "Residential housing and apartments",
          "Other infrastructure projects",
        ],
      },
      {
        heading: "Machinery Available for Rental",
        points: [
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
    id: "import-export",
    num: "03",
    title: "Import & Export Commodities",
    category: "International Trade",
    description:
      "We import industrial goods from China, Korea, UAE, Europe and other countries, and export Ethiopian agricultural and mining products to China, Europe, the Middle East, the USA, Canada and other markets.",
    metrics: [
      { label: "Import Origins", value: "China, Korea, UAE, Europe" },
      { label: "Export Markets", value: "China, Europe, Middle East" },
      { label: "Also Exporting To", value: "USA & Canada" },
      { label: "Key Export", value: "Sesame Seeds" },
    ],
    subservices: [
      {
        heading: "Main Imported Products",
        points: [
          "Light trucks and heavy trucks",
          "Construction machinery",
          "Tires, batteries and spare parts",
          "Factory raw materials and all types of steel",
        ],
      },
      {
        heading: "Major Export Products",
        points: [
          "Sesame seeds (Humera and Wollega types)",
          "Green mung beans",
          "Soybeans",
          "Red kidney beans, round white beans and chickpeas",
          "Mining products",
        ],
      },
    ],
  },
  {
    id: "logistics-warehousing",
    num: "04",
    title: "Logistics & Warehousing Services",
    category: "Logistics & Warehousing",
    description:
      "Logistics services covering customs clearance, cargo forwarding and warehouse rental, with shipping agency services currently under development. Our warehousing and distribution operations are regularly audited.",
    metrics: [
      { label: "Customs", value: "Customs Clearance" },
      { label: "Forwarding", value: "Cargo Forwarding" },
      { label: "Storage", value: "Warehouse Rental" },
      { label: "Shipping Agency", value: "Under Development" },
    ],
    subservices: [
      {
        heading: "Logistics Services",
        points: [
          "Customs clearance",
          "Cargo forwarding",
          "Warehouse rental",
          "Shipping agency services (currently under development)",
        ],
      },
      {
        heading: "Warehousing & Distribution",
        points: [
          "Inventory control and management",
          "Load building",
          "Yard management",
          "Regularly audited warehousing operations",
        ],
      },
    ],
  },
  {
    id: "manufacturing",
    num: "05",
    title: "Manufacturing & Food Processing",
    category: "Factory Under Construction",
    description:
      "We are currently constructing a 14,000 square meter food processing factory around Bole Bulbula, Addis Ababa, for food production and processing for local supply and export.",
    metrics: [
      { label: "Factory Area", value: "14,000 m²" },
      { label: "Location", value: "Bole Bulbula, Addis Ababa" },
      { label: "Status", value: "Under Construction" },
      { label: "Market", value: "Local & Export" },
    ],
    subservices: [
      {
        heading: "The Factory",
        points: [
          "Food processing factory currently under construction",
          "14,000 square meter site",
          "Located around Bole Bulbula, Addis Ababa",
          "Food production and processing",
        ],
      },
      {
        heading: "Purpose",
        points: [
          "Food supply for the local market",
          "Processed food for export",
        ],
      },
    ],
  },
  {
    id: "humanitarian",
    num: "06",
    title: "Humanitarian Aid Logistics",
    category: "Humanitarian Aid Cargo",
    description:
      "Humanitarian aid cargo is a special focus of our transport services. Between 2022 and 2026 we delivered 158,636 MT of bulk aid cargo and 2,188 containers to destinations across Ethiopia.",
    metrics: [
      { label: "Bulk Aid Delivered", value: "158,636 MT" },
      { label: "Containers Delivered", value: "2,188" },
      { label: "Destinations", value: "10 Cities" },
      { label: "Period", value: "2022–2026" },
    ],
    subservices: [
      {
        heading: "Aid Cargo Delivered (2022–2026)",
        points: [
          "158,636 MT of bulk aid cargo delivered to 10 destinations",
          "2,188 containers delivered",
          "Largest destinations: Kombolcha (71,683 MT), Adama (28,215 MT), Mekelle (26,136 MT), Hawassa (14,185 MT)",
          "Also Addis Ababa, Dire Dawa, Bahir Dar, Nefas Mewcha, Semera and Dessie",
        ],
      },
      {
        heading: "Why We Focus on Humanitarian Aid Cargo",
        points: [
          "Aid cargo is handled by professional international organizations",
          "Working with them builds our own capability",
          "Delivering aid cargo helps people in need",
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
                  alt="Express PTL Transport Services"
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
                  <span>TRANSPORT, LOGISTICS, TRADE & CONSTRUCTION</span>
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
                  From a new fleet of 76 trucks moving cargo across major trade routes to construction machinery rental, customs clearance, warehousing and a food processing factory under construction.
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
                        KEY HIGHLIGHTS:
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
