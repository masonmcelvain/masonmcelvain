import { cn } from "@/lib/utils";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";
import { MountainProjectIcon } from "./MountainProjectIcon";

export function SocialIconRow({ className }: { className?: string }) {
   return (
      <div className={cn("flex items-center space-x-8", className)}>
         <EnvelopeIcon />
         <GithubIcon
            ariaLabel="Mason's GitHub profile"
            url="https://github.com/masonmcelvain"
         />
         <MountainProjectIcon />
      </div>
   );
}
