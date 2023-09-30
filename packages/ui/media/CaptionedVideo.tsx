import { Box, HStack, Text, VStack } from "@chakra-ui/react";

type CaptionedVideoProps = React.PropsWithChildren<{
   src: string;
   type: string;
}>;

export function CaptionedVideo({ children, src, type }: CaptionedVideoProps) {
   return (
      <VStack justify="center" textAlign="center">
         <HStack width="full" justify="center">
            <video autoPlay loop playsInline width="768">
               <source src={src} type={type} />
            </video>
         </HStack>
         {children}
      </VStack>
   );
}
