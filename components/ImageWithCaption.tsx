"use client";

import { mediaUrl } from "@/lib/media";
import Image from "next/image";
import { useState } from "react";

type ImageWithCaptionProps = {
   src: string;
   alt?: string;
   caption: string;
   landscape?: boolean;
   priority?: boolean;
};

export function ImageWithCaption({
   src,
   alt,
   caption,
   landscape = false,
   priority,
}: ImageWithCaptionProps) {
   const [aspectRatio, setAspectRatio] = useState(landscape ? "4/3" : "3/4");
   return (
      <figure className="my-8">
         <div
            className="not-prose relative w-full max-w-full overflow-hidden rounded-lg sm:mx-auto sm:max-h-[85vh] sm:w-auto"
            style={{ aspectRatio }}
         >
            <Image
               src={mediaUrl(src)}
               alt={alt ?? caption}
               fill
               className="object-contain"
               onLoad={(e) => {
                  const img = e.currentTarget;
                  setAspectRatio(`${img.naturalWidth}/${img.naturalHeight}`);
               }}
               priority={priority}
            />
         </div>
         <figcaption className="mt-2 text-center text-sm text-gray-500">
            {caption}
         </figcaption>
      </figure>
   );
}
