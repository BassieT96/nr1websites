"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useAnimationControls } from "framer-motion";
import { Layout, TrendingUp, ShieldCheck, type LucideIcon } from "lucide-react";
import { NavLink } from "@/components/ui/NavLink";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { Magnetic } from "@/components/ui/Magnetic";
import { Wordmark } from "@/components/ui/Wordmark";

interface MegaMenuItem {
    label: string;
    description: string;
    href: string;
    icon: LucideIcon;
}

interface NavItem {
    label: string;
    href: string;
    megaMenu?: MegaMenuItem[];
}

const NAV_ITEMS: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Diensten",
        href: "/diensten",
        megaMenu: [
            {
                label: "Website op maat",
                description: "Volledig maatwerk, geen templates",
                href: "/diensten/website-laten-maken",
                icon: Layout,
            },
            {
                label: "SEO & Performance",
                description: "Beter vindbaar in Google",
                href: "/diensten/seo",
                icon: TrendingUp,
            },
            {
                label: "Onderhoud & Support",
                description: "Zorgeloos online blijven",
                href: "/diensten/onderhoud",
                icon: ShieldCheck,
            },
        ],
    },
    { label: "Werk", href: "/portfolio" },
    { label: "Pakketten", href: "/pakketten" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
];

export function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const megaMenuTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lastScrollY = useRef(0);
    const controls = useAnimationControls();

    useEffect(() => {
        controls.set({ y: 0, opacity: 1 });
    }, [controls]);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (ticking) return;
            ticking = true;

            requestAnimationFrame(() => {
                const currentY = window.scrollY;
                const delta = currentY - lastScrollY.current;

                setScrolled(currentY > 18);

                if (delta > 10 && currentY > 120 && !hidden) {
                    setHidden(true);
                    controls.start({
                        y: -96,
                        opacity: 0,
                        transition: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                    });
                }

                if ((delta < -6 || currentY < 40) && hidden) {
                    setHidden(false);
                    controls.start({
                        y: 0,
                        opacity: 1,
                        transition: { duration: 0.24, ease: [0.16, 1, 0.3, 1] },
                    });
                }

                lastScrollY.current = currentY;
                ticking = false;
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls, hidden]);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setMegaMenuOpen(false);
                setDrawerOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, []);

    const handleMegaMenuEnter = useCallback(() => {
        if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
        setMegaMenuOpen(true);
    }, []);

    const handleMegaMenuLeave = useCallback(() => {
        megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 100);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname === href || pathname.startsWith(href + "/");
    };

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={controls}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="fixed inset-x-0 top-4 z-[100] px-4 md:px-6"
            >
                <nav
                    aria-label="Hoofdnavigatie"
                    className={`mx-auto flex max-w-[1180px] items-center justify-between rounded-[28px] border transition-all duration-500 ${scrolled
                        ? "border-white/10 bg-[rgba(10,12,18,0.78)] px-4 py-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-[22px]"
                        : "border-white/6 bg-[rgba(10,12,18,0.42)] px-4 py-3 backdrop-blur-[14px]"
                        }`}
                >
                    <div className="flex items-center gap-3">
                        <Wordmark compact={scrolled} />
                    </div>

                    <div className="hidden items-center gap-1 md:flex">
                        {NAV_ITEMS.map((item) => {
                            if (!item.megaMenu) {
                                return (
                                    <NavLink
                                        key={item.href}
                                        href={item.href}
                                        label={item.label}
                                        isActive={isActive(item.href)}
                                    />
                                );
                            }

                            return (
                                <div
                                    key={item.href}
                                    className="relative"
                                    onMouseEnter={handleMegaMenuEnter}
                                    onMouseLeave={handleMegaMenuLeave}
                                >
                                    <NavLink
                                        href={item.href}
                                        label={item.label}
                                        isActive={isActive(item.href)}
                                        hasMegaMenu
                                        megaMenuOpen={megaMenuOpen}
                                    />
                                    <MegaMenu
                                        items={item.megaMenu}
                                        isOpen={megaMenuOpen}
                                        onClose={() => setMegaMenuOpen(false)}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2">
                        <Magnetic strength={0.24}>
                            <Link
                                href="/contact"
                                className="hidden rounded-full border border-accent/40 bg-gradient-to-r from-accent to-[#55c8ff] px-5 py-3 text-[13px] font-semibold text-slate-950 shadow-[0_10px_30px_rgba(0,170,255,0.28)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_50px_rgba(0,170,255,0.36)] md:inline-flex"
                            >
                                Plan kennismaking
                            </Link>
                        </Magnetic>

                        <button
                            onClick={() => setDrawerOpen(!drawerOpen)}
                            className="md:hidden relative z-[110] flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/[0.04]"
                            aria-label={drawerOpen ? "Menu sluiten" : "Menu openen"}
                            aria-expanded={drawerOpen}
                            aria-controls="mobile-drawer"
                        >
                            <motion.span
                                animate={drawerOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="block h-[1.5px] w-[18px] bg-white origin-center"
                            />
                            <motion.span
                                animate={drawerOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.15 }}
                                className="block h-[1.5px] w-[18px] bg-white"
                            />
                            <motion.span
                                animate={drawerOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="block h-[1.5px] w-[18px] bg-white origin-center"
                            />
                        </button>
                    </div>
                </nav>
            </motion.header>

            <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} navItems={NAV_ITEMS} />
        </>
    );
}
