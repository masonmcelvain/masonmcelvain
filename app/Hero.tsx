"use client";

import Image from "next/image";

import RockMason from "@assets/images/rock-mason.png";
import { Box, Flex, Heading } from "@chakra-ui/react";

export function Hero() {
   return (
      <>
         <Flex
            direction={{ base: "column", md: "row" }}
            width="full"
            alignItems="center"
            justifyContent="space-between"
            gap={{ base: 8, md: 16, xl: 32 }}
            px={{ base: 4, lg: 8 }}
         >
            <Heading
               as="h1"
               size={{ base: "lg", sm: "xl", md: "2xl" }}
               lineHeight={{ base: 1, md: 1.5 }}
               flex="1 0 min-content"
            >
               Hi, I&apos;m Mason.
               <br />
               Full Stack Developer at iFixit.
            </Heading>
            <Box
               position="relative"
               w={{ base: 200, lg: 375 }}
               h={{ base: 200, lg: 375 }}
               borderRadius="100%"
               overflow="hidden"
            >
               <Image
                  src={RockMason}
                  alt="Mason Climbing in Tuolomne Meadows"
                  fill
                  object-fit="cover"
                  priority
               />
            </Box>
         </Flex>
      </>
   );
}
