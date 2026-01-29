"use client";

import { mediaUrl } from "@/lib/media";
import { useCallback, useRef, useState } from "react";

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
   const videoElementRef = useRef<HTMLVideoElement | null>(null);

   const updateAspectRatio = useCallback((video: HTMLVideoElement) => {
      if (video.videoWidth && video.videoHeight) {
         setAspectRatio(`${video.videoWidth}/${video.videoHeight}`);
      }
   }, []);

   const videoRef = useCallback(
      (video: HTMLVideoElement | null) => {
         if (!video) return;
         videoElementRef.current = video;
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

   const handlePlayClick = useCallback(() => {
      videoElementRef.current?.play();
   }, []);

   return (
      <figure className="my-8">
         <div
            className="not-prose relative w-full max-w-full overflow-hidden rounded-lg sm:mx-auto sm:max-h-[85vh] sm:w-auto"
            style={{ aspectRatio }}
         >
            {!hasPlayed && (
               <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                     src={mediaUrl(poster)}
                     alt=""
                     className="pointer-events-none absolute inset-0 h-full w-full rounded-lg object-cover"
                  />
                  <button
                     type="button"
                     onClick={handlePlayClick}
                     className="group absolute inset-0 flex items-center justify-center focus:outline-none"
                     aria-label="Play video"
                  >
                     <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black/35 ring-white/70 backdrop-blur-lg group-focus-visible:ring-2">
                        <svg
                           className="h-11 w-11 translate-x-0.5 text-white"
                           fill="currentColor"
                           viewBox="0 0 24 24"
                        >
                           <path d="M8.2 5.8C7.4 5.2 6.5 5.8 6.5 6.8v10.4c0 1 .9 1.6 1.7 1l10.1-5.2c.7-.4.7-1.4 0-1.8L8.2 5.8z" />
                        </svg>
                     </div>
                  </button>
               </>
            )}
            {/* eslint-disable-next-line jsx-a11y/media-has-caption -- No caption tracks available */}
            <video
               ref={videoRef}
               src={mediaUrl(src)}
               poster={mediaUrl(poster)}
               className="h-full w-full object-contain"
               muted={muted}
               controls
               playsInline
               preload="metadata"
            />
         </div>
         <figcaption className="text-foreground-subtle mt-2 text-center text-sm">
            {caption}
         </figcaption>
      </figure>
   );
}
