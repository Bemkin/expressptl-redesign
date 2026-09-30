"use client";

import React from "react";
import { motion } from "framer-motion";
import TextHoverRoll from "@/components/ui/TextHoverRoll";

interface InfoRow {
  caption: string;
  items: {
    text: string;
    href?: string;
    target?: string;
    sublabel?: string;
  }[];
}

const INFO_ROWS: InfoRow[] = [
  {
    caption: "E-MAIL:",
    items: [
      {
        text: "express@expressptl.com",
        href: "mailto:express@expressptl.com",
        sublabel: "Executive Administration & Strategic Contracts",
      },
      {
        text: "operations@expressptl.com",
        href: "mailto:operations@expressptl.com",
        sublabel: "Tender Quotations, Port Logistics & 24/7 Dispatch",
      },
    ],
  },
  {
    caption: "PHONE NUMBER:",
    items: [
      {
        text: "+251 11 470 2031",
        href: "tel:+251114702031",
        sublabel: "Headquarters Direct Line (Addis Ababa)",
      },
      {
        text: "+251 91 124 8830",
        href: "tel:+251911248830",
        sublabel: "Commercial Freight & Priority Corridor Mobile",
      },
    ],
  },
  {
    caption: "OFFICES & HUBS:",
    items: [
      {
        text: "AMBASEL BLDG, 6TH & 7TH FL, WOLLO SEFER, ADDIS ABABA",
        href: "https://maps.google.com/?q=Ambasel+Building+Addis+Ababa",
        target: "_blank",
        sublabel: "Corporate Headquarters (6th Fl 607–610 & 7th Fl 701–702)",
      },
      {
        text: "BOLE BULBULA 14,000 M² HEAVY FLEET TERMINAL",
        sublabel: "Heavy Lift Rigging Yard, Bonded Staging & Workshop Facilities",
      },
    ],
  },
  {
    caption: "COMMUNICATION:",
    items: [
      {
        text: "LINKEDIN",
        href: "https://www.linkedin.com/company/express-transport-logistics",
        target: "_blank",
      },
      {
        text: "TELEGRAM",
        href: "https://t.me/expressptl",
        target: "_blank",
      },
      {
        text: "WHATSAPP",
        href: "https://wa.me/251911248830",
        target: "_blank",
      },
    ],
  },
];

export default function ContactInfoList() {
  return (
    <section className="relative py-16 sm:py-24 lg:py-36 bg-[#070B14] text-white border-b border-white/10 select-none">
      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12">
        <ul className="space-y-0">
          {INFO_ROWS.map((row, idx) => (
            <motion.li
              key={row.caption}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-10 sm:py-14 lg:py-20 border-t border-white/15 items-start"
            >
              {/* Left Column: Caption (.info-contacts__caption) */}
              <div className="lg:col-span-3">
                <span className="font-headline text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold text-[#FF5A1F] block">
                  {row.caption}
                </span>
              </div>

              {/* Right Column: Monumental Data Items (.info-contacts__data) */}
              <div className="lg:col-span-9 flex flex-col space-y-6 sm:space-y-8">
                {row.items.map((item) => (
                  <div key={item.text} className="flex flex-col">
                    <TextHoverRoll
                      text={item.text}
                      href={item.href}
                      target={item.target}
                      className="font-headline text-3xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-tight text-white uppercase leading-[0.92] hover:text-[#FF5A1F] transition-colors"
                    />
                    {item.sublabel && (
                      <span className="text-xs sm:text-sm text-slate-400 font-sans mt-2 tracking-normal">
                        {item.sublabel}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
