import MountainProjectLogo from "@assets/images/mountain-project-logo.png";
import { Box } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export function MountainProjectIcon() {
   return (
      <Link
         href="https://www.mountainproject.com/user/201271324/mason-mcelvain"
         target="_blank"
      >
         <Box
            opacity={0.3}
            _hover={{
               opacity: 1,
               transitionDuration: "0.2s",
            }}
         >
            <Image
               alt="Mason on Mountain Project"
               src={MountainProjectLogo}
               width="31"
               height="31"
               priority
            />
         </Box>
      </Link>
   );
}
