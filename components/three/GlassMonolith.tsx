"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float, RoundedBox } from "@react-three/drei";
import type { Mesh } from "three";

export function GlassMonolith() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.y = Math.sin(t * 0.2) * 0.15;
        meshRef.current.rotation.x = Math.cos(t * 0.15) * 0.05;
    });

    return (
        <Float
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.8}
            floatingRange={[-0.1, 0.1]}
        >
            <mesh ref={meshRef} scale={[1.8, 2.6, 0.3]} position={[0, 0, 0]}>
                <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4}>
                    <MeshTransmissionMaterial
                        backside
                        samples={6}
                        thickness={0.4}
                        chromaticAberration={0.15}
                        anisotropy={0.3}
                        distortion={0.2}
                        distortionScale={0.3}
                        temporalDistortion={0.15}
                        ior={1.25}
                        color="#0066cc"
                        roughness={0.0}
                        transmission={0.98}
                        attenuationDistance={0.5}
                        attenuationColor="#003366"
                    />
                </RoundedBox>
            </mesh>

            {/* Inner glow planes */}
            <mesh position={[0, 0, 0.01]} scale={[1.6, 2.4, 0.01]}>
                <planeGeometry />
                <meshBasicMaterial
                    color="#00AAFF"
                    transparent
                    opacity={0.03}
                />
            </mesh>

            {/* Neon edge lines */}
            {[
                [0, 1.35, 0.16] as const,
                [0, -1.35, 0.16] as const,
            ].map((pos, i) => (
                <mesh key={i} position={[pos[0], pos[1], pos[2]]} scale={[1.82, 0.003, 0.01]}>
                    <planeGeometry />
                    <meshBasicMaterial color="#00AAFF" transparent opacity={0.6} />
                </mesh>
            ))}
        </Float>
    );
}
