import React, { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial, Preload } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function StarField(props) {
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(6000), { radius: 1.2 }))

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15
        ref.current.rotation.y -= delta / 20
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ff9f1c"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    )
}

const Background3D = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, background: '#050505' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarField />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    )
}

export default Background3D
