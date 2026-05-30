import { SocialIconRow } from "@/packages/icons/social";
import { ProjectGrid } from "@common/components";
import projects from "@data/projects";
import type { Metadata } from "next";
import { Collage } from "./Collage";
import { Hero } from "./Hero";

export const metadata: Metadata = {
   title: "Mason McElvain - Home",
};

export default function Page() {
   return (
      <main className="flex flex-col space-y-8">
         <Hero />
         <SocialIconRow className="mb-12 self-center md:hidden" />
         <h2 className="mb-12 text-center">Me on the web</h2>
         <ProjectGrid projects={projects} />
         <hr aria-orientation="horizontal" className="border-border my-16" />
         <Collage />
      </main>
   );
}
