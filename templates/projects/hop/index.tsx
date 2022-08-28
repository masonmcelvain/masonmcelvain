import { Heading } from "@chakra-ui/react";
import { MdxWrapper } from "@ui/components/MdxWrapper";
import { HopProse } from "@markdown/hop";

export function Hop() {
   return (
      <>
         <Heading>Hop</Heading>
         <MdxWrapper>
            <HopProse />
         </MdxWrapper>
      </>
   );
}
