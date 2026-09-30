"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AnimatedText from "./AnimatedText";

/**
 * Reverse-Engineered MVP Logistics Signature Split-Text Hover Roll
 * - Animates characters with a 12ms staggered upward ripple on hover
 * - Primary line rolls up from 0% to -120%
 * - Secondary clone rolls up from 120% to 0%
 */
function TextHoverRoll({
  text,
  href,
  className = "",
  target,
  onClick,
}: {
  text: string;
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const chars = text.split("");

  const inner = (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`inline-block relative overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* Primary line rolling up out of frame */}
      <span className="inline-flex">
        {chars.map((char, i) => (
          <span
            key={`r1-${i}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: hovered ? "translateY(-120%)" : "translateY(0%)",
              transitionDelay: `${i * 10}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>

      {/* Secondary line rolling in from bottom */}
      <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
        {chars.map((char, i) => (
          <span
            key={`r2-${i}`}
            className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: hovered ? "translateY(0%)" : "translateY(120%)",
              transitionDelay: `${i * 10}ms`,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    </span>
  );

  if (href) {
    return (
      <Link href={href} target={target} onClick={onClick} className="inline-block">
        {inner}
      </Link>
    );
  }

  return inner;
}

interface FooterProps {
  hideBackground?: boolean;
}

export default function Footer({ hideBackground = false }: FooterProps) {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number, opts: { duration: number }) => void } }).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      id="footer"
      className={`relative w-full h-screen min-h-170 max-h-270 ${
        hideBackground ? "bg-transparent" : "bg-[#070B14]"
      } text-white pt-8 sm:pt-10 lg:pt-12 pb-4 sm:pb-6 select-none z-20 flex flex-col justify-between`}
    >
      {/* Standalone background if not hosted in continuous 4K video viewport */}
      {!hideBackground && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/assets/footer_depot_warehouse.jpg"
            alt="Express PTL Logistics Terminal"
            fill
            className="object-cover object-center filter brightness-[0.38] contrast-[1.18]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#070B14] via-[#070B14]/40 to-[#070B14]/85 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-r from-[#070B14]/85 via-transparent to-[#070B14]/85 pointer-events-none" />
        </div>
      )}

      {/* Main Container: Fits comfortably in 1 screen viewport */}
      <div className="relative z-10 max-w-[1880px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between h-full flex-1">
        
        {/* ========================================================
            1. TOP ROW: BRAND LOGO + 4-COLUMN LOGISTICS DIRECTORY (.footer__top)
            Exact MVP Logistics Layout with balanced compact padding
            ======================================================== */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          
          {/* Brand Logo (.footer__logo) - Clean & Minimal matching MVP Logistics */}
          <Link href="/" className="group block shrink-0 select-none">
            <div className="w-24 sm:w-28 lg:w-32 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_12px_35px_rgba(255,90,31,0.25)] border border-white/15">
              <Image
                src="/assets/Gemini_Generated_Image_nmde0znmde0znmde.jpg"
                alt="Express Transport & Logistics"
                width={128}
                height={128}
                className="w-full h-auto object-cover"
              />
            </div>
          </Link>

          {/* 4 Navigation Columns matching production structure: INFORMATION, USEFUL LINKS, CONTACT, CONNECT */}
          <nav className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-14 w-full lg:max-w-4xl justify-between">
            
            {/* Column 1: INFORMATION */}
            <div className="flex flex-col">
              <TextHoverRoll
                text="INFORMATION"
                href="/about"
                className="font-headline text-lg sm:text-xl lg:text-[22px] tracking-wider uppercase text-white mb-2 sm:mb-3 lg:mb-4"
              />
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <TextHoverRoll
                  text="Contact Us"
                  href="/contact"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="About Us"
                  href="/about"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Our Fleet"
                  href="/operations#fleet"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Regional Corridors"
                  href="/operations#corridors"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Key Advantages"
                  href="/#advantages"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
              </div>
            </div>

            {/* Column 2: USEFUL LINKS (Exact production services) */}
            <div className="flex flex-col">
              <TextHoverRoll
                text="USEFUL LINKS"
                href="/services"
                className="font-headline text-lg sm:text-xl lg:text-[22px] tracking-wider uppercase text-white mb-2 sm:mb-3 lg:mb-4"
              />
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <TextHoverRoll
                  text="All Services"
                  href="/services"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Ground Transport"
                  href="/services#service-1"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Construction"
                  href="/services#service-2"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Import Export"
                  href="/services#service-3"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Warehousing & Logistics"
                  href="/services#service-4"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Manufacturing Plant"
                  href="/services#service-5"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Humanitarian Aid"
                  href="/services#service-6"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
              </div>
            </div>

            {/* Column 3: CONTACT (Exact phone, email, address from production) */}
            <div className="flex flex-col">
              <TextHoverRoll
                text="CONTACT"
                href="/contact"
                className="font-headline text-lg sm:text-xl lg:text-[22px] tracking-wider uppercase text-white mb-2 sm:mb-3 lg:mb-4"
              />
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                <div className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300">
                  <span className="text-white/50 text-[11px] block uppercase font-headline">Call</span>
                  <div className="flex flex-col sm:flex-row sm:gap-1.5 flex-wrap">
                    <a href="tel:+251114702031" className="hover:text-white transition-colors">
                      +251 11 470 2031
                    </a>
                    <span className="hidden sm:inline text-white/40">/</span>
                    <a href="tel:+251911248830" className="hover:text-white transition-colors">
                      +251 91 124 8830
                    </a>
                  </div>
                </div>

                <div className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 pt-1">
                  <span className="text-white/50 text-[11px] block uppercase font-headline">Email</span>
                  <a href="mailto:express@expressptl.com" className="hover:text-white transition-colors">
                    express@expressptl.com
                  </a>
                </div>

                <div className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 pt-1">
                  <span className="text-white/50 text-[11px] block uppercase font-headline">Address</span>
                  <p className="leading-snug text-slate-300 text-[12px] sm:text-[13px]">
                    Wollo Sefer, Ambasel Building, 6th floor 607–610 &amp; 7th floor 701–702<br />
                    Addis Ababa, Ethiopia.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: CONNECT & SOCIAL */}
            <div className="flex flex-col">
              <TextHoverRoll
                text="CONNECT"
                className="font-headline text-lg sm:text-xl lg:text-[22px] tracking-wider uppercase text-white mb-2 sm:mb-3 lg:mb-4"
              />
              <div className="flex flex-col space-y-1.5 sm:space-y-2">
                {/* Social Links from production (Facebook, Twitter, Skype, Pinterest) */}
                <div className="flex items-center gap-2.5 pt-1 pb-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5A1F] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                    aria-label="Facebook"
                  >
                    <span className="font-bold text-xs">f</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5A1F] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href="skype:expressptl?chat"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5A1F] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                    aria-label="Skype"
                  >
                    <span className="font-bold text-xs">S</span>
                  </a>
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#FF5A1F] hover:text-white flex items-center justify-center text-slate-300 transition-colors"
                    aria-label="Pinterest"
                  >
                    <span className="font-bold text-xs">P</span>
                  </a>
                </div>

                <TextHoverRoll
                  text="Rate Calculator"
                  href="/operations#calculator"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-slate-300 hover:text-white"
                />
                <TextHoverRoll
                  text="Tender Request"
                  href="/#feedback"
                  className="text-xs sm:text-[13px] lg:text-[14px] font-sans text-[#FF5A1F] hover:text-white font-medium"
                />
              </div>
            </div>

          </nav>

        </div>

        {/* Center truck spacer window */}
        <div className="flex-1 min-h-3.75 max-h-20" />

        {/* ========================================================
            2. MONUMENTAL HEADLINE (.footer__title)
            Precisely scaled to fill edge-to-edge without wrapping or clipping
            - Sized at 9.1vw so all 23 characters fit within viewport
            - AnimatedText character spring drop
            ======================================================== */}
        <div className="w-full pt-2 sm:pt-3 mb-1 sm:mb-2 border-t border-white/20 overflow-hidden text-center">
          <AnimatedText
            text="EXPRESS TRANS-LOGISTICS"
            as="p"
            delay={0.1}
            stagger={0.02}
            className="font-headline text-[6.2vw] sm:text-[7.4vw] md:text-[8.2vw] lg:text-[9.0vw] 2xl:text-[9.1vw] text-white uppercase leading-[0.82] tracking-[-0.02em] whitespace-nowrap drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)] select-none inline-block text-center"
          />
        </div>

        {/* ========================================================
            3. BOTTOM BAR (.footer__bottom-container)
            - Left: Exact production copyright & credit
            - Right: Contact Us, About Us, Privacy Policy, and Up Button
            ======================================================== */}
        <div className="pt-2 sm:pt-3 pb-1 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] sm:text-[12px] uppercase font-sans text-white/60">
          
          {/* Left Wrapper (.footer__bottom-wrapper) */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full md:w-auto">
            <span suppressHydrationWarning className="tracking-wider text-center sm:text-left">
              Designed by <a href="mailto:bemnetkibret4@gmail.com" className="text-slate-300 hover:text-[#FF5A1F] underline transition-colors">bemnetkibret4@gmail.com</a>. {new Date().getFullYear()} Express Transport and Logistics. All rights reserved..
            </span>
          </div>

          {/* Right Wrap (.footer__bottom-wrap) */}
          <div className="flex items-center justify-between md:justify-end gap-6 sm:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-4 sm:gap-6">
              <TextHoverRoll
                text="Contact Us"
                href="/contact"
                className="text-white/60 hover:text-white tracking-wider"
              />
              <TextHoverRoll
                text="About Us"
                href="/about"
                className="text-white/60 hover:text-white tracking-wider"
              />
              <TextHoverRoll
                text="Privacy Policy"
                href="/about"
                className="text-white/40 hover:text-white tracking-wider"
              />
            </div>

            {/* Reverse-Engineered MVP Up Button (.footer__up) */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-[12px] uppercase text-white/60 font-sans tracking-wider">
                Up
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                className="group flex items-center justify-center w-7 h-7 rounded-xs bg-[#f4f4f70d] hover:bg-white transition-colors duration-300 cursor-pointer"
                aria-label="Scroll to top"
              >
                <svg
                  className="w-full h-full"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.8544 14.4299L15.3548 11.919C15.1667 11.7302 14.8339 11.7302 14.6452 11.919L12.1456 14.4299C11.9508 14.626 11.9515 14.9428 12.1476 15.1375C12.3436 15.3322 12.6597 15.3322 12.8552 15.1362L14.5004 13.4842L14.5004 17.7225C14.5004 17.9992 14.7245 18.2227 15.0006 18.2227C15.2767 18.2227 15.5008 17.9992 15.5008 17.7225L15.5008 13.4842L17.1454 15.1362C17.2435 15.2342 17.3715 15.2829 17.5002 15.2829C17.6276 15.2829 17.7557 15.2342 17.853 15.1375C18.0484 14.9428 18.0491 14.626 17.8544 14.4299Z"
                    className="fill-white group-hover:fill-[#070B14] transition-colors duration-300"
                  />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
