"use client";

import { Divider } from "@chakra-ui/react";
import { NextPageWithLayout } from "@pages/_app";

import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

const App: NextPageWithLayout = () => {
   return (
      <>
         <Hero />
         <About />
         <Work />
         <Divider my={16} />
         <Collage />
         <MobileCollage />
      </>
   );
};

export default App;
