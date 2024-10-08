import { Tree } from "@/app/components/models/Tree";
import { Box } from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const BGChristmas = () => {
  return (
    <Box>
      <Canvas style={{ width: "100vw", height: "60vh" }} camera={{ enableZoom: false }}>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} enableZoom={false} enableRotate={false} />
        <ambientLight intensity={Math.PI / 2} />
        <Tree />
      </Canvas>
    </Box>
  );
};
