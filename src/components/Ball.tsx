import { RigidBody } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { RapierRigidBody } from "@react-three/rapier";
import useGameState from "../hooks/useGameState";

const START_POSITION: [number, number, number] = [-7, 1, -4];

function Ball() {
  const ballRef = useRef<RapierRigidBody>(null);
  const { setGameOver, setWin } = useGameState();

  useEffect(() => {
    const checkBallPosition = () => {
      if (!ballRef.current) return;

      const position = ballRef.current.translation();

      // Check if ball fell off the board
      if (position.y < -10) {
        setGameOver(true);
      }

      // Check if ball reached the goal area (green platform)
      if (
        position.x > 5.5 &&
        position.x < 7.5 &&
        position.z > 3 &&
        position.z < 5
      ) {
        setWin(true);
      }
    };

    const interval = setInterval(checkBallPosition, 100);
    return () => clearInterval(interval);
  }, [setGameOver, setWin]);

  return (
    <RigidBody
      ref={ballRef}
      type="dynamic"
      mass={2}
      position={START_POSITION}
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
