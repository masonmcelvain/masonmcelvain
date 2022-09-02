import { IconProps } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

type GithubIconProps = IconProps & {
   url: string;
};

export function GithubIcon({ url, ...props }: GithubIconProps) {
   return <BaseIcon as={FaGithub} url={url} hoverColor="#333" {...props} />;
}
