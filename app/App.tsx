import { ProjectGrid } from "@common/components";
import projects from "@data/projects";
import { Collage } from "./Collage";
import { Hero } from "./Hero";

export default function App() {
   return (
      <div className="flex flex-col space-y-8">
         <Hero />
         <div className="flex flex-col space-y-8">
            <p>
               Currently based in Salt Lake City. I graduated from Cal Poly San
               Luis Obispo with a degree in computer science in March 2022.
            </p>
         </div>
         <h2 className="mb-12">What I&apos;ve been working on 🛠️</h2>
         <ProjectGrid projects={projects} />
         <hr aria-orientation="horizontal" className="my-16 border-gray-200" />
         <Collage />
      </div>
   );
}
