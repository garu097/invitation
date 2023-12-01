import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/configs/chakra.config";

export const AppChakraProvider = (props: { children?: ReactNode }) => (
  <ChakraProvider theme={theme}>
    {props.children}
  </ChakraProvider>
);
