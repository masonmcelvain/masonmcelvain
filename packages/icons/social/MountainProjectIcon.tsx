import MountainProjectLogo from "@public/images/mountain-project-logo.png";
import Image from "next/image";
import Link from "next/link";

export function MountainProjectIcon() {
   return (
      <Link
         aria-label="Mason's Mountain Project profile"
         href="https://www.mountainproject.com/user/201271324/mason-mcelvain"
         target="_blank"
      >
         <div className="opacity-100 transition-opacity hover:opacity-100 lg:opacity-30">
            <Image
               alt="Mason on Mountain Project"
               preload
               src={MountainProjectLogo}
               width="31"
               height="31"
            />
         </div>
      </Link>
   );
}
