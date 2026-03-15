"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

export function CharacterReveal({
    text,
    className = "",
    delay = 0,
    stagger = 0.02
}: {
    text: string;
    className?: string;
    delay?: number;
    stagger?: number;
}) {
    const characters = text.split("");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: stagger, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 150,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(4px)",
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 150,
            },
        },
    };

    return (
        <motion.span
            style={{ display: "inline-block" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span
                    variants={child}
                    key={index}
                    className="inline-block py-[0.1em] -my-[0.1em]"
                    style={{ whiteSpace: char === " " ? "pre" : "normal" }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.span>
    );
}
