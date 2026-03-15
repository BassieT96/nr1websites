"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ParallaxImageProps {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    containerClassName?: string;
    priority?: boolean;
    sizes?: string;
    speed?: "slow" | "medium" | "fast";
    zoom?: boolean; 
}

export function ParallaxImage({
    src,
    alt,
    className = "",
    containerClassName = "",
    priority = false,
    sizes = "100vw",
    speed = "medium",
    zoom = false
}: ParallaxImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const getSpeedOffset = () => {
        switch (speed) {
            case "slow": return ["-5%", "5%"];
            case "fast": return ["-20%", "20%"];
            case "medium":
            default: return ["-10%", "10%"];
        }
    };

    const y = useTransform(scrollYProgress, [0, 1], getSpeedOffset());
    const scale = useTransform(scrollYProgress, [0, 1], zoom ? [1, 1.1] : [1, 1]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
            {/* The absolute container needs to be taller than its parent to allow parallax scrolling over its height */}
            <motion.div 
                style={{ y, scale, height: "120%", top: "-10%", position: "absolute", left: 0, right: 0 }}
                className="will-change-transform"
            >
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={priority}
                    sizes={sizes}
                    className={`object-cover w-full h-full ${className}`}
                />
            </motion.div>
        </div>
    );
}
