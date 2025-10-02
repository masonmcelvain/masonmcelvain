import Link from "next/link";
import { Suspense } from "react";
import { MobileHeaderDropdown } from "./mobile-header-dropdown";
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
         <div className="hidden items-center space-x-8 sm:flex">
            <Link className="text-xl font-semibold" href="/code/ifixit">
               iFixit
            </Link>
            <Link className="text-xl font-semibold" href="/code/hop">
               Hop
            </Link>
            <Link className="text-xl font-semibold" href="/code/csai">
               CSAI
            </Link>
         </div>
         <div className="flex items-center space-x-2 sm:hidden">
            <MobileHeaderDropdown links={codingLinks} />
         </div>
      </header>
   );
}

const codingLinks = [
   {
      name: "iFixit - My work",
      href: "/code/ifixit",
   },
   {
      name: "Hop - Go places",
      href: "/code/hop",
   },
   {
      name: "CSAI - My beginnings",
      href: "/code/csai",
   },
];
