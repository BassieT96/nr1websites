"use client";

import React from 'react';

const reviews = [
    { text: "Binnen 2 weken online", author: "Mark, Loodgieter" },
    { badge: "KVK Geregistreerd", icon: "✓" },
    { text: "Meer aanvragen dan ooit", author: "Sophie, Coach" },
    { badge: "Made in Nederland 🇳🇱" },
    { badge: "Next.js 15", icon: "⚡" },
    { text: "Beste investering ooit", author: "Jeroen, Schilder" },
    { badge: "Razendsnel design", icon: "🚀" },
];

export function SocialProofBar() {
    const marqueeItems = [...reviews, ...reviews, ...reviews, ...reviews];

    return (
        <section className="relative w-full bg-surface-1 border-y border-border overflow-hidden py-12 flex items-center">
            {/* Cinematic Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-surface-1 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-surface-1 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-[marquee_50s_linear_infinite] w-max items-center gap-12 pr-12">
                {marqueeItems.map((item, idx) => (
                    <div key={idx} className="flex-shrink-0 flex items-center group cursor-default">
                        {item.text ? (
                            <div className="flex items-center gap-5 px-8 py-5 rounded-2xl border border-border glass-dark transition-all duration-500 group-hover:border-accent/30">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-accent text-[12px]">★</span>
                                    ))}
                                </div>
                                <span className="text-[14px] font-display font-bold text-ink-primary italic tracking-tight">&quot;{item.text}&quot;</span>
                                <div className="h-4 w-px bg-border-strong mx-2" />
                                <span className="text-[12px] font-mono text-ink-tertiary font-bold uppercase tracking-widest">{item.author}</span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3 px-8 py-5 rounded-2xl border border-border glass-dark transition-all duration-500 group-hover:border-accent/30">
                                {item.icon && <span className="text-accent text-[14px]">{item.icon}</span>}
                                <span className="text-[12px] font-mono text-ink-tertiary font-bold uppercase tracking-widest">
                                    {item.badge}
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
