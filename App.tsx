import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import React, { useRef, useState } from "react";
import { View } from "react-native";

function Box(props) {
  const mesh = useRef<Mesh>(null!);
  useFrame((state, delta) => (mesh.current.rotation.y += delta));
  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
}

export default function App() {
  const [active, setActive] = useState(false);

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, -2, 0]} />
        <Box position={[0, 2, 0]} />
        <mesh onClick={(event) => setActive(!active)} scale={active ? 1.5 : 1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </View>
  );
}
