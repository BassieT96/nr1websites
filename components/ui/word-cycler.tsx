"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePerformanceProfile } from "@/lib/use-performance-profile";
import { cn } from "@/lib/utils";

interface WordCyclerProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function WordCycler({ words, interval = 2500, className }: WordCyclerProps) {
  const [index, setIndex] = useState(0);
  const { allowHeavyMotion } = usePerformanceProfile();

  useEffect(() => {
    if (!allowHeavyMotion) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [allowHeavyMotion, words.length, interval]);

  if (!allowHeavyMotion) {
    return (
      <span
        className={cn("bg-gradient-to-r from-[#E9C86D] via-[#F59F56] to-[#3F57F2] bg-clip-text px-[0.2em] text-transparent", className)}
      >
        {words[0]}
      </span>
    );
  }

  return (
    <span className={cn("relative inline-flex overflow-hidden align-bottom justify-center px-[0.2em] -mx-[0.2em] py-[0.1em] -my-[0.1em]", className)}>
      <span className="invisible">
        {/* Render the longest word invisibly to maintain fixed width and prevent layout shift */}
        {words.reduce((a, b) => (a.length > b.length ? a : b))}
      </span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0, rotateX: -90 }}
          animate={{ y: "0%", opacity: 1, rotateX: 0 }}
          exit={{ y: "-100%", opacity: 0, rotateX: 90 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
          }}
          style={{ 
            transformOrigin: "50% 50% -50px",
            backgroundImage: "linear-gradient(to right, #E9C86D, #F59F56, #F7716A, #C75ACC, #7A58E8, #3F57F2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent"
          }}
          className="absolute inset-0 flex items-center justify-center w-full h-full"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
