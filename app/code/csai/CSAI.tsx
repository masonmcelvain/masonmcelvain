"use client";

import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";

export default function CSAI() {
   return (
      <>
         <HStack justify="flex-start" gap={8}>
            <Heading as="h1" size="2xl">
               Cal Poly Computer Science & Artificial Intelligence Club (CSAI)
            </Heading>
            <GithubIcon url="https://github.com/calpoly-csai" color="#6d73b0" />
            <ExternalLinkIcon url="https://csaicalpoly.com" color="#6d73b0" />
         </HStack>
         <Box mt={8}>
            <Text>Content coming soon!</Text>
         </Box>
      </>
   );
}
