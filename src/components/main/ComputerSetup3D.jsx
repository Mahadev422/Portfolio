import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { DoubleSide, TextureLoader } from 'three';

// Computer setup components with improved details
const Desk = () => {
  return (
    <group>
      <mesh position={[-0.2, -0.5, 0]} receiveShadow>
        <boxGeometry args={[5, 0.1, 2]} />
        <meshStandardMaterial color="#333333" roughness={0.8} />
      </mesh>
      {/* Desk legs */}
      {[-1.8, 1.8].map((x) => 
        [-0.8, 0.8].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -1.1, z]} castShadow>
            <cylinderGeometry args={[0.1, 0.1, 1.2, 8]} />
            <meshStandardMaterial color="#222222" />
          </mesh>
        ))
      )}
    </group>
  );
};

const Monitor = () => {
  // Using a real image URL from Unsplash
  const ref = useRef()
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.PI;
  });

  const screenTexture = useLoader(
    TextureLoader, '/Portfolio/image.png'
  );
  return (
    <group position={[0, 0, 0]}>
      {/* Monitor frame (black border) */}
      <mesh position={[0, 0.6, 0.115]}>
        <boxGeometry args={[1.8, 1, 0.03]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Screen surface with image texture */}
      <mesh position={[0, 0.6, 0.095]} ref={ref} >
        <planeGeometry args={[1.75, 0.99]} />
        <meshStandardMaterial 
          map={screenTexture}
          side={DoubleSide}
          toneMapped={false}
        />
      </mesh>

      {/* Monitor stand */}
      <group position={[0, -0.25, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.05, 0.1, 0.7, 8]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
        <mesh position={[0, -0.2, 0]}>
          <boxGeometry args={[0.5, 0.2, 0.35]} />
          <meshStandardMaterial color="#555555" />
        </mesh>
      </group>
    </group>
  );
};

const Keyboard = () => {
  // Load key textures (replace with your actual paths)

  return (
    <group position={[0, -0.4, -0.5]} rotation={[-0.1, 0, 0]}>
      {/* Keyboard base */}
      <mesh castShadow>
        <boxGeometry args={[1.2, 0.05, 0.4]} />
        <meshStandardMaterial color="#111111" roughness={0.8} />
      </mesh>

      {/* Keyboard keys - QWERTY layout */}
      <group position={[0, 0.03, 0]}>
        {/* Top row (QWERTY...) */}
        {['Q','W','E','R','T','Y','U','I','O','P'].map((key, i) => (
          <mesh 
            key={`top-${key}`} 
            position={[-0.5 + (i * 0.1), 0.02, 0]}
            castShadow
          >
            <boxGeometry args={[0.08, 0.02, 0.08]} />
            <meshStandardMaterial
              color="#222222" 
              roughness={0.6}
            />
            {/* Key label */}
            <Html
              position={[0, 0.015, 0]}
              transform
              distanceFactor={10}
              style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold',
                pointerEvents: 'none'
              }}
            >
              {}
            </Html>
          </mesh>
        ))}

        {/* Home row (ASDF...) */}
        {['A','S','D','F','G','H','J','K','L'].map((key, i) => (
          <mesh 
            key={`home-${key}`}
            position={[-0.45 + (i * 0.1), 0.05, 0.1]}
            castShadow
          >
            <boxGeometry args={[0.08, 0.02, 0.08]} />
            <meshStandardMaterial 
              color="#222222"
            />
            <Html
              position={[0, 0.015, 0]}
              transform
              style={{ 
                color: 'white',
                fontSize: '8px',
                fontWeight: 'bold'
              }}
            >
              {}
            </Html>
          </mesh>
        ))}

        {/* Space bar */}
        <mesh position={[0, 0.02, -0.12]} castShadow>
          <boxGeometry args={[0.4, 0.02, 0.1]} />
          <meshStandardMaterial 
            color="#333333"
          />
          <Html
            position={[0, 0.015, 0]}
            transform
            style={{
              width: '80px',
              textAlign: 'center',
              color: 'transparent',
              fontSize: '1px'
            }}
          >
            
          </Html>
        </mesh>
      </group>
    </group>
  );
};

const Mouse = () => {

  return (
    <mesh 
      position={[1, -0.4, -0.6]} 
      rotation={[-Math.PI / 4, 0, 0]}
      castShadow
    >
      <sphereGeometry args={[0.15, 16, 8]} />
      <meshStandardMaterial 
        color={"#333333"} 
        emissive={"#00ffaa"}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const Chair = () => {
  return (
    <group position={[0, 0, -1.8]}>
      <mesh position={[0, -0.5, 0]} castShadow>
        <boxGeometry args={[1, 0.1, 1]} />
        <meshStandardMaterial color="#654321" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0, -0.46]} castShadow>
        <boxGeometry args={[1, 1, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      {/* Chair legs */}
      {[-0.4, 0.4].map((x) => 
        [-0.4, 0.4].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -1.1, z]} castShadow>
            <cylinderGeometry args={[0.05, 0.05, 1.2, 8]} />
            <meshStandardMaterial color="#543210" />
          </mesh>
        ))
      )}
    </group>
  );
};

const Mug = () => {
  return (
    <group position={[-1.5, 0.2, 0]} castShadow>
      <mesh position={[-0.3, 0, 0]}>
        <boxGeometry args={[0.8, 1.5, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      <mesh position={[-0.3, 0.2, -0.5]}>
        <torusGeometry args={[0.2, 0.1, 10, 100]}/>
        <meshStandardMaterial color={'blue'} />
      </mesh>
      <mesh position={[-0.3, -0.35, -0.48]}>
        <boxGeometry args={[0.6, 0.3, 0.05]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
};


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
        <Mug />
        
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