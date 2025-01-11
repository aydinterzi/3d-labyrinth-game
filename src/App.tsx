import { Canvas } from "@react-three/fiber";
import "./App.css";
import Game from "./components/Game";
import { Suspense } from "react";
import { Physics } from "@react-three/rapier";

function App() {
  return (
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense>
        <Physics debug gravity={[0, -9.81, 0]}>
          <Game />
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default App;
