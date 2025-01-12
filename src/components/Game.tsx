import { OrbitControls } from "@react-three/drei";
import Board from "./Board";
import Ball from "./Ball";
import Handle from "./Handle";
import Obstacles from "./Obstacles";
import useGameState from "../hooks/useGameState";
import { Html } from "@react-three/drei";

function Game() {
  const { isGameOver, hasWon, resetGame } = useGameState();

  const handleRestart = () => {
    resetGame();
    // Reset ball position (you might want to create a more sophisticated reset mechanism)
    window.location.reload();
  };

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
        <Obstacles />
      </group>

      {(isGameOver || hasWon) && (
        <Html center>
          <div
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <h2>{hasWon ? "You Won!" : "Game Over!"}</h2>
            <button
              onClick={handleRestart}
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Play Again
            </button>
          </div>
        </Html>
      )}
    </>
  );
}

export default Game;
