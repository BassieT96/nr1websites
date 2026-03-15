"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function MouseParallax({
    children,
    className = "",
    strength = 20
}: {
    children: React.ReactNode;
    className?: string;
    strength?: number;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const moveX = (e.clientX / innerWidth - 0.5) * strength;
            const moveY = (e.clientY / innerHeight - 0.5) * strength;
            x.set(moveX);
            y.set(moveY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [strength, x, y]);

    return (
        <motion.div
            className={className}
            style={{ x: dx, y: dy }}
        >
            {children}
        </motion.div>
    );
}
