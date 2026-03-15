"use client";

import { useEffect, useLayoutEffect, useState } from "react";

// useLayoutEffect fires before browser paint; useEffect is the SSR fallback
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

type PerformanceProfile = {
  isSafari: boolean;
  prefersReducedMotion: boolean;
  allowHeavyMotion: boolean;
  allowPointerEffects: boolean;
};

function detectSafari(userAgent: string) {
  return /Safari/i.test(userAgent) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|Android/i.test(userAgent);
}

function buildProfile(): PerformanceProfile {
  const isSafari = detectSafari(window.navigator.userAgent);
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return {
    isSafari,
    prefersReducedMotion,
    allowHeavyMotion: !isSafari && !prefersReducedMotion,
    allowPointerEffects: !isSafari && !prefersReducedMotion,
  };
}

const DEFAULT_PROFILE: PerformanceProfile = {
  isSafari: false,
  prefersReducedMotion: false,
  allowHeavyMotion: true,
  allowPointerEffects: true,
};

export function usePerformanceProfile(): PerformanceProfile {
  // Lazy initializer: runs synchronously on first client render, so Safari is
  // already detected before framer-motion ever registers initial animation state.
  // On the server (SSR), window is undefined so we fall back to DEFAULT_PROFILE.
  const [profile, setProfile] = useState<PerformanceProfile>(() => {
    if (typeof window === "undefined") return DEFAULT_PROFILE;
    return buildProfile();
  });

  useIsomorphicLayoutEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setProfile(buildProfile());
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  return profile;
}
