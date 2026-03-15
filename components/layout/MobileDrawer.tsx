"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

interface MegaMenuItem {
    label: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

interface MobileDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    navItems: {
        label: string;
        href: string;
        megaMenu?: MegaMenuItem[];
    }[];
}

const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

const drawerVariants = {
    hidden: { x: "100%", opacity: 0.5 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
    exit: {
        x: "100%",
        opacity: 0.5,
        transition: { duration: 0.25, ease: [0.4, 0, 0.2, 1] as const },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
    }),
};

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
    const [expandedService, setExpandedService] = useState(false);
    const drawerRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    // Body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isOpen) onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    // Focus trap
    const handleKeyDown = useCallback(
        (e: React.KeyboardEvent) => {
            if (e.key !== "Tab" || !drawerRef.current) return;
            const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
                'a, button, [tabindex]:not([tabindex="-1"])'
            );
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        },
        []
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Overlay */}
                    <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-[rgba(5,5,8,0.7)] backdrop-blur-sm md:hidden"
                    />

                    {/* Drawer */}
                    <motion.div
                        ref={drawerRef}
                        variants={drawerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        role="dialog"
                        aria-modal="true"
                        id="mobile-drawer"
                        aria-label="Navigatiemenu"
                        onKeyDown={handleKeyDown}
                        className="fixed top-0 right-0 z-50 flex h-dvh w-[min(380px,100vw)] flex-col border-l border-white/10 bg-[linear-gradient(180deg,#0b0f16_0%,#090b11_100%)] shadow-[-20px_0_60px_rgba(0,0,0,0.5)] md:hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-4">
                            <Wordmark compact />
                            <button
                                onClick={onClose}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-colors hover:text-white"
                                aria-label="Menu sluiten"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Nav Links */}
                        <nav className="flex-1 overflow-y-auto px-6 pt-4" aria-label="Mobiele navigatie">
                            {navItems.map((item, i) => {
                                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                                const isDiensten = !!item.megaMenu;

                                return (
                                    <motion.div
                                        key={item.href}
                                        custom={i}
                                        variants={itemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        className="border-b border-white/8"
                                    >
                                        {isDiensten ? (
                                            <>
                                                <button
                                                    onClick={() => setExpandedService(!expandedService)}
                                                    className="flex w-full items-center justify-between py-[18px]"
                                                    aria-expanded={expandedService}
                                                >
                                                    <span className="flex items-center gap-2">
                                                        {isActive && (
                                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                        )}
                                                        <span className="text-[24px] font-light tracking-tight text-white">
                                                            {item.label}
                                                        </span>
                                                    </span>
                                                    <motion.span
                                                        animate={{ rotate: expandedService ? 90 : 0 }}
                                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                        className="text-white/30 text-[16px]"
                                                    >
                                                        →
                                                    </motion.span>
                                                </button>

                                                <AnimatePresence>
                                                    {expandedService && item.megaMenu && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="space-y-1 pl-6 pb-4">
                                                                {item.megaMenu.map((sub) => (
                                                                    <Link
                                                                        key={sub.href}
                                                                        href={sub.href}
                                                                        onClick={onClose}
                                                                        className="flex items-center gap-3 py-3 text-[16px] text-white/70 transition-colors hover:text-white"
                                                                    >
                                                                        <span className="text-accent">
                                                                            <sub.icon size={18} />
                                                                        </span>
                                                                        {sub.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="flex items-center justify-between py-[18px]"
                                            >
                                                <span className="flex items-center gap-2">
                                                    {isActive && (
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                                    )}
                                                    <span className="text-[24px] font-light tracking-tight text-white">
                                                        {item.label}
                                                    </span>
                                                </span>
                                                <span className="text-white/30 text-[16px]">→</span>
                                            </Link>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Footer */}
                        <div className="space-y-4 border-t border-white/10 px-6 py-6">
                            <div className="rounded-[24px] border border-white/8 bg-white/[0.03] p-4">
                                <p className="mb-1 text-[11px] font-mono uppercase tracking-[0.24em] text-accent">Nu beschikbaar</p>
                                <p className="text-[14px] leading-relaxed text-white/70">
                                    We nemen momenteel nog drie projecten aan voor Q2.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                onClick={onClose}
                                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-[#55c8ff] py-4 text-[16px] font-medium text-slate-950 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                            >
                                Plan kennismaking
                            </Link>
                            <a
                                href="tel:+31600000000"
                                className="block text-center text-[14px] text-white/50 transition-colors hover:text-white"
                            >
                                Of bel ons: +31 6 00 000 000
                            </a>
                            <div className="flex justify-center gap-3 pt-2">
                                {["LinkedIn", "Instagram", "WhatsApp"].map((name) => (
                                    <a
                                        key={name}
                                        href="#"
                                        aria-label={name}
                                        className="w-10 h-10 rounded-full bg-surface-2 border border-border flex items-center justify-center text-white/50 hover:text-white hover:bg-surface-3 transition-colors text-[13px] font-mono"
                                    >
                                        {name[0]}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
