import { IconProps } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

type GithubIconProps = IconProps & {
   url: string;
   hoverColor?: string;
};

export function GithubIcon({ url, hoverColor, ...props }: GithubIconProps) {
   return (
      <BaseIcon
         as={FaGithub}
         url={url}
         hoverColor={hoverColor ?? "#333"}
         {...props}
      />
   );
}
