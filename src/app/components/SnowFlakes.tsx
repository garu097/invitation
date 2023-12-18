import { Box } from "@chakra-ui/react";
import { memo, useMemo } from "react";

export const SnowFlakes = memo(() => {
  const size = useMemo<string>(() => `${Math.random() * 1}vw`, []);
  return (
    <Box
      sx={{
        "--left-ini": `${Math.random() * 20 - 10}vw`,
        "--left-end": `${Math.random() * 20 - 10}vw`,
        width: size,
        height: size,
        background: "white",
        borderRadius: "full",
        position: "absolute",
        top: "-5vh",
        left: `${Math.random() * 100}vw`,
        animation: `snowfall ${5 + Math.random() * 10}s linear infinite`,
        animationDelay: Math.random() * 10,
      }}
    />
  );
});
