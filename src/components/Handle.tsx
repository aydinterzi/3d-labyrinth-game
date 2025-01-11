function Handle() {
  return (
    <>
      <mesh rotation={[Math.PI / 2, 0, Math.PI / 2]} position={[-8, -0.5, 0]}>
        <capsuleGeometry args={[0.2, 2]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  );
}

export default Handle;
