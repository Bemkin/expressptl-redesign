"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Truck, CheckCircle2, Send, Phone, Mail } from "lucide-react";
import { submitInquiry } from "@/lib/submitInquiry";

// Destinations taken from Express PTL's published aid-cargo delivery record.
const DESTINATIONS = [
  "Addis Ababa",
  "Adama",
  "Bahir Dar",
  "Dessie",
  "Dire Dawa",
  "Hawassa",
  "Kombolcha",
  "Mekelle",
  "Nefas Mewcha",
  "Semera",
  "Other / not sure yet",
];

const CARGO_TYPES = [
  { id: "container", label: "Containerized cargo", desc: "20ft / 40ft containers" },
  { id: "bulk", label: "Bulk cargo", desc: "Grain, fertilizer, raw materials" },
  { id: "commercial", label: "Commercial shipments", desc: "Machinery, steel, spare parts" },
  { id: "humanitarian", label: "Humanitarian aid cargo", desc: "Relief food and supplies" },
];

const TRUCK_CAPACITY_MT = 40;

const EMPTY_CONTACT = { fullName: "", company: "", phone: "", email: "", website: "" };

const inputClass =
  "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 font-sans text-sm focus:border-[#FF5A1F] focus:outline-none transition-colors";
const labelClass = "text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline block mb-2";

export default function OperationsCalculatorSection() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState(DESTINATIONS[0]);
  const [cargoType, setCargoType] = useState(CARGO_TYPES[0].id);
  const [tonnage, setTonnage] = useState(40);
  const [includeCustoms, setIncludeCustoms] = useState(true);
  const [details, setDetails] = useState("");
  const [contact, setContact] = useState(EMPTY_CONTACT);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const selectedCargo = CARGO_TYPES.find((c) => c.id === cargoType) ?? CARGO_TYPES[0];
  const trucksNeeded = Math.max(1, Math.ceil(tonnage / TRUCK_CAPACITY_MT));

  const updateContact = (field: keyof typeof EMPTY_CONTACT) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setContact((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    const cargo = [
      `From: ${origin || "not specified"}`,
      `To: ${destination}`,
      `Cargo: ${selectedCargo.label}`,
      `Approx. weight: ${tonnage} MT (~${trucksNeeded} truck${trucksNeeded > 1 ? "s" : ""})`,
      `Customs clearance needed: ${includeCustoms ? "yes" : "no"}`,
      details && `Notes: ${details}`,
    ]
      .filter(Boolean)
      .join("\n");
    try {
      await submitInquiry({ ...contact, cargo, source: "operations-quote" });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setContact(EMPTY_CONTACT);
    setOrigin("");
    setDetails("");
  };

  return (
    <section id="calculator" className="py-24 sm:py-32 lg:py-40 bg-[#070B14] text-white border-b border-white/10 select-none relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#FF5A1F]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-[1880px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* ========================================================
            HEADER ROW: TITLE & EXPLANATION
           ======================================================== */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#FF5A1F] uppercase font-headline">
                SECTION 03 • REQUEST A QUOTE
              </span>
            </div>
            <h2 className="font-headline text-4xl sm:text-6xl lg:text-7xl xl:text-8xl text-white uppercase tracking-tight leading-[0.92]">
              TELL US ABOUT <br className="hidden sm:inline" />
              YOUR SHIPMENT.
            </h2>
          </div>

          <p className="text-sm text-slate-300 font-sans max-w-lg leading-relaxed">
            Share the route, cargo and approximate weight. Our team will review it and come back to you with a quotation and a transport plan.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            className="rounded-3xl bg-[#0E1528] border border-white/10 p-10 sm:p-16 shadow-2xl text-center max-w-3xl mx-auto"
          >
            <div className="w-16 h-16 rounded-full bg-[#FF5A1F]/20 text-[#FF5A1F] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
            </div>
            <h3 className="font-headline text-3xl sm:text-4xl text-white uppercase mb-3">
              QUOTE REQUEST RECEIVED
            </h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto mb-8 font-sans">
              Thank you. Our team at the Ambasel Building office will review your shipment details and get back to you.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="py-3 px-8 rounded-xl bg-white text-[#0E1224] font-headline text-lg uppercase tracking-wider hover:bg-[#FF5A1F] hover:text-white transition-colors cursor-pointer"
            >
              REQUEST ANOTHER QUOTE
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} aria-busy={isLoading} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Honeypot: off-screen and hidden from assistive tech; only bots fill it */}
            <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
              <label htmlFor="quote-website">Website</label>
              <input id="quote-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={contact.website} onChange={updateContact("website")} />
            </div>

            {/* LEFT: SHIPMENT DETAILS (lg:col-span-7) */}
            <fieldset className="lg:col-span-7 rounded-3xl bg-[#0D1322] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-8">
              <legend className="sr-only">Shipment details</legend>

              {/* 1. Origin & Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="quote-origin" className={labelClass}>
                    PICK-UP LOCATION
                  </label>
                  <input
                    id="quote-origin"
                    name="origin"
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. port of entry, warehouse or city"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="quote-destination" className={labelClass}>
                    DESTINATION
                  </label>
                  <select
                    id="quote-destination"
                    name="destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className={inputClass}
                  >
                    {DESTINATIONS.map((d) => (
                      <option key={d} value={d} className="bg-[#0D1322] text-white">
                        {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 2. Cargo type */}
              <div role="radiogroup" aria-labelledby="quote-cargo-label">
                <span id="quote-cargo-label" className={`${labelClass} mb-3`}>
                  CARGO TYPE
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {CARGO_TYPES.map((type) => {
                    const isChecked = cargoType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        role="radio"
                        aria-checked={isChecked}
                        onClick={() => setCargoType(type.id)}
                        className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                          isChecked
                            ? "bg-[#0E1528] border-[#FF5A1F] shadow-md shadow-[#FF5A1F]/15"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20"
                        }`}
                      >
                        <span className="font-headline text-sm uppercase text-white font-bold block mb-1">
                          {type.label}
                        </span>
                        <span className="text-[11px] text-slate-400 font-sans">{type.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Approximate weight */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor="quote-tonnage" className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-headline">
                    APPROXIMATE WEIGHT
                  </label>
                  <span className="font-headline text-2xl text-[#FF5A1F] font-bold">
                    {tonnage} METRIC TONS
                  </span>
                </div>
                <input
                  id="quote-tonnage"
                  type="range"
                  min={1}
                  max={400}
                  value={tonnage}
                  onChange={(e) => setTonnage(Number(e.target.value))}
                  className="w-full h-2.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF5A1F]"
                />
                <div className="flex items-center gap-2 text-xs text-slate-400 font-sans mt-3">
                  <Truck className="w-4 h-4 text-[#FF5A1F]" aria-hidden="true" />
                  <span>
                    About {trucksNeeded} truck{trucksNeeded > 1 ? "s" : ""} at {TRUCK_CAPACITY_MT} MT each. Our fleet of 76 trucks moves up to 2,916 MT at a time.
                  </span>
                </div>
              </div>

              {/* 4. Customs clearance */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#FF5A1F] shrink-0" aria-hidden="true" />
                  <div>
                    <span id="quote-customs-label" className="font-headline text-sm uppercase text-white font-bold block">
                      I NEED CUSTOMS CLEARANCE
                    </span>
                    <span className="text-xs text-slate-400 font-sans">
                      We can handle customs clearing and cargo forwarding for you.
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={includeCustoms}
                  aria-labelledby="quote-customs-label"
                  onClick={() => setIncludeCustoms(!includeCustoms)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors cursor-pointer shrink-0 ${
                    includeCustoms ? "bg-[#FF5A1F]" : "bg-white/10"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      includeCustoms ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* 5. Notes */}
              <div>
                <label htmlFor="quote-details" className={labelClass}>
                  ANYTHING ELSE WE SHOULD KNOW (OPTIONAL)
                </label>
                <textarea
                  id="quote-details"
                  name="details"
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. number of containers, preferred dates, special handling"
                  className={`${inputClass} resize-none`}
                />
              </div>
            </fieldset>

            {/* RIGHT: CONTACT DETAILS (lg:col-span-5) */}
            <fieldset className="lg:col-span-5 rounded-3xl bg-[#0E1528] border border-white/10 p-8 sm:p-12 shadow-2xl flex flex-col gap-5">
              <legend className="sr-only">Your contact details</legend>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF5A1F] font-headline">
                  YOUR DETAILS
                </span>
                <span className="text-xs font-mono text-slate-400">* REQUIRED</span>
              </div>

              <div>
                <label htmlFor="quote-fullName" className={labelClass}>FULL NAME *</label>
                <input id="quote-fullName" name="fullName" type="text" autoComplete="name" required value={contact.fullName} onChange={updateContact("fullName")} placeholder="e.g. Dawit Haile" className={inputClass} />
              </div>
              <div>
                <label htmlFor="quote-company" className={labelClass}>COMPANY / ORGANIZATION</label>
                <input id="quote-company" name="company" type="text" autoComplete="organization" value={contact.company} onChange={updateContact("company")} placeholder="e.g. importer, manufacturer or aid agency" className={inputClass} />
              </div>
              <div>
                <label htmlFor="quote-phone" className={labelClass}>PHONE NUMBER *</label>
                <input id="quote-phone" name="phone" type="tel" autoComplete="tel" required value={contact.phone} onChange={updateContact("phone")} placeholder="+251 91 124 8830" className={inputClass} />
              </div>
              <div>
                <label htmlFor="quote-email" className={labelClass}>E-MAIL ADDRESS</label>
                <input id="quote-email" name="email" type="email" autoComplete="email" value={contact.email} onChange={updateContact("email")} placeholder="client@company.com" className={inputClass} />
              </div>

              {error && (
                <p role="alert" className="rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200 font-sans">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-5 rounded-2xl bg-[#FF5A1F] hover:bg-[#FF5A1F]/90 disabled:opacity-60 disabled:cursor-wait text-white font-headline text-xl sm:text-2xl tracking-wider uppercase flex items-center justify-center gap-3 cursor-pointer shadow-[0_15px_40px_rgba(255,90,31,0.25)] transition-colors mt-2"
              >
                <span>{isLoading ? "SENDING…" : "REQUEST A QUOTE"}</span>
                <Send className="w-5 h-5" aria-hidden="true" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-400 font-sans">
                <a href="tel:+251114702031" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#FF5A1F]" aria-hidden="true" />
                  <span>+251 11 470 2031</span>
                </a>
                <a href="mailto:express@expressptl.com" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" aria-hidden="true" />
                  <span>express@expressptl.com</span>
                </a>
              </div>
              <span className="text-[11px] text-slate-500 font-sans">Office hours: Mon–Sat 8:00–18:30, Sunday closed.</span>
            </fieldset>
          </form>
        )}
      </div>
    </section>
  );
}
