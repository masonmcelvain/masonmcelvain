"use client";

import { Box, Heading, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import { IFixitProse } from "@markdown/ifixit";

export default function iFixit() {
   return (
      <>
         <HStack justify="flex-start" gap={8}>
            <Heading as="h1" size="2xl">
               iFixit
            </Heading>
            <GithubIcon url="https://github.com/iFixit" color="#0071ce" />
            <ExternalLinkIcon url="https://www.ifixit.com" color="#0071ce" />
         </HStack>
         <Box mt={8}>
            <IFixitProse />
         </Box>
      </>
   );
}
