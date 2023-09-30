"use-client";

import { Grid, GridItem, GridItemProps } from "@chakra-ui/react";
import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import * as React from "react";

type ProjectGridProps = {
   projects: ProjectCardProps[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
   const getLastChildProps = React.useCallback(
      (index: number) => {
         const lastChildProps: GridItemProps = {
            colStart: { base: undefined, lg: 2 },
            colEnd: { base: undefined, lg: 4 },
         };
         const isOddLastChild =
            projects.length % 2 && index === projects.length - 1;
         return isOddLastChild ? lastChildProps : {};
      },
      [projects.length],
   );
   return projects.length ? (
      <Grid
         templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
         gap={8}
         mt={12}
      >
         {projects.map((props, index) => (
            <GridItem
               key={index}
               colSpan={{ base: 1, lg: 2 }}
               {...getLastChildProps(index)}
            >
               <ProjectCard {...props} />
            </GridItem>
         ))}
      </Grid>
   ) : null;
}
