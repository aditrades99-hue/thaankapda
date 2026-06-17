"use client";

import { useRef, Suspense, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, ContactShadows, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

function FabricTorus() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Interaction states for playful bounce effect
  const [hoveredRoll, setHoveredRoll] = useState<number | null>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation for all rolls
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
      
      // Rotate the group slowly
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.5;
      
      // Add individual bouncy rotations based on hover state
      groupRef.current.children.forEach((child, index) => {
        if (hoveredRoll === index) {
          child.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
          child.rotation.x += 0.05;
          child.rotation.z += 0.05;
        } else {
          child.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
          // Return to default rotation softly
          child.rotation.x = THREE.MathUtils.lerp(child.rotation.x, 0, 0.05);
          child.rotation.z = THREE.MathUtils.lerp(child.rotation.z, 0, 0.05);
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {/* Fabric Roll 1 */}
      <mesh 
        position={[-1.5, 0, 0]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHoveredRoll(0)}
        onPointerOut={() => setHoveredRoll(null)}
      >
        <cylinderGeometry args={[0.5, 0.5, 2.5, 64]} />
        <meshPhysicalMaterial
          color={hoveredRoll === 0 ? "#ff1a40" : "#800020"} // Royal Maroon brightens
          roughness={0.2}
          metalness={0.1}
          clearcoat={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Fabric Roll 2 */}
      <mesh 
        position={[0, 0, 0.3]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHoveredRoll(1)}
        onPointerOut={() => setHoveredRoll(null)}
      >
        <cylinderGeometry args={[0.6, 0.6, 3, 64]} />
        <meshPhysicalMaterial
          color={hoveredRoll === 1 ? "#ffff66" : "#ffd700"} // Gold brightens
          roughness={0.3}
          metalness={0.6}
          clearcoat={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Fabric Roll 3 */}
      <mesh 
        position={[1.5, 0, -0.2]} 
        castShadow 
        receiveShadow
        onPointerOver={() => setHoveredRoll(2)}
        onPointerOut={() => setHoveredRoll(null)}
      >
        <cylinderGeometry args={[0.45, 0.45, 2.2, 64]} />
        <meshPhysicalMaterial
          color={hoveredRoll === 2 ? "#5c0012" : "#2a0008"} // Velvet brightens
          roughness={0.4}
          metalness={0.2}
          clearcoat={0.1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

export function FabricVisualizer() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,215,0,0.15)] border border-zinc-800 bg-zinc-900/50 backdrop-blur-md flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-zinc-800 border-t-gold rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(255,215,0,0.15)] border border-zinc-800 bg-zinc-900/50 backdrop-blur-md cursor-grab active:cursor-grabbing">
      <Suspense fallback={
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-zinc-800 border-t-gold rounded-full animate-spin" />
        </div>
      }>
        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffd700" />
          <pointLight position={[-10, -10, -5]} intensity={1} color="#ff3366" />
          
          <PresentationControls 
            global 
            config={{ mass: 2, tension: 500 }} 
            snap={{ mass: 4, tension: 1500 }} 
            rotation={[0, 0.3, 0]} 
            polar={[-Math.PI / 3, Math.PI / 3]} 
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <FabricTorus />
          </PresentationControls>
          
          <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={10} blur={2} far={4} color="#000000" />
          <Environment preset="studio" />
        </Canvas>
      </Suspense>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-xl px-6 py-2.5 rounded-full border border-gold/30 pointer-events-none shadow-[0_0_15px_rgba(255,215,0,0.2)]">
        <p className="text-gold text-sm tracking-widest uppercase font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          Drag to interact
        </p>
      </div>
    </div>
  );
}
