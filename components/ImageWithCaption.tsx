import Image from "next/image";

type ImageWithCaptionProps = {
   src: string;
   alt?: string;
   caption: string;
};

export function ImageWithCaption({ src, alt, caption }: ImageWithCaptionProps) {
   return (
      <figure className="my-8">
         <Image
            src={src}
            alt={alt ?? caption}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto w-full max-w-full rounded-lg sm:mx-auto sm:max-h-[85vh] sm:w-auto"
         />
         <figcaption className="mt-2 text-center text-sm text-gray-500">
            {caption}
         </figcaption>
      </figure>
   );
}
