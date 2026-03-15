import React from 'react';

export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-flex items-center rounded-full bg-accent/10 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent ring-1 ring-inset ring-accent/20 ${className}`}>
            {children}
        </span>
    );
}
