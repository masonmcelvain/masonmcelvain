import Image from "next/image";
import Link from "next/link";
import Favicon from "./icon.svg";

export function Header() {
   return (
      <div className="mb-8 flex w-full items-center justify-between px-0 md:mb-16 md:px-8">
         <Link href="/">
            <Image
               src={Favicon}
               alt="Mason's initials (MM) in a circle"
               width={64}
               height={64}
            />
         </Link>
         <div className="flex items-center space-x-8">
            <Link href="/code/hop">Hop</Link>
            <Link href="/code/ifixit">iFixit</Link>
            <Link href="/code/csai">CSAI</Link>
         </div>
      </div>
   );
}
