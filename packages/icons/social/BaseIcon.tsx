import { Center, Icon, IconProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

type BaseIconProps = IconProps & {
   as: IconType;
   url: string;
};

export function BaseIcon({ as, url, ...props }: BaseIconProps) {
   return (
      <Link href={url} target="_blank">
         <Center>
            <Icon
               as={as}
               w={8}
               h={8}
               opacity={0.3}
               _hover={{
                  opacity: 1,
                  transitionDuration: "0.2s",
               }}
               {...props}
            />
         </Center>
      </Link>
   );
}
