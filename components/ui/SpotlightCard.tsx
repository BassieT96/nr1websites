"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { BorderBeam } from "./BorderBeam";

export function SpotlightCard({
    children,
    className = "",
    spotlightColor = "rgba(99, 102, 241, 0.08)",
    showBorderBeam = true,
    beamDuration = 10
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
    showBorderBeam?: boolean;
    beamDuration?: number;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            ref={containerRef}
            className={`group relative overflow-hidden rounded-[24px] border border-glass-border glass-dark transition-all duration-700 hover:border-accent-glow hover:-translate-y-2 hover:shadow-premium glow-card ${className}`}
        >
            {showBorderBeam && <BorderBeam duration={beamDuration} colorFrom="#00AAFF" colorTo="#33BBFF" />}

            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        (values) => {
                            const [x, y] = values as [number, number];
                            return `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`;
                        }
                    ),
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}
