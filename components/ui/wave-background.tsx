'use client'
import * as React from 'react'
import { useEffect, useRef } from 'react'
import { createNoise2D } from 'simplex-noise'

interface Point {
    x: number
    y: number
    wave: { x: number; y: number }
    cursor: { x: number; y: number; vx: number; vy: number }
}

interface WavesProps {
    className?: string
    strokeColor?: string
    lineColors?: string[]
    strokeWidth?: number
    backgroundColor?: string
    pointerSize?: number
}

export function Waves({
    className = "",
    strokeColor = "#ffffff",
    lineColors,
    strokeWidth = 1,
    backgroundColor = "#000000",
    pointerSize = 0.5,
}: WavesProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: -10, y: 0, lx: 0, ly: 0, sx: 0, sy: 0, v: 0, vs: 0, a: 0, set: false })
    const linesRef = useRef<Point[][]>([])
    const lineColorsRef = useRef<string[]>([])
    const noiseRef = useRef<((x: number, y: number) => number) | null>(null)
    const rafRef = useRef<number | null>(null)
    const boundingRef = useRef<DOMRect | null>(null)

    const hexToRgba = (hex: string, alpha: number) => {
        const clean = hex.replace('#', '')
        if (!/^[\da-fA-F]{6}$/.test(clean)) return `rgba(255,255,255,${alpha})`
        const r = parseInt(clean.slice(0, 2), 16)
        const g = parseInt(clean.slice(2, 4), 16)
        const b = parseInt(clean.slice(4, 6), 16)
        return `rgba(${r},${g},${b},${alpha})`
    }

    const getLineColor = (lineIndex: number, totalLines: number): string => {
        if (!lineColors || lineColors.length < 2) return hexToRgba(strokeColor, 0.2)
        const progress = totalLines <= 1 ? 0 : lineIndex / (totalLines - 1)
        const scaled = progress * (lineColors.length - 1)
        const startIdx = Math.floor(scaled)
        const endIdx = Math.min(lineColors.length - 1, startIdx + 1)
        const t = scaled - startIdx
        const s = lineColors[startIdx] ?? ''
        const e = lineColors[endIdx] ?? ''
        const sc = s.replace('#', ''); const ec = e.replace('#', '')
        if (!/^[\da-fA-F]{6}$/.test(sc) || !/^[\da-fA-F]{6}$/.test(ec)) return hexToRgba(strokeColor, 0.2)
        const r = Math.round(parseInt(sc.slice(0, 2), 16) + (parseInt(ec.slice(0, 2), 16) - parseInt(sc.slice(0, 2), 16)) * t)
        const g = Math.round(parseInt(sc.slice(2, 4), 16) + (parseInt(ec.slice(2, 4), 16) - parseInt(sc.slice(2, 4), 16)) * t)
        const b = Math.round(parseInt(sc.slice(4, 6), 16) + (parseInt(ec.slice(4, 6), 16) - parseInt(sc.slice(4, 6), 16)) * t)
        return `rgba(${r},${g},${b},0.2)`
    }

    const setSize = () => {
        if (!containerRef.current || !canvasRef.current) return
        boundingRef.current = containerRef.current.getBoundingClientRect()
        const { width, height } = boundingRef.current
        const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
        canvasRef.current.width = width * dpr
        canvasRef.current.height = height * dpr
        canvasRef.current.style.width = `${width}px`
        canvasRef.current.style.height = `${height}px`
        const ctx = canvasRef.current.getContext('2d')
        if (ctx) ctx.scale(dpr, dpr)
    }

    const setLines = () => {
        if (!boundingRef.current) return
        const { width, height } = boundingRef.current
        linesRef.current = []
        lineColorsRef.current = []
        const xGap = 28
        const yGap = 28
        const oWidth = width + 200
        const oHeight = height + 30
        const totalLines = Math.ceil(oWidth / xGap)
        const totalPoints = Math.ceil(oHeight / yGap)
        const xStart = (width - xGap * totalLines) / 2
        const yStart = (height - yGap * totalPoints) / 2
        for (let i = 0; i < totalLines; i++) {
            const points: Point[] = []
            for (let j = 0; j < totalPoints; j++) {
                points.push({ x: xStart + xGap * i, y: yStart + yGap * j, wave: { x: 0, y: 0 }, cursor: { x: 0, y: 0, vx: 0, vy: 0 } })
            }
            linesRef.current.push(points)
            lineColorsRef.current.push(getLineColor(i, totalLines))
        }
    }

    const updateMousePosition = (x: number, y: number) => {
        if (!boundingRef.current) return
        const mouse = mouseRef.current
        mouse.x = x - boundingRef.current.left
        mouse.y = y - boundingRef.current.top + window.scrollY
        if (!mouse.set) { mouse.sx = mouse.x; mouse.sy = mouse.y; mouse.lx = mouse.x; mouse.ly = mouse.y; mouse.set = true }
        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
            containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
        }
    }

    const movePoints = (time: number) => {
        const noise = noiseRef.current
        if (!noise) return
        const mouse = mouseRef.current
        for (const points of linesRef.current) {
            for (const p of points) {
                const move = noise((p.x + time * 0.005) * 0.002, (p.y + time * 0.002) * 0.0015) * 6
                p.wave.x = Math.cos(move) * 8
                p.wave.y = Math.sin(move) * 4
                const dx = p.x - mouse.sx
                const dy = p.y - mouse.sy
                const d = Math.hypot(dx, dy)
                const l = Math.max(175, mouse.vs)
                if (d < l) {
                    const s = 1 - d / l
                    const f = Math.cos(d * 0.001) * s
                    p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00035
                    p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00035
                }
                p.cursor.vx += (0 - p.cursor.x) * 0.01
                p.cursor.vy += (0 - p.cursor.y) * 0.01
                p.cursor.vx *= 0.95
                p.cursor.vy *= 0.95
                p.cursor.x += p.cursor.vx
                p.cursor.y += p.cursor.vy
                p.cursor.x = Math.min(50, Math.max(-50, p.cursor.x))
                p.cursor.y = Math.min(50, Math.max(-50, p.cursor.y))
            }
        }
    }

    const moved = (p: Point, withCursor = true) => ({
        x: p.x + p.wave.x + (withCursor ? p.cursor.x : 0),
        y: p.y + p.wave.y + (withCursor ? p.cursor.y : 0),
    })

    // Canvas draw — one clear + N paths, no DOM mutations
    const drawLines = () => {
        const canvas = canvasRef.current
        if (!canvas || !boundingRef.current) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        const { width, height } = boundingRef.current
        ctx.clearRect(0, 0, width, height)
        ctx.lineWidth = strokeWidth
        for (let i = 0; i < linesRef.current.length; i++) {
            const points = linesRef.current[i]
            if (points.length < 2) continue
            ctx.beginPath()
            ctx.strokeStyle = lineColorsRef.current[i] ?? hexToRgba(strokeColor, 0.2)
            const first = moved(points[0], false)
            ctx.moveTo(first.x, first.y)
            for (let j = 1; j < points.length; j++) {
                const pt = moved(points[j])
                ctx.lineTo(pt.x, pt.y)
            }
            ctx.stroke()
        }
    }

    const tick = (time: number) => {
        const mouse = mouseRef.current
        mouse.sx += (mouse.x - mouse.sx) * 0.1
        mouse.sy += (mouse.y - mouse.sy) * 0.1
        const dx = mouse.x - mouse.lx
        const dy = mouse.y - mouse.ly
        const d = Math.hypot(dx, dy)
        mouse.v = d
        mouse.vs += (d - mouse.vs) * 0.1
        mouse.vs = Math.min(100, mouse.vs)
        mouse.lx = mouse.x
        mouse.ly = mouse.y
        mouse.a = Math.atan2(dy, dx)
        if (containerRef.current) {
            containerRef.current.style.setProperty('--x', `${mouse.sx}px`)
            containerRef.current.style.setProperty('--y', `${mouse.sy}px`)
        }
        movePoints(time)
        drawLines()
        rafRef.current = requestAnimationFrame(tick)
    }

    useEffect(() => {
        if (!containerRef.current || !canvasRef.current) return
        noiseRef.current = createNoise2D()
        setSize()
        setLines()

        const onResize = () => { setSize(); setLines() }
        const onMouseMove = (e: MouseEvent) => updateMousePosition(e.pageX, e.pageY)
        const onTouchMove = (e: TouchEvent) => { updateMousePosition(e.touches[0].clientX, e.touches[0].clientY) }

        // Safari: draw once + mousemove-driven redraws (no animation loop)
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        if (isSafari) {
            movePoints(0); drawLines()
            let safariRaf: number | null = null
            const onSafariMove = (e: MouseEvent) => {
                updateMousePosition(e.pageX, e.pageY)
                if (safariRaf) return
                safariRaf = requestAnimationFrame(() => { safariRaf = null; movePoints(0); drawLines() })
            }
            window.addEventListener('resize', onResize)
            window.addEventListener('mousemove', onSafariMove)
            return () => {
                if (safariRaf) cancelAnimationFrame(safariRaf)
                window.removeEventListener('resize', onResize)
                window.removeEventListener('mousemove', onSafariMove)
            }
        }

        window.addEventListener('resize', onResize)
        window.addEventListener('mousemove', onMouseMove)
        containerRef.current.addEventListener('touchmove', onTouchMove, { passive: true })

        const onVisibilityChange = () => {
            if (document.hidden) { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
            else if (isVisible) { rafRef.current = requestAnimationFrame(tick) }
        }
        document.addEventListener('visibilitychange', onVisibilityChange)

        let isVisible = true
        const io = new IntersectionObserver(([entry]) => {
            isVisible = entry.isIntersecting
            if (isVisible && !document.hidden) { rafRef.current = requestAnimationFrame(tick) }
            else { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
        }, { threshold: 0.01 })
        io.observe(containerRef.current)

        rafRef.current = requestAnimationFrame(tick)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            window.removeEventListener('resize', onResize)
            window.removeEventListener('mousemove', onMouseMove)
            document.removeEventListener('visibilitychange', onVisibilityChange)
            io.disconnect()
            containerRef.current?.removeEventListener('touchmove', onTouchMove)
        }
    }, [])

    return (
        <div
            ref={containerRef}
            className={`waves-component relative overflow-hidden ${className}`}
            style={{ backgroundColor, position: 'absolute', top: 0, left: 0, margin: 0, padding: 0, width: '100%', height: '100%', overflow: 'hidden', '--x': '-0.5rem', '--y': '50%' } as React.CSSProperties}
        >
            <canvas
                ref={canvasRef}
                style={{ display: 'block', width: '100%', height: '100%' }}
            />
            <div
                className="pointer-dot"
                style={{ position: 'absolute', top: 0, left: 0, width: `${pointerSize}rem`, height: `${pointerSize}rem`, background: strokeColor, borderRadius: '50%', transform: 'translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)', willChange: 'transform' }}
            />
        </div>
    )
}
