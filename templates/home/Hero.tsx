import {
   Box,
   Flex,
   Heading,
   HeadingProps,
   useBreakpointValue,
   VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import RockMason from "@assets/images/rock-mason.png";

export function Hero() {
   return (
      <>
         <Flex
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            px={{ base: 4, sm: 0, md: 4, lg: 4, xl: 16 }}
            mt={8}
         >
            <Title />
            <Box
               position="relative"
               display="block"
               w={{ base: 200, lg: 375 }}
               h={{ base: 200, lg: 375 }}
               borderRadius="100%"
               overflow="hidden"
               mt={8}
            >
               <Image
                  src={RockMason}
                  alt="Mason Climbing in Tuolomne Meadows"
                  layout="fill"
                  objectFit="cover"
               />
            </Box>
         </Flex>
      </>
   );
}

function Title() {
   const isMobile = useBreakpointValue({ base: true, md: false }) || false;
   return isMobile ? (
      <VStack alignItems="left">
         <TitleHeading>Hi, I&apos;m Mason.</TitleHeading>
         <TitleHeading>Full Stack Developer at iFixit.</TitleHeading>
      </VStack>
   ) : (
      <VStack alignItems="left">
         <TitleHeading>Hi, I&apos;m Mason.</TitleHeading>
         <TitleHeading>Full Stack Developer</TitleHeading>
         <TitleHeading>at iFixit.</TitleHeading>
      </VStack>
   );
}

type TitleProps = React.PropsWithChildren & HeadingProps;

function TitleHeading({ children, ...props }: TitleProps) {
   return (
      <Heading
         as="h1"
         size={{ base: "lg", sm: "xl", md: "2xl" }}
         lineHeight={{ base: 1, md: 1.5 }}
         whiteSpace="nowrap"
         {...props}
      >
         {children}
      </Heading>
   );
}
