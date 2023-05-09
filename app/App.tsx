"use client";

import { Divider } from "@chakra-ui/react";

import { About } from "./About";
import { Collage } from "./Collage";
import { Hero } from "./Hero";
import { MobileCollage } from "./MobileCollage";
import { Work } from "./Work";

export default function App() {
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
}
