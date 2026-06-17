"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Sparkles, Float } from "@react-three/drei";
import * as THREE from "three";

function WavingFabric() {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.PlaneGeometry>(null);

  // Store original positions for stable wave calculation
  const { originalPositions } = useMemo(() => {
    // Generate a reference geometry to grab initial vertex positions
    const geo = new THREE.PlaneGeometry(20, 15, 80, 80);
    return { originalPositions: new Float32Array(geo.attributes.position.array) };
  }, []);

  useFrame((state) => {
    if (geometryRef.current) {
      const time = state.clock.getElapsedTime() * 0.6;
      const positionAttribute = geometryRef.current.attributes.position;
      
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = originalPositions[i * 3];
        const y = originalPositions[i * 3 + 1];
        
        // Complex organic wave function using layered math
        const z = 
          Math.sin(x * 0.4 + time) * 0.6 +
          Math.cos(y * 0.3 + time * 0.8) * 0.6 +
          Math.sin((x + y) * 0.2 - time * 0.5) * 0.4;
          
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;
      geometryRef.current.computeVertexNormals(); // Recalculate light bouncing dynamically
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -2, -3]}>
      <planeGeometry ref={geometryRef} args={[20, 15, 80, 80]} />
      {/* Premium Silk Material */}
      <meshPhysicalMaterial
        color="#800020"          
        emissive="#2a0008"
        roughness={0.25}
        metalness={0.5}
        clearcoat={0.8}
        clearcoatRoughness={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function Hero3D() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 w-full h-full z-0 bg-black" />;
  }

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-black">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        
        {/* Dynamic Lighting for Premium Silk Feel */}
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffd700" />
        <pointLight position={[-5, 5, -5]} intensity={2} color="#ff3366" />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <WavingFabric />
        </Float>
        
        {/* Elegant Golden Dust Particles */}
        <Sparkles count={150} scale={12} size={2} speed={0.4} opacity={0.6} color="#ffd700" />
        
        <Environment preset="night" />
      </Canvas>
      
      {/* Vignette Overlay for deeper contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
    </div>
  );
}
