import Image from "next/image";
import Link from "next/link";

import { HStack } from "@chakra-ui/react";
import Favicon from "./icon.svg";

export function Header() {
   return (
      <HStack
         width="full"
         justify="space-between"
         px={{ base: 0, md: 8 }}
         mb={{ base: 8, md: 16 }}
      >
         <Link href="/">
            <Image
               src={Favicon}
               alt="Mason's initials (MM) in a circle"
               width={64}
               height={64}
            />
         </Link>
         <HStack gap={8}>
            <Link href="/code/hop">Hop</Link>
            <Link href="/code/ifixit">iFixit</Link>
            <Link href="/code/csai">CSAI</Link>
         </HStack>
      </HStack>
   );
}
