import { SocialIconRow } from "@icons/social";
import Link from "next/link";
import { Suspense } from "react";
import { Signet } from "./Signet";

type FooterProps = {
   logoSrc: string;
};
export function Footer({ logoSrc }: FooterProps) {
   return (
      <footer className="my-8 flex items-center justify-between px-0 md:my-16 md:px-8">
         <Link href="/">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
               <Suspense>
                  <Signet logoSrc={logoSrc} />
               </Suspense>
            </div>
         </Link>
         <SocialIconRow />
      </footer>
   );
}
