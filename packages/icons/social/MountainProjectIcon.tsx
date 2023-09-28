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
               src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaCTGHNVVx5V2BRX78sRQjGSkkR49dgQ9vvt_PX7wgB1uHE7DvL-cI5GX1Yc0F7nUsW4Ha9zyY3piegQwbLjGSN_OWi8iw=w1920-h1058"
               width="31"
               height="31"
               priority
            />
         </Box>
      </Link>
   );
}
