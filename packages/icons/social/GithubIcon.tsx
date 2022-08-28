import { FaGithub } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

export function GithubIcon() {
   return (
      <BaseIcon
         as={FaGithub}
         url="https://github.com/masonmcelvain"
         hoverColor="#333"
      />
   );
}
