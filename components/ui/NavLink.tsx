"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLinkProps {
    href: string;
    label: string;
    hasMegaMenu?: boolean;
    isActive: boolean;
    megaMenuOpen?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
}

export function NavLink({
    href,
    label,
    hasMegaMenu = false,
    isActive,
    megaMenuOpen = false,
    onMouseEnter,
    onMouseLeave,
    onClick,
}: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`relative inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium tracking-[-0.01em] transition-all duration-200 ${isActive
                    ? "bg-white/[0.08] text-white"
                    : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                }`}
        >
            {label}
            {hasMegaMenu && (
                <motion.span
                    animate={{ rotate: megaMenuOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-[12px] text-white/40 ml-0.5"
                >
                    ▾
                </motion.span>
            )}
            {isActive && (
                <motion.div
                    layoutId="nav-active-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}
        </Link>
    );
}
