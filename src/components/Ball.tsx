import { RigidBody } from "@react-three/rapier";

function Ball() {
  return (
    <RigidBody
      type="dynamic"
      mass={2}
      position={[0, 5, 0]}
      restitution={0.5}
      colliders="ball"
    >
      <mesh>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </RigidBody>
  );
}

export default Ball;
