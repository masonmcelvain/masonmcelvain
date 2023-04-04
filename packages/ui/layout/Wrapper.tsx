import { Box, BoxProps } from "@chakra-ui/react";
import * as React from "react";

export function Wrapper(props: BoxProps) {
   return (
      <Box
         w={{ base: "full", lg: "960px", xl: "1100px" }}
         mt={{ base: 8, md: 16 }}
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