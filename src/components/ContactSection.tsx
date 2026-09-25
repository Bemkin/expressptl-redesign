"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#070B14] relative">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <span className="text-[11px] font-extrabold tracking-[0.2em] text-[#FF5A1F] uppercase block mb-3">
              DIRECT CONTRACTING & DISPATCH
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white uppercase leading-[0.9] tracking-tight mb-8">
              START YOUR FREIGHT <br />
              ALLOCATION TODAY.
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mb-10">
              Speak with our senior freight dispatchers for direct corridor bookings, project cargo engineering surveys, or bonded warehousing contracts.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/15 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    24/7 FLEET DISPATCH HOTLINE
                  </span>
                  <a href="tel:+254700000000" className="text-lg font-bold text-white hover:text-[#FF5A1F] transition-colors">
                    +254 (0) 700 882 119
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">Continuous GPS Ops Room</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/15 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    COMMERCIAL INQUIRIES & TENDERS
                  </span>
                  <a href="mailto:ops@expressptl.com" className="text-lg font-bold text-white hover:text-[#FF5A1F] transition-colors">
                    operations@expressptl.com
                  </a>
                  <span className="text-xs text-slate-400 block mt-0.5">Quotes returned within 2 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[#FF5A1F]/15 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF5A1F]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    REGIONAL HEADQUARTERS & HUBS
                  </span>
                  <p className="text-sm font-bold text-white">
                    Port Reitz Road, Opposite Gate 4, Mombasa, Kenya
                  </p>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Branch Offices: Nairobi ICD • Kampala (Jinja Rd) • Kigali (KSEZ)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Inquiry Form */}
          <div className="lg:col-span-7 bg-[#0D1322] border border-white/10 rounded-2xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-headline text-4xl text-white uppercase mb-3">
                  INQUIRY TRANSMITTED SUCCESSFULLY
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto mb-8">
                  Our regional operations desk has received your freight parameters. A corridor logistics lead will review the specifications and deliver your formal quotation shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-white hover:bg-[#FF5A1F] text-[#0D1322] hover:text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  SUBMIT ANOTHER FREIGHT REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-headline text-3xl text-white uppercase mb-2">
                  REQUEST FORMAL FREIGHT PROPOSAL
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Fill in your cargo profile for an itemized transit breakdown including bonded customs escort options.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Mwangi"
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nile Mining Logistics Ltd"
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@company.com"
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+254 7..."
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Corridor / Route *
                    </label>
                    <select
                      required
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    >
                      <option value="">Select Destination Corridor</option>
                      <option value="mombasa-kampala">Mombasa → Kampala (Uganda)</option>
                      <option value="mombasa-kigali">Mombasa → Kigali (Rwanda)</option>
                      <option value="mombasa-juba">Mombasa → Juba (South Sudan)</option>
                      <option value="mombasa-goma">Mombasa → Goma / Bukavu (DRC)</option>
                      <option value="dar-lubumbashi">Dar es Salaam → Lubumbashi (DRC)</option>
                      <option value="lamu-addis">Lamu / Nairobi → Addis Ababa (Ethiopia)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Cargo Classification & Tonnage *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 60 MT Heavy Mach, 2x 40ft Containers"
                      className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Cargo Specifics, Equipment Needs & Target Date
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Provide details on dimensions, dangerous goods ADR classification, customs bonded requirements, or special crane offloading..."
                    className="w-full bg-[#080C16] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#FF5A1F] hover:bg-[#E04810] text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-xl shadow-[#FF5A1F]/25 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>SUBMIT FREIGHT REQUEST</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
