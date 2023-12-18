import { SnowFlakes } from "@/app/components/SnowFlakes";
import { Box } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box w="100dvw" h="100dvh" bgColor="bgPrimary">
      {Array(1000)
        .fill(0)
        .map((_, i) => (
          <SnowFlakes key={i} />
        ))}
    </Box>
  );
};

export default Home;
