import { Text } from "@chakra-ui/react";
import { ProjectGrid } from "@common/components";
import { useProjectsMeta } from "@common/hooks";
import { SectionHeading } from "@ui/typography";

export function Work() {
   const projects = useProjectsMeta();
   return (
      <>
         <SectionHeading mt={8}>
            What I&apos;ve been working on 🛠️
         </SectionHeading>
         <Text mt={8}>
            A deeper dive into some of the projects and teams I&apos;ve devoted
            my time to.
         </Text>
         <ProjectGrid projects={projects} />
      </>
   );
}
