import { Text } from "@chakra-ui/react";
import { ProjectGrid } from "@common/components";
import { useProjectsMeta } from "@common/hooks";
import { SectionHeading } from "@ui/typography";

export function Work() {
   const projects = useProjectsMeta();
   return (
      <>
         <div className="flex flex-col space-y-8">
            <SectionHeading>What I&apos;ve been working on 🛠️</SectionHeading>
            <Text>
               A deeper dive into some of the projects and teams I&apos;ve
               devoted my time to.
            </Text>
         </div>
         <ProjectGrid projects={projects} />
      </>
   );
}
