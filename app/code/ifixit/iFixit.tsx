import { ProjectTemplate } from "@common/components";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import { IFixitProse } from "@markdown/ifixit";

export default function iFixit() {
   return (
      <ProjectTemplate title="iFixit" MDX={IFixitProse}>
         <GithubIcon url="https://github.com/iFixit" color="#0071ce" />
         <ExternalLinkIcon url="https://www.ifixit.com" color="#0071ce" />
      </ProjectTemplate>
   );
}
