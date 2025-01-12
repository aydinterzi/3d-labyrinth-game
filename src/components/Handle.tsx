interface HandleProps {
  position?: [number, number, number];
}

function Handle({ position = [0, 0, 0] }: HandleProps) {
  return (
    <mesh position={position}>
      <capsuleGeometry args={[0.2, 2]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
}

export default Handle;
