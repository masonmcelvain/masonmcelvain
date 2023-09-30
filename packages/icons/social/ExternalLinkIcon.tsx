import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BaseIcon } from "./BaseIcon";

type ExternalLinkIconProps = {
   url: string;
   color?: string;
};
export function ExternalLinkIcon({ url, color }: ExternalLinkIconProps) {
   return (
      <BaseIcon
         as={FaArrowUpRightFromSquare}
         url={url}
         color={color ?? "black"}
      />
   );
}
