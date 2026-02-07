"use client";

import { mediaUrl } from "@/lib/media";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
   type ComponentPropsWithoutRef,
   useCallback,
   useEffect,
   useRef,
   useState,
} from "react";

const TWEEN_FACTOR_BASE = 0.52;

type ImageCarouselProps = {
   images: string[];
   alt?: string;
   caption: string;
   landscape?: boolean;
   priority?: boolean;
};

export function ImageCarousel({
   images,
   alt,
   caption,
   landscape = false,
   priority,
}: ImageCarouselProps) {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
   const tweenNodes = useRef<HTMLDivElement[]>([]);
   const tweenFactor = useRef(0);
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
   const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
   const [aspectRatios, setAspectRatios] = useState<string[]>(
      images.map(() => (landscape ? "4/3" : "3/4")),
   );

   const setTweenNodes = useCallback(() => {
      if (!emblaApi) return;
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
         return slideNode.querySelector(
            "[data-carousel-slide-inner]",
         ) as HTMLDivElement;
      });
   }, [emblaApi]);

   const setTweenFactor = useCallback(() => {
      if (!emblaApi) return;
      tweenFactor.current =
         TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
   }, [emblaApi]);

   const tweenScale = useCallback(() => {
      if (!emblaApi) return;

      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrolling = emblaApi.internalEngine().dragHandler.pointerDown();

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
         let diffToTarget = scrollSnap - scrollProgress;
         const slidesInSnap = engine.slideRegistry[snapIndex];

         slidesInSnap.forEach((slideIndex) => {
            if (isScrolling && !slidesInView.includes(slideIndex)) return;

            if (engine.options.loop) {
               engine.slideLooper.loopPoints.forEach((loopItem) => {
                  const target = loopItem.target();

                  if (slideIndex === loopItem.index && target !== 0) {
                     const sign = Math.sign(target);

                     if (sign === -1) {
                        diffToTarget = scrollSnap - (1 + scrollProgress);
                     }
                     if (sign === 1) {
                        diffToTarget = scrollSnap + (1 - scrollProgress);
                     }
                  }
               });
            }

            const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
            const scale = Math.min(Math.max(tweenValue, 0), 1);
            const tweenNode = tweenNodes.current[slideIndex];
            if (tweenNode) {
               tweenNode.style.transform = `scale(${scale})`;
            }
         });
      });
   }, [emblaApi]);

   const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
   const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

   const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setPrevBtnDisabled(!emblaApi.canScrollPrev());
      setNextBtnDisabled(!emblaApi.canScrollNext());
   }, [emblaApi]);

   const scrollTo = useCallback(
      (index: number) => emblaApi?.scrollTo(index),
      [emblaApi],
   );

   useEffect(() => {
      if (!emblaApi) return;

      setTweenNodes();
      setTweenFactor();
      tweenScale();

      emblaApi
         .on("reInit", setTweenNodes)
         .on("reInit", setTweenFactor)
         .on("reInit", tweenScale)
         .on("scroll", tweenScale)
         .on("slideFocus", tweenScale)
         .on("select", onSelect)
         .emit("select");

      return () => {
         emblaApi
            .off("reInit", setTweenNodes)
            .off("reInit", setTweenFactor)
            .off("reInit", tweenScale)
            .off("scroll", tweenScale)
            .off("slideFocus", tweenScale)
            .off("select", onSelect);
      };
   }, [emblaApi, setTweenNodes, setTweenFactor, tweenScale, onSelect]);

   const handleImageLoad = useCallback(
      (index: number, img: HTMLImageElement) => {
         setAspectRatios((prev) => {
            const next = [...prev];
            next[index] = `${img.naturalWidth}/${img.naturalHeight}`;
            return next;
         });
      },
      [],
   );

   return (
      <figure className="my-8">
         <div className="not-prose relative overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden">
               <div className="flex touch-pan-y touch-pinch-zoom">
                  {images.map((src, index) => (
                     <div
                        key={src}
                        className="min-w-0 flex-[0_0_100%] pl-4 first:pl-0"
                     >
                        <div
                           data-carousel-slide-inner
                           className="relative mx-auto w-full max-w-full overflow-hidden rounded-lg sm:max-h-[85vh] sm:w-auto"
                           style={{ aspectRatio: aspectRatios[index] }}
                        >
                           <Image
                              src={mediaUrl(src)}
                              alt={alt ?? caption}
                              fill
                              className="object-contain"
                              onLoad={(e) =>
                                 handleImageLoad(index, e.currentTarget)
                              }
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
               disabled={prevBtnDisabled}
               className="absolute top-1/2 left-4 hidden -translate-y-1/2 sm:flex"
            />
            <NextButton
               onClick={scrollNext}
               disabled={nextBtnDisabled}
               className="absolute top-1/2 right-4 hidden -translate-y-1/2 sm:flex"
            />
         </div>

         {/* Pagination Dots */}
         <div className="mt-3 flex justify-center gap-2">
            {images.map((src, index) => (
               <button
                  key={src}
                  type="button"
                  onClick={() => scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                     index === selectedIndex
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
