import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

type HeaderProps = {
   Logo: StaticImageData;
};
export function Header({ Logo }: HeaderProps) {
   return (
      <div className="mb-8 flex w-full items-center justify-between px-0 md:mb-16 md:px-8">
         <Link href="/">
            <div className="h-[6rem] w-[6rem] lg:h-[8rem] lg:w-[8rem]">
               <Image src={Logo} alt="Website logo" priority />
            </div>
         </Link>
         <div className="flex items-center space-x-8">
            <Link
               className="text-xl font-semibold text-black hover:no-underline"
               href="/code/hop"
            >
               Hop
            </Link>
            <Link
               className="text-xl font-semibold text-black hover:no-underline"
               href="/code/ifixit"
            >
               iFixit
            </Link>
            <Link
               className="text-xl font-semibold text-black hover:no-underline"
               href="/code/csai"
            >
               CSAI
            </Link>
         </div>
      </div>
   );
}
