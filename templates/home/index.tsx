import { Divider } from "@chakra-ui/react";
import { MetaTitle } from "@common/meta";
import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

export function Home() {
   return (
      <>
         <Hero />
         <About />
         <Work />
         <Divider my={10} />
         <Collage />
         <MobileCollage />
         <MetaTitle addendum="Home" />
      </>
   );
}
