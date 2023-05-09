"use client";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { GithubIcon } from "@icons/social";
import { HopProse } from "@markdown/hop";

export default function HopPage() {
   return (
      <>
         <HStack justify="flex-start" gap={8}>
            <Heading as="h1" size="2xl">
               Hop
            </Heading>
            <GithubIcon url="https://github.com/masonmcelvain/hop" />
         </HStack>
         <Box>
            <HopProse />
         </Box>
      </>
   );
}
