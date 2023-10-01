import { SocialIconRow } from "@icons/social";
import Image from "next/image";
import Link from "next/link";

type FooterProps = {
   logoSrc: string;
};
export function Footer({ logoSrc }: FooterProps) {
   return (
      <div className="my-8 flex items-center justify-between px-0 md:my-16 md:px-8">
         <Link href="/">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
               <Image
                  src={logoSrc}
                  alt="Website logo"
                  sizes="(max-width: 1024px) 6rem, 8rem"
                  style={{
                     width: "100%",
                     height: "auto",
                  }}
                  width={128}
                  height={128}
               />
            </div>
         </Link>
         <SocialIconRow />
      </div>
   );
}
