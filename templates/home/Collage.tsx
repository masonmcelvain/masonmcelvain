import Image, { ImageProps, StaticImageData } from "next/image";
import Anacapa from "@assets/images/anacapa.png";
import GlacierMason from "@assets/images/glacier-mason.png";
import IcelandMason from "@assets/images/iceland-mason.png";
import Kelp from "@assets/images/kelp.png";
import LifeguardMason from "@assets/images/lifeguard-mason.png";
import Scorpion from "@assets/images/scorpion.png";
import StackedMason from "@assets/images/stacked-mason.png";
import Surf from "@assets/images/surf.png";
import WhaleShark from "@assets/images/whale-shark.png";
import BarefootMason from "@assets/images/barefoot-mason.png";
import TedXMason from "@assets/images/tedx-mason.png";
import CapitolReefMason from "@assets/images/capitol-reef-mason.png";
import {
   Box,
   Center,
   Heading,
   HStack,
   useBreakpointValue,
   VStack,
} from "@chakra-ui/react";

const defaultH = 180;

export function Collage() {
   return (
      <VStack display={{ base: "none", lg: "flex" }} mb={20}>
         <HStack w="full" justify="space-between">
            <VStack>
               <HStack w="full" justify="space-between">
                  <Center w="50%">
                     <Heading as="h4" size="lg">
                        See you out there!
                     </Heading>
                  </Center>
                  <StaticImage
                     src={Kelp}
                     alt="Aerial view of Mason kayaking in a kelp forest"
                  />
               </HStack>
               <HStack w="full" justify="space-between">
                  <StaticImage
                     src={LifeguardMason}
                     alt="Mason lifeguarding at Sycamore Cove"
                  />
                  <StaticImage
                     src={IcelandMason}
                     alt="Mason in a cave in Iceland"
                  />
                  <StaticImage src={Surf} alt="Mason surfing in Oxnard CA" />
               </HStack>
            </VStack>
            <StaticImage
               src={StackedMason}
               alt="Stacked images of Mason and a line drawn Mason"
               multiplier={2.04}
            />
         </HStack>
         <HStack w="full" justify="space-between">
            <StaticImage
               src={GlacierMason}
               alt="Mason on a glacier in Iceland"
            />
            <StaticImage
               src={CapitolReefMason}
               alt="Mason hiking in Capitol Reef"
            />
            <VStack>
               <StaticImage
                  src={Anacapa}
                  alt="Anacapa Arch Rock"
                  multiplier={0.375}
               />
               <HStack>
                  <StaticImage
                     src={Scorpion}
                     alt="A scorpion in Baja California"
                     multiplier={0.58}
                  />
                  <StaticImage
                     src={WhaleShark}
                     alt="A whale shark in Baja California"
                     multiplier={0.58}
                  />
               </HStack>
            </VStack>
            <StaticImage
               src={BarefootMason}
               alt="Mason west of Capitol Reef, Utah"
            />
            <StaticImage
               src={TedXMason}
               alt="Mason posing for TEDx San Luis Obispo"
            />
         </HStack>
      </VStack>
   );
}

type StaticImageProps = Omit<
   ImageProps,
   "src" | "width" | "height" | "layout" | "objectFit"
> & {
   src: StaticImageData;
   alt: string;
   multiplier?: number;
};

function StaticImage({ alt, src, multiplier = 1, ...props }: StaticImageProps) {
   const h =
      useBreakpointValue({
         lg: multiplier * defaultH,
         xl: multiplier * (defaultH + 30),
      }) || defaultH;
   const ratio = src.width / src.height;
   const w = h * ratio - 1;

   return (
      <Box position="relative" w={w} h={h} m="0.5px">
         <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            {...props}
         />
      </Box>
   );
}
