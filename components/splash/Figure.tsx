import { splashImages } from "@data/splash";
import Image from "next/image";

type FigureProps = {
   image: string;
   alt: string;
   caption?: string;
};

function isSplashImageKey(key: string): key is keyof typeof splashImages {
   return Object.hasOwn(splashImages, key);
}

export function Figure({ image, alt, caption }: FigureProps) {
   if (!isSplashImageKey(image)) {
      throw new Error(
         `<Figure image="${image}">: unknown image. Expected one of: ${Object.keys(splashImages).join(", ")} (see data/splash.ts).`,
      );
   }
   return (
      <figure className="my-8">
         {/* Intrinsic width capped at the column so small sources aren't
             upscaled. */}
         <Image
            src={splashImages[image]}
            alt={alt}
            sizes="(min-width: 1280px) 68.75rem, (min-width: 1024px) 60rem, 100vw"
            className="mx-auto my-0 h-auto max-w-full rounded-lg"
         />
         {caption && (
            <figcaption className="text-foreground-subtle mt-2 text-center text-sm">
               {caption}
            </figcaption>
         )}
      </figure>
   );
}
