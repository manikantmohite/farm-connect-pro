import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import * as THREE from "three";

function Plant({ position, scale = 1, color = "#22c55e" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Stem */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.02, 0.04, 0.8, 8]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
      {/* Leaves */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, 0.5 + i * 0.25, 0]} rotation={[0, (i * Math.PI * 2) / 3, Math.PI / 6]}>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial color={color} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial color="#1a3a15" />
    </mesh>
  );
}

function FloatingOrb({ position, color }: { position: [number, number, number]; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={position}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

export default function FarmScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} dpr={[1, 1.5]}>
        <fog attach="fog" args={["#0f1a0d", 5, 15]} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 8, 5]} intensity={1} color="#fef3c7" />
        <pointLight position={[-3, 2, -3]} intensity={0.5} color="#22c55e" />

        <Ground />

        {/* Crop rows */}
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <Plant
              key={`${row}-${col}`}
              position={[col * 0.8 - 1.5, 0, row * 0.7 - 1]}
              scale={0.6 + Math.random() * 0.4}
              color={["#22c55e", "#16a34a", "#4ade80"][Math.floor(Math.random() * 3)]}
            />
          ))
        )}

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <FloatingOrb
            key={i}
            position={[Math.sin(i) * 2, 1 + Math.random(), Math.cos(i) * 2]}
            color={i % 2 === 0 ? "#22c55e" : "#f59e0b"}
          />
        ))}

        <Environment preset="forest" />
      </Canvas>
    </div>
  );
}
