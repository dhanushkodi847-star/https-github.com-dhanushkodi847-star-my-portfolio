import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const AbstractObject = () => {
  const meshRef = useRef();

  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <Sphere args={[1, 100, 200]} scale={1.2}>
        <MeshDistortMaterial
          color="#66FCF1"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#66FCF1"
          emissiveIntensity={0.2}
          wireframe={true}
        />
      </Sphere>
    </mesh>
  );
};

const HeroObjectCanvas = () => {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#66FCF1" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#B026FF" />
        <AbstractObject />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};

export default HeroObjectCanvas;
