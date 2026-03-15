"use client";

import React, { useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { usePerformanceProfile } from "@/lib/use-performance-profile";

export function Magnetic({
    children,
    strength = 0.3,
    disabled = false,
}: {
    children: React.ReactNode;
    strength?: number;
    disabled?: boolean;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const { allowPointerEffects } = usePerformanceProfile();
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (disabled || !allowPointerEffects || !ref.current) {
            return;
        }

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distanceX = clientX - centerX;
        const distanceY = clientY - centerY;

        x.set(distanceX * strength);
        y.set(distanceY * strength);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={disabled || !allowPointerEffects ? undefined : handleMouseMove}
            onMouseLeave={disabled || !allowPointerEffects ? undefined : handleMouseLeave}
            style={disabled || !allowPointerEffects ? undefined : { x: springX, y: springY }}
        >
            {children}
        </motion.div>
    );
}
