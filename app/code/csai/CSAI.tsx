"use client";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import { CSAIProse } from "@markdown/csai";

export default function CSAI() {
   return (
      <>
         <HStack justify="flex-start" gap={8}>
            <Heading as="h1" size="2xl">
               CSAI
            </Heading>
            <GithubIcon url="https://github.com/calpoly-csai" color="#6d73b0" />
            <ExternalLinkIcon url="https://csaicalpoly.com" color="#6d73b0" />
         </HStack>
         <Box mt={8}>
            <CSAIProse />
         </Box>
      </>
   );
}
