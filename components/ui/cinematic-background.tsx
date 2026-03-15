"use client";

import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

export function CinematicBackground({ className }: { className?: string }) {
  const { allowHeavyMotion } = usePerformanceProfile();

  if (!allowHeavyMotion) {
    return (
      <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 15% 20%, rgba(54,98,227,0.06) 0%, transparent 35%), radial-gradient(circle at 85% 25%, rgba(24,24,27,0.05) 0%, transparent 32%), radial-gradient(circle at 30% 85%, rgba(54,98,227,0.04) 0%, transparent 30%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className={cn("fixed inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      {/* Subtle Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none noise-bg" />

      {/* Floating Orbs — CSS keyframes, compositor-only, no JS */}
      <div className="absolute inset-0">
        <div
          className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/5 blur-[120px]"
          style={{ animation: "orb-1 20s linear infinite" }}
        />
        <div
          className="absolute top-[40%] -right-[15%] w-[45%] h-[45%] rounded-full bg-primary/3 blur-[140px]"
          style={{ animation: "orb-2 25s linear infinite" }}
        />
        <div
          className="absolute -bottom-[10%] left-[10%] w-[40%] h-[40%] rounded-full bg-accent/3 blur-[110px]"
          style={{ animation: "orb-3 22s linear infinite" }}
        />
      </div>
    </div>
  );
}
