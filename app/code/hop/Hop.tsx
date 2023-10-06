import { ProjectTemplate } from "@common/components";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import HopProse from "@markdown/HopProse.mdx";

export default function Hop() {
   return (
      <ProjectTemplate title="Hop" MDX={HopProse}>
         <GithubIcon
            ariaLabel="Hop's GitHub repository"
            url="https://github.com/masonmcelvain/hop"
         />
         <ExternalLinkIcon
            ariaLabel="Hop's landing page"
            url="https://usehop.app"
         />
      </ProjectTemplate>
   );
}
