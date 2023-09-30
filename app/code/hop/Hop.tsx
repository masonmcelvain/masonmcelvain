"use client";

import { ProjectTemplate } from "@common/components";
import { ExternalLinkIcon, GithubIcon } from "@icons/social";
import { HopProse } from "@markdown/hop";

export default function Hop() {
   return (
      <ProjectTemplate title="Hop" MDX={HopProse}>
         <GithubIcon url="https://github.com/masonmcelvain/hop" />
         <ExternalLinkIcon url="https://usehop.app" />
      </ProjectTemplate>
   );
}
