"use client";

import { useEffect, useState } from "react";

type PerformanceProfile = {
  isSafari: boolean;
  prefersReducedMotion: boolean;
  allowHeavyMotion: boolean;
  allowPointerEffects: boolean;
};

const DEFAULT_PROFILE: PerformanceProfile = {
  isSafari: false,
  prefersReducedMotion: false,
  allowHeavyMotion: true,
  allowPointerEffects: true,
};

function detectSafari(userAgent: string) {
  return /Safari/i.test(userAgent) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|Android/i.test(userAgent);
}

export function usePerformanceProfile(): PerformanceProfile {
  const [profile, setProfile] = useState<PerformanceProfile>(DEFAULT_PROFILE);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateProfile = () => {
      const isSafari = detectSafari(window.navigator.userAgent);
      const prefersReducedMotion = mediaQuery.matches;

      setProfile({
        isSafari,
        prefersReducedMotion,
        allowHeavyMotion: !isSafari && !prefersReducedMotion,
        allowPointerEffects: !isSafari && !prefersReducedMotion,
      });
    };

    updateProfile();
    mediaQuery.addEventListener("change", updateProfile);

    return () => {
      mediaQuery.removeEventListener("change", updateProfile);
    };
  }, []);

  return profile;
}
