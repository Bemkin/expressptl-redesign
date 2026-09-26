"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface MvpButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  className?: string;
  showArrow?: boolean;
}

export default function MvpButton({
  href,
  onClick,
  text,
  className = "",
  showArrow = false,
}: MvpButtonProps) {
  const characters = text.split("");

  const content = (
    <>
      <span className="mvp-text-clip">
        {/* Line 1: Visible characters rolling UP and out on hover */}
        <span className="inline-flex">
          {characters.map((char, i) => (
            <span
              key={`c1-${i}`}
              className="mvp-char-primary"
              style={{ transitionDelay: `${i * 14}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>

        {/* Line 2: Incoming characters rolling UP from below into view */}
        <span className="inline-flex absolute top-0 left-0 w-full pointer-events-none">
          {characters.map((char, i) => (
            <span
              key={`c2-${i}`}
              className="mvp-char-secondary"
              style={{ transitionDelay: `${i * 14}ms` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </span>

      {showArrow && (
        <ArrowRight className="w-4 h-4 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  const baseClasses = `group mvp-bubble-btn font-headline text-lg sm:text-xl tracking-[0.06em] uppercase px-8 sm:px-10 py-4 sm:py-4.5 rounded-lg shadow-2xl ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClasses} onClick={onClick}>
      {content}
    </button>
  );
}
