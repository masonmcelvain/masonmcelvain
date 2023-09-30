import { HStack, Text, VStack } from "@chakra-ui/react";

type CaptionedVideoProps = React.PropsWithChildren<{
   mp4: string;
   webm: string;
}>;

export function CaptionedVideo({ children, mp4, webm }: CaptionedVideoProps) {
   return (
      <VStack justify="center" textAlign="center">
         <HStack width="full" justify="center">
            <video autoPlay loop playsInline width="768">
               <source src={webm} type="video/webm" />
               <source src={mp4} type="video/mp4" />
               <Text>Your browser does not support the video tag 😕</Text>
            </video>
         </HStack>
         {children}
      </VStack>
   );
}
