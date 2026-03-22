"use client";

import { mediaUrl } from "@/lib/media";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
   type ComponentPropsWithoutRef,
   useCallback,
   useEffect,
   useState,
} from "react";

type CarouselImage = {
   src: string;
   orientation: "portrait" | "landscape";
};

type ImageCarouselProps = {
   images: CarouselImage[];
   alt?: string;
   caption: string;
   priority?: boolean;
};

export function ImageCarousel({
   images,
   alt,
   caption,
   priority,
}: ImageCarouselProps) {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
   const [selectedSnap, setSelectedSnap] = useState(0);

   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
   const scrollTo = useCallback(
      (index: number) => emblaApi?.scrollTo(index),
      [emblaApi],
   );

   useEffect(() => {
      if (!emblaApi) return;

      const onSelect = (api: typeof emblaApi) =>
         setSelectedSnap(api!.selectedScrollSnap());

      onSelect(emblaApi);
      emblaApi.on("reInit", onSelect).on("select", onSelect);

      return () => {
         emblaApi.off("reInit", onSelect).off("select", onSelect);
      };
   }, [emblaApi]);

   return (
      <figure className="my-8">
         <div className="not-prose relative">
            <div ref={emblaRef} className="overflow-hidden">
               <div className="flex touch-pan-y touch-pinch-zoom items-center">
                  {images.map((img, index) => (
                     <div
                        key={img.src}
                        className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0"
                     >
                        <div
                           className="relative mx-auto w-full max-w-full sm:max-h-[85vh] sm:w-auto"
                           style={{
                              aspectRatio:
                                 img.orientation === "landscape"
                                    ? "4/3"
                                    : "3/4",
                           }}
                        >
                           <Image
                              src={mediaUrl(img.src)}
                              alt={alt ?? caption}
                              fill
                              className="object-contain"
                              priority={priority && index === 0}
                           />
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            {/* Navigation Arrows (desktop only) */}
            <PrevButton
               onClick={scrollPrev}
               className="absolute top-1/2 left-4 hidden -translate-y-1/2 sm:flex"
            />
            <NextButton
               onClick={scrollNext}
               className="absolute top-1/2 right-4 hidden -translate-y-1/2 sm:flex"
            />
         </div>

         {/* Pagination Dots */}
         <div className="mt-3 flex justify-center gap-2">
            {images.map((img, index) => (
               <button
                  key={img.src}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                     index === selectedSnap
                        ? "bg-foreground"
                        : "bg-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
               />
            ))}
         </div>

         <figcaption className="text-foreground-subtle mt-2 text-center text-sm">
            {caption}
         </figcaption>
      </figure>
   );
}

type ButtonProps = ComponentPropsWithoutRef<"button">;

function PrevButton({ className, ...props }: ButtonProps) {
   return (
      <button
         type="button"
         className={`group h-10 w-10 items-center justify-center rounded-full bg-black/35 backdrop-blur-lg focus:outline-none ${className ?? ""}`}
         aria-label="Previous slide"
         {...props}
      >
         <svg
            className="h-6 w-6 -translate-x-px text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M15 19l-7-7 7-7"
            />
         </svg>
      </button>
   );
}

function NextButton({ className, ...props }: ButtonProps) {
   return (
      <button
         type="button"
         className={`group h-10 w-10 items-center justify-center rounded-full bg-black/35 backdrop-blur-lg focus:outline-none ${className ?? ""}`}
         aria-label="Next slide"
         {...props}
      >
         <svg
            className="h-6 w-6 translate-x-px text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
         >
            <path
               strokeLinecap="round"
               strokeLinejoin="round"
               d="M9 5l7 7-7 7"
            />
         </svg>
      </button>
   );
}
