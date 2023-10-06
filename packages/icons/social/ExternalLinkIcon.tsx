import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BaseIcon } from "./BaseIcon";

type ExternalLinkIconProps = {
   ariaLabel: string;
   url: string;
   color?: string;
};
export function ExternalLinkIcon({
   ariaLabel,
   url,
   color,
}: ExternalLinkIconProps) {
   return (
      <BaseIcon
         ariaLabel={ariaLabel}
         Icon={FaArrowUpRightFromSquare}
         color={color ?? "black"}
         url={url}
      />
   );
}
