
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

export default Chair;