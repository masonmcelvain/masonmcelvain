import { getBaseMetadata } from "@helpers/app/metadata";
import { Metadata } from "next";
import { default as App } from "./App";
import { ChakraProviders } from "./ChakraProviders";

export const metadata: Metadata = getBaseMetadata({ suffix: "Home" });

export default function Home() {
   return (
      <ChakraProviders>
         <App />
      </ChakraProviders>
   );
}
