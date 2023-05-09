import { Box, Center, Text } from "@chakra-ui/react";
import { SocialIconRow } from "@icons/social";
import { HistoryProse } from "@markdown/home";
import { SectionHeading } from "@ui/typography";

export function About() {
   return (
      <>
         <Text mt={8}>
            I&apos;m a 24 year old living in San Luis Obispo (he/him). I
            graduated from Cal Poly with a degree in computer science in March
            2022.
         </Text>
         <Center mt={8}>
            <SocialIconRow />
         </Center>
         <SectionHeading>
            How silicon became my favorite element 🧪
         </SectionHeading>
         <Box mt={8}>
            <HistoryProse />
         </Box>
      </>
   );
}
