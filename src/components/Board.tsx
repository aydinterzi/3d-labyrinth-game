import { RigidBody } from "@react-three/rapier";

function Board() {
  return (
    <RigidBody type="kinematicPosition" friction={0.5} position={[0, -0.5, 0]}>
      <mesh>
        <boxGeometry args={[16, 1, 12]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
}

export default Board;
