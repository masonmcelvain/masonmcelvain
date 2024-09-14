import Link from "next/link";
import { Suspense } from "react";
import { Signet } from "./Signet";

type HeaderProps = {
   logoSrc: string;
};
export function Header({ logoSrc }: HeaderProps) {
   return (
      <header className="mb-8 flex w-full items-center justify-between md:px-8">
         <Link href="/">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
               <Suspense>
                  <Signet logoSrc={logoSrc} priority />
               </Suspense>
            </div>
         </Link>
         <div className="flex items-center space-x-8">
            <Link className="text-xl font-semibold" href="/code/hop">
               Hop
            </Link>
            <Link className="text-xl font-semibold" href="/code/ifixit">
               iFixit
            </Link>
            <Link className="text-xl font-semibold" href="/code/csai">
               CSAI
            </Link>
            <Link className="text-xl font-semibold" href="/climbing">
               Climbing
            </Link>
         </div>
      </header>
   );
}
