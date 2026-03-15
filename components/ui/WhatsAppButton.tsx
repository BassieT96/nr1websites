"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

export function WhatsAppButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="fixed bottom-6 right-6 z-50 group"
        >
            <Link
                href="https://wa.me/31600000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Stuur ons een WhatsApp"
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow pointer-events-auto"
                >
                    <MessageCircle className="w-7 h-7 text-white" />

                    <span className="absolute right-16 px-3 py-1.5 bg-brand-navy border border-white/10 text-xs font-medium text-white shadow-xl rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Stuur ons een WhatsApp
                    </span>
                </motion.div>
            </Link>
        </motion.div>
    );
}
