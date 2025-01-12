interface HandleProps {
  position?: [number, number, number];
}

function Handle({ position = [0, 0, 0] }: HandleProps) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
      <capsuleGeometry args={[0.2, 2]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default Handle;
