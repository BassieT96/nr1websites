import React from "react";
import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/ui/Wordmark";

const footerLinks = {
    services: [
        { name: "Website op maat", path: "/diensten/website-laten-maken" },
        { name: "SEO & Performance", path: "/diensten/seo" },
        { name: "Onderhoud & Support", path: "/diensten/onderhoud" },
        { name: "Pakketten", path: "/pakketten" },
    ],
    company: [
        { name: "Home", path: "/" },
        { name: "Werk", path: "/portfolio" },
        { name: "Over ons", path: "/over-ons" },
        { name: "Contact", path: "/contact" },
    ],
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full overflow-hidden border-t border-white/8 bg-[linear-gradient(180deg,#0b0e15_0%,#050508_100%)] pt-20 pb-10">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[8%] top-0 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[10%] h-64 w-64 rounded-full bg-sky-500/8 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-[1200px] px-6 lg:px-12">
                <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/8 pb-16 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
                    <div className="flex flex-col gap-6">
                        <Wordmark />
                        <p className="max-w-[28rem] text-[15px] leading-relaxed text-ink-secondary">
                            High-end web agency uit Lemmer. We ontwerpen en bouwen Next.js websites die snelheid,
                            merkbeleving en conversie samenbrengen in een digitale ervaring die blijft hangen.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-ghost">
                                Next.js native
                            </span>
                            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-ghost">
                                Motion-first UX
                            </span>
                            <span className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-ghost">
                                Performance obsessed
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-ghost">Diensten</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="inline-flex items-center gap-2 text-[14px] text-ink-secondary transition-all duration-300 hover:translate-x-1 hover:text-ink-primary"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-ghost">Studio</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        className="inline-flex items-center gap-2 text-[14px] text-ink-secondary transition-all duration-300 hover:translate-x-1 hover:text-ink-primary"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpRight className="h-3.5 w-3.5 opacity-50" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="rounded-[28px] border border-white/8 bg-white/[0.03] p-6">
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">Contact</p>
                        <p className="mb-6 text-[15px] leading-relaxed text-ink-secondary">
                            Klaar om je merk digitaal naar een hoger niveau te tillen?
                        </p>
                        <div className="space-y-3 text-[14px] text-ink-secondary">
                            <p>Lemmer, Friesland</p>
                            <a href="mailto:hallo@nr1websites.nl" className="block transition-colors hover:text-ink-primary">
                                hallo@nr1websites.nl
                            </a>
                            <a href="tel:+31600000000" className="block transition-colors hover:text-ink-primary">
                                +31 6 00 000 000
                            </a>
                        </div>
                        <div className="mt-6 flex items-center gap-3">
                            {[
                                { icon: Linkedin, href: "#" },
                                { icon: Instagram, href: "#" },
                                { icon: MessageCircle, href: "https://wa.me/31600000000" },
                            ].map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-ink-tertiary transition-all duration-300 hover:scale-[1.06] hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                                >
                                    <social.icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 text-[12px] text-ink-ghost sm:flex-row sm:items-center sm:justify-between">
                    <p>© {currentYear} Nr1websites. Alle rechten voorbehouden.</p>
                    <div className="flex flex-wrap items-center gap-4">
                        <span className="font-mono">KVK 12345678</span>
                        <span className="font-mono">BTW NL00000000</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
