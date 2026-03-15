"use client";

import React from 'react';

const logos = [
    { name: "Studio Bloom", mono: "SB" },
    { name: "Bakkerij De Zon", mono: "BZ" },
    { name: "Roos Advies", mono: "RA" },
    { name: "Kapsalon Vera", mono: "KV" },
    { name: "TechStart", mono: "TS" },
    { name: "Jansen & Partners", mono: "JP" },
    { name: "GreenRoot", mono: "GR" },
    { name: "FitFabriek", mono: "FF" },
];

function LogoItem({ name, mono }: { name: string; mono: string }) {
    return (
        <div className="flex items-center gap-4 whitespace-nowrap group cursor-default px-2">
            <div className="w-9 h-9 rounded-xl bg-surface-2 border border-border flex items-center justify-center text-[11px] font-display font-bold text-accent transition-all duration-300 group-hover:bg-accent/10 group-hover:border-accent/30 group-hover:scale-110">
                {mono}
            </div>
            <span className="text-[14px] font-sans font-medium text-ink-tertiary group-hover:text-ink-secondary transition-colors duration-300">
                {name}
            </span>
        </div>
    );
}

export function LogoMarquee() {
    const row1 = [...logos, ...logos, ...logos];
    const row2 = [...logos.slice(4), ...logos.slice(0, 4), ...logos.slice(4), ...logos.slice(0, 4), ...logos.slice(4), ...logos.slice(0, 4)];

    return (
        <section className="w-full bg-surface-1/50 border-y border-border overflow-hidden relative py-6">
            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />

            {/* Row 1 → */}
            <div className="flex items-center gap-10 animate-[marquee_30s_linear_infinite] w-fit hover:[animation-play-state:paused] mb-3">
                {row1.map((logo, i) => (
                    <LogoItem key={`r1-${i}`} {...logo} />
                ))}
            </div>

            {/* Row 2 ← */}
            <div className="flex items-center gap-10 animate-[marquee_35s_linear_infinite_reverse] w-fit hover:[animation-play-state:paused]">
                {row2.map((logo, i) => (
                    <LogoItem key={`r2-${i}`} {...logo} />
                ))}
            </div>
        </section>
    );
}
