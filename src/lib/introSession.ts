"use client";

/**
 * Session tracker for the cinematic homepage preloader.
 * Ensures the preloader animation only plays once per browsing session.
 * Subsequent visits to HOME (or client-side navigation between pages)
 * load the homepage immediately with zero delay.
 */

const SESSION_KEY = "express_ptl_preloader_seen";

// Module-level in-memory state: persists across client-side router transitions
let inMemorySeen = false;

export function hasSeenIntroSession(): boolean {
  if (inMemorySeen) return true;
  if (typeof window !== "undefined") {
    try {
      if (sessionStorage.getItem(SESSION_KEY) === "true") {
        inMemorySeen = true;
        return true;
      }
    } catch {
      // Storage access disabled or unavailable (e.g. strict private mode)
    }
  }
  return false;
}

export function markIntroAsSeen(): void {
  inMemorySeen = true;
  if (typeof window !== "undefined") {
    try {
      sessionStorage.setItem(SESSION_KEY, "true");
    } catch {
      // Storage access disabled or unavailable
    }
  }
}
