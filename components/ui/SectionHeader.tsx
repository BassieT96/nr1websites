"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: 'left' | 'center';
}

export function SectionHeader({ title, subtitle, className = '', align = 'center' }: SectionHeaderProps) {
    const containerClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
    const subtitleClass = align === 'center' ? 'mx-auto' : '';

    return (
        <div className={`space-y-6 mb-20 md:mb-24 ${containerClass} ${className}`}>
            <motion.h2
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-ink-primary font-display leading-[1.0] tracking-[-0.05em]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {title}
            </motion.h2>
            {subtitle && (
                <motion.p
                    className={`text-[18px] md:text-[20px] text-ink-secondary font-sans leading-relaxed max-w-2xl ${subtitleClass}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
