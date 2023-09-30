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
         <Work />
         <hr aria-orientation="horizontal" className="my-16 opacity-60" />
         <Collage />
         <MobileCollage />
      </div>
   );
}
