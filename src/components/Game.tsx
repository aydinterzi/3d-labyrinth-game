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
      <group>
        <Board />
        <Handle position={[-8, -0.5, 3]} />
        <Handle position={[-8, -0.5, -3]} />
        <Ball />
      </group>
    </>
  );
}

export default Game;
