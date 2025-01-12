import { OrbitControls } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

import Board from "./Board";
import Ball from "./Ball";
import Handle from "./Handle";
import useKeyPress from "../hooks/useKeyPress";

function Game() {
  const boardRef = useRef(null);

  // w, a, s, d ve yön tuşlarını dinleyelim
  const keysPressed = useKeyPress([
    "w",
    "a",
    "s",
    "d",
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
  ]);

  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />

      <group ref={boardRef} position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <Handle position={[-8, -0.5, 3]} />
        <Handle position={[-8, -0.5, -3]} />
        <Board />
        <Ball />
      </group>
    </>
  );
}

export default Game;
