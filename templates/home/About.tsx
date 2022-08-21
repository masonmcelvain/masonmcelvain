import { Divider, Heading, Text } from '@chakra-ui/react';

export function About() {
   return (
      <>
         <Text>I'm a 23 year old living in San Luis Obispo.</Text>
         <Heading as="h3" size="lg">
            A byte about myself
         </Heading>
         <Divider />
         <Text>I first learned about computer science...</Text>
      </>
   );
}
