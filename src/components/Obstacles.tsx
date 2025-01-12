import { RigidBody } from "@react-three/rapier";

function Obstacles() {
  return (
    <>
      {/* Outer walls */}
      <RigidBody type="fixed" position={[0, 0.5, 6]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[16, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, 0.5, -6]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[16, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[8, 0.5, 0]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[0.5, 2, 12]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[-8, 0.5, 0]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[0.5, 2, 12]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>

      {/* Maze walls */}
      {/* Vertical walls */}
      <RigidBody type="fixed" position={[-4, 0.5, 2]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[0.5, 2, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[0, 0.5, -2]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[0.5, 2, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[4, 0.5, 1]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[0.5, 2, 10]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>

      {/* Horizontal walls */}
      <RigidBody type="fixed" position={[-6, 0.5, 0]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[4, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[-2, 0.5, 3]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[4, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" position={[2, 0.5, -3]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[4, 2, 0.5]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>

      {/* Goal marker (green platform) */}
      <RigidBody type="fixed" position={[6.5, -0.4, 4]} restitution={0.5}>
        <mesh>
          <boxGeometry args={[2.5, 0.1, 2.5]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </RigidBody>
    </>
  );
}

export default Obstacles;
