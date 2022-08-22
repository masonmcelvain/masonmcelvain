import { Divider, Heading, Text } from '@chakra-ui/react';
import { HistoryProse } from '@markdown/home';

export function About() {
   return (
      <>
         <Text>
            I&apos;m a 23 year old living in San Luis Obispo. I graduated from
            Cal Poly with a degree in computer science in March 2022.
         </Text>
         <Heading as="h3" size="lg">
            How silicon became my favorite element
         </Heading>
         <Divider />
         <HistoryProse />
      </>
   );
}
