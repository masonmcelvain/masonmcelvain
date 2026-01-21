"use client";

import { mediaUrl } from "@/lib/media";
import { useCallback, useState } from "react";

type VideoWithCaptionProps = {
   src: string;
   poster: string;
   caption: string;
   landscape?: boolean;
   muted?: boolean;
};

export function VideoWithCaption({
   src,
   poster,
   caption,
   landscape = false,
   muted = false,
}: VideoWithCaptionProps) {
   const [aspectRatio, setAspectRatio] = useState(landscape ? "16/9" : "9/16");

   const updateAspectRatio = useCallback((video: HTMLVideoElement) => {
      if (video.videoWidth && video.videoHeight) {
         setAspectRatio(`${video.videoWidth}/${video.videoHeight}`);
      }
   }, []);

   const videoRef = useCallback(
      (video: HTMLVideoElement | null) => {
         if (!video) return;
         if (video.readyState >= 1) {
            updateAspectRatio(video);
         }
         video.addEventListener("loadedmetadata", () =>
            updateAspectRatio(video),
         );
      },
      [updateAspectRatio],
   );

   return (
      <figure className="my-8">
         <div
            className="not-prose relative w-full max-w-full overflow-hidden rounded-lg sm:mx-auto sm:max-h-[85vh] sm:w-auto"
            style={{ aspectRatio }}
         >
            <video
               ref={videoRef}
               src={mediaUrl(src)}
               poster={mediaUrl(poster)}
               className="h-full w-full object-contain"
               muted={muted}
               controls
               playsInline
            />
         </div>
         <figcaption className="mt-2 text-center text-sm text-gray-500">
            {caption}
         </figcaption>
      </figure>
   );
}
