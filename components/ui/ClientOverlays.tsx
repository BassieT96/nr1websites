"use client";

import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/components/ui/CustomCursor").then((mod) => ({ default: mod.CustomCursor })),
  { ssr: false }
);

const ScrollProgress = dynamic(
  () => import("@/components/ui/ScrollProgress").then((mod) => ({ default: mod.ScrollProgress })),
  { ssr: false }
);

export function ClientOverlays() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
    </>
  );
}
