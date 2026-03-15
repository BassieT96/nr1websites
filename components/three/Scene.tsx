"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import type { Group } from "three";

interface SceneProps {
    children: React.ReactNode;
    className?: string;
}

function SceneContent({ children }: { children: React.ReactNode }) {
    const group = useRef<Group>(null);
    return <group ref={group}>{children}</group>;
}

export function Scene({ children, className = "" }: SceneProps) {
    return (
        <div className={`absolute inset-0 ${className}`}>
            <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: "high-performance",
                }}
                style={{ pointerEvents: "none" }}
            >
                <Suspense fallback={null}>
                    <SceneContent>{children}</SceneContent>
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
