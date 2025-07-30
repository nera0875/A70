import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const DNAHelix = () => {
  const groupRef = useRef<THREE.Group>(null)

  const createHelixPoints = (numPoints: number, radius: number, height: number) => {
    const points = []
    for (let i = 0; i < numPoints; i++) {
      const t = (i / numPoints) * Math.PI * 6 // 3 full turns
      const x = Math.cos(t) * radius
      const z = Math.sin(t) * radius
      const y = (i / numPoints) * height - height / 2
      points.push([x, y, z])
    }
    return points
  }

  const helix1 = createHelixPoints(100, 1, 8)
  const helix2 = createHelixPoints(100, 1, 8).map(([x, y, z]) => [-x, y, -z]) // Mirror for second strand

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01
    }
  })

  return (
    <group ref={groupRef}>
      {/* First DNA strand */}
      {helix1.map((position, i) => (
        <Sphere key={`strand1-${i}`} args={[0.05, 8, 8]} position={position as [number, number, number]}>
          <meshBasicMaterial color="#ffffff" transparent opacity={0.8} />
        </Sphere>
      ))}
      
      {/* Second DNA strand */}
      {helix2.map((position, i) => (
        <Sphere key={`strand2-${i}`} args={[0.05, 8, 8]} position={position as [number, number, number]}>
          <meshBasicMaterial color="#cccccc" transparent opacity={0.8} />
        </Sphere>
      ))}

      {/* Base pairs connecting the strands */}
      {helix1.map((pos1, i) => {
        if (i % 3 === 0) { // Draw connections every 3rd point
          const pos2 = helix2[i]
          const points = [new THREE.Vector3(...pos1 as [number, number, number]), new THREE.Vector3(...pos2 as [number, number, number])]
          return (
            <line key={`connection-${i}`}>
              <bufferGeometry attach="geometry" setFromPoints={points} />
              <lineBasicMaterial color="#888888" transparent opacity={0.6} />
            </line>
          )
        }
        return null
      })}
    </group>
  )
}

export default DNAHelix
