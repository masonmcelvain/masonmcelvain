import Image from "next/image";
import type { StaticImageData } from "next/image";
import Anacapa from "@public/images/anacapa.png";
import BarefootMason from "@public/images/barefoot-mason.png";
import GlacierMason from "@public/images/glacier-mason.png";
import IcelandMason from "@public/images/iceland-mason.png";
import Kelp from "@public/images/kelp.png";
import LifeguardMason from "@public/images/lifeguard-mason.png";
import Scorpion from "@public/images/scorpion.png";
import StackedMason from "@public/images/stacked-mason.png";
import Surf from "@public/images/surf.png";
import WhaleShark from "@public/images/whale-shark.png";

import BellsCanyon from "@public/images/bells.png";
import CastleValley from "@public/images/castle.png";
import IndianCreek from "@public/images/creek.png";
import DevilsTower from "@public/images/devilstower.jpg";
import Flower from "@public/images/flower.png";
import LaSals from "@public/images/lasals.png";
import LittleCottonwood from "@public/images/llc.png";
import LonePeak from "@public/images/lonepeak.jpg";
import Potatoe from "@public/images/potatoe.png";
import RedRocks from "@public/images/redrocks.png";
import RrgDanny from "@public/images/rrg-danny.jpg";
import RrgElliott from "@public/images/rrg-elliott.jpg";
import TennisCody from "@public/images/tennis.png";
import Tower from "@public/images/tower.png";
import Tree from "@public/images/tree.png";
import Trout from "@public/images/trout.png";
import WhiteLines from "@public/images/whitelines.png";

type CollageImage = {
   src: StaticImageData;
   alt: string;
   title?: string;
};

const images: CollageImage[] = [
   { src: BellsCanyon, alt: "Arm and Hammer, Bells Canyon" },
   { src: CastleValley, alt: "The Rectory, Castle Valley" },
   { src: IndianCreek, alt: "Way Rambo, Indian Creek" },
   { src: DevilsTower, alt: "El Matador, Devil's Tower" },
   { src: Flower, alt: "Roadside sunflower, Sandy" },
   { src: LaSals, alt: "La Sals" },
   { src: LittleCottonwood, alt: "Little Cottonwood Canyon" },
   { src: LonePeak, alt: "Jolly Green Giant, Lone Peak" },
   { src: Potatoe, alt: "Potatoe cat" },
   { src: RedRocks, alt: "Epinephrine, Red Rocks" },
   { src: RrgDanny, alt: "Shady Grove, Red River Gorge" },
   { src: RrgElliott, alt: "Shady Grove, Red River Gorge" },
   { src: TennisCody, alt: "Tennis pros, Cornville" },
   { src: Tower, alt: "Atop Washer Woman tower, Moab" },
   {
      src: Tree,
      alt: "A big tree, near Mammoth Lakes",
      title: "Near Mammoth Lakes",
   },
   {
      src: Trout,
      alt: "Trout fishing the Walker River, Eastern Sierra",
      title: "Walker River, Eastern Sierra",
   },
   { src: WhiteLines, alt: "White Lines, Donner Pass" },
   { src: Kelp, alt: "Kelp forest, Carpinteria", title: "Carpinteria" },
   { src: LifeguardMason, alt: "Lifeguarding, Sycamore Cove" },
   { src: IcelandMason, alt: "Icelandic cave" },
   { src: Surf, alt: "Silver Strand, Oxnard" },
   { src: StackedMason, alt: "Surfing Iceland by Wyatt McLean" },
   { src: GlacierMason, alt: "Icelandic glacier" },
   { src: Anacapa, alt: "Anacapa arch rock" },
   {
      src: Scorpion,
      alt: "Scorpion, Baja California",
      title: "Baja California",
   },
   {
      src: WhaleShark,
      alt: "Whale shark, Baja California",
      title: "Baja California",
   },
   { src: BarefootMason, alt: "West of Capitol Reef" },
];

export function Collage() {
   return (
      <div className="mb-12">
         <div className="mb-16 flex w-full items-center justify-center">
            <p className="text-3xl font-bold">See you out there!</p>
         </div>
         <div className="columns-1 gap-2 sm:columns-2 lg:columns-3">
            {images.map((image, index) => (
               <label
                  key={index}
                  className="relative inline-block break-inside-avoid"
               >
                  <input type="checkbox" className="peer sr-only" />
                  <Image
                     src={image.src}
                     alt={image.alt}
                     style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                     }}
                     sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                     title={image.title ?? image.alt}
                  />
                  <div className="pointer-events-none absolute right-0 bottom-0 left-0 bg-black/75 px-3 py-2 text-sm text-white opacity-0 transition-opacity duration-200 peer-checked:opacity-100 md:peer-checked:opacity-0 md:hover:opacity-100">
                     {image.title ?? image.alt}
                  </div>
               </label>
            ))}
         </div>
      </div>
   );
}
