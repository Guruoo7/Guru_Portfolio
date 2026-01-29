import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei'

function FloatingShape({ position, color, speed = 1, distort = 0.3, scale = 1, shape = 'sphere' }) {
    const meshRef = useRef()

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed
        }
    })

    const ShapeComponent = {
        sphere: Sphere,
        torus: Torus,
        box: Box,
    }[shape] || Sphere

    const args = {
        sphere: [1, 64, 64],
        torus: [1, 0.4, 32, 64],
        box: [1, 1, 1],
    }[shape]

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <ShapeComponent ref={meshRef} position={position} scale={scale} args={args}>
                <MeshDistortMaterial
                    color={color}
                    attach="material"
                    distort={distort}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                />
            </ShapeComponent>
        </Float>
    )
}

function AnimatedIcons() {
    return (
        <div className="canvas-container" style={{ height: '100%', position: 'absolute' }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />

                <FloatingShape
                    position={[-3, 2, 0]}
                    color="#6366f1"
                    shape="sphere"
                    scale={0.8}
                    distort={0.4}
                />
                <FloatingShape
                    position={[3.5, -1.5, -1]}
                    color="#8b5cf6"
                    shape="torus"
                    scale={0.7}
                    speed={0.8}
                />
                <FloatingShape
                    position={[-2.5, -2, 1]}
                    color="#06b6d4"
                    shape="box"
                    scale={0.6}
                    distort={0.2}
                    speed={1.2}
                />
                <FloatingShape
                    position={[2, 2.5, -2]}
                    color="#a855f7"
                    shape="sphere"
                    scale={0.5}
                    distort={0.5}
                />
                <FloatingShape
                    position={[0, -3, 0]}
                    color="#ec4899"
                    shape="torus"
                    scale={0.4}
                    speed={0.6}
                />
            </Canvas>
        </div>
    )
}

export default AnimatedIcons
