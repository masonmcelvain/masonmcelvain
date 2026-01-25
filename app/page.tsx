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
         <p>
            Currently I&apos;m based in Salt Lake City, where I build
            iFixit&apos;s e-commerce storefront and tooling. I graduated from
            Cal Poly San Luis Obispo with a computer science degree in March
            2022.
         </p>
         <SocialIconRow className="mb-12 self-center md:hidden" />
         <h2 className="mb-12 text-center">Me on the web</h2>
         <ProjectGrid projects={projects} />
         <hr aria-orientation="horizontal" className="my-16 border-gray-200" />
         <Collage />
      </main>
   );
}
