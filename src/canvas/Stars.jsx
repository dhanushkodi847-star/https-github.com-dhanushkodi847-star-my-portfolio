import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';

// Fallback to random points generation instead of maath to avoid potential build issues
const generateSpherePoints = (numPoints, radius) => {
  const points = new Float32Array(numPoints * 3);
  for (let i = 0; i < numPoints; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    points[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // x
    points[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
    points[i * 3 + 2] = r * Math.cos(phi);                   // z
  }
  return points;
};

const StarsBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => generateSpherePoints(4000, 1.2));

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#66FCF1'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-screen fixed inset-0 z-0 pointer-events-none'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarsBackground />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
