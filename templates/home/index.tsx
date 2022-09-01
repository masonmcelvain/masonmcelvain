import { Divider } from "@chakra-ui/react";
import { Footer, MetaTitle } from "@common/components";
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
         <Divider my={16} />
         <Collage />
         <MobileCollage />
         <Footer />
         <MetaTitle addendum="Home" />
      </>
   );
}
