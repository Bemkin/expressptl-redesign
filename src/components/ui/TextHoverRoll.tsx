"use client";

import React, { useState } from "react";
import Link from "next/link";

interface TextHoverRollProps {
  text: string;
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
  as?: "a" | "span" | "div";
}

/**
 * Reusable MVP TextHoverRoll:
 * - Staggered upward character roll on hover
 * - Primary character line rolls up from 0% to -120%
 * - Secondary clone rolls up from 120% to 0%
 */
export default function TextHoverRoll({
  text,
  href,
  className = "",
  target,
  onClick,
  as = "a",
}: TextHoverRollProps) {
  const [hovered, setHovered] = useState(false);
  const chars = text.split("");

  const content = (
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
    if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return (
        <a
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          onClick={onClick}
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className="inline-block">
        {content}
      </Link>
    );
  }

  if (as === "div") {
    return <div onClick={onClick}>{content}</div>;
  }

  return <span onClick={onClick}>{content}</span>;
}
