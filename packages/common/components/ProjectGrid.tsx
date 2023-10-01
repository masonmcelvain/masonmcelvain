import { ProjectCard, ProjectCardProps } from "./ProjectCard";
import * as React from "react";

type ProjectGridProps = {
   projects: ProjectCardProps[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
   const lastChildClass = React.useCallback(
      (index: number) => {
         const isOddLastChild =
            projects.length % 2 && index === projects.length - 1;
         return isOddLastChild ? "lg:col-start-2 lg:col-end-4" : "";
      },
      [projects.length],
   );
   return projects.length ? (
      <div className="mt-12 grid grid-cols-[repeat(1,1fr)] gap-8 lg:grid-cols-[repeat(4,1fr)]">
         {projects.map((props, index) => (
            <div
               key={index}
               className={`col-span-1 lg:col-span-2 ${lastChildClass(index)}`}
            >
               <ProjectCard {...props} />
            </div>
         ))}
      </div>
   ) : null;
}
