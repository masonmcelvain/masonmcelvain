import { FaGithub } from "react-icons/fa";
import { BaseIcon } from "./BaseIcon";

export function GithubIcon({ color, url }: { color?: string; url: string }) {
   return <BaseIcon as={FaGithub} url={url} color={color ?? "black"} />;
}
