"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function TextReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            }
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "inherit" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child}
                    style={{ marginRight: "0.25em" }}
                    key={index}
                    className="inline-block"
                >
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
}
