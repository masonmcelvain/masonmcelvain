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
   const [hasPlayed, setHasPlayed] = useState(false);

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
         video.addEventListener("play", () => setHasPlayed(true), {
            once: true,
         });
      },
      [updateAspectRatio],
   );

   return (
      <figure className="my-8">
         <div
            className="not-prose relative w-full max-w-full overflow-hidden rounded-lg sm:mx-auto sm:max-h-[85vh] sm:w-auto"
            style={{ aspectRatio }}
         >
            {!hasPlayed && (
               // eslint-disable-next-line @next/next/no-img-element
               <img
                  src={mediaUrl(poster)}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full rounded-lg object-cover"
               />
            )}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption -- No caption tracks available */}
            <video
               ref={videoRef}
               src={mediaUrl(src)}
               className="h-full w-full object-contain"
               muted={muted}
               controls
               playsInline
               preload="metadata"
            />
         </div>
         <figcaption className="mt-2 text-center text-sm text-gray-500">
            {caption}
         </figcaption>
      </figure>
   );
}
