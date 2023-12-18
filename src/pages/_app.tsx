import { AppChakraProvider } from "@/providers/chakra-provider";
import { combineProviders } from "@/utils";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return combineProviders([AppChakraProvider], <Component {...pageProps} />);
}

export default MyApp;
