import Image from "next/image";
import Link from "next/link";

import { HStack, StackProps } from "@chakra-ui/react";
import { SocialIconRow } from "@icons/social";
import Favicon from "@public/favicon/android-chrome-512x512.png";

type FooterProps = StackProps;

export function Footer(props: FooterProps) {
   return (
      <HStack justify="space-between" px={8} my={16} {...props}>
         <Link href="/">
            <Image
               src={Favicon}
               alt="Mason's initials (MM) in a circle"
               width={64}
               height={64}
            />
         </Link>
         <SocialIconRow />
      </HStack>
   );
}
