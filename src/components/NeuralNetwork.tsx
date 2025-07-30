import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null)

  const numNeurons = 50
  const neurons = Array.from({ length: numNeurons }).map(() => ({
    position: [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
    ],
    color: new THREE.Color(0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5, 0.5 + Math.random() * 0.5)
  }))

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005
      groupRef.current.rotation.x += 0.002
    }
  })

  return (
    <group ref={groupRef}>
      {neurons.map((neuron, i) => (
        <Sphere key={i} args={[0.08, 16, 16]} position={neuron.position as [number, number, number]}>
          <meshBasicMaterial color={neuron.color} transparent opacity={0.8} />
        </Sphere>
      ))}
      {/* Connections between neurons */}
      {neurons.map((neuronA, i) => {
        return neurons.map((neuronB, j) => {
          if (i !== j && Math.random() > 0.9) { // Randomly connect some neurons
            const points = [new THREE.Vector3(...neuronA.position as [number, number, number]), new THREE.Vector3(...neuronB.position as [number, number, number])]
            return (
              <line key={`${i}-${j}`}>
                <bufferGeometry attach="geometry" setFromPoints={points} />
                <lineBasicMaterial color="#888888" transparent opacity={0.3} />
              </line>
            )
          }
          return null
        })
      })}
    </group>
  )
}

export default NeuralNetwork
