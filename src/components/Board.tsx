import { RigidBody, RapierRigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import useKeyPress from "../hooks/useKeyPress";

function Board() {
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

  const boardRef = useRef<RapierRigidBody>(null);
  const rotationRef = useRef({ x: 0, y: 0, z: 0 });

  useFrame(() => {
    if (!boardRef.current) return;

    let { x, y, z } = rotationRef.current;

    if (keysPressed["w"]) {
      x += 0.015;
    }
    if (keysPressed["s"]) {
      x -= 0.015;
    }

    if (keysPressed["ArrowUp"]) {
      x -= 0.015;
    }
    if (keysPressed["ArrowDown"]) {
      x += 0.015;
    }

    rotationRef.current = { x, y, z };

    const quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(x, y, z));

    boardRef.current.setNextKinematicRotation(quat);
  });

  return (
    <RigidBody ref={boardRef} type="kinematicPosition" friction={0.5}>
      <mesh>
        <boxGeometry args={[16, 1, 12]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
}

export default Board;
