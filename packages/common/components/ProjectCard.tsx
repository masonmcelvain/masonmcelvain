import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

export type ProjectCardProps = {
   src: StaticImageData;
   alt: string;
   title: string;
   caption: string;
   href: string;
   gradientFrom: string;
   gradientTo: string;
};

export function ProjectCard({
   src,
   alt,
   title,
   caption,
   href,
   gradientFrom,
   gradientTo,
}: ProjectCardProps) {
   return (
      <Link href={href}>
         <div
            className={`mx-auto w-[22rem] rounded bg-gradient-to-tl p-8 transition-transform hover:-translate-y-0.5 sm:w-[28rem] md:w-[30rem] xl:w-[32rem] ${gradientFrom} ${gradientTo}`}
         >
            <div className="flex flex-col justify-start space-y-4">
               <div className="relative flex h-[225px] justify-center sm:h-[275px] md:h-[300px] lg:h-[275px] xl:h-[300px]">
                  <Image
                     src={src}
                     alt={alt}
                     fill
                     sizes="32rem"
                     objectFit="contain"
                  />
               </div>
               <h2 className="text-4xl font-bold text-white">{title}</h2>
               <p className="text-white">{caption}</p>
            </div>
         </div>
      </Link>
   );
}
