"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const { isSafari } = usePerformanceProfile();

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      ticking = false;
      const nextVisible = window.scrollY > 500;
      setIsVisible((current) => (current === nextVisible ? current : nextVisible));
    };

    const onScroll = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 left-4 right-4 z-50 transition duration-300 md:hidden",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-8 opacity-0",
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border border-border p-1.5 shadow-card",
          isSafari ? "bg-surface-strong/95" : "bg-surface-strong/80 backdrop-blur-xl",
        )}
      >
        <a
          href="/contact"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-accent px-4 py-3.5 text-sm font-semibold text-white transition-transform active:scale-95 shadow-[0_0_15px_rgba(0,170,255,0.4)]"
        >
          Start je project
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="https://wa.me/31600000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-success transition-transform active:scale-95"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-5 w-5 fill-current" />
        </a>
      </div>
    </div>
  );
}
