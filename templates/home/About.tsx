import { Center, Text } from "@chakra-ui/react";
import { MdxWrapper } from "@ui/components/MdxWrapper";
import { HistoryProse } from "@markdown/home";
import { SectionHeading } from "@ui/components/SectionHeading";
import { SocialIconRow } from "@icons/social";

export function About() {
   return (
      <>
         <Text my={8}>
            I&apos;m a 23 year old living in San Luis Obispo (he/him). I
            graduated from Cal Poly with a degree in computer science in March
            2022.
         </Text>
         <Center>
            <SocialIconRow />
         </Center>
         <SectionHeading>
            How silicon became my favorite element 🧪
         </SectionHeading>
         <MdxWrapper>
            <HistoryProse />
         </MdxWrapper>
      </>
   );
}
