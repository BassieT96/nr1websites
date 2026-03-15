"use client";

import dynamic from "next/dynamic";

// ssr:false must live in a Client Component — not allowed in Server Components
const CinematicBackground = dynamic(
  () => import("@/components/ui/cinematic-background").then((m) => m.CinematicBackground),
  { ssr: false }
);

const StickyMobileCTA = dynamic(
  () => import("@/components/ui/StickyMobileCTA").then((m) => m.StickyMobileCTA),
  { ssr: false }
);

export function ClientDecorations() {
  return (
    <>
      <CinematicBackground />
      <StickyMobileCTA />
    </>
  );
}
