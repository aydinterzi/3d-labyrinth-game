import { RapierRigidBody, RigidBody } from "@react-three/rapier";
import { useRef } from "react";

function Ball() {
  const ball = useRef<RapierRigidBody>(null);

  return (
    <RigidBody
      type="dynamic"
      mass={1}
      position={[0, 5, 0]}
      ref={ball}
      restitution={0.5}
    >
      <mesh position={[0, 5, 0]}>
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </RigidBody>
  );
}

export default Ball;
