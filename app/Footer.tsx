import Image from "next/image";
import Link from "next/link";

import { SocialIconRow } from "@icons/social";
import Favicon from "./icon.svg";

export function Footer() {
   return (
      <div className="my-16 flex items-center justify-between px-0 md:px-8">
         <Link href="/">
            <Image
               src={Favicon}
               alt="Mason's initials (MM) in a circle"
               width={64}
               height={64}
            />
         </Link>
         <SocialIconRow />
      </div>
   );
}
