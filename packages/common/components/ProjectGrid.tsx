import { ProjectCard } from "./ProjectCard";
import type { ProjectCardProps } from "./ProjectCard";

type ProjectGridProps = {
   projects: ProjectCardProps[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
   return projects.length ? (
      <div className="mt-12 grid grid-cols-[repeat(1,1fr)] gap-8 lg:grid-cols-[repeat(4,1fr)]">
         {projects.map((props, index) => (
            <div
               key={index}
               className="col-span-1 lg:col-span-2 lg:last:odd:col-start-2 lg:last:odd:col-end-4"
            >
               <ProjectCard {...props} />
            </div>
         ))}
      </div>
   ) : null;
}
