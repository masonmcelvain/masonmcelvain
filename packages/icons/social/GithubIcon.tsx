import { FaGithub } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

type GithubIconProps = {
   ariaLabel: string;
   color?: string;
   url: string;
};
export function GithubIcon({ ariaLabel, color, url }: GithubIconProps) {
   return (
      <BaseIcon
         ariaLabel={ariaLabel}
         Icon={FaGithub}
         color={color ?? "black"}
         url={url}
      />
   );
}
