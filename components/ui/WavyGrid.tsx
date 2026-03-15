"use client";

import React, { useRef, useEffect } from 'react';

interface WavyGridProps {
    className?: string;
    /** The grid spacing in pixels */
    spacing?: number;
    /** Base amplitude of the wave */
    amplitude?: number;
    /** Influence radius of the mouse cursor */
    mouseRadius?: number;
    /** How strongly the grid repels from the mouse */
    mouseForce?: number;
    /** Stroke color of the grid lines */
    lineColor?: string;
    /** Speed of the wave animation */
    speed?: number;
}

interface Point {
    baseX: number;
    baseY: number;
    x: number;
    y: number;
}

export function WavyGrid({
    className = "",
    spacing = 50,
    amplitude = 15,
    mouseRadius = 250,
    mouseForce = 60,
    lineColor = "rgba(255, 255, 255, 0.07)",
    speed = 0.0015
}: WavyGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseRef = useRef({ x: -1000, y: -1000 });
    const targetMouseRef = useRef({ x: -1000, y: -1000 });

    // Use refs for animation frame loop stability
    const animationRef = useRef<number>(0);
    const pointsRef = useRef<Point[][]>([]);
    const dimensionsRef = useRef({ width: 0, height: 0, cols: 0, rows: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let time = 0;

        const initGrid = () => {
            const { width, height } = container.getBoundingClientRect();

            // Adjust canvas for pixel scale (retina support)
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);

            // Canvas css dimensions
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';

            // Calculate grid dimensions incorporating some overflow so it stretches off-screen nicely
            const cols = Math.ceil(width / spacing) + 2;
            const rows = Math.ceil(height / spacing) + 2;

            dimensionsRef.current = { width, height, cols, rows };

            const points: Point[][] = [];

            // Center offsets so grid is aligned
            const offsetX = (width - (cols - 1) * spacing) / 2;
            const offsetY = (height - (rows - 1) * spacing) / 2;

            for (let r = 0; r < rows; r++) {
                const row: Point[] = [];
                for (let c = 0; c < cols; c++) {
                    const baseX = c * spacing + offsetX;
                    const baseY = r * spacing + offsetY;
                    row.push({
                        baseX,
                        baseY,
                        x: baseX,
                        y: baseY
                    });
                }
                points.push(row);
            }

            pointsRef.current = points;
        };

        const render = () => {
            if (!ctx) return;
            const { width, height, cols, rows } = dimensionsRef.current;
            const points = pointsRef.current;

            ctx.clearRect(0, 0, width, height);

            time += speed;

            // Interpolate mouse for smooth lag effect
            mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.1;
            mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.1;

            const mx = mouseRef.current.x;
            const my = mouseRef.current.y;

            // Update points
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const pt = points[r][c];

                    // Core wave math: sin driven by X+Y mixed with time
                    const waveOffset = Math.sin(pt.baseX * 0.003 + pt.baseY * 0.002 + time) * amplitude;

                    let targetX = pt.baseX;
                    let targetY = pt.baseY + waveOffset;

                    // Mouse interaction
                    const dx = mx - pt.baseX;
                    const dy = my - pt.baseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < mouseRadius) {
                        // Smooth falloff curve
                        const force = (Math.cos((dist / mouseRadius) * Math.PI) + 1) * 0.5;
                        const angle = Math.atan2(dy, dx);

                        // Push away from mouse
                        targetX -= Math.cos(angle) * force * mouseForce;
                        targetY -= Math.sin(angle) * force * mouseForce;
                    }

                    // Ease point to target (fluidity)
                    pt.x += (targetX - pt.x) * 0.08;
                    pt.y += (targetY - pt.y) * 0.08;
                }
            }

            // Draw grid
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 1;
            ctx.lineJoin = 'round';

            ctx.beginPath();

            // Horizontal lines
            for (let r = 0; r < rows; r++) {
                ctx.moveTo(points[r][0].x, points[r][0].y);
                for (let c = 1; c < cols; c++) {
                    ctx.lineTo(points[r][c].x, points[r][c].y);
                }
            }

            // Vertical lines
            for (let c = 0; c < cols; c++) {
                ctx.moveTo(points[0][c].x, points[0][c].y);
                for (let r = 1; r < rows; r++) {
                    ctx.lineTo(points[r][c].x, points[r][c].y);
                }
            }

            ctx.stroke();

            animationRef.current = requestAnimationFrame(render);
        };

        const handleResize = () => {
            initGrid();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            targetMouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            // Move target off screen so grid relaxes
            targetMouseRef.current = { x: -1000, y: -1000 };
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                const rect = canvas.getBoundingClientRect();
                targetMouseRef.current = {
                    x: e.touches[0].clientX - rect.left,
                    y: e.touches[0].clientY - rect.top
                };
            }
        };

        initGrid();
        render();

        window.addEventListener('resize', handleResize);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('touchend', handleMouseLeave);
        container.addEventListener('touchcancel', handleMouseLeave);

        return () => {
            window.removeEventListener('resize', handleResize);
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('touchend', handleMouseLeave);
            container.removeEventListener('touchcancel', handleMouseLeave);

            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [spacing, amplitude, mouseRadius, mouseForce, lineColor, speed]);

    return (
        <div ref={containerRef} className={`w-full h-full absolute inset-0 overflow-hidden pointer-events-auto ${className}`}>
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
                style={{ opacity: 0, animation: 'fadeIn 2s ease-in-out forwards' }}
            />
            {/* Inline keyframe for graceful load fade */}
            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
}
