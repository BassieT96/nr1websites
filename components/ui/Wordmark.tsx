"use client";

import Link from "next/link";

interface WordmarkProps {
    href?: string;
    compact?: boolean;
    className?: string;
}

export function Wordmark({ href = "/", compact = false, className = "" }: WordmarkProps) {
    const content = (
        <span className={`inline-flex items-baseline gap-1.5 ${className}`}>
            <span className="font-display text-[1.1rem] font-semibold tracking-[-0.05em] text-white sm:text-[1.25rem]">
                Nr<span className="text-accent">1</span>websites
            </span>
        </span>
    );

    return (
        <Link href={href} className="inline-flex items-center">
            {content}
        </Link>
    );
}
