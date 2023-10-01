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

export function MobileCollage() {
   return (
      <div className="lg:hidden">
         <div className="flex w-full items-center justify-center">
            <h3 className="text-3xl">See you out there!</h3>
         </div>
         <div className="mt-3 flex flex-col items-center space-y-2">
            <StaticImage
               src={Kelp}
               alt="Aerial view of Mason kayaking in a kelp forest"
            />
            <StaticImage
               src={LifeguardMason}
               alt="Mason lifeguarding at Sycamore Cove"
            />
            <StaticImage src={IcelandMason} alt="Mason in a cave in Iceland" />
            <StaticImage src={Surf} alt="Mason surfing in Oxnard CA" />
            <StaticImage
               src={StackedMason}
               alt="Stacked images of Mason and a line drawn Mason"
            />
            <StaticImage
               src={CapitolReefMason}
               alt="Mason hiking in Capitol Reef"
            />
            <StaticImage
               src={GlacierMason}
               alt="Mason on a glacier in Iceland"
            />
            <StaticImage src={Anacapa} alt="Anacapa Arch Rock" />
            <StaticImage src={Scorpion} alt="A scorpion in Baja California" />
            <StaticImage
               src={WhaleShark}
               alt="A whale shark in Baja California"
            />
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
   alt: string;
   src: StaticImageData;
};

function StaticImage({ alt, src }: StaticImageProps) {
   return (
      <div className="relative mt-1 w-[350px] sm:w-[475px] md:w-[700px]">
         <Image
            src={src}
            alt={alt}
            style={{
               width: "100%",
               height: "auto",
            }}
            sizes="(max-width: 640px) 350px, (max-width: 768px) 475px, 700px"
         />
      </div>
   );
}
