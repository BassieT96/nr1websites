"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useScroll, motion, AnimatePresence } from "framer-motion";

export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      // Show CTA only after scrolling past the hero (approx 500px)
      if (latest > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-border bg-surface-strong/80 backdrop-blur-xl shadow-card">
            <a
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-semibold py-3.5 px-4 rounded-full text-sm transition-transform active:scale-95 shadow-[0_0_15px_rgba(0,170,255,0.4)]"
            >
              Start je project
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/31600000000" // Vervang door correct nummer
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-[52px] h-[52px] flex items-center justify-center bg-white/5 border border-white/10 text-success rounded-full transition-transform active:scale-95"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
