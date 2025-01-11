function Obstacles() {
  return (
    <>
      <mesh>
        <boxGeometry args={[16, 1, 12]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </>
  );
}

export default Obstacles;
