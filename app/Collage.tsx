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

export function Collage() {
   return (
      <div className="mb-20 hidden flex-col items-center space-y-2 lg:flex">
         <div className="flex w-full items-center justify-between space-x-2">
            <div className="flex flex-col items-center space-y-2">
               <div className="flex w-full items-center justify-between space-x-2">
                  <div className="flex w-1/2 items-center justify-center">
                     <p className="text-3xl font-bold">See you out there!</p>
                  </div>
                  <StaticImage
                     src={Kelp}
                     alt="Aerial view of Mason kayaking in a kelp forest"
                  />
               </div>
               <div className="flex w-full items-center justify-between space-x-2">
                  <StaticImage
                     src={LifeguardMason}
                     alt="Mason lifeguarding at Sycamore Cove"
                  />
                  <StaticImage
                     src={IcelandMason}
                     alt="Mason in a cave in Iceland"
                  />
                  <StaticImage src={Surf} alt="Mason surfing in Oxnard CA" />
               </div>
            </div>
            <StaticImage
               src={StackedMason}
               alt="Stacked images of Mason and a line drawn Mason"
               lgH="lg:h-[367.2px]"
               xlH="xl:h-[428.4px]"
            />
         </div>
         <div className="flex w-full items-center justify-between space-x-2">
            <StaticImage
               src={GlacierMason}
               alt="Mason on a glacier in Iceland"
            />
            <StaticImage
               src={CapitolReefMason}
               alt="Mason hiking in Capitol Reef"
            />
            <div className="flex flex-col items-center space-y-2">
               <StaticImage
                  src={Anacapa}
                  alt="Anacapa Arch Rock"
                  lgH="lg:h-[67.5px]"
                  xlH="xl:h-[78.75px]"
               />
               <div className="flex items-center space-x-2">
                  <StaticImage
                     src={Scorpion}
                     alt="A scorpion in Baja California"
                     lgH="lg:h-[104.4px]"
                     xlH="xl:h-[121.8px]"
                  />
                  <StaticImage
                     src={WhaleShark}
                     alt="A whale shark in Baja California"
                     lgH="lg:h-[104.4px]"
                     xlH="xl:h-[121.8px]"
                  />
               </div>
            </div>
            <StaticImage
               src={BarefootMason}
               alt="Mason west of Capitol Reef, Utah"
            />
            <StaticImage
               src={TedXMason}
               alt="Mason posing for TEDx San Luis Obispo"
            />
         </div>
      </div>
   );
}

type StaticImageProps = {
   src: StaticImageData;
   alt: string;
   lgH?: string;
   xlH?: string;
};

function StaticImage({
   alt,
   src,
   lgH = "lg:h-[180px]",
   xlH = "xl:h-[210px]",
}: StaticImageProps) {
   return (
      <div className={`relative m-[0.5px] ${lgH} ${xlH}`}>
         <Image
            src={src}
            alt={alt}
            style={{
               width: "auto",
               height: "100%",
            }}
            sizes="500px"
         />
      </div>
   );
}
