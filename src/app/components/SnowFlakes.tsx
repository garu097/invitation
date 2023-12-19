import { Box, keyframes } from "@chakra-ui/react";
import { memo, useMemo } from "react";

const snowfall = keyframes`  
  from {transform: translate3d(var(--left-ini), 0, 0);}   
  to {transform: translate3d(var(--left-end), 100vh, 0);} 
`;

export const SnowFlakes = memo(() => {
  const animationSnowfall = useMemo<string>(() => `${snowfall} infinite ${5 + Math.random() * 10}s linear`, [snowfall]);
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
        top: "-1vh",
        left: `${Math.random() * 100}vw`,
        animation: animationSnowfall,
        animationDelay: `${Math.random() * 10}s`,
        zIndex: 100,
      }}
    />
  );
});
