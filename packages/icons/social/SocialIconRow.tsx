import { cn } from "@/lib/utils";
import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";
import { MountainProjectIcon } from "./MountainProjectIcon";
import { YouTubeIcon } from "./YouTubeIcon";

export function SocialIconRow({ className }: { className?: string }) {
   return (
      <div className={cn("flex items-center gap-4 sm:gap-8", className)}>
         <EnvelopeIcon />
         <GithubIcon
            ariaLabel="Mason's GitHub profile"
            url="https://github.com/masonmcelvain"
         />
         <YouTubeIcon />
         <MountainProjectIcon />
      </div>
   );
}
