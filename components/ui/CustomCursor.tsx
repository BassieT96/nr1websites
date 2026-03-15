"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Main cursor — fast follow
  const springConfig = { damping: 28, stiffness: 400, mass: 0.3 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  // Outer ring — slower, trailing follow
  const ringConfig = { damping: 20, stiffness: 180, mass: 0.8 };
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  useEffect(() => {
    setIsMounted(true);

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const cursorHoverEl = target.closest("[data-cursor-hover]");
      const cursorLabelEl = target.closest("[data-cursor-label]");

      if (cursorLabelEl) {
        setCursorLabel(cursorLabelEl.getAttribute("data-cursor-label") || "");
        setIsHovered(true);
      } else if (
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        cursorHoverEl
      ) {
        setCursorLabel("");
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setCursorLabel("");
      }
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isMounted || (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches)) {
    return null;
  }

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isPressed ? 6 : isHovered ? 0 : 8,
            height: isPressed ? 6 : isHovered ? 0 : 8,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className="bg-white rounded-full"
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isPressed ? 32 : isHovered ? (cursorLabel ? 100 : 56) : 36,
            height: isPressed ? 32 : isHovered ? (cursorLabel ? 100 : 56) : 36,
            borderWidth: isHovered ? 1.5 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="rounded-full border border-white/40 flex items-center justify-center"
        >
          {cursorLabel && isHovered && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="text-[10px] font-mono uppercase tracking-widest text-white whitespace-nowrap"
            >
              {cursorLabel}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
