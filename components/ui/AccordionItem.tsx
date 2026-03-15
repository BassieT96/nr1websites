"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
    vraag: string;
    antwoord: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
    dark?: boolean;
}

export function AccordionItem({ vraag, antwoord, isOpen, onToggle, index, dark = false }: AccordionItemProps) {
    const panelId = `accordion-panel-${index}`;
    const headerId = `accordion-header-${index}`;

    return (
        <div className={cn(
            "border-b transition-colors duration-500",
            dark ? "border-white/5" : "border-border"
        )}>
            <button
                id={headerId}
                onClick={onToggle}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between py-8 text-left group focus:outline-none rounded-2xl px-6 -mx-6 transition-all duration-500 hover:bg-white/[0.03]"
            >
                <span
                    className={cn(
                        "text-xl lg:text-2xl font-sans font-medium transition-all duration-500",
                        dark 
                            ? (isOpen ? "text-white" : "text-white/50 group-hover:text-white group-hover:translate-x-2")
                            : (isOpen ? "text-foreground" : "text-foreground group-hover:translate-x-2")
                    )}
                >
                    {vraag}
                </span>
                <motion.div
                    animate={{ 
                        rotate: isOpen ? 135 : 0, 
                        scale: isOpen ? 1.1 : 1,
                        backgroundColor: isOpen ? "rgba(var(--color-primary-rgb), 0.15)" : "rgba(255,255,255,0.05)"
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={cn(
                        "size-12 rounded-full border flex items-center justify-center transition-all duration-500 shadow-lg",
                        dark 
                            ? (isOpen ? "border-primary/50 text-primary" : "border-white/10 text-white/20 group-hover:border-white/30 group-hover:text-white/50")
                            : (isOpen ? "border-accent text-accent" : "border-border text-muted")
                    )}
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-110 transition-transform">
                        <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
                        className="overflow-hidden"
                    >
                        <p className={cn(
                            "text-lg font-sans font-light leading-relaxed pb-8 px-4",
                            dark ? "text-white/40" : "text-muted"
                        )}>
                            {antwoord}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
