import { ProjectTemplate } from "@common/components";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import IFixitProse from "@markdown/IFixitProse.mdx";

export default function iFixit() {
   return (
      <ProjectTemplate title="iFixit" MDX={IFixitProse}>
         <GithubIcon
            ariaLabel="iFixit's GitHub organization"
            url="https://github.com/iFixit"
            color="#0071ce"
         />
         <ExternalLinkIcon
            ariaLabel="iFixit's website"
            url="https://www.ifixit.com"
            color="#0071ce"
         />
      </ProjectTemplate>
   );
}
