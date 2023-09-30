"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@ui/theme";

export function ChakraProviders({ children }: React.PropsWithChildren) {
   return (
      <CacheProvider>
         <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
   );
}
