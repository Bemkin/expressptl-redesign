"use client";

import React from "react";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  viewportMargin?: string;
  once?: boolean;
  animate?: boolean; // Optional explicit trigger override
}

/**
 * AnimatedText: Reverse-Engineered from mvplogistics.eu (.animated-text & .main-animated-text)
 * - transformOrigin: "50% 0%" (top center origin)
 * - scaleY: 0 -> 1 (squashed flat against ceiling, stretches downward)
 * - yPercent / y: -15% -> 0%
 * - ease: "back" (overshoot spring cubic-bezier [0.175, 0.885, 0.32, 1.275])
 * - stagger: 0.03s ripple per character
 */
export default function AnimatedText({
  text,
  as: Component = "h2",
  className = "",
  delay = 0,
  stagger = 0.03,
  duration = 0.75,
  viewportMargin = "-5%",
  once = true,
  animate: explicitAnimate,
}: AnimatedTextProps) {
  // Support multi-line headlines using \n (both literal \n string and real newline)
  const lines = text.replace(/\\n/g, "\n").split("\n");

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const charVariants: Variants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      y: "-15%",
      transformOrigin: "50% 0%",
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      y: "0%",
      transformOrigin: "50% 0%",
      transition: {
        duration,
        ease: [0.175, 0.885, 0.32, 1.275], // GSAP back.out(1.7) overshoot curve
      },
    },
  };

  const MotionComponent = motion[Component] as React.ComponentType<HTMLMotionProps<"div">>;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView={explicitAnimate === undefined ? "visible" : undefined}
      animate={explicitAnimate !== undefined ? (explicitAnimate ? "visible" : "hidden") : undefined}
      viewport={{ once, margin: viewportMargin }}
      className={`inline-block ${className}`}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block overflow-hidden">
          {line.split(" ").map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
              {Array.from(word).map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  variants={charVariants}
                  className="inline-block will-change-transform"
                  style={{ transformOrigin: "50% 0%" }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </MotionComponent>
  );
}
