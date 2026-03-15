"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";

interface MegaMenuItem {
    label: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

interface MegaMenuProps {
    items: MegaMenuItem[];
    isOpen: boolean;
    onClose: () => void;
}

const containerVariants = {
    hidden: {
        opacity: 0,
        y: -8,
        scale: 0.97,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.2,
            ease: [0.16, 1, 0.3, 1] as const,
            staggerChildren: 0.05,
        },
    },
    exit: {
        opacity: 0,
        y: -6,
        scale: 0.97,
        filter: "blur(4px)",
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] as const },
    },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 8 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
    },
};

export function MegaMenu({ items, isOpen, onClose }: MegaMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[520px] glass-dark border border-border rounded-2xl shadow-lg p-2 z-50"
                    onKeyDown={(e) => {
                        if (e.key === "Escape") onClose();
                    }}
                >
                    {/* Service cards */}
                    <div className="grid grid-cols-3 gap-1">
                        {items.map((item) => (
                            <motion.div key={item.href} variants={cardVariants}>
                                <Link
                                    href={item.href}
                                    onClick={onClose}
                                    className="block p-4 rounded-xl transition-colors duration-200 hover:bg-accent/10 group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-surface-2 border border-border flex items-center justify-center mb-3 group-hover:border-accent/30 transition-colors text-accent">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-[14px] font-sans font-medium text-white block mb-1 group-hover:text-accent transition-colors">
                                        {item.label}
                                    </span>
                                    <span className="text-[13px] font-sans font-light text-white/60 leading-snug block">
                                        {item.description}
                                    </span>
                                    <span className="text-[12px] text-white/30 mt-2 block transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent">
                                        →
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="border-t border-border mt-1 pt-3 pb-2 px-4 flex items-center justify-between">
                        <Link
                            href="/diensten"
                            onClick={onClose}
                            className="text-[13px] font-sans text-accent hover:text-accent-hover transition-colors"
                        >
                            Bekijk alle diensten →
                        </Link>
                        <Link
                            href="/contact"
                            onClick={onClose}
                            className="text-[13px] font-sans text-white/50 hover:text-white transition-colors"
                        >
                            ✦ Gratis kennismaking plannen
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
