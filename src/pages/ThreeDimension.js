import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const ThreeDimension = () => {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.5} />
      <mesh
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onHover={(event) => setHover(true)}
        onHoverOut={(event) => {setHover(false)}}
        position={[0, 0, 0]}
      >
        <boxBufferGeometry attatch="geometry" />
        <meshStandardMaterial color={hovered ? 'smokewhite' : 'orange'} />
      </mesh>
    </Canvas>
  );
};

export default ThreeDimension;
