import { SocialIconRow } from "@icons/social";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type FooterProps = {
   Logo: StaticImageData;
};
export function Footer({ Logo }: FooterProps) {
   return (
      <div className="my-8 flex items-center justify-between px-0 md:my-16 md:px-8">
         <Link href="/">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
               <Image src={Logo} alt="Website logo" />
            </div>
         </Link>
         <SocialIconRow />
      </div>
   );
}
