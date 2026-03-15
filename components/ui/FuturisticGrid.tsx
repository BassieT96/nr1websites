"use client";

import React, { useRef, useEffect, useCallback } from "react";

/**
 * FuturisticGrid — GPU-accelerated canvas-based 3D perspective wireframe grid.
 * Tron / sci-fi style with neon glow, flowing animation, and mouse parallax.
 */
export function FuturisticGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0.5, y: 0.5 });
    const rafRef = useRef<number>(0);

    const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
        const dpr = window.devicePixelRatio || 1;
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;

        // Clear
        ctx.clearRect(0, 0, w * dpr, h * dpr);

        // === Config ===
        const horizonY = h * (0.38 + (my - 0.5) * 0.06); // Parallax horizon
        const vanishX = w * (0.5 + (mx - 0.5) * 0.08);   // Parallax vanishing point
        const gridRows = 40;
        const gridCols = 28;
        const speed = time * 0.00012; // Slow forward flow

        // === Atmospheric fog gradient (behind grid) ===
        const fogGrad = ctx.createLinearGradient(0, horizonY * dpr - 60, 0, h * dpr);
        fogGrad.addColorStop(0, "rgba(0, 100, 200, 0.06)");
        fogGrad.addColorStop(0.3, "rgba(0, 60, 140, 0.02)");
        fogGrad.addColorStop(1, "transparent");
        ctx.fillStyle = fogGrad;
        ctx.fillRect(0, 0, w * dpr, h * dpr);

        // === Horizon glow ===
        const glowGrad = ctx.createRadialGradient(
            vanishX * dpr, horizonY * dpr, 0,
            vanishX * dpr, horizonY * dpr, w * 0.5 * dpr
        );
        glowGrad.addColorStop(0, "rgba(0, 170, 255, 0.08)");
        glowGrad.addColorStop(0.4, "rgba(0, 120, 220, 0.03)");
        glowGrad.addColorStop(1, "transparent");
        ctx.fillStyle = glowGrad;
        ctx.fillRect(0, 0, w * dpr, h * dpr);

        // === Draw grid ===
        ctx.save();
        ctx.scale(dpr, dpr);

        // Project a 3D point onto the 2D canvas
        const project = (gx: number, gz: number): [number, number, number] => {
            // gz: 0 = at viewer, 1 = at horizon
            const depth = 0.05 + gz * 0.95; // Prevent division issues
            const perspective = 1 / depth;
            const px = vanishX + (gx - 0.5) * w * 0.9 * perspective * 0.25;
            const py = horizonY + (1 - depth) * (h - horizonY) * perspective * 0.35;
            return [px, py, depth];
        };

        // --- Horizontal lines (receding toward horizon) ---
        for (let i = 0; i < gridRows; i++) {
            const rawZ = (i / gridRows + speed) % 1;
            const [, py, depth] = project(0.5, rawZ);

            if (py < horizonY - 2 || py > h + 5) continue;

            const alpha = Math.pow(1 - rawZ, 1.5) * 0.35;
            if (alpha < 0.01) continue;

            const lineWidth = Math.max(0.3, (1 - rawZ) * 1.2);

            // Glow layer
            ctx.strokeStyle = `rgba(0, 170, 255, ${alpha * 0.4})`;
            ctx.lineWidth = lineWidth + 3;
            ctx.beginPath();
            const leftH = project(0, rawZ);
            const rightH = project(1, rawZ);
            ctx.moveTo(leftH[0], leftH[1]);
            ctx.lineTo(rightH[0], rightH[1]);
            ctx.stroke();

            // Core line
            ctx.strokeStyle = `rgba(0, 170, 255, ${alpha})`;
            ctx.lineWidth = lineWidth;
            ctx.beginPath();
            ctx.moveTo(leftH[0], leftH[1]);
            ctx.lineTo(rightH[0], rightH[1]);
            ctx.stroke();
        }

        // --- Vertical lines (converging to vanishing point) ---
        for (let j = 0; j <= gridCols; j++) {
            const gx = j / gridCols;
            const startZ = 0.0;
            const endZ = 0.98;
            const steps = 30;

            // Calculate opacity based on distance from center
            const centerDist = Math.abs(gx - 0.5) * 2;
            const baseAlpha = Math.max(0, 0.3 - centerDist * 0.15);

            if (baseAlpha < 0.01) continue;

            // Glow
            ctx.strokeStyle = `rgba(0, 170, 255, ${baseAlpha * 0.3})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            let first = true;
            for (let s = 0; s <= steps; s++) {
                const z = startZ + (endZ - startZ) * (s / steps);
                const [px, py] = project(gx, z);
                if (first) { ctx.moveTo(px, py); first = false; }
                else ctx.lineTo(px, py);
            }
            ctx.stroke();

            // Core
            ctx.strokeStyle = `rgba(0, 170, 255, ${baseAlpha})`;
            ctx.lineWidth = Math.max(0.4, 0.8 - centerDist * 0.3);
            ctx.beginPath();
            first = true;
            for (let s = 0; s <= steps; s++) {
                const z = startZ + (endZ - startZ) * (s / steps);
                const [px, py] = project(gx, z);
                if (first) { ctx.moveTo(px, py); first = false; }
                else ctx.lineTo(px, py);
            }
            ctx.stroke();
        }

        // === Subtle scan line effect ===
        const scanY = ((time * 0.0003) % 1);
        const scanPy = horizonY + scanY * (h - horizonY);
        const scanAlpha = Math.sin(scanY * Math.PI) * 0.06;
        if (scanAlpha > 0.005) {
            const scanGrad = ctx.createLinearGradient(0, scanPy - 20, 0, scanPy + 20);
            scanGrad.addColorStop(0, "transparent");
            scanGrad.addColorStop(0.5, `rgba(0, 170, 255, ${scanAlpha})`);
            scanGrad.addColorStop(1, "transparent");
            ctx.fillStyle = scanGrad;
            ctx.fillRect(0, scanPy - 20, w, 40);
        }

        ctx.restore();

        // === Bottom fade (grid fades into page) ===
        const bottomFade = ctx.createLinearGradient(0, (h - 120) * dpr, 0, h * dpr);
        bottomFade.addColorStop(0, "transparent");
        bottomFade.addColorStop(1, "rgba(5, 5, 8, 1)");
        ctx.fillStyle = bottomFade;
        ctx.fillRect(0, (h - 120) * dpr, w * dpr, 120 * dpr);

    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight,
            };
        };

        resize();
        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);

        const loop = (time: number) => {
            const rect = canvas.getBoundingClientRect();
            draw(ctx, rect.width, rect.height, time);
            rafRef.current = requestAnimationFrame(loop);
        };

        rafRef.current = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [draw]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            style={{ willChange: "transform" }}
            aria-hidden="true"
        />
    );
}
