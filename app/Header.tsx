import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
   logoSrc: string;
};
export async function Header({ logoSrc }: HeaderProps) {
   return (
      <div className="mb-8 flex w-full items-center justify-between px-0 md:mb-16 md:px-8">
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
                  priority
               />
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
