import Link from "next/link";
import { IconType } from "react-icons";

type BaseIconProps = {
   ariaLabel: string;
   Icon: IconType;
   color: string;
   width?: string;
   height?: string;
   url: string;
};

export function BaseIcon({
   ariaLabel,
   Icon,
   color,
   width,
   height,
   url,
}: BaseIconProps) {
   const w = width ?? "w-8";
   const h = height ?? "h-8";
   return (
      <Link aria-label={ariaLabel} href={url} target="_blank">
         <div className="opacity-100 transition-opacity hover:opacity-100 lg:opacity-30">
            <Icon className={`${w} ${h}`} color={color} />
         </div>
      </Link>
   );
}
