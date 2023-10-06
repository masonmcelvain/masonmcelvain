import Link from "next/link";
import { IconType } from "react-icons";

type BaseIconProps = {
   ariaLabel: string;
   Icon: IconType;
   color: string;
   url: string;
};

export function BaseIcon({ ariaLabel, Icon, color, url }: BaseIconProps) {
   return (
      <Link aria-label={ariaLabel} href={url} target="_blank">
         <div className="opacity-100 transition-opacity hover:opacity-100 lg:opacity-30">
            <Icon className="h-8 w-8" color={color} />
         </div>
      </Link>
   );
}
