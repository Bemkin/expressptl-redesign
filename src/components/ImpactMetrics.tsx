"use client";

import React from "react";

const METRICS = [
  {
    num: "1.2M+",
    label: "METRIC TONS CARGO MOVED",
    sub: "Across industrial manufacturing, mining & humanitarian sectors",
  },
  {
    num: "14",
    label: "CROSS-BORDER HIGHWAY ARTERIES",
    sub: "Direct corridor connectivity through 7 East & Central African nations",
  },
  {
    num: "99.4%",
    label: "ON-TIME TRANSIT DELIVERY RATE",
    sub: "Guaranteed SLA schedules monitored via dual satellite GPS",
  },
  {
    num: "0",
    label: "LOST CARGO INCIDENTS",
    sub: "Flawless physical cargo integrity with full marine/road insurance",
  },
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-[#080C16] border-y border-white/10">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-white/15 transition-all duration-300"
            >
              <span className="font-headline text-5xl sm:text-6xl text-white font-normal block leading-none mb-3">
                {metric.num}
              </span>
              <span className="text-xs font-extrabold tracking-wider text-[#FF5A1F] uppercase block mb-2">
                {metric.label}
              </span>
              <p className="text-xs text-slate-400 leading-relaxed">
                {metric.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
