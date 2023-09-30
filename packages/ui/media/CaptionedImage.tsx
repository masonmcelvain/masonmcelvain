import { Box, Text } from "@chakra-ui/react";
import Image, { ImageProps, StaticImageData } from "next/image";

type CaptionedImageProps = {
   src: StaticImageData;
   alt?: string;
   caption: string;
   imageProps: ImageProps;
};

export function CaptionedImage({
   src,
   alt,
   caption,
   ...imageProps
}: CaptionedImageProps) {
   return (
      <Box>
         <Image src={src} alt={alt ?? caption} {...imageProps} />
         <Text mt={2} fontSize="sm" color="gray.500">
            {caption}
         </Text>
      </Box>
   );
}
