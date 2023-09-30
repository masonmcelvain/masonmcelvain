import { Box } from "@chakra-ui/react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { PropsWithChildren } from "react";

type CaptionedImageProps = PropsWithChildren<{
   src: StaticImageData;
   alt: string;
   imageProps: ImageProps;
}>;

export function CaptionedImage({
   children,
   src,
   alt,
   ...imageProps
}: CaptionedImageProps) {
   return (
      <Box textAlign="center">
         <Image src={src} alt={alt} {...imageProps} />
         {children}
      </Box>
   );
}
