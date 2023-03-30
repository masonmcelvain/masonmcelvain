import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

export function PageContentWrapper(props: BoxProps) {
   return (
      <Box
         w={{ base: "full", lg: "960px", xl: "1100px" }}
         mx="auto"
         px={{
            base: 4,
            sm: 6,
            lg: 0,
         }}
         {...props}
      />
   );
}