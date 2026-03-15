"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    staggerChildren?: number;
    direction?: "up" | "down" | "left" | "right";
    className?: string;
    yOffset?: number;
    xOffset?: number;
}

export function ScrollReveal({
    children,
    width = "100%",
    delay = 0,
    duration = 0.8,
    staggerChildren = 0.1,
    direction = "up",
    className = "",
    yOffset = 40,
    xOffset = 40
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: yOffset, x: 0 };
            case "down": return { y: -yOffset, x: 0 };
            case "left": return { x: xOffset, y: 0 };
            case "right": return { x: -xOffset, y: 0 };
            default: return { y: yOffset, x: 0 };
        }
    };

    const variants: Variants = {
        hidden: {
            opacity: 0,
            ...getDirectionOffset()
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Cinematic ease-out-cubic
                staggerChildren
            }
        }
    };

    return (
        <div ref={ref} style={{ width, position: "relative" }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function ScrollRevealChild({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const childVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <motion.div variants={childVariants} className={className}>
            {children}
        </motion.div>
    );
}
