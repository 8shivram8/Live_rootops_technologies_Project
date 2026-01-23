import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedSphere = ({ position, color, speed, distort }: { position: [number, number, number]; color: string; speed: number; distort: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const FloatingTorus = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <torusGeometry args={[0.8, 0.2, 16, 100]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.4}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
};

const FloatingBox = ({ position, color }: { position: [number, number, number]; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <spotLight position={[0, 10, 0]} intensity={0.8} color="#818cf8" angle={0.5} />
      
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      
      {/* Main spheres */}
      <AnimatedSphere position={[-3, 1, -2]} color="#6366f1" speed={1} distort={0.4} />
      <AnimatedSphere position={[3, -1, -3]} color="#a855f7" speed={0.8} distort={0.3} />
      <AnimatedSphere position={[0, 2, -4]} color="#818cf8" speed={1.2} distort={0.5} />
      
      {/* Floating shapes */}
      <FloatingTorus position={[-4, -2, -2]} color="#6366f1" />
      <FloatingTorus position={[4, 2, -3]} color="#a855f7" />
      <FloatingBox position={[-2, -2, -1]} color="#818cf8" />
      <FloatingBox position={[2, 1, -2]} color="#6366f1" />
      <FloatingBox position={[0, -1.5, -3]} color="#a855f7" />
    </>
  );
};

const HeroBackground3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroBackground3D;
