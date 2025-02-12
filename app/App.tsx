import { ProjectGrid } from "@common/components";
import projects from "@data/projects";
import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

export default function App() {
   return (
      <div className="flex flex-col space-y-8">
         <Hero />
         <About />
         <>
            <Work />
            <ProjectGrid projects={projects} />
         </>
         <hr aria-orientation="horizontal" className="my-16 border-black/20" />
         <Collage />
         <MobileCollage />
      </div>
   );
}
