"use client";

import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import { UserCheck, Shield, Briefcase, Award, Wrench, Radio } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  department: string;
  desc: string;
  icon: React.ReactNode;
}

const TEAM: TeamMember[] = [
  {
    name: "Temesgen Yohannes",
    role: "General Manager",
    initials: "TY",
    department: "Executive Leadership",
    desc: "Oversees executive strategy, multilateral stakeholder relations, and long-term fleet asset development across Ethiopia and East Africa.",
    icon: <Award className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    name: "Melaku Yenew",
    role: "Import Export Manager",
    initials: "MY",
    department: "Customs & Port Operations",
    desc: "Directs maritime liaison, bonded warehouse staging, and priority customs clearance at Djibouti, Galafi, and Modjo terminals.",
    icon: <Briefcase className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    name: "Solomon Zemene",
    role: "Human Resources Manager",
    initials: "SZ",
    department: "Human Capital & Safety",
    desc: "Manages driver recruitment, defensive transport certifications, UN compliance audits, and driver welfare protocols.",
    icon: <UserCheck className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    name: "Belaynesh Bemrew",
    role: "Finance Manager",
    initials: "BB",
    department: "Financial Governance",
    desc: "Governs corporate fiscal integrity, cross-border currency compliance, asset financing, and transparent institutional reporting.",
    icon: <Shield className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    name: "Moges Bayeh",
    role: "Transport Technical Manager",
    initials: "MB",
    department: "Fleet Engineering & Rigging",
    desc: "Leads our in-house engineering workshop, preventive maintenance regimens, and synchronous heavy-lift rigging setups.",
    icon: <Wrench className="w-5 h-5 text-[#FF5A1F]" />,
  },
  {
    name: "Matyas, Biruk, Mekuria",
    role: "Operations Directorate",
    initials: "OPS",
    department: "24/7 Dispatch Control",
    desc: "Supervises live route telemetrics, satellite convoy tracking, and direct emergency highway response around the clock.",
    icon: <Radio className="w-5 h-5 text-[#FF5A1F]" />,
  },
];

export default function AboutTeamSection() {
  return (
    <section className="py-24 sm:py-36 bg-[#070B14] relative border-b border-white/5 select-none">
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header Block */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.25em] text-[#FF5A1F] uppercase">
              EXECUTIVE & OPERATIONAL LEADERSHIP
            </span>
          </div>

          <AnimatedText
            text="MEET OUR TEAM BEHIND OUR SUCCESS!"
            as="h2"
            delay={0.1}
            stagger={0.03}
            className="font-headline text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95] mb-6"
          />

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-light leading-relaxed max-w-3xl">
            Our success is driven by the passion and precision of our logistics professionals. Whether navigating busy routes or managing complex freight, our team works as one to ensure your cargo reaches its destination safely and on schedule. We don&apos;t just move goods — we deliver peace of mind.
          </p>
        </div>

        {/* 6-Card Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl bg-[#0D1322] border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 p-8 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5A1F]/10 rounded-full blur-2xl group-hover:bg-[#FF5A1F]/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Top Badge & Initials Avatar */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#1F234B] to-[#151733] border border-white/15 flex items-center justify-center font-headline text-2xl text-[#FF5A1F] shadow-md group-hover:scale-105 transition-transform duration-300">
                    {member.initials}
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {member.icon}
                  </div>
                </div>

                <span className="text-[11px] font-extrabold tracking-widest text-[#FF5A1F] uppercase block mb-1">
                  {member.department}
                </span>

                <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-tight leading-snug mb-2 group-hover:text-white transition-colors">
                  {member.name}
                </h3>

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-4">
                  {member.role}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {member.desc}
                </p>
              </div>

              {/* Verified Leadership Status */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="uppercase tracking-wider font-medium">Headquarters Assigned</span>
                <span className="text-[#FF5A1F] font-mono">Active</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
