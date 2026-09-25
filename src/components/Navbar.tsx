"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "ABOUT US", href: "#about" },
  { id: "services", label: "SERVICES", href: "#services" },
  { id: "corridors", label: "CORRIDORS", href: "#corridors" },
  { id: "fleet", label: "FLEET", href: "#fleet" },
  { id: "calculator", label: "CALCULATOR", href: "#calculator" },
  { id: "contacts", label: "CONTACTS", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("services");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);

      // Directional hide/show
      if (currentScrollY > 150 && currentScrollY > lastScrollY + 8) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 8) {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-all duration-300 ${
          hidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        } ${scrolled ? "py-4 md:py-5" : "py-6 md:py-8"}`}
      >
        <div className="max-w-[1720px] mx-auto px-5 md:px-12 flex items-start justify-between">
          
          {/* Left: Dedicated Large Logo Container displaying the full brand mark */}
          <a
            href="#"
            className={`pointer-events-auto aspect-square rounded-2xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.55)] flex items-center justify-center transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] bg-[#0E1224] border border-white/20 group shrink-0 ${
              scrolled
                ? "h-[76px] w-[76px] sm:h-[90px] sm:w-[90px] md:h-[100px] md:w-[100px]"
                : "h-[88px] w-[88px] sm:h-[106px] sm:w-[106px] md:h-[120px] md:w-[120px]"
            }`}
            aria-label="Express Transport and Logistics"
          >
            <img
              src="/assets/Gemini_Generated_Image_nmde0znmde0znmde.jpg"
              alt="Express Transport & Logistics Logo"
              className="w-full h-full object-cover scale-[1.12] transition-transform duration-300 group-hover:scale-120"
            />
          </a>

          {/* Center: Desktop Navigation with Animated Sliding Pill Hover */}
          <nav
            className="pointer-events-auto hidden lg:flex items-center bg-white p-1 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] relative h-[52px] mt-1.5"
            onMouseLeave={() => setHoveredTab(null)}
          >
            <ul className="flex items-center gap-0.5 relative z-10 m-0 p-0 list-none h-full">
              {NAV_ITEMS.map((item) => {
                const isActive = (hoveredTab || activeTab) === item.id;
                return (
                  <li key={item.id} className="relative h-full flex items-center">
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveTab(item.id);
                      }}
                      onMouseEnter={() => setHoveredTab(item.id)}
                      className={`relative z-20 flex items-center h-full px-4 xl:px-5 font-headline text-[1.2rem] tracking-[0.05em] uppercase transition-colors duration-200 select-none ${
                        isActive ? "text-white" : "text-[#0D1322] hover:text-[#0D1322]"
                      }`}
                    >
                      {item.label}
                    </a>

                    {/* Shared Layout Sliding Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="navSlidingPill"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="absolute inset-y-1 inset-x-0.5 bg-[#0D1322] rounded-[4px] z-10 pointer-events-none"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right: Solid White Action Pills Group */}
          <div className="pointer-events-auto flex items-center gap-3 mt-1.5">
            <a
              href="#contact"
              className="bg-white hover:bg-[#0D1322] text-[#0D1322] hover:text-white px-5 md:px-7 h-[52px] rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] font-headline text-[1.2rem] tracking-[0.05em] uppercase transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-1.5"
            >
              <span>CONTACT US</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            {/* Language Selector Pill */}
            <div className="hidden sm:flex items-center gap-1 bg-white text-[#0D1322] px-4 h-[52px] rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] font-headline text-[1.2rem] tracking-[0.05em] uppercase cursor-pointer hover:bg-slate-100 transition-colors">
              <span>ENG</span>
              <ChevronDown className="w-4 h-4 text-[#0D1322] stroke-[2.5]" />
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex lg:hidden items-center justify-center w-11 h-[52px] bg-white rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.35)] text-[#0D1322] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-5 right-5 z-50 bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.7)] p-6 flex flex-col gap-2 border border-slate-100 lg:hidden"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`py-3 px-4 rounded-lg font-headline text-2xl tracking-wide uppercase transition-colors ${
                  activeTab === item.id
                    ? "bg-[#0D1322] text-white"
                    : "text-[#0D1322] hover:bg-slate-100"
                }`}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
