import { Heading } from "@chakra-ui/react";
import { MdxWrapper } from "@components/common/MdxWrapper";
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
