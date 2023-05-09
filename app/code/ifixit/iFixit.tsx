"use client";

import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { GithubIcon } from "@icons/social";

export default function iFixit() {
   return (
      <>
         <HStack justify="flex-start" gap={8}>
            <Heading as="h1" size="2xl">
               iFixit
            </Heading>
            <GithubIcon url="https://github.com/iFixit" hoverColor="#0071ce" />
         </HStack>
         <Box mt={8}>
            <Text>Content coming soon!</Text>
         </Box>
      </>
   );
}
