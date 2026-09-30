"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";

interface ExecutiveContact {
  post: string;
  name: string;
  photo: string;
  email: string;
  phone: string;
  phoneRaw: string;
}

const EXECUTIVES: ExecutiveContact[] = [
  {
    post: "General Manager",
    name: "Temesgen Yohannes",
    photo: "/assets/team/temesgen_portrait.jpg",
    email: "express@expressptl.com",
    phone: "+251 11 470 2031",
    phoneRaw: "+251114702031",
  },
  {
    post: "Import Export & Port Operations",
    name: "Melaku Yenew",
    photo: "/assets/team/melaku_portrait.jpg",
    email: "operations@expressptl.com",
    phone: "+251 91 124 8830",
    phoneRaw: "+251911248830",
  },
];

export default function ContactHero() {
  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-24 bg-[#070B14] text-white border-b border-white/10 select-none overflow-hidden">
      {/* Subtle ambient orange/navy background glows */}
      <div className="absolute top-20 left-10 w-125 h-125 bg-[#FF5A1F]/5 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-10 w-150 h-150 bg-[#1F1F61]/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ========================================================
              LEFT COLUMN: MONUMENTAL TITLE & DIRECT MESSAGING
              (MVP .hero-contacts__container-inner)
             ======================================================== */}
          <div className="lg:col-span-4 flex flex-col justify-between min-h-125 lg:min-h-165">
            <div>
              {/* Eyebrow Tag */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
                <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                  REGIONAL CONTACT DIRECTORY
                </span>
              </motion.div>

              {/* Monumental Title */}
              <div className="mb-10 lg:mb-16">
                <AnimatedText
                  text={"OUR\nCONTACTS"}
                  as="h1"
                  delay={0.3}
                  stagger={0.04}
                  className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[10rem] 2xl:text-[11.5rem] uppercase leading-[0.80] tracking-[-0.03em] text-white"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm sm:text-base text-slate-300 font-sans max-w-sm leading-relaxed mb-8"
              >
                Direct access to our senior logistics commanders and 24/7 Horn of Africa heavy fleet dispatch control room.
              </motion.p>
            </div>

            {/* Quick Messaging Channels (.hero-contacts__data) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="border-t border-white/15 pt-2"
            >
              {/* Telegram */}
              <a
                href="https://t.me/expressptl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-white/10 transition-colors hover:border-[#FF5A1F]/50"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-headline w-24">
                    Telegram:
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide group-hover:text-[#FF5A1F] transition-colors">
                    +251 91 124 8830
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0E1528] border border-white/15 text-white group-hover:bg-[#FF5A1F] group-hover:text-white group-hover:border-[#FF5A1F] transition-all flex items-center justify-center overflow-hidden">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/251911248830"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 border-b border-white/10 transition-colors hover:border-[#FF5A1F]/50"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="text-xs sm:text-sm uppercase tracking-widest text-slate-400 font-headline w-24">
                    WhatsApp:
                  </span>
                  <span className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide group-hover:text-[#FF5A1F] transition-colors">
                    +251 91 124 8830
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0E1528] border border-white/15 text-white group-hover:bg-[#FF5A1F] group-hover:text-white group-hover:border-[#FF5A1F] transition-all flex items-center justify-center overflow-hidden">
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-sans gap-1.5">
                <span>Hours: Mon – Sat 08:00 – 18:00 EAT</span>
                <span className="text-[#FF5A1F] font-semibold">24/7 Operations Desk</span>
              </div>
            </motion.div>
          </div>

          {/* ========================================================
              RIGHT COLUMN: EXECUTIVE LEADERSHIP PORTRAIT CARDS
              (MVP .hero-contacts__persons)
             ======================================================== */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8">
            {EXECUTIVES.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 + idx * 0.2 }}
                className="group flex flex-col justify-between border-b border-white/15 pb-6"
              >
                {/* Photo with Floating Badge Overlay */}
                <div className="relative w-full aspect-4/5 rounded-2xl overflow-hidden bg-[#0E1528] border border-white/10 mb-6 shadow-2xl">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter blur-md scale-105"
                  />

                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* MVP Signature Floating Badge Overlay (.hero-contacts__person-heading) */}
                  <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-[#1B1E3D] px-5 py-3 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/40 max-w-[85%] select-none">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mb-0.5 font-sans">
                      {person.post}
                    </span>
                    <span className="font-headline text-lg sm:text-xl text-[#1B1E3D] uppercase tracking-wide font-extrabold block leading-none">
                      {person.name}
                    </span>
                  </div>

                  {/* Representative Placeholder Tag */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white/90 pointer-events-none select-none flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                    <span>Representative Photo</span>
                  </div>
                </div>

                {/* Bottom Meta Row (.hero-contacts__person-bottom) */}
                <div className="flex items-start justify-between gap-4 pt-2">
                  {/* Email */}
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 font-headline mb-1">
                      E-MAIL:
                    </span>
                    <a
                      href={`mailto:${person.email}`}
                      className="font-headline text-lg sm:text-xl lg:text-[22px] text-white hover:text-[#FF5A1F] transition-colors tracking-wide"
                    >
                      {person.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col items-end text-right">
                    <span className="text-[11px] uppercase tracking-widest text-slate-400 font-headline mb-1">
                      PHONE NUMBER:
                    </span>
                    <a
                      href={`tel:${person.phoneRaw}`}
                      className="font-headline text-lg sm:text-xl lg:text-[22px] text-white hover:text-[#FF5A1F] transition-colors tracking-wide whitespace-nowrap"
                    >
                      {person.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
