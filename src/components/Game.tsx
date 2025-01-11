import { OrbitControls } from "@react-three/drei";
import Board from "./Board";
import Ball from "./Ball";
import Handle from "./Handle";
function Game() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <group position={[0, 0, 0]}>
        <Handle />
        <Board />
        <Ball />
      </group>
    </>
  );
}

export default Game;
