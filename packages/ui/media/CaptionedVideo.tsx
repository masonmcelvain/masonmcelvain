import { Box, HStack, Text, VStack } from "@chakra-ui/react";

type CaptionedVideoProps = React.PropsWithChildren<{
   src: string;
}>;

export function CaptionedVideo({ children, src }: CaptionedVideoProps) {
   return (
      <VStack justify="center">
         <HStack width="full" justify="center">
            <video autoPlay loop width="768">
               <source src={src} />
            </video>
         </HStack>
         {children}
      </VStack>
   );
}
