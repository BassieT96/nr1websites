"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 80;

export function BokehParticles() {
    const pointsRef = useRef<THREE.Points>(null);

    const { positions, sizes, opacities } = useMemo(() => {
        const positions = new Float32Array(PARTICLE_COUNT * 3);
        const sizes = new Float32Array(PARTICLE_COUNT);
        const opacities = new Float32Array(PARTICLE_COUNT);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 16;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

            sizes[i] = Math.random() * 0.08 + 0.02;
            opacities[i] = Math.random() * 0.5 + 0.1;
        }

        return { positions, sizes, opacities };
    }, []);

    const shaderMaterial = useMemo(
        () =>
            new THREE.ShaderMaterial({
                uniforms: {
                    uTime: { value: 0 },
                    uColor: { value: new THREE.Color("#00AAFF") },
                },
                vertexShader: `
          attribute float aSize;
          attribute float aOpacity;
          varying float vOpacity;
          uniform float uTime;

          void main() {
            vOpacity = aOpacity;

            vec3 pos = position;
            pos.y += sin(uTime * 0.3 + position.x * 0.5) * 0.15;
            pos.x += cos(uTime * 0.2 + position.y * 0.3) * 0.1;

            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = aSize * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
                fragmentShader: `
          varying float vOpacity;
          uniform vec3 uColor;

          void main() {
            float d = length(gl_PointCoord - vec2(0.5));
            if (d > 0.5) discard;
            float alpha = smoothstep(0.5, 0.0, d) * vOpacity;
            gl_FragColor = vec4(uColor, alpha);
          }
        `,
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
            }),
        []
    );

    useFrame((state) => {
        shaderMaterial.uniforms.uTime.value = state.clock.getElapsedTime();
    });

    return (
        <points ref={pointsRef} material={shaderMaterial}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-aSize"
                    args={[sizes, 1]}
                />
                <bufferAttribute
                    attach="attributes-aOpacity"
                    args={[opacities, 1]}
                />
            </bufferGeometry>
        </points>
    );
}
