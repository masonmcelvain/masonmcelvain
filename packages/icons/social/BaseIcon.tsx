import { Center, Icon, IconProps } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";

type BaseIconProps = IconProps & {
   as: IconType;
   url: string;
   hoverColor: string;
};

export function BaseIcon({ as, url, hoverColor, ...props }: BaseIconProps) {
   return (
      <Link href={url} target="_blank">
         <Center>
            <Icon
               as={as}
               w={8}
               h={8}
               color="black"
               opacity={0.3}
               _hover={{
                  color: hoverColor,
                  opacity: 1,
                  transitionDuration: "0.2s",
               }}
               {...props}
            />
         </Center>
      </Link>
   );
}