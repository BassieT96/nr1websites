"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
    children: React.ReactNode;
    className?: string;
}

interface BentoCardProps {
    children: React.ReactNode;
    className?: string;
    colSpan?: string; // Tailwind grid-cols span, e.g., 'md:col-span-2'
    rowSpan?: string; // Tailwind grid-rows span, e.g., 'md:row-span-2'
    delay?: number;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[300px] ${className}`}>
            {children}
        </div>
    );
}

export function BentoCard({ children, className = '', colSpan = 'md:col-span-1', rowSpan = 'md:row-span-1', delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            className={`${colSpan} ${rowSpan} ${className}`}
        >
            {children}
        </motion.div>
    );
}
