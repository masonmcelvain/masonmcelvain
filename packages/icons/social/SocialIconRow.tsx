import { EnvelopeIcon } from "./EnvelopeIcon";
import { GithubIcon } from "./GithubIcon";
import { MountainProjectIcon } from "./MountainProjectIcon";

export function SocialIconRow() {
   return (
      <div className="flex items-center space-x-8">
         <EnvelopeIcon />
         <GithubIcon
            ariaLabel="Mason's GitHub profile"
            url="https://github.com/masonmcelvain"
         />
         <MountainProjectIcon />
      </div>
   );
}
