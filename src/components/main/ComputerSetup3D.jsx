import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';

// Computer setup components with improved details
import Desk from './computer/Desk';
import Monitor from './computer/Monitor';
import Keyboard from './computer/Keyboard';
import Mouse from './computer/Mouse';
import Chair from './computer/Chair';
import Cpu from './computer/Cpu';



// Main scene component
const Scene = () => {
  const groupRef = useRef();
  const [monitorOn, setMonitorOn] = useState(true);
  const [mouseActive, setMouseActive] = useState(false);
  const { camera } = useThree();
  
  // Add subtle animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta*0.5;
    }
  });

  return (
    <>
      <directionalLight 
        position={[0, 0, 2]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <Environment preset="city" />
      
      <group ref={groupRef}>
        <Desk />
        <Monitor />
        <Keyboard />
        <Mouse />
        <Chair />
        <Cpu />
        
        {/* Interactive elements */}
        <mesh 
          position={[0, 0.6, 0.2]}
        >
          <boxGeometry args={[0.2, 0.05, 0.05]} />
          <meshStandardMaterial color={monitorOn ? "#00ff00" : "#ff0000"} visible={false} />
        </mesh>
        
        <mesh 
          position={[0.3, -0.4, 0.6]}
        >
          <sphereGeometry args={[0.12, 16, 8]} />
          <meshStandardMaterial color="#ff0000" visible={false} />
        </mesh>
      </group>
      
      <OrbitControls 
        enableZoom={false}
        enablePan={true}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2}
        camera={camera}
      />
    </>
  );
};

// Main component
const ComputerSetup3D = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1, 5]}}
      className="absolute inset-0 w-[70%]"
    >
      <Scene />
    </Canvas>
  );
};

export default ComputerSetup3D;