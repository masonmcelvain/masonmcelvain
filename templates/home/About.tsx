import { Divider, Heading, Text } from "@chakra-ui/react";
import { MdxWrapper } from "@components/common/MdxWrapper";
import { HistoryProse } from "@markdown/home";

export function About() {
   return (
      <>
         <Text mt={3}>
            I&apos;m a 23 year old living in San Luis Obispo (he/him). I
            graduated from Cal Poly with a degree in computer science in March
            2022.
         </Text>
         <Heading as="h3" size="lg" my={3}>
            How silicon became my favorite element 🧪
         </Heading>
         <Divider />
         <MdxWrapper>
            <HistoryProse />
         </MdxWrapper>
      </>
   );
}
