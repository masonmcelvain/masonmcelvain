import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BaseIcon } from "./BaseIcon";

type ExternalLinkIconProps = {
   ariaLabel: string;
   width?: string;
   height?: string;
   url: string;
   color?: string;
};
export function ExternalLinkIcon({
   ariaLabel,
   width,
   height,
   url,
   color,
}: ExternalLinkIconProps) {
   return (
      <BaseIcon
         ariaLabel={ariaLabel}
         Icon={FaArrowUpRightFromSquare}
         color={color ?? "black"}
         width={width}
         height={height}
         url={url}
      />
   );
}
