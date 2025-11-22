import Image from "next/image";
import type { StaticImageData } from "next/image";
import Anacapa from "@assets/images/anacapa.png";
import BarefootMason from "@assets/images/barefoot-mason.png";
import CapitolReefMason from "@assets/images/capitol-reef-mason.png";
import GlacierMason from "@assets/images/glacier-mason.png";
import IcelandMason from "@assets/images/iceland-mason.png";
import Kelp from "@assets/images/kelp.png";
import LifeguardMason from "@assets/images/lifeguard-mason.png";
import Scorpion from "@assets/images/scorpion.png";
import StackedMason from "@assets/images/stacked-mason.png";
import Surf from "@assets/images/surf.png";
import TedXMason from "@assets/images/tedx-mason.png";
import WhaleShark from "@assets/images/whale-shark.png";

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
