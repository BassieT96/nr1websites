"use client";

import React from "react";
import { motion } from "framer-motion";

export function BorderBeam({
    duration = 8,
    colorFrom = "#6366F1",
    colorTo = "#A855F7",
    className = ""
}: {
    duration?: number;
    colorFrom?: string;
    colorTo?: string;
    className?: string;
}) {
    return (
        <div className={`pointer-events-none absolute -inset-[1px] z-20 rounded-[inherit] overflow-hidden ${className}`}>
            {/* 
                Primary sharp border line 
                Using mask-composite to cut out the center, leaving only 1px border.
            */}
            <div
                className="absolute inset-0 rounded-[inherit] p-[1.5px]"
                style={{
                    maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
                    maskClip: "content-box, border-box",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "destination-out",
                }}
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20deg,var(--color-from)_80deg,var(--color-to)_180deg,var(--color-from)_280deg,transparent_340deg)]"
                    style={{
                        willChange: "transform",
                        // @ts-expect-error - dynamic CSS variables
                        "--color-from": colorFrom,
                        "--color-to": colorTo,
                    }}
                />
            </div>

            {/* 
                Secondary soft glow layer
                Reduced blur radius for performance.
            */}
            <div
                className="absolute inset-[-5px] rounded-[inherit] p-[5px] blur-[12px] opacity-[0.15]"
                style={{
                    maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
                    maskClip: "content-box, border-box",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "destination-out",
                }}
            >
                <motion.div
                    initial={{ rotate: 0 }}
                    whileInView={{ rotate: 360 }}
                    transition={{
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_20deg,var(--color-from)_80deg,var(--color-to)_180deg,var(--color-from)_280deg,transparent_340deg)]"
                    style={{
                        willChange: "transform",
                        // @ts-expect-error - dynamic CSS variables
                        "--color-from": colorFrom,
                        "--color-to": colorTo,
                    }}
                />
            </div>
        </div>
    );
}
