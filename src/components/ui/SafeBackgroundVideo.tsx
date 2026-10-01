"use client";

import React, { useEffect, useRef, useState } from "react";

interface SafeBackgroundVideoProps {
  src: string;
  poster: string;
  className?: string;
  containerClassName?: string;
  filterClass?: string;
  alt?: string;
}

/**
 * SafeBackgroundVideo
 * 
 * Solves the iOS Safari / Low Power Mode issue where the browser blocks autoplay
 * and slaps an unsightly native "play" button over background ambient videos.
 * 
 * 1. Always renders the first frame poster (<img>) as a rock-solid, crisp visual fallback.
 * 2. Explicitly configures DOM .muted and playsInline properties before calling play().
 * 3. Keeps the <video> element visually hidden (opacity-0) until playback is confirmed,
 *    preventing Safari's native shadow-DOM play button from ever appearing.
 * 4. Listens for the first touch/scroll gesture to silently kick off playback if Low Power Mode
 *    initially prevented autoplay.
 */
export default function SafeBackgroundVideo({
  src,
  poster,
  className = "w-full h-full object-cover",
  containerClassName = "w-full h-full relative overflow-hidden",
  filterClass = "filter brightness-[0.90] contrast-[1.05]",
  alt = "Express Transport & Logistics Fleet",
}: SafeBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Strict WebKit inline muted requirements
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("playsinline", "true");
    video.setAttribute("webkit-playsinline", "true");

    const attemptPlay = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay blocked (iOS Low Power Mode, battery saver, or browser policy)
            setIsPlaying(false);
          });
      }
    };

    attemptPlay();

    // If autoplay was prevented (e.g. iOS Low Power Mode), attempt to silently play
    // on the user's first touch or scroll gesture without showing any intrusive play UI.
    const handleFirstGesture = () => {
      if (video && video.paused) {
        attemptPlay();
      }
    };

    window.addEventListener("touchstart", handleFirstGesture, { once: true, passive: true });
    window.addEventListener("scroll", handleFirstGesture, { once: true, passive: true });
    window.addEventListener("click", handleFirstGesture, { once: true });

    return () => {
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
      window.removeEventListener("click", handleFirstGesture);
    };
  }, []);

  return (
    <div className={containerClassName}>
      {/* 
        1. FIRST-FRAME POSTER FALLBACK (IMAGE)
        Guaranteed to render instantly with zero play button, even if video is blocked or offline.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt={alt}
        className={`${className} ${filterClass} absolute inset-0 z-0 transition-opacity duration-1000 ${
          isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        loading="eager"
        decoding="async"
      />

      {/* 
        2. VIDEO ELEMENT
        Hidden with opacity-0 until actively playing so Safari NEVER draws its native play button.
      */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
        onPlaying={() => setIsPlaying(true)}
        onPause={() => {
          // If paused by OS (e.g., app switched or low battery limit)
          if (!videoRef.current?.seeking) {
            setIsPlaying(false);
          }
        }}
        className={`${className} ${filterClass} absolute inset-0 z-1 transition-opacity duration-700 ${
          isPlaying ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
