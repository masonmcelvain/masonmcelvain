import Image from "next/image";
import type { StaticImageData } from "next/image";
import Anacapa from "@public/images/anacapa.png";
import BarefootMason from "@public/images/barefoot-mason.png";
import CapitolReefMason from "@public/images/capitol-reef-mason.png";
import GlacierMason from "@public/images/glacier-mason.png";
import IcelandMason from "@public/images/iceland-mason.png";
import Kelp from "@public/images/kelp.png";
import LifeguardMason from "@public/images/lifeguard-mason.png";
import Scorpion from "@public/images/scorpion.png";
import StackedMason from "@public/images/stacked-mason.png";
import Surf from "@public/images/surf.png";
import TedXMason from "@public/images/tedx-mason.png";
import WhaleShark from "@public/images/whale-shark.png";

type CollageImage = {
   src: StaticImageData;
   alt: string;
};

const images: CollageImage[] = [
   { src: Kelp, alt: "Aerial view of Mason kayaking in a kelp forest" },
   { src: LifeguardMason, alt: "Mason lifeguarding at Sycamore Cove" },
   { src: IcelandMason, alt: "Mason in a cave in Iceland" },
   { src: Surf, alt: "Mason surfing in Oxnard CA" },
   { src: StackedMason, alt: "Stacked images of Mason and a line drawn Mason" },
   { src: GlacierMason, alt: "Mason on a glacier in Iceland" },
   { src: CapitolReefMason, alt: "Mason hiking in Capitol Reef" },
   { src: Anacapa, alt: "Anacapa Arch Rock" },
   { src: Scorpion, alt: "A scorpion in Baja California" },
   { src: WhaleShark, alt: "A whale shark in Baja California" },
   { src: BarefootMason, alt: "Mason west of Capitol Reef, Utah" },
   { src: TedXMason, alt: "Mason posing for TEDx San Luis Obispo" },
];

export function Collage() {
   return (
      <div className="mb-12">
         <div className="mb-16 flex w-full items-center justify-center">
            <p className="text-3xl font-bold">See you out there!</p>
         </div>
         <div className="columns-1 gap-2 sm:columns-2 lg:columns-3">
            {images.map((image, index) => (
               <div key={index} className="mb-2 break-inside-avoid">
                  <Image
                     src={image.src}
                     alt={image.alt}
                     style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                     }}
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
               </div>
            ))}
         </div>
      </div>
   );
}
