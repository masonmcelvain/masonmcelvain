import { ProjectTemplate } from "@common/components";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import CSAIProse from "@markdown/CSAIProse.mdx";

export default function CSAI() {
   return (
      <ProjectTemplate title="CSAI" MDX={CSAIProse}>
         <GithubIcon
            ariaLabel="CSAI's GitHub organization"
            url="https://github.com/calpoly-csai"
            color="#6d73b0"
         />
         <ExternalLinkIcon
            ariaLabel="CSAI's website"
            url="https://csaicalpoly.com"
            color="#6d73b0"
         />
      </ProjectTemplate>
   );
}
