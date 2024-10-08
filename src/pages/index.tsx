import { BGChristmas } from "@/app/components/BGChristmas";
import { SnowFlakes } from "@/app/components/SnowFlakes";
import { Box, Flex } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import "../assets/styles/font.scss";

const Home = () => {
  return (
    <Box w="100dvw" h="100dvh" bgColor="bgPrimary">
      <Flex h="full" flexDir="column" alignContent="center" justifyContent="start">
        <BGChristmas />

        <TypeAnimation
          sequence={[500, "Merry Christmas!"]}
          cursor={false}
          style={{
            fontFamily: "Dancing",
            fontSize: 64,
            color: "white",
            fontWeight: 700,
            textAlign: "center",
          }}
        />

        <TypeAnimation
          sequence={[2000, "Wishing you a wonderful holiday season."]}
          cursor={false}
          style={{
            fontFamily: "Dancing",
            fontSize: 32,
            color: "white",
            textAlign: "center",
          }}
        />
      </Flex>

      <Box position="absolute" top="0" left="0" maxH="full">
        {Array(28)
          .fill(0)
          .map((_, i) => (
            <SnowFlakes key={i} />
          ))}
      </Box>
    </Box>
  );
};

export default Home;
