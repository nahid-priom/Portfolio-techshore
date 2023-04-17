import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import type { AppProps } from 'next/app'
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500","700","900"],
});

export default function App({ Component, pageProps } : AppProps) {
  return (
    <Box className={roboto.className} overflowX="hidden">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Box>
  );
}