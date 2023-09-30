import Image, { ImageProps, StaticImageData } from "next/image";

type CaptionedImageProps = React.PropsWithChildren<{
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
      <div className="flex flex-col items-center text-center">
         <Image src={src} alt={alt} {...imageProps} />
         {children}
      </div>
   );
}
