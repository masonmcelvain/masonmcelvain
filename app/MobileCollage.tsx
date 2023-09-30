"use client";

import Image, { ImageProps, StaticImageData } from "next/image";

import Anacapa from "@assets/images/anacapa.png";
import BarefootMason from "@assets/images/barefoot-mason.png";
import CapitolReefMason from "@assets/images/capitol-reef-mason.png";
import GlacierMason from "@assets/images/glacier-mason.png";
import IcelandMason from "@assets/images/iceland-mason.png";
import Kelp from "@assets/images/kelp.png";
import LifeguardMason from "@assets/images/lifeguard-mason.png";
import Scorpion from "@assets/images/scorpion.png";
import StackedMason from "@assets/images/stacked-mason.png";
import Surf from "@assets/images/surf.png";
import TedXMason from "@assets/images/tedx-mason.png";
import WhaleShark from "@assets/images/whale-shark.png";
import { Box, Heading, useBreakpointValue, VStack } from "@chakra-ui/react";

export function MobileCollage() {
   return (
      <Box display={{ lg: "none" }}>
         <Heading as="h4" size="lg">
            See you out there!
         </Heading>
         <VStack mt={3}>
            <StaticImage
               src={Kelp}
               alt="Aerial view of Mason kayaking in a kelp forest"
            />
            <StaticImage
               src={LifeguardMason}
               alt="Mason lifeguarding at Sycamore Cove"
            />
            <StaticImage src={IcelandMason} alt="Mason in a cave in Iceland" />
            <StaticImage src={Surf} alt="Mason surfing in Oxnard CA" />
            <StaticImage
               src={StackedMason}
               alt="Stacked images of Mason and a line drawn Mason"
            />
            <StaticImage
               src={CapitolReefMason}
               alt="Mason hiking in Capitol Reef"
            />
            <StaticImage
               src={GlacierMason}
               alt="Mason on a glacier in Iceland"
            />
            <StaticImage src={Anacapa} alt="Anacapa Arch Rock" />
            <StaticImage src={Scorpion} alt="A scorpion in Baja California" />
            <StaticImage
               src={WhaleShark}
               alt="A whale shark in Baja California"
            />
            <StaticImage
               src={BarefootMason}
               alt="Mason west of Capitol Reef, Utah"
            />
            <StaticImage
               src={TedXMason}
               alt="Mason posing for TEDx San Luis Obispo"
            />
         </VStack>
      </Box>
   );
}

type StaticImageProps = Omit<
   ImageProps,
   "src" | "width" | "height" | "layout" | "objectFit"
> & {
   src: StaticImageData;
   alt: string;
};

function StaticImage({ alt, src, ...props }: StaticImageProps) {
   const defaultW = 350;
   const w =
      useBreakpointValue({
         base: defaultW,
         sm: defaultW + 125,
         md: defaultW + 350,
      }) || defaultW;
   const ratio = src.height / src.width;
   const h = w * ratio - 1;

   return (
      <Box position="relative" w={w} h={h} mt={1}>
         <Image src={src} alt={alt} fill object-fit="cover" {...props} />
      </Box>
   );
}
