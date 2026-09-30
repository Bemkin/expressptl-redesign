"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue, UseScrollOptions } from "framer-motion";

interface ReadingScrubTextProps {
  text: string;
  className?: string;
  offset?: NonNullable<UseScrollOptions["offset"]>;
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

/**
 * Single word component with scroll-linked opacity interpolation
 */
function ScrubWord({ children, progress, range }: WordProps) {
  // Illuminates from 18% dim watermark to 100% bright white text
  const opacity = useTransform(progress, range, [0.18, 1]);
  // Subtle vertical micro-elevation (2px -> 0px) as words illuminate
  const y = useTransform(progress, range, [2, 0]);

  return (
    <span className="inline-block mr-[0.28em] my-[0.04em] whitespace-nowrap">
      <motion.span
        style={{ opacity, y }}
        className="inline-block will-change-[opacity,transform] text-white"
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * ReadingScrubText: Reverse-Engineered from mvplogistics.eu (.reading-block)
 * Words illuminate progressively from 18% dim watermark to 100% crisp white
 * in direct synchronization with the user's scroll speed.
 */
export default function ReadingScrubText({
  text,
  className = "",
  offset = ["start 0.85", "end 0.40"],
}: ReadingScrubTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const words = text.split(" ");
  const total = words.length;

  return (
    <p ref={containerRef} className={`select-none ${className}`}>
      {words.map((word, i) => {
        // Calculate overlapping staggered window for each word
        const start = i / total;
        const end = Math.min(1, start + (1.5 / total));
        return (
          <ScrubWord
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
          >
            {word}
          </ScrubWord>
        );
      })}
    </p>
  );
}
