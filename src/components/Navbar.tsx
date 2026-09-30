"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT US", href: "/about" },
  { id: "services", label: "SERVICES", href: "/#services" },
  { id: "corridors", label: "CORRIDORS", href: "/corridors" },
  { id: "fleet", label: "FLEET", href: "/fleet" },
  { id: "calculator", label: "CALCULATOR", href: "/calculator" },
  { id: "contacts", label: "CONTACTS", href: "/contact" },
];

interface NavbarProps {
  isStarted?: boolean;
}

const LANGUAGES = [
  { code: "ENG", label: "English" },
  { code: "FRA", label: "Français" },
  { code: "SWA", label: "Kiswahili" },
];

export default function Navbar({ isStarted = true }: NavbarProps) {
  const pathname = usePathname();
  const routeTab = pathname !== "/" ? (
    pathname.startsWith("/about") ? "about" :
    pathname.startsWith("/corridors") ? "corridors" :
    pathname.startsWith("/fleet") ? "fleet" :
    pathname.startsWith("/calculator") ? "calculator" :
    pathname.startsWith("/contact") ? "contacts" : null
  ) : null;
  const [scrollTab, setScrollTab] = useState<string | null>(null);
  const activeTab = routeTab ?? scrollTab;
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("ENG");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    if (langDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [langDropdownOpen]);

  // Synchronize active tab with homepage scroll sections
  useEffect(() => {
    if (pathname !== "/") return;

    // On homepage: dynamically activate based on current scroll position
    const handleScroll = () => {
      const servicesEl = document.getElementById("services");
      const aboutEl = document.getElementById("about");
      const viewportMid = window.innerHeight * 0.4;

      if (servicesEl) {
        const rect = servicesEl.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom >= 150) {
          setScrollTab("services");
          return;
        }
      }

      if (aboutEl) {
        const rect = aboutEl.getBoundingClientRect();
        if (rect.top <= viewportMid && rect.bottom >= 150) {
          setScrollTab("about");
          return;
        }
      }

      // Default at top of homepage: clean state with no tab selected
      setScrollTab(null);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const containerRef = useRef<HTMLDivElement>(null);
  const isHiddenRef = useRef(false);
  const lastScrollY = useRef(0);
  const accumulatedDiff = useRef(0);

  useEffect(() => {
    const updateVisibility = (scrollY: number, explicitDirection?: number) => {
      const container = containerRef.current;
      if (!container || mobileMenuOpen) return;

      // When near the top, header is ALWAYS visible
      if (scrollY <= 100) {
        if (isHiddenRef.current) {
          container.classList.remove("is-hidden");
          isHiddenRef.current = false;
        }
        accumulatedDiff.current = 0;
        lastScrollY.current = scrollY;
        return;
      }

      let direction = explicitDirection;
      const diff = scrollY - lastScrollY.current;

      if (direction === undefined) {
        // Accumulate directional movement over frames to eliminate micro-jitter
        accumulatedDiff.current += diff;
        if (accumulatedDiff.current > 12) {
          direction = 1;
          accumulatedDiff.current = 0;
        } else if (accumulatedDiff.current < -12) {
          direction = -1;
          accumulatedDiff.current = 0;
        }
      }

      // Hide when scrolling DOWN past hero threshold
      if (direction === 1 && scrollY > 120) {
        if (!isHiddenRef.current) {
          container.classList.add("is-hidden");
          isHiddenRef.current = true;
        }
      }
      // Reveal immediately when scrolling UP
      else if (direction === -1) {
        if (isHiddenRef.current) {
          container.classList.remove("is-hidden");
          isHiddenRef.current = false;
        }
      }

      lastScrollY.current = scrollY;
    };

    // 1. Hook directly into Lenis smooth flywheel scroll if present
    let cleanupLenis: (() => void) | null = null;
    const bindLenis = () => {
      const lenis = (window as unknown as { __lenis?: { on: (event: string, cb: (e: { scroll: number; direction: number }) => void) => void; off: (event: string, cb: (e: { scroll: number; direction: number }) => void) => void } }).__lenis;
      if (lenis && !cleanupLenis) {
        const onLenisScroll = (e: { scroll: number; direction: number }) => {
          updateVisibility(e.scroll, e.direction);
        };
        lenis.on("scroll", onLenisScroll);
        cleanupLenis = () => {
          lenis.off("scroll", onLenisScroll);
        };
        return true;
      }
      return false;
    };

    bindLenis();

    // 2. Native scroll listener as seamless fallback
    let rafId: number | null = null;
    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          if (!bindLenis()) {
            updateVisibility(window.scrollY);
          }
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (cleanupLenis) cleanupLenis();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [mobileMenuOpen]);

  // Ensure header is visible whenever mobile menu is toggled open
  useEffect(() => {
    if (mobileMenuOpen && containerRef.current && isHiddenRef.current) {
      containerRef.current.classList.remove("is-hidden");
      isHiddenRef.current = false;
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -140, opacity: 0 }}
        animate={{
          y: !isStarted ? -140 : 0,
          opacity: !isStarted ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.35,
          ease: [0.16, 1, 0.3, 1], // Reverse-Engineered MVP power-out ease
        }}
        className="fixed top-0 left-0 w-full z-50 pointer-events-none py-5 md:py-6"
      >
        <div
          ref={containerRef}
          className="mvp-header-container max-w-[1880px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-start justify-between"
        >
          
          {/* Left: Dedicated Large Logo Container displaying the full brand mark */}
          <Link
            href="/"
            className="pointer-events-auto aspect-square rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.55)] flex items-center justify-center transition-transform duration-300 hover:scale-[1.04] active:scale-[0.98] bg-[#0E1224] border border-white/20 group shrink-0 h-22 w-22 sm:h-24 sm:w-24 md:h-26 md:w-26"
            aria-label="Express Transport and Logistics"
          >
            <Image
              src="/assets/Gemini_Generated_Image_nmde0znmde0znmde.jpg"
              alt="Express Transport & Logistics Logo"
              width={104}
              height={104}
              className="w-full h-full object-cover scale-[1.12] transition-transform duration-300 group-hover:scale-120"
            />
          </Link>

          {/* Center: Desktop Navigation with Animated Sliding Pill Hover */}
          <nav
            className="pointer-events-auto hidden lg:flex items-center bg-white p-1 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative h-13 mt-1.5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            <ul className="flex items-center gap-0.5 relative z-10 m-0 p-0 list-none h-full">
              {NAV_ITEMS.map((item) => {
                const isHovered = hoveredTab === item.id;
                const isCurrent = activeTab === item.id;
                // Follow user hover cursor smoothly, or rest on active page tab when not hovering
                const isActive = hoveredTab ? isHovered : isCurrent;

                return (
                  <li key={item.id} className="relative h-full flex items-center">
                    <a
                      href={item.href}
                      onClick={() => {
                        setScrollTab(item.id);
                      }}
                      onMouseEnter={() => setHoveredTab(item.id)}
                      className={`group relative z-20 flex items-center h-full px-4 xl:px-5 font-headline text-[1.2rem] tracking-wider uppercase transition-colors duration-200 select-none ${
                        isActive ? "text-white" : "text-[#0D1322]"
                      }`}
                    >
                      <span className="mvp-text-clip">
                        <span className="inline-flex">
                          {item.label.split("").map((c, i) => (
                            <span
                              key={`nl1-${i}`}
                              className="mvp-char-primary"
                              style={{ transitionDelay: `${i * 14}ms` }}
                            >
                              {c === " " ? "\u00A0" : c}
                            </span>
                          ))}
                        </span>
                        <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
                          {item.label.split("").map((c, i) => (
                            <span
                              key={`nl2-${i}`}
                              className="mvp-char-secondary"
                              style={{ transitionDelay: `${i * 14}ms` }}
                            >
                              {c === " " ? "\u00A0" : c}
                            </span>
                          ))}
                        </span>
                      </span>
                    </a>

                    {/* Shared Layout Sliding Pill - Signature Express Orange #FF5A1F */}
                    {isActive && (
                      <motion.div
                        layoutId="navSlidingPill"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 34,
                        }}
                        className="absolute inset-y-1 inset-x-0.5 bg-[#FF5A1F] rounded-sm z-10 pointer-events-none shadow-[0_2px_12px_rgba(255,90,31,0.4)]"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Solid White Action Pills Group with MVP Reverse-Engineered Hover */}
          <div className="pointer-events-auto flex items-center gap-3 mt-1.5">
            <a
              href="/contact"
              className="group mvp-bubble-btn px-5 md:px-7 h-13 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] font-headline text-[1.2rem] tracking-wider uppercase flex items-center gap-2"
            >
              <span className="mvp-text-clip">
                <span className="inline-flex">
                  {"CONTACT US".split("").map((c, i) => (
                    <span
                      key={`h1-${i}`}
                      className="mvp-char-primary"
                      style={{ transitionDelay: `${i * 14}ms` }}
                    >
                      {c === " " ? "\u00A0" : c}
                    </span>
                  ))}
                </span>
                <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
                  {"CONTACT US".split("").map((c, i) => (
                    <span
                      key={`h2-${i}`}
                      className="mvp-char-secondary"
                      style={{ transitionDelay: `${i * 14}ms` }}
                    >
                      {c === " " ? "\u00A0" : c}
                    </span>
                  ))}
                </span>
              </span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5] relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Desktop Language Selector Pill with Dropdown */}
            <div ref={langDropdownRef} className="relative hidden sm:block">
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="group mvp-bubble-btn flex items-center gap-1.5 px-4 h-13 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] font-headline text-[1.2rem] tracking-wider uppercase cursor-pointer"
                aria-label="Select Language"
              >
                <span className="relative z-10">{currentLang}</span>
                <ChevronDown
                  className={`w-4 h-4 relative z-10 stroke-[2.5] transition-transform duration-300 ${
                    langDropdownOpen ? "rotate-180" : "group-hover:rotate-180"
                  }`}
                />
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-2xl border border-slate-100 p-1.5 z-50 flex flex-col gap-1"
                  >
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setCurrentLang(lang.code);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 rounded-lg font-headline text-sm tracking-wider text-left flex items-center justify-between transition-colors ${
                          currentLang === lang.code
                            ? "bg-[#FF5A1F] text-white"
                            : "text-[#0D1322] hover:bg-slate-100 hover:text-[#FF5A1F]"
                        }`}
                      >
                        <span>{lang.label}</span>
                        <span className="text-[11px] opacity-75 font-mono">{lang.code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden items-center justify-center w-11 h-13 bg-white hover:bg-[#FF5A1F] hover:text-white transition-colors duration-200 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-[#0D1322] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-24 left-5 right-5 z-50 bg-white rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.45)] p-5 sm:p-6 flex flex-col gap-2 border border-slate-100 lg:hidden max-h-[calc(100vh-120px)] overflow-y-auto"
          >
            {/* Primary Nav Links */}
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setScrollTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`py-3 px-4 rounded-xl font-headline text-xl sm:text-2xl tracking-wide uppercase transition-colors ${
                    activeTab === item.id
                      ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/20"
                      : "text-[#0D1322] hover:bg-[#FF5A1F] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Footer Area: Language Selector & Direct Contact */}
            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Language</span>
                <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1.5 rounded-lg font-headline text-sm tracking-wider uppercase transition-all duration-200 ${
                        currentLang === lang.code
                          ? "bg-[#FF5A1F] text-white shadow-md shadow-[#FF5A1F]/25"
                          : "text-[#0D1322] hover:text-[#FF5A1F]"
                      }`}
                    >
                      {lang.code}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full h-12 mt-1 bg-[#1B1E3D] hover:bg-[#FF5A1F] text-white rounded-xl font-headline text-lg tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-colors duration-200"
              >
                <span>CONTACT US</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
